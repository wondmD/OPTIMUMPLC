import Image from "next/image";
import Link from "next/link";

const hero = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80";

const programs = [
  {
    title: "International trade, HS codes, and Incoterms",
    highlight: "Docs • HS codes • risk control",
    detail:
      "Teams learn how to pick the right Incoterm, file clean commercial docs, and avoid delays by aligning HS codes early with customs and suppliers.",
    bullets: [
      "Document stack walkthrough: proforma, invoices, packing lists, COO, BL/AWB",
      "HS code mapping with case examples and variance handling",
      "Risk scenarios: who pays when things go wrong across Incoterms",
    ],
    accent: "from-emerald-500/15 via-sky-500/12 to-indigo-700/15",
  },
  {
    title: "Duty-free, single window, and compliance",
    highlight: "Permits • exemptions • audit-ready",
    detail:
      "We run mock submissions, exemption letters, and bonded moves so your team knows how to keep approvals flowing and avoid rework.",
    bullets: [
      "Eligibility checks and exemption request drafting",
      "Single-window data hygiene, role setup, and status chasing",
      "Audit trail building: what to keep, how to label, who signs",
    ],
    accent: "from-amber-500/18 via-emerald-500/12 to-slate-900/12",
  },
  {
    title: "Logistics execution: China → Addis flagship lane",
    highlight: "Sea • air • bonded transit",
    detail:
      "Dispatchers rehearse port coordination, Djibouti clearance, bonded transit, and milestone reporting so ETAs stay realistic and trusted.",
    bullets: [
      "Routing choices: speed vs cost with live window planning",
      "Djibouti clearance flow, rail/truck slotting, bonded escorts",
      "Exceptions lab: damage, rollovers, demurrage, and POD proof",
    ],
    accent: "from-indigo-500/15 via-emerald-500/12 to-amber-500/15",
  },
  {
    title: "Finance, tax, and cash control for operators",
    highlight: "Costing • duty math • approvals",
    detail:
      "Operators practice landed cost math, duty impact, and approval flows so finance and logistics stay locked together on every shipment.",
    bullets: [
      "Landed cost calculator drills with live examples",
      "Tax exposure mapping and variance explanations",
      "Approval flows: who signs what, when, and with which evidence",
    ],
    accent: "from-rose-500/14 via-amber-400/12 to-indigo-600/14",
  },
  {
    title: "Leadership, team execution, and customer ethics",
    highlight: "Coaching • escalation • service recovery",
    detail:
      "Supervisors learn how to coach frontline teams, handle escalations, and run service recovery plays that keep customers calm and loyal.",
    bullets: [
      "Escalation trees and calm-down scripts",
      "1:1 coaching rhythms and feedback that sticks",
      "Service recovery offers and follow-up that rebuild trust",
    ],
    accent: "from-emerald-500/15 via-emerald-400/10 to-sky-500/14",
  },
  {
    title: "HR systems, performance, and Kaizen",
    highlight: "SOPs • KPIs • continuous improvement",
    detail:
      "People leads design SOPs, KPIs, and Kaizen rituals so improvements ship weekly instead of yearly and teams know what good looks like.",
    bullets: [
      "Role scorecards and KPI setup for ops and support",
      "SOP writing lab with templates and ownership assignment",
      "Kaizen cadence: weekly standups, retros, and wins tracking",
    ],
    accent: "from-sky-500/15 via-indigo-500/12 to-slate-900/12",
  },
];

const formats = [
  {
    title: "Workshops",
    detail: "Half- or full-day deep dives with checklists you deploy the same week.",
    accent: "from-emerald-500/12 via-amber-400/12 to-indigo-500/12",
  },
  {
    title: "Bootcamps",
    detail: "1–2 week sprints with simulations for logistics, finance, and leadership pods.",
    accent: "from-amber-500/12 via-rose-500/12 to-slate-900/12",
  },
  {
    title: "Keynotes & townhalls",
    detail: "High-energy sessions to align leaders and reset culture before big pushes.",
    accent: "from-indigo-500/12 via-emerald-500/10 to-sky-500/12",
  },
];

export default function TrainingsPage() {
  return (
    <div className="space-y-14 pb-14">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 text-white shadow-2xl">
        <Image src={hero} alt="Training room" fill priority className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/75 to-emerald-900/70" />
        <div className="relative z-10 grid gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12 lg:py-20 xl:px-16">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-200">Training</p>
            <h1 className="text-5xl font-bold leading-[1.05] sm:text-6xl">Practical training that teams remember.</h1>
            <p className="text-lg text-white/85 max-w-2xl">
              Trade, finance, leadership, and service recovery drills with templates, scripts, and trackers your teams can use on the next shipment or escalation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-black/25 transition hover:-translate-y-0.5">
                Book a cohort
              </Link>
              <Link href="/services" className="inline-flex items-center rounded-full border border-white/70 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">
                See logistics services
              </Link>
            </div>
          </div>
          <div className="glass-panel grid gap-4 bg-white/12 p-7 text-slate-900 backdrop-blur">
            <p className="text-base font-semibold text-slate-900">Tracks at a glance</p>
            <div className="grid grid-cols-2 gap-3 text-sm text-slate-800">
              <div className="rounded-xl bg-white/90 p-4 shadow-sm">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Formats</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">Workshops · Bootcamps</p>
              </div>
              <div className="rounded-xl bg-white/90 p-4 shadow-sm">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Delivery</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">On-site · Virtual</p>
              </div>
              <div className="rounded-xl bg-white/90 p-4 shadow-sm">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Templates</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">Checklists · SOPs</p>
              </div>
              <div className="rounded-xl bg-white/90 p-4 shadow-sm">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Promise</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">Actionable in week 1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="mx-auto max-w-7xl space-y-12 px-7 lg:px-10">
        {/* Programs grid */}
        <section className="space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">What we teach</p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Detailed trainings with drills and takeaways.</h2>
            <p className="text-base text-slate-700">Each track includes casework, scripts, and ready-to-use templates. Cards animate on hover to keep the page lively.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {programs.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl bg-white p-7 shadow-xl ring-1 ring-slate-200/90 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:ring-emerald-500/25"
              >
                <div
                  className={`pointer-events-none absolute -right-10 -top-14 h-36 w-36 rounded-full bg-gradient-to-br ${item.accent} transition duration-500 group-hover:scale-110`}
                />
                <div className="relative space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-600">{item.highlight}</p>
                  <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-base text-slate-700">{item.detail}</p>
                  <ul className="mt-3 space-y-2 text-[15px] text-slate-800">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 transition duration-300 group-hover:scale-110" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Delivery formats */}
        <section className="space-y-4">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Delivery</p>
            <h2 className="text-3xl font-bold text-slate-900">Pick the format that fits your team.</h2>
            <p className="text-base text-slate-700">Workshops for fast starts, bootcamps for depth, and townhalls to align leadership.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {formats.map((format) => (
              <article
                key={format.title}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:ring-emerald-500/25"
              >
                <div className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${format.accent} transition duration-500 group-hover:scale-110`} />
                <div className="relative space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">{format.title}</h3>
                  <p className="text-sm text-slate-700">{format.detail}</p>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 transition duration-300 group-hover:gap-3">
                    <span>Includes agendas and templates</span>
                    <span className="h-0.5 w-5 bg-emerald-500" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="glass-panel flex flex-col gap-5 p-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Ready to start</p>
            <h3 className="text-2xl font-semibold text-slate-900">Tell us your team size, goals, and timing.</h3>
            <p className="text-base text-slate-700">We respond within one business day with a proposed agenda, facilitators, and materials list.</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-700">
            <span className="rounded-full bg-slate-100 px-3 py-1">hello@optimumlogistics.com</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">+251 • +971 • +86</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">On-site or virtual delivery</span>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-[var(--brand-navy)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5">
              Book a cohort
            </Link>
            <Link href="/services" className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white">
              See logistics services
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
