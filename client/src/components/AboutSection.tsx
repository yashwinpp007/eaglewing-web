import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import {
  Brain,
  Radar,
  ShieldCheck,
  Users,
  Leaf,
  Cpu,
  X,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const WING_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/dNwLKZfEuqHVi87Tg2QnZX/intelligent-cleaning-logo-transparent_658103e2.png";

interface Capability {
  icon: typeof Brain;
  label: string;
  title: string;
  description: string;
  features: string[];
  stat: string;
  statLabel: string;
}

const capabilities: Capability[] = [
  {
    icon: Brain,
    label: "Intelligent\nSystems",
    title: "Intelligent Systems",
    description:
      "Our proprietary SMART System™ uses AI-powered scheduling, site mapping, and real-time analytics to build a precise cleaning intelligence profile for every facility. No guesswork — just data-driven decisions that optimise outcomes and reduce costs.",
    features: [
      "AI-optimised cleaning schedules",
      "Predictive resource allocation",
      "Site-specific cleaning profiles",
      "Data-driven performance insights",
      "Automated task prioritisation",
      "Continuous improvement algorithms",
    ],
    stat: "40%",
    statLabel: "More Efficient",
  },
  {
    icon: Radar,
    label: "Real-Time\nTracking",
    title: "Real-Time Tracking",
    description:
      "GPS geofencing, live dashboards, and instant notifications give you complete visibility over every cleaning operation. Know exactly when your team arrives, what they're doing, and when they leave — all from your phone or desktop.",
    features: [
      "GPS & geofence attendance verification",
      "Live operations dashboard",
      "Instant task completion alerts",
      "Mobile app for facility managers",
      "Historical performance analytics",
      "Custom reporting schedules",
    ],
    stat: "24/7",
    statLabel: "Visibility",
  },
  {
    icon: ShieldCheck,
    label: "Verified\nResults",
    title: "Verified Results",
    description:
      "CleanProof™ is our digital verification platform. Every task is logged, timestamped, and confirmed via QR-based check-ins and before/after photo evidence — giving you full transparency, accountability, and audit-ready documentation.",
    features: [
      "QR-based task verification",
      "Before & after photo proof",
      "Timestamped activity logs",
      "Digital audit trail",
      "Compliance documentation",
      "Hygiene testing & ATP reports",
    ],
    stat: "100%",
    statLabel: "Accountable",
  },
  {
    icon: Users,
    label: "Trained\nTeams",
    title: "Trained & Verified Teams",
    description:
      "Every EagleWing team member is background-checked, formally trained, and regularly assessed. Our people are our product — we invest heavily in their development with ongoing certification, site-specific inductions, and performance reviews.",
    features: [
      "Police-checked & verified staff",
      "Industry-certified training programs",
      "Site-specific induction protocols",
      "Regular performance assessments",
      "Ongoing professional development",
      "Dedicated site supervisors",
    ],
    stat: "100%",
    statLabel: "Certified",
  },
  {
    icon: Leaf,
    label: "Sustainable\nPractices",
    title: "Sustainable Practices",
    description:
      "We use GECA-certified products, low-waste processes, and water-efficient methods across all operations. Our commitment to sustainability reduces environmental impact without compromising cleaning results — helping you meet ESG targets.",
    features: [
      "GECA-certified cleaning products",
      "70% less water usage",
      "Microfibre reusable systems",
      "Carbon footprint tracking",
      "Waste reduction programs",
      "Green Star compliant processes",
    ],
    stat: "70%",
    statLabel: "Less Water",
  },
  {
    icon: Cpu,
    label: "Advanced\nEquipment",
    title: "Advanced Equipment",
    description:
      "From autonomous floor scrubbers to HEPA-filtration systems, EagleWing deploys industry-leading equipment that delivers superior results with greater efficiency. Our technology-grade tools outperform traditional methods every time.",
    features: [
      "Autonomous floor scrubbers",
      "HEPA-filtration vacuums",
      "Electrostatic disinfection",
      "Battery-powered low-emission machines",
      "Microfibre flat-mop systems",
      "Industrial pressure washers",
    ],
    stat: "3x",
    statLabel: "Performance",
  },
];

function CapabilityModal({
  capability,
  onClose,
}: {
  capability: Capability;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#111111] border border-white/10 rounded-sm shadow-2xl animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/60 border border-white/20 rounded-full hover:border-[#C8A84E]/50 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Header */}
        <div className="p-8 pb-0">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#C8A84E] to-[#E8D48B] flex items-center justify-center">
              <capability.icon className="w-8 h-8 text-black" strokeWidth={1.5} />
            </div>
            <div>
              <span className="text-[#C8A84E] text-[10px] font-mono tracking-[0.3em] uppercase block mb-1">
                EagleWing Capability
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-white">
                {capability.title}
              </h3>
            </div>
          </div>

          {/* Stat highlight */}
          <div className="flex items-end gap-3 mb-6 pb-6 border-b border-white/10">
            <span className="font-display text-5xl sm:text-6xl text-[#C8A84E] leading-none">
              {capability.stat}
            </span>
            <span className="text-white/50 font-mono text-xs tracking-wider uppercase pb-2">
              {capability.statLabel}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 space-y-6">
          {/* Description */}
          <p className="text-white/70 font-body text-base leading-relaxed">
            {capability.description}
          </p>

          {/* Features */}
          <div>
            <h4 className="text-white font-display text-lg mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-[#C8A84E]" />
              Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {capability.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-4 h-4 text-[#C8A84E] mt-0.5 flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <span className="text-white/60 font-body text-sm leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => {
                onClose();
                setTimeout(() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C8A84E] to-[#E8D48B] text-black font-bold text-sm tracking-wider uppercase font-body hover:shadow-lg hover:shadow-[#C8A84E]/20 transition-all duration-300"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white/70 font-bold text-sm tracking-wider uppercase font-body hover:border-white/40 transition-all duration-300"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.08);
  const [selectedCapability, setSelectedCapability] = useState<Capability | null>(null);

  return (
    <>
      <section id="about" className="relative py-24 sm:py-32 bg-[#0a0a0a] overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(200,168,78,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,78,0.4) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Gold accent line top */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C8A84E]/30 to-transparent" />

        <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section label */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="h-px w-16 bg-gradient-to-r from-[#C8A84E] to-transparent" />
            <span className="text-[#C8A84E] text-[11px] font-mono tracking-[0.4em] uppercase">
              About Us
            </span>
          </div>

          {/* Headline area */}
          <div
            className={`text-center max-w-4xl mx-auto mb-16 sm:mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[0.9]">
                A Smarter Way{" "}
                <span className="text-gold-gradient">to Clean</span>
              </h2>
              <img
                src={WING_LOGO}
                alt="Intelligent Cleaning System"
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain opacity-70 hidden sm:block"
              />
            </div>
            <p className="text-white/50 font-body text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Traditional cleaning fails. We replaced guesswork with intelligence.
              <span className="text-white/80 font-medium"> Click any capability</span> to learn how.
            </p>
          </div>

          {/* Icon grid — 6 capabilities */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 mb-16">
            {capabilities.map((cap, i) => (
              <button
                key={cap.label}
                onClick={() => setSelectedCapability(cap)}
                className={`group flex flex-col items-center text-center cursor-pointer transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Icon circle */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-4">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-[#C8A84E]/50 transition-all duration-500" />
                  {/* Inner fill */}
                  <div className="absolute inset-2 rounded-full bg-white/[0.03] group-hover:bg-[#C8A84E]/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                    <cap.icon
                      className="w-8 h-8 sm:w-9 sm:h-9 text-white/50 group-hover:text-[#C8A84E] transition-colors duration-500"
                      strokeWidth={1.2}
                    />
                  </div>
                  {/* Pulse on hover */}
                  <div className="absolute inset-0 rounded-full border border-[#C8A84E]/0 group-hover:border-[#C8A84E]/20 group-hover:scale-125 transition-all duration-700 opacity-0 group-hover:opacity-100" />
                </div>

                {/* Label */}
                <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-white/60 font-body whitespace-pre-line leading-tight group-hover:text-[#C8A84E] transition-colors duration-300">
                  {cap.label}
                </span>

                {/* Stat teaser */}
                <span className="mt-2 text-[#C8A84E] font-display text-lg sm:text-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  {cap.stat}
                </span>
              </button>
            ))}
          </div>

          {/* Bottom tagline bar */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 border border-white/5 bg-white/[0.02] transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center sm:text-left">
              <span className="text-white font-display text-xl sm:text-2xl">
                20+ years. 500+ facilities. 98% retention.
              </span>
              <p className="text-white/40 font-body text-sm mt-1">
                Next-generation cleaning built on systems, not promises.
              </p>
            </div>
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-gradient-to-r from-[#C8A84E] to-[#E8D48B] text-black font-bold text-sm tracking-wider uppercase font-body hover:shadow-lg hover:shadow-[#C8A84E]/30 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Capability Modal */}
      {selectedCapability && (
        <CapabilityModal
          capability={selectedCapability}
          onClose={() => setSelectedCapability(null)}
        />
      )}
    </>
  );
}
