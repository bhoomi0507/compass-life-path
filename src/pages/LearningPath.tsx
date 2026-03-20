import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  ArrowLeft,
  ArrowDown,
  CalendarDays,
  Clock,
  CheckCircle2,
  Briefcase,
  Star,
  Video,
  IndianRupee,
  Timer,
  Compass,
  BookOpen,
  Hammer,
  FolderOpen,
  Rocket,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const TIME_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
];

const DURATIONS = [
  { label: "30 min", value: 30 },
  { label: "60 min", value: 60 },
];

const mentor = {
  name: "Priya Sharma",
  role: "Senior Product Manager at Microsoft",
  bio: "Priya has 8+ years of experience guiding early-career women into tech and product roles. She specializes in career transitions, interview prep, and building confidence in professional settings.",
  initials: "PS",
  rating: 4.9,
  sessions: 127,
};

const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Find the Right Direction",
    description: "Connect with a mentor and choose a path that fits your goals and schedule.",
    icon: Compass,
  },
  {
    step: 2,
    title: "Build Core Skills",
    description: "Follow a structured plan with curated learning and clear milestones.",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Apply Your Skills",
    description: "Work on real-world tasks and track your progress.",
    icon: Hammer,
  },
  {
    step: 4,
    title: "Build Your Portfolio",
    description: "Create strong projects that showcase your abilities.",
    icon: FolderOpen,
  },
  {
    step: 5,
    title: "Start Earning 💸",
    description: "Get matched with opportunities and begin earning.",
    icon: Rocket,
  },
];

const WEEKLY_PLAN = [
  { weeks: "Week 1–2", task: "Learn the fundamentals and set up your workspace" },
  { weeks: "Week 3–4", task: "Practice with guided exercises and small projects" },
  { weeks: "Week 5–6", task: "Build portfolio-ready projects with feedback" },
  { weeks: "Week 7–8", task: "Apply for entry-level gigs and freelance work" },
];

const LearningPath = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedDuration, setSelectedDuration] = useState<number>(30);
  const [isBooked, setIsBooked] = useState(false);

  const howItWorksRef = useRef<HTMLDivElement>(null);
  const mentorBookingRef = useRef<HTMLDivElement>(null);

  // Try to get selected career from localStorage
  const [selectedCareer, setSelectedCareer] = useState("Content Writing");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("selectedCareer");
      if (stored) setSelectedCareer(stored);
    } catch {}
  }, []);

  const canBook = selectedDate && selectedTime;

  const handleConfirmBooking = () => {
    if (canBook) setIsBooked(true);
  };

  const handleBookAnother = () => {
    setSelectedDate(undefined);
    setSelectedTime("");
    setSelectedDuration(30);
    setIsBooked(false);
  };

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6 space-y-12">

          {/* ─── Section 1: Career Confirmation ─── */}
          <section className="compass-card p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <p className="text-xs font-body font-medium uppercase tracking-widest text-primary mb-3">
                Career Selected
              </p>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight">
                You've chosen: {selectedCareer}
              </h1>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6 max-w-xl">
                Based on your interests and inputs, this career aligns well with your strengths and goals. Here's what you can expect as you get started.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-secondary/60 border border-border">
                  <IndianRupee className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground font-body">Expected earnings</p>
                    <p className="text-sm font-body font-semibold text-foreground">₹10,000–₹50,000/mo</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-secondary/60 border border-border">
                  <Timer className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground font-body">Time commitment</p>
                    <p className="text-sm font-body font-semibold text-foreground">1–2 hrs/day</p>
                  </div>
                </div>
              </div>

              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollTo(howItWorksRef)}
              >
                View Your Path
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </section>

          {/* ─── Section 2: How It Works ─── */}
          <section ref={howItWorksRef} className="scroll-mt-24">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                How It Works
              </h2>
              <p className="text-sm text-muted-foreground font-body">
                A clear path from learning to earning — step by step.
              </p>
            </div>

            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-[22px] md:left-[26px] top-4 bottom-4 w-px bg-border" />

              <div className="space-y-6">
                {HOW_IT_WORKS.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.step} className="relative flex items-start gap-5 pl-1">
                      {/* Step circle */}
                      <div className="relative z-10 w-11 h-11 md:w-[52px] md:h-[52px] rounded-2xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      {/* Content */}
                      <div className="compass-card p-5 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-body font-semibold text-primary uppercase tracking-wide">
                            Step {item.step}
                          </span>
                        </div>
                        <h3 className="font-display text-base font-bold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-body leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ─── Section 3: AI-Generated Timeline ─── */}
          <section className="compass-card p-6 md:p-8">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="h-5 w-5 text-primary" />
              <h2 className="font-display text-xl font-bold text-foreground">
                Your Personalized Weekly Plan
              </h2>
            </div>
            <p className="text-sm text-muted-foreground font-body mb-6">
              A suggested timeline based on your career choice and availability.
            </p>

            <div className="space-y-3">
              {WEEKLY_PLAN.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 px-4 py-3.5 rounded-xl bg-secondary/40 border border-border"
                >
                  <span className="text-xs font-body font-bold text-primary whitespace-nowrap mt-0.5 min-w-[72px]">
                    {item.weeks}
                  </span>
                  <p className="text-sm font-body text-foreground leading-relaxed">
                    {item.task}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ─── Reassurance + CTA ─── */}
          <section className="text-center space-y-4">
            <p className="text-sm text-muted-foreground font-body italic">
              Guided by mentors, tailored to your time, and focused on real outcomes.
            </p>
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollTo(mentorBookingRef)}
            >
              Continue to Free Mentor Session
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </section>

          {/* ─── Mentor Booking (existing) ─── */}
          <div ref={mentorBookingRef} className="scroll-mt-24 space-y-10">
            {/* Page Header */}
            <div className="text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                Your Mentor
              </h2>
              <p className="text-muted-foreground font-body">
                Connect with your assigned mentor and schedule guidance sessions.
              </p>
            </div>

            {/* Mentor Card */}
            <div className="compass-card p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-display text-xl font-bold">
                  {mentor.initials}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {mentor.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="h-3.5 w-3.5 text-primary" />
                    <span className="text-sm font-body text-primary font-medium">
                      {mentor.role}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                    {mentor.bio}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-body text-muted-foreground px-3 py-1.5 rounded-full bg-secondary/60">
                      <Star className="h-3 w-3 text-primary" />
                      {mentor.rating} rating
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-body text-muted-foreground px-3 py-1.5 rounded-full bg-secondary/60">
                      <Video className="h-3 w-3 text-primary" />
                      {mentor.sessions} sessions
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Section */}
            {!isBooked ? (
              <div className="compass-card p-6 md:p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  Book a Meeting
                </h3>
                <p className="text-sm text-muted-foreground font-body mb-8">
                  Pick a date, time, and duration that works for you.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Date Picker */}
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-3 block">
                      <CalendarDays className="h-4 w-4 inline-block mr-2 text-primary" />
                      Select Date
                    </label>
                    <div className="border border-border rounded-2xl p-3 bg-card">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0)) || date.getDay() === 0}
                        className={cn("p-0 pointer-events-auto")}
                      />
                    </div>
                  </div>

                  {/* Time + Duration */}
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-body font-medium text-foreground mb-3 block">
                        <Clock className="h-4 w-4 inline-block mr-2 text-primary" />
                        Duration
                      </label>
                      <div className="flex gap-3">
                        {DURATIONS.map((d) => (
                          <button
                            key={d.value}
                            onClick={() => setSelectedDuration(d.value)}
                            className={cn(
                              "flex-1 px-4 py-3 rounded-xl text-sm font-body font-medium border-2 transition-all duration-200",
                              selectedDuration === d.value
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-card text-foreground border-border hover:border-primary/40"
                            )}
                          >
                            {d.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-body font-medium text-foreground mb-3 block">
                        <Clock className="h-4 w-4 inline-block mr-2 text-primary" />
                        Available Times
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {TIME_SLOTS.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={cn(
                              "px-3 py-2.5 rounded-xl text-xs font-body font-medium border-2 transition-all duration-200",
                              selectedTime === time
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-card text-foreground border-border hover:border-primary/40"
                            )}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Summary + Confirm */}
                <div className="mt-8 pt-6 border-t border-border">
                  {selectedDate && selectedTime ? (
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary/50 mb-6">
                      <CalendarDays className="h-4 w-4 text-primary flex-shrink-0" />
                      <p className="text-sm font-body text-foreground">
                        <span className="font-medium">{format(selectedDate, "EEEE, MMMM d, yyyy")}</span>
                        {" at "}
                        <span className="font-medium">{selectedTime}</span>
                        {" · "}
                        <span className="font-medium">{selectedDuration} min</span>
                      </p>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground font-body mb-6">
                      Select a date and time to continue.
                    </p>
                  )}
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={!canBook}
                    onClick={handleConfirmBooking}
                  >
                    Confirm Booking
                  </Button>
                </div>
              </div>
            ) : (
              <div className="compass-card p-6 md:p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Meeting Booked Successfully!
                </h3>
                <p className="text-sm text-muted-foreground font-body mb-6">
                  Your session with {mentor.name} has been confirmed.
                </p>

                <div className="inline-flex flex-col items-start gap-2 px-6 py-4 rounded-2xl bg-secondary/50 text-left mb-8">
                  <div className="flex items-center gap-2 text-sm font-body text-foreground">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    <span className="font-medium">
                      {selectedDate && format(selectedDate, "EEEE, MMMM d, yyyy")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-body text-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="font-medium">
                      {selectedTime} · {selectedDuration} min
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="hero-outline" size="lg" onClick={handleBookAnother}>
                    Book Another Session
                  </Button>
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/dashboard">Go to Dashboard</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Back Navigation */}
          <div className="flex justify-center">
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/recommendations">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Careers
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LearningPath;
