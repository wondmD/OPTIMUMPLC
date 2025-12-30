import Image from "next/image";
import Link from "next/link";
import GallerySlider from "../components/GallerySlider";

const hero = "/cargo-movement.jpeg";

const stats = [
  { label: "Clients supported", value: "320+", note: "Manufacturers • Traders • NGOs" },
  { label: "Consulting engagements", value: "540+", note: "Process, tax, and compliance" },
  { label: "Shipments moved", value: "2,400+", note: "Sea • Air • Land" },
  { label: "Team trainings", value: "1,200+", note: "Trade • finance • leadership" },
];

const missionVision = [
  {
    title: "Mission",
    detail: "Make cross-border logistics predictable and transparent for every client we serve.",
  },
  {
    title: "Vision",
    detail: "Be the most trusted corridor partner for African trade, from sourcing to last-mile delivery.",
  },
  {
    title: "Values",
    bullets: [
      "We simplify trade with clear steps and honest timelines.",
      "We practice operational excellence through documented SOPs and Kaizen.",
      "We act as partners—protecting your cost, compliance, and customer promise.",
    ],
  },
];

const uniqueness = [
  "Single-window expertise for duty-free and bonded moves",
  "China → Djibouti → Addis corridor specialists with live milestone tracking",
  "Embedded consulting and training so improvements stick after go-live",
  "Transparent communication and reconciled paperwork for every shipment",
];

const gallery = [
  { src: "/partner-banner.png", alt: "Team with partner at event" },
  { src: "/training-and-development.jpg", alt: "Leadership training session" },
  { src: "/cutoms-singlewindow.webp", alt: "Customs and single-window prep" },
  { src: "/cargo-movement.jpeg", alt: "Cargo movement along the corridor" },
  { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80", alt: "Operations team at work" },
  { src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80", alt: "Team huddle during briefing" },
];

const team = [
  {
    name: "Amanuel Gebremedhin",
    role: "Managing Director",
    focus: "Corridor strategy, key accounts, and compliance governance",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Liya Tesfaye",
    role: "Head of Operations",
    focus: "Origin coordination, bonded transit, and milestone control",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Khalid Mohammed",
    role: "Customs & Compliance Lead",
    focus: "HS code validation, duty-free pathways, and audit trails",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sara Mekonnen",
    role: "Training & People",
    focus: "Finance, trade, and leadership programs for client teams",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80",
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
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-200">About</p>
            <h1 className="text-5xl font-bold leading-[1.05] sm:text-6xl">Who is Optimum Logistics?</h1>
            <p className="text-lg text-white/85 max-w-2xl">
              We run end-to-end logistics and consulting so your cargo, paperwork, and teams stay aligned. From supplier scouting to bonded transit and training, we keep trade predictable.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/services" className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-black/25 transition hover:-translate-y-0.5">
                Explore services
              </Link>
              <Link
                href="/trainings"
                className="inline-flex items-center rounded-full border border-white/70 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:-translate-y-0.5"
              >
                View trainings
              </Link>
            </div>
          </div>
          <div className="glass-panel grid gap-4 bg-white/12 p-7 text-slate-900 backdrop-blur">
            <p className="text-base font-semibold text-slate-900">At a glance</p>
            <ul className="grid gap-3 text-sm text-slate-800">
              <li className="rounded-xl bg-white/90 px-3 py-2 font-semibold text-slate-900">China → Djibouti → Addis specialists</li>
              <li className="rounded-xl bg-white/90 px-3 py-2 font-semibold text-slate-900">Single-window, bonded transit, duty-free</li>
              <li className="rounded-xl bg-white/90 px-3 py-2 font-semibold text-slate-900">Consulting and training alongside operations</li>
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
              Optimum Logistics scouts suppliers, validates documents, secures bookings, and manages bonded transit with transparent trackers. Our consulting and trainings keep your teams aligned long after go-live.
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

        {/* Mission, Vision, Values */}
        <section className="space-y-6">
          <div className="inner flex flex-col gap-2 px-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Mission • Vision • Values</p>
            <h2 className="text-3xl font-bold text-slate-900">How we operate and why.</h2>
            <p className="text-base text-slate-700 max-w-3xl">Clarity, accountability, and continuous improvement guide every shipment and engagement.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {missionVision.map((item) => (
              <article key={item.title} className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200/90">
                <div className="pointer-events-none absolute -right-10 -top-14 h-36 w-36 rounded-full bg-gradient-to-br from-emerald-500/15 via-amber-400/10 to-sky-500/15" />
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                {item.detail && <p className="mt-2 text-sm text-slate-700">{item.detail}</p>}
                {item.bullets && (
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
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
            <h2 className="text-3xl font-bold text-slate-900">Leaders behind the work.</h2>
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
            <span className="rounded-full bg-slate-100 px-3 py-1">+251 962 083 792</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Office: Addis Ababa</span>
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
