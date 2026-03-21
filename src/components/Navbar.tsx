import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import logo from "@/assets/herpath-logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-narrow flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={logo} alt="HerPath logo" className="h-14 w-14 dark:invert" />
          <span className="font-display text-2xl font-semibold text-foreground">HerPath</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-200">Home</Link>
          <a href="/#how-it-works" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-200">How It Works</a>
          <Link to="/dashboard" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-200">Dashboard</Link>
          <Link to="/opportunities" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-200">Opportunities</Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2">
            {mobileOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 pb-6 pt-4 space-y-4">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block text-sm font-body text-foreground">Home</Link>
          <a href="/#how-it-works" onClick={() => setMobileOpen(false)} className="block text-sm font-body text-foreground">How It Works</a>
          <Link to="/dashboard" onClick={() => setMobileOpen(false)} className="block text-sm font-body text-foreground">Dashboard</Link>
          <Link to="/opportunities" onClick={() => setMobileOpen(false)} className="block text-sm font-body text-foreground">Opportunities</Link>
          <div className="flex gap-3 pt-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login" onClick={() => setMobileOpen(false)}>Login</Link>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/signup" onClick={() => setMobileOpen(false)}>Sign Up</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
