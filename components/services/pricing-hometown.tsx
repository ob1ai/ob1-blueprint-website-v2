"use client"

import { MapPin, ShieldCheck } from "lucide-react"

const stats = [
  { value: "6.2x", label: "Year-1 ROI", accent: true },
  { value: "1.9 mo", label: "Payback period", accent: false },
  { value: "$487K", label: "Projected annual value", accent: false },
  { value: "87%", label: "Audit confidence", accent: false },
]

const rungs = [
  {
    phase: "Step 01",
    title: "The Diagnostic",
    promise: "Find the return",
    body: "A readiness diagnostic across six operational dimensions that maps where AI creates measurable value in your business, and where it creates risk.",
    items: [
      "AI Readiness Score with peer benchmark",
      "Quantified opportunity map with ROI projections",
      "Governance gap report your board can read",
    ],
    anchor: "Entry engagements from $500. A fraction of the $8K-$25K typical assessment.",
  },
  {
    phase: "Step 02",
    title: "The Blueprint",
    promise: "Prove the return",
    body: "Our signature deliverable: a board-ready construction document with the full ROI justification model, dependency mapping, and prioritized roadmap.",
    items: [
      "ROI model tied to each initiative",
      "Implementation roadmap and resource plan",
      "Vendor-neutral technology selection",
    ],
    anchor: "Scoped to the value the Diagnostic surfaced. You see the ROI case before you commit.",
  },
  {
    phase: "Step 03",
    title: "The Stewardship",
    promise: "Protect the return",
    body: "Governance-as-a-Service: a continuous control layer that keeps the return compounding. Policies, monitoring, vendor-risk continuity, an auditable AI footprint.",
    items: [
      "24-month governance subscription",
      "Compliance alignment: EU AI Act, ISO 42001, NIST AI RMF",
      "Board-citable quarterly reporting",
    ],
    anchor: "Subscription pricing scoped to your size and exposure. Not re-scoped engagements every quarter.",
  },
]

export default function PricingHometown() {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-orange-500" />
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
              Investment &amp; Return
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Priced against the <span className="text-orange-500">return</span>, not the hours.
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mb-12">
            Hourly consulting rewards longer engagements, not better outcomes. We
            price the other way around: every phase is gated by the ROI case the
            phase before it proved. If the numbers do not justify the next step,
            we tell you to stop. That discipline is the product.
          </p>

          {/* Proof band */}
          <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-8 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    className={`font-mono text-3xl md:text-4xl font-bold ${
                      s.accent ? "text-orange-500" : "text-white"
                    }`}
                  >
                    {s.value}
                  </div>
                  <div className="mt-2 text-xs font-mono uppercase tracking-widest text-slate-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 pt-5 border-t border-slate-800 text-sm text-slate-500 leading-relaxed">
              Measured results from the 2026 manufacturing engagement profiled
              above, reported exactly as audited. One named engagement, real
              numbers. Not composite averages.
            </p>
          </div>

          {/* Value ladder */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {rungs.map((r) => (
              <article
                key={r.title}
                className="flex flex-col rounded-lg border border-slate-800 border-t-2 border-t-orange-500 bg-slate-900/60 p-6"
              >
                <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
                  {r.phase}
                </span>
                <h3 className="text-xl font-bold text-white mt-2">{r.title}</h3>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 mt-1 mb-4">
                  {r.promise}
                </span>
                <p className="text-sm text-slate-400 leading-relaxed">{r.body}</p>
                <ul className="mt-4 space-y-2">
                  {r.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-orange-500"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-5 text-sm text-slate-500 leading-relaxed">
                  {r.anchor}
                </p>
              </article>
            ))}
          </div>

          {/* The gate */}
          <div className="rounded-lg border-l-2 border-orange-500 bg-slate-900/60 px-6 py-5 mb-12">
            <p className="text-base text-slate-300 leading-relaxed">
              The gate matters more than the ladder:{" "}
              <span className="text-orange-400 font-medium">
                if the Diagnostic cannot find a return, the engagement stops there.
              </span>{" "}
              You spend hundreds to find out whether it is worth spending more.
              Your board will recognize the discipline.
            </p>
          </div>

          {/* Assurances */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="h-5 w-5 text-orange-500" />
                <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
                  Risk Reversal
                </span>
              </div>
              <p className="text-xl text-white font-semibold mb-4">
                90-day money-back guarantee on Blueprint deliverables.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                If the plan does not hold up to scrutiny, you do not pay for it.
                Rules before tools.
              </p>
            </div>

            <div className="border-l-0 md:border-l-2 md:border-slate-800 md:pl-12">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
                  Northeast Ohio
                </span>
              </div>
              <p className="text-xl text-white font-semibold mb-4">
                We built OB.1 to serve the businesses that built this region.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                If you{"'"}re operating in Northeast Ohio, ask about our{" "}
                <span className="text-orange-400 font-medium">
                  Hometown Builder rate
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
