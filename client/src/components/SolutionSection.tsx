/*
 * DESIGN: Carbon Fiber Industrial Luxury
 * Solution Section: Introduces the EagleWing system — Smart, Structured, Measurable.
 * Diagonal top clip, dark elevated background.
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Brain, Layers, BarChart3 } from "lucide-react";

const solutions = [
  {
    icon: Brain,
    label: "Smart",
    title: "Intelligent Systems",
    description:
      "Data-driven cleaning powered by sensors, usage patterns, and predictive algorithms. We clean based on need, not guesswork.",
  },
  {
    icon: Layers,
    label: "Structured",
    title: "Engineered Processes",
    description:
      "Every site gets a custom cleaning blueprint. Priority-based task allocation, optimised routes, and systematic execution.",
  },
  {
    icon: BarChart3,
    label: "Measurable",
    title: "Verified Results",
    description:
      "Digital reporting with photo/video proof. Real-time dashboards. You see exactly what was done, when, and how.",
  },
];

export default function SolutionSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative py-24 sm:py-32 bg-[#0D0D0D] clip-diagonal-top -mt-16 pt-32">
      <div className="absolute inset-0 carbon-pattern opacity-30" />

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
              The Solution
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C8A84E]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[0.95] mb-6">
            YOU DON'T NEED A NEW CLEANER.
            <br />
            <span className="text-gold-gradient">YOU NEED A BETTER SYSTEM.</span>
          </h2>
          <p className="text-lg text-white/50 font-body font-light leading-relaxed">
            EagleWing replaces outdated cleaning with an engineered facility
            solution. Built on technology, accountability, and precision.
          </p>
        </div>

        {/* Solution pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((sol, i) => (
            <div
              key={sol.label}
              className={`group relative p-8 bg-gradient-to-b from-[#141414] to-[#0D0D0D] border border-white/5 hover:border-[#C8A84E]/20 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              {/* Number */}
              <div className="absolute top-6 right-6 font-display text-6xl text-white/[0.03] leading-none">
                0{i + 1}
              </div>

              <div className="w-12 h-12 flex items-center justify-center border border-[#C8A84E]/20 mb-6 group-hover:border-[#C8A84E]/50 transition-colors duration-300">
                <sol.icon className="w-5 h-5 text-[#C8A84E]" strokeWidth={1.5} />
              </div>

              <span className="text-[10px] font-mono text-[#C8A84E]/60 tracking-[0.3em] uppercase">
                {sol.label}
              </span>
              <h3 className="font-display text-2xl text-white mt-2 mb-4 tracking-wide">
                {sol.title}
              </h3>
              <p className="text-sm text-white/40 font-body font-light leading-relaxed">
                {sol.description}
              </p>

              {/* Bottom gold line */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#C8A84E] to-[#E8D48B] group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
