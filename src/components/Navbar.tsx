
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, Award, User, LogOut } from 'lucide-react';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout, loginWithRedirect } = useAuth0();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Certification', path: '/certification' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Community', path: '/community' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out',
        isScrolled
          ? 'py-3 bg-white/90 backdrop-blur-sm shadow-sm'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-medium tracking-tight text-primary transition-all duration-300 ease-out"
        >
          Structo<span className="text-accent">Edge</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-out relative group',
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent mt-1 animate-fade-in" />
              )}
              <span className="absolute bottom-0 left-1/2 right-1/2 h-0.5 bg-accent mt-1 group-hover:left-0 group-hover:right-0 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="flex items-center space-x-2">
              <div className="hidden md:flex items-center space-x-1 mr-2">
                <div className="text-sm font-medium">
                  Hi, {user?.name || user?.email || "User"}
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => logout({ 
                  logoutParams: { returnTo: window.location.origin } 
                })}
                className="flex items-center"
              >
                <LogOut className="h-4 w-4 mr-1" />
                <span className="hidden md:inline">Logout</span>
              </Button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-primary hidden md:inline-block transition-all duration-300 ease-out hover:text-accent"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className={cn(
                  'px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-out',
                  isScrolled
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-primary/90 text-white hover:bg-primary'
                )}
              >
                Get Started
              </Link>
            </>
          )}
          
          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'px-4 py-3 rounded-md text-sm font-medium',
                    location.pathname === link.path
                      ? 'bg-muted text-primary'
                      : 'text-muted-foreground hover:bg-muted hover:text-primary'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-border my-2 pt-2">
                {isAuthenticated ? (
                  <>
                    <div className="px-4 py-2 text-sm font-medium">
                      {user?.name || user?.email || "User"}
                    </div>
                    <Button 
                      variant="ghost"
                      className="w-full justify-start px-4 py-3 text-left"
                      onClick={() => logout({ 
                        logoutParams: { returnTo: window.location.origin } 
                      })}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="block px-4 py-3 rounded-md text-sm font-medium text-primary hover:bg-muted"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
