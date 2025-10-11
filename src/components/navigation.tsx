"use client";

import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f1115]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="NOVA Logo"
              width={50}
              height={50}
              className="w-12 h-12 sm:w-14 sm:h-14 shrink-0"
            />
            <span className="font-['Unbounded'] text-2xl sm:text-3xl font-medium text-gradient-brand">
              NOVA
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm lg:text-base">
            <a
              href="#home"
              className="text-white hover:text-primary transition-colors font-['Unbounded'] font-light"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-white/40 hover:text-white transition-colors font-['Unbounded'] font-light"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-white/40 hover:text-white transition-colors font-['Unbounded'] font-light"
            >
              Pricing
            </a>
          </div>

          <Button
            className="bg-gradient-brand font-['Unbounded'] font-normal text-black hover:bg-primary/90 shadow-lg gap-2 rounded-none group"
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
              className="group-hover:translate-x-1 transition-transform"
              strokeWidth={1.5}
            />
          </Button>
        </div>
      </div>
    </nav>
  );
}
