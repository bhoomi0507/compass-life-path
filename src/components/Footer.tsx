import { Link } from "react-router-dom";
import logo from "@/assets/herpath-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="HerPath logo" className="h-7 w-7 dark:invert" />
            <span className="font-display text-base font-semibold text-foreground">HerPath</span>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link to="/profile" className="text-sm text-muted-foreground hover:text-foreground font-body transition-colors">Get Started</Link>
            <Link to="/recommendations" className="text-sm text-muted-foreground hover:text-foreground font-body transition-colors">Careers</Link>
            <Link to="/opportunities" className="text-sm text-muted-foreground hover:text-foreground font-body transition-colors">Opportunities</Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground font-body">© 2026 HerPath. Empowering women to discover flexible careers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;