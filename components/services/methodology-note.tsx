"use client"

import { FileText, ArrowUpRight } from "lucide-react"

export default function MethodologyNote() {
  return (
    <section className="py-16 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-lg border-l-2 border-orange-500 bg-slate-900/60 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-5 w-5 text-orange-500" />
              <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
                Methodology Note
              </span>
            </div>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-4">
              Every phase above runs on the same audit pipeline:{" "}
              <a
                href="/governance"
                className="text-orange-400 font-medium hover:text-orange-300 transition-colors"
              >
                ten governance checkpoints
              </a>{" "}
              enforced inside every diagnostic, from the 82-point readiness
              baseline through confidence-scored recommendations, contradictions
              analysis, ROI benchmarks, and framework-aligned outputs. Rules
              before tools is not a slogan. It is enforced in the pipeline.
            </p>
            <a
              href="https://ob1-deck.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-orange-400 hover:text-orange-300 transition-colors"
            >
              View the full capabilities overview and checkpoint register
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
