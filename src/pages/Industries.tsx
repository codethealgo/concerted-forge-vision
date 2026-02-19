import PageHero from "@/components/PageHero";
import SectionReveal from "@/components/SectionReveal";
import { Flame, Factory, Wrench, Droplets, Route } from "lucide-react";

const sectors = [
  {
    icon: Flame,
    title: "Power & Energy",
    desc: "Supporting thermal and renewable power generation projects with mechanical installation and civil construction services.",
  },
  {
    icon: Factory,
    title: "Steel & Cement",
    desc: "Structural fabrication, equipment erection, and plant maintenance for steel mills and cement manufacturing facilities.",
  },
  {
    icon: Wrench,
    title: "Industrial Manufacturing",
    desc: "Comprehensive fabrication and construction support for diverse manufacturing plants and processing facilities.",
  },
  {
    icon: Droplets,
    title: "Water Infrastructure",
    desc: "Construction of reservoirs, dams, treatment plants, and pipeline networks for water supply and distribution.",
  },
  {
    icon: Route,
    title: "Oil & Process Industries",
    desc: "Pipeline construction, terminal stations, and process equipment installation for the oil and gas sector.",
  },
];

export default function Industries() {
  return (
    <main>
      <PageHero title="Industries" subtitle="Serving diverse industrial sectors with specialized engineering solutions." />

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-8">
            {sectors.map((s, i) => (
              <SectionReveal key={s.title}>
                <div className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
                  <div className={`bg-card border border-border rounded-lg p-8 md:p-10 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <s.icon size={36} className="text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                  <div className={`bg-surface rounded-lg h-48 md:h-full min-h-[200px] flex items-center justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <s.icon size={64} className="text-muted-foreground/30" />
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
