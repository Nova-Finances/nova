"use client";

import { GithubIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Chromium, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FieldSet>
      <FieldTitle className="text-2xl font-bold font-['Unbounded']">
        Sign in to your account
      </FieldTitle>
      <FieldDescription className="text-md font-normal text-muted-foreground font-['Inter']">
        Enter your credentials to access your dashboard.
      </FieldDescription>
      <FieldGroup>
        <Field>
          <div className="btn-gradient-outline rounded-none w-full">
            <Button className="hover:cursor-pointer btn-gradient-outline-inner gap-2 rounded-none font-['Unbounded'] font-normal bg-transparent border-0 hover:bg-transparent w-full p-6">
              <Chromium className="gradient-icon" />
              <span className="text-gradient-brand">Continue with Google</span>
            </Button>
          </div>
        </Field>
        <Field>
          <div className="btn-gradient-outline rounded-none w-full">
            <Button className="hover:cursor-pointer btn-gradient-outline-inner gap-2 rounded-none font-['Unbounded'] font-normal bg-transparent border-0 hover:bg-transparent w-full p-6">
              <HugeiconsIcon
                icon={GithubIcon}
                size={24}
                className="gradient-icon"
                strokeWidth={1.5}
              />
              <span className="text-gradient-brand">Continue with GitHub</span>
            </Button>
          </div>
        </Field>
        <FieldSeparator />
        <Field>
          <FieldLabel className="text-md font-normal text-muted-foreground font-['Unbounded']">
            Email
          </FieldLabel>
          <FieldContent>
            <div className="relative border border-border rounded-none focus-within:border-transparent focus-within:bg-gradient-brand focus-within:p-[2px] transition-all">
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="flex-1 dark:bg-black border-0 text-white placeholder:text-white/69 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 p-6 font-['Inter'] placeholder:font-['Unbounded']"
                required
              />
            </div>
          </FieldContent>
        </Field>
        <Field>
          <div className="flex justify-between items-center mb-2">
            <FieldLabel className="text-md font-normal text-muted-foreground font-['Unbounded'] mb-0">
              Password
            </FieldLabel>
            <button
              type="button"
              className="text-sm text-gradient-brand hover:opacity-80 transition-opacity font-['Unbounded']"
            >
              Forgot your password?
            </button>
          </div>
          <FieldContent>
            <div className="relative border border-border rounded-none focus-within:border-transparent focus-within:bg-gradient-brand focus-within:p-[2px] transition-all">
              <div className="relative bg-black">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  minLength={8}
                  className="flex-1 dark:bg-black border-0 text-white placeholder:text-white/69 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 p-6 font-['Inter'] placeholder:font-['Unbounded']"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white transition-colors z-10"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </FieldContent>
        </Field>
        <Field>
          <Button className="w-full rounded-none bg-gradient-brand p-6 font-['Unbounded'] font-medium text-black hover:scale-[1.02] cursor-pointer hover:shadow-[0_0_30px_rgba(101,168,238,0.4),0_0_60px_rgba(84,218,210,0.3),0_0_90px_rgba(124,246,112,0.2)] hover:brightness-110 transition-all duration-300 ease-out">
            Sign in
          </Button>
        </Field>
      </FieldGroup>
    </FieldSet>
  );
}
