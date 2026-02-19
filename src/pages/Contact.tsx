import { useState } from "react";
import { ArrowRight, MapPin, Phone, Mail, Send } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionReveal from "@/components/SectionReveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <PageHero title="Contact Us" subtitle="Get in touch with our team for project inquiries and partnerships." />

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <SectionReveal>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">Get In Touch</p>
                <h2 className="text-3xl font-bold mb-8">We'd love to hear from you</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-muted-foreground text-sm">Industrial Area, Engineering District<br />City, Country</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground text-sm">info@concertedindustries.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal>
              {submitted ? (
                <div className="bg-surface rounded-lg p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Full Name</label>
                      <input required type="text" className="w-full px-4 py-2.5 rounded border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email</label>
                      <input required type="email" className="w-full px-4 py-2.5 rounded border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Subject</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Project inquiry" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Message</label>
                    <textarea required rows={5} className="w-full px-4 py-2.5 rounded border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Tell us about your project..." />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded font-semibold text-sm transition-all duration-300 hover:bg-steel-light hover:gap-3 group">
                    Send Message
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </SectionReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
