import type { ComponentType, ReactNode } from "react"
import {
  ArrowRight,
  Zap,
  FileCheck,
  Shield,
  MessageSquare,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type IconType = ComponentType<{ className?: string }>

/**
 * Icon registry. Props crossing the Server -> Client Component boundary must be
 * serializable, so callers pass an icon name (string) rather than a component.
 */
export type CtaIconName = "zap" | "fileCheck" | "shield" | "messageSquare" | "award"

const ICONS: Record<CtaIconName, IconType> = {
  zap: Zap,
  fileCheck: FileCheck,
  shield: Shield,
  messageSquare: MessageSquare,
  award: Award,
}

interface CtaLink {
  label: string
  href: string
  /** Optional leading icon name for the button label. */
  icon?: CtaIconName
}

interface CtaBadge {
  icon: CtaIconName
  text: string
  /** Optional link text rendered after the badge text. */
  linkText?: string
  /** Optional href the badge (or its linkText) points to. */
  href?: string
}

interface CtaBandProps {
  /** Mono uppercase eyebrow above the heading. */
  eyebrow?: string
  /** Headline. Use a ReactNode to embed orange-500 span highlights. */
  heading: ReactNode
  /** Supporting line beneath the heading. */
  subhead: string
  /** Primary (orange solid) call to action. Rendered first. */
  primary: CtaLink
  /** Secondary (outline) call to action. Rendered second. */
  secondary: CtaLink
  /** 'slate' = cool slate/blue treatment (default). 'stone' = warm workshop treatment. */
  tone?: "slate" | "stone"
  /** Optional trust-stat strip (home page). */
  badges?: CtaBadge[]
  /** Toggle the standardized contact line. Default true. */
  showContact?: boolean
  contactEmail?: string
  contactPhone?: string
  /** Optional id for in-page anchoring (e.g. "contact"). */
  id?: string
}

const DEFAULT_EMAIL = "admin@ob1ai.co"
const DEFAULT_PHONE = "(234) 602-0500"

function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href)
}

function CtaButtonContent({
  iconName,
  label,
}: {
  iconName?: CtaIconName
  label: string
}) {
  const Icon = iconName ? ICONS[iconName] : null
  return (
    <>
      {Icon ? <Icon className="mr-2 h-5 w-5" /> : null}
      {label}
      {!Icon ? <ArrowRight className="ml-2 h-5 w-5" /> : null}
    </>
  )
}

export function CtaBand({
  eyebrow = "Get Started",
  heading,
  subhead,
  primary,
  secondary,
  tone = "slate",
  badges,
  showContact = true,
  contactEmail = DEFAULT_EMAIL,
  contactPhone = DEFAULT_PHONE,
  id,
}: CtaBandProps) {
  const isStone = tone === "stone"

  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-24 border-t",
        isStone
          ? "bg-stone-950 border-stone-800"
          : "bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border-slate-800"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className={cn("h-px w-12", isStone ? "bg-stone-700" : "bg-orange-500")} />
            {isStone ? (
              <div className="w-2 h-2 bg-orange-500 rotate-45" />
            ) : (
              <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
                {eyebrow}
              </span>
            )}
            <div className={cn("h-px w-12", isStone ? "bg-stone-700" : "bg-orange-500")} />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            {heading}
          </h2>
          <p
            className={cn(
              "text-xl mb-12 max-w-2xl mx-auto leading-relaxed",
              isStone ? "text-stone-400" : "text-slate-300"
            )}
          >
            {subhead}
          </p>

          {/* Dual CTA: primary (orange solid) first, secondary (outline) second */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6"
              asChild
            >
              <a
                href={primary.href}
                {...(isExternal(primary.href)
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <CtaButtonContent iconName={primary.icon} label={primary.label} />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className={cn(
                "text-lg px-8 py-6 bg-transparent border-2",
                isStone
                  ? "border-stone-700 text-stone-300 hover:bg-stone-900 hover:text-white hover:border-stone-600"
                  : "border-slate-600 text-slate-300 hover:border-orange-500 hover:text-orange-500"
              )}
              asChild
            >
              <a
                href={secondary.href}
                {...(isExternal(secondary.href)
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <CtaButtonContent iconName={secondary.icon} label={secondary.label} />
              </a>
            </Button>
          </div>

          {/* Trust-stat strip (optional) */}
          {badges && badges.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-8 mb-8 text-slate-300">
              {badges.map((badge, idx) => {
                const BadgeIcon = ICONS[badge.icon]
                return (
                  <div key={idx} className="flex items-center gap-2">
                    <BadgeIcon className="h-5 w-5 text-orange-500" />
                    <span className="text-sm font-medium">
                      {badge.text}
                      {badge.linkText && badge.href ? (
                        <a
                          href={badge.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-400 hover:text-orange-300 underline ml-1"
                        >
                          {badge.linkText}
                        </a>
                      ) : null}
                    </span>
                  </div>
                )
              })}
            </div>
          ) : null}

          {/* Standardized contact line */}
          {showContact ? (
            <p
              className={cn(
                "text-sm font-mono",
                isStone ? "text-stone-600" : "text-slate-500"
              )}
            >
              <a
                href={`mailto:${contactEmail}`}
                className="hover:text-orange-500 transition-colors"
              >
                {contactEmail}
              </a>
              {"  |  "}
              <a
                href={`tel:+1${contactPhone.replace(/\D/g, "")}`}
                className="hover:text-orange-500 transition-colors"
              >
                {contactPhone}
              </a>
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default CtaBand
