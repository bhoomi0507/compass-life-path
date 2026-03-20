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
    title: "Start Earning",
    description: "Get matched with opportunities and begin earning.",
    icon: Rocket,
  },
];

const LearningPath = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedDuration, setSelectedDuration] = useState<number>(30);
  const [isBooked, setIsBooked] = useState(false);

  const howItWorksRef = useRef<HTMLDivElement>(null);
  const mentorBookingRef = useRef<HTMLDivElement>(null);

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
        <div className="max-w-3xl mx-auto px-6">

          {/* ─── Hero: Career Confirmation ─── */}
          <section className="text-center mb-16">
            <span className="inline-block text-xs font-body font-semibold uppercase tracking-[0.2em] text-primary mb-4 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15">
              Career Selected
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-4 leading-[1.1]">
              You've chosen: {selectedCareer}
            </h1>
            <p className="text-muted-foreground font-body leading-relaxed max-w-lg mx-auto mb-3">
              This path matches your goal of starting to earn with limited time.
            </p>
            <p className="text-sm text-muted-foreground font-body max-w-md mx-auto mb-8">
              Based on your time availability, we've created a personalized path just for you.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-card border border-border shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <IndianRupee className="h-4 w-4 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] text-muted-foreground font-body leading-none mb-0.5">Earnings</p>
                  <p className="text-sm font-body font-semibold text-foreground">₹10k–₹50k/mo</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-card border border-border shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Timer className="h-4 w-4 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] text-muted-foreground font-body leading-none mb-0.5">Daily time</p>
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
          </section>

          {/* ─── How It Works ─── */}
          <section ref={howItWorksRef} className="scroll-mt-24 mb-16">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                How It Works
              </h2>
              <p className="text-sm text-muted-foreground font-body">
                From learning to earning — your journey in five steps.
              </p>
            </div>

            <div className="relative pl-8 md:pl-10">
              {/* Timeline line */}
              <div className="absolute left-[15px] md:left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary/30 via-primary/15 to-transparent rounded-full" />

              <div className="space-y-5">
                {HOW_IT_WORKS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.step} className="relative flex items-start gap-4">
                      {/* Dot on timeline */}
                      <div className="absolute -left-8 md:-left-10 top-5 w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full bg-card border-[3px] border-primary/40 shadow-sm z-10" />
                      {/* Card */}
                      <div className="flex-1 compass-card p-5 md:p-6 group hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors duration-300">
                            <Icon className="h-[18px] w-[18px] text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[10px] font-body font-bold text-primary/60 uppercase tracking-[0.15em] mb-1">
                              Step {item.step}
                            </p>
                            <h3 className="font-display text-[15px] font-bold text-foreground mb-1 leading-snug">
                              {item.title}
                            </h3>
                            <p className="text-[13px] text-muted-foreground font-body leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ─── CTA Bridge ─── */}
          <section className="mb-16">
            <div className="compass-card p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-accent/[0.04]" />
              <div className="relative">
                <p className="text-sm text-muted-foreground font-body italic mb-2">
                  Guided by mentors, tailored to your time, and focused on real outcomes.
                </p>
                <p className="text-xs text-muted-foreground/70 font-body mb-6">
                  Your first mentor session is free — no commitment required.
                </p>
                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => scrollTo(mentorBookingRef)}
                >
                  Continue to Free Mentor Session
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

          {/* ─── Mentor Booking ─── */}
          <div ref={mentorBookingRef} className="scroll-mt-24 space-y-8">
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
          <div className="flex justify-center mt-12">
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
