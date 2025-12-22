import Image from "next/image";
import Link from "next/link";

const hero = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80";

const services = [
  {
    title: "Duty-free processes support",
    highlight: "Permits • bonded warehouse • audit trail",
    detail:
      "We prepare duty-free requests, exemption letters, and bonded warehouse files, track approvals, and maintain a clean audit trail so inspections and renewals move fast.",
    bullets: [
      "Eligibility checks, permit drafting, and supporting evidence",
      "Customs follow-up, variance handling, and document refresh",
      "Bonded moves coordination with warehouse operators",
    ],
    image:
      "https://images.unsplash.com/photo-1556740722-ec7bfa1a2ad6?auto=format&fit=crop&w=1400&q=80",
    accent: "from-red-500/15 via-emerald-500/10 to-indigo-700/15",
  },
  {
    title: "Single window registration & submissions",
    highlight: "Account setup • HS code alignment • zero rework",
    detail:
      "We register your entity, configure roles, validate data, and submit single-window files with HS code alignment. Rejects are fixed quickly and statuses are monitored until release.",
    bullets: [
      "Account creation, role mapping, and access hygiene",
      "Template-driven data collection to avoid rejects",
      "Status monitoring, exception fixes, and approvals handover",
    ],
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1400&q=80",
    accent: "from-emerald-500/15 via-amber-400/10 to-sky-500/15",
  },
  {
    title: "Foreign purchases (China, Djibouti, UAE, others)",
    highlight: "Scouting • QC • secured payments",
    detail:
      "Supplier scouting and vetting, proforma validation, secured payment rails, factory inspection, and consolidation. We localize comms and protect timelines.",
    bullets: [
      "Supplier vetting, sample checks, and price/INCOTERM clarity",
      "Factory or third-party inspections with photo/video proof",
      "Consolidation, packing lists, and payment milestones",
    ],
    image:
      "https://images.unsplash.com/photo-1536305030015-0f6f58b2ca06?auto=format&fit=crop&w=1400&q=80",
    accent: "from-indigo-500/15 via-emerald-500/10 to-amber-500/15",
  },
  {
    title: "Cargo movement: China → Addis",
    highlight: "Sea • air • land with bonded transit",
    detail:
      "Flagship corridor with port coordination, Djibouti clearance, bonded transit, and milestone tracking. We manage exceptions and keep ETAs realistic and updated.",
    bullets: [
      "Routing choice (speed vs cost), sailing and uplift windows",
      "Djibouti clearance, rail/truck slotting, bonded escorts",
      "Live milestones, exception handling, and POD handover",
    ],
    image:
      "https://images.unsplash.com/photo-1502412016772-9a3ed1e6d71f?auto=format&fit=crop&w=1400&q=80",
    accent: "from-sky-500/15 via-indigo-500/10 to-slate-900/15",
  },
  {
    title: "Consulting: business, tax, import/export, investment",
    highlight: "Compliance • EIA • licensing • tax planning",
    detail:
      "We review your operating model, map tax and customs exposure, facilitate licensing and EIA, and tune processes so you stay compliant while remaining fast.",
    bullets: [
      "Customs/tax process audits with prioritized fixes",
      "EIA facilitation, sector licenses, and regulator liaison",
      "Cash-flow and duty planning to protect margins",
    ],
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
    accent: "from-amber-500/15 via-rose-500/10 to-indigo-600/15",
  },
  {
    title: "Training: short-term professional programs",
    highlight: "Trade • finance • leadership • Kaizen",
    detail:
      "Hands-on workshops on trade documentation, customs workflows, finance and tax basics, leadership, Kaizen, HR systems, and customer ethics—delivered on-site or virtual.",
    bullets: [
      "Role-based tracks with templates and checklists",
      "Casework for trade docs, single-window, and HS codes",
      "Leadership and customer-ethics sessions that stick",
    ],
    image:
      "https://images.unsplash.com/photo-1460518451285-97b6b1f0fbbf?auto=format&fit=crop&w=1400&q=80",
    accent: "from-emerald-500/15 via-sky-500/10 to-violet-500/15",
  },
];

const lanes = [
  {
    name: "China → Djibouti → Addis",
    body: "Port coordination, CN/ET export docs, Djibouti clearance, rail/truck slotting, and bonded transit into Addis with live milestone updates.",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "UAE → Addis",
    body: "Fast air windows, duty-free options, and last-mile coordination for time-sensitive cargo.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "China → GCC",
    body: "Regional distribution with localized compliance, multilingual supplier support, and hub consolidation before GCC delivery.",
    image:
      "https://images.unsplash.com/photo-1501696461415-6bd6660c6743?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-14 pb-14">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 text-white shadow-2xl">
        <Image src={hero} alt="Logistics warehouse" fill priority className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/75 to-emerald-900/70" />
        <div className="relative z-10 grid gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12 lg:py-20 xl:px-16">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-200">Services</p>
            <h1 className="text-5xl font-bold leading-[1.05] sm:text-6xl">Every step from permit to POD.</h1>
            <p className="text-lg text-white/85 max-w-2xl">
              Duty-free support, single-window filings, foreign purchases, the China → Addis corridor, compliance consulting, and short, practical trainings—run as one accountable stack.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-black/25 transition hover:-translate-y-0.5">
                Request a quote
              </Link>
              <Link href="/trainings" className="inline-flex items-center rounded-full border border-white/70 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">
                Train my team
              </Link>
            </div>
          </div>
          <div className="glass-panel grid gap-4 bg-white/12 p-7 text-slate-900 backdrop-blur">
            <p className="text-base font-semibold text-slate-900">Coverage at a glance</p>
            <div className="grid grid-cols-2 gap-3 text-sm text-slate-800">
              <div className="rounded-xl bg-white/90 p-4 shadow-sm">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Primary lane</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">China → Addis</p>
              </div>
              <div className="rounded-xl bg-white/90 p-4 shadow-sm">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Modes</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">Sea · Air · Land</p>
              </div>
              <div className="rounded-xl bg-white/90 p-4 shadow-sm">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Regulatory</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">Single window</p>
              </div>
              <div className="rounded-xl bg-white/90 p-4 shadow-sm">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Promise</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">We simplify trade</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="mx-auto max-w-7xl space-y-12 px-6 md:px-10">
        {/* Services grid */}
        <section className="space-y-6">
        <div className="inner flex flex-col gap-2 px-2">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">What we run</p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Detailed services, one accountable team.</h2>
          <p className="text-base text-slate-700 max-w-3xl">Each service includes templates, trackers, and a single point of contact.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200/90 transition hover:-translate-y-0.5"
            >
              <div className="md:grid md:grid-cols-[0.9fr_1.1fr] md:gap-0">
                {/* Image */}
                <div className="relative h-44 sm:h-52 md:h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width:1024px) 40vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 to-transparent" />
                </div>
                {/* Content */}
                <div className="relative px-6 py-5 md:px-8 md:py-7">
                  <div className={`pointer-events-none absolute -right-10 -top-14 h-36 w-36 rounded-full bg-gradient-to-br ${item.accent}`} />
                  <div className="relative space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-600">{item.highlight}</p>
                    <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-base text-slate-700 max-w-prose">{item.detail}</p>
                    <ul className="mt-3 space-y-2 text-[15px] text-slate-800">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        </section>

        {/* Corridors */}
        <section className="space-y-4">
          <div className="inner flex flex-col gap-2 px-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Corridors</p>
            <h2 className="text-3xl font-bold text-slate-900">We run the lanes that matter.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {lanes.map((lane) => (
              <article key={lane.name} className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200/90">
                <div className="relative h-44 sm:h-48">
                  <Image src={lane.image} alt={lane.name} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 to-transparent" />
                </div>
                <div className="space-y-2 px-6 py-5">
                  <h3 className="text-lg font-semibold text-slate-900">{lane.name}</h3>
                  <p className="text-base text-slate-700">{lane.body}</p>
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
            <span className="rounded-full bg-slate-100 px-3 py-1">hello@optimumlogistics.com</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">+251 • +971 • +86</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Offices: Addis · China · Djibouti · UAE</span>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-[var(--brand-navy)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5">
              Request a quote
            </Link>
            <Link href="/trainings" className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white">
              Upskill my team
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
