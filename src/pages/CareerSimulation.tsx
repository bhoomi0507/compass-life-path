import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { CheckCircle2, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";

const questions = [
  { id: 1, prompt: "Write a short explanation (2–3 sentences) of why sleep is important for productivity." },
  { id: 2, prompt: "Write a short, catchy headline for an article about remote work." },
];

const getScore = (answers: string[]) => {
  let total = 0;
  answers.forEach((a) => {
    const len = a.trim().length;
    if (len > 120) total += 4.5;
    else if (len > 60) total += 3.5;
    else if (len > 25) total += 2.5;
    else total += 1;
  });
  return Math.min(10, Math.round(total * 10) / 10);
};

const getFeedback = (score: number) => {
  if (score >= 8) return {
    strengths: "Excellent structure, clear communication, and strong persuasive tone.",
    suggestions: "Try adding specific data or statistics to make your writing even more compelling.",
    message: "Impressive work! You have a natural talent for writing.",
  };
  if (score >= 6) return {
    strengths: "Good structure and clear communication style.",
    suggestions: "Consider adding specific examples and expanding your points with more detail.",
    message: "You're on the right track. With practice, you can improve quickly!",
  };
  return {
    strengths: "You've shown initiative and a willingness to try.",
    suggestions: "Try writing longer, more detailed responses. Practice expressing your ideas fully.",
    message: "Every expert started as a beginner. Keep practicing!",
  };
};

const CareerSimulation = () => {
  const [answers, setAnswers] = useState<string[]>(["", ""]);
  const [currentQ, setCurrentQ] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const updateAnswer = (idx: number, val: string) => {
    const copy = [...answers];
    copy[idx] = val;
    setAnswers(copy);
  };

  const score = getScore(answers);
  const feedback = getFeedback(score);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Career Simulation</h1>
            <p className="text-muted-foreground font-body">Try a few short tasks from this career to see if you enjoy the work.</p>
          </div>

          {!submitted ? (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-2">
                {questions.map((_, i) => (
                  <div key={i} className={`h-2 flex-1 rounded-full transition-colors duration-300 ${i <= currentQ ? "bg-primary" : "bg-muted"}`} />
                ))}
              </div>
              <p className="text-xs text-muted-foreground font-body text-center">Question {currentQ + 1} of {questions.length}</p>

              <div className="compass-card space-y-5">
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Content Writing Simulation</h3>
                  <p className="text-sm text-muted-foreground font-body">{questions[currentQ].prompt}</p>
                </div>
                <textarea
                  value={answers[currentQ]}
                  onChange={(e) => updateAnswer(currentQ, e.target.value)}
                  placeholder="Start writing here..."
                  rows={6}
                  className="w-full rounded-2xl border border-input bg-background p-4 font-body text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <div className="flex gap-3">
                  {currentQ > 0 && (
                    <Button variant="hero-outline" size="lg" className="flex-1" onClick={() => setCurrentQ(currentQ - 1)}>
                      Back
                    </Button>
                  )}
                  {currentQ < questions.length - 1 ? (
                    <Button variant="hero" size="lg" className="flex-1" onClick={() => setCurrentQ(currentQ + 1)} disabled={answers[currentQ].trim().length < 10}>
                      Next <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button variant="hero" size="lg" className="flex-1" onClick={() => setSubmitted(true)} disabled={answers[currentQ].trim().length < 10}>
                      Submit Simulation
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="compass-card text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">Simulation Complete!</h3>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="font-display text-3xl font-bold text-primary">{score}/10</span>
                </div>

                <div className="text-left space-y-4 max-w-md mx-auto">
                  <div>
                    <h4 className="text-sm font-body font-semibold text-foreground mb-1">💪 Strengths</h4>
                    <p className="text-sm text-muted-foreground font-body">{feedback.strengths}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-body font-semibold text-foreground mb-1">💡 Suggestions</h4>
                    <p className="text-sm text-muted-foreground font-body">{feedback.suggestions}</p>
                  </div>
                </div>

                <p className="text-sm text-primary font-body font-medium mt-4">{feedback.message}</p>
              </div>
              <Button variant="hero" size="lg" asChild>
                <Link to="/recommendations"><ArrowLeft className="mr-2 h-4 w-4" /> Return to Career Recommendations</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerSimulation;
