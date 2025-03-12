
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSupabaseAuth } from '@/contexts/SupabaseAuthProvider';
import { supabase } from '@/lib/supabase';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isPhoneRegister, setIsPhoneRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { signInWithGoogle, user } = useSupabaseAuth();
  const navigate = useNavigate();

  const handleEmailRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (user) {
      toast({
        title: "Already registered",
        description: "You are already authenticated",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      // First try RapidAPI signup
      const rapidApiSignupResponse = await fetch('https://login-signup.p.rapidapi.com/public/v1/signup.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'x-rapidapi-host': 'login-signup.p.rapidapi.com',
          'x-rapidapi-key': '469d65be43mshd338ce4bf882d0ap1b6664jsneb8014d73e4a',
        },
        body: new URLSearchParams({
          'api_key': '394e9338b73a9f061b1968ceaa050a',
          'name': name,
          'email': email,
          'password': password
        })
      });
      
      const data = await rapidApiSignupResponse.json();
      console.log('RapidAPI signup response:', data);
      
      // If RapidAPI signup fails, fallback to Supabase signup
      if (!data.success) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: name,
            }
          }
        });
        
        if (error) throw error;
      }
      
      toast({
        title: "Registration successful",
        description: "Please check your email for verification instructions",
      });
      
      // Clear form
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setAcceptTerms(false);
      
      // Navigate to login page
      navigate('/login');
      
    } catch (error: any) {
      toast({
        title: "Registration failed",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    if (user) {
      toast({
        title: "Already logged in",
        description: "You are already authenticated",
      });
      return;
    }

    try {
      setIsLoading(true);
      await signInWithGoogle();
      // No need to show toast here as it will redirect
    } catch (error: any) {
      toast({
        title: "Registration failed",
        description: error.message,
        variant: "destructive"
      });
      setIsLoading(false);
    }
  };

  const handlePhoneRegister = async () => {
    if (!acceptTerms) {
      toast({
        title: "Error",
        description: "Please accept the terms of service",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        phone: phoneNumber
      });
      
      if (error) throw error;
      
      toast({
        title: "OTP Sent",
        description: "Please check your phone for the verification code"
      });
    } catch (error: any) {
      toast({
        title: "SMS Verification Failed",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16 flex justify-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-medium tracking-tight text-primary mb-2">
              Create an account
            </h1>
            <p className="text-muted-foreground">
              Join our community of learners today
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-sm">
            {/* Social login buttons */}
            <div className="space-y-4 mb-6">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
                onClick={handleGoogleSignUp}
                disabled={isLoading}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="w-5 h-5">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  <path fill="none" d="M1 1h22v22H1z" />
                </svg>
                Sign up with Google
              </Button>
            </div>

            <div className="relative flex items-center justify-center mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative px-4 bg-card text-sm text-muted-foreground">
                Or continue with
              </div>
            </div>

            {/* Toggle between email and phone registration */}
            <div className="flex mb-6 bg-muted rounded-md p-1">
              <button
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                  !isPhoneRegister ? 'bg-white shadow-sm' : ''
                }`}
                onClick={() => setIsPhoneRegister(false)}
              >
                Email
              </button>
              <button
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                  isPhoneRegister ? 'bg-white shadow-sm' : ''
                }`}
                onClick={() => setIsPhoneRegister(true)}
              >
                Phone
              </button>
            </div>

            {!isPhoneRegister ? (
              <form onSubmit={handleEmailRegister} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground block">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground block">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-foreground block">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    minLength={8}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="confirm-password" className="text-sm font-medium text-foreground block">
                    Confirm Password
                  </label>
                  <Input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    minLength={8}
                  />
                </div>

                <div className="flex items-start">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    required
                    className="h-4 w-4 mt-1 text-accent focus:ring-accent border-border rounded"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground">
                    I agree to the{' '}
                    <Link to="/terms" className="text-accent hover:text-accent/80 transition-colors">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-accent hover:text-accent/80 transition-colors">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground block">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    placeholder="+91 9876543210"
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter your phone number with country code (e.g., +91 for India)
                  </p>
                </div>

                <div className="flex items-start">
                  <input
                    id="terms-sms"
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    required
                    className="h-4 w-4 mt-1 text-accent focus:ring-accent border-border rounded"
                  />
                  <label htmlFor="terms-sms" className="ml-2 block text-sm text-muted-foreground">
                    I agree to the{' '}
                    <Link to="/terms" className="text-accent hover:text-accent/80 transition-colors">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-accent hover:text-accent/80 transition-colors">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <Button 
                  onClick={handlePhoneRegister} 
                  className="w-full"
                  disabled={isLoading || !acceptTerms}
                >
                  {isLoading ? "Sending OTP..." : "Register with Phone"}
                </Button>
              </div>
            )}

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link to="/login" className="text-accent hover:text-accent/80 transition-colors">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
