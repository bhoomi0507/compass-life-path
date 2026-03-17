import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ProgressIndicator from "@/components/ProgressIndicator";
import { X, AlertCircle } from "lucide-react";

const SKILLS = [
  "Writing", "Communication", "Teaching", "Graphic Design", "Social Media",
  "Marketing", "Organization", "Data Entry", "Customer Support", "Video Editing",
  "Basic Programming", "Research", "Administrative Skills", "Other"
];

const INTERESTS = [
  "Writing", "Education", "Design", "Business", "Technology",
  "Marketing", "Social Impact", "Entrepreneurship", "Health & Wellness",
  "Psychology", "Creative Arts", "Other"
];

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [education, setEducation] = useState("");
  const [school, setSchool] = useState("");
  const [experience, setExperience] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [otherSkill, setOtherSkill] = useState("");
  const [otherInterest, setOtherInterest] = useState("");
  const [showError, setShowError] = useState(false);

  const toggleItem = (item: string, list: string[], setList: (v: string[]) => void) => {
    setList(list.includes(item) ? list.filter((i) => i !== item) : [...list, item]);
  };

  const isValid = education && school.trim() && experience && selectedSkills.length > 0 && selectedInterests.length > 0;

  const handleContinue = () => {
    if (!isValid) {
      setShowError(true);
      return;
    }
    navigate("/lifestyle");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="max-w-2xl mx-auto px-6">
          <ProgressIndicator currentStep={1} steps={["Profile", "Lifestyle", "Career Matches"]} />

          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Tell Us About Yourself</h1>
            <p className="text-muted-foreground font-body">This helps us personalize your career recommendations. Please fill in all fields below.</p>
          </div>

          {showError && !isValid && (
            <div className="flex items-center gap-2 p-4 mb-8 rounded-2xl bg-destructive/10 border border-destructive/20 text-destructive text-sm font-body">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              Please complete all required fields before continuing.
            </div>
          )}

          <div className="space-y-10">
            {/* Education */}
            <div className="space-y-2">
              <label className="text-sm font-body font-medium text-foreground">Education Level <span className="text-destructive">*</span></label>
              <p className="text-xs text-muted-foreground font-body">Select the highest level of education you've completed.</p>
              <select
                value={education}
                onChange={(e) => { setEducation(e.target.value); setShowError(false); }}
                className="w-full h-12 rounded-2xl border border-input bg-background px-4 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select your education level</option>
                <option value="high-school">High School</option>
                <option value="diploma">Diploma</option>
                <option value="undergraduate">Undergraduate Degree</option>
                <option value="postgraduate">Postgraduate Degree</option>
                <option value="self-taught">Self-taught / Online Learning</option>
              </select>
            </div>

            {/* School / College Name */}
            <div className="space-y-2">
              <label className="text-sm font-body font-medium text-foreground">School / College Name <span className="text-destructive">*</span></label>
              <p className="text-xs text-muted-foreground font-body">Enter the name of your most recent school, college, or university.</p>
              <input
                type="text"
                value={school}
                onChange={(e) => { setSchool(e.target.value); setShowError(false); }}
                placeholder="e.g. University of Lagos"
                className="w-full h-12 rounded-2xl border border-input bg-background px-4 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <label className="text-sm font-body font-medium text-foreground">Current Skills <span className="text-destructive">*</span></label>
              <p className="text-xs text-muted-foreground font-body">Select all skills that apply to you. Choose at least one.</p>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => { toggleItem(skill, selectedSkills, setSelectedSkills); setShowError(false); }}
                    className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-200 border ${
                      selectedSkills.includes(skill)
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card text-foreground border-border hover:border-primary"
                    }`}
                  >
                    {skill}
                    {selectedSkills.includes(skill) && <X className="inline ml-1 h-3 w-3" />}
                  </button>
                ))}
              </div>
              {selectedSkills.includes("Other") && (
                <input
                  type="text"
                  value={otherSkill}
                  onChange={(e) => setOtherSkill(e.target.value)}
                  placeholder="Type your skill here..."
                  className="w-full h-10 rounded-2xl border border-input bg-background px-4 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring mt-2"
                />
              )}
            </div>

            {/* Interests */}
            <div className="space-y-3">
              <label className="text-sm font-body font-medium text-foreground">Areas of Interest <span className="text-destructive">*</span></label>
              <p className="text-xs text-muted-foreground font-body">What fields are you most curious about? Select at least one.</p>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => { toggleItem(interest, selectedInterests, setSelectedInterests); setShowError(false); }}
                    className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-200 border ${
                      selectedInterests.includes(interest)
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card text-foreground border-border hover:border-primary"
                    }`}
                  >
                    {interest}
                    {selectedInterests.includes(interest) && <X className="inline ml-1 h-3 w-3" />}
                  </button>
                ))}
              </div>
              {selectedInterests.includes("Other") && (
                <input
                  type="text"
                  value={otherInterest}
                  onChange={(e) => setOtherInterest(e.target.value)}
                  placeholder="Type your interest here..."
                  className="w-full h-10 rounded-2xl border border-input bg-background px-4 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring mt-2"
                />
              )}
            </div>

            {/* Experience */}
            <div className="space-y-2">
              <label className="text-sm font-body font-medium text-foreground">Experience Level <span className="text-destructive">*</span></label>
              <p className="text-xs text-muted-foreground font-body">How much work experience do you have? It's okay to be a beginner.</p>
              <select
                value={experience}
                onChange={(e) => { setExperience(e.target.value); setShowError(false); }}
                className="w-full h-12 rounded-2xl border border-input bg-background px-4 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select your experience level</option>
                <option value="beginner">Beginner</option>
                <option value="some">Some experience</option>
                <option value="experienced">Experienced</option>
              </select>
            </div>

            <Button
              variant="hero"
              size="xl"
              className="w-full"
              onClick={handleContinue}
              disabled={showError && !isValid}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
