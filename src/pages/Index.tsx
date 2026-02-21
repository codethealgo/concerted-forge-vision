import { Link } from "react-router-dom";
import { useCountUp } from "@/hooks/useCountUp";
import SectionReveal from "@/components/SectionReveal";
import {
  Building2, Pipette, Factory, PaintBucket, Route,
  Landmark, Warehouse, Dam, HardHat,
  ArrowRight, Shield, Clock, Users, CheckCircle, Wrench,
  Sun, Layers, ClipboardCheck,
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
              Civil &amp; Mechanical Fabrication Experts
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
      {/* <section className="bg-primary py-16">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem target={35} suffix="+" label="Years Experience" />
          <StatItem target={500} suffix="+" label="Skilled Workforce" />
          <StatItem target={200} suffix="+" label="Projects Delivered" />
          <StatItem target={100} suffix="%" label="Safety Driven" />
        </div>
      </section> */}

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

      {/* ── SOLAR MOUNTING ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionReveal>
            <div className="mb-14">
              <div className="w-12 h-1 bg-accent mb-4" />
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground font-semibold mb-2">Solar Solutions</p>
              <h2 className="text-3xl md:text-4xl font-black">Optimizing Solar Mounting Designs</h2>
            </div>
          </SectionReveal>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              { icon: Sun, title: "Tilt Angle & Orientation", bullets: ["Optimized panel positioning for maximum energy yield", "Site-specific tilt calculations"] },
              { icon: Layers, title: "Material Selection", bullets: ["High-grade aluminium & galvanized steel", "Corrosion-resistant mounting hardware"] },
              { icon: Shield, title: "Wind & Load Resistance", bullets: ["Engineered for extreme weather conditions", "Structural load compliance"] },
              { icon: Landmark, title: "Rooftop & Ground Mounting", bullets: ["Flat roof and pitched roof solutions", "Open-field ground mount systems"] },
              { icon: Route, title: "Tracking Systems", bullets: ["Single-axis and dual-axis solar trackers", "Increased energy generation up to 25%"] },
              { icon: Wrench, title: "Innovative Mounting Products", bullets: ["Floating solar mounts", "Tool-free modular designs"] },
            ].map((s) => (
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
            <Link to="/solar-mounting" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-bold text-sm transition-all duration-300 hover:bg-industrial-orange-hover hover:gap-3 group">
              Explore Solar Mounting
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ALUMINIUM FRAMES ── */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <SectionReveal>
            <div className="mb-14">
              <div className="w-12 h-1 bg-accent mb-4" />
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground font-semibold mb-2">Advanced Materials</p>
              <h2 className="text-3xl md:text-4xl font-black">Advancements in Aluminium Module Frames</h2>
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Layers, title: "Stronger Yet Slimmer" },
              { icon: Shield, title: "Next-Gen Protective Coatings" },
              { icon: Factory, title: "Precision Manufacturing" },
              { icon: CheckCircle, title: "Recycling & Circular Economy" },
            ].map((s) => (
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
            <Link to="/aluminium-frames" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded font-bold text-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:gap-3 group">
              Explore Aluminium Frames
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── EPC BEST PRACTICES ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionReveal>
            <div className="mb-14">
              <div className="w-12 h-1 bg-accent mb-4" />
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground font-semibold mb-2">Industry Standards</p>
              <h2 className="text-3xl md:text-4xl font-black">Best Practices in EPC Solar Projects</h2>
            </div>
          </SectionReveal>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              { icon: ClipboardCheck, title: "Project Planning & Feasibility", bullets: ["Site surveys & yield analysis", "Compliance evaluation"] },
              { icon: Building2, title: "Engineering Excellence", bullets: ["Tilt optimization & structural safety", "IEC & IEEE compliance"] },
              { icon: Factory, title: "Procurement Strategy", bullets: ["Tier-1 component sourcing", "QA protocols & vendor coordination"] },
              { icon: HardHat, title: "Construction & Execution", bullets: ["Skilled workforce deployment", "Safety compliance & precision installation"] },
              { icon: CheckCircle, title: "Testing & Commissioning", bullets: ["Electrical testing & performance validation", "Grid synchronization"] },
              { icon: Wrench, title: "O&M Integration", bullets: ["SCADA monitoring systems", "Preventive maintenance planning"] },
            ].map((s) => (
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
            <Link to="/epc-best-practices" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-bold text-sm transition-all duration-300 hover:bg-industrial-orange-hover hover:gap-3 group">
              Explore EPC Best Practices
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CONCERTED INDUSTRIES ── */}
      <section className="py-20 md:py-28 bg-secondary">
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
