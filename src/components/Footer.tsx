import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/herpath-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 py-16">
      <div className="container-narrow">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="HerPath logo" className="h-12 w-12 dark:invert" />
              <span className="font-display text-lg font-semibold text-foreground">HerPath</span>
            </div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-sm">
              Discover careers that grow with your life. A platform designed for women exploring flexible career paths.
            </p>
          </div>
          <div>
            <h4 className="font-body text-sm font-semibold text-foreground mb-4">Platform</h4>
            <div className="space-y-2">
              <Link to="/profile" className="block text-sm text-muted-foreground hover:text-foreground font-body transition-colors">Get Started</Link>
              <Link to="/recommendations" className="block text-sm text-muted-foreground hover:text-foreground font-body transition-colors">Careers</Link>
              <Link to="/courses" className="block text-sm text-muted-foreground hover:text-foreground font-body transition-colors">Courses</Link>
              <Link to="/opportunities" className="block text-sm text-muted-foreground hover:text-foreground font-body transition-colors">Opportunities</Link>
            </div>
          </div>
          <div>
            <h4 className="font-body text-sm font-semibold text-foreground mb-4">Help & Support</h4>
            <div className="space-y-3">
              <a href="mailto:support@herpath.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground font-body transition-colors">
                <Mail className="h-4 w-4 text-primary" /> support@herpath.com
              </a>
              <a href="tel:+12345678900" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground font-body transition-colors">
                <Phone className="h-4 w-4 text-primary" /> +1 234 567 8900
              </a>
              <p className="text-xs text-muted-foreground font-body leading-relaxed mt-2">
                Need help choosing a career path or understanding the platform? Our support team is here to help you.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-body">© 2026 HerPath. Empowering women to discover flexible careers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
