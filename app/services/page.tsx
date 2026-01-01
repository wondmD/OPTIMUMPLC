import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Optimum Logistics",
  description:
    "Customs clearing, freight forwarding, port clearance, foreign purchase, packaging/warehousing, duty-free, single-window, consulting, marketing/sales, EIA, and tax auditing handled by Optimum Logistics.",
  alternates: { canonical: "/services" },
};

const hero = "/service-hero.svg";

const services = [
  {
    slug: "customs-clearing",
    title: "Customs Clearing",
    highlight: "Accurate entries • faster release • compliance",
    detail:
      "Predictable clearance through ECC-aligned classifications, valuation evidence, precise eCMS/single-window entries, and rapid variance response—so cargo moves without admin delays.",
    bullets: [
      "Technical audit to classify items correctly under the Ethiopian Customs Tariff (no overpay or misdeclaration penalties)",
      "Valuation Details Declaration (VDD) prepared with supporting evidence: invoices, L/C, bank permits",
      "Precise eCMS/Single Window submissions to cut rejections",
      "Immediate responses to queries or variances with technical explanations and proof",
      "Full cleared-document pack for your internal records after release",
    ],
    image: "/service-covers/custom-clearing.webp",
    accent: "from-sky-500/15 via-indigo-500/10 to-slate-900/15",
  },
  {
    slug: "freight-forwarding",
    title: "Freight Forwarding",
    highlight: "Multi-operator choice • synchronized milestones",
    detail:
      "Plan and book across state-owned and newly licensed operators, optimizing cost and speed with corridor-aware playbooks and proactive permits handling.",
    bullets: [
      "Strategic sea-rail vs. sea-road routing, factoring inland freight valuation rules",
      "Automated alerts to NBE and Maritime Authority so permits are ready before berth",
      "Real-time tracking with pre-agreed Plan B for Djibouti/Berbera congestion or technical delays",
      "Operator selection that balances cost, speed, and reliability",
    ],
    image: "/service-covers/Freight-forwarding.png",
    accent: "from-emerald-500/15 via-sky-500/10 to-indigo-600/15",
  },
  {
    slug: "port-clearance",
    title: "Port Clearance",
    highlight: "Berth to gate • fewer holds",
    detail:
      "Hands-on terminal coordination that catches manifest issues early, minimizes yard moves, and keeps dwell off the clock so cargo exits on the first window.",
    bullets: [
      "Direct liaison with terminal operators to oversee handling and reduce yard moves",
      "Manifest checks to prevent documentation errors from triggering holds",
      "Active dwell monitoring with daily on-ground intervention",
      "Gate pass and yard release pushed for the earliest available slot",
    ],
    image: "/service-covers/Port-clearance.webp",
    accent: "from-amber-500/15 via-emerald-500/10 to-slate-700/15",
  },
  {
    slug: "foreign-purchase",
    title: "Global Purchase (Asia, ME, EU, Africa)",
    highlight: "Supplier vetting • QC • secured payment",
    detail:
      "Eyes and ears on the ground in China, UAE, Djibouti, and beyond—removing ghost suppliers, securing quality, and locking commercial clarity before shipment.",
    bullets: [
      "Vetting partners: licenses, financial health, and track record",
      "Sample coordination and testing before large commitments",
      "Proforma cross-checks vs. actual production for accuracy",
      "Factory/third-party inspections with evidence (photo/video)",
    ],
    image: "/service-covers/Foreign-Purchase.png",
    accent: "from-indigo-500/15 via-emerald-500/10 to-amber-500/15",
  },
  {
    slug: "packaging-moving-warehousing",
    title: "Packaging, Moving & Warehousing",
    highlight: "Bonded visibility • 49% JV ready • last-mile precision",
    detail:
      "Bonded and free-zone storage with S-Declaration workflows, palletizing to international standards, and clear inventory views so limits aren’t breached.",
    bullets: [
      "Bonded & free-zone storage to defer duty under S-Declaration",
      "Packaging/crating/palletizing to international standards for rugged inland legs",
      "Inventory visibility for warehouse-in-bond status and TCS limits",
      "Local haulage and last-mile coordination",
    ],
    image: "/service-covers/Packaging-Moving-Warehousing.webp",
    accent: "from-emerald-600/15 via-slate-500/10 to-amber-500/15",
  },
  {
    slug: "duty-free-processes-support",
    title: "Duty-free Processes Support",
    highlight: "Permits • bonded moves • audit-ready",
    detail:
      "End-to-end duty-free lifecycle: qualify the project, assemble master files, submit, track, and renew—so you maximize exemptions without admin burden.",
    bullets: [
      "Confirm legal positioning and eligibility under EIC/ECC rules",
      "Compile the master file: invoices, packing lists, investment permits",
      "Draft and submit permits/exemption letters; manage bonded filings",
      "Track approvals and variances with audit-ready evidence",
      "Renewals with reconciliations that keep benefits intact",
    ],
    image: "/service-covers/Duty-free-Processes-Support.jpg",
    accent: "from-red-500/15 via-emerald-500/10 to-indigo-700/15",
  },
  {
    slug: "single-window-registrations-data-submissions",
    title: "Single Window Registrations & Data Submissions",
    highlight: "Account setup • HS code accuracy • fewer rejects",
    detail:
      "We manage Ethiopia Single Window (ESW) for you—clean data, correct HS alignment, continuous status tracking, and full registrations across agencies.",
    bullets: [
      "Entity setup and role mapping so your digital presence is correct",
      "Product classification verified to avoid overpaying or fines",
      "Complete submissions with templates that cut rejection rates",
      "Real-time tracking across agency approvals with fast exception fixes",
      "Full registration with relevant trade ministries and authorities",
    ],
    image: "/service-covers/Single-Window-Registrations.png",
    accent: "from-emerald-500/15 via-amber-400/10 to-sky-500/15",
  },
  {
    slug: "consulting",
    title: "Consulting (Business, Tax, Import/Export, Investment)",
    highlight: "Process design • licensing • risk reduction",
    detail:
      "We optimize your model for Customs, Tax, and Investment rules—designing controls, licenses, and cash-flow plans that prevent costly penalties.",
    bullets: [
      "Deep-dive audits to surface efficiencies and hidden risks",
      "Identify exposure points that trigger government penalties",
      "Obtain/renew import-export licenses and investment permits",
      "Smart, legal tax and duty planning to keep more revenue",
    ],
    image: "/service-covers/consulting.png",
    accent: "from-amber-500/15 via-rose-500/10 to-indigo-600/15",
  },
  {
    slug: "marketing-sales",
    title: "Marketing & Sales",
    highlight: "Pipeline clarity • enablement • retention",
    detail:
      "Build a lean commercial engine that turns logistics strength into revenue—clear ICPs, tight funnels, and enablement that wins contracts.",
    bullets: [
      "Identify best buyers in the Ethiopian context and how to reach them",
      "Set up digital workflows/CRM so no lead is forgotten",
      "Produce one-pagers, case studies, and decks that position you as a leader",
      "Use logistics efficiency as a differentiated selling point",
    ],
    image: "/service-covers/sales-marketing.jpg",
    accent: "from-fuchsia-500/10 via-amber-500/10 to-emerald-500/10",
  },
  {
    slug: "environmental-impact-assessment",
    title: "Environmental Impact Assessment (EIA)",
    highlight: "Scoping • studies • approvals",
    detail:
      "We coordinate full EIA workflows: scoping, baseline studies, impact analysis, mitigation plans, submissions, and tracking of conditions after approval.",
    bullets: [
      "Scoping, stakeholder mapping, and terms of reference",
      "Baseline and impact studies with mitigation measures",
      "Submission, review responses, and approval conditions tracking",
    ],
    image: "/service-covers/Environmental-Impact-Assessment.jpg",
    accent: "from-emerald-600/15 via-slate-500/10 to-sky-600/15",
  },
  {
    slug: "tax-auditing",
    title: "Tax Auditing",
    highlight: "Readiness • representation • remediation",
    detail:
      "Stay audit-ready with reconciled books vs. declarations, variance defenses, and fixes that prevent repeat findings.",
    bullets: [
      "Find and fix errors in VAT, income tax, and customs files before audits",
      "Representation with technical variance explanations during audits",
      "Post-audit remediation and control design so issues don’t recur",
      "Maintain bank/customs-ready evidence packs for renewals",
    ],
    image: "/service-covers/tax-auditing.webp",
    accent: "from-slate-600/15 via-amber-500/10 to-rose-500/10",
  },
];

const lanes = [
  {
    name: "Asia / ME → Djibouti → Addis",
    body: "Port coordination, export docs, Djibouti clearance, rail/truck slotting, and bonded transit into Addis with live milestone updates.",
    image: "/service-placeholder.svg",
  },
  {
    name: "UAE / GCC → Addis",
    body: "Fast air windows, duty-free options, and last-mile coordination for time-sensitive cargo.",
    image: "/service-placeholder.svg",
  },
  {
    name: "Global hubs → GCC",
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
            <h1 className="text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">We make cross-border trade predictable.</h1>
            <p className="max-w-2xl text-lg text-white/85">
              We bridge global suppliers and the Ethiopian market by managing the entire logistics stack: single-window readiness, HS alignment, duty-free facilitation, multimodal moves, consulting, and training. One accountable partner, no surprises.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center rounded-full bg-[var(--brand-red)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/25 transition hover:-translate-y-0.5">Request a quote</Link>
              <Link
                href="/trainings"
                className="inline-flex items-center rounded-full border border-white/80 bg-white px-5 py-3 text-sm font-semibold text-[var(--brand-navy)] shadow-md shadow-black/10 transition hover:-translate-y-0.5"
              >
                Train my team
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm text-white/90 sm:grid-cols-4">
              <div className="rounded-xl border border-white/20 bg-white/10 p-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">Primary lane</p>
                <p className="mt-1 text-lg font-semibold text-white">Global hubs → Addis</p>
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
      <section id="services" className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:px-10">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-600">What we deliver</p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Services built to ship faster and cleaner.</h2>
          <p className="max-w-3xl text-base text-slate-700">Each service is a focused package—stack them together for one accountable plan.</p>
        </div>

        <div className="space-y-8">
          {services.map((item, idx) => (
            <article
              key={item.slug}
              id={item.slug}
              className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-lg shadow-slate-900/10"
            >
              <div className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl bg-gradient-to-br ${item.accent}`} />
              <div className="grid gap-8 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-10">
                <div className="relative space-y-4">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-900/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm">
                    <span>{item.highlight}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{idx + 1}. {item.title}</h3>
                  <p className="text-sm text-slate-700 sm:text-base">{item.detail}</p>
                  <ul className="space-y-2 text-sm text-slate-800">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Link href="/contact" className="inline-flex items-center rounded-full bg-[var(--brand-navy)] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5">Talk to us</Link>
                    <Link href="#top" className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5">Back to top</Link>
                  </div>
                </div>
                <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-slate-100 sm:h-72 lg:h-80">
                  <span suppressHydrationWarning>
                    <Image src={item.image} alt={item.title} fill className="object-contain" sizes="45vw" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/15 to-transparent" />
                  <p className="absolute left-4 bottom-4 text-2xl font-bold text-white drop-shadow-lg">{item.title}</p>
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
            <p className="max-w-2xl text-base text-white/85">Aligned documents, bonded transit, and synchronized handoffs keep high-stakes cargo predictable across global hubs, Djibouti, UAE, Addis, and GCC destinations.</p>
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
            <span className="rounded-full bg-slate-100 px-3 py-1">Office: East Shewa, Adama—Soreti Mall, Ground Office 32 A2</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Office: Addis Ababa—Takilahayimanot, Sumale Tera Business Center, 6th Floor, Office 608</span>
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
