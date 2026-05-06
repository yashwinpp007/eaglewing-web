import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SectorsSection from "@/components/SectorsSection";
import AboutSection from "@/components/AboutSection";
import TechnologySection from "@/components/TechnologySection";
import ProcessSection from "@/components/ProcessSection";
import AfterCleanSection from "@/components/AfterCleanSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <SectorsSection />
      <AboutSection />
      <TechnologySection />
      <ProcessSection />
      <AfterCleanSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
