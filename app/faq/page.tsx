export default function FAQPage() {
  const faqs = [
    {
      q: "What lanes do you operate?",
      a: "We operate global lanes with bonded transit. Flagships include Asia, Middle East, Europe, and Africa → Djibouti/Addis, plus GCC distribution with localized compliance.",
    },
    {
      q: "Can you handle single-window and customs?",
      a: "Yes. We prepare and submit single-window filings, validate HS codes, draft declarations, manage duty/tax payments, and coordinate inspections, bonded warehousing, and duty-free where eligible.",
    },
    {
      q: "What services can you bundle?",
      a: "Duty-free setup and renewals, single-window registrations, foreign purchase and supplier vetting, inspections, logistics and last mile, customs clearing, consulting (business, tax, import/export), marketing & sales, and short-term training.",
    },
    {
      q: "Do you provide training?",
      a: "Yes. Tracks include trade documentation, single-window apps, HS codes, logistics operations, finance & tax, leadership, HR systems, customer ethics, Kaizen, and motivational/entrepreneurship cohorts.",
    },
    {
      q: "How quickly can we get a quote?",
      a: "Send origin, destination, commodity, INCOTERMS, volume/weight, and timing. Most quotes go out within one business day with steps and required documents.",
    },
    {
      q: "What do you need to start a shipment?",
      a: "Commercial invoice, packing list, HS codes, COO, BL/AWB draft, permits or duty-free approvals if applicable, and consignee/shipper details. We help align these before movement to reduce queries.",
    },
    {
      q: "Can you support duty-free projects?",
      a: "Yes. We review eligibility, prepare exemption letters, assemble evidence, submit and track approvals, and maintain audit-ready reconciliations for renewals.",
    },
    {
      q: "How do you handle exceptions and delays?",
      a: "We use predefined playbooks per lane: milestone tracking from factory to POD, variance explanations, fast responses to single-window queries, and bonded options to keep cargo moving while issues resolve.",
    },
    {
      q: "Do you work with perishable or sensitive cargo?",
      a: "We support standard and sensitive cargo (e.g., regulated items) with lane-specific compliance. For hazardous or temperature-controlled cargo, we confirm feasibility and handling requirements case by case.",
    },
    {
      q: "Can you operate with our teams on-site or virtually?",
      a: "Yes. Operations, filings, and trainings can be run on-site in Addis, Djibouti, UAE, and origin hubs across Asia/Europe/Middle East/Africa, or virtually depending on lane and urgency.",
    },
  ];

  return (
    <div className="space-y-10 pb-12">
      <section className="glass-panel p-7">
        <h1 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h1>
        <p className="mt-2 text-sm text-slate-700">Don’t see your question here? Email contact@optimumlogisticsplc.com or info@optimumlogisticsplc.com and we’ll help. We simplify trade.</p>
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
