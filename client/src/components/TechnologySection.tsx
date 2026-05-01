import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BarChart3, MapPin, Camera, Bell, Clock, Shield } from "lucide-react";

const DASHBOARD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/BkqAKKXyrgkSN3D58Kw86s/technology-dashboard-XVhzpWFjWvNh2DAwTMXhqk.webp";

const features = [
  { icon: BarChart3, label: "Live Analytics Dashboard", desc: "Real-time performance metrics and cleaning compliance data at your fingertips." },
  { icon: MapPin, label: "GPS & Geofence Tracking", desc: "Know exactly when your team arrives, where they clean, and when they leave." },
  { icon: Camera, label: "Photo Verification", desc: "Before and after photo proof of every task — automatically timestamped and logged." },
  { icon: Bell, label: "Instant Notifications", desc: "Get alerted the moment a task is completed, missed, or requires attention." },
  { icon: Clock, label: "Automated Scheduling", desc: "AI-optimised schedules that adapt to your facility's real usage patterns." },
  { icon: Shield, label: "Compliance Reporting", desc: "Audit-ready reports for WHS, infection control, and quality assurance standards." },
];

export default function TechnologySection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="technology" className="relative py-24 sm:py-32 bg-[#F5F3EE] overflow-hidden">
      {/* Background number */}
      <div className="absolute -left-8 top-8 font-display text-[200px] sm:text-[280px] text-black/[0.03] leading-none select-none pointer-events-none">
        05
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-[#C8A84E] to-transparent" />
          <span className="text-[#C8A84E] text-xs font-mono tracking-[0.3em] uppercase">
            Our Technology
          </span>
        </div>

        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/dNwLKZfEuqHVi87Tg2QnZX/intelligent-cleaning-logo-transparent_658103e2.png"
            alt="Intelligent Cleaning System"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto mb-4 opacity-80"
          />
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1a1a1a] leading-[0.95] mb-6">
            EagleWing <span className="text-gold-gradient">Command™</span>
          </h2>
          <p className="text-lg text-[#555] font-body font-light leading-relaxed">
            Our proprietary facility management platform gives you complete visibility over every aspect of your cleaning operations — in real time.
          </p>
        </div>

        {/* Dashboard image */}
        <div
          className={`mb-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative overflow-hidden shadow-2xl shadow-black/10 border border-black/5">
            <img
              src={DASHBOARD_IMG}
              alt="EagleWing Command dashboard showing real-time facility analytics"
              className="w-full h-auto"
            />
            <div className="absolute top-0 left-0 w-16 h-px bg-[#C8A84E]/60" />
            <div className="absolute top-0 left-0 w-px h-16 bg-[#C8A84E]/60" />
            <div className="absolute bottom-0 right-0 w-16 h-px bg-[#C8A84E]/60" />
            <div className="absolute bottom-0 right-0 w-px h-16 bg-[#C8A84E]/60" />
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.label}
              className={`p-6 bg-white border border-black/5 hover:border-[#C8A84E]/30 transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 80}ms` }}
            >
              <div className="w-10 h-10 flex items-center justify-center border border-[#C8A84E]/20 group-hover:border-[#C8A84E]/50 mb-4 transition-colors duration-300">
                <feature.icon className="w-5 h-5 text-[#C8A84E]" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg text-[#1a1a1a] tracking-wide mb-2">
                {feature.label}
              </h3>
              <p className="text-sm text-[#666] font-body font-light leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
