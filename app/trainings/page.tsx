import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  FileText, 
  ShieldCheck, 
  Clock, 
  School, 
  Users, 
  TrendingUp, 
  BarChart3,
  BookOpen
} from "lucide-react";

const hero = "/training-and-development.jpg";
const listingBg = "/service-placeholder.svg";

const trainings = [
  
  {
    slug: "import-export-workflow",
    title: "Import/Export workflow",
    highlight: "Compliance • Accuracy • Speed",
    image: "/training-images/import-export-business-registration.jpg",
    description:
      "",
    bullets: [
      "How to prepare basic international trade documents like, commercial invoice, packing list, certificate of origin, bill of lading/air waybill, insurance certificate, etc.",
      "Selection of term of payment and incoterms.",
      "Document stack anatomy and critical stamps to avoid storage fees.",
      "HS code and data accuracy to prevent rejections and penalties.",
      "Arranging chamberized documents like, certificate of origin, COMESA, Africa Continental Free Trade Area (AfCFTA) and others.",
      "Arranging Vaning certificate and self heat test for dangerous cargo."
    ],
  },
  {
    slug: "international-trade-customs",
    title: "International Trade & Customs",
    highlight: "Incoterms • HS • Documentation",
    image: "/training-images/international-trade.jpeg",
    description:
      "International Trade & Basic Terms is the back-to-basics track so every team member speaks the language of global trade and avoids costly misunderstandings.",
    bullets: [
      "Cost and risk split across Incoterms (FOB, FCA, CFR, CIF, EXW, etc.) so you pay only what you should.",
      "HS code alignment logic to classify goods accurately and avoid debets.",
      "Selection of term of payment (L/C, T/T, D/P, D/A, CAD) matched to supplier and lane risk.",
    ],
  },
  {
    slug: "single-window-online-trade-applications",
    title: "Single Window & Online Trade Apps",
    highlight: "Accounts • Roles • Clean Data",
    image: "/training-images/Single-Window-Registrations.png",
    description:
      "",
    bullets: [
      "Single window registration for new customer to get username and password",
      "single window application to fill data",
      "Data of bank permit application",
      "Application for regulatory government organizations to get release permit for cargo imported",
      "Configure Trader, Declarant, and LPCO roles securely.",
      "Templates that capture mandatory fields to cut rejection rates.",
      "Monitor ESW workflow across Bank, Insurance, and Customs approvals for clean handovers.",
    ],
  },
  {
    slug: "entrepreneur-business-innovation",
    title: "Entrepreneurship & Business Innovation",
    highlight: "Mindset • Models • Execution",
    image: "/training-images/entreprenur.jpg",
    description:
      "Entrepreneurship & Business Innovation moves teams from running a project to scaling a profitable business with disciplined models and execution.",
    bullets: [
      "Capacitating university graduates to start their own businesses with small capital",
      "How to be self employed and create job opportunities for others",
      "Capacitating government and non-goverment employees to start their own business",
      "Guiding innovators to implement their ideas and inventions into business models", 
      "Inviting motivation speakers to initiate about business mindset",
      "Business models and market fit tuned for Ethiopia.",
      "Agility, risk control, and decision speed.",
      "Scale path: scope → test → grow.",
    ],
  },
  {
    slug: "logistics-cargo-moving",
    title: "Logistics & Cargo Moving",
    highlight: "Sea • Air • Land",
    image: "/training-images/logistics.jpg",
    description:
      "Logistics & Cargo Moving focuses on synchronizing routing with cost-efficiency across Ethiopia's gateways so cargo moves on time and on budget.",
    bullets: [
      "Training cost effective cargo moving and shipment",
      "How to book the shipment",
      "How to prepare basic documents for shipment like,shipping instruction, Waybill, VGM, AWB, BL, etc.",
      "Port, shipping company, and free zone selection advice",
      "Routing and mode strategy matched to cost and speed for each lane.",
      "Port coordination so cargo never sits idle at a border.",
    ],
  },
  {
    slug: "investment-marketing",
    title: "Investment & Marketing",
    highlight: "Offer • Channels • ROI",
    image: "/training-images/marketingg.webp",
    description:
      " ",
    bullets: [
      "Giving clue for new investors how to implement their project from feasiblity study upto turn-key",
      "Institutional and system establishment for finance and HR management",
      "How to brand, segrigate, penetrate and identify their potential demand in the market",
      "How to join international market for their export products",
      "Guide you through the Ethiopian Investment Commission (EIC) permit process.",
      "Define your ICP and pick the right digital and physical channels for Ethiopia.",
      "Measure lead-to-delivery ROI with clear dashboards.",
    ],
  },
  
  {
    slug: "hr-management-systems-leadership",
    title: "HR, Emotional intelligence & Leadership",
    highlight: "SOPs • KPIs • Coaching",
    image: "/training-images/HRR.jpg",
    description:
      "HR Systems & Leadership builds outcome-based systems where every employee knows how to win, aligned to Ethiopia's Occupational Standards.",
    bullets: [
      "HR manual development for organizations",
      "How to evaluate employee performance using KPI and KRA",
      "Expectations defined via Occupational Standards (OS).",
      "Documented workflows across Addis-to-port operations.",
      "Coaching and feedback that stick.",
    ],
  },
  {
    slug: "customer-ethics",
    title: "Customer Ethics",
    highlight: "Honesty • Transparency • Fairness",
    image: "/training-images/ETHICS.jpg",
    description: "Customer Ethics is the application of ethical principles and moral values in commercial relationships, ensuring right conduct even when no one is looking—turning integrity into lasting trust.",
    bullets: [
      "Developing idea of good customer service on the mind of the employees.",
      "How to give priority and respect privacy to the customers.",
      "Capaciating employee with Mahatma Gandhi's quote 'Customer is the most important visitor on our premises'.",
      "Ensure fairness, equal treatment, and accountability in all client interactions.",
      "Align with principles of honesty, integrity, and law-abiding conduct in business practices."
    ]
  },
  {
    slug: "kaizen-philosophy",
    title: "Kaizen Philosophy",
    highlight: "Continuous Improvement • Process Excellence",
    image: "/training-images/KAIZEN.png",
    description: "Kaizen Philosophy fosters a culture of ongoing, incremental improvements in processes, systems, and ethical behavior—empowering teams to eliminate waste and enhance efficiency systematically.",
    bullets: [
      "How to arrange office, data, inventory and workplace for efficiency (5S Methodology).",
      "How to make shine your work area and maintain standardization.",
      "Implement small, consistent changes to improve workflow and reduce operational waste.",
      "Encourage employee involvement and feedback for continuous process enhancements.",

  ]
  },
  {
    slug: "finance-customs-tax-administration-systems",
    title: "Finance, Customs & Tax Administration",
    highlight: "Landed Cost • Approvals",
    image: "/training-images/TAX.jpg",
    description:"",
    bullets: [
      "How to develop finance system in one organization",
      "Training peoples about Tax and customes directive, proclamation and laws",
      "Capaciate on how to compute duty and tax.",
      "Giving training on HS code setting and yearly income tax evaluation",
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
      "How to study using SQ3R method for students and teachers",
      "How to use educational psychology in teaching and learning process",
      "How teachers should treat students by using child psychology concepts",
      "Foundations of learning and development plus assessment and intervention.",
      "Support for special educational needs, behavior, and mental health.",
    ],
  },
  {
    slug: "training-man-power-for-local-and-foreign-employers",
    title: "Training man power for local and foreign employers",
    highlight: "Learn • Earn • Grow",
    image: "/training-images/ms.jpeg",
    description:"",
    bullets: [
      "Training and supplying man power with on-demand skills.",
      "Training man power with skills like, housekeeping, gardening, cooking, driving & mechanics, child care, tailor, carpenter, etc.",
      "Training man power with computer and language skills.",
      
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
            <p className="text-[15px] font-semibold uppercase tracking-[0.35em] text-emerald-100">Training</p>
            <h1 className="text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">Short-term training that sticks in week one.</h1>
            <p className="text-lg font-semibold text-white/90">Trade Ops • Finance Basics • Leadership</p>
            <p className="max-w-2xl text-lg text-white/85">We believe in capacity building. These are practical sessions designed to improve your team’s performance from day one—not lectures.</p>
            <p className="text-base font-semibold text-white/80">We simplify trade.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-red)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/25 transition hover:-translate-y-0.5">
                Book a cohort <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-white/80 bg-white px-5 py-3 text-sm font-semibold text-black shadow-md shadow-black/10 transition hover:-translate-y-0.5"
                style={{ WebkitTextFillColor: "#0f172a" }}
              >
                See logistics services
              </Link>
            </div>
            <ul className="space-y-4 text-sm text-white/90">
              <li className="flex gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                  <Users size={12} />
                </div>
                <span>Specific training for warehouse staff, finance teams, and logistics officers using real Ethiopian documents.</span>
              </li>
              <li className="flex gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                  <TrendingUp size={12} />
                </div>
                <span>We teach teams how to eliminate waste and improve efficiency every day.</span>
              </li>
              <li className="flex gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                  <ShieldCheck size={12} />
                </div>
                <span>Integrity and civic responsibility are embedded into every leadership module.</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="glass-panel relative grid gap-4 bg-white/12 p-7 text-slate-900 backdrop-blur">
              <p className="text-base font-semibold text-slate-900">Tax auditing support</p>
              <ul className="space-y-3 text-sm text-slate-800">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-red)]/10 text-[var(--brand-red)]">
                    <Search size={12} />
                  </span>
                  <span>Readiness: we spot errors in VAT, Income Tax, and Customs files before auditors do.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-green)]/10 text-[var(--brand-green)]">
                    <FileText size={12} />
                  </span>
                  <span>Representation: we join audits with clear variance explanations to defend your position.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-navy)]/10 text-[var(--brand-navy)]">
                    <ShieldCheck size={12} />
                  </span>
                  <span>Remediation: we fix root causes so you do not face the same penalty twice.</span>
                </li>
              </ul>
              <Link href="#tracks" className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--brand-navy)] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5" style={{ WebkitTextFillColor: "#ffffffff" }}>
                View tracks <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Training tracks */}
      <section id="tracks" className="mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:px-10">
        <div className="flex flex-col gap-2">
          <p className="text-[13px] font-semibold uppercase tracking-[0.35em] text-slate-600">Training catalog</p>
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
                  <BookOpen size={12} className="text-[var(--brand-red)]" />
                  <span>{t.highlight}</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-6 lg:p-8">
                <div className="space-y-2 text-slate-800">
                  <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                    <School size={20} className="text-[var(--brand-green)]" />
                    {t.title}
                  </h3>
                  <p className="text-sm leading-relaxed">{t.description}</p>
                </div>
                <h4 className="text-[15px] font-semibold uppercase tracking-[0.2em] text-slate-600">What we cover</h4>
                <ul className="space-y-3 text-sm text-slate-800">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 text-[var(--brand-green)] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5">
                    <p className="text-white">Book this track</p>
                    <ArrowRight size={16} className="text-white" />
                  </Link>
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
              <p className="text-[13px] font-semibold uppercase tracking-[0.35em] text-slate-600">Ready to start</p>
              <h3 className="text-2xl font-semibold text-slate-900">Tell us your team size, goals, and timing.</h3>
              <p className="text-base text-slate-700">We respond within one business day with a proposed agenda, facilitators, and materials list.</p>
            </div>
            
            <div className="flex gap-3">
              <Link href="/contact" className="inline-flex items-center rounded-full bg-[var(--brand-navy)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5">
                
                <p className="text-white">Book a cohort</p>
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
