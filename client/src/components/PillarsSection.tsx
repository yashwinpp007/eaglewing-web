/*
 * DESIGN: Carbon Fiber Industrial Luxury
 * Pillars Section: 6 service pillars in alternating layout with images.
 * Each pillar: WHAT it is, WHY it matters, BENEFIT.
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Zap,
  Shield,
  Activity,
  Cpu,
  FileCheck,
  Leaf,
} from "lucide-react";

const SMARTCLEAN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/dNwLKZfEuqHVi87Tg2QnZX/smartclean-Fek6nEiNyrnnm9DZ9tmZKj.webp";
const STRIKETEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/dNwLKZfEuqHVi87Tg2QnZX/striketeam-F52MbfZXJxgG8LyqYykGVi.webp";
const TECHNOLOGY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/dNwLKZfEuqHVi87Tg2QnZX/technology-C2Xz5dAsD4YAMzhAav7PrZ.webp";
const ACCOUNTABILITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/dNwLKZfEuqHVi87Tg2QnZX/accountability-h2UdXabWQ29Pmk2iw6Uy7Y.webp";

const pillars = [
  {
    id: "smartclean",
    icon: Zap,
    tag: "PILLAR.01",
    name: "EagleWing SmartClean\u2122",
    headline: "BUDGET-OPTIMISED CLEANING",
    description:
      "Most cleaning contracts are bloated \u2014 paying for services you don't need while missing areas that matter. SmartClean\u2122 uses priority-based task allocation and custom scope design for every site.",
    benefits: [
      "Priority-based cleaning schedules",
      "Custom scope tailored per site",
      "Efficient resource delivery",
    ],
    painPoint:
      "Stop overpaying for unnecessary cleaning. Every dollar works harder with SmartClean\u2122.",
    image: SMARTCLEAN_IMG,
    reverse: false,
  },
  {
    id: "striketeam",
    icon: Shield,
    tag: "PILLAR.02",
    name: "EagleWing StrikeTeam\u2122",
    headline: "EMERGENCY RESPONSE UNIT",
    description:
      "When a biohazard incident hits, a flood damages your facility, or an infection control emergency strikes \u2014 your regular cleaner won't cut it. Our StrikeTeam\u2122 deploys rapidly with specialised equipment and protocols.",
    benefits: [
      "Biohazard & infection control",
      "Flood & disaster response",
      "Rapid deployment capability",
    ],
    painPoint:
      "When things go wrong, normal cleaners fail. StrikeTeam\u2122 is your emergency insurance.",
    image: STRIKETEAM_IMG,
    reverse: true,
  },
  {
    id: "dynamic",
    icon: Activity,
    tag: "PILLAR.03",
    name: "Dynamic Solutions",
    headline: "PREDICTIVE & ADAPTIVE CLEANING",
    description:
      "Static cleaning schedules waste resources and miss high-traffic areas. Our dynamic system uses sensors, usage data, and traffic patterns to clean based on actual need \u2014 not a fixed timetable.",
    benefits: [
      "Dynamic scheduling algorithms",
      "Route optimisation technology",
      "Predictive cleaning models",
    ],
    painPoint:
      "Static cleaning equals wasted budget and missed areas. Dynamic means smarter, not harder.",
    image: null,
    reverse: false,
  },
  {
    id: "innovation",
    icon: Cpu,
    tag: "PILLAR.04",
    name: "Innovation & Technology",
    headline: "FUTURE-FOCUSED EQUIPMENT",
    description:
      "We've moved beyond mops and buckets. Our fleet includes battery-powered autonomous machines, smart equipment with IoT sensors, and high-efficiency systems that deliver superior results with less environmental impact.",
    benefits: [
      "Battery-powered machines",
      "Smart IoT-enabled equipment",
      "High-efficiency cleaning systems",
    ],
    painPoint:
      "The future of cleaning is here. We invest in technology so you don't have to.",
    image: TECHNOLOGY_IMG,
    reverse: true,
  },
  {
    id: "accountability",
    icon: FileCheck,
    tag: "PILLAR.05",
    name: "Accountability System",
    headline: "COMPLETE VISIBILITY & PROOF",
    description:
      "You shouldn't have to wonder what your cleaner actually did. Our digital reporting system provides photo and video proof of every task, real-time dashboards, and complete client visibility into operations.",
    benefits: [
      "Digital reporting with timestamps",
      "Photo & video proof of work",
      "Real-time client dashboard",
    ],
    painPoint:
      "\"You don't know what your cleaner actually did.\" With EagleWing, you always will.",
    image: ACCOUNTABILITY_IMG,
    reverse: false,
  },
  {
    id: "eco",
    icon: Leaf,
    tag: "PILLAR.06",
    name: "Eco & Sustainable",
    headline: "RESPONSIBLE CLEANING",
    description:
      "Sustainability isn't a marketing buzzword for us \u2014 it's engineered into our operations. Reduced chemical usage through smart dispensing, efficient resource allocation, and intelligent consumable management.",
    benefits: [
      "Reduced chemical usage",
      "Efficient resource allocation",
      "Smart consumable management",
    ],
    painPoint:
      "Clean facilities and a cleaner planet. Our systems minimise waste without compromising results.",
    image: null,
    reverse: true,
  },
];

function PillarCard({
  pillar,
}: {
  pillar: (typeof pillars)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const hasImage = !!pillar.image;

  if (!hasImage) {
    // Full-width enhanced card for pillars without images
    return (
      <div
        ref={ref}
        className={`relative transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="relative p-8 sm:p-12 bg-gradient-to-br from-[#141414] via-[#111111] to-[#0D0D0D] border border-white/5 hover:border-[#C8A84E]/20 transition-all duration-500 overflow-hidden group">
          {/* Large background tag */}
          <div className="absolute -right-4 -top-4 font-display text-[160px] sm:text-[200px] text-white/[0.02] leading-none select-none pointer-events-none">
            {pillar.tag.split(".")[1]}
          </div>

          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <pillar.icon
                className="w-5 h-5 text-[#C8A84E]"
                strokeWidth={1.5}
              />
              <span className="text-[10px] font-mono text-[#C8A84E]/60 tracking-[0.3em]">
                {pillar.tag}
              </span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wide mb-2">
              {pillar.name}
            </h3>
            <p className="text-sm font-mono text-[#C8A84E]/80 tracking-wider uppercase mb-6">
              {pillar.headline}
            </p>

            <p className="text-base text-white/50 font-body font-light leading-relaxed mb-8 max-w-2xl">
              {pillar.description}
            </p>

            {/* Benefits in a horizontal row on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {pillar.benefits.map((b) => (
                <div key={b} className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5">
                  <div className="w-1.5 h-1.5 bg-[#C8A84E] rotate-45 shrink-0" />
                  <span className="text-sm text-white/60 font-body">{b}</span>
                </div>
              ))}
            </div>

            {/* Pain point callout */}
            <div className="border-l-2 border-[#C8A84E]/40 pl-4 py-2">
              <p className="text-sm text-white/40 font-body italic">
                {pillar.painPoint}
              </p>
            </div>
          </div>

          {/* Bottom gold line */}
          <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#C8A84E] to-[#E8D48B] group-hover:w-full transition-all duration-700" />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
          pillar.reverse ? "lg:[direction:rtl]" : ""
        }`}
      >
        {/* Text content */}
        <div className={pillar.reverse ? "lg:[direction:ltr]" : ""}>
          <div className="flex items-center gap-3 mb-4">
            <pillar.icon
              className="w-5 h-5 text-[#C8A84E]"
              strokeWidth={1.5}
            />
            <span className="text-[10px] font-mono text-[#C8A84E]/60 tracking-[0.3em]">
              {pillar.tag}
            </span>
          </div>

          <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wide mb-2">
            {pillar.name}
          </h3>
          <p className="text-sm font-mono text-[#C8A84E]/80 tracking-wider uppercase mb-6">
            {pillar.headline}
          </p>

          <p className="text-base text-white/50 font-body font-light leading-relaxed mb-6">
            {pillar.description}
          </p>

          {/* Benefits */}
          <div className="space-y-3 mb-6">
            {pillar.benefits.map((b) => (
              <div key={b} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#C8A84E] rotate-45 shrink-0" />
                <span className="text-sm text-white/60 font-body">{b}</span>
              </div>
            ))}
          </div>

          {/* Pain point callout */}
          <div className="border-l-2 border-[#C8A84E]/40 pl-4 py-2">
            <p className="text-sm text-white/40 font-body italic">
              {pillar.painPoint}
            </p>
          </div>
        </div>

        {/* Image */}
        <div className={`relative ${pillar.reverse ? "lg:[direction:ltr]" : ""}`}>
          <div className="relative overflow-hidden group">
            <img
              src={pillar.image!}
              alt={pillar.name}
              className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-12 h-px bg-[#C8A84E]/40" />
            <div className="absolute top-0 left-0 w-px h-12 bg-[#C8A84E]/40" />
            <div className="absolute bottom-0 right-0 w-12 h-px bg-[#C8A84E]/40" />
            <div className="absolute bottom-0 right-0 w-px h-12 bg-[#C8A84E]/40" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PillarsSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section
      id="pillars"
      className="relative py-24 sm:py-32 bg-[#0A0A0A]"
    >
      <div className="absolute inset-0 carbon-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A84E]/20 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C8A84E]" />
            <span className="text-[#C8A84E] text-xs font-mono tracking-[0.3em] uppercase">
              Our Difference
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C8A84E]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[0.95] mb-6">
            SIX PILLARS OF
            <br />
            <span className="text-gold-gradient">ENGINEERED EXCELLENCE</span>
          </h2>
          <p className="text-lg text-white/50 font-body font-light leading-relaxed">
            Each pillar is designed to solve a specific failure in the
            traditional cleaning industry. Together, they form a complete
            facility solution.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="space-y-20 sm:space-y-28">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
