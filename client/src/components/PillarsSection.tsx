import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PILLAR_SMART = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/BkqAKKXyrgkSN3D58Kw86s/pillar-smart-system-hBnBCZXCSgYayWQhcjLXcB.webp";
const PILLAR_DYNAMIC = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/BkqAKKXyrgkSN3D58Kw86s/pillar-dynamic-flow-PJfZsjf8s2jvGCfwQRfHzT.webp";
// CHANGED: "People You Can Trust" now uses the futuristic equipment image
const PILLAR_TEAMS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/dNwLKZfEuqHVi87Tg2QnZX/hero-modern-equipment-NKnFLgEwFUcuTYusKt8KZv.webp";
const PILLAR_CLEANPROOF = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/BkqAKKXyrgkSN3D58Kw86s/pillar-cleanproof-fYcGHMX3awT7RDBHa3nwsZ.webp";
const PILLAR_SUSTAINABLE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/BkqAKKXyrgkSN3D58Kw86s/pillar-sustainable-CmUhkSvMkrVkLW9WPyLhfL.webp";
const PILLAR_EQUIPMENT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/dNwLKZfEuqHVi87Tg2QnZX/eaglewing-equipment_5e1ef2da.png";

const pillars = [
  {
    tag: "Data-Driven Intelligence",
    name: "SMART System\u2122",
    description: "Our proprietary SMART System\u2122 uses structured data capture, site mapping, and real-time analytics to build a precise cleaning intelligence profile for every facility we manage.",
    image: PILLAR_SMART,
  },
  {
    tag: "Adaptive Scheduling",
    name: "DynamicFlow\u2122",
    description: "DynamicFlow\u2122 is our adaptive scheduling engine that adjusts cleaning frequency and intensity based on real usage patterns, occupancy data, and seasonal demand.",
    image: PILLAR_DYNAMIC,
  },
  {
    tag: "People You Can Trust",
    name: "Trained & Verified Teams",
    description: "Every EagleWing team member is background-checked, formally trained, and regularly assessed. Our people are our product \u2014 and we invest heavily in their development.",
    image: PILLAR_TEAMS,
  },
  {
    tag: "Real-Time Verification",
    name: "CleanProof\u2122",
    description: "CleanProof\u2122 is our digital verification platform. Every task is logged, timestamped, and confirmed via QR-based check-ins \u2014 giving you full transparency and accountability.",
    image: PILLAR_CLEANPROOF,
  },
  {
    tag: "Responsible by Design",
    name: "Sustainable Practices",
    description: "We use eco-certified products, low-waste processes, and water-efficient methods across all our operations \u2014 reducing environmental impact without compromising results.",
    image: PILLAR_SUSTAINABLE,
  },
  {
    tag: "Technology-Grade Tools",
    name: "Advanced Equipment",
    description: "From autonomous floor scrubbers to HEPA-filtration systems, EagleWing deploys industry-leading equipment that delivers superior results with greater efficiency.",
    image: PILLAR_EQUIPMENT,
  },
];

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const isReversed = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Image */}
      <div className={`relative h-64 sm:h-80 lg:h-auto ${isReversed ? "lg:order-2" : ""}`}>
        <img
          src={pillar.image}
          alt={pillar.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {/* Gold corner accents */}
        <div className="absolute top-0 left-0 w-12 h-px bg-[#C8A84E]/40" />
        <div className="absolute top-0 left-0 w-px h-12 bg-[#C8A84E]/40" />
        <div className="absolute bottom-0 right-0 w-12 h-px bg-[#C8A84E]/40" />
        <div className="absolute bottom-0 right-0 w-px h-12 bg-[#C8A84E]/40" />
      </div>

      {/* Text */}
      <div className={`p-8 sm:p-10 lg:p-12 flex flex-col justify-center bg-[#111111] ${isReversed ? "lg:order-1" : ""}`}>
        <span className="text-[#C8A84E] text-xs font-mono tracking-[0.3em] uppercase mb-3 block">
          {pillar.tag}
        </span>
        <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wide mb-5">
          {pillar.name}
        </h3>
        <p className="text-base text-white/50 font-body font-light leading-relaxed">
          {pillar.description}
        </p>
      </div>
    </div>
  );
}

export default function PillarsSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section className="relative py-24 sm:py-32 bg-[#0D0D0D] overflow-hidden">
      {/* Background number */}
      <div className="absolute -left-8 top-8 font-display text-[200px] sm:text-[280px] text-white/[0.02] leading-none select-none pointer-events-none">
        04
      </div>
      <div className="absolute inset-0 carbon-pattern opacity-20" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-[#C8A84E] to-transparent" />
          <span className="text-[#C8A84E] text-xs font-mono tracking-[0.3em] uppercase">
            Our Framework
          </span>
        </div>

        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[0.95] mb-6">
            Our Intelligent Cleaning{" "}
            <span className="text-gold-gradient">Framework</span>
          </h2>
          <p className="text-lg text-white/50 font-body font-light leading-relaxed">
            Six pillars that power every EagleWing engagement — from data-driven planning to verified execution.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="space-y-1">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.name} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
