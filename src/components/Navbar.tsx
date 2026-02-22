import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/mechanical-installation", label: "Mechanical & Industrial Installation" },
  { to: "/civil-infrastructure", label: "Civil & Infrastructure" },
  { to: "/structural-steel", label: "Structural & Steel Infrastructure" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About Us" },
  // { to: "/solar-mounting", label: "Solar Mounting" },
  // { to: "/aluminium-frames", label: "Aluminium Frames" },
  // { to: "/epc-best-practices", label: "EPC Best Practices" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Concerted Industries" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[13px] font-semibold transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 ${
                location.pathname === link.to
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
              } ${scrolled ? "text-foreground hover:text-accent" : "text-primary-foreground/90 hover:text-primary-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 bg-accent text-accent-foreground px-5 py-2.5 rounded font-bold text-sm transition-all duration-300 hover:bg-industrial-orange-hover"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`xl:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden bg-card border-t border-border shadow-lg">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`py-3 px-4 rounded text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 bg-accent text-accent-foreground py-3 px-4 rounded text-sm font-bold text-center"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
