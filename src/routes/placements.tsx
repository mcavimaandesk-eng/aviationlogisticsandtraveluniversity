import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "./index";

export const Route = createFileRoute("/placements")({
  head: () => ({
    meta: [
      { title: "Placements & Internships — ALTTII" },
      { name: "description", content: "100% placement assistance. Guaranteed internships at IndiGo, Air India, AAI, Adani Airports, GMR Airports, Bird Group, Çelebi and more." },
      { property: "og:title", content: "Placements at ALTTII" },
      { property: "og:description", content: "From classroom to terminal floor. Internships, hiring, and lifelong career mobility." },
    ],
  }),
  component: PlacementsPage,
});

function PlacementsPage() {
  const employers = ["IndiGo","Air India","Akasa Air","SpiceJet","AAI","Adani Airports","GMR Airports","Bird Group","Çelebi NAS","Menzies Aviation","Bharat Petroleum AAFS","Blue Dart","DHL","FedEx","Yatra","MakeMyTrip","Amadeus","Sabre"];
  const stats = [
    { v: "100%", l: "Internship guarantee" },
    { v: "₹3.8 L", l: "Median package (Cohort 1 projection)" },
    { v: "₹8.5 L", l: "Highest projected package" },
    { v: "18+", l: "Hiring partners onboard" },
  ];
  const stories = [
    { q: "ALTTII training gave me real airport security experience I couldn't get elsewhere. I started as an intern and was offered a full role at the same hub within 4 months.", who: "Arjun M., Vimaan Desk Intern" },
    { q: "The GDS lab uses the exact Amadeus interface airlines deploy. By month 3 I was issuing live PNRs. That's how you actually learn travel tech.", who: "Sneha R., Travel Tech Diploma" },
    { q: "DGR certification + a paid internship at a cargo hub — no other institute offers this combo in India.", who: "Vikas T., Cargo Specialist" },
  ];

  return (
    <SiteLayout>
      <section className="border-b border-border bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-saffron">Career Outcomes</div>
          <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">From classroom to terminal floor</h1>
          <p className="mt-3 max-w-2xl text-white/80">
            Every ALTTII program ships with a mandatory, paid internship inside Vimaan Desk
            or Fly My Luggage™ operations at India's major airports — and an active referral
            pipeline into 18+ hiring partners.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                <div className="font-display text-3xl font-bold text-saffron">{s.v}</div>
                <div className="mt-1 text-xs text-white/80">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="Hiring Partners" title="The airlines, airports & integrators that hire our graduates" />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {employers.map((e) => (
              <div key={e} className="flex items-center justify-center rounded-md border border-border bg-card px-3 py-4 text-center text-sm font-semibold text-navy shadow-card">
                {e}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="Student Voices" title="Real experiences. Real terminals." />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {stories.map((s) => (
              <blockquote key={s.who} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="font-display text-3xl leading-none text-saffron">"</div>
                <p className="mt-1 text-sm text-foreground/85">{s.q}</p>
                <footer className="mt-4 text-xs font-semibold text-navy">— {s.who}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="Placement Protection Plan" title="If we don't place you, we refund you" />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { t: "Guaranteed Internship", d: "Every enrolled student gets a paid, full-time internship slot at DEL, BOM, BLR or MAA — written into the offer letter." },
              { t: "Placement Cell Support", d: "Dedicated placement officer, mock interviews with hiring managers, and resume + LinkedIn coaching for 18 months post-graduation." },
              { t: "Refund Protection", d: "If not placed within 6 months of certification, 50% program fee refund. Conditions apply per offer letter." },
            ].map((c) => (
              <div key={c.t} className="rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="font-display text-lg font-bold text-navy">{c.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
