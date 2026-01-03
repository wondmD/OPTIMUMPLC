import Image from "next/image";
import Link from "next/link";

const hero = "/training-and-development.jpg";
const listingBg = "/service-placeholder.svg";

const trainings = [
  {
    slug: "logistics-cargo-moving",
    title: "Logistics & Cargo Moving",
    highlight: "Sea • Air • Land",
    image: "/training-images/logistics.jpg",
    description:
      "Logistics & Cargo Moving focuses on synchronizing routing with cost-efficiency across Ethiopia's gateways so cargo moves on time and on budget.",
    bullets: [
      "Routing and mode strategy matched to cost and speed for each lane.",
      "Port coordination so cargo never sits idle at a border.",
      "Handover from Customs Release Note to Proof-of-Delivery with audit-ready reconciliation.",
    ],
  },
  {
    slug: "import-export-mandatory-documents-concepts",
    title: "Import/Export Mandatory Documents & Concepts",
    highlight: "Compliance • Accuracy • Speed",
    image: "/training-images/import.jpg",
    description:
      "Import/Export Mandatory Documents & Concepts builds the technical foundation to keep paperwork clean—one missing stamp or HS error can trigger weeks of storage fees.",
    bullets: [
      "Document stack anatomy and critical stamps to avoid storage fees.",
      "Who prepares what and when—shipper, forwarder, bank, broker—so submissions are accepted the first time.",
      "HS code and data accuracy to prevent rejections and penalties.",
    ],
  },
  {
    slug: "international-trade-basic-terms",
    title: "International Trade & Basic Terms",
    highlight: "Incoterms • HS • Documentation",
    image: "/training-images/trade.jpg",
    description:
      "International Trade & Basic Terms is the back-to-basics track so every team member speaks the language of global trade and avoids costly misunderstandings.",
    bullets: [
      "Cost and risk split across Incoterms (FOB, CIF, EXW, etc.) so you pay only what you should.",
      "HS code alignment logic to classify goods accurately and avoid fines.",
      "Hands-on with Ethiopia's Customs \"Golden Set\": Invoice, Packing List, Certificate of Origin, and BL/AWB.",
    ],
  },
  {
    slug: "single-window-online-trade-applications",
    title: "Single Window & Online Trade Apps",
    highlight: "Accounts • Roles • Clean Data",
    image: "/cutoms-singlewindow.webp",
    description:
      "Single Window & Online Trade Apps ensures your ESW submissions are right the first time so approvals flow cleanly across bank, insurance, and customs.",
    bullets: [
      "Configure Trader, Declarant, and LPCO roles securely.",
      "Templates that capture mandatory fields to cut rejection rates.",
      "Monitor ESW workflow across Bank, Insurance, and Customs approvals for clean handovers.",
    ],
  },
  {
    slug: "investment-marketing",
    title: "Investment & Marketing",
    highlight: "Offer • Channels • ROI",
    image: "/training-images/marketing.png",
    description:
      "Investment & Marketing helps foreign and local investors navigate EIC permits, define ideal customers, and build channels that deliver measurable ROI.",
    bullets: [
      "Guide you through the Ethiopian Investment Commission (EIC) permit process.",
      "Define your ICP and pick the right digital and physical channels for Ethiopia.",
      "Measure lead-to-delivery ROI with clear dashboards.",
    ],
  },
  {
    slug: "entrepreneur-business-thinking",
    title: "Entrepreneurship & Business Thinking",
    highlight: "Mindset • Models • Execution",
    image: "/training-images/entreprenur.jpg",
    description:
      "Entrepreneurship & Business Thinking moves teams from running a project to scaling a profitable business with disciplined models and execution.",
    bullets: [
      "Business models and market fit tuned for Ethiopia.",
      "Agility, risk control, and decision speed.",
      "Scale path: scope → test → grow.",
    ],
  },
  {
    slug: "motivational-speaking",
    title: "Motivational Speaking & Communication",
    highlight: "Inspire • Align • Mobilize",
    image: "/training-and-development.jpg",
    description:
      "Motivational Speaking & Communication equips leaders to turn facts into stories that align suppliers, banks, and regulators behind one vision.",
    bullets: [
      "Rule of Three with Start Strong/End Strong storytelling.",
      "Power pose and presence in high-pressure rooms.",
      "Closings that mobilize action, not just applause.",
    ],
  },
  {
    slug: "hr-management-systems-leadership",
    title: "HR Systems & Leadership",
    highlight: "SOPs • KPIs • Coaching",
    image: "/training-images/HRR.jpg",
    description:
      "HR Systems & Leadership builds outcome-based systems where every employee knows how to win, aligned to Ethiopia's Occupational Standards.",
    bullets: [
      "Expectations defined via Occupational Standards (OS).",
      "Documented workflows across Addis-to-port operations.",
      "Coaching and feedback that stick.",
    ],
  },
  {
    slug: "customer-ethics",
    title: "Customer Ethics",
    highlight: "Trust • Fairness • Service",
    image: "/training-images/ETHICS.jpg",
    description:
      "Customer Ethics teaches integrity as competitive advantage—grounded in Professional Ethics and Civic Virtues.",
    bullets: [
      "Transparency and accountability in every client interaction.",
      "Integrity and civic responsibility—unity of thought, word, and deed.",
      "Systems to capture real feedback and turn it into service improvements.",
    ],
  },
  {
    slug: "kaizen-philosophy",
    title: "Kaizen Philosophy",
    highlight: "Small Wins • Weekly Flow",
    image: "/training-images/KAIZEN.png",
    description:
      "Kaizen Philosophy makes continuous improvement a weekly habit, tackling the seven wastes in logistics and paperwork.",
    bullets: [
      "Spot the 7 wastes—from paperwork to transport—every week.",
      "Plan-Do-Check-Act rhythm with weekly standups and retros.",
      "Empower teams to propose and scale their own improvements.",
    ],
  },
  {
    slug: "finance-tax-administration-systems",
    title: "Finance & Tax Administration Systems",
    highlight: "Landed Cost • Approvals",
    image: "/training-images/TAX.jpg",
    description:
      "Finance & Tax Administration Systems protects margins with accurate landed cost math and audit-ready evidence packs.",
    bullets: [
      "Compute landed cost (freight, duty, surtax, levy) to protect margins.",
      "2025 turnover tax requirements for Category A and B taxpayers.",
      "Maintain bank-ready and customs-ready evidence packs for renewals.",
    ],
  },
  {
    slug: "educational-psychology-training",
    title: "Educational Psychology Training",
    highlight: "Learning • Assessment • Well-being",
    image: "/training-images/EDU%20PSYCH.jpg",
    description:
      "Educational Psychology Training covers learning and development, assessment, intervention, and well-being across schools and education services.",
    bullets: [
      "Foundations of learning and development plus assessment and intervention.",
      "Support for special educational needs, behavior, and mental health.",
      "Ethics, research, and practice across schools and education services.",
    ],
  },
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
            <h1 className="text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">Short-term training that sticks in week one.</h1>
            <p className="text-lg font-semibold text-white/90">Trade Ops • Finance Basics • Leadership</p>
            <p className="max-w-2xl text-lg text-white/85">We believe in capacity building. These are practical sessions designed to improve your team’s performance from day one—not lectures.</p>
            <p className="text-base font-semibold text-white/80">We simplify trade.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center rounded-full bg-[var(--brand-red)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/25 transition hover:-translate-y-0.5">Book a cohort</Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-white/80 bg-white px-5 py-3 text-sm font-semibold text-black shadow-md shadow-black/10 transition hover:-translate-y-0.5"
                style={{ WebkitTextFillColor: "#0f172a" }}
              >
                See logistics services
              </Link>
            </div>
            <ul className="space-y-2 text-sm text-white/90">
              <li className="flex gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white" />Specific training for warehouse staff, finance teams, and logistics officers using real Ethiopian documents.</li>
              <li className="flex gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white" />We teach teams how to eliminate waste and improve efficiency every day.</li>
              <li className="flex gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white" />Integrity and civic responsibility are embedded into every leadership module.</li>
            </ul>
          </div>
          <div className="relative">
            <div className="glass-panel relative grid gap-4 bg-white/12 p-7 text-slate-900 backdrop-blur">
              <p className="text-base font-semibold text-slate-900">Tax auditing support</p>
              <ul className="space-y-3 text-sm text-slate-800">
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--brand-red)]" /><span>Readiness: we spot errors in VAT, Income Tax, and Customs files before auditors do.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--brand-green)]" /><span>Representation: we join audits with clear variance explanations to defend your position.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--brand-navy)]" /><span>Remediation: we fix root causes so you do not face the same penalty twice.</span></li>
              </ul>
              <Link href="#tracks" className="inline-flex w-fit items-center rounded-full bg-[var(--brand-navy)] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5" style={{ WebkitTextFillColor: "#ffffffff" }}>
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
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Role-based training that sticks in week one.</h2>
          <p className="max-w-3xl text-base text-slate-700">We do not deliver generic lectures. We run short, high-impact cohorts tuned to the exact challenges your team faces. Pick the tracks you need and we will deliver them in the rhythm that fits your operations.</p>
        </div>
        <div className="space-y-8">
          {trainings.map((t, idx) => (
            <article
              key={t.slug}
              id={t.slug}
              className="grid gap-6 overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-lg shadow-slate-900/5 lg:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="relative h-64 w-full overflow-hidden bg-slate-100 sm:h-72 lg:h-full">
                <span suppressHydrationWarning>
                  <Image src={t.image || listingBg} alt={t.title} fill className="object-cover" sizes="50vw" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/25" />
                <p className="absolute left-4 bottom-4 text-2xl font-bold text-white drop-shadow-lg sm:text-3xl">{t.title}</p>
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900 shadow">
                  <span>{t.highlight}</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-6 lg:p-8">
                <div className="space-y-2 text-slate-800">
                  <h3 className="text-xl font-semibold text-slate-900">{t.title}</h3>
                  <p className="text-sm leading-relaxed">{t.description}</p>
                </div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">What we cover</h4>
                <ul className="space-y-2 text-sm text-slate-800">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  <Link href="/contact" className="inline-flex items-center rounded-full bg-[var(--brand-navy)] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5">Book this track</Link>
                  <Link href="#top" className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5" style={{ WebkitTextFillColor: "#0f172a" }}>Back to top</Link>
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
              <span className="rounded-full bg-slate-100 px-3 py-1">+251 990 733 333</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">On-site or virtual delivery</span>
            </div>
            <div className="flex gap-3">
              <Link href="/contact" className="inline-flex items-center rounded-full bg-[var(--brand-navy)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5">
                Book a cohort
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white"
                style={{ WebkitTextFillColor: "#0f172a", color: "#0f172a" }}
              >
                See logistics services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
