import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BRIAN_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/dNwLKZfEuqHVi87Tg2QnZX/brian-sylvester_98d3598b.png";

export default function FounderSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="founder" className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C8A84E]/3 to-transparent" />
      <div className="absolute inset-0 carbon-pattern opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Photo */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Gold border accent */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[#C8A84E]/30 via-transparent to-[#C8A84E]/20 blur-sm" />
              <div className="relative overflow-hidden border border-[#C8A84E]/20">
                <img
                  src={BRIAN_PHOTO}
                  alt="Brian Sylvester — Founder of EagleWing Facility Services"
                  className="w-full max-w-md h-auto object-cover"
                />
                {/* Overlay gradient at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
              </div>
              {/* Name plate */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0A0A0A]/90 backdrop-blur-sm border border-[#C8A84E]/20 px-5 py-3">
                <p className="font-display text-lg text-white tracking-wide">Brian Sylvester</p>
                <p className="text-xs text-[#C8A84E] font-mono tracking-wider uppercase">Founder & Director</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-[#C8A84E] to-transparent" />
              <span className="text-[#C8A84E] text-xs font-mono tracking-[0.3em] uppercase">
                Our Founder
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-6">
              Meet <span className="text-gold-gradient">Brian Sylvester</span>
            </h2>

            <p className="text-white/50 text-sm font-mono tracking-wider uppercase mb-8">
              Founder | EagleWing Facility Services
            </p>

            <div className="space-y-5 text-white/70 font-body text-base sm:text-lg leading-relaxed">
              <p>
                Brian Sylvester is a cleaning industry leader with over <span className="text-white font-semibold">25 years of experience</span> delivering results across commercial, medical, logistics, and high-traffic environments.
              </p>

              <p>
                His journey is built on three things:
              </p>

              <div className="flex gap-6 py-4">
                {["Passion", "Innovation", "Proven Results"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#C8A84E]" />
                    <span className="text-white font-semibold text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <p>
                After decades in the industry, Brian saw the same problems repeating — inconsistent standards, poor accountability, outdated methods. Instead of accepting it, he built a better way.
              </p>

              <p className="text-white font-semibold">
                That solution is EagleWing.
              </p>

              <p>
                A next-generation cleaning model driven by smart systems, structured processes, and real accountability. Designed to deliver consistent, high-level outcomes — not just routine cleaning.
              </p>

              <p>
                Brian doesn't focus on tasks. He focuses on <span className="text-[#C8A84E] font-semibold">results</span>.
              </p>

              <div className="pt-4 border-t border-white/10">
                <p className="text-white/50 italic text-base">
                  "Cleaner spaces. Smarter systems. Better control. The future of cleaning is not coming — it's already here with EagleWing."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
