export default function FAQPage() {
  const faqs = [
    {
      q: "What lanes do you operate?",
      a: "Our flagship corridor is China → Djibouti → Addis. We also operate lanes via UAE and to GCC hubs by air and sea.",
    },
    {
      q: "Can you handle single-window and customs?",
      a: "Yes. We prepare and submit single-window filings, perform HS code validation, and coordinate bonded warehousing and duty-free as applicable.",
    },
    {
      q: "Do you provide training?",
      a: "We run practical training for trade, documentation, finance & tax, leadership and HR systems, customer ethics, and Kaizen.",
    },
    {
      q: "How quickly can we get a quote?",
      a: "Share your origin, destination, commodity, and timing—most quotes go out within one business day.",
    },
  ];

  return (
    <div className="space-y-10 pb-12">
      <section className="glass-panel p-7">
        <h1 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h1>
        <p className="mt-2 text-sm text-slate-700">Don’t see your question here? Email hello@optimumlogistics.com and we’ll help.</p>
        <div className="mt-6 divide-y divide-slate-200">
          {faqs.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-left text-sm font-semibold text-slate-900">
                {f.q}
                <span className="ml-3 rounded-full bg-slate-100 px-2 py-1 text-[10px] text-slate-700 group-open:rotate-90">›</span>
              </summary>
              <p className="pb-4 text-sm text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
