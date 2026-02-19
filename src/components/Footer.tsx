import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const serviceLinks = [
  { to: "/mechanical-installation", label: "Mechanical & Industrial Installation" },
  { to: "/civil-infrastructure", label: "Civil & Infrastructure" },
  { to: "/structural-steel", label: "Structural & Steel Infrastructure" },
];

const quickLinks = [
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                <span className="text-accent-foreground font-black text-xs">CI</span>
              </div>
              <span className="font-bold text-lg tracking-wide">Concerted Industries</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Delivering specialized mechanical fabrication, civil construction, and steel infrastructure solutions with precision, safety, and reliability.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-primary-foreground/40">Services</h4>
            <div className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-primary-foreground/40">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-primary-foreground/40">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-primary-foreground/60">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>Industrial Area, Engineering District, City, Country</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Phone size={16} className="shrink-0 text-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Mail size={16} className="shrink-0 text-accent" />
                <span>info@concertedindustries.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} Concerted Industries. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
