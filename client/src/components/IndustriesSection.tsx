/*
 * DESIGN: Carbon Fiber Industrial Luxury
 * Industries Section: Grid of industry cards with hover effects and gold accents.
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Building2, Warehouse, GraduationCap, HeartPulse, Briefcase } from "lucide-react";

const industries = [
  {
    icon: Building2,
    name: "Councils & Government",
    description:
      "Public buildings, community centres, and government facilities requiring consistent, auditable cleaning standards.",
    tag: "PUBLIC SECTOR",
  },
  {
    icon: Warehouse,
    name: "Warehouses & Industrial",
    description:
      "Large-scale industrial cleaning for warehouses, distribution centres, and manufacturing facilities.",
    tag: "INDUSTRIAL",
  },
  {
    icon: GraduationCap,
    name: "Schools & Education",
    description:
      "Safe, thorough cleaning for schools, universities, and childcare centres with infection control protocols.",
    tag: "EDUCATION",
  },
  {
    icon: HeartPulse,
    name: "Medical & Healthcare",
    description:
      "Clinical-grade cleaning for medical centres, dental practices, and healthcare facilities with strict compliance.",
    tag: "HEALTHCARE",
  },
  {
    icon: Briefcase,
    name: "Offices & Commercial",
    description:
      "Premium cleaning for corporate offices, co-working spaces, and commercial properties that demand excellence.",
    tag: "CORPORATE",
  },
];

export default function IndustriesSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="industries"
      className="relative py-24 sm:py-32 bg-[#0A0A0A]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A84E]/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C8A84E]" />
            <span className="text-[#C8A84E] text-xs font-mono tracking-[0.3em] uppercase">
              Sectors
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C8A84E]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[0.95] mb-6">
            INDUSTRIES
            <span className="text-gold-gradient"> WE SERVE</span>
          </h2>
          <p className="text-lg text-white/50 font-body font-light leading-relaxed">
            Specialised cleaning solutions engineered for the unique demands of
            each sector.
          </p>
        </div>

        {/* Industry cards - top row of 3, bottom row of 2 centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.slice(0, 3).map((ind, i) => (
            <IndustryCard key={ind.name} ind={ind} i={i} isVisible={isVisible} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
          {industries.slice(3).map((ind, i) => (
            <IndustryCard key={ind.name} ind={ind} i={i + 3} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ ind, i, isVisible }: { ind: (typeof industries)[0]; i: number; isVisible: boolean }) {
  return (
    <div
      className={`group relative p-8 bg-[#111111] border border-white/5 hover:border-[#C8A84E]/30 transition-all duration-500 overflow-hidden ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${200 + i * 100}ms` }}
    >
      {/* Background number */}
      <div className="absolute -right-4 -top-4 font-display text-[120px] text-white/[0.02] leading-none select-none">
        0{i + 1}
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 flex items-center justify-center border border-[#C8A84E]/20 group-hover:border-[#C8A84E]/50 transition-colors duration-300">
            <ind.icon
              className="w-5 h-5 text-[#C8A84E]"
              strokeWidth={1.5}
            />
          </div>
          <span className="text-[10px] font-mono text-white/20 tracking-[0.2em]">
            {ind.tag}
          </span>
        </div>

        <h3 className="font-display text-xl text-white tracking-wide mb-3">
          {ind.name}
        </h3>
        <p className="text-sm text-white/40 font-body font-light leading-relaxed">
          {ind.description}
        </p>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#C8A84E] to-[#E8D48B] group-hover:w-full transition-all duration-700" />
    </div>
  );
}
