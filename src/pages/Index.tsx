import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Lightbulb, Target, Users, Briefcase, ArrowRight, Sparkles, GraduationCap, Heart, Shield, TrendingDown, Globe, Timer } from "lucide-react";
import heroImage from "@/assets/hero-video-call.png";
import logo from "@/assets/herpath-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-2">
                <img src={logo} alt="HerPath" className="h-24 w-24 dark:invert" />
                <span className="text-sm font-body text-muted-foreground tracking-wide uppercase">HerPath</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance" style={{ lineHeight: '1.1' }}>
                From <span className="text-foreground">Learning</span> to <span className="text-primary">Earning</span> — Designed for Women
              </h1>
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
