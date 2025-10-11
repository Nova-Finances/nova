import Image from "next/image";
import Link from "next/link";
import { SignInForm } from "@/components/forms/sign-in-form";
import { GradientDefinitions } from "@/components/gradient-definitions";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function SignInPage() {
  return (
    <>
      <GradientDefinitions />
      <div className="min-h-screen flex relative">
        {/* Logo */}
        <Link
          href="/"
          className="absolute cursor-pointer top-8 left-8 z-20 flex gap-3 items-center justify-center"
        >
          <Image
            src="/logo.png"
            alt="Nova Logo"
            width={40}
            height={40}
            draggable={false}
            className="drop-shadow-lg"
          />
          <h1 className="text-2xl font-bold font-['Unbounded'] text-gradient-brand">
            NOVA
          </h1>
        </Link>

        {/* Left Side - Sign In Form */}
        <div className="flex-1 flex items-center justify-center p-8 bg-[#0f1115]">
          <div className="w-full max-w-md">
            <SignInForm />
          </div>
        </div>

        {/* Right Side - Visual/Branding */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-brand relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />

          {/* Grid Pattern Background */}
          <GridPattern
            width={50}
            height={50}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_right,transparent,white,transparent)] opacity-30",
            )}
          />

          <div className="relative z-10 flex flex-col items-center justify-center w-full p-12 text-white">
            <div className="max-w-xl w-full">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-6xl font-bold mb-4 font-['Unbounded'] leading-tight">
                  Welcome Back
                </h1>
                <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                <p className="text-xl text-white/90 font-['Inter']">
                  Continue your financial journey
                </p>
              </div>

              {/* Features List - Minimal Design */}
              <div className="space-y-12">
                {/* Feature 1 */}
                <div className="flex items-start gap-6 animate-float group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/30 blur-xl"></div>
                    <svg
                      className="w-12 h-12 relative z-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-2xl font-bold mb-2 font-['Unbounded']">
                      Track Everything
                    </h3>
                    <p className="text-white/80 text-base font-['Inter'] leading-relaxed">
                      Monitor all your expenses and income in one place
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/20"></div>

                {/* Feature 2 */}
                <div className="flex items-start gap-6 animate-float-delayed group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/30 blur-xl"></div>
                    <svg
                      className="w-12 h-12 relative z-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-2xl font-bold mb-2 font-['Unbounded']">
                      Smart Insights
                    </h3>
                    <p className="text-white/80 text-base font-['Inter'] leading-relaxed">
                      Get AI-powered recommendations to optimize your finances
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/20"></div>

                {/* Feature 3 */}
                <div className="flex items-start gap-6 animate-float-delayed-2 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/30 blur-xl"></div>
                    <svg
                      className="w-12 h-12 relative z-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-2xl font-bold mb-2 font-['Unbounded']">
                      Security First
                    </h3>
                    <p className="text-white/80 text-base font-['Inter'] leading-relaxed">
                      Your data is encrypted and protected with
                      industry-standard security
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative blurs */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        </div>
      </div>
    </>
  );
}
