import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Droplets, Leaf, CheckCircle, X, ArrowRight, Sparkles } from "lucide-react";

const NANOCYN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/dNwLKZfEuqHVi87Tg2QnZX/nanocyn-original_cc7e7c97.png";

const benefits = [
  { icon: Shield, title: "Hospital-Grade", desc: "TGA-listed disinfectant & sanitiser" },
  { icon: Droplets, title: "Alcohol & Bleach Free", desc: "No harsh chemicals or strong odours" },
  { icon: Leaf, title: "Surface Safe", desc: "Gentle on most surfaces when used as directed" },
  { icon: Sparkles, title: "Broad Spectrum", desc: "Effective against viruses, bacteria, fungi & spores" },
];

const features = [
  "Hospital-grade disinfectant and sanitiser",
  "Effective against many viruses, bacteria, fungi, mould, and spores",
  "Safer alternative to harsh bleach and alcohol-based chemicals",
  "Low odour and suitable for regular use",
  "Gentle on most surfaces when used as directed",
  "Helps support a cleaner, healthier environment",
];

const applications = [
  "Door handles & railings",
  "Benches & workstations",
  "Bathrooms & kitchens",
  "Treatment rooms",
  "Toys & equipment",
  "Shared spaces & breakrooms",
];

export default function NanocynSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #C8A84E 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Gold accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A84E]/30 to-transparent" />

        <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-[#C8A84E] to-transparent" />
            <span className="text-[#C8A84E] text-xs font-mono tracking-[0.3em] uppercase">
              Disinfection Technology
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Content */}
            <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] mb-6">
                Nanocyn<span className="text-gold-gradient">.</span><br />
                <span className="text-3xl sm:text-4xl lg:text-5xl text-white/80">
                  Hospital-Grade Protection
                </span>
              </h2>

              <p className="text-lg text-white/60 font-body font-light leading-relaxed mb-8">
                Our goal is not just to make your space look clean, but to help make it <span className="text-white font-medium">hygienically clean</span>. By using Nanocyn, we provide a modern disinfection solution that is powerful on germs while being gentler than many traditional cleaning chemicals.
              </p>

              {/* Benefit cards */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((b, i) => (
                  <div
                    key={b.title}
                    className={`bg-white/[0.03] border border-white/[0.06] p-4 group hover:border-[#C8A84E]/30 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${i * 100 + 200}ms` }}
                  >
                    <b.icon className="w-6 h-6 text-[#C8A84E] mb-2" strokeWidth={1.5} />
                    <h4 className="text-white text-sm font-display tracking-wide mb-1">{b.title}</h4>
                    <p className="text-white/40 text-xs font-body">{b.desc}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="btn-gold px-8 py-4 text-sm font-bold tracking-wider uppercase font-body inline-flex items-center gap-2"
              >
                Learn More About Nanocyn
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right — Product Image */}
            <div className={`relative transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#C8A84E]/10 via-transparent to-transparent blur-3xl" />
              
              {/* Image container */}
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#C8A84E]/40" />
                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#C8A84E]/40" />
                
                <img
                  src={NANOCYN_IMG}
                  alt="Nanocyn Hospital-Grade Disinfectant & Sanitiser Product Range"
                  className="w-full h-auto object-contain relative z-10"
                />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#C8A84E] text-black px-6 py-2 z-20">
                <span className="text-xs font-bold tracking-wider uppercase font-mono">TGA Listed • Australian Made</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative bg-[#0A0A0A] border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 border border-white/10 hover:border-[#C8A84E]/50 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Hero image */}
            <div className="relative h-64 sm:h-80 overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#0A0A0A]">
              <img
                src={NANOCYN_IMG}
                alt="Nanocyn Product Range"
                className="w-full h-full object-contain p-8"
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-10">
              {/* Label */}
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-4 h-4 text-[#C8A84E]" />
                <span className="text-[#C8A84E] text-xs font-mono tracking-[0.2em] uppercase">
                  Disinfection Technology
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wide mb-4">
                Nanocyn Cleaning & Disinfection
              </h3>

              <p className="text-white/60 font-body leading-relaxed mb-6">
                We use Nanocyn, a hospital-grade disinfectant and sanitiser, to help protect homes, offices, clinics, and high-touch areas from harmful germs. Nanocyn is designed to kill a broad range of bacteria, viruses, fungi, mould, and spores on hard surfaces when used correctly.
              </p>

              <p className="text-white/60 font-body leading-relaxed mb-8">
                Unlike many harsh chemical cleaners, Nanocyn is alcohol-free, bleach-free, non-flammable, low odour, and gentle on most surfaces, making it a safer and more comfortable choice for everyday environments. It helps reduce the risk of cross-contamination without leaving strong chemical smells or harsh residues.
              </p>

              {/* Why We Choose Nanocyn */}
              <h4 className="font-display text-xl text-white tracking-wide mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#C8A84E]" />
                Why We Choose Nanocyn
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#C8A84E] mt-2 flex-shrink-0" />
                    <span className="text-white/70 text-sm font-body">{f}</span>
                  </div>
                ))}
              </div>

              {/* Applications */}
              <div className="bg-[#C8A84E]/5 border border-[#C8A84E]/20 p-6 mb-8">
                <h4 className="font-display text-lg text-white tracking-wide mb-3">
                  Ideal For High-Touch Areas
                </h4>
                <p className="text-white/50 text-sm font-body mb-4">
                  Nanocyn is especially useful for cleaning frequently touched areas such as:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {applications.map((a) => (
                    <span key={a} className="text-[#C8A84E] text-sm font-body">• {a}</span>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-white/30 text-xs font-body italic border-t border-white/5 pt-4">
                Used according to product label directions. Disinfection helps reduce germs on surfaces but does not treat or prevent medical infections. Sources: Australian TGA listing for Nanocyn Disinfectant & Sanitiser and EPA label information.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="#contact"
                  onClick={() => setShowModal(false)}
                  className="btn-gold px-8 py-4 text-sm font-bold tracking-wider uppercase font-body text-center"
                >
                  Enquire About Nanocyn
                </a>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-8 py-4 text-sm font-body tracking-wider uppercase text-white/50 border border-white/10 hover:border-white/30 transition-colors text-center"
                >
                  Back to Page
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
