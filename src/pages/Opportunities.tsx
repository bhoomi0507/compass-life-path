import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, IndianRupee, Info, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const jobs = [
  { title: "Content Writer", company: "DigitalSpark", type: "Remote", pay: "₹15,000 – ₹40,000/month" },
  { title: "Virtual Assistant", company: "RemoteDesk", type: "Freelance", pay: "₹20,000 – ₹50,000/month" },
  { title: "Social Media Manager", company: "BrandHive", type: "Remote", pay: "₹25,000 – ₹60,000/month" },
  { title: "Online Tutor", company: "LearnBridge", type: "Remote", pay: "₹20,000 – ₹55,000/month" },
  { title: "Data Entry Specialist", company: "InfoStream", type: "Freelance", pay: "₹10,000 – ₹25,000/month" },
  { title: "Blog Editor", company: "ContentCraft", type: "Remote", pay: "₹20,000 – ₹45,000/month" },
];

const Opportunities = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Career Opportunities</h1>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">Explore real flexible career opportunities matched to your profile.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {jobs.map((job) => (
              <div key={job.title + job.company} className="compass-card flex flex-col group">
                <div className="w-10 h-10 rounded-xl bg-secondary/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{job.title}</h3>
                <p className="text-sm text-muted-foreground font-body mb-4">{job.company}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/60 text-xs font-body font-medium text-foreground">
                    <MapPin className="h-3 w-3 text-primary" /> {job.type}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/60 text-xs font-body font-medium text-foreground">
                    <IndianRupee className="h-3 w-3 text-primary" /> {job.pay}
                  </span>
                </div>
                <Button variant="hero" size="default" className="mt-auto w-full">
                  Apply
                </Button>
              </div>
            ))}
          </div>

          <div className="compass-card text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-semibold text-foreground">Coming Soon</h3>
            </div>
            <p className="text-sm text-muted-foreground font-body max-w-lg mx-auto">
              In the full platform, opportunities will be sourced from remote job boards and freelance platforms, automatically matched to your skills and availability.
            </p>
          </div>

          <div className="flex justify-center">
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/dashboard"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Opportunities;
