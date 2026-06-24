import { CtaBand } from "@/components/cta-band"

export default function FinalCTA() {
  return (
    <CtaBand
      id="contact"
      heading={
        <>
          Ready to Build Your <span className="text-orange-500">Blueprint?</span>
        </>
      }
      subhead="Stop debating. Start building. Your competitors aren't waiting, and neither should you."
      primary={{
        label: "Take the 60-Second Snapshot",
        href: "/snapshot",
        icon: "zap",
      }}
      secondary={{
        label: "Book a Blueprint Session",
        href: "https://cal.com/ob1ai/diagnostic-discovery",
      }}
      badges={[
        {
          icon: "shield",
          text: "Enterprise Security via ",
          linkText: "Creddy",
          href: "https://www.creddy.me",
        },
        {
          icon: "messageSquare",
          text: "4 Conversations",
        },
        {
          icon: "award",
          text: "99% Satisfaction, 90 Day ROI MBG",
        },
      ]}
      showContact={false}
    />
  )
}
