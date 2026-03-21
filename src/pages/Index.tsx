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

      {/* Outcome Preview Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-narrow text-center space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-secondary/80 text-primary px-4 py-1.5 rounded-full text-sm font-body font-medium">
            <Eye className="h-4 w-4" />
            Preview your future
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance" style={{ lineHeight: '1.1' }}>
            From Confusion to Clarity in Your Career
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
            See your personalized roadmap, real-world tasks, and mentor guidance before you even start
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="#dashboard-preview">View My Future Dashboard</a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-16 md:py-20">
        <div className="container-narrow">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Your Transformation</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* BEFORE */}
            <div className="compass-card !border-destructive/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-destructive/40" />
              <span className="inline-block text-xs font-body font-bold text-destructive bg-destructive/10 px-3 py-1 rounded-full mb-5 uppercase tracking-wider">Before HerPath</span>
              <div className="space-y-4">
                {["Confused about career", "Random courses with no direction", "No real-world experience"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-destructive/60 flex-shrink-0" />
                    <p className="font-body text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* AFTER */}
            <div className="compass-card !border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary/60" />
              <span className="inline-block text-xs font-body font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-5 uppercase tracking-wider">After HerPath</span>
              <div className="space-y-4">
                {["Clear, personalized roadmap", "Hands-on tasks & simulations", "Portfolio-ready work"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="font-body text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard-preview" className="py-16 md:py-20 bg-muted/30">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-body font-semibold text-primary bg-secondary/80 px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Live Preview</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Your Future Dashboard</h2>
            <p className="text-muted-foreground font-body text-lg">Here's what your personalized career journey looks like</p>
          </div>

          <div className="max-w-4xl mx-auto compass-card !p-0 overflow-hidden shadow-xl">
            {/* Fake top bar */}
            <div className="bg-primary/5 border-b border-border px-6 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/40" />
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="w-3 h-3 rounded-full bg-primary/40" />
              </div>
              <span className="text-xs font-body text-muted-foreground ml-2">herpath.app/dashboard</span>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              {/* Career header */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-xs font-body text-muted-foreground mb-1">Your chosen career</p>
                  <h3 className="font-display text-2xl font-bold text-foreground">UI/UX Designer</h3>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-body font-semibold text-primary bg-secondary px-3 py-1.5 rounded-full">
                  <Rocket className="h-3.5 w-3.5" /> In Progress
                </span>
              </div>

              {/* Progress */}
              <div>
                <div className="flex justify-between text-sm font-body mb-2">
                  <span className="text-muted-foreground">Roadmap Progress</span>
                  <span className="font-semibold text-foreground">3 of 5 steps</span>
                </div>
                <ProgressIndicator currentStep={3} steps={["Discover", "Simulate", "Learn", "Test", "Earn"]} />
              </div>

              {/* Tasks & Mentor */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-background p-5 space-y-3">
                  <h4 className="font-display text-sm font-semibold text-foreground flex items-center gap-2">
                    <Layers className="h-4 w-4 text-primary" /> Simulation Tasks
                  </h4>
                  {["Design a login screen", "Improve app usability"].map((task, i) => (
                    <div key={task} className="flex items-center gap-2 text-sm font-body">
                      <CheckCircle2 className={`h-4 w-4 flex-shrink-0 ${i === 0 ? "text-primary" : "text-muted-foreground/40"}`} />
                      <span className={i === 0 ? "text-foreground" : "text-muted-foreground"}>{task}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-border bg-background p-5 space-y-3">
                  <h4 className="font-display text-sm font-semibold text-foreground flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-primary" /> Mentor Support
                  </h4>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    Your dedicated mentor reviews your work weekly and helps you build a portfolio employers love.
                  </p>
                  <span className="inline-block text-xs font-body text-primary font-medium">Next session: Monday</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground font-body mt-6">
            ✨ This is a preview — <Link to="/signup" className="text-primary font-medium hover:underline">sign up</Link> to get your personalized version
          </p>
        </div>
      </section>

      {/* Outcome Highlights */}
      <section className="py-16 md:py-20">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">What You'll Build</h2>
            <p className="text-muted-foreground font-body text-lg">Real skills, real projects, real career growth</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Layers, title: "Build Real Projects", desc: "Complete hands-on tasks that simulate actual work, building a portfolio as you learn." },
              { icon: Star, title: "Get AI Feedback", desc: "Receive instant, personalized feedback on your work to improve faster." },
              { icon: FolderOpen, title: "Create a Portfolio", desc: "Showcase your simulation results and projects to potential employers." },
            ].map((item) => (
              <div key={item.title} className="compass-card text-center group">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Original Hero with image */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-2">
                <img src={logo} alt="HerPath" className="h-24 w-24 dark:invert" />
                <span className="text-sm font-body text-muted-foreground tracking-wide uppercase">HerPath</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance" style={{ lineHeight: '1.1' }}>
                From Learning to Earning — Designed for Women
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-lg">
                Millions of educated women never get the chance to turn their skills into income. HerPath helps you bridge that gap.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/signup">Get Started Free</Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <a href="#how-it-works">Learn More</a>
                </Button>
              </div>
            </div>
            <div>
              <img
                src={heroImage}
                alt="Woman working remotely on a video call, representing flexible careers"
                className="w-full rounded-3xl shadow-xl object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Model */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="compass-card flex items-center gap-4 py-5 px-8 max-w-3xl mx-auto text-center justify-center">
            <Shield className="h-5 w-5 text-primary flex-shrink-0" />
            <p className="text-sm font-body text-muted-foreground">
              <strong className="text-foreground">HerPath</strong> is a guided career discovery platform with mentor support — helping women discover careers, learn skills, track progress, and get matched with opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section-spacing">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Why This Matters</h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">The gap between women's potential and opportunity is real — and solvable</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Globe, stat: "~47%", desc: "of women globally participate in the workforce, vs ~72% of men" },
              { icon: TrendingDown, stat: "~20–25%", desc: "In India, female workforce participation drops to as low as 20–25%" },
              { icon: Timer, stat: "2–5×", desc: "Women spend 2–5x more time on unpaid domestic work than men" },
              { icon: Heart, stat: "Equal skills", desc: "Many women underestimate their abilities despite having equal or greater skills" },
            ].map((item) => (
              <div key={item.stat} className="compass-card text-center group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="font-display text-2xl font-bold text-foreground mb-2">{item.stat}</p>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="font-display text-xl md:text-2xl font-semibold text-foreground max-w-2xl mx-auto leading-snug">
              HerPath is built to change this — by turning potential into income.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-spacing bg-muted/30">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">Your career journey in five simple stages</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, step: "1", title: "Understand Your Lifestyle", desc: "Tell us about your schedule, interests, and income goals so we can understand your situation." },
              { icon: Target, step: "2", title: "Discover Career Paths", desc: "Receive personalized career recommendations that match your lifestyle and goals." },
              { icon: Sparkles, step: "3", title: "Try Career Simulations", desc: "Experience small tasks from real careers before deciding which path to pursue." },
              { icon: GraduationCap, step: "4", title: "Follow Your Personalized Path", desc: "Follow your dashboard roadmap with recommended courses, mentor guidance, and clear steps to build the skills needed for your chosen career." },
              { icon: Briefcase, step: "5", title: "Start Working", desc: "Get matched with freelance, remote, and flexible opportunities aligned with your skills and schedule." },
            ].map((item, i) => (
              <div key={item.title} className="compass-card text-center group" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <span className="inline-block text-xs font-body font-semibold text-primary bg-secondary/80 px-3 py-1 rounded-full mb-3">Stage {item.step}</span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why HerPath */}
      <section className="section-spacing">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Why HerPath</h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">Built to help you find careers that truly work for your life</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Lifestyle-First Discovery", desc: "Careers matched to how you actually live." },
              { icon: Lightbulb, title: "Career Simulations", desc: "Try the work before making a decision." },
              { icon: BookOpen, title: "Mentor-Guided Learning", desc: "A dedicated mentor tracks your progress." },
              { icon: Briefcase, title: "Real Opportunities", desc: "Connect to actual jobs and freelance work." },
            ].map((item) => (
              <div key={item.title} className="compass-card text-center group">
                <div className="w-12 h-12 rounded-xl bg-secondary/60 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Start discovering a career that works for your life.
          </h2>
          <Button variant="hero" size="xl" asChild>
            <Link to="/signup">Create Free Account <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
