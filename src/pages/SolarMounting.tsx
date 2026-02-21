import PageHero from "@/components/PageHero";
import SectionReveal from "@/components/SectionReveal";
import { Sun, Compass, Shield, Maximize, Wrench, Home, Mountain, Orbit, Lightbulb, Cpu, CheckCircle } from "lucide-react";

const importancePoints = [
  "Enhances panel orientation and tilt",
  "Reduces wear and tear",
  "Minimizes shading losses",
  "Lowers maintenance costs",
];

const keyFactors = [
  { icon: Compass, title: "Tilt Angle & Orientation", desc: "Optimizing tilt and azimuth angles for maximum solar irradiance capture based on geographical location." },
  { icon: Shield, title: "Material Selection", desc: "Using high-grade aluminium and galvanized steel for durability, corrosion resistance, and structural integrity." },
  { icon: Mountain, title: "Wind & Load Resistance", desc: "Engineering mounts to withstand extreme wind loads, snow loads, and seismic forces for long-term safety." },
  { icon: Maximize, title: "Space Utilization", desc: "Maximizing panel density while maintaining adequate spacing for airflow and maintenance access." },
  { icon: Wrench, title: "Installation & Maintenance Efficiency", desc: "Designing for rapid deployment with modular components and easy access for routine maintenance." },
];

const mountingTypes = [
  { icon: Home, title: "Rooftop Mounting", desc: "Flush-mount and tilted systems for residential and commercial rooftops, optimized for structural load distribution." },
  { icon: Mountain, title: "Ground Mounting", desc: "Fixed-tilt and pile-driven systems for utility-scale installations with optimal land utilization." },
  { icon: Orbit, title: "Tracking Systems", desc: "Single-axis and dual-axis trackers that follow the sun's path, increasing energy yield by up to 25%." },
];

const innovations = [
  { title: "Lightweight Ballasted Mounts", desc: "Non-penetrating systems ideal for flat roofs, reducing structural load and installation complexity." },
  { title: "East-West Mounting Systems", desc: "Dual-orientation layouts that maximize energy production throughout the day with higher panel density." },
  { title: "Floating Solar Mounts", desc: "Innovative pontoon-based systems for reservoirs and water bodies, reducing evaporation while generating power." },
  { title: "Smart Tracking Systems", desc: "AI-powered trackers with real-time optimization based on weather patterns and energy demand." },
  { title: "Tool-Free Modular Designs", desc: "Snap-fit and click-lock mounting systems that drastically reduce installation time and labor costs." },
  { title: "Hybrid Carport Mounts", desc: "Dual-purpose structures providing vehicle shade and solar energy generation for commercial properties." },
];

export default function SolarMounting() {
  return (
    <main>
      <PageHero
        title="Optimizing Solar Mounting Designs"
        subtitle="A Key to Efficient Solar Installations"
      />

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <SectionReveal>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The rapid adoption of solar energy has made mounting system design one of the most critical aspects of achieving maximum efficiency and long-term durability in solar projects. An optimized solar mounting design not only ensures structural safety but also improves energy yield, reduces installation costs, and extends the system's lifespan.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Importance */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <SectionReveal>
            <div className="mb-14">
              <div className="w-12 h-1 bg-accent mb-4" />
              <h2 className="text-3xl md:text-4xl font-black">Importance of Solar Mounting Systems</h2>
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
            {importancePoints.map((p) => (
              <SectionReveal key={p}>
                <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-5">
                  <CheckCircle size={18} className="mt-0.5 text-accent shrink-0" />
                  <span className="font-medium">{p}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key Factors */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionReveal>
            <div className="mb-14">
              <div className="w-12 h-1 bg-accent mb-4" />
              <h2 className="text-3xl md:text-4xl font-black">Key Factors in Optimizing Mounting Designs</h2>
            </div>
          </SectionReveal>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {keyFactors.map((f) => (
              <SectionReveal key={f.title}>
                <div className="bg-card border border-border rounded-lg p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded bg-accent/10 flex items-center justify-center mb-5">
                    <f.icon size={24} className="text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <SectionReveal>
            <div className="mb-14">
              <div className="w-12 h-1 bg-accent mb-4" />
              <h2 className="text-3xl md:text-4xl font-black">Types of Optimized Mounting Systems</h2>
            </div>
          </SectionReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {mountingTypes.map((t) => (
              <SectionReveal key={t.title}>
                <div className="bg-card border border-border rounded-lg p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                    <t.icon size={28} className="text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Innovations */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionReveal>
            <div className="mb-14">
              <div className="w-12 h-1 bg-accent mb-4" />
              <h2 className="text-3xl md:text-4xl font-black">New Innovations in Solar Mounting Products</h2>
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovations.map((n) => (
              <SectionReveal key={n.title}>
                <div className="bg-card border border-border rounded-lg p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div className="w-10 h-1 bg-accent mb-4 group-hover:w-14 transition-all duration-300" />
                  <h3 className="font-bold text-lg mb-2">{n.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{n.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container max-w-4xl">
          <SectionReveal>
            <div className="mb-8">
              <div className="w-12 h-1 bg-accent mb-4" />
              <h2 className="text-3xl md:text-4xl font-black">Role of Technology</h2>
            </div>
            <div className="flex items-start gap-5 bg-card border border-border rounded-lg p-8">
              <Cpu size={32} className="text-accent shrink-0 mt-1" />
              <p className="text-muted-foreground leading-relaxed">
                Advanced simulation software and digital twin technology are revolutionizing solar mounting design. These tools allow engineers to model structural loads, wind dynamics, and energy yield before installation—improving safety, reducing material waste, and enabling highly customized mounting solutions for complex site conditions.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-primary py-16">
        <div className="container text-center max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-black text-primary-foreground mb-6">
            Building Smarter Solar Infrastructure
          </h2>
          <p className="text-primary-foreground/60 leading-relaxed">
            Optimized mounting systems are the foundation of efficient, durable, and cost-effective solar installations. By focusing on precision engineering, innovative materials, and smart technology, Concerted Industries supports a greener, more sustainable energy future.
          </p>
        </div>
      </section>
    </main>
  );
}
