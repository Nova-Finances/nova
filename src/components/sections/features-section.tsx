import {
  Brain,
  Check,
  Lightbulb,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Upload,
  Wallet,
} from "lucide-react";
import { Bento } from "../bento";

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Powerful features, built for your financial freedom
          </h2>
          <p className="text-lg text-white/40 max-w-4xl mx-auto">
            From smart budgeting to real-time spending insights — discover tools
            designed to help you take control of your money effortlessly.
          </p>
        </div>

        <Bento />
      </div>
    </section>
  );
}
