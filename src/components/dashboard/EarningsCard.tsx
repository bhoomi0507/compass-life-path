import { IndianRupee, TrendingUp } from "lucide-react";

const EarningsCard = () => {
  const months = [
    { label: "Month 1", range: "₹0 – ₹5,000", opacity: "opacity-60" },
    { label: "Month 2", range: "₹5,000 – ₹15,000", opacity: "opacity-80" },
    { label: "Month 3+", range: "₹15,000+", opacity: "" },
  ];

  return (
    <div className="compass-card !p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <IndianRupee className="h-4 w-4 text-primary" />
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground">Earning Potential</h3>
      </div>
      <div className="space-y-3">
        {months.map((m) => (
          <div key={m.label} className={`flex items-center justify-between px-4 py-2.5 rounded-xl bg-muted/50 ${m.opacity}`}>
            <span className="text-xs font-body text-muted-foreground">{m.label}</span>
            <div className="flex items-center gap-1.5">
              <TrendingUp className="h-3 w-3 text-primary" />
              <span className="text-sm font-body font-semibold text-foreground">{m.range}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarningsCard;
