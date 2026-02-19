import { Link } from "react-router-dom";
import { useCountUp } from "@/hooks/useCountUp";
import SectionReveal from "@/components/SectionReveal";
import {
  Building2, Pipette, Factory, PaintBucket, Route,
  Landmark, Warehouse, Dam, HardHat,
  ArrowRight, Shield, Clock, Users, CheckCircle, Wrench,
} from "lucide-react";
import heroImg from "@/assets/hero-industrial.jpg";

/* ── Stat Counter ── */
function StatItem({ target, label, suffix = "" }: { target: number; label: string; suffix?: string }) {
  const { count, ref } = useCountUp(target);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-black text-accent">{count}{suffix}</div>
      <div className="mt-2 text-sm text-primary-foreground/50 uppercase tracking-widest">{label}</div>
    </div>
  );
}

/* ── Data ── */
const mechanicalServices = [
  {
    icon: Building2,
    title: "Site Fabrication & Erection of Structural Steel",
    bullets: ["On-site steel fabrication and assembly", "Industrial steel erection and heavy structures"],
  },
  {
    icon: Pipette,
    title: "Piping Fabrication and Erection",
    bullets: ["Process piping and utility piping", "Industrial pipeline systems"],
  },
  {
    icon: Factory,
    title: "Equipment Fabrication and Erection",
    bullets: ["Heavy equipment installation", "Industrial machinery erection"],
  },
  {
    icon: PaintBucket,
    title: "Sand / Grit Blasting, Painting, Insulation & Protective Coating",
    bullets: ["Surface preparation", "Industrial painting and corrosion protection"],
  },
  {
    icon: Route,
    title: "Cross-Country Pipelines and Terminal Stations",
    bullets: ["Pipeline laying and erection", "Terminal station construction and commissioning"],
  },
];

const civilServices = [
  { icon: Landmark, title: "Construction of Foundations" },
  { icon: Warehouse, title: "Sheds and Industrial Buildings" },
  { icon: Dam, title: "Reservoirs and Dams" },
  { icon: HardHat, title: "Infrastructure Development Works" },
];

const whyUs = [
  { icon: Users, title: "Experienced Technical Workforce" },
  { icon: Shield, title: "Safety-First Execution" },
  { icon: CheckCircle, title: "Quality-Driven Processes" },
  { icon: Clock, title: "Timely Project Delivery" },
  { icon: Wrench, title: "End-to-End EPC Support" },
];

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Industrial fabrication site" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
        </div>
        <div className="relative container pt-20">
          <div className="max-w-3xl hero-stagger">
            <div className="w-14 h-1 bg-accent mb-6 opacity-0 animate-fade-up" />
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-primary-foreground leading-[1.08] opacity-0 animate-fade-up">
              Mechanical &amp; Industrial Installation Experts
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/60 max-w-2xl leading-relaxed opacity-0 animate-fade-up">
              Delivering Fabrication, Erection, Piping, Surface Protection, and Infrastructure Solutions Across Industries
            </p>
            <div className="mt-10 flex flex-wrap gap-4 opacity-0 animate-fade-up">
              <Link
                to="/mechanical-installation"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded font-bold text-sm transition-all duration-300 hover:bg-industrial-orange-hover hover:gap-3 group"
              >
                Our Services
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded font-bold text-sm transition-all duration-300 hover:border-primary-foreground/70"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-primary py-16">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem target={35} suffix="+" label="Years Experience" />
          <StatItem target={500} suffix="+" label="Skilled Workforce" />
          <StatItem target={200} suffix="+" label="Projects Delivered" />
          <StatItem target={100} suffix="%" label="Safety Driven" />
        </div>
      </section>

      {/* ── MECHANICAL & INDUSTRIAL INSTALLATION ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionReveal>
            <div className="mb-14">
              <div className="w-12 h-1 bg-accent mb-4" />
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground font-semibold mb-2">Core Division</p>
              <h2 className="text-3xl md:text-4xl font-black">Mechanical & Industrial Installation</h2>
            </div>
          </SectionReveal>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {mechanicalServices.map((s) => (
              <SectionReveal key={s.title}>
                <div className="bg-card border border-border rounded-lg p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded bg-accent/10 flex items-center justify-center mb-5">
                    <s.icon size={24} className="text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 leading-snug">{s.title}</h3>
                  <ul className="space-y-1.5">
                    {s.bullets.map((b) => (
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
          <div className="text-center mt-10">
            <Link
              to="/mechanical-installation"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-bold text-sm transition-all duration-300 hover:bg-industrial-orange-hover hover:gap-3 group"
            >
              View All Services
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CIVIL & INFRASTRUCTURE ── */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <SectionReveal>
            <div className="mb-14">
              <div className="w-12 h-1 bg-accent mb-4" />
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground font-semibold mb-2">Infrastructure</p>
              <h2 className="text-3xl md:text-4xl font-black">Civil & Infrastructure</h2>
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {civilServices.map((s) => (
              <SectionReveal key={s.title}>
                <div className="bg-card border border-border rounded-lg p-7 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <s.icon size={28} className="text-muted-foreground group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <h3 className="font-bold">{s.title}</h3>
                </div>
              </SectionReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/civil-infrastructure"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded font-bold text-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:gap-3 group"
            >
              Explore Civil Services
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CONCERTED INDUSTRIES ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-14">
              <div className="w-12 h-1 bg-accent mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black">Why Concerted Industries</h2>
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyUs.map((w) => (
              <SectionReveal key={w.title}>
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-full bg-primary/5 border-2 border-border flex items-center justify-center mx-auto mb-4 group-hover:border-accent transition-colors duration-300">
                    <w.icon size={28} className="text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-sm">{w.title}</h3>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent rounded-full blur-[150px]" />
        </div>
        <div className="relative container text-center">
          <h2 className="text-3xl md:text-5xl font-black text-primary-foreground max-w-3xl mx-auto">
            Looking for Reliable Industrial &amp; Infrastructure Execution?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-10 bg-accent text-accent-foreground px-10 py-4 rounded font-bold text-sm transition-all duration-300 hover:bg-industrial-orange-hover hover:gap-3 group"
          >
            Start Your Project With Concerted Industries
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
