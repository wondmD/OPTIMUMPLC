"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const slides = [
  {
    image: "/partner-banner.png",
    title: "Global sourcing with bonded transit",
    text: "We move cargo from Asia, Middle East, Europe, and Africa into Addis with single-window handling and door delivery.",
  },
  {
    image: "/cargo-movement.jpeg",
    title: "We move cargo worldwide to Addis",
    text: "Sea, air, and land freight with bonded transit through key gateways and corridors.",
  },
  {
    image: "/cutoms-singlewindow.webp",
    title: "Customs, duty-free, and single-window",
    text: "Regulatory filings and HS code validation handled end-to-end.",
  },
  {
    image: "/training-and-development.jpg",
    title: "Training that sticks",
    text: "Trade, finance, and leadership training that levels up your team.",
  },
];

export default function HeroSlider() {
  const [idx, setIdx] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % total);
    }, 9000);
    return () => clearInterval(t);
  }, [total]);

  const go = (n: number) => setIdx((n + total) % total);

  const styles = useMemo(() => {
    // compute positional styles per slide (prev, active, next) for a 3D feel
    return slides.map((_, i) => {
      if (i === idx)
        return {
          transform: "translate3d(0,0,0) rotateY(0deg) scale(1)",
          zIndex: 20 as const,
          opacity: 1,
        };
      if ((i + 1) % total === idx) {
        // prev of active (to left)
        return {
          transform: "translate3d(-40px,0,0) rotateY(-14deg) scale(0.92)",
          zIndex: 10 as const,
          opacity: 0.6,
        };
      }
      if ((idx + 1) % total === i) {
        // next of active (to right)
        return {
          transform: "translate3d(40px,0,0) rotateY(14deg) scale(0.92)",
          zIndex: 10 as const,
          opacity: 0.6,
        };
      }
      return {
        transform: "scale(0.9)",
        zIndex: 0 as const,
        opacity: 0,
      };
    });
  }, [idx, total]);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[80vh] md:h-[78vh]">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute inset-0" style={{ perspective: "1200px" }}>
          {slides.map((s, i) => (
            <div
              key={s.title}
              className={`absolute inset-0 transform-gpu transition duration-700 ease-out will-change-transform`}
              style={styles[i]}
            >
              <span suppressHydrationWarning>
                <Image src={s.image} alt={s.title} fill priority={i === 0} className="object-cover" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(35,29,79,0.72)] via-[rgba(20,113,62,0.6)] to-[rgba(203,37,41,0.5)]" />
              <div className="pointer-events-none absolute left-0 right-0 top-0 flex justify-center p-6 sm:p-8">
                <p className="text-center text-2xl font-bold uppercase tracking-[0.18em] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)] sm:text-4xl">
                  Optimum Logistics and Investment Consulting
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-14">
                <div className="max-w-3xl rounded-2xl bg-white/10 p-6 backdrop-blur-md ring-1 ring-white/20">
                  <h1 className="text-3xl font-bold text-white sm:text-5xl">{s.title}</h1>
                  <p className="mt-3 text-white/90 sm:text-lg">{s.text}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href="/services"
                      className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
                      style={{ backgroundColor: "var(--brand-navy)" }}
                    >
                      Move my cargo
                    </a>
                    <a
                      href="/trainings"
                      className="inline-flex items-center rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                    >
                      View trainings
                    </a>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm font-semibold text-white/90">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-white ring-1 ring-white/20">
                      <span className="text-white">☎</span>
                      <span>+251 11 125 0386 • +251 913 335 596 • +251 711 335 596 • +251 962 083 792</span>
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-white ring-1 ring-white/20">
                      <span className="text-white">✉</span>
                      <span>contact@optimumlogisticsplc.com • info@optimumlogisticsplc.com</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-6 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${i === idx ? "bg-white" : "bg-white/50"}`}
            />)
          )}
        </div>

        <div className="absolute inset-y-0 left-0 flex items-center p-4">
          <button
            aria-label="Previous slide"
            onClick={() => go(idx - 1)}
            className="rounded-full bg-white/70 px-3 py-2 text-sm font-semibold text-slate-900 shadow transition hover:bg-white"
          >
            ‹
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center p-4">
          <button
            aria-label="Next slide"
            onClick={() => go(idx + 1)}
            className="rounded-full bg-white/70 px-3 py-2 text-sm font-semibold text-slate-900 shadow transition hover:bg-white"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
