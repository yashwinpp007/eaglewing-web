/*
 * DESIGN: Carbon Fiber Industrial Luxury
 * Problem Section: Dark background, gold accents, calling out industry failures.
 * Make the reader feel understood.
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AlertTriangle, Eye, MessageSquareOff, Clock } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Inconsistent Cleaning",
    description:
      "Missed areas, uneven quality, and no standard operating procedures. You never know what you're going to get.",
  },
  {
    icon: Eye,
    title: "Zero Accountability",
    description:
      "No proof of work, no reporting, no way to verify what was actually done. You're paying blind.",
  },
  {
    icon: MessageSquareOff,
    title: "Poor Communication",
    description:
      "Complaints go unanswered. Issues repeat. Your cleaning provider treats you like a number, not a partner.",
  },
  {
    icon: Clock,
    title: "Outdated Systems",
    description:
      "Static schedules, manual processes, mop-and-bucket methods. The industry hasn't evolved in decades.",
  },
];

export default function ProblemSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0A0A0A]">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A84E]/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`max-w-3xl mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-[#C8A84E] to-transparent" />
            <span className="text-[#C8A84E] text-xs font-mono tracking-[0.3em] uppercase">
              The Problem
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[0.95] mb-6">
            YOUR CLEANING PROVIDER
            <br />
            <span className="text-white/30">IS FAILING YOU.</span>
          </h2>
          <p className="text-lg text-white/50 font-body font-light leading-relaxed">
            If you manage a commercial property, you already know the pain. The
            cleaning industry is broken — built on outdated methods, zero
            transparency, and a "good enough" mentality. You deserve better.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, i) => (
            <div
              key={problem.title}
              className={`group relative p-6 bg-[#111111] border border-white/5 hover:border-[#C8A84E]/30 transition-all duration-500 carbon-pattern ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {/* Gold top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#C8A84E]/0 via-[#C8A84E]/0 to-[#C8A84E]/0 group-hover:from-[#C8A84E]/0 group-hover:via-[#C8A84E]/60 group-hover:to-[#C8A84E]/0 transition-all duration-500" />

              <div className="flex items-center gap-3 mb-4">
                <problem.icon className="w-5 h-5 text-[#C8A84E]/60" strokeWidth={1.5} />
                <span className="text-[10px] font-mono text-white/20 tracking-widest">
                  ISSUE.0{i + 1}
                </span>
              </div>
              <h3 className="font-display text-xl text-white mb-3 tracking-wide">
                {problem.title}
              </h3>
              <p className="text-sm text-white/40 font-body font-light leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
