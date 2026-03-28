/*
 * DESIGN: Carbon Fiber Industrial Luxury
 * CTA Section: Strong closing statement with gold gradient, contact form.
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { toast } from "sonner";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch within 24 hours.", {
      description: "Our team will review your enquiry and respond promptly.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-[#0A0A0A]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A84E]/20 to-transparent" />
      <div className="absolute inset-0 carbon-pattern opacity-20" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA statement */}
        <div
          className={`text-center max-w-4xl mx-auto mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-white leading-[0.95] mb-6">
            STOP MANAGING CLEANERS.
            <br />
            <span className="text-gold-gradient">START MANAGING OUTCOMES.</span>
          </h2>
          <p className="text-lg text-white/50 font-body font-light leading-relaxed max-w-2xl mx-auto">
            Ready to experience the EagleWing difference? Get in touch for a
            complimentary site assessment and custom cleaning proposal.
          </p>
        </div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h3 className="font-display text-2xl text-white tracking-wide mb-8">
              GET IN TOUCH
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center border border-[#C8A84E]/20 group-hover:border-[#C8A84E]/50 transition-colors shrink-0">
                  <Phone className="w-4 h-4 text-[#C8A84E]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-white/30 tracking-[0.2em] uppercase mb-1">
                    Phone
                  </p>
                  <p className="text-white/70 font-body">1300 EAGLE WING</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center border border-[#C8A84E]/20 group-hover:border-[#C8A84E]/50 transition-colors shrink-0">
                  <Mail className="w-4 h-4 text-[#C8A84E]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-white/30 tracking-[0.2em] uppercase mb-1">
                    Email
                  </p>
                  <p className="text-white/70 font-body">
                    info@eaglewingservices.com.au
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center border border-[#C8A84E]/20 group-hover:border-[#C8A84E]/50 transition-colors shrink-0">
                  <MapPin className="w-4 h-4 text-[#C8A84E]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-white/30 tracking-[0.2em] uppercase mb-1">
                    Service Area
                  </p>
                  <p className="text-white/70 font-body">
                    Australia-wide coverage
                  </p>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="text-sm text-white/30 font-body italic">
                "Rising Above Standards"
              </p>
              <p className="text-xs text-white/20 font-mono tracking-wider mt-2">
                EagleWing Facility Services
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] font-mono text-white/30 tracking-[0.2em] uppercase block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-[#111111] border border-white/10 px-4 py-3.5 text-white/80 font-body text-sm focus:border-[#C8A84E]/50 focus:outline-none transition-colors placeholder:text-white/20"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-white/30 tracking-[0.2em] uppercase block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-[#111111] border border-white/10 px-4 py-3.5 text-white/80 font-body text-sm focus:border-[#C8A84E]/50 focus:outline-none transition-colors placeholder:text-white/20"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] font-mono text-white/30 tracking-[0.2em] uppercase block mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-[#111111] border border-white/10 px-4 py-3.5 text-white/80 font-body text-sm focus:border-[#C8A84E]/50 focus:outline-none transition-colors placeholder:text-white/20"
                    placeholder="04XX XXX XXX"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-white/30 tracking-[0.2em] uppercase block mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full bg-[#111111] border border-white/10 px-4 py-3.5 text-white/80 font-body text-sm focus:border-[#C8A84E]/50 focus:outline-none transition-colors placeholder:text-white/20"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono text-white/30 tracking-[0.2em] uppercase block mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-[#111111] border border-white/10 px-4 py-3.5 text-white/80 font-body text-sm focus:border-[#C8A84E]/50 focus:outline-none transition-colors resize-none placeholder:text-white/20"
                  placeholder="Tell us about your facility and cleaning requirements..."
                />
              </div>

              <button
                type="submit"
                className="btn-gold px-8 py-4 text-sm font-bold tracking-wider uppercase font-body flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <Send className="w-4 h-4" />
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
