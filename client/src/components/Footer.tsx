/*
 * DESIGN: Carbon Fiber Industrial Luxury
 * Footer: Minimal, dark, with gold accents and logo.
 */

const LOGO_DARK_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485776203/dNwLKZfEuqHVi87Tg2QnZX/logo-dark_9df0f435.png";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Office Cleaning", href: "#services" },
      { label: "Industrial Cleaning", href: "#services" },
      { label: "School & Childcare", href: "#services" },
      { label: "Medical Cleaning", href: "#services" },
      { label: "Pressure Washing", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Industries", href: "#industries" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Councils", href: "#industries" },
      { label: "Warehouses", href: "#industries" },
      { label: "Schools", href: "#industries" },
      { label: "Medical", href: "#industries" },
    ],
  },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#060606] pt-16 pb-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A84E]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button onClick={() => scrollTo("#")} className="mb-6 block">
              <img
                src={LOGO_DARK_URL}
                alt="EagleWing Facility Services"
                className="h-20 w-auto object-contain"
              />
            </button>
            <p className="text-sm text-white/30 font-body font-light leading-relaxed max-w-sm mb-6">
              Next-generation commercial cleaning and facility solutions.
              Engineered for performance, built on accountability.
            </p>
            <p className="text-xs font-mono text-[#C8A84E]/40 tracking-[0.2em] uppercase">
              Rising Above Standards
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm text-white tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm text-white/30 hover:text-[#C8A84E] transition-colors font-body"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20 font-body">
            &copy; {new Date().getFullYear()} EagleWing Facility Services. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-xs text-white/20 hover:text-[#C8A84E] transition-colors font-body">
              Privacy Policy
            </button>
            <button className="text-xs text-white/20 hover:text-[#C8A84E] transition-colors font-body">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
