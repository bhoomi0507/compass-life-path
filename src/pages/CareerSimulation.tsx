import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import SimulationTaskCard from "@/components/simulation/SimulationTaskCard";
import FeedbackCard, { type FeedbackData } from "@/components/simulation/FeedbackCard";
import SimulationSummary from "@/components/simulation/SimulationSummary";

// ── Career-specific tasks ──────────────────────────────
interface Task { prompt: string; keywords: string[] }

const CAREER_TASKS: Record<string, Task[]> = {
  "Content Writer": [
    { prompt: "Write a short, engaging blog introduction (3–5 sentences) on the topic: \"Benefits of Morning Exercise\".", keywords: ["exercise", "morning", "health", "routine", "energy", "productivity", "habit"] },
    { prompt: "Rewrite the following paragraph professionally:\n\n\"waking up early is good. u should do it. it makes u feel nice and stuff. many ppl dont do it but they should.\"", keywords: ["waking", "early", "benefits", "individuals", "well-being", "practice", "improve"] },
  ],
  "UI/UX Designer": [
    { prompt: "Imagine a mobile app with a cluttered home screen: tiny text, no spacing, 12 buttons with no labels, and a bright red background. Write 4–5 specific UI improvement suggestions.", keywords: ["spacing", "contrast", "hierarchy", "readable", "whitespace", "labels", "color", "navigation", "font", "layout"] },
    { prompt: "Describe a wireframe for a simple login page. Include what elements you'd place, where, and why.", keywords: ["input", "password", "button", "logo", "centered", "forgot", "signup", "field", "form", "placeholder"] },
  ],
  "Data Analyst": [
    { prompt: "A company's monthly sales data shows: Jan ₹1L, Feb ₹1.5L, Mar ₹0.8L, Apr ₹2L, May ₹1.2L. Write a short analysis (3–5 sentences) identifying the trend and a possible reason for March's dip.", keywords: ["trend", "decline", "increase", "march", "seasonal", "analysis", "growth", "drop", "sales", "revenue"] },
    { prompt: "You're given survey results: 70% of users prefer mobile over desktop. Suggest 3 data-driven recommendations for a product team.", keywords: ["mobile", "responsive", "optimize", "user", "experience", "design", "recommendation", "data", "prioritize"] },
  ],
  "AI Product Manager": [
    { prompt: "Write a short product brief (4–6 sentences) for an AI-powered study planner app for college students.", keywords: ["AI", "student", "schedule", "personalized", "learning", "feature", "goal", "productivity", "plan"] },
    { prompt: "List 3 key metrics (KPIs) you would track for an AI chatbot product, and explain why each matters.", keywords: ["retention", "satisfaction", "response", "accuracy", "engagement", "metric", "user", "conversion", "time"] },
  ],
  "Prompt Engineer": [
    { prompt: "Write a detailed prompt that would make an AI generate a professional LinkedIn summary for a recent graduate.", keywords: ["LinkedIn", "summary", "graduate", "skills", "experience", "tone", "professional", "achievements"] },
    { prompt: "Rewrite this vague prompt into a clear, specific one:\n\n\"Write something about dogs.\"", keywords: ["specific", "audience", "tone", "length", "purpose", "breed", "topic", "format", "context"] },
  ],
};

const DEFAULT_CAREER = "Content Writer";

// ── Scoring logic ──────────────────────────────────────
const scoreFeedback = (answer: string, keywords: string[]): FeedbackData => {
  const text = answer.toLowerCase();
  const wordCount = text.trim().split(/\s+/).length;
  const matchedKeywords = keywords.filter((k) => text.includes(k.toLowerCase()));
  const keywordRatio = matchedKeywords.length / keywords.length;

  let score = 3;
  if (wordCount >= 80) score += 2.5;
  else if (wordCount >= 40) score += 1.5;
  else if (wordCount >= 20) score += 0.5;

  score += keywordRatio * 4;

  if (text.includes("because") || text.includes("therefore") || text.includes("however")) score += 0.5;

  score = Math.min(10, Math.round(score * 10) / 10);

  if (score >= 8) return {
    score,
    strengths: "Excellent depth, strong vocabulary, and well-structured response. You clearly understand the task.",
    improvements: "Minor polish — consider adding specific data points or examples to make it outstanding.",
    suggestion: "Try writing for a real audience next. Publish a short blog post or portfolio piece!",
  };
  if (score >= 6) return {
    score,
    strengths: "Good effort with a clear structure. You covered the main points effectively.",
    improvements: "Add more detail and specific examples. Expand your ideas to show deeper understanding.",
    suggestion: "Practice by rewriting your answer with 50% more detail. Focus on the 'why' behind each point.",
  };
  if (score >= 4) return {
    score,
    strengths: "You've shown initiative and addressed the core topic.",
    improvements: "Your response needs more depth. Try using relevant terminology and expanding each point.",
    suggestion: "Read 2–3 professional examples of similar work, then try this task again.",
  };
  return {
    score,
    strengths: "You made a start — that's the first step!",
    improvements: "Write longer, more detailed responses. Use industry-relevant terms and structure your thoughts clearly.",
    suggestion: "Start by outlining 3 main points before writing. This helps organize your thoughts.",
  };
};

// ── Steps: Task1 → Feedback1 → Task2 → Feedback2 → Summary
type Step = "task1" | "feedback1" | "task2" | "feedback2" | "summary";

const CareerSimulation = () => {
  const [career, setCareer] = useState(DEFAULT_CAREER);
  const [step, setStep] = useState<Step>("task1");
  const [answers, setAnswers] = useState(["", ""]);
  const [feedbacks, setFeedbacks] = useState<FeedbackData[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("selectedCareer") || localStorage.getItem("interest") || "";
    const match = Object.keys(CAREER_TASKS).find((c) => stored.toLowerCase().includes(c.toLowerCase()));
    if (match) setCareer(match);
  }, []);

  const tasks = CAREER_TASKS[career] || CAREER_TASKS[DEFAULT_CAREER];

  const handleSubmitTask = (taskIdx: number) => {
    const fb = scoreFeedback(answers[taskIdx], tasks[taskIdx].keywords);
    setFeedbacks((prev) => [...prev, fb]);
    setStep(taskIdx === 0 ? "feedback1" : "feedback2");
  };

  const reset = () => {
    setAnswers(["", ""]);
    setFeedbacks([]);
    setStep("task1");
  };

  const updateAnswer = (idx: number, val: string) => {
    setAnswers((prev) => { const c = [...prev]; c[idx] = val; return c; });
  };

  // Progress bar steps
  const progressSteps = ["Task 1", "Feedback", "Task 2", "Feedback", "Results"];
  const stepIndex = { task1: 0, feedback1: 1, task2: 2, feedback2: 3, summary: 4 }[step];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="max-w-2xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Experience Before You Choose
            </h1>
            <p className="text-muted-foreground font-body text-base">
              Don't just guess your career. <span className="text-primary font-medium">Try it.</span>
            </p>
          </div>

          {/* Global progress */}
          <div className="mb-8">
            <div className="flex items-center gap-1 mb-2">
              {progressSteps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${
                    i <= stepIndex ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-muted-foreground font-body">
              {progressSteps.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>

          {/* Steps */}
          {step === "task1" && (
            <SimulationTaskCard
              taskNumber={1}
              totalTasks={2}
              prompt={tasks[0].prompt}
              career={career}
              answer={answers[0]}
              onAnswerChange={(v) => updateAnswer(0, v)}
              onSubmit={() => handleSubmitTask(0)}
            />
          )}

          {step === "feedback1" && feedbacks[0] && (
            <FeedbackCard
              taskNumber={1}
              feedback={feedbacks[0]}
              isLastTask={false}
              onNext={() => setStep("task2")}
            />
          )}

          {step === "task2" && (
            <SimulationTaskCard
              taskNumber={2}
              totalTasks={2}
              prompt={tasks[1].prompt}
              career={career}
              answer={answers[1]}
              onAnswerChange={(v) => updateAnswer(1, v)}
              onSubmit={() => handleSubmitTask(1)}
            />
          )}

          {step === "feedback2" && feedbacks[1] && (
            <FeedbackCard
              taskNumber={2}
              feedback={feedbacks[1]}
              isLastTask={true}
              onNext={() => setStep("summary")}
            />
          )}

          {step === "summary" && (
            <SimulationSummary career={career} feedbacks={feedbacks} onRetry={reset} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerSimulation;
