import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, GraduationCap, Clock, BookOpen, IndianRupee, TrendingUp, User, ArrowRight, ArrowLeft, CalendarDays } from "lucide-react";

const roadmapSteps = [
  { step: 1, title: "Learn writing fundamentals", desc: "Study grammar, tone, and structure through free resources.", done: true },
  { step: 2, title: "Write practice articles", desc: "Pick topics you enjoy and write 500-word articles.", done: false },
  { step: 3, title: "Build portfolio", desc: "Create a simple portfolio showcasing your best work.", done: false },
  { step: 4, title: "Apply for freelance opportunities", desc: "Start pitching to clients on freelance platforms.", done: false },
];

const courses = [
  { title: "Content Writing Fundamentals", platform: "Coursera", price: "₹3,999", duration: "6 weeks", incomeAfter: "₹25,000 – ₹60,000/month" },
  { title: "SEO Writing Masterclass", platform: "Udemy", price: "₹2,999", duration: "5 weeks", incomeAfter: "₹30,000 – ₹70,000/month" },
  { title: "Blogging for Beginners", platform: "LinkedIn Learning", price: "₹2,499", duration: "3 weeks", incomeAfter: "₹20,000 – ₹50,000/month" },
];

const timelineSteps = [
  { period: "Months 0–2", title: "Learn writing fundamentals", desc: "Study grammar, tone, storytelling, and formatting through online courses." },
  { period: "Months 3–6", title: "Build portfolio & gain clients", desc: "Write sample articles, create a portfolio, and land your first freelance projects." },
  { period: "Months 6–12", title: "Specialize & scale", desc: "Specialize in SEO writing or copywriting and grow to ₹80k+/month." },
];

const LearningPath = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Your Learning Path</h1>
            <p className="text-muted-foreground font-body">Your personalized roadmap, courses, and mentor — all in one place.</p>
          </div>

          {/* Skill Roadmap */}
          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Skill Roadmap</h2>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px border-l-2 border-dashed border-secondary" />
              <div className="space-y-6">
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
          </div>

          {/* Career Timeline */}
          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">Career Timeline</h2>
            <p className="text-sm text-muted-foreground font-body mb-6">Realistic timeline to reach ₹80k+ in Content Writing</p>
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

          {/* Recommended Courses */}
          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Recommended Courses</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((c) => (
                <div key={c.title} className="compass-card flex flex-col group">
                  <div className="w-10 h-10 rounded-xl bg-secondary/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">{c.title}</h3>
                  <p className="text-xs text-muted-foreground font-body mb-3">{c.platform}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground font-body mb-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-secondary/60">
                      <Clock className="h-3 w-3" /> {c.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-secondary/60">
                      <IndianRupee className="h-3 w-3" /> {c.price}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/5 border border-primary/10 mb-4">
                    <TrendingUp className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    <span className="text-xs font-body text-foreground">Estimated income: <strong>{c.incomeAfter}</strong></span>
                  </div>
                  <Button variant="hero-outline" size="sm" className="mt-auto w-full">View Course</Button>
                </div>
              ))}
            </div>
          </div>

          {/* Mentor Card */}
          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Assigned Mentor</h2>
            <div className="compass-card flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <User className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Sarah Mehta</h3>
                <p className="text-sm text-primary font-body font-medium mb-2">Career Mentor</p>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  Your mentor will track your progress and guide your learning journey. They don't teach directly but oversee your development and provide strategic advice.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/recommendations"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Careers</Link>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <Link to="/dashboard">Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LearningPath;
