import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GovernanceAsAService() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            <span className="text-orange-500">Governance.</span> As a{" "}Service.
          </h2>
          <p className="text-xl italic text-slate-600 max-w-5xl mx-auto">
            The Control Plane Every AI Deployment{" "}Needs.
          </p>
          <p className="text-xl text-slate-600 max-w-5xl mx-auto mt-4">
            Boards push for velocity. Audit teams push for accountability.
            Nobody runs the seam between them. OB.1 does.
            Governance-as-a-Service (GaaS) is not a report. It is a continuous
            control layer that runs before your first deployment, through every
            sprint, and long after the engagement ends. Your board can cite it.
            Your legal team can defend{" "}it.
          </p>

          <div className="mt-12">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white text-xl px-12 py-8"
              asChild
            >
              <a href="https://score.ob1ai.co/survey/16b293db06d1" target="_blank" rel="noopener noreferrer">
                Start Your Blueprint Assessment
                <ArrowRight className="ml-2 h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
