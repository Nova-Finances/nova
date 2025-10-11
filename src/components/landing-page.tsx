import { BackgroundGradient } from "@/components/background-gradient";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { GradientDefinitions } from "@/components/gradient-definitions";
import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { Navigation } from "@/components/navigation";
import { PricingSection } from "@/components/pricing-section";
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
