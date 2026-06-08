import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const LOGO_URL = "/images/logo/eaglewing-logo.webp";

const solutionsDropdown = [
  { label: "What We Do", href: "#services" },
  { label: "Where We Clean", href: "#sectors" },
  { label: "Why EagleWing", href: "#about" },
  { label: "How It Works", href: "#process" },
];

const technologyDropdown = [
  { label: "Our Technology", href: "/technology" },
  { label: "EagleWing Command™", href: "/technology#technology" },
  { label: "Our Commitment", href: "/technology#sustainability" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "#services", dropdown: solutionsDropdown },
  { label: "Technology", href: "/technology", dropdown: technologyDropdown },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [location, navigate] = useLocation();
  const techRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setOpenDropdown(null);

    // Route with hash (e.g. /technology#afterclean)
    if (href.includes("#") && href.startsWith("/")) {
      const [path, hash] = href.split("#");
      navigate(path);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 350);
      return;
    }

    // Route-based links (pages)
    if (href.startsWith("/")) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Hash-based links (homepage sections)
    if (location !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return;
    }

    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location !== "/") {
      navigate("/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        <div className="flex items-center justify-between h-20 sm:h-24 lg:h-28">
          {/* Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            aria-label="EagleWing Facility Services — Home"
            className="flex items-center shrink-0"
          >
            <img
              src={LOGO_URL}
              alt="EagleWing Facility Services — commercial cleaning Melbourne and Sydney"
              className="h-12 sm:h-20 lg:h-24 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center gap-1 text-[13px] font-medium tracking-wider uppercase text-white/70 hover:text-[#C8A84E] transition-colors duration-300 font-body whitespace-nowrap"
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${openDropdown === link.label ? "rotate-180 text-[#C8A84E]" : ""}`}
                    />
                  </button>

                  {/* Dropdown panel */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-52 transition-all duration-200 ${
                      openDropdown === link.label ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    {/* Arrow */}
                    <div className="flex justify-center mb-1">
                      <div className="w-2.5 h-2.5 bg-[#0A0A0A] border-l border-t border-[#C8A84E]/20 rotate-45" />
                    </div>
                    <div className="bg-[#0A0A0A] border border-[#C8A84E]/20 shadow-xl shadow-black/40 overflow-hidden">
                      {link.dropdown.map((item, i) => (
                        <button
                          key={item.href}
                          onClick={() => handleNavClick(item.href)}
                          className={`block w-full text-left px-5 py-3 text-[12px] font-medium tracking-wider uppercase text-white/60 hover:text-[#C8A84E] hover:bg-[#C8A84E]/5 transition-colors duration-200 font-body ${
                            i !== 0 ? "border-t border-white/5" : ""
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-[13px] font-medium tracking-wider uppercase text-white/70 hover:text-[#C8A84E] transition-colors duration-300 font-body whitespace-nowrap"
                >
                  {link.label}
                </button>
              )
            )}
            <a
              href="tel:1300362402"
              className="flex items-center gap-2 text-[13px] font-medium tracking-wider text-white/70 hover:text-[#C8A84E] transition-colors duration-300 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              1300 362 402
            </a>
            <button
              onClick={() => handleNavClick("/contact")}
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
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label}>
                <button
                  onClick={() => setMobileOpenDropdown(mobileOpenDropdown === link.label ? null : link.label)}
                  className="flex items-center justify-between w-full text-left text-base font-medium tracking-wider uppercase text-white/70 hover:text-[#C8A84E] transition-colors py-2 font-body"
                >
                  {link.label}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileOpenDropdown === link.label ? "rotate-180 text-[#C8A84E]" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileOpenDropdown === link.label ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="pl-4 border-l border-[#C8A84E]/20 mt-1 space-y-1">
                    {link.dropdown.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => { setMobileOpen(false); handleNavClick(item.href); }}
                        className="block w-full text-left text-sm font-medium tracking-wider uppercase text-white/50 hover:text-[#C8A84E] transition-colors py-2 font-body"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left text-base font-medium tracking-wider uppercase text-white/70 hover:text-[#C8A84E] transition-colors py-2 font-body"
              >
                {link.label}
              </button>
            )
          )}
          <a
            href="tel:1300362402"
            className="flex items-center gap-2 text-base font-medium tracking-wider text-white/70 hover:text-[#C8A84E] transition-colors py-2"
          >
            <Phone className="w-4 h-4" />
            1300 362 402
          </a>
          <button
            onClick={() => handleNavClick("/contact")}
            className="btn-gold w-full px-6 py-3 text-sm font-bold tracking-wider uppercase mt-4 font-body"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
}
