import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Brian Sylvester brings unmatched passion, professionalism, and innovation to the cleaning industry. His attention to detail, leadership, and commitment to high standards make him someone you can truly rely on.",
    name: "Siva Sadasivam",
    title: "Principal",
    company: "D'Omkara Accountants",
    stars: 5,
  },
  {
    quote: "We switched to EagleWing after years of frustration with inconsistent cleaning. The difference was immediate. Their CleanProof\u2122 system means we always know exactly what's been done.",
    name: "James Chen",
    title: "Operations Director",
    company: "Pacific Health Network",
    stars: 5,
  },
  {
    quote: "The StrikeTeam response during our flood emergency was incredible. They were on-site within hours and had us operational the next day. You can't put a price on that kind of reliability.",
    name: "Rachel Thompson",
    title: "Centre Manager",
    company: "Westfield Shopping Centres",
    stars: 5,
  },
  {
    quote: "As a school principal, hygiene and safety are non-negotiable. EagleWing's infection control protocols and child-safe products give me complete peace of mind.",
    name: "David Nguyen",
    title: "Principal",
    company: "Bayside Grammar School",
    stars: 5,
  },
  {
    quote: "Their technology platform is genuinely impressive. Real-time dashboards, photo verification, automated reporting \u2014 it's exactly what modern facility management should look like.",
    name: "Amanda Foster",
    title: "Property Manager",
    company: "Knight Frank Australia",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section className="relative py-24 sm:py-32 bg-[#F5F3EE] overflow-hidden">
      {/* Background number */}
      <div className="absolute -left-8 top-8 font-display text-[200px] sm:text-[280px] text-black/[0.03] leading-none select-none pointer-events-none">
        07
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-[#C8A84E] to-transparent" />
          <span className="text-[#C8A84E] text-xs font-mono tracking-[0.3em] uppercase">
            Client Testimonials
          </span>
        </div>

        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1a1a1a] leading-[0.95] mb-6">
            What Our Clients <span className="text-gold-gradient">Say</span>
          </h2>
        </div>

        {/* Testimonial card */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative bg-white p-8 sm:p-12 border border-black/5 shadow-lg shadow-black/5">
            <Quote className="w-10 h-10 text-[#C8A84E]/20 absolute top-6 left-6" />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C8A84E] text-[#C8A84E]" />
                ))}
              </div>

              <blockquote className="text-lg sm:text-xl text-[#333] font-body font-light leading-relaxed italic mb-8">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white font-display text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[#1a1a1a] font-body text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-[#888] font-body">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>

            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-12 h-px bg-[#C8A84E]/40" />
            <div className="absolute top-0 left-0 w-px h-12 bg-[#C8A84E]/40" />
            <div className="absolute bottom-0 right-0 w-12 h-px bg-[#C8A84E]/40" />
            <div className="absolute bottom-0 right-0 w-px h-12 bg-[#C8A84E]/40" />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 flex items-center justify-center border border-[#1a1a1a]/10 hover:border-[#C8A84E]/50 text-[#666] hover:text-[#C8A84E] transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-[#C8A84E] w-6" : "bg-[#1a1a1a]/20 hover:bg-[#1a1a1a]/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 flex items-center justify-center border border-[#1a1a1a]/10 hover:border-[#C8A84E]/50 text-[#666] hover:text-[#C8A84E] transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
