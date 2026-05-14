import Navbar from "@/components/Navbar";
import TechnologySection from "@/components/TechnologySection";
import AfterCleanSection from "@/components/AfterCleanSection";
import NanocynSection from "@/components/NanocynSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import Footer from "@/components/Footer";
import { ArrowRight, Cpu, Shield, Leaf } from "lucide-react";

export default function Technology() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(200,168,78,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,78,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container max-w-6xl relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-[#C8A84E]" />
            <span className="text-[#C8A84E] text-xs font-mono tracking-[0.3em] uppercase">
              Our Technology
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-6">
            Intelligence-Driven{" "}
            <span className="text-[#C8A84E]">Cleaning Operations.</span>
          </h1>
          <p className="text-white/60 font-body text-lg sm:text-xl max-w-3xl leading-relaxed">
            From real-time dashboards to hygiene verification systems, EagleWing leverages
            proprietary technology to deliver measurable outcomes — not just routine cleaning.
          </p>
        </div>
      </section>

      {/* Tech Overview Cards */}
      <section className="py-16 border-t border-white/5">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Cpu,
                title: "EagleWing Command™",
                desc: "Live analytics, GPS tracking, and automated scheduling in one platform.",
                anchor: "#technology",
              },
              {
                icon: Shield,
                title: "After Clean™",
                desc: "Surface bacterial testing and hygiene audits that prove cleaning performance.",
                anchor: "#afterclean",
              },
              {
                icon: Leaf,
                title: "Sustainable Systems",
                desc: "Eco-certified products and water-efficient methods across all operations.",
                anchor: "#sustainability",
              },
            ].map((card, i) => (
              <a
                key={i}
                href={card.anchor}
                className="group p-8 border border-white/10 hover:border-[#C8A84E]/30 transition-all duration-300 block"
              >
                <card.icon
                  className="w-10 h-10 text-[#C8A84E] mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-xl text-white mb-3 group-hover:text-[#C8A84E] transition-colors">
                  {card.title}
                </h3>
                <p className="text-white/50 font-body text-sm leading-relaxed mb-4">
                  {card.desc}
                </p>
                <span className="text-[#C8A84E] text-xs font-mono tracking-wider uppercase flex items-center gap-2">
                  Learn More <ArrowRight className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* EagleWing Command */}
      <TechnologySection />

      {/* After Clean */}
      <div id="afterclean">
        <AfterCleanSection />
      </div>

      {/* Nanocyn — Disinfection Technology */}
      <NanocynSection />

      {/* Sustainability */}
      <div id="sustainability">
        <SustainabilitySection />
      </div>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[#C8A84E] to-[#E8D48B]">
        <div className="container max-w-4xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-black mb-4">
            See Our Technology in Action
          </h2>
          <p className="text-black/70 font-body text-lg mb-8">
            Book a demo of EagleWing Command™ and see how real-time data
            transforms facility management.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-bold text-sm tracking-wider uppercase font-body hover:bg-black/80 transition-colors"
          >
            Book a Demo
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
