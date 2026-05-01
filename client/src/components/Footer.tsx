import { useState } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";
import { Facebook, Instagram, Linkedin, Youtube, Send } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/dNwLKZfEuqHVi87Tg2QnZX/eaglewing-logo-final_4f0a6c60.webp";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Where We Clean", href: "#sectors" },
  { label: "Technology", href: "#technology" },
  { label: "Our Process", href: "#process" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Contract Cleaning",
  "AI Smart Cleaning",
  "Builders Cleaning",
  "Infection Control",
  "Window Cleaning",
  "Steam Cleaning",
  "Floor Polishing",
  "Pressure Washing",
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Subscribed! You'll receive our latest updates.");
    setEmail("");
  };

  const [, navigate] = useLocation();

  const scrollTo = (href: string) => {
    if (href === "#") return;
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }
    // If we're not on the home page, navigate home first
    if (window.location.pathname !== "/") {
      navigate("/" + href);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-white/5">
      <div className="absolute inset-0 carbon-pattern opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1 — Logo & about */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img
                src={LOGO_URL}
                alt="EagleWing Facility Services"
                className="h-28 w-auto object-contain mb-6"
              />
            </a>
            <p className="text-sm text-white/40 font-body leading-relaxed mb-4">
              Next-generation commercial cleaning and facility management. Intelligent systems. Measurable results. Rising above standards.
            </p>
            <div className="space-y-2 mb-6">
              <a href="tel:1300362402" className="flex items-center gap-2 text-sm text-white/40 hover:text-[#C8A84E] transition-colors font-body">
                <span className="text-[#C8A84E]">P:</span> 1300 362 402
              </a>
              <p className="flex items-start gap-2 text-sm text-white/40 font-body">
                <span className="text-[#C8A84E]">A:</span> 8D, 1 Trade Park Drive, Tullamarine 3043
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  onClick={(e) => {
                    e.preventDefault();
                    toast.info("Social media links coming soon.");
                  }}
                  className="w-9 h-9 flex items-center justify-center border border-white/10 hover:border-[#C8A84E]/50 text-white/40 hover:text-[#C8A84E] transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-display text-lg text-white tracking-wide mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/40 hover:text-[#C8A84E] transition-colors font-body"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="font-display text-lg text-white tracking-wide mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-sm text-white/40 hover:text-[#C8A84E] transition-colors font-body"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Newsletter */}
          <div>
            <h4 className="font-display text-lg text-white tracking-wide mb-5">
              Newsletter
            </h4>
            <p className="text-sm text-white/40 font-body leading-relaxed mb-5">
              Stay updated with the latest in facility management, cleaning technology, and industry insights.
            </p>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-[#111111] border border-white/10 focus:border-[#C8A84E]/50 text-white placeholder:text-white/30 px-4 py-2.5 text-sm font-body outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-10 h-10 flex items-center justify-center bg-[#C8A84E] hover:bg-[#E8D48B] text-black transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/dNwLKZfEuqHVi87Tg2QnZX/intelligent-cleaning-logo-transparent_658103e2.png"
              alt="Intelligent Cleaning System"
              className="w-8 h-8 object-contain opacity-60"
            />
            <p className="text-xs text-white/20 font-body">
              &copy; {new Date().getFullYear()} EagleWing Facility Services. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <button
              onClick={() => toast.info("Privacy Policy coming soon.")}
              className="text-xs text-white/20 hover:text-[#C8A84E] transition-colors font-body"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => toast.info("Terms of Service coming soon.")}
              className="text-xs text-white/20 hover:text-[#C8A84E] transition-colors font-body"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
