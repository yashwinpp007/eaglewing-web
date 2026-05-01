import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Leaf, Droplets, Recycle, Zap, TreePine, ShieldCheck } from "lucide-react";

/*
 * DESIGN: Sustainability / Eco section
 * Style: Dark base with green accent tones to differentiate from gold brand sections.
 * Communicates environmental responsibility, eco-certified products, and waste reduction.
 */

const commitments = [
  {
    icon: Leaf,
    title: "Eco-Certified Products",
    description:
      "We exclusively use GECA-certified and environmentally approved cleaning products that are non-toxic, biodegradable, and safe for people and the planet.",
  },
  {
    icon: Droplets,
    title: "Water-Efficient Methods",
    description:
      "Our cleaning systems use up to 70% less water than traditional methods through microfibre technology, controlled-dosing equipment, and water-recycling scrubbers.",
  },
  {
    icon: Recycle,
    title: "Waste Reduction",
    description:
      "We minimise waste through reusable microfibre systems, concentrated chemical dispensing, recycled packaging, and responsible disposal of all cleaning by-products.",
  },
  {
    icon: Zap,
    title: "Energy-Efficient Equipment",
    description:
      "Our fleet of battery-powered, low-energy machines reduces carbon emissions while delivering superior cleaning performance across every site we manage.",
  },
  {
    icon: TreePine,
    title: "Carbon Footprint Tracking",
    description:
      "We monitor and report on the environmental impact of our operations, setting measurable reduction targets and providing clients with sustainability reports.",
  },
  {
    icon: ShieldCheck,
    title: "Indoor Air Quality",
    description:
      "HEPA-filtration vacuums, low-VOC products, and fragrance-free options protect indoor air quality — creating healthier environments for building occupants.",
  },
];

export default function SustainabilitySection() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="sustainability" className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-600/5 rounded-full blur-[100px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-emerald-500 to-transparent" />
          <span className="text-emerald-400 text-xs font-mono tracking-[0.3em] uppercase">
            Our Commitment
          </span>
        </div>

        {/* Header */}
        <div
          className={`max-w-3xl mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[0.95] mb-6">
            Cleaning Responsibly.{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              Protecting Tomorrow.
            </span>
          </h2>
          <p className="text-lg text-white/50 font-body font-light leading-relaxed max-w-2xl">
            At EagleWing, sustainability is not an afterthought — it is built into every process, product, and decision. We deliver exceptional cleaning outcomes while minimising our environmental impact.
          </p>
        </div>

        {/* Commitments grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commitments.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group relative p-8 bg-[#111111] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Green top accent line */}
                <div className="absolute top-0 left-0 w-0 h-px bg-gradient-to-r from-emerald-500 to-emerald-300 group-hover:w-full transition-all duration-700" />

                <div className="w-14 h-14 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/20 rounded-sm mb-5 group-hover:bg-emerald-500/15 transition-all duration-300">
                  <Icon className="w-7 h-7 text-emerald-400" strokeWidth={1.5} />
                </div>

                <h3 className="font-display text-xl text-white mb-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-white/50 font-body font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div
          className={`mt-16 p-8 sm:p-10 bg-gradient-to-r from-emerald-500/5 to-transparent border-l-2 border-emerald-500/40 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <p className="text-white/70 font-body text-lg leading-relaxed max-w-3xl">
            <span className="text-emerald-400 font-semibold">Our goal:</span>{" "}
            To set the benchmark for environmentally responsible facility services in Australia. Every EagleWing engagement is designed to reduce waste, conserve resources, and create healthier indoor environments — without compromising on cleaning quality.
          </p>
        </div>
      </div>
    </section>
  );
}
