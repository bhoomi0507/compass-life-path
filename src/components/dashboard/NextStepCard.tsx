import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

interface NextStepCardProps {
  userName?: string;
  stepsToEarning?: number;
}

const NextStepCard = ({ userName = "there", stepsToEarning = 2 }: NextStepCardProps) => {
  return (
    <div className="compass-card !p-6 md:!p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-accent/[0.03]" />
      <div className="relative">
        <p className="text-sm font-body text-muted-foreground mb-1">Welcome back, {userName} 👋</p>
        <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
          Your Next Step
        </h2>
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/8 border border-primary/15 mb-4">
          <Play className="h-4 w-4 text-primary flex-shrink-0" />
          <p className="text-sm font-body text-foreground">
            Complete Module 2 — <span className="text-muted-foreground">Estimated time: 15 mins</span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs font-body text-primary font-medium">
            ✨ You're {stepsToEarning} steps away from your first earning
          </p>
          <Button variant="hero" size="sm" asChild>
            <Link to="/opportunities">
              Continue <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NextStepCard;
