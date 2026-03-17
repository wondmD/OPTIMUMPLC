import { HelpCircle, ChevronRight, MessageCircle } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      q: "What lanes do you operate?",
      a: "We operate global trade lanes with corridor-specific playbooks. Core flows include Asia, Middle East, Europe, and Africa into Djibouti and Addis, plus GCC distribution. For each lane, we map required permits, customs process, and handover points before cargo moves so timelines are realistic and predictable.",
    },
    {
      q: "Can you handle single-window and customs?",
      a: "Yes. We manage end-to-end filing and clearance: HS code validation, declaration drafting, single-window submission, duty and tax calculation, inspection coordination, and release follow-up. When needed, we also align bonded warehousing and duty-free documentation so your shipment stays compliant from start to finish.",
    },
    {
      q: "What services can you bundle?",
      a: "We can combine customs clearing, freight forwarding, foreign purchase support, single-window registration, duty-free setup and renewals, warehousing, last-mile delivery, business and tax consulting, and role-based training. We design bundles based on your cargo type, risk profile, and timeline so one accountable team owns the outcome.",
    },
    {
      q: "Do you provide training?",
      a: "Yes. We provide practical, role-based training for logistics officers, finance teams, warehouse staff, and managers. Tracks include trade documentation, HS code accuracy, single-window workflows, logistics operations, customs and tax basics, leadership, HR systems, customer ethics, and Kaizen. Sessions are built around real operating documents, not only theory.",
    },
    {
      q: "How quickly can we get a quote?",
      a: "Most quotations are issued within one business day after we receive key details: origin, destination, commodity, Incoterms, cargo volume or weight, and target timeline. For complex or regulated cargo, we may first send a preliminary plan and then confirm final pricing after document checks.",
    },
    {
      q: "What do you need to start a shipment?",
      a: "Typical starter documents are commercial invoice, packing list, shipper and consignee details, HS code references, COO where applicable, and BL or AWB draft. If cargo needs permits or duty-free authorization, we prepare a checklist and close gaps before movement to reduce customs queries and storage risk.",
    },
    {
      q: "Can you support duty-free projects?",
      a: "Yes. We support the full duty-free lifecycle: eligibility review, exemption letter preparation, evidence packaging, submission, status follow-up, and renewal planning. We also keep records audit-ready so your project can sustain compliance during inspections and later reconciliations.",
    },
    {
      q: "How do you handle exceptions and delays?",
      a: "We use escalation playbooks for each corridor. That includes milestone tracking, early variance alerts, fast response to customs or single-window queries, and alternative actions such as bonded handling when available. You get clear status updates with next actions and ownership, not just delay notifications.",
    },
    {
      q: "Do you work with perishable or sensitive cargo?",
      a: "We handle standard cargo and selected sensitive cargo with strict lane-specific compliance. For hazardous, controlled, or temperature-sensitive shipments, we conduct a feasibility check first, confirm required handling conditions, and align carrier and regulatory requirements before booking.",
    },
    {
      q: "Can you operate with our teams on-site or virtually?",
      a: "Yes. We support on-site and virtual collaboration models. Depending on route and urgency, we can run operations and training in Addis, Djibouti, UAE, and origin hubs, while keeping remote visibility through structured updates and shared checklists.",
    },
    {
      q: "How do you calculate shipping cost?",
      a: "Costs are based on mode (sea, air, land), cargo type, chargeable weight or volume, origin and destination charges, documentation requirements, and customs exposure. We provide line-item pricing where possible so you can compare scenarios and choose between faster transit or lower landed cost.",
    },
    {
      q: "Can you help reduce customs penalties and rework?",
      a: "Yes. We reduce risk through pre-checks before filing: HS code alignment, document consistency, value validation, and permit readiness. This preventive review helps avoid rejections, repeated submissions, storage accumulation, and avoidable fines.",
    },
    {
      q: "Do you provide cargo tracking updates?",
      a: "Yes. We provide milestone-based updates from booking through arrival and clearance. Typical checkpoints include origin handover, vessel or flight departure, transshipment when relevant, destination arrival, customs status, and final delivery confirmation.",
    },
    {
      q: "What Incoterms do you support?",
      a: "We support common Incoterms such as EXW, FCA, FOB, CFR, CIF, DAP, and others based on your transaction structure. We also advise how each term affects risk transfer, documentation ownership, and cost responsibility so contracts are clear before shipment starts.",
    },
    {
      q: "Can you support supplier verification for foreign purchase?",
      a: "Yes. For foreign purchase arrangements, we can support supplier background checks, document consistency checks, sample coordination, and payment-term risk reviews. This helps reduce procurement risk before committing full order value.",
    },
    {
      q: "What happens after customs release?",
      a: "After release, we coordinate dispatch and handover to warehouse or site, confirm proof of delivery, and close documentation files. When needed, we also provide a short post-shipment review with improvement points for your next order cycle.",
    },
    {
      q: "Can you train our team after a shipment project?",
      a: "Absolutely. Many clients request a post-project training workshop so internal teams can retain lessons learned. We can run targeted sessions on documentation quality, single-window workflow, customs readiness, and process discipline based on your recent shipment experience.",
    },
    {
      q: "How do we start working with Optimum Logistics?",
      a: "Start by sharing your route, commodity, volume, target timeline, and current challenge. We then schedule a short assessment, provide a recommended service stack, and align an execution plan with roles, milestones, and required documents.",
    },
  ];

  return (
    <div className="space-y-10 pb-12">
      <section className="glass-panel p-7">
        <div className="flex items-center gap-3">
          <HelpCircle size={32} className="text-emerald-600" />
          <h1 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h1>
        </div>
        <p className="mt-4 text-sm text-slate-700">These answers are based on our daily operations across customs clearing, single-window filing, freight coordination, and team training. If your case is unique, email contact@optimumlogisticsplc.com or info@optimumlogisticsplc.com and we will provide a tailored response.</p>
        <div className="mt-8 divide-y divide-slate-200">
          {faqs.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-left text-base font-semibold text-slate-900 transition hover:text-emerald-700">
                <div className="flex items-center gap-3">
                  <MessageCircle size={18} className="text-slate-400 group-open:text-emerald-600" />
                  {f.q}
                </div>
                <ChevronRight size={18} className="ml-3 text-slate-400 transition-transform group-open:rotate-90" />
              </summary>
              <div className="pb-5 pl-8 text-sm leading-relaxed text-slate-700 border-l-2 border-emerald-100 ml-2">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
