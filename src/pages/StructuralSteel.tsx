import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import SectionReveal from "@/components/SectionReveal";
import { Building2, Warehouse, Construction, Wrench, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Warehouse,
    title: "Pre-Engineered Steel Buildings",
    desc: "Concerted Industries delivers turnkey pre-engineered steel building solutions for industrial, commercial, and warehousing applications. Our PEB solutions offer faster construction timelines, cost efficiency, and structural reliability.",
    bullets: [
      "Industrial warehouses & factories",
      "Commercial & retail structures",
      "Aircraft hangars & logistics centers",
      "Cold storage & food processing facilities",
    ],
  },
  {
    icon: Construction,
    title: "Metal Arch Buildings",
    desc: "Concerted Industries provides metal arch building solutions—self-supporting, column-free structures ideal for storage, workshops, and temporary shelters. These buildings offer rapid deployment and excellent span capabilities.",
    bullets: [
      "Self-supporting arch structures",
      "Agricultural storage facilities",
      "Equipment shelters & workshops",
      "Temporary & semi-permanent structures",
    ],
  },
  {
    icon: Building2,
    title: "Steel Bridges & Heavy Fabrication",
    desc: "Concerted Industries specializes in the design, fabrication, and erection of steel bridges and heavy structural components. Our capabilities include complex welding, precision cutting, and large-scale assembly for infrastructure projects.",
    bullets: [
      "Pedestrian & vehicular steel bridges",
      "Railway & industrial bridges",
      "Heavy plate fabrication",
      "Custom structural components",
    ],
  },
  {
    icon: Wrench,
    title: "Structural Steel Fabrication & Erection",
    desc: "Concerted Industries provides end-to-end structural steel fabrication and erection services. From detailed engineering through site installation, we deliver precision-built steel structures for industrial plants, power projects, and commercial buildings.",
    bullets: [
      "Structural steel detailing & engineering",
      "Shop fabrication & quality control",
      "Site erection & bolted connections",
      "Industrial plant structures & trusses",
    ],
  },
];

export default function StructuralSteel() {
  return (
    <main>
      <PageHero
        title="Structural & Steel Infrastructure"
        subtitle="End-to-end steel solutions from pre-engineered buildings to heavy bridge fabrication."
      />

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="space-y-10">
            {services.map((s, i) => (
              <SectionReveal key={s.title}>
                <div className={`grid md:grid-cols-[1fr_1.2fr] gap-8 items-start ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
                  <div className={`bg-surface rounded-lg h-64 md:h-80 flex items-center justify-center ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <s.icon size={72} className="text-muted-foreground/20" />
                  </div>
                  <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="w-10 h-1 bg-accent mb-4" />
                    <h3 className="text-2xl md:text-3xl font-black mb-4">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                    <ul className="space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle size={14} className="mt-0.5 text-accent shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-4xl font-black text-primary-foreground mb-6">
            Need Steel Infrastructure Solutions?
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
