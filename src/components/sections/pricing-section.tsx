"use client";

import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Smart pricing, built for growth
          </h2>
          <p className="text-lg text-white/40 max-w-4xl mx-auto">
            Transparent, scalable plans designed to help you manage and grow
            your finances effortlessly.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="relative inline-flex p-[2px] bg-gradient-brand">
            <div className="inline-flex bg-[#15181d]">
              <Button
                type="button"
                onClick={() => setIsAnnual(false)}
                variant="ghost"
                className={`px-8 py-2 text-sm font-medium transition-all rounded-none font-['Unbounded'] ${
                  !isAnnual
                    ? "bg-gradient-brand text-black hover:text-black hover:bg-gradient-brand"
                    : "text-white/40 hover:bg-white/5 bg-[#15181d]"
                }`}
              >
                MONTHLY
              </Button>
              <Button
                type="button"
                onClick={() => setIsAnnual(true)}
                variant="ghost"
                className={`px-8 py-2 text-sm font-medium transition-all rounded-none font-['Unbounded'] ${
                  isAnnual
                    ? "bg-gradient-brand text-black hover:text-black hover:bg-gradient-brand"
                    : "text-white/40 hover:bg-white/5 bg-[#15181d]"
                }`}
              >
                ANNUAL (-10%)
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <div className="border border-white/20 rounded-none p-8 space-y-6 backdrop-blur-sm">
            <div className="inline-block bg-gradient-brand font-medium font-['Unbounded'] text-black text-xs px-4 py-1 rounded-none">
              BETA FREE
            </div>
            <div>
              <h3 className="text-2xl font-medium font-['Unbounded'] mb-2">
                Free Plan
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-medium font-['Unbounded']">
                  $0
                </span>
                <span className="text-white/40 font-['Unbounded'] font-normal">
                  /month
                </span>
              </div>
              <p className="text-white/40 font-['Inter'] font-normal">
                Perfect to get started.
              </p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                {/* <Check className="w-5 h-5 text-primary flex-shrink-0" /> */}
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  size={20}
                  className="gradient-icon"
                  strokeWidth={1.5}
                />
                Basic financial tracking
              </li>
              <li className="flex items-start gap-2 text-sm">
                {/* <Check className="w-5 h-5 text-primary flex-shrink-0" /> */}
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  size={20}
                  className="gradient-icon"
                  strokeWidth={1.5}
                />
                Up to 50 transactions/month
              </li>
              <li className="flex items-start gap-2 text-sm">
                {/* <Check className="w-5 h-5 text-primary flex-shrink-0" /> */}
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  size={20}
                  className="gradient-icon"
                  strokeWidth={1.5}
                />
                3 budget categories
              </li>
              <li className="flex items-start gap-2 text-sm">
                {/* <Check className="w-5 h-5 text-primary flex-shrink-0" /> */}
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  size={20}
                  className="gradient-icon"
                  strokeWidth={1.5}
                />
                Weekly spending reports
              </li>
              <li className="flex items-start gap-2 text-sm">
                {/* <Check className="w-5 h-5 text-primary flex-shrink-0" /> */}
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  size={20}
                  className="gradient-icon"
                  strokeWidth={1.5}
                />
                Mobile app access
              </li>
            </ul>

            <Button
              variant="outline"
              className="w-full hover:cursor-pointer border-white/32 bg-transparent rounded-none font-['Unbounded'] p-6"
            >
              Join Beta Waitlist
            </Button>
            <p className="text-xs text-white/32 text-center font-['Inter']">
              Available during beta. No credit card required
            </p>
          </div>

          {/* Premium Plan */}
          <div className="relative p-[2px] bg-gradient-brand scale-105">
            <div className="p-8 space-y-6 bg-[#15181d] backdrop-blur-sm relative shadow-xl shadow-primary/20">
              <div className="inline-block bg-gradient-brand font-medium font-['Unbounded'] text-black text-xs px-4 py-1 rounded-none">
                MOST POPULAR
              </div>
              <div>
                <h3 className="text-2xl font-medium font-['Unbounded'] mb-2">
                  Premium Plan
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-medium font-['Unbounded']">
                    $TBD
                  </span>
                  <span className="text-white/40 font-['Inter'] font-normal">
                    /month
                  </span>
                </div>
                <p className="text-white/40 font-['Inter'] font-normal">
                  Pricing to be announced
                </p>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  {/* <Check className="w-5 h-5 text-primary flex-shrink-0" /> */}
                  <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    size={20}
                    className="gradient-icon"
                    strokeWidth={1.5}
                  />
                  AI-powered financial insights
                </li>
                <li className="flex items-start gap-2 text-sm">
                  {/* <Check className="w-5 h-5 text-primary flex-shrink-0" /> */}
                  <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    size={20}
                    className="gradient-icon"
                    strokeWidth={1.5}
                  />
                  Unlimited transaction imports
                </li>
                <li className="flex items-start gap-2 text-sm">
                  {/* <Check className="w-5 h-5 text-primary flex-shrink-0" /> */}
                  <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    size={20}
                    className="gradient-icon"
                    strokeWidth={1.5}
                  />
                  Custom budget categories
                </li>
                <li className="flex items-start gap-2 text-sm">
                  {/* <Check className="w-5 h-5 text-primary flex-shrink-0" /> */}
                  <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    size={20}
                    className="gradient-icon"
                    strokeWidth={1.5}
                  />
                  Export reports (PDF & CSV)
                </li>
                <li className="flex items-start gap-2 text-sm">
                  {/* <Check className="w-5 h-5 text-primary flex-shrink-0" /> */}
                  <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    size={20}
                    className="gradient-icon"
                    strokeWidth={1.5}
                  />
                  Priority email support
                </li>
                <li className="flex items-start gap-2 text-sm">
                  {/* <Check className="w-5 h-5 text-primary flex-shrink-0" /> */}
                  <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    size={20}
                    className="gradient-icon"
                    strokeWidth={1.5}
                  />
                  Early access to new features
                </li>
                <li className="flex items-start gap-2 text-sm">
                  {/* <Check className="w-5 h-5 text-primary flex-shrink-0" /> */}
                  <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    size={20}
                    className="gradient-icon"
                    strokeWidth={1.5}
                  />
                  Smart spending alerts
                </li>
              </ul>

              <Button className="w-full hover:cursor-pointer bg-gradient-brand font-medium text-lg text-black hover:bg-gradient-brand/90 rounded-none font-['Unbounded'] p-6">
                Join Beta Waitlist
              </Button>
              <p className="text-xs text-white/40 text-center font-['Inter'] font-normal">
                Lock in special beta pricing when you join now. No credit card
                required.
              </p>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="border border-white/20 rounded-none p-8 space-y-6 bg-[#15181d]/30 backdrop-blur-sm">
            <div className="inline-block bg-gradient-brand font-medium font-['Unbounded'] text-black text-xs px-4 py-1 rounded-none">
              BETA ELITE
            </div>
            <div>
              <h3 className="text-2xl font-medium font-['Unbounded'] mb-2">
                Enterprise Plan
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-medium font-['Unbounded']">
                  $TBD
                </span>
                <span className="text-white/40 font-['Inter'] font-normal">
                  /month
                </span>
              </div>
              <p className="text-white/40 font-['Inter'] font-normal">
                Custom pricing for teams
              </p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                {/* <Check className="w-5 h-5 text-primary flex-shrink-0" /> */}
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  size={20}
                  className="gradient-icon"
                  strokeWidth={1.5}
                />
                Everything in Premium
              </li>
              <li className="flex items-start gap-2 text-sm">
                {/* <Check className="w-5 h-5 text-primary flex-shrink-0" /> */}
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  size={20}
                  className="gradient-icon"
                  strokeWidth={1.5}
                />
                Multi-user accounts (up to 5)
              </li>
              <li className="flex items-start gap-2 text-sm">
                {/* <Check className="w-5 h-5 text-primary flex-shrink-0" /> */}
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  size={20}
                  className="gradient-icon"
                  strokeWidth={1.5}
                />
                Shared budgets & goals
              </li>
              <li className="flex items-start gap-2 text-sm">
                {/* <Check className="w-5 h-5 text-primary flex-shrink-0" /> */}
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  size={20}
                  className="gradient-icon"
                  strokeWidth={1.5}
                />
                Dedicated account manager
              </li>
              <li className="flex items-start gap-2 text-sm">
                {/* <Check className="w-5 h-5 text-primary flex-shrink-0" /> */}
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  size={20}
                  className="gradient-icon"
                  strokeWidth={1.5}
                />
                White-label options
              </li>
              <li className="flex items-start gap-2 text-sm">
                {/* <Check className="w-5 h-5 text-primary flex-shrink-0" /> */}
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  size={20}
                  className="gradient-icon"
                  strokeWidth={1.5}
                />
                24/7 priority support
              </li>
              <li className="flex items-start gap-2 text-sm">
                {/* <Check className="w-5 h-5 text-primary flex-shrink-0" /> */}
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  size={20}
                  className="gradient-icon"
                  strokeWidth={1.5}
                />
                Custom reporting & analytics
              </li>
            </ul>

            <div className="relative p-[1px] bg-gradient-brand w-full">
              <Button
                size="lg"
                className="hover:cursor-pointer gap-2 rounded-none font-['Unbounded'] font-normal bg-[#15181d] hover:bg-gradient-brand border-0 w-full group transition-all"
              >
                <span className="text-gradient-brand group-hover:[background:transparent!important] group-hover:[background-clip:unset!important] group-hover:[-webkit-background-clip:unset!important] group-hover:[-webkit-text-fill-color:black!important] transition-all">
                  Join Beta Waitlist
                </span>
              </Button>
            </div>
            <p className="text-xs text-white/32 text-center font-['Inter'] font-normal">
              Perfect for teams and businesses. Custom solutions available.
            </p>
          </div>
        </div>

        <p className="text-center mt-12 text-white/40 font-['Inter'] font-normal">
          Beta users will receive{" "}
          <span className="text-gradient-brand font-semibold font-['Unbounded']">
            lifetime discounts
          </span>{" "}
          and{" "}
          <span className="text-gradient-brand font-semibold font-['Unbounded']">
            priority access
          </span>{" "}
          to all future features.
        </p>
      </div>
    </section>
  );
}
