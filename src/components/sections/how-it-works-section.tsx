import {
  ArtificialIntelligence04Icon,
  ArtificialIntelligence06Icon,
  ChartHistogramIcon,
  CloudUploadFreeIcons,
  Idea01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: CloudUploadFreeIcons,
      title: "Import Your Data",
      description:
        "Securely upload your financial statements or connect via CSV. No bank account linking required. Your data stays private and encrypted.",
    },
    {
      number: "02",
      icon: ArtificialIntelligence06Icon,
      title: "AI Analysis",
      description:
        "Our advanced AI analyzes your spending patterns, identifies trends, and categorizes transactions automatically with smart insights.",
    },
    {
      number: "03",
      icon: Idea01Icon,
      title: "Get Insights",
      description:
        "Receive personalized recommendations, budget suggestions, and actionable insights to improve your financial health and achieve your goals.",
    },
  ];

  return (
    <section className="relative py-20 px-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Unbounded']">
            How it works, redefined for modern finance
          </h2>
          <p className="text-lg text-white/40 max-w-4xl mx-auto font-['Inter']">
            Understand the journey from setup to success — built for clarity,
            speed, and total financial confidence.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line entre cards */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}

              {/* Badge numérico */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-brand text-black w-12 h-12 sm:w-14 sm:h-14 rounded-none flex items-center justify-center font-medium text-lg sm:text-xl z-10 font-['Unbounded']">
                {step.number}
              </div>

              {/* Card */}
              <div className="relative border border-primary/30 rounded-none p-6 sm:p-8 space-y-4 sm:space-y-6 bg-[#15181d]/30 backdrop-blur-sm hover:border-primary/50 hover:bg-[#15181d]/50 transition-all duration-300 h-full flex flex-col min-h-[320px] sm:min-h-[340px]">
                {/* Ícone */}
                <HugeiconsIcon
                  icon={step.icon}
                  size={40}
                  className="gradient-icon sm:w-12 sm:h-12"
                  strokeWidth={1.5}
                />

                {/* Título */}
                <h3 className="text-xl sm:text-2xl font-semibold font-['Unbounded']">
                  {step.title}
                </h3>

                {/* Descrição */}
                <p className="text-white/40 text-base sm:text-lg font-['Inter'] leading-relaxed flex-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
