import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import SectionReveal from "@/components/SectionReveal";
import { Landmark, Warehouse, Dam, HardHat, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Landmark,
    title: "Construction of Foundations",
    desc: "Heavy-duty industrial foundation construction, piling works, and ground preparation for complex structures.",
    bullets: ["Reinforced concrete foundations", "Pile foundations & cap works", "Machine foundations"],
  },
  {
    icon: Warehouse,
    title: "Sheds and Industrial Buildings",
    desc: "Pre-engineered and conventional industrial building construction for manufacturing and storage facilities.",
    bullets: ["Pre-engineered buildings (PEB)", "Conventional industrial sheds", "Warehouse construction"],
  },
  {
    icon: Dam,
    title: "Reservoirs and Dams",
    desc: "Water retention structures and dam construction for irrigation, drinking water, and industrial use.",
    bullets: ["Earth-fill & gravity dams", "Service reservoirs", "Water treatment structures"],
  },
  {
    icon: HardHat,
    title: "Infrastructure Development Works",
    desc: "Supporting civil works for roads, drainage, utilities, and industrial site development.",
    bullets: ["Road & pavement works", "Drainage & sewerage systems", "Utility infrastructure"],
  },
];

export default function CivilInfrastructure() {
  return (
    <main>
      <PageHero
        title="Civil & Infrastructure"
        subtitle="Robust civil construction services for foundations, buildings, reservoirs, and infrastructure."
      />

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
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

      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-4xl font-black text-primary-foreground mb-6">
            Ready to Build Infrastructure?
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
