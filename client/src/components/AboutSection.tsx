import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect, useRef } from "react";
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
  Sparkles,
} from "lucide-react";

const WING_LOGO = "/images/logo/intelligent-cleaning-logo.png";

interface Capability {
  icon: typeof Brain;
  label: string;
  title: string;
  image: string;
  description: string;
  features: string[];
  stat: string;
  statLabel: string;
  ideal: string;
  color: string;
}

const CAPABILITY_IMAGES = {
  intelligent: "/images/pillars/smart-system.webp",
  tracking: "/images/technology/dashboard.webp",
  verified: "/images/pillars/cleanproof.webp",
  teams: "/images/hero/hero-slide-3.webp",
  sustainable: "/images/pillars/sustainable.webp",
  equipment: "/images/other/eaglewing-equipment.png",
};

const capabilities: Capability[] = [
  {
    icon: Brain,
    label: "Intelligent Systems",
    title: "Intelligent Systems",
    image: CAPABILITY_IMAGES.intelligent,
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
    ideal: "Any facility seeking data-driven cleaning optimisation, reduced costs, and consistent high-quality outcomes through intelligent automation.",
    color: "#C8A84E",
  },
  {
    icon: Radar,
    label: "Real-Time Tracking",
    title: "Real-Time Tracking",
    image: CAPABILITY_IMAGES.tracking,
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
    ideal: "Facility managers who need full transparency and real-time oversight of cleaning operations across multiple sites.",
    color: "#C8A84E",
  },
  {
    icon: ShieldCheck,
    label: "Verified Results",
    title: "Verified Results",
    image: CAPABILITY_IMAGES.verified,
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
    ideal: "Organisations requiring audit-ready documentation, compliance evidence, and measurable proof of cleaning standards.",
    color: "#C8A84E",
  },
  {
    icon: Users,
    label: "Trained Teams",
    title: "Trained & Verified Teams",
    image: CAPABILITY_IMAGES.teams,
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
    ideal: "High-security environments, healthcare facilities, and any site where trust, reliability, and professional conduct are non-negotiable.",
    color: "#C8A84E",
  },
  {
    icon: Leaf,
    label: "Sustainable Practices",
    title: "Sustainable Practices",
    image: CAPABILITY_IMAGES.sustainable,
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
    ideal: "Organisations with ESG commitments, Green Star-rated buildings, and facilities seeking to reduce their environmental footprint.",
    color: "#C8A84E",
  },
  {
    icon: Cpu,
    label: "Advanced Equipment",
    title: "Advanced Equipment",
    image: CAPABILITY_IMAGES.equipment,
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
    ideal: "Large-scale facilities, warehouses, hospitals, and any environment where traditional cleaning methods fall short of performance requirements.",
    color: "#C8A84E",
  },
];

function AnimatedCounter({ value, isVisible }: { value: string; isVisible: boolean }) {
  const [display, setDisplay] = useState("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const numericMatch = value.match(/(\d+)/);
    if (!numericMatch) {
      setDisplay(value);
      return;
    }

    const target = parseInt(numericMatch[1]);
    const suffix = value.replace(numericMatch[1], "");
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      setDisplay(current + suffix);
      if (step >= steps) {
        clearInterval(timer);
        setDisplay(value);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return <span>{isVisible ? display : "0"}</span>;
}

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
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#111111] border border-white/10 rounded-sm shadow-2xl animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/60 border border-white/20 rounded-full hover:border-[#C8A84E]/50 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Hero image */}
        <div className="relative w-full aspect-[16/7] overflow-hidden">
          <img
            src={capability.image}
            alt={capability.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 sm:left-8">
            <div className="flex items-center gap-3 mb-2">
              <capability.icon className="w-6 h-6 text-[#C8A84E]" strokeWidth={1.5} />
              <span className="text-[#C8A84E] text-xs font-mono tracking-[0.2em] uppercase">
                EagleWing Capability
              </span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl text-white leading-tight">
              {capability.title}
            </h3>
          </div>
          {/* Stat badge on image */}
          <div className="absolute top-6 left-6 sm:left-8 bg-black/60 backdrop-blur-sm border border-[#C8A84E]/30 px-4 py-2">
            <span className="font-display text-2xl text-[#C8A84E]">{capability.stat}</span>
            <span className="text-white/50 font-mono text-[10px] tracking-wider uppercase ml-2">{capability.statLabel}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Description */}
          <p className="text-white/70 font-body text-base sm:text-lg leading-relaxed">
            {capability.description}
          </p>

          {/* Features */}
          <div>
            <h4 className="text-white font-display text-xl mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-[#C8A84E]" />
              Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {capability.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8A84E] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-white/60 font-body text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal for */}
          <div className="bg-[#C8A84E]/5 border border-[#C8A84E]/20 p-5 rounded-sm">
            <h4 className="text-[#C8A84E] font-display text-lg mb-2">Ideal For</h4>
            <p className="text-white/60 font-body text-sm leading-relaxed">
              {capability.ideal}
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
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
              Back to Capabilities
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
      <section id="about" className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#fefcf7] via-white to-[#fefcf7]">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C8A84E] to-transparent" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#C8A84E]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#C8A84E]/5 rounded-full blur-3xl pointer-events-none" />

        <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div
            className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8A84E]/10 border border-[#C8A84E]/20 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-[#C8A84E]" />
              <span className="text-[#C8A84E] text-xs font-bold tracking-[0.2em] uppercase font-body">
                Why EagleWing
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a] leading-[0.9] mb-6">
              A Smarter Way{" "}
              <span className="relative inline-block">
                <span className="text-gold-gradient">to Clean</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="#C8A84E" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
                </svg>
              </span>
            </h2>

            <p className="text-[#555] font-body text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              We replaced guesswork with intelligence.{" "}
              <span className="text-[#1a1a1a] font-semibold">Tap any capability</span> to see how.
            </p>
          </div>

          {/* Capability Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-16">
            {capabilities.map((cap, i) => (
              <button
                key={cap.label}
                onClick={() => setSelectedCapability(cap)}
                className={`group relative p-6 sm:p-8 text-left cursor-pointer transition-all duration-700 bg-white border border-[#e8e4dc] hover:border-[#C8A84E] hover:shadow-xl hover:shadow-[#C8A84E]/10 hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C8A84E] to-[#E8D48B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 mb-5 bg-gradient-to-br from-[#C8A84E] to-[#E8D48B] flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-[#C8A84E]/20 transition-all duration-500 group-hover:scale-110">
                  <cap.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={1.5} />
                </div>

                {/* Label */}
                <h3 className="font-display text-base sm:text-lg text-[#1a1a1a] mb-2 group-hover:text-[#C8A84E] transition-colors duration-300">
                  {cap.label}
                </h3>

                {/* Stat */}
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-2xl sm:text-3xl text-[#C8A84E]">
                    <AnimatedCounter value={cap.stat} isVisible={isVisible} />
                  </span>
                  <span className="text-[#888] font-body text-xs uppercase tracking-wider">
                    {cap.statLabel}
                  </span>
                </div>

                {/* Arrow indicator */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-8 h-8 flex items-center justify-center rounded-full bg-[#C8A84E]/0 group-hover:bg-[#C8A84E]/10 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-[#C8A84E] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
                </div>
              </button>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div
            className={`relative overflow-hidden p-8 sm:p-10 bg-[#1a1a1a] transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #C8A84E 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }} />

            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6 text-center sm:text-left">
                <img src={WING_LOGO} alt="EagleWing" className="w-14 h-14 object-contain hidden sm:block" />
                <div>
                  <span className="text-white font-display text-xl sm:text-2xl block">
                    20+ years. 500+ facilities. 98% retention.
                  </span>
                  <p className="text-white/50 font-body text-sm mt-1">
                    Next-generation cleaning built on systems, not promises.
                  </p>
                </div>
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
        </div>
      </section>

      {selectedCapability && (
        <CapabilityModal
          capability={selectedCapability}
          onClose={() => setSelectedCapability(null)}
        />
      )}
    </>
  );
}
