import Image from "next/image";
import Link from "next/link";
import ImpactCounters from "./components/ImpactCounters";
import GrowthChart from "./components/GrowthChartWrapper";
import SubmitButton from "./components/SubmitButton";
import { sendContactMail } from "./actions/sendContactMail";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Users, 
  School, 
  BarChart3, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight,
  Search,
  FileText,
  Truck,
  FileCheck,
  Handshake,
  Globe,
  Zap,
  Map,
  Ship,
  Plane
} from "lucide-react";

const heroImage = "/banner.png";

const partnerLogos = [
  { src: "/partners/partener1.png", alt: "Partner logo 1" },
  { src: "/partners/partener2.png", alt: "Partner logo 2" },
  { src: "/partners/partener3.png", alt: "Partner logo 3" },
  { src: "/partners/partener4.png", alt: "Partner logo 4" },
  { src: "/partners/partener5.png", alt: "Partner logo 5" },
  { src: "/partners/partener6.png", alt: "Partner logo 6" },
  { src: "/partners/partener7.png", alt: "Partner logo 7" },
  { src: "/partners/partner8.png", alt: "Partner logo 8" },
  { src: "/partners/partener9.png", alt: "Partner logo 9" },
  { src: "/partners/careland.jpg", alt: "Careland logo" },
];

const customers = [
  "Importer",
  "Manufacturer",
  "New entrant customers or manufacturer to the market",
  "Exporter",
  "Company on establishment",
  "Government and non-government organization",
];

const coreSolutions = [
  "Single Window Registration and Applications",
  "HS Code and Tariff Setting",
  "Duty-Free Facilitation",
  "Cargo Follow Up",
  "Customs and Port Clearance",
  "Free zone Purchase Facilities",
  "Import and Export Document preparations",
  "Bank permit and Foreign Purchase",
  "Multi-Modal Logistics (Sea, Air, Land)",
  "Entrepreneur Training",
  "Professional Training & consultancy",
];

const trainings = [
  "Entrepreneur and business thinking",
  "Motivational speakers and team lift",
  "International trade and core terms",
  "Import & export mandatory documents",
  "Investment and marketing fundamentals",
  "Logistics and moving cargo",
  "HR systems and leadership",
  "Customer ethics",
  "Kaizen philosophy",
  "Finance and tax administration",
  "Single window and online trade apps",
];

const stats = [
  { label: "Cargo corridors", value: "Asia · ME · EU · Africa → Addis" },
  { label: "Coverage", value: "Djibouti · UAE · GCC · Africa" },
  { label: "Mode", value: "Sea · Air · Land" },
  { label: "Promise", value: "We simplify trade" },
];

const valuesInPractice = [
  "Clear steps and transparent paperwork",
  "Proactive communication with honest timelines",
  "Continuous improvement and Kaizen mindset",
  "We work with you, not just for you",
];

const methodSteps = [
  { title: "Review", text: "Cargo type, INCOTERMS, HS codes, permits, and duty/tax exposure mapped upfront." },
  { title: "Prepare", text: "Invoices, certificates, packing lists, and single-window accounts aligned; space locked." },
  { title: "Move", text: "Sea, air, and land routes coordinated with milestone tracking and consolidation control." },
  { title: "Clear", text: "Port clearance under customs seal with exception playbooks and document hygiene." },
  { title: "Handover", text: "Final delivery, post-move analysis, and capacity building for your team." },
];

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string>>;
}) {
  const params = (await searchParams) || {};
  const sent = params.sent === "1";
  const error = params.error === "1";
  return (
    <div className="space-y-16 pb-12">
      {/* Single hero image with clear title */}
      <section className="relative w-full h-[calc(100vh-5rem)] overflow-hidden bg-[#0f1115]">
        <span suppressHydrationWarning>
          <Image
            src={heroImage}
            alt="Logistics process"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </span>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        
        {/* Stylish title at the top */}
        <div className="relative h-full flex items-start justify-center p-6 text-center pt-10 sm:pt-14">
          <div className="max-w-5xl space-y-6">
            <h1 className="text-3xl font-extrabold tracking-tighter text-white drop-shadow-2xl sm:text-5xl lg:text-6xl">
              <span className="block opacity-90">OPTIMUM LOGISTICS</span>
              <span className="block text-emerald-400">AND CONSULTING</span>
            </h1>
            <p className="mx-auto max-w-xl text-sm font-medium uppercase tracking-[0.2em] text-white/90 drop-shadow-md sm:text-base">
              We simplify trade
            </p>
          </div>
        </div>

        {/* Bottom actions */}
        <div className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="rounded-full bg-[var(--brand-red)] px-8 py-3 text-sm font-bold text-white shadow-xl transition hover:-translate-y-1 hover:brightness-110">
              
              <p className="text-white">Request a Quote</p>
            </Link>
            <Link href="/services" className="rounded-full border border-white/50 bg-white/10 px-8 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/20">
              
              <p className="text-white">View Services</p>
            </Link>
          </div>
        </div>
      </section>

      <ImpactCounters />

      {/* About snapshot */}
      <section className="relative isolate w-full overflow-hidden bg-slate-50/80 py-12">
        <div className="pointer-events-none absolute inset-0 opacity-40 bg-dots-slate animate-dots" />
        <div className="pointer-events-none absolute inset-0 opacity-20 bg-lines-slate animate-lines" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-4">
              <p className="text-[13px] font-semibold uppercase tracking-[0.35em] text-slate-500">About Optimum Logistics</p>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">We move cargo easily and safely on international trade.</h2>
              <p className="text-base text-slate-700">
                We are the bridge between global suppliers and the Ethiopian market. We scout reliable partners, validate documents, secure bookings, and manage bonded transit and clearance with total transparency. Beyond moving cargo, we build capacity through consulting and training so your team stays high-performing long after delivery.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {valuesInPractice.map((value) => (
                  <div key={value} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <CheckCircle2 size={18} className="mt-0.5 text-emerald-500 shrink-0" />
                    <p className="text-sm font-medium text-slate-900">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5 rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200/80">
              <div className="space-y-2">
                <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-slate-500">Core solutions</p>
                <p className="text-lg font-semibold text-slate-900">The logistics stack we manage</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {coreSolutions.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <ShieldCheck size={18} className="mt-0.5 text-[var(--brand-navy)] shrink-0" />
                    <p className="text-sm font-medium text-slate-900">{item}</p>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="relative isolate w-full overflow-hidden bg-white py-10">
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-5 px-6">
          <p className="text-[15px] font-semibold uppercase tracking-[0.3em] text-slate-500">Trusted by</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-90">
            {partnerLogos.map((logo) => (
              <span key={logo.src} suppressHydrationWarning>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={46}
                  className="object-contain"
                  style={{ filter: "invert(0)" }}
                />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Customers and Solutions overview */}
      <section className="relative isolate w-full overflow-hidden px-6">
        <div className="pointer-events-none absolute inset-4 rounded-[32px] opacity-50 bg-dots-slate animate-dots" />
        <div className="pointer-events-none absolute inset-4 rounded-[32px] opacity-30 bg-lines-slate animate-lines" />
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl ring-1 ring-slate-200/70">
          <span suppressHydrationWarning>
            <Image
              src="/services-background.webp"
              alt="Background"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              style={{ filter: "invert(0)" }}
            />
          </span>
          <div className="absolute inset-0 bg-slate-900/85" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 sm:px-10">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Customers We Help */}
              <div className="space-y-6">
                <div>
                  <p className="text-[15px] font-semibold uppercase tracking-[0.3em] text-emerald-200">Partnership</p>
                  <h2 className="text-3xl font-bold sm:text-4xl text-white">Customers we help</h2>
                </div>
                <div className="grid gap-3">
                  {customers.map((customer) => (
                    <div key={customer} className="flex items-center gap-4 rounded-xl bg-white/10 p-4 ring-1 ring-white/10 transition hover:bg-white/15">
                      <Users size={20} className="text-emerald-400 shrink-0" />
                      <p className="text-lg font-medium text-white/95">{customer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Solutions */}
              <div className="space-y-6">
                <div>
                  <p className="text-[15px] font-semibold uppercase tracking-[0.3em] text-amber-200">Our Expertise</p>
                  <h2 className="text-3xl font-bold sm:text-4xl text-white">Our Core Solutions</h2>
                </div>
                <div className="grid gap-2">
                  {coreSolutions.map((solution) => (
                    <div key={solution} className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 px-4 py-2.5 transition hover:border-white/20">
                      <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                      <p className="text-[15px] font-medium text-white/90">{solution}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-bold text-slate-900 transition hover:scale-105"
                >
                  Explore all services <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operation Growth Chart */}
      <section className="relative mx-auto max-w-6xl px-6">
        <GrowthChart />
      </section>

      {/* Corridor + Capabilities */}
      <section className="relative isolate w-full overflow-hidden bg-slate-50/70 py-12">
        <div className="absolute inset-0">
          <span suppressHydrationWarning>
            <Image
              src="/cargo-movement.jpeg"
              alt="Training backdrop"
              fill
              className="object-cover blur-md scale-110"
              sizes="100vw"
              style={{ filter: "invert(0)" }}
            />
          </span>
          <div className="absolute inset-0 bg-white/82" />
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-60 bg-dots-slate animate-dots" />
        <div className="pointer-events-none absolute inset-0 opacity-35 bg-lines-slate animate-lines" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-[15px] font-semibold uppercase tracking-[0.3em] text-slate-500">Training portfolio</p>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Short-term trainings</h2>
              <p className="text-base text-slate-700">
                Practical, role-based workshops that improve performance from day one, plus tax-audit defense that keeps your filings clean and your team calm.
              </p>
              <div className="grid gap-3 sm:grid-cols-1">
                <div className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                    <School size={18} className="text-emerald-500" />
                    Short-term training
                  </p>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-slate-500">Trade ops • Finance basics • Leadership</p>
                  <ul className="space-y-2 text-sm text-slate-800">
                    <li className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>Specific tracks for warehouse staff, finance teams, and logistics officers using Ethiopian documents.</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>We teach teams to spot waste and improve efficiency every day.</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 text-emerald-500 shrink-0" />
                      <span>Integrity and civic responsibility embedded into every leadership module.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                href="/trainings"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5"
              >
                <p className="text-white">View all trainings</p>
                <ArrowRight size={18} className="text-white" />
              </Link>
            </div>

            <div className="relative rounded-2xl bg-white/75 p-6 shadow-xl ring-1 ring-slate-200 backdrop-blur">
              <h3 className="text-xl font-semibold text-slate-900">Role-based training that sticks</h3>
              <p className="mt-2 text-sm text-slate-700">
                Workshops are built for each role—warehouse, finance, logistics, leadership—and use real Ethiopian paperwork so habits change in week one.
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-900">We simplify trade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section with form */}
      <section className="relative isolate w-full overflow-hidden px-6">
        <div className="pointer-events-none absolute inset-0 opacity-45 bg-dots-slate animate-dots" />
        <div className="pointer-events-none absolute inset-0 opacity-30 bg-lines-slate animate-lines" />
        <div className="glass-panel relative grid gap-6 p-7  lg:items-start">
          <div className="space-y-4">
            <p className="text-[15px] font-semibold uppercase tracking-[0.3em] text-slate-500">Get a Quote</p>
            <h3 className="text-2xl font-bold text-slate-900">Let’s plan your next shipment</h3>
            <p className="text-sm text-slate-700">Email us your route, commodity, and timing. We respond within one business day.</p>
            
             <form action={sendContactMail} className="w-full space-y-4 rounded-2xl bg-slate-50 p-6 shadow-inner ring-1 ring-slate-200">
            <input type="hidden" name="redirect" value="/" />
            <input type="hidden" name="source" value="Home contact section" />
            {sent && <div className="rounded-lg bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">Message sent. We will reply within one business day.</div>}
            {error && <div className="rounded-lg bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700">We could not send right now. Please try again or email contact@optimumlogisticsplc.com.</div>}
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="text-sm text-slate-700">
                Name
                <input
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                  type="text"
                  name="name"
                  placeholder="Your name"
                />
              </label>
              <label className="text-sm text-slate-700">
                Company
                <input
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                  type="text"
                  name="company"
                  placeholder="Business name"
                />
              </label>
              <label className="text-sm text-slate-700">
                Email
                <input
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                />
              </label>
              <label className="text-sm text-slate-700">
                Phone
                <input
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                  type="tel"
                  name="phone"
                  placeholder="Addis / intl"
                />
              </label>
            </div>
            <label className="text-sm text-slate-700">
              What do you need?
              <textarea
                className="mt-2 h-28 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                name="message"
                required
                placeholder="Customs clearing, cargo move, training, or consulting"
              />
            </label>
            <SubmitButton className="w-full rounded-full bg-[var(--brand-navy)] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5" />
            <p className="text-[11px] text-slate-500">We reply within one business day. By submitting, you agree to be contacted about your inquiry.</p>
          </form>

              
            <div className="flex gap-3 pt-2">
              <Link href="/contact" className="inline-flex items-center rounded-full bg-[var(--brand-navy)] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"><p className="text-white">Full contact page</p></Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white"
                style={{ WebkitTextFillColor: "#0f172a", color: "#0f172a" }}
              >
                View services
              </Link>
            </div>
          </div>

                 </div>
      </section>
    </div>
  );
}
