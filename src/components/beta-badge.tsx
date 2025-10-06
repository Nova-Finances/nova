import { ArrowRight, Sparkles } from "lucide-react";

export function BetaBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-up">
      <Sparkles className="w-4 h-4 text-primary" />
      <span className="text-sm font-medium text-foreground">
        Now in Beta - Join the Waitlist
      </span>
      <ArrowRight className="w-4 h-4 text-primary" />
    </div>
  );
}
