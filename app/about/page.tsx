import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import GallerySlider from "../components/GallerySlider";

export const metadata: Metadata = {
  title: "About | Optimum Logistics",
  description: "Who is Optimum Logistics? Global logistics and consulting partner with customs clearing, freight, duty-free, and training expertise across Asia, Middle East, Europe, and Africa into Addis and regional hubs.",
  alternates: { canonical: "/about" },
};

const hero = "/cargo-movement.jpeg";

const stats = [
  { label: "Clients supported", value: "900+", note: "Manufacturers • Traders • NGOs" },
  { label: "Consulting engagements", value: "540+", note: "Process, tax, and compliance" },
  { label: "Shipments moved", value: "3,000+", note: "Sea • Air • Land" },
  { label: "Team trainings", value: "500+", note: "Trade • finance • leadership" },
];

const coreSolutions = [
  "Single Window Registration",
  "HS Code Alignment",
  "Duty-Free Facilitation",
  "Multi-Modal Logistics (Sea • Air • Land)",
  "Professional Training & Consultancy",
];

const valuesInPractice = [
  "We simplify trade with clear steps.",
  "Transparent paperwork every stage.",
  "Proactive communication with honest timelines.",
  "Continuous improvement and Kaizen mindset.",
  "We partner with you, not just for you.",
];

const methodSteps = [
  {
    title: "Review",
    points: [
      "Analyze cargo type, INCOTERMS, and HS codes.",
      "Identify required permits and compute duty/tax exposure upfront.",
      "Spot bottlenecks along the route before they happen.",
    ],
  },
  {
    title: "Prepare",
    points: [
      "Compile invoices, certificates, and packing lists.",
      "Register single-window accounts and align all stakeholders.",
      "Lock sailing or uplift windows to guarantee carrier space.",
    ],
  },
  {
    title: "Move",
    points: [
      "Coordinate loading and consolidation professionally.",
      "Manage sea, air, and land routes with the right balance of speed and cost.",
      "Provide real-time updates as cargo crosses key checkpoints.",
    ],
  },
  {
    title: "Clear",
    points: [
      "Port clearance with secure movement under customs seal.",
      "Exception management with predefined playbooks.",
      "Tight document hygiene to prevent rework or penalties.",
    ],
  },
  {
    title: "Handover",
    points: [
      "Final delivery to warehouse or customer site.",
      "Post-move analysis to improve speed for the next order.",
      "Capacity building so your team sustains performance.",
    ],
  },
];

const uniqueness = [
  "Single-window expertise for duty-free and bonded moves",
  "Multi-origin corridors (Asia, ME, EU, Africa) with live milestone tracking",
  "Embedded consulting and training so improvements stick after go-live",
  "Transparent communication and reconciled paperwork for every shipment",
];

const gallery = [
  { src: "/galary/photo_2026-01-03_03-57-45.jpg", alt: "Training cohort" },
  { src: "/galary/photo_2026-01-03_03-58-08.jpg", alt: "Logistics workshop" },
  { src: "/galary/photo_2026-01-03_03-58-11.jpg", alt: "Team discussion" },
  { src: "/galary/photo_2026-01-03_03-58-18.jpg", alt: "On-site review" },
  { src: "/galary/photo_2026-01-03_03-58-24.jpg", alt: "Session wrap-up" },
  { src: "/galary/photo_2026-01-03_03-58-27.jpg", alt: "Group briefing" },
  { src: "/galary/photo_2026-01-03_03-58-33.jpg", alt: "Workshop breakout" },
  { src: "/galary/photo_2026-01-03_03-58-41.jpg", alt: "Team huddle" },
  { src: "/galary/photo_2026-01-03_03-58-44.jpg", alt: "Logistics planning" },
  { src: "/galary/photo_2026-01-03_03-58-52.jpg", alt: "Training exercise" },
  { src: "/galary/photo_2026-01-03_03-58-59.jpg", alt: "Closing remarks" },
];

const team = [
  {
    name: "Sani Tuke",
    role: "CEO and Manager",
    focus: "Strategy, compliance, and executive partnerships",
    image: "/profile-placeholder.jpeg",
    certificateUrl: "/sani-tuke-profile.pdf",
  },
  {
    name: "Semiha Hussein",
    role: "Deputy Manager",
    focus: "Daily operations, client delivery, and quality control",
    image: "/profile-placeholder.jpeg",
  },
  {
    name: "Kedir Negeso",
    role: "Administration & Finance Manager",
    focus: "Budgeting, vendor contracts, and financial governance",
    image: "/profile-placeholder.jpeg",
  },
  {
    name: "Abdi Dewali",
    role: "Assistant Transporter",
    focus: "Fleet coordination and on-corridor support",
    image: "/profile-placeholder.jpeg",
  },
  {
    name: "Tsehay Hurisa",
    role: "Assistant Transporter",
    focus: "Loading supervision and handoff tracking",
    image: "/profile-placeholder.jpeg",
  },
  {
    name: "Edom Gurmecha",
    role: "Marketing & Customs Tax Expert",
    focus: "Client outreach and duty/tax advisory",
    image: "/profile-placeholder.jpeg",
  },
  {
    name: "Welela Abesha",
    role: "Customs Data Expert",
    focus: "Document accuracy and declaration data integrity",
    image: "/profile-placeholder.jpeg",
  },
  {
    name: "Saba Zerga",
    role: "Sales Coordinator",
    focus: "Pipeline follow-up and proposal coordination",
    image: "/profile-placeholder.jpeg",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-14 pb-14">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 text-white shadow-2xl">
        <span suppressHydrationWarning>
          <Image src={hero} alt="Warehouse and logistics operations" fill priority className="absolute inset-0 h-full w-full object-cover" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/75 to-emerald-900/70" />
        <div className="relative z-10 grid gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12 lg:py-20 xl:px-16">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-200">About Optimum Logistics</p>
            <h1 className="text-5xl font-bold leading-[1.05] sm:text-6xl">We Make Cross-Border Trade Predictable</h1>
            <p className="text-lg text-white/85 max-w-2xl">
              In a global market where delays are costly and regulations are complex, we bridge international suppliers and the Ethiopian market by managing the entire logistics stack. 
            </p>
            <p>Our mission is simple: we handle the complexity so you can focus on your customers.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/services" className="inline-flex items-center rounded-full bg-[var(--brand-red)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/25 transition hover:-translate-y-0.5">
                Explore services
              </Link>
              <Link
                href="/trainings"
                className="inline-flex items-center rounded-full border border-white/80 bg-white px-5 py-3 text-sm font-semibold text-black shadow-md shadow-black/10 transition hover:-translate-y-0.5"
                style={{ WebkitTextFillColor: "#0f172a" }}
              >
                View trainings
              </Link>
            </div>
          </div>
          <div className="glass-panel grid gap-4 bg-white/12 p-7 text-slate-900 backdrop-blur">
            <p className="text-base font-semibold text-slate-900">What we deliver</p>
            <ul className="grid gap-3 text-sm text-slate-800">
              <li className="rounded-xl bg-white/90 px-3 py-2 font-semibold text-slate-900">Customs Clearing & Freight Forwarding</li>
              <li className="rounded-xl bg-white/90 px-3 py-2 font-semibold text-slate-900">Sea, air, and land moves with transparent milestones</li>
              <li className="rounded-xl bg-white/90 px-3 py-2 font-semibold text-slate-900">Consulting and training that sustain performance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="mx-auto max-w-7xl space-y-12 px-6 md:px-10">
        {/* Who we are + stats */}
        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Who we are</p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">An accountable partner for modern trade.</h2>
            <p className="text-base text-slate-700 max-w-3xl">
              Optimum Logistics is your accountable partner for modern trade. We scout reliable partners, validate every document, secure bookings, and manage bonded transit and clearance with total transparency. Beyond moving cargo, we build capacity through consulting and training so your teams stay high-performing long after delivery.
            </p>
            <ul className="mt-2 space-y-2 text-[15px] text-slate-800">
              {uniqueness.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
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

        {/* Core solutions */}
        <section className="space-y-6">
          <div className="inner flex flex-col gap-2 px-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Core Solutions</p>
            <h2 className="text-3xl font-bold text-slate-900">The logistics stack we manage.</h2>
            <p className="text-base text-slate-700 max-w-3xl">From single-window readiness to multimodal execution and training, we cover the full stack that keeps cargo and teams moving.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {coreSolutions.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <p className="text-sm font-medium text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values in practice */}
        <section className="space-y-6">
          <div className="inner flex flex-col gap-2 px-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Values in practice</p>
            <h2 className="text-3xl font-bold text-slate-900">Standards we live by.</h2>
            <p className="text-base text-slate-700 max-w-3xl">Integrity and precision drive every document, timeline, and handoff we manage.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {valuesInPractice.map((value) => (
              <article key={value} className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200/90">
                <div className="pointer-events-none absolute -right-10 -top-14 h-36 w-36 rounded-full bg-gradient-to-br from-emerald-500/15 via-amber-400/10 to-sky-500/15" />
                <h3 className="text-lg font-semibold text-slate-900">{value}</h3>
                <p className="mt-2 text-sm text-slate-700">We apply this on every engagement—from document hygiene to proactive communication.</p>
              </article>
            ))}
          </div>
        </section>

        {/* Method */}
        <section className="space-y-6">
          <div className="inner flex flex-col gap-2 px-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Our method</p>
            <h2 className="text-3xl font-bold text-slate-900">From assessment to handover.</h2>
            <p className="text-base text-slate-700 max-w-3xl">A disciplined five-step lifecycle keeps cargo moving without hidden costs or surprises.</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-5">
            {methodSteps.map((step, idx) => (
              <article key={step.title} className="flex flex-col gap-3 rounded-2xl bg-white p-5 text-slate-900 shadow-lg ring-1 ring-slate-200/90">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-emerald-700">{idx + 1}. {step.title}</p>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">{step.title[0]}</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  {step.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Photo gallery */}
        <section className="space-y-6">
          <div className="inner flex flex-col gap-2 px-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Gallery</p>
            <h2 className="text-3xl font-bold text-slate-900">Team, operations, and events.</h2>
            <p className="text-base text-slate-700 max-w-3xl">A look at the people and moments behind our logistics and consulting work.</p>
          </div>
          <GallerySlider items={gallery} />
        </section>

        {/* Team profiles */}
        <section className="space-y-6">
          <div className="inner flex flex-col gap-2 px-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Team</p>
            <h2 className="text-3xl font-bold text-slate-900">Teams behind the work.</h2>
            <p className="text-base text-slate-700 max-w-3xl">Operations, compliance, and training experts who ensure every shipment and engagement lands right.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <article key={member.name} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200/90">
                <div className="relative h-52 w-full">
                  <span suppressHydrationWarning>
                    <Image src={member.image} alt={member.name} fill className="object-cover" sizes="25vw" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{member.name}</p>
                    <p className="text-sm font-medium text-emerald-700">{member.role}</p>
                  </div>
                  <p className="text-sm text-slate-700">{member.focus}</p>
                  {member.certificateUrl && (
                    <a
                      href={member.certificateUrl}
                      className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--brand-navy)] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5"
                    >
                      Download certificate
                    </a>
                  )}
                </div>
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
            <span className="rounded-full bg-slate-100 px-3 py-1">contact@optimumlogisticsplc.com</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">info@optimumlogisticsplc.com</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">+251 11 125 0386</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">+251 913 335 596</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">+251 711 335 596</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">+251 990 733 333</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Office: East Shewa, Adama—Soreti Mall, Ground Office 32 A2</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Office: Addis Ababa—Takilahayimanot, Sumale Tera Business Center, 6th Floor, Office 608</span>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-[var(--brand-navy)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5">
              Request a quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white"
              style={{ WebkitTextFillColor: "#0f172a" }}
            >
              See our services
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
