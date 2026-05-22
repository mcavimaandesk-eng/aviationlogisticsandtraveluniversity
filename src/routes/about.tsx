import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "./index";
import founderImg from "@/assets/founder.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ALTTII — Aviation Logistics & Travel Technology Institute of India" },
      { name: "description", content: "Founded 2026 in alignment with DGCA, BCAS and Ministry of Civil Aviation. India's first specialized aviation career institute powered by Vimaan Desk & Fly My Luggage." },
      { property: "og:title", content: "About ALTTII" },
      { property: "og:description", content: "India's first specialized aviation institute, by aviation operators — for the aviation industry." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-saffron">About the Institute</div>
          <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">An operator-led institute<br/>for India's aviation decade</h1>
          <p className="mt-4 max-w-3xl text-white/85">
            ALTTII is India's first specialized institute dedicated to aviation logistics,
            airport operations and travel technology — built by operators who actually run
            airport-side businesses, aligned with DGCA, BCAS and the Ministry of Civil Aviation.
          </p>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-3">
          {[
            { t: "Mission", d: "Build a 4-lakh-strong, certified aviation workforce by 2030 — one that meets the operational standards of DGCA, BCAS and global IATA carriers." },
            { t: "Vision", d: "Become the de-facto career platform of New Bharat's aviation economy — covering passengers, cargo, technology and security under one roof." },
            { t: "Mandate", d: "Curriculum co-designed with airport operators, regulators and airline partners. Every course mapped to a live job role and a paid internship." },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="font-display text-xs uppercase tracking-widest text-saffron">{c.t}</div>
              <div className="mt-2 text-foreground">{c.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="Operator DNA" title="Powered by live airport operations" sub="Two operating businesses inside Indian airports, now opened up as a training ground." />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="font-display text-xl font-bold text-navy">Vimaan Desk</div>
              <p className="mt-2 text-sm text-muted-foreground">Airport-side guest desk operations across major Indian terminals — handling check-in support, special assistance, and last-mile coordination. Students intern here as part of every certification.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="font-display text-xl font-bold text-navy">Fly My Luggage™</div>
              <p className="mt-2 text-sm text-muted-foreground">India's home-to-airport baggage logistics network. Smart baggage with RFID tracking, IATA Resolution 753 compliance, and door-to-door SLAs. ALTTII students operate it live in DEL, BOM, BLR & MAA.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-12">
          <div className="md:col-span-4">
            <img src={founderImg} alt="Mr. Narendra Kumar Tiwari" width={800} height={800} loading="lazy" className="aspect-square w-full rounded-xl object-cover shadow-elevated" />
          </div>
          <div className="md:col-span-8">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-saffron">Founder</div>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy">Mr. Narendra Kumar Tiwari</h2>
            <div className="text-sm text-muted-foreground">Founder · Airport Logistics, Smart Baggage Solutions & Aviation Business Development</div>
            <p className="mt-4 text-foreground/85">
              With deep operational experience inside Indian airports, Mr. Tiwari has spent years
              building Vimaan Desk and Fly My Luggage™ — practical airport-side businesses that
              now form ALTTII's live training ground. He has been a featured speaker at JECRC
              University and a recurring voice on aviation skill development with academia and
              industry bodies.
            </p>
            <p className="mt-3 text-foreground/85">
              His thesis is simple: <b>India's aviation boom will fail without a specialized
              workforce.</b> ALTTII is his answer.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
