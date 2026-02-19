import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import SectionReveal from "@/components/SectionReveal";
import {
  Wrench, Building2, Pipette, Factory, PaintBucket, Thermometer,
  Route, CheckCircle, ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Mechanical & Industrial Installation",
    desc: "Complete mechanical installation services for industrial plants and facilities including alignment, commissioning, and testing.",
    bullets: ["Plant erection & commissioning", "Rotating equipment installation", "Heavy lifts & rigging"],
  },
  {
    icon: Building2,
    title: "Site Fabrication and Erection of Structural Steel",
    desc: "On-site fabrication and erection of structural steel components for industrial structures.",
    bullets: ["On-site steel fabrication and assembly", "Industrial steel erection", "Heavy structural frameworks"],
  },
  {
    icon: Pipette,
    title: "Piping Fabrication and Erection",
    desc: "Industrial piping systems fabrication, assembly, and installation for process and utility lines.",
    bullets: ["Process piping & utility piping", "High-pressure pipeline systems", "Pipe spooling & pre-fabrication"],
  },
  {
    icon: Factory,
    title: "Equipment Fabrication and Erection",
    desc: "Custom equipment fabrication and precision erection services for heavy industrial machinery.",
    bullets: ["Heavy equipment installation", "Industrial machinery erection", "Custom fabrication solutions"],
  },
  {
    icon: PaintBucket,
    title: "Sand / Grit Blasting, Painting, Insulation & Protective Coating",
    desc: "Surface preparation and industrial coating application for corrosion protection.",
    bullets: ["Surface preparation & blasting", "Industrial painting systems", "Insulation & fireproofing"],
  },
  {
    icon: Route,
    title: "Cross-Country Pipelines and Terminal Stations",
    desc: "Long-distance pipeline construction and terminal station development and commissioning.",
    bullets: ["Pipeline laying & erection", "Terminal station construction", "Hydro-testing & commissioning"],
  },
];

export default function MechanicalInstallation() {
  return (
    <main>
      <PageHero
        title="Mechanical & Industrial Installation"
        subtitle="Full-spectrum mechanical services from fabrication to commissioning for industrial facilities."
      />

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((s) => (
              <SectionReveal key={s.title}>
                <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded bg-accent/10 flex items-center justify-center mb-5">
                    <s.icon size={24} className="text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle size={14} className="mt-0.5 text-accent shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-4xl font-black text-primary-foreground mb-6">
            Need Mechanical Installation Services?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded font-bold text-sm transition-all duration-300 hover:bg-industrial-orange-hover hover:gap-3 group"
          >
            Get a Quote
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
