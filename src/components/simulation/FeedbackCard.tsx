import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Lightbulb, ThumbsUp } from "lucide-react";

interface FeedbackData {
  score: number;
  strengths: string;
  improvements: string;
  suggestion: string;
}

interface FeedbackCardProps {
  taskNumber: number;
  feedback: FeedbackData;
  isLastTask: boolean;
  onNext: () => void;
}

const getScoreColor = (score: number) => {
  if (score >= 8) return "text-green-600";
  if (score >= 5) return "text-amber-500";
  return "text-red-500";
};

const getScoreLabel = (score: number) => {
  if (score >= 8) return "Excellent";
  if (score >= 6) return "Good";
  if (score >= 4) return "Fair";
  return "Needs Work";
};

const FeedbackCard = ({ taskNumber, feedback, isLastTask, onNext }: FeedbackCardProps) => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-6">
        <div className="text-center">
          <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3">
            <Sparkles className="h-7 w-7 text-primary" />
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground">
            Task {taskNumber} Feedback
          </h3>
        </div>

        {/* Score */}
        <div className="text-center py-4 rounded-xl bg-muted/50">
          <span className={`font-display text-4xl font-bold ${getScoreColor(feedback.score)}`}>
            {feedback.score}/10
          </span>
          <p className="text-sm text-muted-foreground font-body mt-1">
            {getScoreLabel(feedback.score)}
          </p>
        </div>

        {/* Details */}
        <div className="space-y-4">
          <div className="flex gap-3">
            <ThumbsUp className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-body font-semibold text-foreground mb-1">Strengths</h4>
              <p className="text-sm text-muted-foreground font-body">{feedback.strengths}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <TrendingUp className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-body font-semibold text-foreground mb-1">Areas to Improve</h4>
              <p className="text-sm text-muted-foreground font-body">{feedback.improvements}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-body font-semibold text-foreground mb-1">Suggestion</h4>
              <p className="text-sm text-muted-foreground font-body">{feedback.suggestion}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <Button variant="hero" size="lg" onClick={onNext}>
            {isLastTask ? "View Final Results" : "Next Task"}{" "}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export type { FeedbackData };
export default FeedbackCard;
