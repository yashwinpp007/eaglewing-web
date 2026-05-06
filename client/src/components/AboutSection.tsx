import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState, useRef } from "react";
import { Zap, Eye, Shield, ArrowRight } from "lucide-react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/dNwLKZfEuqHVi87Tg2QnZX/about-smart-systems-b4BPqcp5sQRJRRu2N7ArkY.webp";
const WING_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/dNwLKZfEuqHVi87Tg2QnZX/intelligent-cleaning-logo-transparent_658103e2.png";

function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return <div ref={ref}>{count}{suffix}</div>;
}

const differentiators = [
  {
    icon: Zap,
    title: "Intelligent Systems",
    desc: "AI-powered scheduling, real-time tracking, and data-driven decisions replace outdated guesswork.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    desc: "Live dashboards, photo verification, and GPS tracking give you complete visibility 24/7.",
  },
  {
    icon: Shield,
    title: "Proven Accountability",
    desc: "Every task logged, timestamped, and verified. No excuses — just measurable, consistent results.",
  },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Top half — dark dramatic intro */}
      <div className="relative bg-[#0a0a0a] py-20 sm:py-28 overflow-hidden">
        {/* Animated gold line accent */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C8A84E]/40 to-transparent" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(200,168,78,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,78,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section label */}
          <div className={`flex items-center gap-3 mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="h-px w-16 bg-gradient-to-r from-[#C8A84E] to-transparent" />
            <span className="text-[#C8A84E] text-[11px] font-mono tracking-[0.4em] uppercase">
              Why EagleWing
            </span>
          </div>

          {/* Big headline — stacked dramatic typography */}
          <div className={`mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.9] mb-4">
              A Smarter Way
            </h2>
            <div className="flex items-end gap-4 sm:gap-6">
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gold-gradient leading-[0.9]">
                to Clean.
              </h2>
              <img
                src={WING_LOGO}
                alt="Intelligent Cleaning System"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain opacity-70 mb-2"
              />
            </div>
          </div>

          {/* Subtext with vertical gold bar */}
          <div className={`flex gap-6 max-w-3xl mb-16 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="w-1 bg-gradient-to-b from-[#C8A84E] to-[#C8A84E]/20 rounded-full flex-shrink-0" />
            <p className="text-white/60 font-body text-lg sm:text-xl leading-relaxed">
              Traditional cleaning fails because of poor systems, zero visibility, and inconsistent execution. 
              EagleWing replaces guesswork with <span className="text-white font-medium">intelligent systems</span>, 
              <span className="text-white font-medium"> real-time verification</span>, and 
              <span className="text-white font-medium"> measurable accountability</span> — delivering results you can actually see and prove.
            </p>
          </div>

          {/* Animated stats row */}
          <div className={`grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="text-center sm:text-left">
              <div className="font-display text-4xl sm:text-5xl md:text-6xl text-[#C8A84E]">
                <AnimatedCounter target={20} suffix="+" />
              </div>
              <div className="text-white/40 text-xs sm:text-sm font-mono tracking-wider uppercase mt-1">Years</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="font-display text-4xl sm:text-5xl md:text-6xl text-[#C8A84E]">
                <AnimatedCounter target={500} suffix="+" />
              </div>
              <div className="text-white/40 text-xs sm:text-sm font-mono tracking-wider uppercase mt-1">Facilities</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="font-display text-4xl sm:text-5xl md:text-6xl text-[#C8A84E]">
                <AnimatedCounter target={98} suffix="%" />
              </div>
              <div className="text-white/40 text-xs sm:text-sm font-mono tracking-wider uppercase mt-1">Retention</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom half — light section with image + differentiators */}
      <div className="relative bg-[#F5F3EE] py-20 sm:py-24 overflow-hidden">
        {/* Diagonal gold accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C8A84E] via-[#E8D48B] to-[#C8A84E]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
            {/* Image — takes 5 cols */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-full min-h-[400px] sm:min-h-[500px] overflow-hidden group">
                <img
                  src={ABOUT_IMG}
                  alt="EagleWing intelligent cleaning operations centre"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#C8A84E]/60" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#C8A84E]/60" />
                {/* Bottom label */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-[#C8A84E] text-[10px] font-mono tracking-[0.3em] uppercase mb-1">Powered By</div>
                  <div className="text-white font-display text-xl sm:text-2xl">EagleWing Command™</div>
                </div>
              </div>
            </div>

            {/* Differentiators — takes 7 cols */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="mb-8">
                <span className="text-[#C8A84E] text-[11px] font-mono tracking-[0.4em] uppercase">
                  The Difference
                </span>
                <h3 className="font-display text-3xl sm:text-4xl text-[#1a1a1a] mt-3 leading-tight">
                  Why Facilities Choose<br />
                  <span className="text-gold-gradient">EagleWing</span>
                </h3>
              </div>

              <div className="space-y-6">
                {differentiators.map((item, i) => (
                  <div
                    key={item.title}
                    className="group flex gap-5 p-5 sm:p-6 bg-white border border-black/5 hover:border-[#C8A84E]/30 transition-all duration-500 hover:shadow-lg hover:shadow-[#C8A84E]/5 cursor-default"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1a1a1a] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8A84E] transition-colors duration-500">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#C8A84E] group-hover:text-black transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display text-lg sm:text-xl text-[#1a1a1a] mb-1 group-hover:text-[#C8A84E] transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-[#666] font-body text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center">
                      <ArrowRight className="w-5 h-5 text-transparent group-hover:text-[#C8A84E] transition-all duration-300 translate-x-0 group-hover:translate-x-1" />
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    const el = document.querySelector("#contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-[#C8A84E] to-[#E8D48B] text-black font-bold text-sm tracking-wider uppercase font-body hover:shadow-lg hover:shadow-[#C8A84E]/30 transition-all duration-300 flex items-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    const el = document.querySelector("#framework");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-4 border border-[#1a1a1a]/20 text-[#1a1a1a] font-bold text-sm tracking-wider uppercase font-body hover:border-[#C8A84E] hover:text-[#C8A84E] transition-all duration-300"
                >
                  Our Framework
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
