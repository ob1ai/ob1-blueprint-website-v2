import HeroSection from "@/components/hero-section"
import BlueprintMethodology from "@/components/blueprint-methodology"
import ValuePropositions from "@/components/value-propositions"
import GovernanceAsAService from "@/components/governance-as-a-service"
import ExecutiveFAQ from "@/components/executive-faq"
import FinalCTA from "@/components/final-cta"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ValuePropositions />
      <GovernanceAsAService />
      <BlueprintMethodology />
      <ExecutiveFAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
