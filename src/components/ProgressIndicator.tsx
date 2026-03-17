import { cn } from "@/lib/utils";

interface ProgressIndicatorProps {
  currentStep: number;
  steps: string[];
}

const ProgressIndicator = ({ currentStep, steps }: ProgressIndicatorProps) => {
  return (
    <div className="flex items-center justify-center gap-3 mb-12">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-body font-medium transition-all duration-300",
                index + 1 <= currentStep
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {index + 1}
            </div>
            <span
              className={cn(
                "text-sm font-body hidden sm:inline transition-colors duration-300",
                index + 1 <= currentStep ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={cn(
                "w-12 h-0.5 transition-colors duration-300",
                index + 1 < currentStep ? "bg-primary" : "bg-border"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressIndicator;
