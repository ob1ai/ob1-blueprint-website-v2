import { Gauge, Map, Rocket } from "lucide-react"

const steps = [
  {
    icon: Gauge,
    label: "Assess",
    title: "A clear readiness score",
    body: "The audit scored the business at 53/100 on AI readiness: core systems deployed, almost none operationalized. Spreadsheets ran the real operations.",
  },
  {
    icon: Map,
    label: "Map",
    title: "21 opportunities, ranked",
    body: "We mapped 21 opportunities by impact and effort, then isolated 9 quick wins deployable in 1 to 4 weeks on tooling the business already owned.",
  },
  {
    icon: Rocket,
    label: "Return",
    title: "Capacity, not new spend",
    body: "Those wins targeted 40 to 60 percent of IT capacity lost to firefighting and a 5 to 8 day financial close, before a single new tool was bought.",
  },
]

const stats = [
  { value: "53/100", label: "Starting AI readiness" },
  { value: "21", label: "Opportunities mapped" },
  { value: "9", label: "Quick wins in 1-4 weeks" },
  { value: "$0", label: "New software required" },
]

export default function BlueprintInAction() {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-orange-500" />
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
              The Blueprint in Action
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            What governance returns,{" "}
            <span className="text-orange-500">inside a recent audit.</span>
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mb-14">
            Here is what an Operational Blueprint looks like in practice. A
            recent manufacturing audit took a business from no shared picture of
            its own readiness to a ranked, board-ready plan, with the governance
            layer that keeps adoption fast and disciplined at the same time.
          </p>

          {/* Method steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step) => (
              <div
                key={step.label}
                className="border border-slate-800 rounded-lg p-6 bg-slate-900/40"
              >
                <step.icon className="h-7 w-7 text-orange-500 mb-4" />
                <span className="block text-xs font-mono text-orange-500 uppercase tracking-widest mb-2">
                  {step.label}
                </span>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          {/* Stat strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-600 mt-8">
            Figures drawn from a recent OB.1 manufacturing audit. Client details
            withheld.
          </p>
        </div>
      </div>
    </section>
  )
}
