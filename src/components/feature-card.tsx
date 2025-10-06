import type { LucideIcon } from "lucide-react";
import { Card, CardDescription, CardTitle } from "./ui/card";

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card">
      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
        {<Icon size={24} className="text-primary" />}
      </div>
      <CardTitle className="text-xl font-semibold mb-3">{title}</CardTitle>
      <CardDescription className="text-muted-foreground leading-relaxed">
        {description}
      </CardDescription>
    </Card>
  );
}
