import PageHero from "@/components/PageHero";
import SectionReveal from "@/components/SectionReveal";
import { Layers, ShieldCheck, Recycle, Ruler, Thermometer, Settings, Cpu, FlaskConical, Factory, Globe } from "lucide-react";

const sections = [
  {
    icon: Layers,
    title: "1. Stronger Yet Slimmer",
    desc: "Modern aluminium module frames leverage advanced 6000-series alloys, particularly 6063-T6, to achieve exceptional strength-to-weight ratios. These alloys enable reduced wall thickness without compromising structural integrity, resulting in lighter frames that still meet rigorous mechanical load requirements for wind, snow, and installation stresses.",
  },
  {
    icon: ShieldCheck,
    title: "2. Next-Gen Protective Coatings",
    desc: "Nano-ceramic surface treatments and advanced anodizing processes provide superior corrosion resistance compared to traditional coatings. These next-generation protective layers extend frame lifespan in harsh environments—coastal, desert, and high-humidity regions—while maintaining a clean aesthetic appearance.",
  },
  {
    icon: Ruler,
    title: "3. Smarter Material Usage",
    desc: "Optimized cross-section profiles, developed through finite element analysis and computational modeling, reduce aluminium usage by up to 15% while maintaining equivalent structural performance. This translates to significant cost savings and lower environmental impact per module produced.",
  },
  {
    icon: Recycle,
    title: "4. Recycling & Circular Economy",
    desc: "The solar industry is increasingly adopting low-carbon aluminium alloys with high recycled content—some exceeding 75% post-consumer material. This circular approach reduces carbon emissions by up to 95% compared to primary aluminium production, supporting global sustainability goals.",
  },
  {
    icon: Settings,
    title: "5. Precision Manufacturing",
    desc: "State-of-the-art CNC extrusion and automated assembly lines achieve dimensional tolerances of ±0.1 mm. This precision ensures perfect module fitment, reduces field installation issues, and enables seamless compatibility with diverse mounting systems worldwide.",
  },
  {
    icon: Thermometer,
    title: "6. Thermal & Structural Enhancements",
    desc: "Reinforced corner joints and engineered thermal expansion zones address the challenges of extreme temperature cycling. Advanced frame designs accommodate thermal expansion and contraction without inducing stress on glass or cell interconnects, preserving module integrity over decades.",
  },
  {
    icon: FlaskConical,
    title: "7. Custom & Modular Designs",
    desc: "Today's frames integrate grounding channels, cable management systems, and aesthetic finishes directly into the extrusion profile. These all-in-one designs simplify installation, improve electrical safety, and offer diverse color and finish options for architectural applications.",
  },
  {
    icon: Cpu,
    title: "8. Smart Frames with Sensors",
    desc: "Embedded sensors within frame profiles enable real-time monitoring of structural stress, temperature, and vibration. This data feeds into predictive maintenance systems, allowing operators to identify potential issues before they impact performance or safety.",
  },
  {
    icon: Layers,
    title: "9. Composite Alternatives",
    desc: "Reinforced plastic composite frames are emerging as viable alternatives for harsh chemical or marine environments where even aluminium faces accelerated corrosion. These composites offer excellent chemical resistance, lighter weight, and competitive mechanical properties.",
  },
  {
    icon: Factory,
    title: "10. Growing Manufacturing in India",
    desc: "India's aluminium frame manufacturing capacity is expanding rapidly, supported by government initiatives under the Make in India program. Local production reduces logistics costs, shortens lead times, and contributes to domestic solar manufacturing self-sufficiency.",
  },
];

export default function AluminiumFrames() {
  return (
    <main>
      <PageHero
        title="Advancements in Aluminium Module Frames"
        subtitle="Innovation driving efficiency, sustainability, and precision in solar module framing."
      />

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <SectionReveal>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The once-simple aluminium frame has become a hub of innovation in solar technology. Today's frames go far beyond basic structural support—they actively contribute to module efficiency, longevity, and sustainability through advanced materials, smart manufacturing, and circular economy principles.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="space-y-6">
            {sections.map((s, i) => (
              <SectionReveal key={s.title}>
                <div className={`grid md:grid-cols-[auto_1fr] gap-6 items-start p-8 rounded-lg border border-border ${i % 2 === 0 ? "bg-card" : "bg-secondary"}`}>
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <s.icon size={28} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-primary py-16">
        <div className="container text-center max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-black text-primary-foreground mb-6">
            The Future of Solar Framing
          </h2>
          <p className="text-primary-foreground/60 leading-relaxed">
            Aluminium module frames are evolving into lighter, stronger, smarter, and greener structural solutions. As material science and manufacturing technology advance, these frames will continue to play a pivotal role in making solar energy more accessible, durable, and sustainable worldwide.
          </p>
        </div>
      </section>
    </main>
  );
}
