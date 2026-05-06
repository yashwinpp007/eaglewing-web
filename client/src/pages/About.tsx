import Navbar from "@/components/Navbar";
import FounderSection from "@/components/FounderSection";
import PillarsSection from "@/components/PillarsSection";
import Footer from "@/components/Footer";
import { ArrowRight, Award, Users, Target, Shield } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        {/* Background pattern */}
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
              About EagleWing
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-6">
            Built on Systems.{" "}
            <span className="text-[#C8A84E]">Driven by Results.</span>
          </h1>
          <p className="text-white/60 font-body text-lg sm:text-xl max-w-3xl leading-relaxed">
            EagleWing Facility Services was founded on a simple belief: cleaning should be
            measurable, accountable, and intelligent. We replaced guesswork with data-driven
            systems that deliver consistent, high-quality outcomes across every facility we manage.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 sm:py-24 border-t border-white/5">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "Precision",
                desc: "Every task mapped, measured, and verified against defined standards.",
              },
              {
                icon: Shield,
                title: "Accountability",
                desc: "Real-time tracking and photo verification on every clean.",
              },
              {
                icon: Award,
                title: "Excellence",
                desc: "20+ years of industry experience delivering premium outcomes.",
              },
              {
                icon: Users,
                title: "People",
                desc: "100% trained, verified, and invested teams on every site.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="group p-6 border border-white/10 hover:border-[#C8A84E]/30 transition-all duration-300"
              >
                <value.icon
                  className="w-8 h-8 text-[#C8A84E] mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-lg text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-white/50 font-body text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <FounderSection />

      {/* Pillars Framework */}
      <PillarsSection />

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[#C8A84E] to-[#E8D48B]">
        <div className="container max-w-4xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-black mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-black/70 font-body text-lg mb-8">
            Book a free site audit and discover how EagleWing's intelligent systems
            can transform your facility management.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-bold text-sm tracking-wider uppercase font-body hover:bg-black/80 transition-colors"
          >
            Book a Site Audit
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
