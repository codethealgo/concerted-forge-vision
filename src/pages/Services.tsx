import PageHero from "@/components/PageHero";
import SectionReveal from "@/components/SectionReveal";
import {
  Wrench, Building2, Pipette, Factory, PaintBucket, Thermometer,
  Route, Landmark, Warehouse, Dam, HardHat, Cog,
} from "lucide-react";

const mechanical = [
  { icon: Wrench, title: "Mechanical & Industrial Installation", desc: "Complete mechanical installation services for industrial plants and facilities." },
  { icon: Building2, title: "Site Fabrication and Erection of Structural Steel", desc: "On-site fabrication and erection of structural steel components." },
  { icon: Pipette, title: "Piping Fabrication and Erection", desc: "Industrial piping systems fabrication, assembly, and installation." },
  { icon: Factory, title: "Equipment Fabrication and Erection", desc: "Custom equipment fabrication and precision erection services." },
  { icon: PaintBucket, title: "Sand/Grit Blasting & Painting", desc: "Surface preparation and protective coating application." },
  { icon: Thermometer, title: "Insulation & Protective Coating", desc: "Thermal insulation and advanced protective coating systems." },
  { icon: Route, title: "Cross-Country Pipeline & Terminal Stations", desc: "Long-distance pipeline construction and terminal station development." },
];

const civil = [
  { icon: Landmark, title: "Construction of Foundations", desc: "Heavy-duty industrial foundation construction and piling works." },
  { icon: Warehouse, title: "Industrial Sheds & Buildings", desc: "Pre-engineered and conventional industrial building construction." },
  { icon: Dam, title: "Reservoirs and Dams", desc: "Water retention structures and dam construction projects." },
  { icon: HardHat, title: "Associated Civil Infrastructure Works", desc: "Supporting civil works for industrial and infrastructure projects." },
];

function ServiceCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <Icon size={28} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
      <h3 className="mt-4 font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Services() {
  return (
    <main>
      <PageHero title="Our Services" subtitle="Comprehensive mechanical fabrication and civil construction capabilities." />

      <section className="py-20 md:py-28">
        <div className="container">
          <SectionReveal>
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-3">
                <Cog size={20} className="text-primary" />
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold">Division 1</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Mechanical & Industrial Installation</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl">
                Full-spectrum mechanical services from fabrication to commissioning for industrial facilities.
              </p>
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mechanical.map((s) => (
              <SectionReveal key={s.title}>
                <ServiceCard {...s} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container">
          <SectionReveal>
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-3">
                <Building2 size={20} className="text-primary" />
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold">Division 2</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Civil & Infrastructure Construction</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl">
                Robust civil construction services for foundations, buildings, and infrastructure.
              </p>
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {civil.map((s) => (
              <SectionReveal key={s.title}>
                <ServiceCard {...s} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
