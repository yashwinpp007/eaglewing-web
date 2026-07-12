import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/mlgzkajw";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const CTA_BG = "/images/other/cta-bg.webp";

const serviceOptions = [
  "Contract Cleaning",
  "AI Smart Cleaning",
  "Builders Cleaning",
  "Infection Control Cleaning",
  "Window Cleaning",
  "Steam Cleaning",
  "Floor Polishing",
  "Pressure Washing",
  "Washroom Hygiene Service",
  "Healthcare & Aged Care",
  "Other / Custom",
];

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          service: form.service,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.ok) {
        toast.success("Thank you! We'll be in touch within 24 hours.", {
          description: "Our team will review your enquiry and prepare a tailored response.",
        });
        setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again or call us directly.");
      }
    } catch {
      toast.error("Failed to send. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CTA_BG})` }}
        />
        <div className="absolute inset-0 bg-black/85" />
        <div className="absolute inset-0 carbon-pattern opacity-30" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-[#C8A84E] to-transparent" />
          <span className="text-[#C8A84E] text-xs font-mono tracking-[0.3em] uppercase">
            Get In Touch
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Contact info */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[0.95] mb-6">
              Ready to <span className="text-gold-gradient">Elevate</span> Your Facility?
            </h2>
            <p className="text-lg text-white/50 font-body font-light leading-relaxed mb-10">
              Get in touch for a no-obligation site audit and customised cleaning proposal. We'll show you exactly how EagleWing can transform your facility.
            </p>

            <div className="space-y-6">
              <a href="tel:1300362402" className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center border border-[#C8A84E]/20 group-hover:border-[#C8A84E]/50 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-[#C8A84E]" />
                </div>
                <div>
                  <span className="text-xs text-white/30 font-mono tracking-wider uppercase block">Phone</span>
                  <span className="text-white font-body group-hover:text-[#C8A84E] transition-colors">1300 362 402</span>
                </div>
              </a>

              <a href="mailto:info@eaglewing.com.au" className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center border border-[#C8A84E]/20 group-hover:border-[#C8A84E]/50 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-[#C8A84E]" />
                </div>
                <div>
                  <span className="text-xs text-white/30 font-mono tracking-wider uppercase block">Email</span>
                  <span className="text-white font-body group-hover:text-[#C8A84E] transition-colors">info@eaglewing.com.au</span>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-[#C8A84E]/20">
                  <MapPin className="w-5 h-5 text-[#C8A84E]" />
                </div>
                <div>
                  <span className="text-xs text-white/30 font-mono tracking-wider uppercase block">Office Address</span>
                  <span className="text-white font-body">8D, 1 Trade Park Drive, Tullamarine 3043</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-[#C8A84E]/20">
                  <MapPin className="w-5 h-5 text-[#C8A84E]" />
                </div>
                <div>
                  <span className="text-xs text-white/30 font-mono tracking-wider uppercase block">Service Areas</span>
                  <span className="text-white font-body">Melbourne & Sydney</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-[#C8A84E]/20">
                  <Clock className="w-5 h-5 text-[#C8A84E]" />
                </div>
                <div>
                  <span className="text-xs text-white/30 font-mono tracking-wider uppercase block">Response Time</span>
                  <span className="text-white font-body">Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <form onSubmit={handleSubmit} className="bg-[#111111] border border-white/5 p-6 sm:p-8 space-y-5">
              <h3 className="font-display text-2xl text-white tracking-wide mb-2">
                Request a Quote
              </h3>
              <p className="text-sm text-white/40 font-body mb-6">
                Fill out the form below and we'll prepare a tailored proposal for your facility.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-white/10 focus:border-[#C8A84E]/50 text-white placeholder:text-white/30 px-4 py-3 text-sm font-body outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-white/10 focus:border-[#C8A84E]/50 text-white placeholder:text-white/30 px-4 py-3 text-sm font-body outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-white/10 focus:border-[#C8A84E]/50 text-white placeholder:text-white/30 px-4 py-3 text-sm font-body outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-white/10 focus:border-[#C8A84E]/50 text-white placeholder:text-white/30 px-4 py-3 text-sm font-body outline-none transition-colors"
                />
              </div>

              <select
                aria-label="Service required"
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-[#0A0A0A] border border-white/10 focus:border-[#C8A84E]/50 text-white px-4 py-3 text-sm font-body outline-none transition-colors appearance-none"
              >
                <option value="" className="text-white/30">Select a Service</option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>

              <textarea
                placeholder="Tell us about your facility and requirements..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-[#0A0A0A] border border-white/10 focus:border-[#C8A84E]/50 text-white placeholder:text-white/30 px-4 py-3 text-sm font-body outline-none transition-colors resize-none"
              />

              <button
                type="submit"
                disabled={submitting}
                className="btn-gold w-full px-8 py-4 text-sm font-bold tracking-wider uppercase font-body flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {submitting ? "Sending..." : "Submit Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
