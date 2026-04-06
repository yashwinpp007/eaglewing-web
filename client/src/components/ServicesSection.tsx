import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Building2,
  Cpu,
  HardHat,
  ShieldPlus,
  Sparkles,
  Droplets,
  CircleDot,
  Waves,
  Bath,
} from "lucide-react";

const services = [
  { icon: Building2, label: "Contract\nCleaning" },
  { icon: Cpu, label: "AI Smart\nCleaning" },
  { icon: HardHat, label: "Builders\nCleaning" },
  { icon: ShieldPlus, label: "Infection Control\nCleaning" },
  { icon: Sparkles, label: "Window\nCleaning" },
  { icon: Droplets, label: "Steam\nCleaning" },
  { icon: CircleDot, label: "Floor\nPolishing" },
  { icon: Waves, label: "Pressure\nWashing" },
  { icon: Bath, label: "Washroom Hygiene\nService" },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#0D0D0D] overflow-hidden">
      {/* Background number */}
      <div className="absolute -left-8 top-8 font-display text-[200px] sm:text-[280px] text-white/[0.02] leading-none select-none pointer-events-none">
        02
      </div>
      <div className="absolute inset-0 carbon-pattern opacity-20" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-[#C8A84E] to-transparent" />
          <span className="text-[#C8A84E] text-xs font-mono tracking-[0.3em] uppercase">
            Our Services
          </span>
        </div>

        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[0.95] mb-6">
            What We <span className="text-gold-gradient">Do</span>
          </h2>
          <p className="text-lg text-white/50 font-body font-light leading-relaxed">
            Comprehensive facility cleaning solutions delivered with intelligent systems and measurable outcomes.
          </p>
        </div>

        {/* Service grid — circle icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-10 mb-12">
          {services.map((service, i) => (
            <div
              key={service.label}
              className={`flex flex-col items-center text-center group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center mb-4 group-hover:border-[#C8A84E]/50 group-hover:bg-[#C8A84E]/5 transition-all duration-500">
                <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white/40 group-hover:text-[#C8A84E] transition-colors duration-500" strokeWidth={1.2} />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-white/70 font-body whitespace-pre-line leading-tight">
                {service.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 text-sm font-bold tracking-wider uppercase font-body text-[#C8A84E] border border-[#C8A84E]/40 hover:bg-[#C8A84E]/10 transition-all duration-300"
          >
            Enquire About Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
