
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
        </div>
      </div>
    </header>
  );
};

export default Navbar;
