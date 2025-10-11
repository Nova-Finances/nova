import { BackgroundGradient } from "@/components/background-gradient";
import { Footer } from "@/components/footer";
import { GradientDefinitions } from "@/components/gradient-definitions";
import { Navigation } from "@/components/navigation";
import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { WaitlistCTA } from "@/components/waitlist-cta";
import { WaveDivider } from "./wave";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0f1115] text-white overflow-hidden">
      <GradientDefinitions />
      <BackgroundGradient />
      <Navigation />
      <HeroSection />
      <WaveDivider
        amplitude={30}
        frequency={6}
        gradientColors={["#65a8ee", "#54dad2", "#7cf670"]}
        height={100}
        layers={4}
        animationDuration={6}
        animationDirection="reverse"
        width={1100}
      />
      <FeaturesSection />
      <WaveDivider
        amplitude={30}
        frequency={6}
        gradientColors={["#65a8ee", "#54dad2", "#7cf670"]}
        height={100}
        layers={4}
        animationDuration={6}
        animationDirection="reverse"
        width={1100}
      />
      <HowItWorksSection />
      <WaveDivider
        amplitude={30}
        frequency={6}
        gradientColors={["#65a8ee", "#54dad2", "#7cf670"]}
        height={100}
        layers={4}
        animationDuration={6}
        animationDirection="reverse"
        width={1100}
      />
      <PricingSection />
      <WaveDivider
        amplitude={30}
        frequency={6}
        gradientColors={["#65a8ee", "#54dad2", "#7cf670"]}
        height={100}
        layers={4}
        animationDuration={6}
        animationDirection="reverse"
        width={1100}
      />
      <WaitlistCTA />
      <Footer />
    </div>
  );
}
