"use client";

import { useEffect, useRef } from "react";

interface FloatingCardProps {
  children: React.ReactNode;
  intensity?: number;
  speed?: number;
  className?: string;
}

export function FloatingCard({
  children,
  intensity = 0.3,
  speed = 0.5,
  className = "",
}: FloatingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let animationId: number;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) * 0.001 * speed;
      const offsetY = Math.sin(elapsed) * 3 * intensity;
      const offsetX = Math.cos(elapsed * 0.8) * 2 * intensity;

      card.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [intensity, speed]);

  return (
    <div
      ref={cardRef}
      className={`transition-transform duration-500 ${className}`}
    >
      {children}
    </div>
  );
}
