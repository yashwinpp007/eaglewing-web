import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle } from "lucide-react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/dNwLKZfEuqHVi87Tg2QnZX/about-smart-systems-b4BPqcp5sQRJRRu2N7ArkY.webp";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#F5F5F0] overflow-hidden">
      {/* Large background number */}
      <div className="absolute -left-8 top-8 font-display text-[200px] sm:text-[280px] text-black/[0.03] leading-none select-none pointer-events-none">
        01
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-[#C8A84E] to-transparent" />
          <span className="text-[#C8A84E] text-xs font-mono tracking-[0.3em] uppercase">
            About Us
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1a1a1a] leading-[0.95] mb-8">
              A Smarter Way <span className="text-gold-gradient">to Clean</span>
            </h2>

            <div className="space-y-5 text-[#444] font-body text-base leading-relaxed">
              <p>
                EagleWing Facility Services is a next-generation commercial cleaning company built on intelligent systems, structured processes, and real accountability.
              </p>
              <p>
                With over 20 years of industry expertise, we understand that traditional cleaning models fail due to poor systems, lack of visibility, and inconsistent execution. <strong className="text-[#1a1a1a]">We've changed that.</strong>
              </p>
              <p>
                We combine trained professionals, advanced equipment, and our proprietary smart cleaning platform to deliver reliable, measurable, and high-standard cleaning outcomes.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {[
                "Intelligent systems, not guesswork",
                "Real-time tracking and verification",
                "20+ years of industry expertise",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8A84E] shrink-0" />
                  <span className="text-[#333] font-body text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative overflow-hidden group">
              <img
                src={ABOUT_IMG}
                alt="EagleWing professional cleaning team in action"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-0 left-0 w-16 h-px bg-[#C8A84E]/60" />
              <div className="absolute top-0 left-0 w-px h-16 bg-[#C8A84E]/60" />
              <div className="absolute bottom-0 right-0 w-16 h-px bg-[#C8A84E]/60" />
              <div className="absolute bottom-0 right-0 w-px h-16 bg-[#C8A84E]/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
