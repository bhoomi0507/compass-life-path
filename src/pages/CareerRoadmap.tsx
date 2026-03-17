import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, ArrowRight, ArrowLeft, CalendarDays } from "lucide-react";

const roadmapSteps = [
  { step: 1, title: "Learn writing fundamentals", desc: "Study grammar, tone, and structure through free resources.", done: true },
  { step: 2, title: "Write three practice articles", desc: "Pick topics you enjoy and write 500-word articles.", done: false },
  { step: 3, title: "Build a small portfolio", desc: "Create a simple portfolio site showcasing your best work.", done: false },
  { step: 4, title: "Apply for freelance opportunities", desc: "Start pitching to clients on freelance platforms.", done: false },
];

const timelineSteps = [
  { period: "Months 0–2", title: "Learn writing fundamentals", desc: "Study grammar, tone, storytelling, and formatting through online courses." },
  { period: "Months 3–6", title: "Build portfolio & gain clients", desc: "Write sample articles, create a portfolio, and land your first freelance projects." },
  { period: "Months 6–12", title: "Specialize & scale", desc: "Specialize in SEO writing or copywriting and grow to ₹80k+/month." },
];

const CareerRoadmap = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Roadmap */}
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Your Career Roadmap</h1>
            <p className="text-muted-foreground font-body">Follow these steps to start your new career. Each step brings you closer to your goal.</p>
          </div>

          <div className="relative mb-16">
            <div className="absolute left-5 top-0 bottom-0 w-px border-l-2 border-dashed border-secondary" />
            <div className="space-y-8">
              {roadmapSteps.map((s) => (
                <div key={s.step} className="flex gap-6 items-start">
                  <div className="relative z-10 flex-shrink-0">
                    {s.done ? (
                      <CheckCircle2 className="h-10 w-10 text-primary" />
                    ) : (
                      <Circle className="h-10 w-10 text-muted-foreground/40" />
                    )}
                  </div>
                  <div className="compass-card flex-1 py-5 px-6">
                    <p className="text-xs font-body text-muted-foreground mb-1">Step {s.step}</p>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Timeline */}
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 text-center">Career Timeline</h2>
            <p className="text-muted-foreground font-body text-center mb-8 text-sm">Realistic timeline to reach ₹80k+ in Content Writing</p>
            <div className="space-y-4">
              {timelineSteps.map((t, i) => (
                <div key={i} className="compass-card flex items-start gap-5 py-5 px-6">
                  <div className="w-10 h-10 rounded-xl bg-secondary/60 flex items-center justify-center flex-shrink-0">
                    <CalendarDays className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-body font-semibold text-primary">{t.period}</span>
                    <h3 className="font-display text-base font-semibold text-foreground mt-1">{t.title}</h3>
                    <p className="text-sm text-muted-foreground font-body mt-1">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Progress Dashboard */}
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Your Progress</h2>
            <div className="compass-card">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-body text-sm font-medium text-foreground">Career Readiness</span>
                  <span className="font-body text-sm font-semibold text-primary">40%</span>
                </div>
                <div className="w-full h-3 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-primary transition-all duration-700" style={{ width: "40%" }} />
                </div>
                <p className="text-xs text-muted-foreground font-body mt-2">Complete more steps to increase your career readiness score.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-body text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> Completed
                  </h4>
                  <ul className="space-y-2">
                    {["Profile setup", "Lifestyle assessment", "Career simulation"].map((item) => (
                      <li key={item} className="text-sm text-muted-foreground font-body flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-body text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Circle className="h-4 w-4 text-muted-foreground" /> Up Next
                  </h4>
                  <ul className="space-y-2">
                    {["Complete learning roadmap", "Build portfolio"].map((item) => (
                      <li key={item} className="text-sm text-muted-foreground font-body flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/recommendations"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Career Matches</Link>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <Link to="/courses">Continue to Courses <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CareerRoadmap;
