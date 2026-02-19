import PageHero from "@/components/PageHero";
import SectionReveal from "@/components/SectionReveal";
import {
  CheckCircle, Shield, HardHat, Eye, FileCheck, Users, AlertTriangle, BookOpen,
} from "lucide-react";

const quality = [
  { icon: FileCheck, title: "Material Checks", desc: "Rigorous material inspection and testing at every stage." },
  { icon: CheckCircle, title: "Engineering Compliance", desc: "Adherence to international codes and engineering standards." },
  { icon: Users, title: "Skilled Supervision", desc: "Experienced supervisors ensuring quality at every level." },
  { icon: Eye, title: "Quality Inspections", desc: "Systematic quality control audits and documentation." },
];

const safety = [
  { icon: HardHat, title: "PPE Compliance", desc: "Mandatory personal protective equipment for all site personnel." },
  { icon: BookOpen, title: "Safety Training", desc: "Regular safety training programs and skill certification." },
  { icon: AlertTriangle, title: "Risk Assessments", desc: "Comprehensive hazard identification and risk mitigation planning." },
  { icon: Shield, title: "Safety Culture", desc: "Zero-incident philosophy embedded in every operation." },
];

export default function QualitySafety() {
  return (
    <main>
      <PageHero title="Quality & Safety" subtitle="Uncompromising standards in quality assurance and workplace safety." />

      <section className="py-20 md:py-28">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-14">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">Standards</p>
              <h2 className="text-3xl md:text-4xl font-bold">Quality Assurance</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Our quality management system ensures consistent, reliable outcomes across all projects.
              </p>
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quality.map((q) => (
              <SectionReveal key={q.title}>
                <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-all duration-300">
                  <q.icon size={32} className="mx-auto text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{q.title}</h3>
                  <p className="text-sm text-muted-foreground">{q.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-14">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">Commitment</p>
              <h2 className="text-3xl md:text-4xl font-bold">Safety Standards</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Safety is the foundation of everything we do. Our zero-incident philosophy guides every decision.
              </p>
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {safety.map((s) => (
              <SectionReveal key={s.title}>
                <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-all duration-300">
                  <s.icon size={32} className="mx-auto text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
