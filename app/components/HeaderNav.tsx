"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/trainings", label: "Training" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function HeaderNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    window.addEventListener("orientationchange", close);
    return () => {
      window.removeEventListener("resize", close);
      window.removeEventListener("orientationchange", close);
    };
  }, []);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 text-[var(--brand-navy)] shadow-lg ring-1 ring-slate-200/80 backdrop-blur-md">
      <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-main.png"
            alt="Optimum Logistics"
            width={146}
            height={50}
            priority
            className="h-12 w-auto sm:h-14"
          />
          <span className="hidden sm:block text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--brand-navy)]">
            We simplify trade
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-[16px] font-semibold md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative pb-1 transition hover:text-[var(--brand-red)]"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-1 h-[2px] scale-x-0 bg-[var(--brand-red)] transition duration-200 group-hover/link:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-full bg-[var(--brand-red)] px-6 py-[10px] text-[15px] font-bold uppercase tracking-[0.05em] text-white shadow-md transition hover:-translate-y-0.5 md:inline-flex"
          >
            Request a quote
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-[var(--brand-navy)] shadow-sm transition hover:border-slate-300 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="space-y-1.5">
              <span className={`block h-[2px] w-5 rounded-full bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block h-[2px] w-5 rounded-full bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-[2px] w-5 rounded-full bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden border-t border-slate-200 bg-white px-4 transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 py-4 text-[16px] font-semibold uppercase tracking-[0.04em] text-[var(--brand-navy)]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-2 py-2 hover:bg-slate-100"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--brand-red)] px-5 py-[10px] text-[15px] font-bold uppercase tracking-[0.05em] text-white shadow-md"
            onClick={() => setOpen(false)}
          >
            Request a quote
          </Link>
        </div>
      </div>
    </header>
  );
}
