import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import {
  Wrench, Building2, Factory, Droplets, Flame, Shield, HardHat,
  Pipette, PaintBucket, Thermometer, Route, Landmark, Warehouse, Dam,
  ArrowRight, ChevronRight,
} from "lucide-react";
import heroImg from "@/assets/hero-industrial.jpg";
import visionImg from "@/assets/vision-industrial.jpg";
import careersImg from "@/assets/careers-banner.jpg";

function StatItem({ target, label, suffix = "" }: { target: number; label: string; suffix?: string }) {
  const { count, ref } = useCountUp(target);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary-foreground">
        {count}{suffix}
      </div>
      <div className="mt-2 text-sm text-primary-foreground/60 uppercase tracking-widest">{label}</div>
    </div>
  );
}

const services = [
  { icon: Wrench, title: "Mechanical & Industrial Installation" },
  { icon: Building2, title: "Structural Steel Fabrication & Erection" },
  { icon: Pipette, title: "Piping Fabrication and Erection" },
  { icon: Factory, title: "Equipment Fabrication and Erection" },
  { icon: PaintBucket, title: "Sand/Grit Blasting & Painting" },
  { icon: Thermometer, title: "Insulation & Protective Coating" },
  { icon: Route, title: "Cross-Country Pipeline & Terminals" },
  { icon: Landmark, title: "Construction of Foundations" },
  { icon: Warehouse, title: "Industrial Sheds & Buildings" },
  { icon: Dam, title: "Reservoirs and Dams" },
];

const industries = [
  { icon: Flame, title: "Power & Energy" },
  { icon: Factory, title: "Steel & Cement" },
  { icon: Wrench, title: "Industrial Manufacturing" },
  { icon: Droplets, title: "Water Infrastructure" },
  { icon: Route, title: "Oil & Process Industries" },
];

export default function Home() {
  const revealRef = useScrollReveal();

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Industrial fabrication facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        </div>
        <div className="relative container pt-20">
          <div className="max-w-3xl hero-stagger">
            <p className="text-primary-foreground/60 uppercase tracking-[0.3em] text-sm font-semibold mb-4 opacity-0 animate-fade-up">
              Engineering Excellence
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.1] opacity-0 animate-fade-up">
              Civil and Mechanical Fabrication
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed opacity-0 animate-fade-up">
              Concerted Industries delivers specialized civil construction and mechanical fabrication services supporting industrial and infrastructure development projects with precision, safety, and reliability.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 opacity-0 animate-fade-up">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-3.5 rounded font-semibold text-sm transition-all duration-300 hover:bg-primary-foreground/90 hover:gap-3 group"
              >
                Our Services
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded font-semibold text-sm transition-all duration-300 hover:border-primary-foreground/70"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Split */}
      <section ref={revealRef} className="py-20 md:py-28">
        <div className="container">
          <div className="reveal grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Engineering Excellence Since 1989
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                Concerted Industries is an engineering and construction company with over 35 years of industry experience specializing in civil construction and mechanical fabrication services for industrial and infrastructure projects.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300"
              >
                Learn More <ChevronRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <img
                src={visionImg}
                alt="Precision engineering facility"
                className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-2xl">35+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-16">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem target={35} suffix="+" label="Years Experience" />
          <StatItem target={500} suffix="+" label="Skilled Workforce" />
          <StatItem target={200} suffix="+" label="Projects Delivered" />
          <StatItem target={100} suffix="%" label="Safety Driven" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">Our Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold">What We Do</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group border border-border"
              >
                <s.icon size={28} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                <h3 className="mt-4 font-semibold text-sm leading-snug">{s.title}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded font-semibold text-sm transition-all duration-300 hover:bg-steel-light hover:gap-3 group"
            >
              View All Services
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlight Block */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="bg-surface rounded-2xl p-10 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Built on decades of experience, Concerted Industries delivers reliable fabrication and construction solutions combining technical expertise, skilled manpower, and disciplined project execution.
            </h2>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-8 py-3 rounded font-semibold text-sm transition-all duration-300 hover:bg-steel-light"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">Sectors</p>
            <h2 className="text-3xl md:text-4xl font-bold">Industries We Serve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {industries.map((i) => (
              <div
                key={i.title}
                className="bg-card rounded-lg p-6 text-center border border-border hover:shadow-md transition-all duration-300 group"
              >
                <i.icon size={32} className="mx-auto text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                <h3 className="mt-4 font-semibold text-sm">{i.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Banner */}
      <section className="relative py-28 md:py-36">
        <div className="absolute inset-0">
          <img src={careersImg} alt="Construction site at sunset" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative container text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">
            Build the Future of Engineering With Us
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto">
            Join our team of skilled engineers, fabricators, and professionals.
          </p>
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 mt-8 bg-primary-foreground text-primary px-8 py-3.5 rounded font-semibold text-sm transition-all duration-300 hover:bg-primary-foreground/90 hover:gap-3 group"
          >
            View Careers
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
