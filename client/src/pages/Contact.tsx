import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/mlgzkajw";
import { toast } from "sonner";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Send,
} from "lucide-react";

const services = [
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

export default function Contact() {
  const [formData, setFormData] = useState({
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
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.ok) {
        toast.success("Thank you! We'll be in touch within 24 hours.");
        setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
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
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(200,168,78,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,78,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container max-w-6xl relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-[#C8A84E]" />
            <span className="text-[#C8A84E] text-xs font-mono tracking-[0.3em] uppercase">
              Get in Touch
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-6">
            Let's Talk About{" "}
            <span className="text-[#C8A84E]">Your Facility.</span>
          </h1>
          <p className="text-white/60 font-body text-lg sm:text-xl max-w-3xl leading-relaxed">
            Whether you need a quote, a site audit, or just want to learn more about our
            intelligent cleaning systems — we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-24 border-t border-white/5">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl text-white mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <a
                    href="tel:1300362402"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-[#C8A84E]/10 border border-[#C8A84E]/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#C8A84E]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-white/40 text-xs font-mono tracking-wider uppercase block mb-1">
                        Phone
                      </span>
                      <span className="text-white font-body text-lg group-hover:text-[#C8A84E] transition-colors">
                        1300 362 402
                      </span>
                    </div>
                  </a>

                  <a
                    href="mailto:info@eaglewing.com.au"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-[#C8A84E]/10 border border-[#C8A84E]/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#C8A84E]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-white/40 text-xs font-mono tracking-wider uppercase block mb-1">
                        Email
                      </span>
                      <span className="text-white font-body text-lg group-hover:text-[#C8A84E] transition-colors">
                        info@eaglewing.com.au
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C8A84E]/10 border border-[#C8A84E]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#C8A84E]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-white/40 text-xs font-mono tracking-wider uppercase block mb-1">
                        Head Office
                      </span>
                      <span className="text-white font-body">
                        8D, 1 Trade Park Drive<br />
                        Tullamarine VIC 3043
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C8A84E]/10 border border-[#C8A84E]/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#C8A84E]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-white/40 text-xs font-mono tracking-wider uppercase block mb-1">
                        Office Hours
                      </span>
                      <span className="text-white font-body">
                        Mon – Fri: 7:00 AM – 6:00 PM<br />
                        <span className="text-white/50">24/7 Emergency Support</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="p-6 bg-[#C8A84E]/5 border border-[#C8A84E]/20">
                <h3 className="font-display text-lg text-[#C8A84E] mb-3">
                  Service Areas
                </h3>
                <p className="text-white/60 font-body text-sm leading-relaxed">
                  Melbourne CBD & Greater Melbourne, Sydney CBD & Greater Sydney,
                  and surrounding suburbs. Contact us to check availability in your area.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="p-8 sm:p-10 border border-white/10 bg-white/[0.02]">
                <h2 className="font-display text-2xl text-white mb-2">
                  Request a Quote
                </h2>
                <p className="text-white/50 font-body text-sm mb-8">
                  Fill in the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-white/40 text-xs font-mono tracking-wider uppercase block mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-body text-sm placeholder:text-white/30 focus:border-[#C8A84E]/50 focus:outline-none transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="text-white/40 text-xs font-mono tracking-wider uppercase block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-body text-sm placeholder:text-white/30 focus:border-[#C8A84E]/50 focus:outline-none transition-colors"
                        placeholder="john@company.com.au"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-white/40 text-xs font-mono tracking-wider uppercase block mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-body text-sm placeholder:text-white/30 focus:border-[#C8A84E]/50 focus:outline-none transition-colors"
                        placeholder="0413 000 000"
                      />
                    </div>
                    <div>
                      <label className="text-white/40 text-xs font-mono tracking-wider uppercase block mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-body text-sm placeholder:text-white/30 focus:border-[#C8A84E]/50 focus:outline-none transition-colors"
                        placeholder="Your Company Pty Ltd"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white/40 text-xs font-mono tracking-wider uppercase block mb-2">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-body text-sm focus:border-[#C8A84E]/50 focus:outline-none transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#111]">Select a Service</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-[#111]">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-white/40 text-xs font-mono tracking-wider uppercase block mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-body text-sm placeholder:text-white/30 focus:border-[#C8A84E]/50 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your facility, size, and requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C8A84E] to-[#E8D48B] text-black font-bold text-sm tracking-wider uppercase font-body hover:shadow-lg hover:shadow-[#C8A84E]/20 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    {submitting ? "Sending..." : "Submit Enquiry"}
                    {!submitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
