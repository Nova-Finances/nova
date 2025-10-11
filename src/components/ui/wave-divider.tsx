"use client";

import { useEffect, useRef } from "react";

interface WaveDividerProps {
  className?: string;
  color?: string;
  height?: number;
}

export function WaveDivider({
  className = "",
  color = "#10B981",
  height = 60,
}: WaveDividerProps) {
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wave = waveRef.current;
    if (!wave) return;

    let animationId: number;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) * 0.001;
      const offset = elapsed * 15; // Control wave speed - much slower

      wave.style.background = `
        radial-gradient(ellipse at center bottom,
          ${color}40 0%,
          ${color}20 30%,
          transparent 70%
        ),
        linear-gradient(90deg,
          transparent 0%,
          ${color}15 ${20 + (offset % 80)}%,
          ${color}25 ${40 + (offset % 80)}%,
          ${color}15 ${60 + (offset % 80)}%,
          transparent 100%
        )
      `;

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [color]);

  return (
    <div
      ref={waveRef}
      className={`relative overflow-hidden ${className}`}
      style={{ height: `${height}px` }}
    >
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C150,100 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
          fill={`${color}30`}
        />
        <path
          d="M0,80 C200,120 400,40 600,80 C800,120 1000,40 1200,80 L1200,120 L0,120 Z"
          fill={`${color}20`}
        />
      </svg>
    </div>
  );
}
