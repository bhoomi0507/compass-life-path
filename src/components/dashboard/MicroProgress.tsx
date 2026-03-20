import { BookOpen, Award, Users } from "lucide-react";

interface MicroProgressProps {
  modulesCompleted?: number;
  totalModules?: number;
  testsPassed?: number;
  totalTests?: number;
  mentorSessions?: number;
}

const MicroProgress = ({
  modulesCompleted = 3,
  totalModules = 8,
  testsPassed = 1,
  totalTests = 3,
  mentorSessions = 2,
}: MicroProgressProps) => {
  const items = [
    { icon: BookOpen, label: "Modules", value: `${modulesCompleted}/${totalModules}`, pct: (modulesCompleted / totalModules) * 100 },
    { icon: Award, label: "Tests Passed", value: `${testsPassed}/${totalTests}`, pct: (testsPassed / totalTests) * 100 },
    { icon: Users, label: "Mentor Sessions", value: `${mentorSessions}`, pct: 100 },
  ];

  return (
    <div className="compass-card !p-6">
      <h3 className="font-display text-lg font-semibold text-foreground mb-4">Your Progress</h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <item.icon className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-body text-muted-foreground">{item.label}</p>
                <span className="text-xs font-body font-semibold text-foreground">{item.value}</span>
              </div>
              {item.label !== "Mentor Sessions" && (
                <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-700"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MicroProgress;
