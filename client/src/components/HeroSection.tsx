import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from "lucide-react";

const slides = [
  {
    bg: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/BkqAKKXyrgkSN3D58Kw86s/hero-slide-1-PAMy5u6G4uJYNCY7W8jrdN.webp",
    label: "Intelligent Facility Management",
    headline: ["Intelligent Cleaning.", "Measurable Results."],
    description: "We use smart systems, real data, and advanced cleaning methods to deliver consistent, high-quality results across every facility.",
    cta1: { label: "Get a Quote", icon: ArrowRight, href: "#contact" },
    cta2: { label: "Book a Site Audit", icon: Calendar, href: "#contact" },
  },
  {
    bg: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/BkqAKKXyrgkSN3D58Kw86s/hero-slide-2-QH2BeyCMeiYXQYxHEwDRGR.webp",
    label: "Premium Facility Standards",
    headline: ["Your Facility Deserves", "Better Than Clean."],
    description: "EagleWing delivers a higher standard — precision-maintained environments that reflect your brand, protect your people, and impress your clients.",
    cta1: { label: "See Our Services", icon: ArrowRight, href: "#services" },
    cta2: { label: "Get a Quote", icon: ArrowRight, href: "#contact" },
  },
  {
    bg: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/dNwLKZfEuqHVi87Tg2QnZX/hero-modern-equipment-NKnFLgEwFUcuTYusKt8KZv.webp",
    label: "Trained & Verified Teams",
    headline: ["People You Can", "Trust. Every Time."],
    description: "Every EagleWing team member is background-checked, formally trained, and verified. We don't just send cleaners — we deploy professionals.",
    cta1: { label: "Meet Our Process", icon: ArrowRight, href: "#process" },
    cta2: { label: "Book a Site Audit", icon: Calendar, href: "#contact" },
  },
  {
    bg: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/BkqAKKXyrgkSN3D58Kw86s/hero-slide-4-6cN5uKySQpsKifKuyCdhuM.webp",
    label: "Melbourne & Sydney",
    headline: ["Serving Australia's", "Leading Businesses."],
    description: "From corporate towers to medical centres and schools — EagleWing manages facilities across Melbourne and Sydney with consistent, data-driven results.",
    cta1: { label: "Where We Clean", icon: ArrowRight, href: "#sectors" },
    cta2: { label: "Get a Quote", icon: ArrowRight, href: "#contact" },
  },
  {
    bg: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/BkqAKKXyrgkSN3D58Kw86s/hero-slide-5-JNQKgwvVyX6SxYoLTVjCwp.webp",
    label: "Infection Control & Hygiene",
    headline: ["Medical-Grade Clean.", "Zero Compromise."],
    description: "Our infection control protocols meet the highest hygiene standards — protecting staff, patients, and visitors in healthcare, education, and high-traffic facilities.",
    cta1: { label: "Infection Control", icon: ArrowRight, href: "#services" },
    cta2: { label: "Book a Site Audit", icon: Calendar, href: "#contact" },
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const slide = slides[current];

  return (
    <section id="home" className="relative w-full overflow-hidden bg-black">
      <div className="relative h-[100svh] min-h-[600px] max-h-[850px] sm:min-h-[700px] sm:max-h-none">
        {/* Background slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
          </motion.div>
        </AnimatePresence>

        {/* Carbon pattern */}
        <div className="absolute inset-0 carbon-pattern opacity-30 z-[1]" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full px-4 sm:px-6 lg:px-12 pt-28 sm:pt-40 pb-32 sm:pb-0">
            <div className="max-w-2xl">
              {/* Label */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`label-${current}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3 mb-4 sm:mb-8"
                >
                  <div className="h-px w-12 bg-gradient-to-r from-[#C8A84E] to-transparent" />
                  <span className="text-[#C8A84E] text-xs font-mono tracking-[0.3em] uppercase">
                    {slide.label}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Headline */}
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`headline-${current}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-4 sm:mb-6"
                >
                  <span className="text-white">{slide.headline[0]}</span>
                  <br />
                  <span className="text-gold-gradient">{slide.headline[1]}</span>
                </motion.h1>
              </AnimatePresence>

              {/* Description */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${current}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-base sm:text-xl text-white/60 font-body font-light max-w-xl mb-6 sm:mb-10 leading-relaxed"
                >
                  {slide.description}
                </motion.p>
              </AnimatePresence>

              {/* CTAs */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`cta-${current}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                >
                  <button
                    onClick={() => scrollTo(slide.cta1.href)}
                    className="btn-gold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold tracking-wider uppercase font-body flex items-center gap-2 justify-center"
                  >
                    {slide.cta1.label}
                    <slide.cta1.icon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scrollTo(slide.cta2.href)}
                    className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold tracking-wider uppercase font-body text-white border border-white/20 hover:border-[#C8A84E]/60 hover:text-[#C8A84E] transition-all duration-300 bg-white/5 backdrop-blur-sm flex items-center gap-2 justify-center"
                  >
                    <slide.cta2.icon className="w-4 h-4" />
                    {slide.cta2.label}
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Stats bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="px-4 sm:px-6 lg:px-12 pb-4 sm:pb-8">
            <div className="flex gap-6 sm:gap-12 pt-4 sm:pt-8 border-t border-white/10">
              {[
                { value: "20+", label: "Years Experience" },
                { value: "500+", label: "Facilities Managed" },
                { value: "98%", label: "Client Retention" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl sm:text-4xl text-[#C8A84E]">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/40 font-mono tracking-wider uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 sm:hidden">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-[#C8A84E] w-6" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Slide number + dots (desktop) */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden sm:flex flex-col items-center gap-3">
          <span className="text-[#C8A84E] font-mono text-xs tracking-wider">
            {String(current + 1).padStart(2, "0")}
          </span>
          <div className="flex flex-col gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-1.5 transition-all duration-300 ${
                  i === current ? "h-8 bg-[#C8A84E]" : "h-3 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
          <span className="text-white/30 font-mono text-xs tracking-wider">
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        {/* Prev/Next arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center border border-white/10 hover:border-[#C8A84E]/50 text-white/50 hover:text-[#C8A84E] transition-all duration-300 hidden sm:flex"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-20 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center border border-white/10 hover:border-[#C8A84E]/50 text-white/50 hover:text-[#C8A84E] transition-all duration-300 hidden sm:flex"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
