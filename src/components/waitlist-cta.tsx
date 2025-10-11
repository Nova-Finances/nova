"use client";

import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("Successfully joined the waitlist!");
        setEmail("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Failed to join waitlist. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="relative w-full">
      <div className="relative rounded-none overflow-hidden">
        <div className="relative bg-transparent rounded-none pt-20 sm:pt-32 pb-20 sm:pb-20 px-4 sm:px-6 lg:px-8 text-center space-y-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-brand opacity-80" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-['Unbounded'] relative z-10 text-black">
            Finance Management Reimagined
          </h2>
          <p className="text-lg mt-4 text-black/70 max-w-3xl mx-auto relative z-10 font-['Inter']">
            Join our exclusive beta waitlist and get early access to{" "}
            <span className="font-normal text-black font-['Unbounded']">
              NOVA
            </span>
            . Limited spots available for users who want to transform their
            financial management.
          </p>

          <form
            onSubmit={handleWaitlistSubmit}
            className="max-w-2xl mx-auto mt-8  relative z-10 p-4 border"
          >
            <div className="relative rounded-none">
              <div className="flex flex-col sm:flex-row gap-4 rounded-none">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 dark:bg-black border-0 text-white placeholder:text-white/69 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 px-6 py-6 font-['Inter'] placeholder:font-['Unbounded']"
                  required
                />
                <Button
                  id="join-waitlist"
                  type="submit"
                  size="lg"
                  className="bg-black cursor-pointer group h-12 text-white hover:bg-black/90 gap-2 rounded-none font-['Unbounded'] px-8 whitespace-nowrap border-0"
                  disabled={loading}
                >
                  <span className="text-gradient-brand">Join Waitlist</span>
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={20}
                    className="gradient-icon group-hover:translate-x-1 transition-transform"
                    strokeWidth={1.5}
                  />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
