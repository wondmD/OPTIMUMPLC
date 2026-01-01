"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavLink = {
  href: string;
  label: string;
  dropdown?: boolean;
  dropdownTraining?: boolean;
};

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // Services handled separately to enable dropdown
  { href: "/services", label: "Services", dropdown: true },
  // Trainings handled separately to enable dropdown
  { href: "/trainings", label: "Training", dropdownTraining: true },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const serviceItems = [
  { label: "Customs Clearing", href: "/services#customs-clearing" },
  { label: "Freight Forwarding", href: "/services#freight-forwarding" },
  { label: "Port Clearance", href: "/services#port-clearance" },
  { label: "Global Purchase (Asia, ME, EU, Africa)", href: "/services#foreign-purchase" },
  { label: "Packaging, Moving & Warehousing", href: "/services#packaging-moving-warehousing" },
  { label: "Duty-free Processes Support", href: "/services#duty-free-processes-support" },
  { label: "Single Window Registrations & Data Submissions", href: "/services#single-window-registrations-data-submissions" },
  { label: "Consulting (Business, Tax, Import/Export, Investment)", href: "/services#consulting" },
  { label: "Marketing & Sales", href: "/services#marketing-sales" },
  { label: "Environmental Impact Assessment (EIA)", href: "/services#environmental-impact-assessment" },
  { label: "Tax Auditing", href: "/services#tax-auditing" },
];

const trainingItems = [
  { label: "Entrepreneurship & Business Thinking", href: "/trainings#entrepreneur-business-thinking" },
  { label: "Motivational Speaking", href: "/trainings#motivational-speaking" },
  { label: "International Trade & Basic Terms", href: "/trainings#international-trade-basic-terms" },
  { label: "Import/Export Mandatory Documents & Concepts", href: "/trainings#import-export-mandatory-documents-concepts" },
  { label: "Investment & Marketing", href: "/trainings#investment-marketing" },
  { label: "Logistics & Moving Cargo", href: "/trainings#logistics-moving-cargo" },
  { label: "HR Systems & Leadership", href: "/trainings#hr-management-systems-leadership" },
  { label: "Customer Ethics", href: "/trainings#customer-ethics" },
  { label: "Kaizen Philosophy", href: "/trainings#kaizen-philosophy" },
  { label: "Finance & Tax Administration Systems", href: "/trainings#finance-tax-administration-systems" },
  { label: "Single Window & Online Trade Apps", href: "/trainings#single-window-online-trade-applications" },
];

export default function HeaderNav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [trainingsOpen, setTrainingsOpen] = useState(false);
  const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const trainingsCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openServices = () => {
    if (servicesCloseTimer.current) {
      clearTimeout(servicesCloseTimer.current);
      servicesCloseTimer.current = null;
    }
    setServicesOpen(true);
  };

  const scheduleCloseServices = (delay = 180) => {
    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
    servicesCloseTimer.current = setTimeout(() => {
      setServicesOpen(false);
      servicesCloseTimer.current = null;
    }, delay);
  };

  const openTrainings = () => {
    if (trainingsCloseTimer.current) {
      clearTimeout(trainingsCloseTimer.current);
      trainingsCloseTimer.current = null;
    }
    setTrainingsOpen(true);
  };

  const scheduleCloseTrainings = (delay = 180) => {
    if (trainingsCloseTimer.current) clearTimeout(trainingsCloseTimer.current);
    trainingsCloseTimer.current = setTimeout(() => {
      setTrainingsOpen(false);
      trainingsCloseTimer.current = null;
    }, delay);
  };

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
      <div className="flex h-20 w-full items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-4">
          <span suppressHydrationWarning>
            <Image
              src="/logo-main.png"
              alt="Optimum Logistics"
              width={176}
              height={60}
              priority
              className="h-14 w-auto sm:h-16"
              style={{ filter: "invert(0)" }}
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-[16px] font-semibold md:flex">
          {links.map((link) => {
            if (link.dropdown) {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={openServices}
                  onMouseLeave={() => scheduleCloseServices(180)}
                  onFocusCapture={openServices}
                  onBlurCapture={() => scheduleCloseServices(120)}
                >
                  <button
                    className="inline-flex items-center gap-1 pb-1 transition hover:text-[var(--brand-red)]"
                    aria-haspopup="menu"
                    aria-expanded={servicesOpen}
                    onClick={() => (servicesOpen ? setServicesOpen(false) : openServices())}
                  >
                    {link.label}
                    <svg
                      aria-hidden
                      className={`h-4 w-4 transition ${servicesOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.168l3.71-2.94a.75.75 0 11.94 1.16l-4.2 3.33a.75.75 0 01-.94 0l-4.2-3.33a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div
                      role="menu"
                      className="absolute left-0 top-full z-50 mt-2 w-[420px] rounded-xl border border-slate-200 bg-white p-2 shadow-xl"
                      onMouseEnter={openServices}
                      onMouseLeave={() => scheduleCloseServices(120)}
                    >
                      <div className="grid grid-cols-1 gap-1">
                        {serviceItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-lg px-3 py-2 text-[15px] hover:bg-slate-100"
                            onClick={() => setServicesOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            if (link.dropdownTraining) {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={openTrainings}
                  onMouseLeave={() => scheduleCloseTrainings(180)}
                  onFocusCapture={openTrainings}
                  onBlurCapture={() => scheduleCloseTrainings(120)}
                >
                  <button
                    className="inline-flex items-center gap-1 pb-1 transition hover:text-[var(--brand-red)]"
                    aria-haspopup="menu"
                    aria-expanded={trainingsOpen}
                    onClick={() => (trainingsOpen ? setTrainingsOpen(false) : openTrainings())}
                  >
                    {link.label}
                    <svg
                      aria-hidden
                      className={`h-4 w-4 transition ${trainingsOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.168l3.71-2.94a.75.75 0 11.94 1.16l-4.2 3.33a.75.75 0 01-.94 0l-4.2-3.33a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {trainingsOpen && (
                    <div
                      role="menu"
                      className="absolute left-0 top-full z-50 mt-2 w-[520px] rounded-xl border border-slate-200 bg-white p-2 shadow-xl"
                      onMouseEnter={openTrainings}
                      onMouseLeave={() => scheduleCloseTrainings(120)}
                    >
                      <div className="grid grid-cols-1 gap-1">
                        {trainingItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-lg px-3 py-2 text-[15px] hover:bg-slate-100"
                            onClick={() => setTrainingsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative pb-1 transition hover:text-[var(--brand-red)]"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-1 h-[2px] scale-x-0 bg-[var(--brand-red)] transition duration-200 group-hover/link:scale-x-100" />
              </Link>
            );
          })}
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
          {links.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.href} className="rounded-lg">
                  <button
                    className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-[var(--brand-navy)]"
                    onClick={() => setServicesOpen((v) => !v)}
                    aria-expanded={servicesOpen}
                  >
                    <span>{link.label}</span>
                    <span className={`transition ${servicesOpen ? "rotate-180" : ""}`}>▾</span>
                  </button>
                  {servicesOpen && (
                    <div className="mt-1 flex flex-col gap-1 rounded-lg bg-slate-50 p-1 text-[15px] normal-case">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="rounded-md px-3 py-2 text-[var(--brand-navy)] hover:bg-slate-100"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            if (link.dropdownTraining) {
              return (
                <div key={link.href} className="rounded-lg">
                  <button
                    className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-[var(--brand-navy)]"
                    onClick={() => setTrainingsOpen((v) => !v)}
                    aria-expanded={trainingsOpen}
                  >
                    <span>{link.label}</span>
                    <span className={`transition ${trainingsOpen ? "rotate-180" : ""}`}>▾</span>
                  </button>
                  {trainingsOpen && (
                    <div className="mt-1 flex flex-col gap-1 rounded-lg bg-slate-50 p-1 text-[15px] normal-case">
                      {trainingItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="rounded-md px-3 py-2 text-[var(--brand-navy)] hover:bg-slate-100"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-2 text-[var(--brand-navy)] hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
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
