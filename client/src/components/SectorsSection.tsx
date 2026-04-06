import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Warehouse,
  Train,
  Hotel,
  Plane,
  MapPin,
} from "lucide-react";

const sectors = [
  { icon: Building2, label: "Corporate\nOffices" },
  { icon: GraduationCap, label: "Education" },
  { icon: HeartPulse, label: "Healthcare\n& Medical" },
  { icon: Landmark, label: "Government\n& Civic" },
  { icon: ShoppingBag, label: "Retail &\nShopping" },
  { icon: Warehouse, label: "Industrial\n& Logistics" },
  { icon: Train, label: "Transport\n& Transit" },
  { icon: Hotel, label: "Hospitality\n& Hotels" },
  { icon: Plane, label: "Airports &\nTerminals" },
];

export default function SectorsSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="sectors" className="relative py-24 sm:py-32 bg-[#F5F3EE] overflow-hidden">
      {/* Background number */}
      <div className="absolute -left-8 top-8 font-display text-[200px] sm:text-[280px] text-black/[0.03] leading-none select-none pointer-events-none">
        03
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-[#C8A84E] to-transparent" />
          <span className="text-[#C8A84E] text-xs font-mono tracking-[0.3em] uppercase">
            Industries Served
          </span>
        </div>

        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1a1a1a] leading-[0.95] mb-6">
            Where We <span className="text-gold-gradient">Clean</span>
          </h2>
          <p className="text-lg text-[#555] font-body font-light leading-relaxed">
            EagleWing delivers intelligent cleaning outcomes across a wide range of industries and environments throughout Melbourne and Sydney.
          </p>
        </div>

        {/* Sectors grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-10 mb-12">
          {sectors.map((sector, i) => (
            <div
              key={sector.label}
              className={`flex flex-col items-center text-center group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#1a1a1a] border border-[#1a1a1a] flex items-center justify-center mb-4 group-hover:border-[#C8A84E]/50 transition-all duration-500">
                <sector.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white/60 group-hover:text-[#C8A84E] transition-colors duration-500" strokeWidth={1.2} />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#333] font-body whitespace-pre-line leading-tight">
                {sector.label}
              </span>
            </div>
          ))}
        </div>

        {/* Service areas banner */}
        <div
          className={`bg-[#1a1a1a] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#C8A84E]" />
            <div>
              <span className="text-[#C8A84E] text-xs font-mono tracking-[0.2em] uppercase block mb-1">
                Service Areas
              </span>
              <span className="text-white font-body text-base">
                Melbourne & Sydney — and surrounding suburbs
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 text-sm font-bold tracking-wider uppercase font-body text-[#C8A84E] border border-[#C8A84E]/40 hover:bg-[#C8A84E]/10 transition-all duration-300 whitespace-nowrap"
          >
            Check Your Area
          </button>
        </div>
      </div>
    </section>
  );
}
