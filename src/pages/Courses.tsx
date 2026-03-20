import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Course Assistant
            </h1>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Chat with our AI assistant to discover courses tailored to your career goals and learning style.
            </p>
          </div>

          <div className="compass-card !p-8 text-center mb-12">
            <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">
              Use the chatbot in the bottom-right corner to ask about courses, get recommendations, or learn more about your career path.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["What courses fit my career?", "How do I complete my course?", "Explain my roadmap"].map((q) => (
                <span
                  key={q}
                  className="text-xs font-body px-3 py-1.5 rounded-full border border-border bg-secondary/40 text-muted-foreground"
                >
                  "{q}"
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/learning-path">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Learning Path
              </Link>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <Link to="/opportunities">
                View Opportunities <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
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
