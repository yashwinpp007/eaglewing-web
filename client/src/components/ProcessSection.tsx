import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ScanSearch, Sliders, BarChart3, LineChart } from "lucide-react";

const steps = [
  {
    icon: ScanSearch,
    number: "01",
    name: "SmartSense\u2122",
    subtitle: "Site Intelligence Audit",
    description: "We begin with a comprehensive site audit — mapping every zone, surface, and traffic pattern. This data feeds into our SMART System\u2122 to build your facility's unique cleaning profile.",
  },
  {
    icon: Sliders,
    number: "02",
    name: "Tailored",
    subtitle: "Custom Cleaning Plan",
    description: "Based on your site intelligence data, we design a precision cleaning plan — optimised for your space, your budget, and your specific requirements. No cookie-cutter solutions.",
  },
  {
    icon: BarChart3,
    number: "03",
    name: "Tracked",
    subtitle: "Verified Execution",
    description: "Every task is executed by trained professionals and verified through CleanProof\u2122 — our digital check-in system with photo evidence, timestamps, and real-time status updates.",
  },
  {
    icon: LineChart,
    number: "04",
    name: "Data-Driven",
    subtitle: "Continuous Improvement",
    description: "We don't just clean and leave. Our analytics platform continuously monitors performance, identifies trends, and optimises your cleaning plan for better results over time.",
  },
];

export default function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#0D0D0D] overflow-hidden">
      {/* Background number */}
      <div className="absolute -left-8 top-8 font-display text-[200px] sm:text-[280px] text-white/[0.02] leading-none select-none pointer-events-none">
        06
      </div>
      <div className="absolute inset-0 carbon-pattern opacity-20" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-[#C8A84E] to-transparent" />
          <span className="text-[#C8A84E] text-xs font-mono tracking-[0.3em] uppercase">
            Our Process
          </span>
        </div>

        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[0.95] mb-6">
            How It <span className="text-gold-gradient">Works</span>
          </h2>
          <p className="text-lg text-white/50 font-body font-light leading-relaxed">
            From initial audit to continuous optimisation — our four-phase process ensures consistent, measurable cleaning outcomes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative p-6 sm:p-8 bg-[#111111] border border-white/5 hover:border-[#C8A84E]/30 transition-all duration-700 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Large background number */}
              <div className="absolute -right-2 -top-2 font-display text-[100px] text-white/[0.03] leading-none select-none pointer-events-none">
                {step.number}
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center border border-[#C8A84E]/20 group-hover:border-[#C8A84E]/50 mb-5 transition-colors duration-300">
                  <step.icon className="w-6 h-6 text-[#C8A84E]" strokeWidth={1.5} />
                </div>

                <span className="text-[#C8A84E] text-xs font-mono tracking-[0.2em] uppercase block mb-2">
                  Step {step.number}
                </span>

                <h3 className="font-display text-2xl text-white tracking-wide mb-1">
                  {step.name}
                </h3>
                <p className="text-sm text-[#C8A84E]/60 font-mono tracking-wider uppercase mb-4">
                  {step.subtitle}
                </p>

                <p className="text-sm text-white/40 font-body font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom gold line */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#C8A84E] to-[#E8D48B] group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-gold px-8 py-4 text-sm font-bold tracking-wider uppercase font-body"
          >
            Book a Site Audit
          </button>
        </div>
      </div>
    </section>
  );
}
