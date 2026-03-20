import { Flame, Star, Trophy } from "lucide-react";

const GamificationBar = () => {
  const badges = [
    { icon: Flame, label: "Streak", value: "3 days", color: "text-orange-500" },
    { icon: Star, label: "Points", value: "120 XP", color: "text-yellow-500" },
    { icon: Trophy, label: "Badge", value: "First Step", color: "text-primary" },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {badges.map((b) => (
        <div
          key={b.label}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border shadow-sm"
        >
          <b.icon className={`h-4 w-4 ${b.color}`} />
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-body leading-none">{b.label}</p>
            <p className="text-xs font-body font-semibold text-foreground">{b.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GamificationBar;
