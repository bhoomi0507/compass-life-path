import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProgressIndicator from "@/components/ProgressIndicator";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface Career {
  id: number;
  title: string;
  description: string;
}

export default function CareerRecommendations() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [careers, setCareers] = useState<Career[]>([]);
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const selectedInterest = localStorage.getItem("interest") || "ai";
    console.log("Selected interest:", selectedInterest);

    const fetchCareers = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1200));
        const response = await fetch("http://localhost:5000/ai-recommendation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userInput: selectedInterest,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        // AI returns numbered text, convert to objects
        const jobs = data.recommendation
          ?.split(/\d+\./)
          .filter((j: string) => j.trim() !== "")
          .map((job: string, index: number) => ({
            id: index,
            title: job.split(":")[0].replace(/\*\*/g, "").trim(),
            description: job.split(":")[1]?.trim() || "",
          })) || [];

        setCareers(jobs);

      } catch (err) {
        console.error("AI error:", err);

        // Hackathon fallback (if AI fails)
        setCareers([
          {
            id: 1,
            title: "AI Product Manager",
            description: "Lead the development of AI-powered products and tools."
          },
          {
            id: 2,
            title: "Machine Learning Intern",
            description: "Work on training ML models and analyzing data."
          },
          {
            id: 3,
            title: "AI Content Creator",
            description: "Create educational and marketing content about AI."
          },
          {
            id: 4,
            title: "AI Research Assistant",
            description: "Support AI research projects and experiments."
          },
          {
            id: 5,
            title: "Prompt Engineer",
            description: "Design prompts that improve AI responses."
          }
        ]);

 
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  const handleSelectCareer = (career: Career) => {
    setSelectedCareer(career);
  };

  const handleContinue = () => {
    navigate("/learning-path");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 container max-w-3xl mx-auto px-4 py-10">
        <ProgressIndicator
          currentStep={3}
          steps={["Profile", "Lifestyle", "Career Matches", "Learning Path"]}
        />

        <div className="mt-8 mb-6">
          <h1 className="text-2xl font-bold text-foreground">
            Career Recommendations
          </h1>
          <p className="text-muted-foreground mt-1">
            Based on your interests, here are your top career matches.
          </p>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <p className="text-muted-foreground text-lg animate-pulse">
              Generating your career matches...
            </p>
          </div>
        )}

        {error && (
          <div className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-destructive text-sm">
            {error}
          </div>
        )}

        {!loading && careers.length > 0 && (
          <div className="flex flex-col gap-4">
            {careers.map((career) => {
              const isSelected = selectedCareer?.id === career.id;

              return (
                <button
                  key={career.id}
                  onClick={() => handleSelectCareer(career)}
                  className={`w-full text-left rounded-xl border p-5 transition-all ${
                    isSelected
                      ? "border-primary bg-primary/5 shadow-md"
                      : "border-border bg-card hover:border-primary/50 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-base font-semibold text-foreground">
                        {career.title}
                      </h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {career.description}
                      </p>
                    </div>

                    {isSelected && (
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {selectedCareer && (
          <div className="mt-8 flex justify-end">
            <Button onClick={handleContinue} size="lg">
              Continue
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}