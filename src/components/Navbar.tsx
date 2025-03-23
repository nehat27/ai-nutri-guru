
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const isAuthenticated = localStorage.getItem("authenticated") === "true";
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  
  const isLandingPage = location.pathname === "/";
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
        scrolled 
          ? "py-3 glass shadow-lg" 
          : isLandingPage 
            ? "py-6 bg-transparent" 
            : "py-4 bg-background/95 backdrop-blur-sm border-b"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-foreground transition-all hover:opacity-80"
        >
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-full bg-primary/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
          <span className="font-bold text-xl">NutriAI</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" label="Home" />
          <NavLink to="/about" label="About" />
          {isAuthenticated && <NavLink to="/dashboard" label="Dashboard" />}
        </nav>
        
        <div className="flex items-center space-x-3">
          {isAuthenticated ? (
            <>
              <Button 
                variant="link" 
                onClick={handleLogout}
                className="text-muted-foreground hover:text-foreground"
              >
                Logout
              </Button>
              <Button asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="ghost">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`relative px-3 py-2 text-sm font-medium transition-colors ${
        isActive 
          ? "text-foreground" 
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
      )}
    </Link>
  );
};

export default Navbar;
