/*
 * DESIGN: Carbon Fiber Industrial Luxury
 * Trust Section: Experience, systems-driven, professional teams.
 * Dark with gold accents, counter animations.
 */
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";
import { Award, Settings, Users } from "lucide-react";

const trustPillars = [
  {
    icon: Award,
    stat: 20,
    suffix: "+",
    label: "YEARS",
    title: "Proven Experience",
    description:
      "Two decades of commercial cleaning excellence. We've seen every challenge, solved every problem, and refined our systems through thousands of engagements.",
  },
  {
    icon: Settings,
    stat: 100,
    suffix: "%",
    label: "SYSTEMS",
    title: "Systems-Driven",
    description:
      "Every process is engineered, documented, and measurable. No guesswork, no shortcuts. Our systems ensure consistent results across every site, every time.",
  },
  {
    icon: Users,
    stat: 250,
    suffix: "+",
    label: "TEAM",
    title: "Professional Teams",
    description:
      "Trained, vetted, and equipped professionals who represent your brand. Uniformed, certified, and committed to the EagleWing standard of excellence.",
  },
];

function TrustCard({
  pillar,
  index,
  isVisible,
}: {
  pillar: (typeof trustPillars)[0];
  index: number;
  isVisible: boolean;
}) {
  const count = useCountUp(pillar.stat, 2500, isVisible);

  return (
    <div
      className={`group relative p-8 sm:p-10 bg-gradient-to-b from-[#141414] to-[#0D0D0D] border border-white/5 hover:border-[#C8A84E]/20 transition-all duration-500 text-center ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${300 + index * 150}ms` }}
    >
      <div className="flex justify-center mb-6">
        <div className="w-14 h-14 flex items-center justify-center border border-[#C8A84E]/20 group-hover:border-[#C8A84E]/50 transition-colors duration-300">
          <pillar.icon
            className="w-6 h-6 text-[#C8A84E]"
            strokeWidth={1.5}
          />
        </div>
      </div>

      <div className="font-display text-5xl sm:text-6xl text-[#C8A84E] mb-1">
        {count}
        {pillar.suffix}
      </div>
      <span className="text-[10px] font-mono text-white/30 tracking-[0.3em]">
        {pillar.label}
      </span>

      <h3 className="font-display text-xl text-white tracking-wide mt-6 mb-4">
        {pillar.title}
      </h3>
      <p className="text-sm text-white/40 font-body font-light leading-relaxed">
        {pillar.description}
      </p>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#C8A84E] to-[#E8D48B] group-hover:w-full transition-all duration-700" />
    </div>
  );
}

export default function TrustSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative py-24 sm:py-32 bg-[#0D0D0D] clip-diagonal-top -mt-16 pt-32">
      <div className="absolute inset-0 carbon-pattern opacity-30" />

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
              Trust
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C8A84E]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[0.95] mb-6">
            WHY CLIENTS
            <span className="text-gold-gradient"> TRUST US</span>
          </h2>
          <p className="text-lg text-white/50 font-body font-light leading-relaxed">
            Built on decades of experience, powered by systems, and delivered by
            professionals who take pride in their craft.
          </p>
        </div>

        {/* Trust cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustPillars.map((pillar, i) => (
            <TrustCard
              key={pillar.title}
              pillar={pillar}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
