export default function ContactPage() {
  return (
    <div className="space-y-10 pb-12">
      <section className="glass-panel grid gap-6 p-7 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Contact</p>
          <h1 className="text-3xl font-bold text-slate-900">Tell us about your cargo and team.</h1>
          <p className="text-sm text-slate-700">
            Share your route, commodity, timelines, and training needs. We&apos;ll outline customs steps, duty-free options, and the training tracks that keep your people confident.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-700">
            <span className="rounded-full bg-slate-100 px-3 py-1">Email: hello@optimumlogistics.com</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Phone: +251 • +971 • +86</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Offices: Addis · China · Djibouti · UAE</span>
          </div>
        </div>

        <form className="w-full space-y-4 rounded-2xl bg-slate-50 p-6 shadow-inner ring-1 ring-slate-200">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="text-sm text-slate-700">
              Name
              <input
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                type="text"
                placeholder="Your name"
              />
            </label>
            <label className="text-sm text-slate-700">
              Company
              <input
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                type="text"
                placeholder="Business name"
              />
            </label>
            <label className="text-sm text-slate-700">
              Email
              <input
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                type="email"
                placeholder="you@example.com"
              />
            </label>
            <label className="text-sm text-slate-700">
              Phone
              <input
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                type="tel"
                placeholder="Addis / intl"
              />
            </label>
          </div>
          <label className="text-sm text-slate-700">
            What do you need?
            <textarea
              className="mt-2 h-28 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-400"
              placeholder="Customs clearing, cargo move, training, or consulting"
            />
          </label>
          <button
            className="w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
            type="button"
          >
            Send message
          </button>
          <p className="text-[11px] text-slate-500">We reply within one business day. By submitting, you agree to be contacted about your inquiry.</p>
        </form>
      </section>
    </div>
  );
}
