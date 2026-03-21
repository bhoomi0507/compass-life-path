import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgressIndicator from "@/components/ProgressIndicator";
import { BookOpen, Lightbulb, Target, Users, Briefcase, ArrowRight, Sparkles, Clock, GraduationCap, Heart, Shield, TrendingDown, Globe, Timer, Eye, Rocket, Star, CheckCircle2, XCircle, Layers, MessageSquare, FolderOpen } from "lucide-react";
import heroImage from "@/assets/hero-video-call.png";
import logo from "@/assets/herpath-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="container-narrow text-center space-y-6 animate-fade-up">
          <p className="text-sm font-body font-medium text-muted-foreground tracking-wide uppercase">
            Career guidance, reimagined
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance max-w-3xl mx-auto" style={{ lineHeight: '1.1' }}>
            Choose Your Career With Clarity
          </h1>
          <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-xl mx-auto">
            Explore real career paths, try real tasks, and build proof before you commit.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Button variant="default" size="lg" asChild>
              <a href="#dashboard-preview">See Your Future</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/signup">Explore Careers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Transformation */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="compass-card">
              <p className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider mb-4">Before</p>
              <div className="space-y-3">
                {["Confused about career direction", "Random courses, no plan", "No real-world experience"].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <XCircle className="h-4 w-4 text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                    <p className="font-body text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="compass-card !border-primary/20">
              <p className="text-xs font-body font-semibold text-foreground uppercase tracking-wider mb-4">After</p>
              <div className="space-y-3">
                {["Clear, personalized roadmap", "Hands-on tasks & simulations", "Portfolio-ready work"].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="font-body text-sm text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard-preview" className="py-16 md:py-24 bg-secondary/50">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <p className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider mb-3">Preview</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Your future dashboard</h2>
            <p className="text-muted-foreground font-body">Here's what your journey looks like inside HerPath</p>
          </div>

          <div className="max-w-3xl mx-auto compass-card !p-0 overflow-hidden">
            {/* Browser chrome */}
            <div className="bg-secondary border-b border-border px-5 py-2.5 flex items-center gap-2.5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
              </div>
              <span className="text-xs font-body text-muted-foreground ml-2">herpath.app/dashboard</span>
            </div>

            <div className="p-6 md:p-8 space-y-5">
              {/* Career header */}
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <p className="text-xs font-body text-muted-foreground mb-0.5">Your career path</p>
                  <h3 className="font-display text-xl font-bold text-foreground">UI/UX Designer</h3>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-primary bg-secondary px-3 py-1 rounded-full border border-border">
                  In Progress
                </span>
              </div>

              {/* Progress */}
              <div>
                <div className="flex justify-between text-xs font-body mb-2">
                  <span className="text-muted-foreground">Roadmap</span>
                  <span className="text-foreground">3 / 5 steps</span>
                </div>
                <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '60%' }} />
                </div>
              </div>

              {/* Tasks & Mentor */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-background p-4 space-y-2.5">
                  <h4 className="font-body text-xs font-semibold text-foreground uppercase tracking-wider">Tasks</h4>
                  {["Design a login screen", "Improve app usability"].map((task, i) => (
                    <div key={task} className="flex items-center gap-2 text-sm font-body">
                      <CheckCircle2 className={`h-3.5 w-3.5 flex-shrink-0 ${i === 0 ? "text-primary" : "text-muted-foreground/30"}`} />
                      <span className={i === 0 ? "text-foreground" : "text-muted-foreground"}>{task}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-border bg-background p-4 space-y-2.5">
                  <h4 className="font-body text-xs font-semibold text-foreground uppercase tracking-wider">Mentor</h4>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    Weekly reviews and portfolio guidance from a dedicated mentor.
                  </p>
                  <span className="inline-block text-xs font-body text-primary font-medium">Next: Monday</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground font-body mt-5">
            This is a preview — <Link to="/signup" className="text-foreground font-medium hover:underline">sign up</Link> to get your personalized version
          </p>
        </div>
      </section>

      {/* What You Actually Get */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">What you actually get</h2>
            <p className="text-muted-foreground font-body">Real skills, real projects, real growth</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {[
              { icon: Layers, title: "Real Projects", desc: "Complete hands-on tasks that simulate actual work." },
              { icon: Star, title: "AI Feedback", desc: "Instant, personalized feedback to improve faster." },
              { icon: Target, title: "Career Roadmap", desc: "A clear path from learning to your first earning." },
            ].map((item) => (
              <div key={item.title} className="compass-card text-center">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
            <div className="space-y-5">
              <div className="flex items-center gap-2.5">
                <img src={logo} alt="HerPath" className="h-12 w-12 dark:invert" />
                <span className="text-xs font-body text-muted-foreground tracking-wider uppercase">HerPath</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance" style={{ lineHeight: '1.1' }}>
                From Learning to Earning
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed max-w-md">
                Millions of educated women never get the chance to turn their skills into income. HerPath bridges that gap.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/signup">Get Started Free</Link>
              </Button>
            </div>
            <div>
              <img
                src={heroImage}
                alt="Woman working remotely on a video call, representing flexible careers"
                className="w-full rounded-2xl object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Why this matters</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { stat: "~47%", desc: "of women globally participate in the workforce" },
              { stat: "~20%", desc: "female workforce participation in India" },
              { stat: "2–5×", desc: "more time women spend on unpaid work" },
              { stat: "Equal", desc: "skills, but lower confidence in abilities" },
            ].map((item) => (
              <div key={item.stat} className="compass-card text-center">
                <p className="font-display text-2xl font-bold text-foreground mb-1">{item.stat}</p>
                <p className="text-xs text-muted-foreground font-body">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="font-display text-lg font-semibold text-foreground text-center mt-10 max-w-lg mx-auto">
            HerPath is built to change this — by turning potential into income.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-secondary/50">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">How it works</h2>
            <p className="text-muted-foreground font-body">Five stages from discovery to earning</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { icon: Users, step: "1", title: "Share Your Lifestyle", desc: "Tell us about your schedule, interests, and goals." },
              { icon: Target, step: "2", title: "Discover Careers", desc: "Get personalized recommendations that fit your life." },
              { icon: Sparkles, step: "3", title: "Try Simulations", desc: "Experience real tasks before committing to a path." },
              { icon: GraduationCap, step: "4", title: "Learn & Build", desc: "Follow guided courses with mentor support." },
              { icon: Briefcase, step: "5", title: "Start Earning", desc: "Get matched with flexible opportunities." },
            ].map((item) => (
              <div key={item.title} className="compass-card text-center">
                <span className="inline-block text-xs font-body font-medium text-muted-foreground bg-secondary px-2.5 py-0.5 rounded-full mb-3 border border-border">{item.step}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1.5">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 max-w-lg mx-auto">
            Start discovering a career that works for your life
          </h2>
          <Button variant="default" size="lg" asChild>
            <Link to="/signup">Create Free Account <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;