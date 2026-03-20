import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  CheckCircle2,
  Briefcase,
  Star,
  Video,
} from "lucide-react";
import { cn } from "@/lib/utils";

const TIME_SLOTS = [
  "9:00 AM", "10:00 AM", "11:00 AM",
  "2:00 PM", "3:00 PM", "4:00 PM",
];

const mentor = {
  name: "Priya Sharma",
  role: "Senior Product Manager at Microsoft",
  initials: "PS",
  rating: 4.9,
  sessions: 127,
};

const Courses = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const canBook = selectedDate && selectedTime;

  const handleBook = () => {
    if (canBook) setIsBooked(true);
  };

  const handleReset = () => {
    setSelectedDate(undefined);
    setSelectedTime("");
    setIsBooked(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Your Next Steps
            </h1>
            <p className="text-muted-foreground font-body">
              Book a mentor session or explore opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
            {/* ─── Left: Opportunities CTA ─── */}
            <div className="space-y-6">
              <div className="compass-card !p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-foreground mb-1">
                      Explore Opportunities
                    </h2>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      Browse jobs, freelance gigs, and projects that match your career path. Start applying and building your portfolio.
                    </p>
                  </div>
                </div>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/opportunities">
                    View Opportunities
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Quick links */}
              <div className="grid grid-cols-2 gap-4">
                <Button variant="hero-outline" size="lg" className="w-full" asChild>
                  <Link to="/learning-path">Learning Path</Link>
                </Button>
                <Button variant="hero-outline" size="lg" className="w-full" asChild>
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
              </div>
            </div>

            {/* ─── Right: Book Mentor Meeting ─── */}
            <div className="compass-card !p-5">
              {!isBooked ? (
                <>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-display font-bold text-primary">
                      {mentor.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-body font-semibold text-foreground leading-tight truncate">
                        {mentor.name}
                      </p>
                      <p className="text-[11px] text-muted-foreground font-body truncate">
                        {mentor.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 mb-4">
                    <span className="inline-flex items-center gap-1 text-[11px] font-body text-muted-foreground px-2 py-1 rounded-full bg-secondary/60">
                      <Star className="h-3 w-3 text-primary" />
                      {mentor.rating}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-body text-muted-foreground px-2 py-1 rounded-full bg-secondary/60">
                      <Video className="h-3 w-3 text-primary" />
                      {mentor.sessions} sessions
                    </span>
                  </div>

                  <h3 className="text-sm font-body font-semibold text-foreground mb-3">
                    <CalendarDays className="h-4 w-4 inline-block mr-1.5 text-primary" />
                    Pick a Date
                  </h3>

                  <div className="border border-border rounded-xl p-2 bg-card mb-4">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                        date.getDay() === 0
                      }
                      className={cn("p-0 pointer-events-auto text-xs")}
                    />
                  </div>

                  <h3 className="text-sm font-body font-semibold text-foreground mb-2">
                    <Clock className="h-4 w-4 inline-block mr-1.5 text-primary" />
                    Select Time
                  </h3>
                  <div className="grid grid-cols-3 gap-1.5 mb-4">
                    {TIME_SLOTS.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={cn(
                          "px-2 py-2 rounded-lg text-[11px] font-body font-medium border-2 transition-all duration-200",
                          selectedTime === t
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-card text-foreground border-border hover:border-primary/40"
                        )}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  {selectedDate && selectedTime && (
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 mb-4 text-xs font-body text-foreground">
                      <CalendarDays className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      <span>
                        {format(selectedDate, "MMM d, yyyy")} at {selectedTime}
                      </span>
                    </div>
                  )}

                  <Button
                    variant="hero"
                    size="default"
                    className="w-full"
                    disabled={!canBook}
                    onClick={handleBook}
                  >
                    Confirm Booking
                  </Button>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    Booked!
                  </h3>
                  <p className="text-xs text-muted-foreground font-body mb-3">
                    Session with {mentor.name}
                  </p>
                  <div className="inline-flex flex-col items-start gap-1.5 px-4 py-3 rounded-xl bg-secondary/50 text-left mb-4">
                    <span className="flex items-center gap-1.5 text-xs font-body text-foreground">
                      <CalendarDays className="h-3.5 w-3.5 text-primary" />
                      {selectedDate && format(selectedDate, "EEEE, MMM d, yyyy")}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-body text-foreground">
                      <Clock className="h-3.5 w-3.5 text-primary" />
                      {selectedTime}
                    </span>
                  </div>
                  <Button variant="hero-outline" size="sm" className="w-full" onClick={handleReset}>
                    Book Another
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Courses;
