/*
 * DESIGN: Carbon Fiber Industrial Luxury
 * How It Works: 3-step process with connecting lines and gold accents.
 * Diagonal clip top, dark elevated background.
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Search, FileText, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "SITE ASSESSMENT",
    description:
      "We conduct a thorough walk-through of your facility. We analyse traffic patterns, high-priority zones, risk areas, and current pain points. No generic templates — every assessment is unique.",
    detail: "Comprehensive facility audit",
  },
  {
    icon: FileText,
    number: "02",
    title: "CUSTOM CLEANING PLAN",
    description:
      "Based on the assessment, we engineer a bespoke cleaning blueprint. Priority-based task allocation, optimised schedules, and resource planning — all tailored to your specific needs and budget.",
    detail: "Engineered for your facility",
  },
  {
    icon: Rocket,
    number: "03",
    title: "SMART EXECUTION + REPORTING",
    description:
      "Our trained teams execute with precision using smart equipment and dynamic scheduling. You receive digital reports with photo proof, real-time dashboards, and full visibility into every task completed.",
    detail: "Verified and accountable",
  },
];

export default function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="how-it-works"
      className="relative py-24 sm:py-32 bg-[#0D0D0D] clip-diagonal-top -mt-16 pt-32"
    >
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
              Process
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C8A84E]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[0.95] mb-6">
            HOW IT
            <span className="text-gold-gradient"> WORKS</span>
          </h2>
          <p className="text-lg text-white/50 font-body font-light leading-relaxed">
            A simple three-step process that transforms your facility management
            from reactive to proactive.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-[#C8A84E]/20 via-[#C8A84E]/40 to-[#C8A84E]/20" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 200}ms` }}
            >
              {/* Step number circle */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 mb-8">
                <div className="absolute inset-0 border border-[#C8A84E]/30 rotate-45" />
                <div className="absolute inset-2 border border-[#C8A84E]/10 rotate-45" />
                <span className="font-display text-3xl text-[#C8A84E] relative z-10">
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <step.icon
                  className="w-6 h-6 text-[#C8A84E]/60"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="font-display text-2xl text-white tracking-wide mb-4">
                {step.title}
              </h3>
              <p className="text-sm text-white/40 font-body font-light leading-relaxed mb-4 max-w-xs mx-auto">
                {step.description}
              </p>
              <span className="text-[10px] font-mono text-[#C8A84E]/50 tracking-[0.2em] uppercase">
                {step.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
