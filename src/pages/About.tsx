import PageHero from "@/components/PageHero";
import SectionReveal from "@/components/SectionReveal";
import { Shield, Heart, Award, Users, TrendingUp } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import visionImg from "@/assets/vision-industrial.jpg";

const values = [
  { icon: Shield, title: "Safety First", desc: "Uncompromising commitment to safety in every project and operation." },
  { icon: Heart, title: "Integrity", desc: "Honest, transparent relationships with all stakeholders." },
  { icon: Award, title: "Quality Workmanship", desc: "Precision engineering and meticulous attention to detail." },
  { icon: Users, title: "Client Commitment", desc: "Dedicated to exceeding client expectations and delivering on promises." },
  { icon: TrendingUp, title: "Continuous Improvement", desc: "Constantly evolving our methods, skills, and capabilities." },
];

export default function About() {
  return (
    <main>
      <PageHero title="About Us" subtitle="Over 35 years of engineering excellence in civil construction and mechanical fabrication." />

      {/* Overview */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionReveal>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">Company Overview</p>
                <h2 className="text-3xl md:text-4xl font-bold">Engineering & Construction Excellence</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                  Concerted Industries is an engineering and construction company with over 35 years of industry experience specializing in civil construction and mechanical fabrication services for industrial and infrastructure projects.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  From power plants to water infrastructure, our experienced team delivers solutions that combine technical expertise, skilled manpower, and disciplined project execution across diverse industrial sectors.
                </p>
              </div>
              <img src={aboutImg} alt="Engineering team" className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]" />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <SectionReveal>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img src={visionImg} alt="Industrial facility" className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]" />
              <div>
                <div className="mb-10">
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">Our Vision</p>
                  <h2 className="text-2xl md:text-3xl font-bold">To be a leading engineering and construction partner</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Recognized for delivering excellence in mechanical fabrication and civil construction, driving industrial growth with safety, innovation, and reliability.
                  </p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">Our Mission</p>
                  <h2 className="text-2xl md:text-3xl font-bold">Precision-driven project execution</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    To provide high-quality fabrication and construction services that meet the highest standards of safety, efficiency, and client satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">Our Foundation</p>
            <h2 className="text-3xl md:text-4xl font-bold">Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v) => (
              <SectionReveal key={v.title}>
                <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-all duration-300">
                  <v.icon size={32} className="mx-auto text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
