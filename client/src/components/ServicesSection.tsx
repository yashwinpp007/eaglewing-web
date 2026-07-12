import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
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
  Heart,
  X,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const SERVICE_IMAGES = {
  contract: "/images/services/contract-cleaning.webp",
  ai: "/images/services/ai-smart-cleaning.webp",
  builders: "/images/services/builders-cleaning.webp",
  infection: "/images/services/infection-control.webp",
  window: "/images/services/window-cleaning.webp",
  steam: "/images/services/steam-cleaning.webp",
  floor: "/images/services/floor-polishing.webp",
  pressure: "/images/services/pressure-washing.webp",
  washroom: "/images/services/washroom-hygiene.webp",
  healthcare: "/images/services/healthcare.webp",
};

interface ServiceDetail {
  icon: typeof Building2;
  label: string;
  title: string;
  image: string;
  description: string;
  features: string[];
  ideal: string;
}

const services: ServiceDetail[] = [
  {
    icon: Building2,
    label: "Contract\nCleaning",
    title: "Contract Cleaning",
    image: SERVICE_IMAGES.contract,
    description: "Our flagship contract cleaning service delivers consistent, high-quality daily and periodic cleaning for commercial facilities. EagleWing assigns dedicated teams to your site, managed through our SMART System\u2122 for real-time tracking, quality verification, and continuous improvement. Every clean is logged, verified, and optimised.",
    features: [
      "Dedicated site teams with consistent personnel",
      "Daily, nightly, and periodic cleaning schedules",
      "Real-time GPS tracking and task verification",
      "Custom cleaning plans tailored to your facility",
      "Monthly performance reports and KPI dashboards",
      "24/7 support with rapid response capability",
    ],
    ideal: "Corporate offices, commercial buildings, retail centres, and any facility requiring ongoing daily cleaning.",
  },
  {
    icon: Cpu,
    label: "AI Smart\nCleaning",
    title: "AI Smart Cleaning",
    image: SERVICE_IMAGES.ai,
    description: "EagleWing's AI Smart Cleaning leverages artificial intelligence, IoT sensors, and predictive analytics to revolutionise how facilities are maintained. Our system learns your building's usage patterns, predicts high-traffic periods, and dynamically adjusts cleaning schedules for maximum efficiency and hygiene outcomes.",
    features: [
      "AI-powered predictive scheduling based on foot traffic",
      "IoT sensor integration for real-time occupancy data",
      "Automated resource allocation and route optimisation",
      "Machine learning that improves outcomes over time",
      "Live dashboards with cleaning completion analytics",
      "Reduced costs through intelligent resource deployment",
    ],
    ideal: "Large corporate headquarters, smart buildings, tech campuses, and facilities seeking data-driven cleaning solutions.",
  },
  {
    icon: HardHat,
    label: "Builders\nCleaning",
    title: "Builders Cleaning",
    image: SERVICE_IMAGES.builders,
    description: "Our specialist builders cleaning service transforms construction sites into move-in ready spaces. We handle all stages of post-construction cleaning \u2014 from rough cleans removing heavy debris, to detailed final cleans that prepare spaces for handover. Our teams are trained in construction site safety and use industrial-grade equipment.",
    features: [
      "Stage 1 rough clean: debris removal and heavy dust",
      "Stage 2 detail clean: surfaces, fixtures, and fittings",
      "Stage 3 final sparkle clean for client handover",
      "Window track and frame cleaning post-construction",
      "Industrial vacuum systems for fine dust extraction",
      "Compliance with all construction site WHS requirements",
    ],
    ideal: "Construction companies, developers, project managers, and builders requiring professional post-construction cleaning.",
  },
  {
    icon: ShieldPlus,
    label: "Infection Control\nCleaning",
    title: "Infection Control Cleaning",
    image: SERVICE_IMAGES.infection,
    description: "Our infection control cleaning service uses hospital-grade disinfection protocols, electrostatic spraying technology, and UV-C sanitisation to eliminate pathogens and create safe environments. We follow TGA-approved processes and maintain full compliance with Australian infection control standards.",
    features: [
      "Electrostatic spraying for 360-degree surface coverage",
      "UV-C light sanitisation for high-touch areas",
      "TGA-approved hospital-grade disinfectants",
      "ATP testing to verify sanitisation effectiveness",
      "Full PPE-equipped specialist teams",
      "Compliance with AS/NZS infection control standards",
    ],
    ideal: "Medical centres, hospitals, aged care facilities, childcare centres, and any environment requiring clinical-grade hygiene.",
  },
  {
    icon: Sparkles,
    label: "Window\nCleaning",
    title: "Window Cleaning",
    image: SERVICE_IMAGES.window,
    description: "Professional internal and external window cleaning for commercial buildings of all heights. We use water-fed pole systems, rope access, and elevated work platforms to deliver streak-free, crystal-clear results. Our teams are fully certified for working at heights and carry all required insurances.",
    features: [
      "Pure water-fed pole systems for spotless results",
      "Rope access and abseil cleaning for high-rise buildings",
      "Elevated work platform (EWP) operations",
      "Internal glass, partition, and mirror cleaning",
      "Frame, track, and sill detailing",
      "Scheduled programs: weekly, monthly, or quarterly",
    ],
    ideal: "High-rise offices, shopping centres, glass-facade buildings, and commercial properties requiring regular window maintenance.",
  },
  {
    icon: Droplets,
    label: "Steam\nCleaning",
    title: "Steam Cleaning",
    image: SERVICE_IMAGES.steam,
    description: "Industrial steam cleaning uses superheated water vapour to deep-clean carpets, upholstery, hard floors, and surfaces without harsh chemicals. Our commercial-grade steam equipment penetrates deep into fibres and pores, lifting embedded dirt, killing bacteria, and eliminating allergens for a healthier indoor environment.",
    features: [
      "Chemical-free deep cleaning using superheated steam",
      "Carpet and upholstery restoration",
      "Hard floor sanitisation and grout cleaning",
      "Kills 99.9% of bacteria and dust mites",
      "Fast drying times with industrial extraction",
      "Eco-friendly process with minimal water usage",
    ],
    ideal: "Offices with carpet flooring, hospitality venues, healthcare facilities, and any space requiring deep sanitisation without chemicals.",
  },
  {
    icon: CircleDot,
    label: "Floor\nPolishing",
    title: "Floor Polishing & Restoration",
    image: SERVICE_IMAGES.floor,
    description: "Restore your floors to a mirror-like finish with our professional floor polishing and maintenance service. We handle all floor types \u2014 marble, terrazzo, concrete, vinyl, and timber \u2014 using diamond grinding, honing, and high-speed burnishing equipment to achieve showroom-quality results.",
    features: [
      "Diamond grinding and honing for stone floors",
      "High-speed burnishing for vinyl and concrete",
      "Marble and terrazzo crystallisation",
      "Epoxy and polyurethane coating application",
      "Scratch removal and surface restoration",
      "Scheduled maintenance programs to preserve finish",
    ],
    ideal: "Corporate lobbies, retail showrooms, shopping centres, hotels, and any facility with high-value flooring requiring restoration.",
  },
  {
    icon: Waves,
    label: "Pressure\nWashing",
    title: "Pressure Washing",
    image: SERVICE_IMAGES.pressure,
    description: "High-powered pressure washing for building exteriors, car parks, driveways, loading docks, and outdoor areas. Our commercial-grade equipment removes years of grime, oil stains, graffiti, and biological growth, restoring surfaces to their original condition and improving your property's kerb appeal.",
    features: [
      "Hot and cold water pressure washing systems",
      "Building facade and exterior wall cleaning",
      "Car park and driveway degreasing",
      "Loading dock and warehouse floor cleaning",
      "Graffiti removal and anti-graffiti coatings",
      "Bin bay and waste area sanitisation",
    ],
    ideal: "Commercial properties, industrial sites, shopping centres, car parks, and any facility with exterior surfaces requiring deep cleaning.",
  },
  {
    icon: Bath,
    label: "Washroom Hygiene\nService",
    title: "Washroom Hygiene Service",
    image: SERVICE_IMAGES.washroom,
    description: "A comprehensive washroom management program that goes beyond cleaning. We provide full hygiene solutions including consumable management, sanitiser dispensers, air freshening systems, sanitary disposal, and regular deep cleans \u2014 ensuring your washrooms always reflect a premium standard.",
    features: [
      "Complete consumable supply and management",
      "Touchless dispenser installation and maintenance",
      "Sanitary bin and clinical waste disposal",
      "Air freshening and odour control systems",
      "Deep cleaning and sanitisation schedules",
      "Regular audits and quality inspections",
    ],
    ideal: "Corporate offices, shopping centres, hospitality venues, healthcare facilities, and any high-traffic washroom environment.",
  },
  {
    icon: Heart,
    label: "Healthcare &\nAged Care",
    title: "Healthcare & Aged Care Cleaning",
    image: SERVICE_IMAGES.healthcare,
    description: "Specialist cleaning for hospitals, medical centres, aged care facilities, and allied health clinics. Our teams are trained in healthcare-specific infection control protocols, understand the sensitivity required in aged care environments, and maintain full compliance with Australian healthcare cleaning standards and accreditation requirements.",
    features: [
      "Healthcare-specific infection control protocols",
      "Aged care facility cleaning with resident sensitivity",
      "Operating theatre and clinical area deep cleaning",
      "Compliance with AS/NZS 3003 and aged care standards",
      "Colour-coded cleaning systems to prevent cross-contamination",
      "24/7 availability for emergency outbreak response",
    ],
    ideal: "Hospitals, medical centres, aged care facilities, dental clinics, pathology labs, and allied health practices requiring accreditation-compliant cleaning.",
  },
];

function ServiceModal({
  service,
  onClose,
}: {
  service: ServiceDetail;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#111111] border border-white/10 rounded-sm shadow-2xl animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/60 border border-white/20 rounded-full hover:border-[#C8A84E]/50 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Hero image */}
        <div className="relative w-full aspect-[16/7] overflow-hidden">
          <img
                  loading="lazy"
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 sm:left-8">
            <div className="flex items-center gap-3 mb-2">
              <service.icon className="w-6 h-6 text-[#C8A84E]" strokeWidth={1.5} />
              <span className="text-[#C8A84E] text-xs font-mono tracking-[0.2em] uppercase">
                EagleWing Service
              </span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl text-white leading-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Description */}
          <p className="text-white/70 font-body text-base sm:text-lg leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <div>
            <h4 className="text-white font-display text-xl mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-[#C8A84E]" />
              What's Included
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8A84E] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-white/60 font-body text-sm leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal for */}
          <div className="bg-[#C8A84E]/5 border border-[#C8A84E]/20 p-5 rounded-sm">
            <h4 className="text-[#C8A84E] font-display text-lg mb-2">Ideal For</h4>
            <p className="text-white/60 font-body text-sm leading-relaxed">
              {service.ideal}
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                onClose();
                setTimeout(() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C8A84E] to-[#E8D48B] text-black font-bold text-sm tracking-wider uppercase font-body hover:shadow-lg hover:shadow-[#C8A84E]/20 transition-all duration-300"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white/70 font-bold text-sm tracking-wider uppercase font-body hover:border-white/40 transition-all duration-300"
            >
              Back to Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  return (
    <>
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
              Comprehensive facility cleaning solutions delivered with intelligent systems and measurable outcomes. Click any service to learn more.
            </p>
          </div>

          {/* Service grid — circle icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-10 mb-12">
            {services.map((service, i) => (
              <button
                key={service.label}
                onClick={() => setSelectedService(service)}
                className={`flex flex-col items-center text-center group transition-all duration-700 cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center mb-4 group-hover:border-[#C8A84E]/50 group-hover:bg-[#C8A84E]/5 group-hover:scale-110 transition-all duration-500">
                  <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white/40 group-hover:text-[#C8A84E] transition-colors duration-500" strokeWidth={1.2} />
                </div>
                <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-white/70 font-body whitespace-pre-line leading-tight group-hover:text-[#C8A84E] transition-colors duration-300">
                  {service.label}
                </span>
                <span className="mt-2 text-[10px] text-[#C8A84E]/0 group-hover:text-[#C8A84E]/70 transition-all duration-300 font-body tracking-wider uppercase">
                  Learn More
                </span>
              </button>
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

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </>
  );
}
