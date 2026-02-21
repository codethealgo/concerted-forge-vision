import PageHero from "@/components/PageHero";
import SectionReveal from "@/components/SectionReveal";
import { ClipboardList, Cog, ShoppingCart, HardHat, Zap, Monitor, Leaf, FileText, ShieldAlert, Cpu, CheckCircle } from "lucide-react";

const practices = [
  {
    icon: ClipboardList,
    title: "1. Detailed Project Planning & Feasibility",
    bullets: [
      "Comprehensive site surveys and geotechnical analysis",
      "Solar yield simulation and energy modeling",
      "Regulatory compliance and permitting evaluation",
      "Detailed execution and milestone planning",
    ],
  },
  {
    icon: Cog,
    title: "2. Engineering Excellence",
    bullets: [
      "Tilt optimization based on latitude and terrain",
      "Structural safety analysis for mounting systems",
      "Optimized cable routing and electrical design",
      "Compliance with IEC, IEEE, and local standards",
    ],
  },
  {
    icon: ShoppingCart,
    title: "3. Procurement Strategy",
    bullets: [
      "Tier-1 component sourcing for modules and inverters",
      "Rigorous quality assurance and incoming inspection protocols",
      "Vendor coordination and supply chain management",
      "Logistics planning for timely material delivery",
    ],
  },
  {
    icon: HardHat,
    title: "4. Construction & Execution",
    bullets: [
      "Skilled workforce with certified technicians",
      "Strict safety compliance and PPE protocols",
      "Precision installation with quality checkpoints",
      "Real-time progress monitoring dashboards",
    ],
  },
  {
    icon: Zap,
    title: "5. Testing & Commissioning",
    bullets: [
      "Comprehensive electrical testing and insulation checks",
      "Performance ratio validation and I-V curve tracing",
      "Grid synchronization and protection relay testing",
      "Final performance benchmarking and certification",
    ],
  },
  {
    icon: Monitor,
    title: "6. O&M Integration",
    bullets: [
      "SCADA and remote monitoring system deployment",
      "Preventive maintenance scheduling and SOPs",
      "Performance analytics and degradation tracking",
      "Rapid response protocols for fault resolution",
    ],
  },
  {
    icon: Leaf,
    title: "7. Sustainability & Compliance",
    bullets: [
      "Eco-friendly materials and waste management",
      "Water-efficient module cleaning systems",
      "Environmental impact assessments and mitigation",
      "Carbon footprint tracking and reporting",
    ],
  },
  {
    icon: FileText,
    title: "8. Documentation & Handover",
    bullets: [
      "Complete as-built drawings and design packages",
      "Operation manuals and maintenance guides",
      "Staff training and knowledge transfer sessions",
      "Monitoring system handover and access provisioning",
    ],
  },
  {
    icon: ShieldAlert,
    title: "9. Risk & Cost Management",
    bullets: [
      "Contingency planning for weather and supply delays",
      "Comprehensive insurance and warranty coverage",
      "Value engineering for cost optimization",
      "Regular budget reviews and variance analysis",
    ],
  },
  {
    icon: Cpu,
    title: "10. Embracing Digitalization",
    bullets: [
      "BIM modeling for clash detection and visualization",
      "Drone inspections for site surveys and progress monitoring",
      "AI-powered predictive maintenance algorithms",
      "Digital twin technology for lifecycle management",
    ],
  },
];

export default function EPCBestPractices() {
  return (
    <main>
      <PageHero
        title="Best Practices in EPC Solar Projects"
        subtitle="Building Efficiency and Reliability in Solar Infrastructure"
      />

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <SectionReveal>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Solar projects are capital-intensive investments where EPC execution quality directly determines long-term performance, reliability, and return on investment. Adopting industry best practices across every phase—from planning through commissioning—ensures projects are delivered on time, within budget, and to the highest quality standards.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Practices Grid */}
      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {practices.map((p) => (
              <SectionReveal key={p.title}>
                <div className="bg-card border border-border rounded-lg p-7 hover:shadow-lg transition-all duration-300 group h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded bg-accent/10 flex items-center justify-center shrink-0">
                      <p.icon size={24} className="text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-lg leading-snug">{p.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {p.bullets.map((b) => (
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

      {/* Conclusion */}
      <section className="bg-primary py-16">
        <div className="container text-center max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-black text-primary-foreground mb-6">
            Excellence in Every Phase
          </h2>
          <p className="text-primary-foreground/60 leading-relaxed">
            Strong EPC practices ensure reliable, cost-effective, and future-ready solar infrastructure. Concerted Industries applies these best practices across all solar projects, delivering installations that perform consistently over their entire operational lifetime.
          </p>
        </div>
      </section>
    </main>
  );
}
