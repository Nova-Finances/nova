"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface WaveDividerProps {
  /** Wave amplitude (height of peaks) - default: 40 */
  amplitude?: number;
  /** Wave frequency (number of waves) - default: 3 */
  frequency?: number;
  /** Gradient colors array - default: ['#8b5cf6', '#ec4899', '#f59e0b'] */
  gradientColors?: string[];
  /** Animation duration in seconds - default: 8 */
  animationDuration?: number;
  /** Vertical size in pixels - default: 120 */
  height?: number;
  /** Number of wave layers - default: 5 */
  layers?: number;
  /** Animation direction - default: 'normal' */
  animationDirection?: "normal" | "reverse";
  /** Additional CSS classes */
  className?: string;
  /** Opacity of waves - default: 0.6 */
  opacity?: number;
  /** Horizontal width in pixels or percentage - default: '100%' */
  width?: number | string;
}

export function WaveDivider({
  amplitude = 40,
  frequency = 3,
  gradientColors = ["#8b5cf6", "#ec4899", "#f59e0b"],
  animationDuration = 8,
  height = 120,
  layers = 5,
  animationDirection = "normal",
  className,
  opacity = 0.6,
  width = "100%",
}: WaveDividerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    const startTime = Date.now();
    const centerX = canvas.width / (window.devicePixelRatio || 1) / 2;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = (currentTime - startTime) / 1000;

      const basePhase = (elapsed / animationDuration) * Math.PI * 2;
      const phase = animationDirection === "reverse" ? -basePhase : basePhase;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw multiple wave layers
      for (let layer = 0; layer < layers; layer++) {
        const layerProgress = layer / layers;
        const layerPhase = phase + layerProgress * Math.PI * 2;
        const layerAmplitude = amplitude * (1 - layerProgress * 0.3);
        const layerFrequency = frequency + layerProgress * 0.5;

        // Create gradient for this layer
        const gradient = ctx.createLinearGradient(
          0,
          0,
          canvas.width / (window.devicePixelRatio || 1),
          0,
        );
        gradientColors.forEach((color, index) => {
          const position = index / (gradientColors.length - 1);
          gradient.addColorStop(position, color);
        });

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2 + layer * 0.5;
        ctx.globalAlpha = opacity * (1 - layerProgress * 0.4);

        // Draw wave expanding from center
        const points = 200;
        const maxWidth = canvas.width / (window.devicePixelRatio || 1);
        const expansionFactor = 1.0;

        for (let i = 0; i <= points; i++) {
          const t = i / points;
          const x = centerX + (t - 0.5) * maxWidth * expansionFactor;
          const distanceFromCenter = Math.abs(x - centerX) / (maxWidth / 2);
          const edgeFade = (1 - distanceFromCenter) ** 2;

          const y =
            height / 2 +
            Math.sin(t * Math.PI * 2 * layerFrequency + layerPhase) *
              layerAmplitude *
              edgeFade *
              expansionFactor;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    amplitude,
    frequency,
    gradientColors,
    animationDuration,
    height,
    layers,
    animationDirection,
    opacity,
  ]);

  return (
    <div
      className={cn(
        "relative w-full flex items-center justify-center overflow-hidden",
        className,
      )}
      style={{ height }}
    >
      <canvas
        ref={canvasRef}
        className="absolute"
        style={{
          width: typeof width === "number" ? `${width}px` : width,
          height: "100%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
}
