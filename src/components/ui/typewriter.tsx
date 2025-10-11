"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  delay?: number;
  className?: string;
}

export function Typewriter({
  text,
  delay = 150,
  className = "",
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      // Pequena pausa quando termina
      const completeTimeout = setTimeout(() => {
        setIsComplete(true);
      }, 300);
      return () => clearTimeout(completeTimeout);
    }
  }, [currentIndex, delay, text, isComplete]);

  return <span className={className}>{displayText}</span>;
}
