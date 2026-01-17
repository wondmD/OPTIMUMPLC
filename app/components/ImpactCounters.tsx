"use client";

import { useEffect, useState, useRef } from "react";
import { Users, Briefcase, Truck, School } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLParagraphElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16); // 60fps approx
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <p ref={countRef} className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
      {count.toLocaleString()}{suffix}
    </p>
  );
};

export default function ImpactCounters() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-slate-900 py-16 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-dots-white animate-dots" />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-slate-900" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Clients */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
              <Users size={24} />
            </div>
            <div className="space-y-1">
              <AnimatedCounter end={900} suffix="+" />
              <p className="text-base font-semibold text-emerald-200 uppercase tracking-wider">Clients supported</p>
              <p className="text-sm text-white/50 leading-relaxed">Manufacturers • Traders • NGOs</p>
            </div>
          </div>

          {/* Consulting */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20">
              <Briefcase size={24} />
            </div>
            <div className="space-y-1">
              <AnimatedCounter end={540} suffix="+" />
              <p className="text-base font-semibold text-amber-200 uppercase tracking-wider">Consulting engagements</p>
              <p className="text-sm text-white/50 leading-relaxed">Process, tax, and compliance</p>
            </div>
          </div>

          {/* Shipments */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400 ring-1 ring-sky-500/20">
              <Truck size={24} />
            </div>
            <div className="space-y-1">
              <AnimatedCounter end={3000} suffix="+" />
              <p className="text-base font-semibold text-sky-200 uppercase tracking-wider">Shipments managed</p>
              <p className="text-sm text-white/50 leading-relaxed">Freight • Clearance • Delivery</p>
            </div>
          </div>

          {/* Trainings */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-400 ring-1 ring-rose-500/20">
              <School size={24} />
            </div>
            <div className="space-y-1">
              <AnimatedCounter end={500} suffix="+" />
              <p className="text-base font-semibold text-rose-200 uppercase tracking-wider">Personnel trained</p>
              <p className="text-sm text-white/50 leading-relaxed">Role-based technical workshops</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
