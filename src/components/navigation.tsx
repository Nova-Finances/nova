"use client";

import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "pricing"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`transition-colors font-['Unbounded'] font-light cursor-pointer ${
                activeSection === "home"
                  ? "text-white"
                  : "text-white/40 hover:text-white"
              }`}
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`transition-colors font-['Unbounded'] font-light cursor-pointer ${
                activeSection === "features"
                  ? "text-white"
                  : "text-white/40 hover:text-white"
              }`}
            >
              Features
            </button>
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`transition-colors font-['Unbounded'] font-light cursor-pointer ${
                activeSection === "pricing"
                  ? "text-white"
                  : "text-white/40 hover:text-white"
              }`}
            >
              Pricing
            </button>
          </div>

          <Button
            className="bg-gradient-brand cursor-pointer font-['Unbounded'] font-normal text-black hover:bg-primary/90 shadow-lg gap-2 rounded-none group"
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
