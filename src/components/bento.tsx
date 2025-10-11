import {
  ArtificialIntelligence04Icon,
  ShieldKeyIcon,
  SlowWindsIcon,
  Target01Icon,
  Wallet01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ProBadge } from "./pro-badge";
import { Card, CardContent, CardHeader } from "./ui/card";

export function Bento() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Grid principal responsivo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Security First - span 2 em desktop */}
        <Card className="relative overflow-hidden border-2 border-transparent bg-transparent rounded-none md:col-span-1 lg:col-span-2 group hover:scale-[1.02] transition-transform duration-300">
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#65a8ee] via-[#54dad2] to-[#7cf670] pointer-events-none"
            style={{
              padding: "2px",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          <div className="absolute -bottom-8 -right-8 pointer-events-none opacity-30">
            <HugeiconsIcon
              icon={ShieldKeyIcon}
              size={140}
              strokeWidth={1.5}
              color="#242424"
              className="rotate-[29deg]"
            />
          </div>

          <CardHeader className="font-['Unbounded'] text-xl sm:text-2xl relative z-10">
            Security First
          </CardHeader>
          <CardContent className="font-['Inter'] -mt-4 text-base sm:text-lg text-white/40 font-normal relative z-10">
            Enterprise-grade encryption and security protocols protect your data
            and your privacy.
          </CardContent>
        </Card>

        {/* Smart Budget Management - span 2 em desktop */}
        <Card className="relative overflow-hidden border-2 border-transparent bg-transparent rounded-none md:col-span-1 lg:col-span-2 group hover:scale-[1.02] transition-transform duration-300">
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#65a8ee] via-[#54dad2] to-[#7cf670] pointer-events-none"
            style={{
              padding: "2px",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          <div className="absolute -bottom-8 -right-8 pointer-events-none opacity-30">
            <HugeiconsIcon
              icon={Wallet01Icon}
              size={140}
              strokeWidth={1.5}
              color="#242424"
              className="rotate-[29deg]"
            />
          </div>

          <CardHeader className="font-['Unbounded'] text-xl sm:text-2xl relative z-10">
            Smart Budget Management
          </CardHeader>
          <CardContent className="font-['Inter'] -mt-4 text-base sm:text-lg text-white/40 font-normal relative z-10">
            Smart budget management helps you track your expenses and income,
            and make sure you're spending within your means.
          </CardContent>
        </Card>

        {/* Goal Tracking */}
        <Card className="relative overflow-hidden border-2 border-transparent bg-transparent rounded-none md:col-span-1 group hover:scale-[1.02] transition-transform duration-300 !py-4 !gap-3 min-h-[320px]">
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#65a8ee] via-[#54dad2] to-[#7cf670] pointer-events-none"
            style={{
              padding: "2px",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          <div className="absolute bottom-12 right-0 pointer-events-none opacity-30">
            <HugeiconsIcon
              icon={Target01Icon}
              size={120}
              strokeWidth={1.5}
              color="#242424"
              className="rotate-[29deg]"
            />
          </div>

          <CardHeader className="font-['Unbounded'] text-xl sm:text-2xl relative z-10 !pb-2">
            Goal Tracking
          </CardHeader>
          <CardContent className="font-['Inter'] text-base sm:text-lg text-white/40 font-normal relative z-10 flex-1 flex flex-col justify-between !pb-4">
            <p className="leading-relaxed">
              Set financial goals and track progress with milestone celebrations
              and smart recommendations.
            </p>
            <div className="mt-auto pt-4">
              <ProBadge />
            </div>
          </CardContent>
        </Card>

        {/* Cash Flow Analysis */}
        <Card className="relative overflow-hidden border-2 border-transparent bg-transparent rounded-none md:col-span-1 group hover:scale-[1.02] transition-transform duration-300 !py-4 !gap-3 min-h-[320px]">
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#65a8ee] via-[#54dad2] to-[#7cf670] pointer-events-none"
            style={{
              padding: "2px",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          <div className="absolute bottom-12 right-0 pointer-events-none opacity-30">
            <HugeiconsIcon
              icon={SlowWindsIcon}
              size={120}
              strokeWidth={1.5}
              color="#242424"
              className="rotate-[29deg]"
            />
          </div>

          <CardHeader className="font-['Unbounded'] text-xl sm:text-2xl relative z-10 !pb-2">
            Cash Flow Analysis
          </CardHeader>
          <CardContent className="font-['Inter'] text-base sm:text-lg text-white/40 font-normal relative z-10 flex-1 flex flex-col justify-between !pb-4">
            <p className="leading-relaxed">
              AI-powered insights help you understand and optimize your income
              and expense patterns.
            </p>
            <div className="mt-auto pt-4">
              <ProBadge />
            </div>
          </CardContent>
        </Card>

        {/* AI Predictions */}
        <Card className="relative overflow-hidden border-2 border-transparent bg-transparent rounded-none md:col-span-2 lg:col-span-2 group hover:scale-[1.02] transition-transform duration-300 !py-4 !gap-3 min-h-[320px]">
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#65a8ee] via-[#54dad2] to-[#7cf670] pointer-events-none"
            style={{
              padding: "2px",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          <div className="absolute bottom-12 -right-4 pointer-events-none opacity-30">
            <HugeiconsIcon
              icon={ArtificialIntelligence04Icon}
              size={120}
              strokeWidth={1.5}
              color="#242424"
              className="rotate-[29deg]"
            />
          </div>

          <CardHeader className="font-['Unbounded'] text-xl sm:text-2xl relative z-10 !pb-2">
            AI Predictions
          </CardHeader>
          <CardContent className="font-['Inter'] text-base sm:text-lg text-white/40 font-normal relative z-10 flex-1 flex flex-col justify-between !pb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="leading-relaxed">
                Get personalized spending predictions and proactive alerts to
                stay on track with your budget.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-gradient-brand mr-2">•</span>
                  <span>Real-time budget forecasting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gradient-brand mr-2">•</span>
                  <span>Smart overspending alerts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gradient-brand mr-2">•</span>
                  <span>Predictive expense analysis</span>
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-4">
              <ProBadge />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
