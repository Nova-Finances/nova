import { PieChart, Shield, Target, TrendingUp, Users, Zap } from "lucide-react";
import { FeatureCard } from "./feature-card";

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Everything you need to master your finances
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Powerful tools designed to give you complete visibility and control
            over your financial life—without compromising your privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <FeatureCard
            Icon={TrendingUp}
            title="Smart Budget Tracking"
            description="Manually track expenses with intelligent categorization and insights that help you understand your spending patterns."
          />
          <FeatureCard
            Icon={Target}
            title="Goal-Based Savings"
            description="Set financial goals and track your progress with visual milestones that keep you motivated and on track."
          />
          <FeatureCard
            Icon={PieChart}
            title="Investment Portfolio"
            description="Monitor your investments across multiple platforms with comprehensive analytics and performance tracking."
          />
          <FeatureCard
            Icon={Shield}
            title="Privacy First"
            description="Your data stays yours. No bank connections required—complete control over your financial information."
          />
          <FeatureCard
            Icon={Zap}
            title="Real-Time Insights"
            description="Get instant notifications and actionable insights to make smarter financial decisions every day."
          />
          <FeatureCard
            Icon={Users}
            title="Family Sharing"
            description="Collaborate on budgets and goals with family members while maintaining individual privacy controls."
          />
        </div>
      </div>
    </section>
  );
}
