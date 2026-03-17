import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Trophy, Target, BookOpen, Briefcase, ArrowRight, Sparkles, Star } from "lucide-react";

const completedSteps = [
  { label: "Profile Setup", icon: CheckCircle2 },
  { label: "Career Simulation", icon: CheckCircle2 },
];

const nextSteps = [
  { label: "Complete first course", link: "/courses" },
  { label: "Build portfolio article", link: "/roadmap" },
  { label: "Apply for opportunities", link: "/opportunities" },
];

const achievements = [
  { icon: Star, label: "Profile Complete", earned: true },
  { icon: Sparkles, label: "First Simulation", earned: true },
  { icon: BookOpen, label: "Course Started", earned: false },
  { icon: Briefcase, label: "First Application", earned: false },
];

const Dashboard = () => {
  const progress = 35;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Your Dashboard</h1>
            <p className="text-muted-foreground font-body">Track your progress and keep building your career.</p>
          </div>

          {/* Progress Card */}
          <div className="compass-card mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-secondary/60 flex items-center justify-center">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground">Career Readiness</h2>
                <p className="text-xs text-muted-foreground font-body">Keep going — you're making great progress!</p>
              </div>
              <span className="ml-auto font-display text-2xl font-bold text-primary">{progress}%</span>
            </div>
            <div className="w-full h-4 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" /> Achievements
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {achievements.map((a) => (
                <div
                  key={a.label}
                  className={`compass-card text-center py-5 px-3 ${!a.earned ? "opacity-40" : ""}`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${a.earned ? "bg-primary/10" : "bg-muted"}`}>
                    <a.icon className={`h-5 w-5 ${a.earned ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <p className="text-xs font-body font-medium text-foreground">{a.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Completed & Next */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="compass-card">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" /> Completed
              </h3>
              <ul className="space-y-3">
                {completedSteps.map((s) => (
                  <li key={s.label} className="flex items-center gap-3 text-sm font-body text-foreground">
                    <s.icon className="h-4 w-4 text-primary flex-shrink-0" />
                    {s.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="compass-card">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Circle className="h-5 w-5 text-muted-foreground" /> Up Next
              </h3>
              <ul className="space-y-3">
                {nextSteps.map((s) => (
                  <li key={s.label}>
                    <Link to={s.link} className="flex items-center gap-3 text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                      {s.label}
                      <ArrowRight className="h-3 w-3 ml-auto" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/courses">Continue Learning <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/opportunities">View Opportunities</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
