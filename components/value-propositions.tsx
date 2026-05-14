"use client"

import { Microscope, Zap, Layers, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ValuePropositions() {
  const propositions = [
    {
      icon: Microscope,
      title: "Evidence-Based Diagnostic Engine",
      description:
        "No guesswork, no generic playbooks. Our Audity-powered assessment analyzes your unique operational DNA to identify exactly where AI will move the needle. Data-driven precision from day one.",
    },
    {
      icon: Zap,
      title: "Just In Time Solutions",
      description:
        "We don't sell you technology for technology's sake. Every recommendation is timed to your readiness, budget, and competitive window. Right solution. Right moment. Right ROI.",
    },
    {
      icon: Layers,
      title: "Full-Stack AI Platform",
      description:
        "From strategy to deployment to optimization. One partner, one methodology, complete accountability. No finger-pointing between vendors. We own the outcome.",
    },
  ]

  return (
    <section className="py-24" style={{ backgroundColor: "var(--color-slate-50)" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Why <span className="text-orange-500">Executives</span> Choose OB.1
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We don't experiment with your budget. Every implementation is backed by data, proven methodology, and
            measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {propositions.map((prop, idx) => (
            <Card key={idx} className="p-8 border-2 border-slate-200 hover:border-orange-500 transition-all">
              <prop.icon className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">{prop.title}</h3>
              <p className="text-slate-600 leading-relaxed">{prop.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA beneath cards */}
        <div className="text-center">
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
          <p className="mt-4 text-sm text-slate-500">
            Results delivered instantly. No credit card. No follow-up calls unless you want one.
          </p>
        </div>
      </div>
    </section>
  )
}
