import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import {
  Target,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Lock,
  CircleDot,
  Briefcase,
  Users,
  GraduationCap,
  Rocket,
  FileText,
  Award,
  Sparkles,
} from "lucide-react";

/* ── Journey steps ── */
/* ── Week timelines per course ── */
const COURSE_TIMELINES: Record<string, string[]> = {
  "Content Writing": ["Week 1", "Week 1", "Week 2", "Week 3–4", "Week 5–6", "Week 7", "Week 8", "Week 9+"],
  // Add more courses here later
};

const DEFAULT_TIMELINE = ["Week 1", "Week 1", "Week 2", "Week 3–4", "Week 5–6", "Week 7", "Week 8", "Week 9+"];

const JOURNEY_STEPS = [
  { label: "Talk to Mentor", status: "done" as const, icon: Users },
  { label: "Get Assigned a Course", status: "done" as const, icon: GraduationCap },
  { label: "Try Career Simulation", status: "active" as const, icon: Rocket },
  { label: "Start Learning Course", status: "active" as const, icon: BookOpen },
  { label: "Complete Modules", status: "upcoming" as const, icon: FileText },
  { label: "Take Final Test", status: "upcoming" as const, icon: Award },
  { label: "Unlock Opportunities", status: "locked" as const, icon: Sparkles },
  { label: "Start Earning", status: "locked" as const, icon: Briefcase },
];

const Dashboard = () => {
  const progress = 35;
  const [selectedCareer, setSelectedCareer] = useState("Content Writing");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("selectedCareer");
      if (stored) setSelectedCareer(stored);
    } catch {}
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Your Dashboard
            </h1>
            <p className="text-muted-foreground font-body">
              Track your progress and keep building your career.
            </p>
          </div>

          {/* ── Career Readiness Bar ── */}
          <div className="compass-card mb-10 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="font-display text-xl font-semibold text-foreground">
                  Progress
                </h2>
                <p className="text-xs text-muted-foreground font-body">
                  You are {progress}% ready to start earning
                </p>
              </div>
              <span className="font-display text-2xl font-bold text-primary">
                {progress}%
              </span>
            </div>
            <div className="w-full h-4 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* ── 3-Column Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-6">
            {/* ─── LEFT: Course Info ─── */}
            <div className="space-y-6">
              <div className="compass-card !p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Your Selected Course
                </h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-body mb-1">
                      Course
                    </p>
                    <p className="text-sm font-body font-semibold text-foreground">
                      {selectedCareer}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-body">
                        Progress
                      </p>
                      <span className="text-xs font-body font-semibold text-primary">
                        {progress}%
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-700"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-body mb-2">
                      Mentor Assigned
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-display font-bold text-primary">
                        PS
                      </div>
                      <div>
                        <p className="text-sm font-body font-medium text-foreground leading-tight">
                          Priya Sharma
                        </p>
                        <p className="text-[11px] text-muted-foreground font-body">
                          Product Manager
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  variant="hero"
                  size="default"
                  className="w-full mt-6"
                  asChild
                >
                  <Link to="/opportunities">
                    Continue Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* ─── CENTER: Journey Timeline ─── */}
            <div className="compass-card !p-6 md:!p-8">
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                Your Career Journey
              </h3>
              <p className="text-xs text-muted-foreground font-body mb-8">
                Follow each step to go from learning to earning.
              </p>

              <div className="relative pl-8">
                {/* Vertical line */}
                <div className="absolute left-[11px] top-1 bottom-1 w-[2px] bg-gradient-to-b from-primary/40 via-border to-border rounded-full" />

                <div className="space-y-1">
                  {JOURNEY_STEPS.map((step, idx) => {
                    const Icon = step.icon;
                    const isDone = step.status === "done";
                    const isActive = step.status === "active";
                    const isLocked = step.status === "locked";

                    return (
                      <div key={idx} className="relative flex items-start gap-4 py-3">
                        {/* Dot */}
                        <div
                          className={`absolute -left-8 top-[18px] w-[22px] h-[22px] rounded-full flex items-center justify-center z-10 ${
                            isDone
                              ? "bg-primary text-primary-foreground"
                              : isActive
                              ? "bg-card border-[3px] border-primary shadow-sm"
                              : "bg-muted border-2 border-border"
                          }`}
                        >
                          {isDone ? (
                            <CheckCircle2 className="h-3.5 w-3.5" />
                          ) : isLocked ? (
                            <Lock className="h-3 w-3 text-muted-foreground" />
                          ) : (
                            <CircleDot className="h-3 w-3 text-primary" />
                          )}
                        </div>

                        {/* Content */}
                        <div
                          className={`flex-1 flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                            isDone
                              ? "bg-primary/5"
                              : isActive
                              ? "bg-primary/8 border border-primary/20"
                              : isLocked
                              ? "opacity-50"
                              : "bg-muted/40"
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                              isDone
                                ? "bg-primary/10"
                                : isActive
                                ? "bg-primary/15"
                                : "bg-muted"
                            }`}
                          >
                            <Icon
                              className={`h-4 w-4 ${
                                isDone || isActive
                                  ? "text-primary"
                                  : "text-muted-foreground"
                              }`}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className={`text-sm font-body font-medium ${
                                isDone
                                  ? "text-foreground"
                                  : isActive
                                  ? "text-foreground"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {step.label}
                            </p>
                            {isActive && (
                              <p className="text-[11px] text-primary font-body font-medium mt-0.5">
                                In progress
                              </p>
                            )}
                            {isDone && (
                              <p className="text-[11px] text-muted-foreground font-body mt-0.5">
                                Completed
                              </p>
                            )}
                          </div>
                          {isLocked && (
                            <Lock className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ─── RIGHT: Locked + CTA ─── */}
            <div className="space-y-6">
              {/* Locked Opportunities */}
              <div className="compass-card !p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Locked Opportunities
                </h3>
                <p className="text-xs text-muted-foreground font-body mb-5 leading-relaxed">
                  Complete your course and pass the test to unlock job
                  opportunities.
                </p>

                <div className="space-y-3">
                  {[
                    { label: "Apply for Jobs", icon: Briefcase },
                    { label: "Freelance Projects", icon: Sparkles },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/50 opacity-60"
                    >
                      <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                        <item.icon className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <span className="text-sm font-body text-muted-foreground flex-1">
                        {item.label}
                      </span>
                      <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="compass-card !p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  <Button
                    variant="hero-outline"
                    size="default"
                    className="w-full justify-start"
                    asChild
                  >
                    <Link to="/simulation">
                      <Rocket className="mr-2 h-4 w-4" />
                      Career Simulation
                    </Link>
                  </Button>
                  <Button
                    variant="hero-outline"
                    size="default"
                    className="w-full justify-start"
                    asChild
                  >
                    <Link to="/opportunities">
                      <Briefcase className="mr-2 h-4 w-4" />
                      View Opportunities
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Dashboard;
