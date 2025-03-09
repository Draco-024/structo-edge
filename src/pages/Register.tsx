
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { useToast } from "@/components/ui/use-toast";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isPhoneRegister, setIsPhoneRegister] = useState(false);
  const { toast } = useToast();
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isAuthenticated) {
      toast({
        title: "Already registered",
        description: "You are already authenticated",
      });
      return;
    }

    if (!isPhoneRegister) {
      if (password !== confirmPassword) {
        toast({
          title: "Error",
          description: "Passwords do not match",
          variant: "destructive",
        });
        return;
      }
      
      // In a real app, you would handle registration here
      toast({
        title: "Registration successful",
        description: "Welcome to StructoEdge!",
      });
      
      // Clear form
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setAcceptTerms(false);
    } else {
      // Use Auth0 for phone registration
      loginWithRedirect({
        authorizationParams: {
          screen_hint: 'signup',
          connection: 'sms',
          phoneNumber: phoneNumber
        }
      });
    }
  };

  const handlePhoneRegister = () => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup',
        connection: 'sms',
      }
    });
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
              <form onSubmit={handleSubmit} className="space-y-5">
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
                >
                  Create Account
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
                  {isLoading ? "Loading..." : "Register with Phone"}
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
