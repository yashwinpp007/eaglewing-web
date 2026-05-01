import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FounderSection from "@/components/FounderSection";
import ServicesSection from "@/components/ServicesSection";
import SectorsSection from "@/components/SectorsSection";
import PillarsSection from "@/components/PillarsSection";
import AfterCleanSection from "@/components/AfterCleanSection";
import TechnologySection from "@/components/TechnologySection";
import SustainabilitySection from "@/components/SustainabilitySection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FounderSection />
      <ServicesSection />
      <SectorsSection />
      <PillarsSection />
      <AfterCleanSection />
      <TechnologySection />
      <SustainabilitySection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
