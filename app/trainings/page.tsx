import Image from "next/image";
import Link from "next/link";

const hero = "/training-hero.svg";
const listingBg = "/service-placeholder.svg";

const trainings = [
  { slug: "entrepreneur-business-thinking", title: "Entrepreneurship & Business Thinking", highlight: "Mindset • models • execution", bullets: [
    "Business models and market fit tuned for Ethiopia",
    "Agility, risk control, and decision speed",
    "Scale path: scope → test → grow",
  ]},
  { slug: "motivational-speaking", title: "Motivational Speaking & Communication", highlight: "Inspire • align • mobilize", bullets: [
    "Rule of Three and strong openings/closings",
    "Power pose and presence in high-stakes rooms",
    "Stories and CTAs that mobilize action",
  ]},
  { slug: "international-trade-basic-terms", title: "International Trade & Basic Terms", highlight: "Incoterms • HS • docs", bullets: [
    "Cost/risk split across Incoterms (FOB, CIF, EXW, etc.)",
    "HS code alignment to avoid fines",
    "Ethiopian Customs “Golden Set”: Invoice, PL, COO, BL/AWB",
  ]},
  { slug: "import-export-mandatory-documents-concepts", title: "Import/Export Mandatory Documents & Concepts", highlight: "Compliance • accuracy • speed", bullets: [
    "Document stack anatomy and critical stamps",
    "Who prepares what and when to prevent rejects",
    "Checks that keep storage fees off the clock",
  ]},
  { slug: "investment-marketing", title: "Investment & Marketing", highlight: "Offer • channels • ROI", bullets: [
    "Navigate EIC permits and approvals",
    "ICP definition and channel selection for Ethiopia",
    "Dashboards to measure lead-to-delivery ROI",
  ]},
  { slug: "logistics-moving-cargo", title: "Logistics & Moving Cargo", highlight: "Sea • air • land", bullets: [
    "Routing/mode strategy for speed vs. cost",
    "Port coordination so cargo never sits idle",
    "Handover from Customs Release Note to POD and reconciliation",
  ]},
  { slug: "hr-management-systems-leadership", title: "HR Systems & Leadership", highlight: "SOPs • KPIs • coaching", bullets: [
    "Expectations via Occupational Standards (OS)",
    "Documented workflows across sites (Addis to port)",
    "Coaching and feedback that sticks",
  ]},
  { slug: "customer-ethics", title: "Customer Ethics", highlight: "Trust • fairness • service", bullets: [
    "Transparency and accountability in client interactions",
    "Service recovery that rebuilds trust",
    "Capture and act on real customer feedback",
  ]},
  { slug: "kaizen-philosophy", title: "Kaizen Philosophy", highlight: "Small wins • weekly flow", bullets: [
    "Spot the 7 wastes in logistics and paperwork",
    "Plan-Do-Check-Act with weekly standups and retros",
    "Empower teams to propose and scale improvements",
  ]},
  { slug: "finance-tax-administration-systems", title: "Finance & Tax Administration Systems", highlight: "Landed cost • approvals", bullets: [
    "Landed cost math: freight, duty, surtax, levy",
    "2025 turnover tax requirements (Cat A & B)",
    "Bank- and customs-ready evidence packs",
  ]},
  { slug: "single-window-online-trade-applications", title: "Single Window & Online Trade Apps", highlight: "Accounts • roles • clean data", bullets: [
    "Configure roles (Trader, Declarant, LPCO) securely",
    "Templates for complete, correct submissions",
    "Monitor approvals across Bank, Insurance, and Customs",
  ]},
];

export default function TrainingsPage() {
  return (
    <div className="space-y-16 pb-16 bg-plane-ship">
      {/* Hero */}
      <section id="top" className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#0f2f2a] to-[#1f0f2f] text-white shadow-2xl">
        <span suppressHydrationWarning>
          <Image src={hero} alt="Training cover" fill priority className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-screen" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(35,29,79,0.84)] via-[rgba(20,113,62,0.72)] to-[rgba(227,111,61,0.66)]" />
        <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(227,111,61,0.32),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-16 translate-y-10 rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(20,113,62,0.34),transparent_55%)] blur-2xl" />
        <div className="relative z-10 grid gap-10 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12 xl:px-16">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-100">Training</p>
            <h1 className="text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">Role-based training that sticks in week one.</h1>
            <p className="max-w-2xl text-lg text-white/85">Cohorts tuned for operators, finance, leadership, and sales—so trade moves faster and compliance is second nature.</p>
            <p className="text-base font-semibold text-white/80">We simplify trade.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center rounded-full bg-[var(--brand-red)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/25 transition hover:-translate-y-0.5">Book a cohort</Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-white/80 bg-white px-5 py-3 text-sm font-semibold text-[var(--brand-navy)] shadow-md shadow-black/10 transition hover:-translate-y-0.5"
              >
                See logistics services
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm text-white/90 sm:grid-cols-4">
              <div className="rounded-xl border border-white/20 bg-white/10 p-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">Formats</p>
                <p className="mt-1 text-lg font-semibold text-white">Workshops · Bootcamps</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">Delivery</p>
                <p className="mt-1 text-lg font-semibold text-white">On-site · Virtual</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">Templates</p>
                <p className="mt-1 text-lg font-semibold text-white">Checklists · SOPs</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">Promise</p>
                <p className="mt-1 text-lg font-semibold text-white">Actionable week 1</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="glass-panel relative grid gap-4 bg-white/12 p-7 text-slate-900 backdrop-blur">
              <p className="text-base font-semibold text-slate-900">Learning approach</p>
              <ul className="space-y-3 text-sm text-slate-800">
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--brand-red)]" /><span>Role-based breakouts with real documents and systems.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--brand-green)]" /><span>Checklists, SOPs, and trackers issued on day one.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--brand-navy)]" /><span>Post-session follow-ups to make sure the behaviors stick.</span></li>
              </ul>
              <Link href="#tracks" className="inline-flex w-fit items-center rounded-full bg-[var(--brand-navy)] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5">
                View tracks
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Training tracks */}
      <section id="tracks" className="mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:px-10">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-600">Training catalog</p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Tracks tuned for operators, finance, and leaders.</h2>
          <p className="max-w-3xl text-base text-slate-700">Pick the tracks you need. We can run them as a sprint, cohort, or recurring upskill rhythm.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {trainings.map((t) => (
            <article
              key={t.slug}
              id={t.slug}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white" />
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(20,113,62,0.16),transparent_60%)] blur-2xl" />
              <div className="relative flex h-full flex-col gap-3 p-6">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm">
                  <span>{t.highlight}</span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">{t.title}</h3>
                <ul className="space-y-2 text-sm text-slate-800">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2">
                  <Link href="/contact" className="inline-flex items-center rounded-full bg-[var(--brand-navy)] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5">Book this track</Link>
                  <Link href="#top" className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5">Back to top</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-7xl px-7 lg:px-10">
        <section className="overflow-hidden rounded-[28px] bg-gradient-to-r from-[#e2f3eb] via-white to-[#fef2e8] p-[1px] shadow-2xl">
          <div className="glass-panel flex flex-col gap-5 rounded-[26px] bg-white/95 p-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-600">Ready to start</p>
              <h3 className="text-2xl font-semibold text-slate-900">Tell us your team size, goals, and timing.</h3>
              <p className="text-base text-slate-700">We respond within one business day with a proposed agenda, facilitators, and materials list.</p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-slate-700">
              <span className="rounded-full bg-slate-100 px-3 py-1">contact@optimumlogisticsplc.com</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">info@optimumlogisticsplc.com</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">+251 11 125 0386</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">+251 913 335 596</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">+251 711 335 596</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">+251 962 083 792</span>
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
          </div>
        </section>
      </div>
    </div>
  );
}
