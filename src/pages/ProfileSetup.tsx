import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ProgressIndicator from "@/components/ProgressIndicator";
import {
  X, AlertCircle, ChevronRight, ChevronLeft,
  Briefcase, Home, Building2, GraduationCap, FileText, PauseCircle, Plus, Trash2
} from "lucide-react";

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

const JOURNEY_TYPES = [
  { value: "education", label: "Education", icon: GraduationCap },
  { value: "internship", label: "Internship", icon: FileText },
  { value: "job", label: "Job", icon: Briefcase },
  { value: "career-break", label: "Career Break", icon: PauseCircle },
];

const EXPERIENCE_OPTIONS = [
  { value: "beginner", label: "Beginner", desc: "I'm just starting out with no prior experience" },
  { value: "intermediate", label: "Intermediate", desc: "I have some practical exposure or training" },
  { value: "experienced", label: "Experienced", desc: "I have significant hands-on work experience" },
];

const WORK_PREF_OPTIONS = [
  { value: "remote", label: "Remote", desc: "I want to work from home", icon: Home },
  { value: "on-site", label: "On-site", desc: "I prefer going to a workplace", icon: Building2 },
  { value: "flexible", label: "Flexible", desc: "I'm open to both options", icon: Briefcase },
];

interface JourneyItem {
  type: string;
  title: string;
  duration: string;
}

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // Step 1
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // Step 2
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [otherSkill, setOtherSkill] = useState("");
  const [otherInterest, setOtherInterest] = useState("");

  // Step 3 — Career Journey
  const [journey, setJourney] = useState<JourneyItem[]>([
    { type: "", title: "", duration: "" }
  ]);

  // Step 4
  const [experience, setExperience] = useState("");
  const [workPreference, setWorkPreference] = useState("");

  const [showError, setShowError] = useState(false);

  const toggleItem = (item: string, list: string[], setList: (v: string[]) => void) => {
    setList(list.includes(item) ? list.filter((i) => i !== item) : [...list, item]);
  };

  const handleJourneyChange = (index: number, field: keyof JourneyItem, value: string) => {
    const updated = [...journey];
    updated[index] = { ...updated[index], [field]: value };
    setJourney(updated);
    setShowError(false);
  };

  const addJourney = () => {
    setJourney([...journey, { type: "", title: "", duration: "" }]);
  };

  const removeJourney = (index: number) => {
    if (journey.length > 1) {
      setJourney(journey.filter((_, i) => i !== index));
    }
  };

  const isStep1Valid = name.trim() !== "" && age.trim() !== "";
  const isStep2Valid = selectedSkills.length > 0 && selectedInterests.length > 0;
  const isStep3Valid = journey.every((j) => j.type && j.title.trim() && j.duration.trim());
  const isStep4Valid = experience !== "" && workPreference !== "";

  const stepValidity = [isStep1Valid, isStep2Valid, isStep3Valid, isStep4Valid];

  const handleNext = () => {
    if (!stepValidity[step - 1]) {
      setShowError(true);
      return;
    }
    setShowError(false);
    if (step < 4) {
      setStep(step + 1);
    } else {
      localStorage.setItem("userName", name);
      localStorage.setItem("userAge", age);
      localStorage.setItem("skills", JSON.stringify(selectedSkills));
      localStorage.setItem("interests", JSON.stringify(selectedInterests));
      localStorage.setItem("journey", JSON.stringify(journey));
      localStorage.setItem("experience", experience);
      localStorage.setItem("workPreference", workPreference);
      navigate("/lifestyle");
    }
  };

  const handleBack = () => {
    setShowError(false);
    if (step > 1) setStep(step - 1);
  };

  const currentValid = stepValidity[step - 1];

  const stepTitles = [
    "Let's get to know you",
    "Your skills & interests",
    "Your career journey",
    "Experience & preferences",
  ];

  const stepDescs = [
    "Tell us your name and age so we can personalize your journey.",
    "Select what you're good at and what excites you.",
    "Share your background — education, jobs, or breaks you've taken.",
    "Help us understand your experience level and work style.",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="max-w-2xl mx-auto px-6">
          <ProgressIndicator currentStep={1} steps={["Profile", "Lifestyle", "Career Matches"]} />

          {/* Internal step indicator */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  s <= step ? "w-10 bg-primary" : "w-6 bg-border"
                }`}
              />
            ))}
          </div>

          <div className="text-center mb-10">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              {stepTitles[step - 1]}
            </h1>
            <p className="text-muted-foreground font-body text-sm">
              {stepDescs[step - 1]}
            </p>
          </div>

          {showError && !currentValid && (
            <div className="flex items-center gap-2 p-4 mb-8 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm font-body">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              Please complete all required fields before continuing.
            </div>
          )}

          {/* STEP 1: Name + Age */}
          {step === 1 && (
            <div className="space-y-8">
              <div className="space-y-2">
                <label className="text-sm font-body font-medium text-foreground">
                  What should we call you? <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setShowError(false); }}
                  placeholder="e.g. Priya"
                  className="w-full h-12 rounded-xl border border-input bg-card px-4 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-body font-medium text-foreground">
                  Your age <span className="text-destructive">*</span>
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => { setAge(e.target.value); setShowError(false); }}
                  placeholder="e.g. 22"
                  min="13"
                  max="99"
                  className="w-full h-12 rounded-xl border border-input bg-card px-4 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-primary"
                />
              </div>
            </div>
          )}

          {/* STEP 2: Skills + Interests */}
          {step === 2 && (
            <div className="space-y-10">
              <div className="space-y-3">
                <label className="text-sm font-body font-medium text-foreground">
                  Current Skills <span className="text-destructive">*</span>
                </label>
                <p className="text-xs text-muted-foreground font-body">Select all skills that apply to you.</p>
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
                    className="w-full h-10 rounded-xl border border-input bg-card px-4 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-primary mt-2"
                  />
                )}
              </div>

              <div className="space-y-3">
                <label className="text-sm font-body font-medium text-foreground">
                  Areas of Interest <span className="text-destructive">*</span>
                </label>
                <p className="text-xs text-muted-foreground font-body">What fields excite you the most?</p>
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
                    className="w-full h-10 rounded-xl border border-input bg-card px-4 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-primary mt-2"
                  />
                )}
              </div>
            </div>
          )}

          {/* STEP 3: Career Journey */}
          {step === 3 && (
            <div className="space-y-6">
              {journey.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card p-5 space-y-4 relative"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  {journey.length > 1 && (
                    <button
                      onClick={() => removeJourney(index)}
                      className="absolute top-4 right-4 text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}

                  {/* Type selector pills */}
                  <div className="space-y-2">
                    <label className="text-sm font-body font-medium text-foreground">
                      Type <span className="text-destructive">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {JOURNEY_TYPES.map((jt) => {
                        const Icon = jt.icon;
                        const isSelected = item.type === jt.value;
                        return (
                          <button
                            key={jt.value}
                            onClick={() => handleJourneyChange(index, "type", jt.value)}
                            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-body transition-all duration-200 border ${
                              isSelected
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-card text-foreground border-border hover:border-primary"
                            }`}
                          >
                            <Icon className="h-3.5 w-3.5" />
                            {jt.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-body font-medium text-foreground">
                      Title <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => handleJourneyChange(index, "title", e.target.value)}
                      placeholder="e.g. BSc Computer Science, Marketing Intern"
                      className="w-full h-11 rounded-xl border border-input bg-background px-4 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-primary"
                    />
                  </div>

                  {/* Duration */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-body font-medium text-foreground">
                      Duration <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      value={item.duration}
                      onChange={(e) => handleJourneyChange(index, "duration", e.target.value)}
                      placeholder="e.g. 3 years, 6 months"
                      className="w-full h-11 rounded-xl border border-input bg-background px-4 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-primary"
                    />
                  </div>
                </div>
              ))}

              <button
                onClick={addJourney}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-dashed border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors text-sm font-body"
              >
                <Plus className="h-4 w-4" />
                Add another entry
              </button>
            </div>
          )}

          {/* STEP 4: Experience + Work Preference */}
          {step === 4 && (
            <div className="space-y-10">
              <div className="space-y-3">
                <label className="text-sm font-body font-medium text-foreground">
                  Experience Level <span className="text-destructive">*</span>
                </label>
                <div className="grid gap-3">
                  {EXPERIENCE_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => { setExperience(opt.value); setShowError(false); }}
                      className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 ${
                        experience === opt.value
                          ? "bg-primary text-primary-foreground border-primary shadow-md"
                          : "bg-card text-foreground border-border hover:border-primary"
                      }`}
                    >
                      <span className="font-semibold text-sm">{opt.label}</span>
                      <p className={`text-xs mt-1 ${experience === opt.value ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                        {opt.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-body font-medium text-foreground">
                  Do you want to work from home? <span className="text-destructive">*</span>
                </label>
                <div className="grid gap-3">
                  {WORK_PREF_OPTIONS.map((opt) => {
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => { setWorkPreference(opt.value); setShowError(false); }}
                        className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 flex items-center gap-4 ${
                          workPreference === opt.value
                            ? "bg-primary text-primary-foreground border-primary shadow-md"
                            : "bg-card text-foreground border-border hover:border-primary"
                        }`}
                      >
                        <Icon className={`h-5 w-5 flex-shrink-0 ${workPreference === opt.value ? "text-primary-foreground" : "text-muted-foreground"}`} />
                        <div>
                          <span className="font-semibold text-sm">{opt.label}</span>
                          <p className={`text-xs mt-0.5 ${workPreference === opt.value ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                            {opt.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="mt-10 flex items-center gap-3">
            {step > 1 && (
              <Button
                variant="outline"
                size="lg"
                onClick={handleBack}
                className="border-border text-foreground hover:bg-muted"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back
              </Button>
            )}
            <Button
              variant="hero"
              size="xl"
              onClick={handleNext}
              className="flex-1"
            >
              {step === 4 ? "Continue" : "Next"}
              {step < 4 && <ChevronRight className="h-4 w-4 ml-1" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
