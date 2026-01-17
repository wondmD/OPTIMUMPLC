import Image from "next/image";
import SubmitButton from "../components/SubmitButton";
import { sendContactMail } from "../actions/sendContactMail";
import { Mail, Phone, MapPin, ShieldCheck, ArrowRight, MessageSquare, Info } from "lucide-react";

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
          <Image src="/cargo-movement.jpeg" alt="Contact cover" fill priority className="absolute inset-0 h-full w-full object-cover" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/35 to-emerald-900/30" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="flex items-center gap-3">
            <span className="flex h-1 w-12 rounded-full bg-emerald-400" />
            <p className="text-[15px] font-semibold uppercase tracking-[0.35em] text-emerald-200">Contact</p>
          </div>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl max-w-4xl text-white">We make cross-border trade predictable.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90 leading-relaxed font-medium">Tell us your route, cargo, and timing. We manage the full logistics stack—single window, duty-free, multimodal moves, and training—so you stay focused on customers.</p>
        </div>
      </section>

      <section className="glass-panel grid gap-6 p-7 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:p-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MessageSquare size={20} className="text-emerald-600" />
              <p className="text-[15px] font-semibold uppercase tracking-[0.3em] text-slate-500">Get in touch</p>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Tell us about your cargo and team.</h2>
            <p className="text-base text-slate-700 leading-relaxed">
              Share your route, commodity, timelines, and training needs. We&apos;ll outline customs steps, duty-free options, multimodal moves, and the training tracks that keep your people confident.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/60">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
                <Mail size={20} />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-slate-900">Email us</p>
                <a href="mailto:contact@optimumlogisticsplc.com" className="text-slate-600 hover:text-emerald-600">contact@optimumlogisticsplc.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/60">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
                <Phone size={20} />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-slate-900">Call us</p>
                <a href="tel:+251111250386" className="text-slate-600 hover:text-emerald-600">+251 11 125 0386</a>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
             <div className="flex items-center gap-2">
              <MapPin size={20} className="text-emerald-600" />
              <p className="text-sm font-semibold text-slate-900">Our main office in Addis</p>
            </div>
            {/* Map beside the form */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.528340156942!2d38.74128507577587!3d9.033785489146244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f09670f59b%3A0xe53c070c7974e64!2sGobena%20Aba%20Tigu%20St%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1705500000000!5m2!1sen!2set"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Optimum Logistics Location Map"
                className="grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        <form action={sendContactMail} className="w-full space-y-4 rounded-3xl bg-slate-900 p-6 shadow-2xl ring-1 ring-white/10 sm:p-8 lg:p-10">
          <input type="hidden" name="redirect" value="/contact" />
          <input type="hidden" name="source" value="Contact page" />
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white">Send a message</h3>
            <p className="text-sm text-white/60">We reply within one business day.</p>
          </div>
          {sent && <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 text-sm font-semibold text-emerald-400">Message sent successfully! We will get back to you soon.</div>}
          {error && <div className="rounded-lg bg-rose-500/10 border border-rose-500/20 px-4 py-3 text-sm font-semibold text-rose-400">We couldn&apos;t send your message. Please try again or email us directly.</div>}
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-white/80">
              Name
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-500/50 focus:bg-white/10"
                type="text"
                name="name"
                placeholder="Full name"
              />
            </label>
            <label className="text-sm font-medium text-white/80">
              Company
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-500/50 focus:bg-white/10"
                type="text"
                name="company"
                placeholder="Business name"
              />
            </label>
            <label className="text-sm font-medium text-white/80">
              Email
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-500/50 focus:bg-white/10"
                type="email"
                name="email"
                required
                placeholder="you@email.com"
              />
            </label>
            <label className="text-sm font-medium text-white/80">
              Phone
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-500/50 focus:bg-white/10"
                type="tel"
                name="phone"
                placeholder="+251 ..."
              />
            </label>
          </div>
          <label className="text-sm font-medium text-white/80">
            What do you need?
            <textarea
              className="mt-2 h-32 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-500/50 focus:bg-white/10"
              name="message"
              required
              placeholder="Customs clearing, cargo move, training tracks, or consulting services..."
            />
          </label>
          <SubmitButton className="w-full rounded-full bg-white px-6 py-4 text-sm font-bold text-slate-900 shadow-xl transition hover:-translate-y-1 hover:bg-emerald-400" />
          <div className="flex items-start gap-2 pt-2 text-[11px] text-white/40 leading-relaxed">
            <Info size={12} className="mt-0.5 shrink-0" />
            <p>By submitting this form, you agree to our response policy. We prioritize urgent shipping inquiries and aim to provide a full plan within 24 hours.</p>
          </div>
        </form>
      </section>
    </div>
  );
}
