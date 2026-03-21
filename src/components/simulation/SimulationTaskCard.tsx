import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SimulationTaskCardProps {
  taskNumber: number;
  totalTasks: number;
  prompt: string;
  career: string;
  answer: string;
  onAnswerChange: (val: string) => void;
  onSubmit: () => void;
}

const SimulationTaskCard = ({
  taskNumber,
  totalTasks,
  prompt,
  career,
  answer,
  onAnswerChange,
  onSubmit,
}: SimulationTaskCardProps) => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-2 mb-2">
        {Array.from({ length: totalTasks }).map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-colors duration-300 ${
              i < taskNumber ? "bg-primary" : i === taskNumber - 1 ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>
      <p className="text-xs text-muted-foreground font-body text-center">
        Task {taskNumber} of {totalTasks}
      </p>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-5">
        <div>
          <span className="inline-block text-xs font-body font-medium text-primary bg-secondary px-3 py-1 rounded-full mb-3">
            {career} Simulation
          </span>
          <h3 className="font-display text-xl font-semibold text-foreground mb-2">
            Task {taskNumber}
          </h3>
          <p className="text-sm text-muted-foreground font-body">{prompt}</p>
        </div>

        <textarea
          value={answer}
          onChange={(e) => onAnswerChange(e.target.value)}
          placeholder="Start writing your response here..."
          rows={7}
          className="w-full rounded-xl border border-input bg-background p-4 font-body text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
        />

        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground font-body">
            {answer.trim().length > 0
              ? `${answer.trim().split(/\s+/).length} words`
              : "Start typing..."}
          </span>
          <Button
            variant="hero"
            size="lg"
            onClick={onSubmit}
            disabled={answer.trim().length < 15}
          >
            Submit Answer <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SimulationTaskCard;
