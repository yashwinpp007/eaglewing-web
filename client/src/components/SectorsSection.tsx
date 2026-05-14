import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
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
  X,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const SECTOR_IMAGES = {
  corporate: "/images/sectors/corporate.webp",
  education: "/images/sectors/education.webp",
  healthcare: "/images/sectors/healthcare.webp",
  government: "/images/sectors/government.webp",
  retail: "/images/sectors/retail.webp",
  industrial: "/images/sectors/industrial.webp",
  transport: "/images/sectors/transport.webp",
  hospitality: "/images/sectors/hospitality.webp",
  airport: "/images/sectors/airport.webp",
};

interface SectorDetail {
  icon: typeof Building2;
  label: string;
  title: string;
  image: string;
  description: string;
  features: string[];
  environments: string;
}

const sectors: SectorDetail[] = [
  {
    icon: Building2,
    label: "Corporate\nOffices",
    title: "Corporate Offices",
    image: SECTOR_IMAGES.corporate,
    description: "EagleWing delivers premium cleaning solutions for corporate environments where first impressions matter. From executive suites to open-plan workspaces, our teams maintain the highest standards of cleanliness, hygiene, and presentation — ensuring your office reflects the professionalism of your brand every single day.",
    features: [
      "Daily office cleaning with dedicated site teams",
      "Executive suite and boardroom detailing",
      "Kitchen and breakroom deep sanitisation",
      "Carpet care and floor maintenance programs",
      "End-of-trip facility cleaning (showers, lockers)",
      "After-hours cleaning to minimise disruption",
    ],
    environments: "Corporate headquarters, co-working spaces, law firms, accounting practices, financial institutions, and multi-tenanted office towers.",
  },
  {
    icon: GraduationCap,
    label: "Education",
    title: "Education Facilities",
    image: SECTOR_IMAGES.education,
    description: "Schools, universities, and training facilities require specialised cleaning that prioritises student health and safety. EagleWing understands the unique demands of educational environments — from high-traffic corridors and classrooms to science labs and sports facilities — delivering consistent hygiene outcomes that support learning.",
    features: [
      "Classroom and lecture hall daily cleaning",
      "Washroom sanitisation with touchpoint focus",
      "Science lab and workshop decontamination",
      "Library and study space maintenance",
      "Sports hall and gymnasium cleaning",
      "Holiday deep-clean and term preparation programs",
    ],
    environments: "Primary and secondary schools, universities, TAFE campuses, private colleges, childcare centres, and corporate training facilities.",
  },
  {
    icon: HeartPulse,
    label: "Healthcare\n& Medical",
    title: "Healthcare & Medical",
    image: SECTOR_IMAGES.healthcare,
    description: "Healthcare environments demand the highest standards of infection control and hygiene compliance. EagleWing's specialist healthcare cleaning teams are trained in clinical-grade protocols, understand regulatory requirements, and use hospital-approved products and equipment to maintain safe, sterile environments for patients and staff.",
    features: [
      "Hospital-grade infection control cleaning",
      "Operating theatre and clinical area protocols",
      "Aged care facility specialist cleaning",
      "TGA-approved disinfectant application",
      "Colour-coded systems to prevent cross-contamination",
      "Compliance with AS/NZS healthcare standards",
    ],
    environments: "Hospitals, medical centres, dental clinics, aged care facilities, pathology labs, physiotherapy clinics, and allied health practices.",
  },
  {
    icon: Landmark,
    label: "Government\n& Civic",
    title: "Government & Civic Buildings",
    image: SECTOR_IMAGES.government,
    description: "Government and civic buildings serve the public and must maintain impeccable standards of cleanliness, safety, and accessibility. EagleWing has extensive experience managing cleaning contracts for local, state, and federal government facilities — meeting strict compliance requirements and security protocols.",
    features: [
      "Council chambers and civic centre cleaning",
      "Public library and community centre maintenance",
      "Courtroom and tribunal facility cleaning",
      "Security-cleared cleaning personnel available",
      "Compliance with government procurement standards",
      "Sustainable cleaning practices for ESG reporting",
    ],
    environments: "Council offices, courthouses, public libraries, community centres, government departments, and civic infrastructure.",
  },
  {
    icon: ShoppingBag,
    label: "Retail &\nShopping",
    title: "Retail & Shopping Centres",
    image: SECTOR_IMAGES.retail,
    description: "Retail environments demand spotless presentation during trading hours and thorough deep cleaning after close. EagleWing manages cleaning for shopping centres and retail precincts, ensuring common areas, food courts, amenities, and car parks are maintained to the highest standard — protecting your brand and enhancing the customer experience.",
    features: [
      "Common area and mall cleaning during trade",
      "Food court sanitisation and waste management",
      "Amenity block and parent room maintenance",
      "Car park sweeping and pressure washing",
      "Escalator and elevator detailing",
      "Event and seasonal deep-clean programs",
    ],
    environments: "Shopping centres, retail strips, department stores, supermarkets, food courts, and mixed-use retail precincts.",
  },
  {
    icon: Warehouse,
    label: "Industrial\n& Logistics",
    title: "Industrial & Logistics",
    image: SECTOR_IMAGES.industrial,
    description: "Warehouses, distribution centres, and manufacturing facilities require robust cleaning solutions that can handle heavy-duty environments. EagleWing deploys industrial-grade equipment and trained teams to maintain safe, compliant, and productive workspaces — from factory floors to office areas within industrial complexes.",
    features: [
      "Warehouse floor scrubbing and degreasing",
      "Loading dock and dispatch area cleaning",
      "Office and amenity cleaning within industrial sites",
      "High-bay dust removal and rafter cleaning",
      "Spill response and hazardous waste area maintenance",
      "WHS-compliant cleaning in operational environments",
    ],
    environments: "Warehouses, distribution centres, manufacturing plants, cold storage facilities, logistics hubs, and industrial estates.",
  },
  {
    icon: Train,
    label: "Transport\n& Transit",
    title: "Transport & Transit Hubs",
    image: SECTOR_IMAGES.transport,
    description: "Public transport hubs experience extreme foot traffic and require constant attention to maintain safety and presentation standards. EagleWing provides 24/7 cleaning solutions for train stations, bus terminals, and transit infrastructure — keeping platforms, concourses, and amenities clean and safe for millions of daily commuters.",
    features: [
      "Platform and concourse cleaning programs",
      "Escalator, lift, and handrail sanitisation",
      "Public amenity and washroom maintenance",
      "Graffiti removal and anti-graffiti treatments",
      "Overnight deep-clean and pressure washing",
      "Biohazard and needle-safe response protocols",
    ],
    environments: "Train stations, bus interchanges, tram stops, ferry terminals, park-and-ride facilities, and transit authority offices.",
  },
  {
    icon: Hotel,
    label: "Hospitality\n& Hotels",
    title: "Hospitality & Hotels",
    image: SECTOR_IMAGES.hospitality,
    description: "In hospitality, cleanliness is the foundation of guest satisfaction and brand reputation. EagleWing provides comprehensive cleaning services for hotels, resorts, and event venues — from lobby presentation and common areas to back-of-house operations. Our teams understand the pace and precision required in hospitality environments.",
    features: [
      "Lobby, foyer, and reception area presentation",
      "Conference and event space turnaround cleaning",
      "Restaurant and kitchen deep cleaning",
      "Back-of-house and staff area maintenance",
      "Car park and external area upkeep",
      "24/7 on-call support for event turnarounds",
    ],
    environments: "Hotels, resorts, convention centres, event venues, restaurants, bars, and serviced apartment complexes.",
  },
  {
    icon: Plane,
    label: "Airports &\nTerminals",
    title: "Airports & Terminals",
    image: SECTOR_IMAGES.airport,
    description: "Airport terminals operate around the clock and demand cleaning services that match their pace. EagleWing delivers high-frequency cleaning programs for terminal buildings, ensuring passenger areas, amenities, retail zones, and operational spaces meet the stringent standards expected in aviation environments.",
    features: [
      "Terminal concourse and gate area cleaning",
      "Washroom high-frequency maintenance programs",
      "Retail and food court zone cleaning",
      "Baggage hall and arrivals area maintenance",
      "Airside and landside operational cleaning",
      "Security-cleared personnel for restricted zones",
    ],
    environments: "International and domestic terminals, airline lounges, cargo facilities, aviation offices, and airside operational areas.",
  },
];

function SectorModal({
  sector,
  onClose,
}: {
  sector: SectorDetail;
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
            src={sector.image}
            alt={sector.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 sm:left-8">
            <div className="flex items-center gap-3 mb-2">
              <sector.icon className="w-6 h-6 text-[#C8A84E]" strokeWidth={1.5} />
              <span className="text-[#C8A84E] text-xs font-mono tracking-[0.2em] uppercase">
                Industry Sector
              </span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl text-white leading-tight">
              {sector.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Description */}
          <p className="text-white/70 font-body text-base sm:text-lg leading-relaxed">
            {sector.description}
          </p>

          {/* Features */}
          <div>
            <h4 className="text-white font-display text-xl mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-[#C8A84E]" />
              Our Approach
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sector.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8A84E] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-white/60 font-body text-sm leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Environments */}
          <div className="bg-[#C8A84E]/5 border border-[#C8A84E]/20 p-5 rounded-sm">
            <h4 className="text-[#C8A84E] font-display text-lg mb-2">Environments We Service</h4>
            <p className="text-white/60 font-body text-sm leading-relaxed">
              {sector.environments}
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
              Back to Sectors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SectorsSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [selectedSector, setSelectedSector] = useState<SectorDetail | null>(null);

  return (
    <>
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
              EagleWing delivers intelligent cleaning outcomes across a wide range of industries and environments throughout Melbourne and Sydney. Click any sector to learn more.
            </p>
          </div>

          {/* Sectors grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-10 mb-12">
            {sectors.map((sector, i) => (
              <button
                key={sector.label}
                onClick={() => setSelectedSector(sector)}
                className={`flex flex-col items-center text-center group transition-all duration-700 cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#1a1a1a] border border-[#1a1a1a] flex items-center justify-center mb-4 group-hover:border-[#C8A84E]/50 group-hover:scale-110 transition-all duration-500">
                  <sector.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white/60 group-hover:text-[#C8A84E] transition-colors duration-500" strokeWidth={1.2} />
                </div>
                <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#333] font-body whitespace-pre-line leading-tight group-hover:text-[#C8A84E] transition-colors duration-300">
                  {sector.label}
                </span>
                <span className="mt-2 text-[10px] text-[#C8A84E]/0 group-hover:text-[#C8A84E]/70 transition-all duration-300 font-body tracking-wider uppercase">
                  Learn More
                </span>
              </button>
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

      {/* Sector Detail Modal */}
      {selectedSector && (
        <SectorModal
          sector={selectedSector}
          onClose={() => setSelectedSector(null)}
        />
      )}
    </>
  );
}
