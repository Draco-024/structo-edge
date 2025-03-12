import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSupabaseAuth } from '@/contexts/SupabaseAuthProvider';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';
import { LogIn, Mail, Lock, Phone } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isPasswordLogin, setIsPasswordLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { signInWithGoogle, user } = useSupabaseAuth();
  const navigate = useNavigate();

  const handleEmailPasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (user) {
      toast({
        title: "Already logged in",
        description: "You are already authenticated",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) throw error;
      
      toast({
        title: "Login successful",
        description: "Welcome back to StructoEdge!",
      });
      
      setEmail('');
      setPassword('');
      navigate('/');
      
    } catch (error: any) {
      toast({
        title: "Login failed",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
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
        title: "Login failed",
        description: error.message,
        variant: "destructive"
      });
      setIsLoading(false);
    }
  };

  const handleSMSLogin = async () => {
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
      <div className="min-h-screen container mx-auto px-4 md:px-6 pt-24 pb-16 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-3">
              Welcome back
            </h1>
            <p className="text-muted-foreground text-lg">
              Continue your learning journey
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg animate-scale-in backdrop-blur-sm">
            <div className="space-y-6">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-3 h-12 text-base transition-all duration-300 hover:scale-[1.02] rounded-xl"
                onClick={handleGoogleLogin}
                disabled={isLoading}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </Button>

              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative px-4 bg-card text-sm text-muted-foreground">
                  Or continue with
                </div>
              </div>

              <div className="flex bg-muted rounded-xl p-1">
                <button
                  className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isPasswordLogin ? 'bg-white shadow-sm' : ''
                  }`}
                  onClick={() => setIsPasswordLogin(true)}
                >
                  Password
                </button>
                <button
                  className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                    !isPasswordLogin ? 'bg-white shadow-sm' : ''
                  }`}
                  onClick={() => setIsPasswordLogin(false)}
                >
                  SMS OTP
                </button>
              </div>

              {isPasswordLogin ? (
                <form onSubmit={handleEmailPasswordLogin} className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <label htmlFor="email" className="text-sm font-medium text-foreground block mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="pl-10 h-12 rounded-xl"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <label htmlFor="password" className="text-sm font-medium text-foreground">
                          Password
                        </label>
                        <Link to="/forgot-password" className="text-sm text-accent hover:text-accent/80 transition-colors">
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="pl-10 h-12 rounded-xl"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-4 w-4 text-accent focus:ring-accent border-border rounded-md"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                      Remember me
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 text-base transition-all duration-300 hover:scale-[1.02] rounded-xl"
                    disabled={isLoading}
                  >
                    <LogIn className="mr-2 h-5 w-5" />
                    {isLoading ? "Signing in..." : "Sign in"}
                  </Button>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground block mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        className="pl-10 h-12 rounded-xl"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Enter your phone number with country code (e.g., +91 for India)
                    </p>
                  </div>

                  <Button 
                    onClick={handleSMSLogin} 
                    className="w-full h-12 text-base transition-all duration-300 hover:scale-[1.02] rounded-xl"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending OTP..." : "Send OTP"}
                  </Button>
                </div>
              )}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/register" className="text-accent hover:text-accent/80 transition-colors font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
