
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { useToast } from "@/components/ui/use-toast";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isPasswordLogin, setIsPasswordLogin] = useState(true);
  const { toast } = useToast();
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isAuthenticated) {
      toast({
        title: "Already logged in",
        description: "You are already authenticated",
      });
      return;
    }

    if (isPasswordLogin) {
      // Regular login form submission
      toast({
        title: "Login successful",
        description: "Welcome back to StructoEdge!",
      });
      
      // Clear form
      setEmail('');
      setPassword('');
    } else {
      // SMS OTP Authentication via Auth0
      loginWithRedirect({
        authorizationParams: {
          connection: 'sms',
          phoneNumber: phoneNumber
        }
      });
    }
  };

  const handleSMSLogin = () => {
    loginWithRedirect({
      authorizationParams: {
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
              Welcome back
            </h1>
            <p className="text-muted-foreground">
              Log in to continue your learning journey
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-sm">
            {/* Toggle between password and OTP login */}
            <div className="flex mb-6 bg-muted rounded-md p-1">
              <button
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                  isPasswordLogin ? 'bg-white shadow-sm' : ''
                }`}
                onClick={() => setIsPasswordLogin(true)}
              >
                Password
              </button>
              <button
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                  !isPasswordLogin ? 'bg-white shadow-sm' : ''
                }`}
                onClick={() => setIsPasswordLogin(false)}
              >
                SMS OTP
              </button>
            </div>

            {isPasswordLogin ? (
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium text-foreground block">
                      Password
                    </label>
                    <Link to="/forgot-password" className="text-sm text-accent hover:text-accent/80 transition-colors">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-accent focus:ring-accent border-border rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                    Remember me
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                >
                  Sign in
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

                <Button 
                  onClick={handleSMSLogin} 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Send OTP"}
                </Button>
              </div>
            )}

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/register" className="text-accent hover:text-accent/80 transition-colors">
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
