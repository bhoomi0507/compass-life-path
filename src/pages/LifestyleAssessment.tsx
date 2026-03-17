import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ProgressIndicator from "@/components/ProgressIndicator";
import { AlertCircle, AlertTriangle } from "lucide-react";

const LifestyleAssessment = () => {
  const navigate = useNavigate();
  const [hours, setHours] = useState("");
  const [days, setDays] = useState("");
  const [workTime, setWorkTime] = useState("");
  const [workStyle, setWorkStyle] = useState("");
  const [incomeGoal, setIncomeGoal] = useState("");
  const [showError, setShowError] = useState(false);

  const isValid = hours && days && workTime && workStyle && incomeGoal;

  // Warning: high income goal + low availability
  const showWarning =
    incomeGoal === "80k+" && (hours === "1-2" || hours === "2-3") ;

  const handleSubmit = () => {
    if (!isValid) {
      setShowError(true);
      return;
    }
    navigate("/recommendations");
  };

  const RadioTile = ({ label, value, selected, onSelect }: { label: string; value: string; selected: string; onSelect: (v: string) => void }) => (
    <button
      onClick={() => { onSelect(value); setShowError(false); }}
      className={`px-5 py-3 rounded-2xl text-sm font-body transition-all duration-200 border ${
        selected === value
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-card text-foreground border-border hover:border-primary"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="max-w-2xl mx-auto px-6">
          <ProgressIndicator currentStep={2} steps={["Profile", "Lifestyle", "Career Matches"]} />

          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Your Lifestyle & Availability</h1>
            <p className="text-muted-foreground font-body">We recommend careers that realistically fit your schedule. Please answer all questions below.</p>
          </div>

          {showError && !isValid && (
            <div className="flex items-center gap-2 p-4 mb-8 rounded-2xl bg-destructive/10 border border-destructive/20 text-destructive text-sm font-body">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              Please complete all required fields before continuing.
            </div>
          )}

          <div className="space-y-10">
            <div className="space-y-2">
              <label className="text-sm font-body font-medium text-foreground">Hours available per day <span className="text-destructive">*</span></label>
              <p className="text-xs text-muted-foreground font-body">How many hours can you dedicate to work each day?</p>
              <select value={hours} onChange={(e) => { setHours(e.target.value); setShowError(false); }} className="w-full h-12 rounded-2xl border border-input bg-background px-4 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">Select hours</option>
                <option value="1-2">1–2 hours</option>
                <option value="2-3">2–3 hours</option>
                <option value="3-4">3–4 hours</option>
                <option value="4+">4+ hours</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-body font-medium text-foreground">Days available per week <span className="text-destructive">*</span></label>
              <p className="text-xs text-muted-foreground font-body">How many days per week can you work?</p>
              <select value={days} onChange={(e) => { setDays(e.target.value); setShowError(false); }} className="w-full h-12 rounded-2xl border border-input bg-background px-4 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">Select days</option>
                <option value="1-2">1–2 days</option>
                <option value="3-4">3–4 days</option>
                <option value="5">5 days</option>
                <option value="6-7">6–7 days</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-body font-medium text-foreground">Preferred working time <span className="text-destructive">*</span></label>
              <p className="text-xs text-muted-foreground font-body">When do you prefer to work during the day?</p>
              <div className="flex flex-wrap gap-3">
                {["Morning", "Afternoon", "Evening", "Flexible"].map((t) => (
                  <RadioTile key={t} label={t} value={t.toLowerCase()} selected={workTime} onSelect={setWorkTime} />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-body font-medium text-foreground">Work style preference <span className="text-destructive">*</span></label>
              <p className="text-xs text-muted-foreground font-body">Do you prefer working alone or with others?</p>
              <div className="flex flex-wrap gap-3">
                {["Independent work", "Working with people", "Both"].map((s) => (
                  <RadioTile key={s} label={s} value={s.toLowerCase()} selected={workStyle} onSelect={setWorkStyle} />
                ))}
              </div>
            </div>

            {/* Income Goal */}
            <div className="space-y-3">
              <label className="text-sm font-body font-medium text-foreground">Income Goal <span className="text-destructive">*</span></label>
              <p className="text-xs text-muted-foreground font-body">What monthly income would you like to achieve? This helps us recommend careers and learning paths that match your financial goals.</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "₹10k – ₹20k", value: "10k-20k", desc: "Side income" },
                  { label: "₹20k – ₹40k", value: "20k-40k", desc: "Part-time work" },
                  { label: "₹40k – ₹80k", value: "40k-80k", desc: "Stable remote work" },
                  { label: "₹80k+", value: "80k+", desc: "Career-level income" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => { setIncomeGoal(opt.value); setShowError(false); }}
                    className={`flex flex-col items-center px-5 py-3 rounded-2xl text-sm font-body transition-all duration-200 border ${
                      incomeGoal === opt.value
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card text-foreground border-border hover:border-primary"
                    }`}
                  >
                    <span className="font-semibold">{opt.label}</span>
                    <span className={`text-xs mt-0.5 ${incomeGoal === opt.value ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {showWarning && (
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-accent/50 border border-accent text-sm font-body text-foreground">
                <AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p>Based on your availability ({hours} hrs/day), reaching ₹80k+ may take longer. You may want to explore scalable options like freelancing or online businesses.</p>
              </div>
            )}

            <Button
              variant="hero"
              size="xl"
              className="w-full"
              onClick={handleSubmit}
              disabled={showError && !isValid}
            >
              Find My Career Matches
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifestyleAssessment;
