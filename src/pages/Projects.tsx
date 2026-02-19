import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import SectionReveal from "@/components/SectionReveal";
import { ArrowRight } from "lucide-react";

const projects = [
  { title: "Thermal Power Plant – Structural Steel Erection", scope: "Fabrication and erection of 2,500 MT structural steel for boiler and turbine buildings.", category: "Mechanical" },
  { title: "Cross-Country Pipeline – 120 km", scope: "Pipeline laying, welding, testing, and commissioning for oil & gas transmission.", category: "Piping" },
  { title: "Cement Plant – Equipment Installation", scope: "Heavy equipment erection including kiln, raw mill, and cement mill assemblies.", category: "Mechanical" },
  { title: "Water Treatment Plant – Civil Works", scope: "Construction of RCC structures, clarifiers, filter beds, and pump house foundations.", category: "Civil" },
  { title: "Steel Plant – PEB Warehouse Complex", scope: "Design, fabrication, and erection of 15,000 sqm pre-engineered warehouse buildings.", category: "Steel" },
  { title: "Refinery Shutdown Maintenance", scope: "Piping modifications, equipment overhauls, and surface preparation during planned shutdown.", category: "Mechanical" },
  { title: "Industrial Dam Construction", scope: "Earth-fill dam construction with spillway, sluice gates, and intake structures.", category: "Civil" },
  { title: "Terminal Station Construction", scope: "Complete construction and commissioning of pipeline terminal station with tank farms.", category: "Piping" },
];

const categories = ["All", "Mechanical", "Piping", "Civil", "Steel"];

export default function Projects() {
  return (
    <main>
      <PageHero
        title="Projects"
        subtitle="Showcasing our track record across mechanical, piping, civil, and steel infrastructure."
      />

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <SectionReveal key={p.title}>
                <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
                  <div className="h-48 bg-surface flex items-center justify-center relative overflow-hidden">
                    <span className="text-6xl font-black text-muted-foreground/10">{p.category[0]}</span>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="text-primary-foreground font-bold text-sm">{p.category}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider mb-2">{p.category}</span>
                    <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground flex-1">{p.scope}</p>
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
            Have a Project in Mind?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded font-bold text-sm transition-all duration-300 hover:bg-industrial-orange-hover hover:gap-3 group"
          >
            Start Your Project
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
