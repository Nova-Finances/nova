"use client";

import { ArrowRight01Icon, Login02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-['Unbounded']">
                Take control of your money,
                <br />
                <span className="text-gradient-brand">effortlessly.</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/40 max-w-2xl font-['Inter'] font-normal">
                Track your expenses, set your goals, and grow your savings — all
                in one simple, intelligent platform built to make your financial
                life easier.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="font-['Unbounded'] font-normal text-sm sm:text-base text-black hover:bg-primary/90 group shadow-xl gap-2 hover:cursor-pointer rounded-none bg-gradient-brand w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 h-auto"
                onClick={() =>
                  document
                    .getElementById("waitlist")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="hidden sm:inline">Join Waitlist</span>
                <span className="sm:hidden">Join Waitlist</span>
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={24}
                  color="gradient-brand"
                  strokeWidth={1.5}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>
              <div className="btn-gradient-outline rounded-none w-full sm:w-auto">
                <Button
                  asChild
                  className="hover:cursor-pointer btn-gradient-outline-inner gap-2 rounded-none font-['Unbounded'] font-normal text-sm sm:text-base bg-transparent border-0 hover:bg-transparent w-full px-6 sm:px-8 py-3 sm:py-4 h-auto"
                >
                  <Link href="/sign-in">
                    <HugeiconsIcon
                      icon={Login02Icon}
                      size={20}
                      className="gradient-icon"
                      strokeWidth={1.5}
                    />
                    <span className="text-gradient-brand">Sign In</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative w-full aspect-square">
              <Image
                src="/hero-cards.png"
                alt="Financial Dashboard"
                draggable={false}
                width={500}
                height={500}
                className="w-full h-full object-contain drop-shadow-2xl"
                style={{
                  filter: "drop-shadow(0 0 30px rgba(16,185,129,0.3))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
