import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import SectionReveal from "@/components/SectionReveal";
import { ArrowRight } from "lucide-react";
import careersImg from "@/assets/careers-banner.jpg";

const roles = [
  { title: "Fabrication Engineers", type: "Engineering", location: "On-Site" },
  { title: "Civil Engineers", type: "Engineering", location: "On-Site" },
  { title: "Site Supervisors", type: "Management", location: "On-Site" },
  { title: "Welders & Technicians", type: "Technical", location: "On-Site" },
  { title: "Project Managers", type: "Management", location: "Office / On-Site" },
  { title: "Safety Officers", type: "HSE", location: "On-Site" },
];

export default function Careers() {
  return (
    <main>
      <PageHero title="Careers" subtitle="Build your career with a team committed to engineering excellence." />

      {/* Banner */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img src={careersImg} alt="Construction careers" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative container text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">Join Our Team</h2>
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto">
            We're always looking for skilled professionals who share our commitment to safety, quality, and precision.
          </p>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <SectionReveal>
            <div className="text-center mb-14">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">Opportunities</p>
              <h2 className="text-3xl md:text-4xl font-bold">Open Positions</h2>
            </div>
          </SectionReveal>
          <div className="space-y-4">
            {roles.map((role) => (
              <SectionReveal key={role.title}>
                <div className="bg-card border border-border rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-all duration-300">
                  <div>
                    <h3 className="font-semibold text-lg">{role.title}</h3>
                    <p className="text-sm text-muted-foreground">{role.type} · {role.location}</p>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded text-sm font-semibold transition-all duration-300 hover:bg-steel-light hover:gap-3 group shrink-0"
                  >
                    Apply Now
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
