import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "./index";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ALTTII — Admissions, Partnerships & Press" },
      { name: "description", content: "Reach ALTTII admissions, partnerships and corporate hiring teams. +91 870 090 4917 · admissions@alttii.com. Hubs at Delhi, Mumbai, Bengaluru, Chennai." },
      { property: "og:title", content: "Contact ALTTII" },
      { property: "og:description", content: "Talk to admissions, partnerships and corporate hiring." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const hubs = [
    { city: "Delhi (DEL) — HQ", addr: "Aerocity Campus, IGI Airport area, New Delhi" },
    { city: "Mumbai (BOM)", addr: "Andheri East, near CSMIA T2, Mumbai" },
    { city: "Bengaluru (BLR)", addr: "Devanahalli, near KIAL, Bengaluru" },
    { city: "Chennai (MAA)", addr: "Meenambakkam, near MAA T2, Chennai" },
  ];
  return (
    <SiteLayout>
      <section className="border-b border-border bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-saffron">Get in touch</div>
          <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">Contact ALTTII</h1>
          <p className="mt-3 max-w-2xl text-white/80">Admissions, corporate hiring, partnerships, press — we'll route you to the right team.</p>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Reach Us" title="Talk to a human" />
            <div className="mt-6 space-y-4 rounded-xl border border-border bg-card p-6 shadow-card">
              <Row label="Admissions" v="+91 870 090 4917 · admissions@alttii.com" />
              <Row label="Corporate Hiring" v="hiring@alttii.com" />
              <Row label="Partnerships" v="partners@alttii.com" />
              <Row label="Press & Media" v="press@alttii.com" />
              <Row label="Hours" v="Mon–Sat · 9:00 – 19:00 IST" />
            </div>

            <div className="mt-8">
              <SectionHeader eyebrow="Campuses" title="Find us across India's major hubs" />
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {hubs.map((h) => (
                  <div key={h.city} className="rounded-lg border border-border bg-card p-4 shadow-card">
                    <div className="font-display text-sm font-bold text-navy">{h.city}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{h.addr}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <SectionHeader eyebrow="Message" title="Send us a message" />
            <form className="mt-6 space-y-3 rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="grid gap-3 sm:grid-cols-2">
                <input className="rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Full Name" />
                <input className="rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Mobile (+91)" />
              </div>
              <input className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Email" />
              <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option>I'm contacting about…</option>
                <option>Admissions</option><option>Corporate Hiring</option><option>Partnership</option><option>Press</option>
              </select>
              <textarea rows={5} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Your message" />
              <button type="button" className="w-full rounded-md bg-saffron py-2.5 text-sm font-bold text-saffron-foreground transition hover:brightness-105">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Row({ label, v }: { label: string; v: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-dashed border-border pb-3 last:border-0 last:pb-0">
      <div className="text-xs font-semibold uppercase tracking-widest text-saffron">{label}</div>
      <div className="text-right text-sm text-foreground">{v}</div>
    </div>
  );
}
