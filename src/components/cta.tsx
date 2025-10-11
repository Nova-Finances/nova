/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
import { ArrowRight } from "lucide-react";
import { BetaBadge } from "@/components/beta/beta-badge";
import { Button } from "./ui/button";

export function CTA() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <BetaBadge />

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up text-balance">
            Personal Finance,{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Reimagined
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in-up leading-relaxed text-pretty">
            Take control of your financial future with intelligent tools that
            help you budget, save, and invest—without connecting your bank
            accounts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
            <Button size="lg" className="w-full sm:w-auto text-base px-8 h-12">
              Join Waitlist
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base px-8 h-12 bg-transparent"
            >
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in-up">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Limited beta spots available</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>Security first</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Early access benefits</span>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 max-w-5xl mx-auto animate-fade-in-up">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
            <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 via-primary/5 to-background">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/modern-fintech-dashboard-interface-with-charts-and-3CAeuni8fVbtMaqktetPd9XOqaMtep.jpg"
                alt="FinFlow Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
