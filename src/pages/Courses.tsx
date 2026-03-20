import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { GraduationCap, Clock, BookOpen, ArrowRight, ArrowLeft, IndianRupee, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  { title: "Content Writing Fundamentals", platform: "Coursera", duration: "6 weeks", level: "Beginner", price: "₹3,999", incomeAfter: "₹25,000 – ₹60,000/month" },
  { title: "SEO Writing Masterclass", platform: "Udemy", duration: "5 weeks", level: "Beginner", price: "₹2,999", incomeAfter: "₹30,000 – ₹70,000/month" },
  { title: "Blogging for Beginners", platform: "LinkedIn Learning", duration: "3 weeks", level: "Beginner", price: "₹2,499", incomeAfter: "₹20,000 – ₹50,000/month" },
  { title: "Social Media Marketing 101", platform: "Coursera", duration: "4 weeks", level: "Intermediate", price: "₹4,999", incomeAfter: "₹30,000 – ₹80,000/month" },
  { title: "Freelancing Essentials", platform: "Udemy", duration: "3 weeks", level: "Beginner", price: "₹2,799", incomeAfter: "₹20,000 – ₹60,000/month" },
  { title: "Virtual Assistant Training", platform: "Skillshare", duration: "2 weeks", level: "Beginner", price: "₹1,999", incomeAfter: "₹20,000 – ₹50,000/month" },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Recommended Courses</h1>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">Curated courses to help you build the skills you need. Start learning at your own pace.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {courses.map((c) => (
              <div key={c.title} className="compass-card flex flex-col group">
                <div className="w-10 h-10 rounded-xl bg-secondary/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{c.title}</h3>
                <p className="text-xs text-muted-foreground font-body mb-3">{c.platform}</p>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground font-body mb-4">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-secondary/60">
                    <Clock className="h-3 w-3" /> {c.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-secondary/60">
                    <BookOpen className="h-3 w-3" /> {c.level}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-secondary/60">
                    <IndianRupee className="h-3 w-3" /> {c.price}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/5 border border-primary/10 mb-4">
                  <TrendingUp className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                  <span className="text-xs font-body text-foreground">Estimated income: <strong>{c.incomeAfter}</strong></span>
                </div>
                <Button variant="hero-outline" size="sm" className="mt-auto w-full">
                  View Course
                </Button>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/learning-path"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Learning Path</Link>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <Link to="/opportunities">View Opportunities <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Courses;
