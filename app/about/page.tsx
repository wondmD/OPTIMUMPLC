import Image from "next/image";
import Link from "next/link";

const hero = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80";

const values = [
  {
    title: "We simplify trade",
    detail: "Clear steps, transparent paperwork, and proactive communication across borders.",
  },
  {
    title: "Operational excellence",
    detail: "Kaizen culture, documented SOPs, and leadership coaching for every lane we run.",
  },
  {
    title: "Partnership mindset",
    detail: "We sit on your side of the table—optimizing duty, tax, and delivery promises.",
  },
];

const partners = ["China", "Djibouti", "UAE", "GCC", "Addis Ababa"];

const stats = [
  { label: "Shipments moved", value: "2,400+", note: "Sea • Air • Land" },
  { label: "On-time delivery", value: "97%", note: "Primary: China → Addis" },
  { label: "Duty savings", value: "$3.5M+", note: "Across exemptions & bonded" },
  { label: "Trained professionals", value: "1,200+", note: "Trade • finance • leadership" },
];

const method = [
  {
    title: "Assess",
    detail:
      "Map cargo, INCOTERMS, HS codes, permits, and timelines. Identify risk and duty/tax exposures.",
  },
  {
    title: "Prepare",
    detail:
      "Compile docs, register single-window accounts, align stakeholders, and lock booking windows.",
  },
  {
    title: "Move",
    detail:
      "Coordinate origin handling, sailing/uplift, consolidation, and corridor milestones with live updates.",
  },
  {
    title: "Clear",
    detail:
      "Djibouti clearance, bonded transit, Addis entry, and exception management with transparent audit trail.",
  },
  {
    title: "Handover",
    detail:
      "Proof-of-delivery, reconciliations, and process improvements. Train teams to sustain performance.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-14 pb-14">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 text-white shadow-2xl">
        <Image src={hero} alt="Warehouse and logistics operations" fill priority className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/75 to-emerald-900/70" />
        <div className="relative z-10 grid gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12 lg:py-20 xl:px-16">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-200">About</p>
            <h1 className="text-5xl font-bold leading-[1.05] sm:text-6xl">Optimum Logistics</h1>
            <p className="text-lg text-white/85 max-w-2xl">
              We make cross‑border trade predictable. From supplier scouting and permits to corridor movement, clearance, and proof‑of‑delivery, we run the stack so your team can focus on customers.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/services" className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-black/25 transition hover:-translate-y-0.5">
                Explore services
              </Link>
              <Link href="/trainings" className="inline-flex items-center rounded-full border border-white/70 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">
                View trainings
              </Link>
            </div>
          </div>
          <div className="glass-panel grid gap-4 bg-white/12 p-7 text-slate-900 backdrop-blur">
            <p className="text-base font-semibold text-slate-900">Presence</p>
            <div className="grid grid-cols-3 gap-3 text-sm text-slate-800">
              {partners.map((p) => (
                <span key={p} className="rounded-xl bg-white/90 px-3 py-2 text-center font-semibold text-slate-900">
                  {p}
                </span>
              ))}
            </div>
            <p className="text-sm text-slate-700">China sourcing, Djibouti and UAE gateways, Addis Ababa HQ.</p>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="mx-auto max-w-7xl space-y-12 px-6 md:px-10">
        {/* Who we are */}
        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Who we are</p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">An accountable partner for modern trade.</h2>
            <p className="text-base text-slate-700 max-w-3xl">
              Optimum Logistics is a corridor‑focused operations partner. We scout suppliers, validate documents, secure bookings, and manage bonded transit and clearance with transparent trackers. Our consulting and trainings ensure teams sustain performance after go‑live.
            </p>
            <ul className="mt-2 space-y-2 text-[15px] text-slate-800">
              <li className="flex gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" /><span>Single window registration, HS code alignment, and duty‑free facilitation</span></li>
              <li className="flex gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" /><span>Sea • Air • Land routing with realistic ETAs and live milestones</span></li>
              <li className="flex gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" /><span>Leadership and customer‑ethics training embedded in SOPs</span></li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200/90">
            <div className="grid grid-cols-2">
              {stats.map((s) => (
                <div key={s.label} className="border-b border-r border-slate-200/60 px-6 py-5 first:rounded-tl-2xl">
                  <p className="text-3xl font-bold text-slate-900">{s.value}</p>
                  <p className="text-sm font-semibold text-slate-700">{s.label}</p>
                  <p className="text-xs text-slate-500">{s.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="space-y-6">
          <div className="inner flex flex-col gap-2 px-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">What guides us</p>
            <h2 className="text-3xl font-bold text-slate-900">Values in practice.</h2>
            <p className="text-base text-slate-700 max-w-3xl">Our values show up in daily decisions, from document hygiene to clear timelines and honest exception management.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200/90">
                <div className="pointer-events-none absolute -right-10 -top-14 h-36 w-36 rounded-full bg-gradient-to-br from-emerald-500/15 via-amber-400/10 to-sky-500/15" />
                <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{value.detail}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Method */}
        <section className="space-y-6">
          <div className="inner flex flex-col gap-2 px-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Our method</p>
            <h2 className="text-3xl font-bold text-slate-900">From assessment to handover.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {method.map((m) => (
              <article key={m.title} className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200/90">
                <h3 className="text-lg font-semibold text-slate-900">{m.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{m.detail}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="glass-panel flex flex-col gap-5 p-7 md:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Get a plan</p>
            <h3 className="text-2xl font-semibold text-slate-900">Tell us your route, cargo, and timing.</h3>
            <p className="text-base text-slate-700 max-w-3xl">We respond within one business day with steps, documents, and cost scenarios.</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-700">
            <span className="rounded-full bg-slate-100 px-3 py-1">hello@optimumlogistics.com</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">+251 • +971 • +86</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Offices: Addis · China · Djibouti · UAE</span>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-[var(--brand-navy)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5">
              Request a quote
            </Link>
            <Link href="/services" className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white">
              See our services
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
