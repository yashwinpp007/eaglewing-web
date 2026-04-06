/*
 * DESIGN: Carbon Fiber Industrial Luxury
 * Services Section: Grid of commercial cleaning services offered.
 * Based on competitor research (Silvans, GJK, Hygex).
 * Gold accent icons, dark cards, hover reveal.
 */
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Building2,
  Warehouse,
  GraduationCap,
  HeartPulse,
  Landmark,
  Droplets,
  SprayCan,
  Sparkles,
  ShowerHead,
  Wind,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    name: "Commercial Office Cleaning",
    tag: "OFFICES",
    description:
      "Daily, weekly, and periodic cleaning for corporate offices, co-working spaces, and commercial buildings. We keep your workplace spotless, hygienic, and presentable — so your team can focus on what matters.",
    features: ["Daily & periodic cleaning", "Desk & workstation sanitisation", "Kitchen & breakroom care", "Reception & common areas"],
  },
  {
    icon: Warehouse,
    name: "Industrial & Warehouse Cleaning",
    tag: "INDUSTRIAL",
    description:
      "Heavy-duty cleaning for warehouses, factories, distribution centres, and manufacturing facilities. We handle large-scale environments with industrial-grade equipment and safety-compliant processes.",
    features: ["Factory floor scrubbing", "High-bay & racking cleaning", "Loading dock maintenance", "Dust & debris extraction"],
  },
  {
    icon: GraduationCap,
    name: "School & Childcare Cleaning",
    tag: "EDUCATION",
    description:
      "Safe, thorough cleaning for schools, universities, and childcare centres. Our infection control protocols and child-safe products ensure healthy learning environments for students and staff.",
    features: ["Classroom deep cleaning", "Playground & outdoor areas", "Infection control protocols", "Child-safe products only"],
  },
  {
    icon: HeartPulse,
    name: "Medical & Healthcare Cleaning",
    tag: "HEALTHCARE",
    description:
      "Clinical-grade cleaning for medical centres, dental practices, aged care facilities, and hospitals. We follow strict compliance standards and use hospital-grade disinfectants to protect patients and staff.",
    features: ["Hospital-grade disinfection", "Clinical waste management", "Compliance-driven protocols", "Aged care & dental facilities"],
  },
  {
    icon: Landmark,
    name: "Government & Council Cleaning",
    tag: "GOVERNMENT",
    description:
      "Reliable, auditable cleaning for government buildings, council offices, community centres, and public facilities. We deliver consistent standards with full reporting and compliance documentation.",
    features: ["Public building maintenance", "Community centre care", "Audit-ready reporting", "Consistent quality standards"],
  },
  {
    icon: Droplets,
    name: "Carpet Steam Cleaning",
    tag: "FLOOR CARE",
    description:
      "Professional carpet steam cleaning and hard floor restoration for commercial properties. We remove deep-set stains, allergens, and bacteria to extend the life of your flooring and improve indoor air quality.",
    features: ["Hot water extraction", "Stain & odour removal", "Hard floor stripping & sealing", "Tile & grout restoration"],
  },
  {
    icon: SprayCan,
    name: "Pressure Washing",
    tag: "EXTERIOR",
    description:
      "High-pressure cleaning for building exteriors, car parks, driveways, pathways, and outdoor areas. We restore surfaces to like-new condition and remove graffiti, grime, mould, and built-up dirt.",
    features: ["Building facade cleaning", "Car park & driveway wash", "Graffiti removal", "Mould & algae treatment"],
  },
  {
    icon: Sparkles,
    name: "Deep Cleaning & Sanitisation",
    tag: "SPECIALIST",
    description:
      "Comprehensive deep cleaning and sanitisation services for any commercial facility. Ideal for post-construction, end-of-lease, COVID decontamination, or periodic intensive cleans that go beyond the surface.",
    features: ["Post-construction clean", "End-of-lease restoration", "COVID decontamination", "Periodic intensive cleans"],
  },
  {
    icon: ShowerHead,
    name: "Washroom & Hygiene Services",
    tag: "HYGIENE",
    description:
      "Complete washroom servicing including consumable supply, sanitary disposal, air freshening, and hygiene product management. We ensure your restrooms always meet the highest standards of cleanliness.",
    features: ["Consumable supply & refill", "Sanitary disposal units", "Air freshening systems", "Hygiene audits & reporting"],
  },
  {
    icon: Wind,
    name: "Window Cleaning",
    tag: "SPECIALIST",
    description:
      "Internal and external window cleaning for commercial buildings of all sizes. From ground-level shopfronts to multi-storey office towers, we deliver streak-free, crystal-clear results every time.",
    features: ["Internal & external glass", "Multi-storey capability", "Shopfront & retail", "Frame & sill detailing"],
  },
];

function ServiceCard({
  service,
  index,
  isVisible,
  isExpanded,
  onToggle,
}: {
  service: (typeof services)[0];
  index: number;
  isVisible: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`group relative bg-[#111111] border border-white/5 hover:border-[#C8A84E]/30 transition-all duration-500 overflow-hidden cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${isExpanded ? "border-[#C8A84E]/20" : ""}`}
      style={{ transitionDelay: `${100 + index * 60}ms` }}
      onClick={onToggle}
    >
      {/* Background number */}
      <div className="absolute -right-2 -top-2 font-display text-[100px] text-white/[0.02] leading-none select-none pointer-events-none">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative z-10 p-6 sm:p-8">
        <div className="flex items-center justify-between mb-5">
          <div className="w-11 h-11 flex items-center justify-center border border-[#C8A84E]/20 group-hover:border-[#C8A84E]/50 transition-colors duration-300">
            <service.icon className="w-5 h-5 text-[#C8A84E]" strokeWidth={1.5} />
          </div>
          <span className="text-[10px] font-mono text-white/20 tracking-[0.2em]">
            {service.tag}
          </span>
        </div>

        <h3 className="font-display text-lg sm:text-xl text-white tracking-wide mb-3">
          {service.name}
        </h3>

        <p className="text-sm text-white/40 font-body font-light leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Expandable features */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/5 pt-4 space-y-2.5">
            {service.features.map((f) => (
              <div key={f} className="flex items-center gap-2.5">
                <div className="w-1 h-1 bg-[#C8A84E] rotate-45 shrink-0" />
                <span className="text-xs text-white/50 font-body">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expand indicator */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-[10px] font-mono text-[#C8A84E]/50 tracking-wider">
            {isExpanded ? "COLLAPSE" : "VIEW DETAILS"}
          </span>
          <div
            className={`w-3 h-3 border-r border-b border-[#C8A84E]/40 transition-transform duration-300 ${
              isExpanded ? "-rotate-[135deg]" : "rotate-45"
            }`}
          />
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#C8A84E] to-[#E8D48B] group-hover:w-full transition-all duration-700" />
    </div>
  );
}

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#0D0D0D]">
      <div className="absolute inset-0 carbon-pattern opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A84E]/20 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C8A84E]" />
            <span className="text-[#C8A84E] text-xs font-mono tracking-[0.3em] uppercase">
              What We Do
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C8A84E]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[0.95] mb-6">
            OUR
            <span className="text-gold-gradient"> SERVICES</span>
          </h2>
          <p className="text-lg text-white/50 font-body font-light leading-relaxed">
            Comprehensive commercial cleaning and facility solutions tailored to
            your industry. From daily office cleaning to specialist deep cleans,
            we deliver consistent, professional results every time.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(0, 9).map((service, i) => (
            <ServiceCard
              key={service.name}
              service={service}
              index={i}
              isVisible={isVisible}
              isExpanded={expandedIndex === i}
              onToggle={() =>
                setExpandedIndex(expandedIndex === i ? null : i)
              }
            />
          ))}
        </div>

        {/* Last card centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          <div className="sm:col-start-2">
            <ServiceCard
              service={services[9]}
              index={9}
              isVisible={isVisible}
              isExpanded={expandedIndex === 9}
              onToggle={() =>
                setExpandedIndex(expandedIndex === 9 ? null : 9)
              }
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-white/30 font-body mb-4">
            Don't see what you need? We offer custom facility solutions.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-gold px-8 py-3 text-sm font-bold tracking-wider uppercase font-body"
          >
            Request a Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}
