import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trophy, Star, ArrowRight, RotateCcw } from "lucide-react";
import type { FeedbackData } from "./FeedbackCard";

interface SimulationSummaryProps {
  career: string;
  feedbacks: FeedbackData[];
  onRetry: () => void;
}

const getFitLevel = (avg: number) => {
  if (avg >= 7.5) return { label: "Great Fit! 🎉", color: "text-green-600", message: "You have a natural talent for this career. We recommend jumping into the learning path right away!" };
  if (avg >= 5) return { label: "Moderate Fit 👍", color: "text-amber-500", message: "You show good potential! With some focused learning, you can excel in this career path." };
  return { label: "Explore More 🔍", color: "text-primary", message: "This career might need more exploration. Consider trying other simulations to find your best fit." };
};

const SimulationSummary = ({ career, feedbacks, onRetry }: SimulationSummaryProps) => {
  const avgScore = Math.round((feedbacks.reduce((s, f) => s + f.score, 0) / feedbacks.length) * 10) / 10;
  const fit = getFitLevel(avgScore);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="rounded-2xl border border-border bg-card p-8 shadow-sm text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto">
          <Trophy className="h-10 w-10 text-primary" />
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-1">
            Simulation Complete!
          </h2>
          <p className="text-sm text-muted-foreground font-body">
            Here's how you did in the <span className="font-semibold text-foreground">{career}</span> simulation
          </p>
        </div>

        {/* Overall Score */}
        <div className="py-6 rounded-xl bg-muted/50">
          <span className="font-display text-5xl font-bold text-primary">{avgScore}/10</span>
          <p className={`text-lg font-display font-semibold mt-2 ${fit.color}`}>{fit.label}</p>
        </div>

        {/* Per-task scores */}
        <div className="flex justify-center gap-4">
          {feedbacks.map((f, i) => (
            <div key={i} className="rounded-xl border border-border bg-background px-5 py-3 text-center">
              <p className="text-xs text-muted-foreground font-body mb-1">Task {i + 1}</p>
              <div className="flex items-center justify-center gap-1">
                <Star className="h-4 w-4 text-primary fill-primary" />
                <span className="font-display text-lg font-bold text-foreground">{f.score}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground font-body max-w-md mx-auto">
          {fit.message}
        </p>

        {/* Stats banner */}
        <div className="rounded-xl bg-primary/5 border border-primary/20 p-4">
          <p className="text-xs text-muted-foreground font-body">
            📊 Over <span className="font-semibold text-foreground">60% of students</span> choose careers without real exposure. You're already ahead.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button variant="hero-outline" size="lg" onClick={onRetry}>
            <RotateCcw className="mr-2 h-4 w-4" /> Try Again
          </Button>
          <Button variant="hero" size="lg" asChild>
            <Link to="/learning-path">
              Explore Roadmap <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SimulationSummary;
