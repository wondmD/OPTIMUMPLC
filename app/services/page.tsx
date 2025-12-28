import Image from "next/image";
import Link from "next/link";

const hero = "/service-hero.svg";

const services = [
  {
    slug: "duty-free-processes-support",
    title: "Duty-free Processes Support",
    highlight: "Permits • bonded moves • audit-ready",
    detail:
      "We handle end-to-end duty-free program setup and renewals: assess eligibility, assemble evidence, prepare exemption letters, and manage submissions and follow-ups. Our trackers keep approvals moving and ensure an audit-ready trail for inspections and renewals.",
    bullets: [
      "Eligibility review and documentation checklist (projects, NGOs, manufacturers)",
      "Permit drafting, exemption letters, and bonded warehouse filings",
      "Variance handling, reconciliations, and renewal preparation",
    ],
    image: "/service-placeholder.svg",
    accent: "from-red-500/15 via-emerald-500/10 to-indigo-700/15",
  },
  {
    slug: "single-window-registrations-data-submissions",
    title: "Single Window Registrations & Data Submissions",
    highlight: "Account setup • HS code accuracy • fewer rejects",
    detail:
      "We register your entity, configure user roles, validate product and HS code data, and submit via the single window with templates that reduce rework. We actively monitor statuses, resolve exceptions, and hand over approvals cleanly.",
    bullets: [
      "Entity onboarding, role mapping, and access hygiene",
      "Data templates to capture mandatory fields correctly",
      "Status monitoring and quick fixes for rejections",
    ],
    image: "/service-placeholder.svg",
    accent: "from-emerald-500/15 via-amber-400/10 to-sky-500/15",
  },
  {
    slug: "foreign-purchase",
    title: "Foreign Purchase (China, Djibouti, UAE, Others)",
    highlight: "Supplier vetting • QC • secured payment",
    detail:
      "We source and vet suppliers, validate proformas, negotiate clear INCOTERMS, and manage factory/third‑party inspections. Payments run on defined milestones, with consolidation and export docs aligned to your route and mode.",
    bullets: [
      "Supplier scouting, reference checks, and sample evaluation",
      "Factory or 3rd‑party inspections with photo/video evidence",
      "Packing lists, consolidation plans, and milestone payments",
    ],
    image: "/service-placeholder.svg",
    accent: "from-indigo-500/15 via-emerald-500/10 to-amber-500/15",
  },
  {
    slug: "customs-clearing",
    title: "Customs Clearing",
    highlight: "Accurate entries • faster release • compliance",
    detail:
      "We prepare compliant declarations, align HS classifications, manage duty/tax calculations, and coordinate inspections. Our focus is predictability—proactive queries handling, variance explanations, and clean file closure to reduce future audits.",
    bullets: [
      "HS code review and valuation documentation",
      "Declaration preparation, queries handling, and inspection support",
      "Duty/tax payments, release, and file reconciliation",
    ],
    image: "/service-placeholder.svg",
    accent: "from-sky-500/15 via-indigo-500/10 to-slate-900/15",
  },
  {
    slug: "consulting",
    title: "Consulting (Business, Tax, Import/Export, Investment)",
    highlight: "Process design • licensing • risk reduction",
    detail:
      "We assess your operating model and exposure across customs, tax, and investment rules. Then we design practical controls and help you obtain licenses and approvals so growth doesn’t outpace compliance.",
    bullets: [
      "Customs/tax process audits with prioritized improvements",
      "Import/export licensing and regulator liaison",
      "Cash‑flow, duty planning, and internal controls",
    ],
    image: "/service-placeholder.svg",
    accent: "from-amber-500/15 via-rose-500/10 to-indigo-600/15",
  },
  {
    slug: "marketing-sales",
    title: "Marketing & Sales",
    highlight: "Pipeline clarity • enablement • retention",
    detail:
      "We build a lean commercial engine: ICP definition, messaging, and offers; funnel design and CRM hygiene; and enablement content that helps teams convert and retain customers.",
    bullets: [
      "Ideal customer profiles, value propositions, and offers",
      "Funnel setup, CRM workflows, and performance dashboards",
      "Enablement: decks, one‑pagers, case studies, and SLAs",
    ],
    image: "/service-placeholder.svg",
    accent: "from-fuchsia-500/10 via-amber-500/10 to-emerald-500/10",
  },
  {
    slug: "short-term-training",
    title: "Short-term Training",
    highlight: "Trade ops • finance basics • leadership",
    detail:
      "Short, practical workshops tailored to roles—covering trade documentation, single‑window workflows, HS codes, finance and tax basics, leadership, ethics, and Kaizen execution.",
    bullets: [
      "Role‑based tracks with templates and checklists",
      "Hands‑on casework using real documents and systems",
      "On‑site or virtual delivery with post‑session support",
    ],
    image: "/service-placeholder.svg",
    accent: "from-emerald-500/15 via-sky-500/10 to-violet-500/15",
  },
  {
    slug: "environmental-impact-assessment",
    title: "Environmental Impact Assessment (EIA)",
    highlight: "Scoping • studies • approvals",
    detail:
      "We coordinate complete EIA workflows: scoping with stakeholders, baseline studies, impact analysis, mitigation plans, and submission to authorities—through to conditions tracking after approval.",
    bullets: [
      "Scoping, stakeholder mapping, and terms of reference",
      "Baseline and impact studies with mitigation measures",
      "Submission, review responses, and approval conditions tracking",
    ],
    image: "/service-placeholder.svg",
    accent: "from-emerald-600/15 via-slate-500/10 to-sky-600/15",
  },
  {
    slug: "tax-auditing",
    title: "Tax Auditing",
    highlight: "Readiness • representation • remediation",
    detail:
      "We prepare audit-ready files, reconcile declarations vs. books, and represent you during audits. After closure we implement control improvements to prevent repeat findings.",
    bullets: [
      "Pre‑audit health check and documentation pack",
      "Representation and responses during audits",
      "Post‑audit remediation and control design",
    ],
    image: "/service-placeholder.svg",
    accent: "from-slate-600/15 via-amber-500/10 to-rose-500/10",
  },
];

const lanes = [
  {
    name: "China → Djibouti → Addis",
    body: "Port coordination, CN/ET export docs, Djibouti clearance, rail/truck slotting, and bonded transit into Addis with live milestone updates.",
    image: "/service-placeholder.svg",
  },
  {
    name: "UAE → Addis",
    body: "Fast air windows, duty-free options, and last-mile coordination for time-sensitive cargo.",
    image: "/service-placeholder.svg",
  },
  {
    name: "China → GCC",
    body: "Regional distribution with localized compliance, multilingual supplier support, and hub consolidation before GCC delivery.",
    image: "/service-placeholder.svg",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero */}
      <section id="top" className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#0f2f2a] to-[#1f0f2f] text-white shadow-2xl">
        <span suppressHydrationWarning>
          <Image src={hero} alt="Logistics warehouse" fill priority className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-screen" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(35,29,79,0.82)] via-[rgba(20,113,62,0.7)] to-[rgba(227,111,61,0.65)]" />
        <div className="absolute -left-20 top-8 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(227,111,61,0.35),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-16 translate-y-10 rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(20,113,62,0.38),transparent_55%)] blur-2xl" />
        <div className="relative z-10 grid gap-10 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12 xl:px-16">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-100">Services</p>
            <h1 className="text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">Logistics, filings, and training in one accountable stack.</h1>
            <p className="max-w-2xl text-lg text-white/85">
              Duty-free support, single-window submissions, foreign purchase, corridor execution, compliance consulting, and role-based trainings—coordinated by one team. We simplify trade.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-black/25 transition hover:-translate-y-0.5">Request a quote</Link>
              <Link
                href="/trainings"
                className="inline-flex items-center rounded-full border border-white/70 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:-translate-y-0.5"
              >
                Train my team
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm text-white/90 sm:grid-cols-4">
              <div className="rounded-xl border border-white/20 bg-white/10 p-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">Primary lane</p>
                <p className="mt-1 text-lg font-semibold text-white">China → Addis</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">Modes</p>
                <p className="mt-1 text-lg font-semibold text-white">Sea · Air · Land</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">Regulatory</p>
                <p className="mt-1 text-lg font-semibold text-white">Single window</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">Promise</p>
                <p className="mt-1 text-lg font-semibold text-white">Predictable moves</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="glass-panel relative grid gap-4 bg-white/12 p-7 text-slate-900 backdrop-blur">
              <p className="text-base font-semibold text-slate-900">How we de-risk shipments</p>
              <ul className="space-y-3 text-sm text-slate-800">
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--brand-red)]" /><span>Map HS codes, duty-free options, and documentary requirements before purchase.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--brand-green)]" /><span>Prepare filings and exceptions playbook so single-window submissions clear faster.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--brand-navy)]" /><span>Track milestones from factory to POD with pre-agreed responses to delays.</span></li>
              </ul>
              <Link href="#services" className="inline-flex w-fit items-center rounded-full bg-[var(--brand-navy)] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5">
                See the stack
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service stack */}
      <section id="services" className="mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:px-10">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-600">What we deliver</p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Services built to ship faster and cleaner.</h2>
          <p className="max-w-3xl text-base text-slate-700">Each card is a package you can pick up standalone—or string together as one accountable corridor plan.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item) => (
            <article
              key={item.title}
              id={item.slug}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white" />
              <div className={`absolute -right-16 -top-20 h-56 w-56 rounded-full blur-3xl bg-gradient-to-br ${item.accent}`} />
              <div className="relative flex flex-col gap-3 p-6">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm">
                  <span>{item.highlight}</span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-700">{item.detail}</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-800">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link href="/contact" className="inline-flex items-center rounded-full bg-[var(--brand-navy)] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5">Talk to us</Link>
                  <Link href="#top" className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5">Back to top</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Corridors */}
      <section className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0f172a] via-[#0f2f2a] to-[#1f0f2f] px-6 py-10 text-white shadow-2xl ring-1 ring-slate-900/20 lg:px-10">
        <div className="pointer-events-none absolute -left-16 -top-20 h-52 w-52 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(227,111,61,0.3),transparent_60%)] blur-2xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 translate-x-16 translate-y-10 rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(20,113,62,0.32),transparent_55%)] blur-2xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-100">Corridors</p>
            <h2 className="text-3xl font-bold sm:text-4xl">We run the lanes that matter.</h2>
            <p className="max-w-2xl text-base text-white/85">Aligned documents, bonded transit, and synchronized handoffs keep high-stakes cargo predictable across China, Djibouti, UAE, Addis, and GCC destinations.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {lanes.map((lane) => (
                <div key={lane.name} className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-lg shadow-slate-900/30 backdrop-blur">
                  <p className="text-sm font-semibold text-white">{lane.name}</p>
                  <p className="mt-2 text-sm text-white/80">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-full rounded-3xl border border-white/15 bg-white/5 p-6 shadow-2xl shadow-slate-900/30 backdrop-blur">
            <div className="flex flex-col gap-3 text-sm text-white/85">
              <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 p-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-lg font-semibold">1</span>
                <div>
                  <p className="text-sm font-semibold text-white">Pre-alert & documents</p>
                  <p className="text-white/75">HS, valuation, permits, and single-window data prepared before cargo moves.</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 p-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-lg font-semibold">2</span>
                <div>
                  <p className="text-sm font-semibold text-white">Move & monitor</p>
                  <p className="text-white/75">Factory to port to Addis with bonded options, exception playbooks, and live milestones.</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 p-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-lg font-semibold">3</span>
                <div>
                  <p className="text-sm font-semibold text-white">Clear & close</p>
                  <p className="text-white/75">Inspections, duty/tax, handover, and audit-ready reconciliation to prevent repeats.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-r from-[#e2f3eb] via-white to-[#fef2e8] p-[1px] shadow-2xl">
        <div className="glass-panel flex flex-col gap-5 rounded-[26px] bg-white/95 p-7 md:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-600">Get a plan</p>
            <h3 className="text-2xl font-semibold text-slate-900">Tell us your route, cargo, and timing.</h3>
            <p className="text-base text-slate-700 max-w-3xl">We respond within one business day with steps, documents, and cost scenarios tailored to your lane.</p>
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
            <Link href="/trainings" className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white">
              Upskill my team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
