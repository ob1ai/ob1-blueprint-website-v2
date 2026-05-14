"use client"

import Image from "next/image"
import { Quote } from "lucide-react"

export default function FounderStory() {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            {/* Photo */}
            <div className="relative md:col-span-4">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden border-2 border-slate-800">
                <Image
                  src="/chris-mccarthy-profile.jpg"
                  alt="Chris McCarthy — Founder & Solutions Architect, OB.1 AI Solutions"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Corner accent */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-orange-500 opacity-30" />
            </div>

            {/* Bio */}
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Chris McCarthy
              </h2>
              <p className="text-lg text-orange-400 font-medium mb-6">
                Founder & Solutions Architect
              </p>

              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Before OB.1, Chris spent over a decade in operations
                  management — running teams, optimizing processes, and learning
                  firsthand what happens when technology gets deployed without a
                  plan.
                </p>
                <p>
                  That experience shaped a conviction:{" "}
                  <span className="text-white font-semibold">
                    AI transformation fails when organizations skip the
                    diagnostic work.
                  </span>{" "}
                  Every tool vendor sells a solution. Nobody sells the blueprint
                  that tells you which solution to buy — and why.
                </p>
                <p>
                  OB.1 exists to fill that gap. We design the plan. Partners
                  execute. No conflicts of interest. No vendor lock-in. Just
                  honest architecture for businesses that build things.
                </p>
              </div>

              {/* Quote callout */}
              <div className="mt-8 pl-6 border-l-2 border-orange-500/40">
                <Quote className="h-5 w-5 text-orange-500/60 mb-2" />
                <p className="text-base text-white italic font-medium">
                  &ldquo;Rules before tools. Always.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Chloe Shepherd — Principal */}
          <div className="mt-24 md:mt-32">
            <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
              {/* Photo (right on desktop, top on mobile) */}
              <div className="relative md:col-span-4 md:order-2">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden border-2 border-slate-800">
                  <Image
                    src="/chloe-shepherd-profile.jpg"
                    alt="Chloe Shepherd — Principal, Creative & Strategy, OB.1 AI Solutions"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Corner accent */}
                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-orange-500 opacity-30" />
              </div>

              {/* Bio (left on desktop, below image on mobile) */}
              <div className="md:col-span-8 md:order-1 md:text-right">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Chloe Shepherd
                </h2>
                <p className="text-lg text-orange-400 font-medium mb-6">
                  Principal, Creative & Strategy
                </p>

                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Chloe brings over a decade of solutions integration,
                    creative direction, and UI/UX design experience to OB.1 —
                    with a focus on meeting clients where they are, not where
                    flashy new technology says they should be.
                  </p>
                  <p>
                    Before joining OB.1, she built and scaled brands across
                    e-commerce, healthcare, manufacturing, and social —
                    leading creative and operational strategy for small and
                    mid-sized businesses. That range taught her one thing:{" "}
                    <span className="text-white font-semibold">
                      the gap between a good strategy and an effective solution
                      is almost always a clarity problem.
                    </span>{" "}
                    At OB.1, Chloe bridges that gap.
                  </p>
                </div>

                {/* Quote callout */}
                <div className="mt-8 pl-6 border-l-2 border-orange-500/40 md:pl-0 md:pr-6 md:border-l-0 md:border-r-2 md:flex md:flex-row-reverse md:items-start md:gap-3">
                  <Quote className="h-5 w-5 text-orange-500/60 mb-2 md:mb-0 md:shrink-0" />
                  <p className="text-base text-white italic font-medium">
                    &ldquo;The best solution is the one the client can actually
                    use — and didn&apos;t see coming.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
