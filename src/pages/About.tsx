import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import SectionReveal from "@/components/SectionReveal";
import { Shield, Heart, Award, Users, TrendingUp, ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import visionImg from "@/assets/vision-industrial.jpg";

const values = [
  { icon: Shield, title: "Safety First", desc: "Uncompromising commitment to safety in every project and operation." },
  { icon: Heart, title: "Integrity", desc: "Honest, transparent relationships with all stakeholders." },
  { icon: Award, title: "Quality Workmanship", desc: "Precision engineering and meticulous attention to detail." },
  { icon: Users, title: "Client Commitment", desc: "Dedicated to exceeding client expectations." },
  { icon: TrendingUp, title: "Continuous Improvement", desc: "Constantly evolving our methods and capabilities." },
];

export default function About() {
  return (
    <main>
      <PageHero title="About Us" subtitle="Over 35 years of engineering excellence across mechanical, civil, and steel infrastructure." />

      {/* Overview */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionReveal>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-1 bg-accent mb-4" />
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">Company Overview</p>
                <h2 className="text-3xl md:text-4xl font-black">Engineering & Construction Excellence</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                  Concerted Industries is an engineering and construction company with over 35 years of industry experience specializing in mechanical installation, civil construction, and structural steel infrastructure for industrial and infrastructure projects.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  From power plants to water infrastructure, our experienced team delivers end-to-end EPC solutions that combine technical expertise, skilled manpower, and disciplined project execution across diverse industrial sectors.
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
                  <div className="w-10 h-1 bg-accent mb-4" />
                  <h2 className="text-2xl md:text-3xl font-black">Our Vision</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    To be a leading engineering and construction partner recognized for delivering excellence in mechanical fabrication, civil construction, and steel infrastructure.
                  </p>
                </div>
                <div>
                  <div className="w-10 h-1 bg-accent mb-4" />
                  <h2 className="text-2xl md:text-3xl font-black">Our Mission</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    To provide high-quality fabrication, installation, and construction services meeting the highest standards of safety, efficiency, and client satisfaction.
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
            <div className="w-12 h-1 bg-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-black">Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v) => (
              <SectionReveal key={v.title}>
                <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon size={28} className="text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-4xl font-black text-primary-foreground mb-6">
            Partner With Concerted Industries
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded font-bold text-sm transition-all duration-300 hover:bg-industrial-orange-hover hover:gap-3 group"
          >
            Contact Us
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
