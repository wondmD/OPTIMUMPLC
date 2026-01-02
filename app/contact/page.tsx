import Image from "next/image";
import { sendContactMail } from "../actions/sendContactMail";

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string>>;
}) {
  const params = (await searchParams) || {};
  const sent = params.sent === "1";
  const error = params.error === "1";

  return (
    <div className="space-y-10 pb-12 bg-plane-ship">
      {/* Hero background */}
      <section className="relative overflow-hidden bg-slate-900 text-white shadow-2xl">
        <span suppressHydrationWarning>
          <Image src="/service-placeholder.svg" alt="Contact cover" fill priority className="absolute inset-0 h-full w-full object-cover" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/35 to-emerald-900/30" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-200">Contact</p>
          <h1 className="mt-2 text-4xl font-bold leading-tight sm:text-5xl">We make cross-border trade predictable.</h1>
          <p className="mt-3 max-w-2xl text-base text-white/85">Tell us your route, commodity, and timing. We manage the full logistics stack—single window, duty-free, multimodal moves, and training—so you stay focused on customers.</p>
        </div>
      </section>

      <section className="glass-panel grid gap-6 p-7 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Contact</p>
          <h1 className="text-3xl font-bold text-slate-900">Tell us about your cargo and team.</h1>
          <p className="text-sm text-slate-700">
            Share your route, commodity, timelines, and training needs. We&apos;ll outline customs steps, duty-free options, multimodal moves, and the training tracks that keep your people confident.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-700">
            <span className="rounded-full bg-slate-100 px-3 py-1">Email: contact@optimumlogisticsplc.com</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Email: info@optimumlogisticsplc.com</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Phone: +251 11 125 0386</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Phone: +251 913 335 596</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Phone: +251 711 335 596</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Phone: +251903168943</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Office: East Shewa, Adama—Soreti Mall, Ground Office 32 A2</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Office: Addis Ababa—Takilahayimanot, Sumale Tera Business Center, 6th Floor, Office 608</span>
          </div>
        </div>

        <form action={sendContactMail} className="w-full space-y-4 rounded-2xl bg-slate-50 p-6 shadow-inner ring-1 ring-slate-200">
          <input type="hidden" name="redirect" value="/contact" />
          <input type="hidden" name="source" value="Contact page" />
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
            className="w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
            type="submit"
          >
            Send message
          </button>
          <p className="text-[11px] text-slate-500">We reply within one business day. By submitting, you agree to be contacted about your inquiry.</p>
        </form>
      </section>
    </div>
  );
}
