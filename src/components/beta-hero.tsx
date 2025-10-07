"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Lock, Shield, Sparkles, Zap } from "lucide-react";
import { Suspense, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import * as THREE from "three";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Spinner } from "./ui/spinner";

function noise(x: number, y: number, z: number) {
  const X = Math.floor(x) & 255;
  const Y = Math.floor(y) & 255;
  const Z = Math.floor(z) & 255;
  x -= Math.floor(x);
  y -= Math.floor(y);
  z -= Math.floor(z);
  const u = fade(x);
  const v = fade(y);
  const w = fade(z);
  return lerp(
    w,
    lerp(
      v,
      lerp(u, grad(X, Y, Z, x, y, z), grad(X + 1, Y, Z, x - 1, y, z)),
      lerp(
        u,
        grad(X, Y + 1, Z, x, y - 1, z),
        grad(X + 1, Y + 1, Z, x - 1, y - 1, z),
      ),
    ),
    lerp(
      v,
      lerp(
        u,
        grad(X, Y, Z + 1, x, y, z - 1),
        grad(X + 1, Y, Z + 1, x - 1, y, z - 1),
      ),
      lerp(
        u,
        grad(X, Y + 1, Z + 1, x, y - 1, z - 1),
        grad(X + 1, Y + 1, Z + 1, x - 1, y - 1, z - 1),
      ),
    ),
  );
}

function fade(t: number) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function lerp(t: number, a: number, b: number) {
  return a + t * (b - a);
}

function grad(
  X: number,
  Y: number,
  Z: number,
  x: number,
  y: number,
  z: number,
) {
  // Combine the integer lattice coords into a pseudo-random hash
  const hash = (X + Y * 57 + Z * 131) & 255;
  const h = hash & 15;
  const u = h < 8 ? x : y;
  const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
  return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
}

function SophisticatedParticleWave() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 20000;

  const { positions, sizes, colors, initialPositions } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const colors = new Float32Array(particleCount * 3);
    const initialPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() ** 0.5 * 25;
      const x = Math.cos(angle) * radius + (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 15;
      const z = Math.sin(angle) * radius + (Math.random() - 0.5) * 20;

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      initialPositions[i3] = x;
      initialPositions[i3 + 1] = y;
      initialPositions[i3 + 2] = z;

      const depth = (z + 20) / 40;
      sizes[i] = (Math.random() * 0.4 + 0.2) * depth;

      const colorMix = (y + 15) / 30;
      colors[i3] = 0.06 + colorMix * 0.02; // R
      colors[i3 + 1] = 0.72 + colorMix * 0.08; // G
      colors[i3 + 2] = 0.5 + colorMix * 0.15; // B
    }

    return { positions, sizes, colors, initialPositions };
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;

    const time = state.clock.getElapsedTime();
    const positions = particlesRef.current.geometry.attributes.position
      .array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const x = initialPositions[i3];
      const y = initialPositions[i3 + 1];
      const z = initialPositions[i3 + 2];

      const wave1 = Math.sin(x * 0.08 + time * 0.6) * 2.5;
      const wave2 = Math.cos(z * 0.06 + time * 0.4) * 2;
      const wave3 = Math.sin((x + z) * 0.04 + time * 0.5) * 1.5;

      const noiseValue = Math.sin(x * 0.1 + z * 0.1 + time * 0.3) * 0.5;

      const depth = (z + 20) / 40;
      const amplitude = 1 + depth * 2;
      const finalY = y + (wave1 + wave2 + wave3 + noiseValue) * amplitude;

      positions[i3] = x + Math.sin(time * 0.2 + y * 0.1) * 0.5;
      positions[i3 + 1] = finalY;
      positions[i3 + 2] = z + Math.cos(time * 0.15 + x * 0.1) * 0.3;
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;

    particlesRef.current.rotation.y = Math.sin(time * 0.1) * 0.1;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function AmbientParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 5000;

  const { positions, sizes } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 60;
      positions[i3 + 1] = (Math.random() - 0.5) * 40;
      positions[i3 + 2] = (Math.random() - 0.5) * 50 - 10;

      sizes[i] = Math.random() * 0.15 + 0.05;
    }

    return { positions, sizes };
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;
    const time = state.clock.getElapsedTime();

    particlesRef.current.rotation.y = time * 0.02;
    particlesRef.current.rotation.x = Math.sin(time * 0.05) * 0.05;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#0D9488"
        transparent
        opacity={0.3}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    state.camera.position.x = Math.sin(time * 0.1) * 2;
    state.camera.position.y = Math.cos(time * 0.15) * 1;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.1} />
      <pointLight position={[15, 10, 15]} intensity={0.4} color="#10B981" />
      <pointLight position={[-15, -10, 10]} intensity={0.3} color="#14B8A6" />

      <SophisticatedParticleWave />
      <AmbientParticles />
    </group>
  );
}

export function BetaHero() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  async function handleJoin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const next = email.trim();
    if (!isValidEmail(next)) {
      setError("Please enter a valid email.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: next }),
      });
      const data = await res.json();
      if (!res.ok || !data?.success) {
        throw new Error(data?.error || "Failed to subscribe");
      }
      toast.success("You've been added to the waitlist!");
      setEmail("");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="relative min-h-screen w-full bg-black">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90 z-10" />

      <div className="relative z-20 flex min-h-screen items-center justify-center px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto text-center space-y-6 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-fade-in">
            <Lock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Exclusive Beta Access
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance animate-fade-in-up">
            The Future of{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Finance
            </span>
            <br />
            Is Being Built
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto text-balance leading-relaxed animate-fade-in-up">
            We're crafting the next generation of personal finance management.
            Currently in private beta with selected early adopters.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-4 animate-fade-in-up">
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-white">AI-Powered Insights</h3>
              <p className="text-sm text-gray-400 text-center">
                Smart predictions and personalized recommendations
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-white">Real-Time Analytics</h3>
              <p className="text-sm text-gray-400 text-center">
                Instant insights into your financial health
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-white">Security First</h3>
              <p className="text-sm text-gray-400 text-center">
                Your data stays yours. No bank connections required.
              </p>
            </div>
          </div>

          <div className="mt-4 animate-fade-in-up">
            <div className="max-w-md mx-auto space-y-4">
              <p className="text-sm text-gray-400">
                Want early access? Join the waitlist and we'll notify you when
                spots open up.
              </p>
              <form onSubmit={handleJoin} className="flex gap-2">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-white/5 backdrop-blur-sm border-white/10 h-12 text-white placeholder:text-gray-500"
                  disabled={submitting}
                  aria-label="Email address"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 px-8 bg-primary hover:bg-primary/90"
                  disabled={submitting}
                >
                  {submitting ? <Spinner /> : "Join Waitlist"}
                </Button>
              </form>
              {error && <p className="text-xs text-red-400">{error}</p>}
              <p className="text-xs text-gray-500">
                Limited spots available. First come, first served.
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Currently in Private Beta</span>
          </div>
        </div>
      </div>
    </div>
  );
}
