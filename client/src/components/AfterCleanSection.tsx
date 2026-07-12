import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, FlaskConical, BarChart3, CheckCircle2, AlertTriangle, TrendingUp, FileText, Target } from "lucide-react";

const AFTERCLEAN_HERO = "/images/other/afterclean-hero.webp";
const AFTERCLEAN_TESTING = "/images/other/afterclean-testing.webp";

const auditIncludes = [
  { icon: FlaskConical, text: "Scheduled hygiene audits (quarterly or as agreed)" },
  { icon: Target, text: "Surface bacterial testing (ATP bioluminescence)" },
  { icon: AlertTriangle, text: "Focus on high-risk areas (toilets, kitchens, touchpoints)" },
  { icon: BarChart3, text: "Hygiene scoring and benchmarking" },
  { icon: FileText, text: "Detailed audit reports with findings" },
  { icon: TrendingUp, text: "Ongoing tracking of hygiene performance" },
];

const clientBenefits = [
  "Confidence that the site is hygienically safe",
  "Data-backed proof of cleaning effectiveness",
  "Reduced complaints and health risks",
  "Accountability and transparency",
  "Continuous improvement through measurable results",
];

const packages = [
  {
    name: "Essential",
    tier: "Standard Cleaning",
    afterclean: false,
    description: "Quality contract cleaning without hygiene audit program",
    highlight: false,
  },
  {
    name: "Professional",
    tier: "Enhanced Cleaning",
    afterclean: "optional",
    description: "Quarterly After Clean\u2122 Audit available as optional add-on",
    highlight: false,
  },
  {
    name: "Intelligent",
    tier: "Premium Cleaning",
    afterclean: true,
    description: "After Clean\u2122 built-in with quarterly hygiene audits and enhanced reporting",
    highlight: true,
  },
];

export default function AfterCleanSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.05);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.05);
  const { ref: packagesRef, isVisible: packagesVisible } = useScrollAnimation(0.05);

  return (
    <section id="afterclean" className="relative py-24 sm:py-32 bg-[#070B10] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#070B10] to-[#0A0A0A]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(100,180,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(100,180,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={headerRef} className={`transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-[#4DA8DA] to-transparent" />
            <span className="text-[#4DA8DA] text-xs font-mono tracking-[0.3em] uppercase">
              Premium Hygiene Program
            </span>
          </div>

          {/* Hero banner */}
          <div className="relative rounded-sm overflow-hidden mb-16">
            <img
                  loading="lazy"
              src={AFTERCLEAN_HERO}
              alt="After Clean™ Hygiene Audit in progress"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070B10]/90 via-[#070B10]/60 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 sm:px-12 lg:px-16 max-w-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-[#4DA8DA]" />
                  <span className="text-[#4DA8DA] text-xs font-mono tracking-[0.3em] uppercase">
                    Hygiene Audit Program
                  </span>
                </div>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] mb-4">
                  AFTER{" "}
                  <span className="bg-gradient-to-r from-[#4DA8DA] to-[#7BC4E8] bg-clip-text text-transparent">
                    CLEAN™
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-white/70 font-body font-light italic">
                  Measured. Verified. Safe.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main content grid */}
        <div ref={contentRef} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 transition-all duration-700 delay-200 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Left: Description */}
          <div>
            <h3 className="font-display text-2xl sm:text-3xl text-white mb-6">
              Clean is not what it looks like.
              <br />
              <span className="text-[#4DA8DA]">Clean is what we can measure.</span>
            </h3>
            <p className="text-white/50 font-body font-light leading-relaxed mb-6">
              Many facilities appear clean but still carry harmful bacteria on high-touch surfaces. This leads to health risks, complaints, and lack of accountability from cleaning providers.
            </p>
            <p className="text-white/50 font-body font-light leading-relaxed mb-8">
              Our After Clean™ program is a structured hygiene audit system that measures bacterial levels on surfaces to ensure your facility is safe, not just clean. Using scheduled testing and detailed reporting, we identify hidden risks, verify cleaning performance, and provide clear data on hygiene standards across your site.
            </p>
            <p className="text-white/70 font-body leading-relaxed border-l-2 border-[#4DA8DA] pl-4">
              This transforms cleaning from a visual task into a <strong className="text-white">measurable standard</strong>.
            </p>
          </div>

          {/* Right: What's included */}
          <div>
            <div className="bg-[#0D1117] border border-[#4DA8DA]/20 rounded-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#4DA8DA]/10 flex items-center justify-center">
                  <FlaskConical className="w-5 h-5 text-[#4DA8DA]" />
                </div>
                <h4 className="font-display text-xl text-white">What After Clean™ Includes</h4>
              </div>
              <div className="space-y-4">
                {auditIncludes.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-[#4DA8DA] mt-0.5 flex-shrink-0" />
                    <span className="text-white/60 font-body font-light text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* ATP device image */}
              <div className="mt-6 rounded-sm overflow-hidden border border-[#4DA8DA]/10">
                <img
                  loading="lazy"
                  src={AFTERCLEAN_TESTING}
                  alt="ATP testing device showing PASS result"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Client benefits */}
        <div className="mb-20">
          <h3 className="font-display text-2xl text-white text-center mb-8">
            Why Clients Choose After Clean™
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {clientBenefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-[#0D1117] border border-[#4DA8DA]/10 rounded-sm p-5 text-center hover:border-[#4DA8DA]/30 transition-colors duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-[#4DA8DA] mx-auto mb-3" />
                <p className="text-white/60 font-body font-light text-sm">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Package positioning */}
        <div ref={packagesRef} className={`transition-all duration-700 delay-300 ${packagesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="font-display text-2xl sm:text-3xl text-white text-center mb-3">
            Package <span className="text-[#4DA8DA]">Positioning</span>
          </h3>
          <p className="text-white/40 font-body font-light text-center mb-10 max-w-xl mx-auto">
            After Clean™ is a premium add-on — not a standard inclusion. Choose the level that suits your facility.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-sm p-8 border transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-gradient-to-b from-[#4DA8DA]/10 to-[#0D1117] border-[#4DA8DA]/40 scale-[1.02]"
                    : "bg-[#0D1117] border-white/10 hover:border-white/20"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4DA8DA] text-black text-xs font-mono font-bold tracking-wider px-4 py-1 rounded-full">
                    RECOMMENDED
                  </div>
                )}
                <div className="text-center">
                  <span className="text-[#4DA8DA] text-xs font-mono tracking-[0.2em] uppercase block mb-2">
                    {pkg.tier}
                  </span>
                  <h4 className="font-display text-2xl text-white mb-4">{pkg.name}</h4>
                  <div className="mb-4">
                    {pkg.afterclean === true && (
                      <span className="inline-flex items-center gap-1.5 bg-[#4DA8DA]/10 text-[#4DA8DA] text-xs font-mono px-3 py-1.5 rounded-full">
                        <Shield className="w-3.5 h-3.5" />
                        After Clean™ Included
                      </span>
                    )}
                    {pkg.afterclean === "optional" && (
                      <span className="inline-flex items-center gap-1.5 bg-[#C8A84E]/10 text-[#C8A84E] text-xs font-mono px-3 py-1.5 rounded-full">
                        <Shield className="w-3.5 h-3.5" />
                        Optional Add-on
                      </span>
                    )}
                    {pkg.afterclean === false && (
                      <span className="inline-flex items-center gap-1.5 bg-white/5 text-white/40 text-xs font-mono px-3 py-1.5 rounded-full">
                        Not Included
                      </span>
                    )}
                  </div>
                  <p className="text-white/40 font-body font-light text-sm">{pkg.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
