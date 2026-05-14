import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BarChart3, MapPin, Camera, Bell, Clock, Shield, X, CheckCircle, ArrowRight } from "lucide-react";

const DASHBOARD_IMG = "/images/technology/dashboard.webp";

interface FeatureDetail {
  icon: typeof BarChart3;
  label: string;
  desc: string;
  title: string;
  image: string;
  description: string;
  features: string[];
  benefits: string;
}

const features: FeatureDetail[] = [
  {
    icon: BarChart3,
    label: "Live Analytics Dashboard",
    desc: "Real-time performance metrics and cleaning compliance data at your fingertips.",
    title: "Live Analytics Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    description: "The EagleWing Command™ Live Analytics Dashboard gives facility managers complete real-time visibility into cleaning operations. Monitor task completion rates, team performance, compliance scores, and resource utilisation — all from a single unified interface. Our dashboard processes thousands of data points daily to surface actionable insights that drive continuous improvement.",
    features: [
      "Real-time task completion tracking across all zones",
      "Performance scorecards for individual teams and sites",
      "Cleaning compliance heatmaps by area and time",
      "Custom KPI dashboards tailored to your facility",
      "Historical trend analysis and predictive insights",
      "Exportable reports for stakeholder presentations",
    ],
    benefits: "Facility managers, operations directors, and procurement teams who need data-driven visibility into cleaning performance across single or multi-site portfolios.",
  },
  {
    icon: MapPin,
    label: "GPS & Geofence Tracking",
    desc: "Know exactly when your team arrives, where they clean, and when they leave.",
    title: "GPS & Geofence Tracking",
    image: "https://images.unsplash.com/photo-1569396116180-210c182bedb8?w=1200&q=80",
    description: "Our GPS and geofence technology provides irrefutable proof of service delivery. Every team member is tracked via secure geofencing — you know exactly when they arrive at your facility, which zones they service, how long they spend in each area, and when they depart. No more guesswork about whether your facility was actually cleaned.",
    features: [
      "Automatic clock-in/out via geofence boundaries",
      "Zone-level tracking showing exact areas serviced",
      "Time-on-site analytics for each cleaning session",
      "Arrival and departure notifications in real-time",
      "Route optimisation for multi-zone facilities",
      "Historical location data for compliance audits",
    ],
    benefits: "Multi-site facility managers, property groups, and organisations requiring proof of attendance and verified service delivery across distributed locations.",
  },
  {
    icon: Camera,
    label: "Photo Verification",
    desc: "Before and after photo proof of every task — automatically timestamped and logged.",
    title: "Photo Verification System",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
    description: "CleanProof™ photo verification eliminates disputes and builds trust. Our teams capture timestamped before-and-after photos of every critical task — automatically logged to your dashboard with GPS coordinates, time stamps, and zone identifiers. This creates an unbreakable chain of evidence that your facility meets the agreed cleaning standards.",
    features: [
      "Mandatory before/after photos for critical tasks",
      "Automatic GPS and timestamp metadata on every image",
      "AI-powered quality scoring on photo submissions",
      "Searchable photo archive by date, zone, or task",
      "Instant alerts when photo evidence is missing",
      "Client portal access to view all verification images",
    ],
    benefits: "Healthcare facilities, corporate headquarters, retail chains, and any organisation requiring documented proof of cleaning standards for compliance or quality assurance.",
  },
  {
    icon: Bell,
    label: "Instant Notifications",
    desc: "Get alerted the moment a task is completed, missed, or requires attention.",
    title: "Instant Notification System",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=80",
    description: "Stay informed without micromanaging. EagleWing Command™ sends intelligent notifications the moment something happens — task completions, missed schedules, quality alerts, or urgent requests. Customise your notification preferences by priority level, time of day, and communication channel to receive only what matters to you.",
    features: [
      "Real-time push notifications for task completions",
      "Escalation alerts for missed or overdue tasks",
      "Quality threshold warnings when scores drop",
      "Emergency request notifications with priority routing",
      "Customisable alert preferences by role and channel",
      "Daily/weekly summary digests for management oversight",
    ],
    benefits: "Busy facility managers, building owners, and operations teams who need to stay informed about cleaning performance without constant manual checking.",
  },
  {
    icon: Clock,
    label: "Automated Scheduling",
    desc: "AI-optimised schedules that adapt to your facility's real usage patterns.",
    title: "AI-Powered Automated Scheduling",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    description: "Our AI scheduling engine analyses your facility's real usage patterns — foot traffic, occupancy data, event calendars, and seasonal trends — to dynamically generate optimal cleaning schedules. The system continuously learns and adapts, ensuring resources are deployed where and when they're needed most, eliminating waste and maximising hygiene outcomes.",
    features: [
      "AI-driven schedule generation based on usage data",
      "Dynamic adjustments for events and peak periods",
      "Automatic resource allocation and team assignment",
      "Conflict detection and resolution for multi-zone sites",
      "Integration with building management systems",
      "Continuous optimisation through machine learning",
    ],
    benefits: "Large commercial facilities, smart buildings, universities, and organisations with variable occupancy patterns that need cleaning schedules to adapt automatically.",
  },
  {
    icon: Shield,
    label: "Compliance Reporting",
    desc: "Audit-ready reports for WHS, infection control, and quality assurance standards.",
    title: "Compliance & Audit Reporting",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    description: "Generate audit-ready compliance reports at the click of a button. EagleWing Command™ automatically tracks and documents all activities against WHS regulations, infection control standards, and your custom quality benchmarks. When auditors arrive, your evidence is already organised, timestamped, and ready for review — eliminating last-minute scrambles.",
    features: [
      "Automated WHS compliance documentation",
      "Infection control protocol tracking and reporting",
      "Custom quality assurance scorecards and benchmarks",
      "Audit trail with full chain-of-evidence documentation",
      "Regulatory standard mapping (AS/NZS, GECA, NABERS)",
      "One-click report generation for stakeholder reviews",
    ],
    benefits: "Healthcare facilities, government buildings, aged care providers, and any organisation subject to regulatory audits or accreditation requirements.",
  },
];

function FeatureModal({
  feature,
  onClose,
}: {
  feature: FeatureDetail;
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
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 sm:left-8">
            <div className="flex items-center gap-3 mb-2">
              <feature.icon className="w-6 h-6 text-[#C8A84E]" strokeWidth={1.5} />
              <span className="text-[#C8A84E] text-xs font-mono tracking-[0.2em] uppercase">
                EagleWing Command™
              </span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl text-white leading-tight">
              {feature.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Description */}
          <p className="text-white/70 font-body text-base sm:text-lg leading-relaxed">
            {feature.description}
          </p>

          {/* Features */}
          <div>
            <h4 className="text-white font-display text-xl mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-[#C8A84E]" />
              Key Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {feature.features.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8A84E] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-white/60 font-body text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits / Ideal for */}
          <div className="bg-[#C8A84E]/5 border border-[#C8A84E]/20 p-5 rounded-sm">
            <h4 className="text-[#C8A84E] font-display text-lg mb-2">Ideal For</h4>
            <p className="text-white/60 font-body text-sm leading-relaxed">
              {feature.benefits}
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C8A84E] to-[#E8D48B] text-black font-bold text-sm tracking-wider uppercase font-body hover:shadow-lg hover:shadow-[#C8A84E]/20 transition-all duration-300"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white/70 font-bold text-sm tracking-wider uppercase font-body hover:border-white/40 transition-all duration-300"
            >
              Back to Features
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TechnologySection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [selectedFeature, setSelectedFeature] = useState<FeatureDetail | null>(null);

  return (
    <>
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
              src="/images/logo/intelligent-cleaning-logo.png"
              alt="Intelligent Cleaning System"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto mb-4 opacity-80"
            />
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1a1a1a] leading-[0.95] mb-6">
              EagleWing <span className="text-gold-gradient">Command™</span>
            </h2>
            <p className="text-lg text-[#555] font-body font-light leading-relaxed">
              Our proprietary facility management platform gives you complete visibility over every aspect of your cleaning operations — in real time. Click any feature to learn more.
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

          {/* Feature grid — now clickable */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <button
                key={feature.label}
                onClick={() => setSelectedFeature(feature)}
                className={`text-left p-6 bg-white border border-black/5 hover:border-[#C8A84E]/30 hover:shadow-lg hover:shadow-[#C8A84E]/5 transition-all duration-500 group cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + i * 80}ms` }}
              >
                <div className="w-10 h-10 flex items-center justify-center border border-[#C8A84E]/20 group-hover:border-[#C8A84E]/50 group-hover:bg-[#C8A84E]/5 mb-4 transition-all duration-300">
                  <feature.icon className="w-5 h-5 text-[#C8A84E]" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg text-[#1a1a1a] tracking-wide mb-2 group-hover:text-[#C8A84E] transition-colors duration-300">
                  {feature.label}
                </h3>
                <p className="text-sm text-[#666] font-body font-light leading-relaxed mb-3">
                  {feature.desc}
                </p>
                <span className="text-xs font-mono tracking-wider text-[#C8A84E] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                  Learn More <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Modal */}
      {selectedFeature && (
        <FeatureModal
          feature={selectedFeature}
          onClose={() => setSelectedFeature(null)}
        />
      )}
    </>
  );
}
