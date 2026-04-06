/*
 * DESIGN: Carbon Fiber Industrial Luxury
 * Hero: Full-screen dark hero with cinematic background image, bold Bebas Neue headline,
 * gold gradient text, diagonal bottom clip. Two CTAs.
 */
import { motion } from "framer-motion";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/dNwLKZfEuqHVi87Tg2QnZX/hero-modern-equipment-NKnFLgEwFUcuTYusKt8KZv.webp";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
      </div>

      {/* Carbon pattern overlay */}
      <div className="absolute inset-0 carbon-pattern opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 pb-24 w-full">
        <div className="max-w-3xl">
          {/* Micro label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-gradient-to-r from-[#C8A84E] to-transparent" />
            <span className="text-[#C8A84E] text-xs font-mono tracking-[0.3em] uppercase">
              Next-Gen Facility Solutions
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-6"
          >
            <span className="text-white">CLEANING,</span>
            <br />
            <span className="text-gold-gradient">REENGINEERED.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-lg sm:text-xl text-white/60 font-body font-light max-w-xl mb-10 leading-relaxed"
          >
            Smart. Accountable. Future-ready cleaning solutions for commercial
            properties that demand more than the industry standard.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-gold px-8 py-4 text-base font-bold tracking-wider uppercase font-body"
            >
              Get a Quote
            </button>
            <button
              onClick={() => scrollTo("#how-it-works")}
              className="px-8 py-4 text-base font-bold tracking-wider uppercase font-body text-white border border-white/20 hover:border-[#C8A84E]/60 hover:text-[#C8A84E] transition-all duration-300 bg-white/5 backdrop-blur-sm"
            >
              Book a Site Walk
            </button>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex gap-8 sm:gap-12 mt-16 pt-8 border-t border-white/10"
          >
            {[
              { value: "20+", label: "Years Experience" },
              { value: "500+", label: "Sites Managed" },
              { value: "99.4%", label: "Client Retention" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl sm:text-4xl text-[#C8A84E]">
                  {stat.value}
                </div>
                <div className="text-xs text-white/40 font-mono tracking-wider uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/30 font-mono tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-[#C8A84E] to-transparent"
        />
      </motion.div>
    </section>
  );
}
