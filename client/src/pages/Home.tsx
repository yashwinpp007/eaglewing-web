/*
 * DESIGN: Carbon Fiber Industrial Luxury
 * Home Page: Assembles all sections for the EagleWing Property Services website.
 * Dark matte black canvas, gold gradient accents, diagonal section transitions,
 * Bebas Neue display font, Outfit body font, Space Grotesk mono accents.
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ServicesSection from "@/components/ServicesSection";
import PillarsSection from "@/components/PillarsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import IndustriesSection from "@/components/IndustriesSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <PillarsSection />
      <HowItWorksSection />
      <IndustriesSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
}
