import Image from "next/image";
import Link from "next/link";
import { sendContactMail } from "./actions/sendContactMail";

const heroImage = "/cargo-movement.jpeg";

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
];

const services = [
  {
    title: "Customs & duty-free",
    description: "Single-window filings, HS code validation, and bonded warehouse orchestration.",
  },
  {
    title: "International procurement",
    description: "Supplier coordination in China, Djibouti, UAE—quality checks and secured payments.",
  },
  {
    title: "Freight & last mile",
    description: "Sea, air, and land freight with live tracking into Addis Ababa and regional hubs.",
  },
  {
    title: "Consulting & tax",
    description: "Import/export strategy, investment readiness, tax auditing, and EIA facilitation.",
  },
  {
    title: "Marketing & sales",
    description: "Market-entry playbooks, channel setup, and revenue-focused sales execution.",
  },
  {
    title: "Training & people",
    description: "Kaizen, leadership, HR systems, customer ethics, finance, and trade operations.",
  },
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
  { label: "Cargo corridor", value: "China → Addis" },
  { label: "Coverage", value: "Djibouti · UAE · GCC" },
  { label: "Mode", value: "Sea · Air · Land" },
  { label: "Promise", value: "We simplify trade" },
];

const steps = [
  {
    title: "Plan",
    text: "Route, HS codes, duty-free options, and timelines mapped in a single plan.",
  },
  {
    title: "Clear",
    text: "Customs, tax auditing, single-window submissions, and bonded moves handled for you.",
  },
  {
    title: "Uplift",
    text: "Teams trained on trade, finance, leadership, and customer ethics so performance sticks.",
  },
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
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[72vh] md:h-[78vh]">
          <span suppressHydrationWarning>
            <Image src={heroImage} alt="Logistics process" fill priority className="object-cover" sizes="100vw" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-transparent" />
          <div className="pointer-events-none absolute left-0 right-0 top-0 flex justify-center p-6 sm:p-10">
            <p className="text-center text-3xl font-bold uppercase tracking-[0.18em] text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)] sm:text-4xl">
              Optimum Logistics and Consulting
            </p>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="relative isolate w-full overflow-hidden bg-white py-10">
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-5 px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Trusted by</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-90">
            {partnerLogos.map((logo) => (
              <span key={logo.src} suppressHydrationWarning>
                <Image src={logo.src} alt={logo.alt} width={150} height={46} className="object-contain" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="relative isolate w-full overflow-hidden px-6">
        <div className="pointer-events-none absolute inset-4 rounded-[32px] opacity-50 bg-dots-slate animate-dots" />
        <div className="pointer-events-none absolute inset-4 rounded-[32px] opacity-30 bg-lines-slate animate-lines" />
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl ring-1 ring-slate-200/70">
          <span suppressHydrationWarning>
            <Image src="/services-background.webp" alt="Services background" fill className="object-cover" priority sizes="100vw" />
          </span>
          <div className="absolute inset-0 bg-slate-900/80" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 sm:px-10">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">Services</p>
              <h2 className="text-3xl font-bold sm:text-4xl">End-to-end trade, cleared and delivered</h2>
              <p className="max-w-3xl text-sm sm:text-base text-white/80">
                Customs, procurement, freight, and team training bundled into one accountable partner. We plan, move, clear, and uplift so your cargo and teams arrive ready.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl bg-white/10 p-6 backdrop-blur-md ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/15"
                >
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-base font-semibold">
                    {service.title.slice(0, 2)}
                  </div>
                  <h3 className="relative mt-5 text-xl font-semibold">{service.title}</h3>
                  <p className="relative mt-2 text-sm leading-6 text-white/85">{service.description}</p>
                  <Link
                    className="relative mt-4 inline-flex items-center text-sm font-semibold text-emerald-200 underline underline-offset-4"
                    href="/services"
                  >
                    Explore service
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corridor + Capabilities */}
      <section className="relative isolate w-full overflow-hidden bg-slate-50/70 py-12">
        <div className="absolute inset-0">
          <span suppressHydrationWarning>
            <Image src="/cargo-movement.jpeg" alt="Training backdrop" fill className="object-cover blur-md scale-110" sizes="100vw" />
          </span>
          <div className="absolute inset-0 bg-white/82" />
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-60 bg-dots-slate animate-dots" />
        <div className="pointer-events-none absolute inset-0 opacity-35 bg-lines-slate animate-lines" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Training portfolio</p>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Optimum Company Trainings</h2>
              <p className="text-base text-slate-700">
                Scenario-based sessions for operators, founders, finance, and leadership teams. We teach international trade, documentation, tax, Kaizen, HR systems, and customer ethics.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {trainings.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                    <p className="text-sm font-medium text-slate-900">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/trainings"
                className="inline-flex w-fit items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5"
              >
                View all trainings
              </Link>
            </div>

            <div className="relative rounded-2xl bg-white/75 p-6 shadow-xl ring-1 ring-slate-200 backdrop-blur">
              <h3 className="text-xl font-semibold text-slate-900">Focused training delivery</h3>
              <p className="mt-2 text-sm text-slate-700">
                One backdrop—many cohorts. We simplify trade by tailoring playbooks and checklists to your operators, finance, and leadership teams.
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-900">We simplify trade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training CTA + Why Optimum */}
      <section className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[var(--brand-navy)] via-[var(--brand-navy)] to-[var(--brand-green)] py-12 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-40 bg-dots-white animate-dots" />
        <div className="pointer-events-none absolute inset-0 opacity-25 bg-lines-white animate-lines" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">How we work</p>
              <h3 className="text-3xl font-bold sm:text-4xl">Plan · Clear · Uplift</h3>
              <p className="text-sm text-white/80">
                We combine operational rigor with leadership training so every shipment moves faster and every team levels up.
              </p>
              <div className="grid gap-3">
                {steps.map((step) => (
                  <div key={step.title} className="flex gap-3 rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sm font-bold text-slate-900">
                      {step.title[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{step.title}</p>
                      <p className="text-sm text-white/75">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 shadow-xl ring-1 ring-white/10">
              <h4 className="text-xl font-semibold">Ready for your next shipment?</h4>
              <p className="mt-2 text-sm text-white/80">
                Send your route, commodity, and deadline. We reply within one business day with a plan.
              </p>
              <div className="mt-4 grid gap-2 text-sm text-white">
                <span>contact@optimumlogisticsplc.com • info@optimumlogisticsplc.com</span>
                <span>+251 11 125 0386 • +251 913 335 596 • +251 711 335 596 • +251 962 083 792</span>
                <span>Office: Addis Ababa</span>
              </div>
              <div className="mt-5 flex gap-3">
                <Link href="/contact" className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-md transition hover:-translate-y-0.5">
                  Request a quote
                </Link>
                <Link href="/services" className="inline-flex items-center rounded-full border border-white/50 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5">
                  View services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section with form */}
      <section className="relative isolate w-full overflow-hidden px-6">
        <div className="pointer-events-none absolute inset-0 opacity-45 bg-dots-slate animate-dots" />
        <div className="pointer-events-none absolute inset-0 opacity-30 bg-lines-slate animate-lines" />
        <div className="glass-panel relative grid gap-6 p-7 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Contact</p>
            <h3 className="text-2xl font-bold text-slate-900">Let’s plan your next shipment</h3>
            <p className="text-sm text-slate-700">Email us your route, commodity, and timing. We respond within one business day.</p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-800">
              <span className="rounded-full bg-slate-100 px-3 py-1">contact@optimumlogisticsplc.com</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">info@optimumlogisticsplc.com</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">+251 11 125 0386</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">+251 913 335 596</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">+251 711 335 596</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">+251 962 083 792</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">Office: Addis Ababa</span>
            </div>
            <div className="flex gap-3">
              <Link href="/contact" className="inline-flex items-center rounded-full bg-[var(--brand-navy)] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5">Full contact page</Link>
              <Link href="/services" className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white">View services</Link>
            </div>
          </div>

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
            <button
              className="w-full rounded-full bg-[var(--brand-navy)] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5"
              type="submit"
            >
              Send message
            </button>
            <p className="text-[11px] text-slate-500">We reply within one business day. By submitting, you agree to be contacted about your inquiry.</p>
          </form>
        </div>
      </section>
    </div>
  );
}
