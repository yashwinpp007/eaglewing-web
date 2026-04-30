import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/dNwLKZfEuqHVi87Tg2QnZX/eaglewing-logo-final_4f0a6c60.webp";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#services" },
  { label: "Where We Clean", href: "#sectors" },
  { label: "Technology", href: "#technology" },
  { label: "Process", href: "#process" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href === "#blog") {
      // placeholder
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#C8A84E]/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 sm:h-32 lg:h-36">
          {/* Logo — BIGGER */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="EagleWing Facility Services — Home"
            className="flex items-center shrink-0"
          >
            <img
              src={LOGO_URL}
              alt="EagleWing Facility Services — commercial cleaning Melbourne and Sydney"
              className="h-24 sm:h-28 lg:h-36 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[13px] font-medium tracking-wider uppercase text-white/70 hover:text-[#C8A84E] transition-colors duration-300 font-body whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:0413391353"
              className="flex items-center gap-2 text-[13px] font-medium tracking-wider text-white/70 hover:text-[#C8A84E] transition-colors duration-300 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              0413 391 353
            </a>
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-gold px-6 py-2.5 text-sm font-bold tracking-wider uppercase font-body whitespace-nowrap"
            >
              Get a Quote
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white/80 hover:text-[#C8A84E] transition-colors"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0A0A0A]/98 backdrop-blur-md border-t border-[#C8A84E]/10 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left text-base font-medium tracking-wider uppercase text-white/70 hover:text-[#C8A84E] transition-colors py-2 font-body"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:0413391353"
            className="flex items-center gap-2 text-base font-medium tracking-wider text-white/70 hover:text-[#C8A84E] transition-colors py-2"
          >
            <Phone className="w-4 h-4" />
            0413 391 353
          </a>
          <button
            onClick={() => handleNavClick("#contact")}
            className="btn-gold w-full px-6 py-3 text-sm font-bold tracking-wider uppercase mt-4 font-body"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
}
