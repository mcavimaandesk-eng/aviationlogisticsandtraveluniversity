import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "./index";
import { AVIATION_STATS_2026, HUBS } from "@/lib/stats";

export const Route = createFileRoute("/industry")({
  head: () => ({
    meta: [
      { title: "Industry Outlook 2026 & Beyond — Aviation, Cargo & Travel Tech India" },
      { name: "description", content: "Data-backed view of India's aviation industry: ₹45,000 Cr economy, 1,200+ aircraft order book, 157 operational airports, 4.2 L new jobs by 2030. Sources: MoCA, DGCA, AAI, IATA." },
      { property: "og:title", content: "Aviation India 2026 — Industry Outlook by ALTTII" },
      { property: "og:description", content: "Demand-supply gap, hub-wise outlook and the policy framework shaping India's aviation decade." },
    ],
  }),
  component: IndustryPage,
});

function IndustryPage() {
  const policies = [
    { t: "UDAN (RCS)", d: "Regional Connectivity Scheme — 519+ routes operationalised, unlocking Tier-2/3 demand." },
    { t: "GatiShakti", d: "National master plan integrating airports with rail, road and inland waterways for cargo." },
    { t: "DigiYatra", d: "Face-authentication boarding across 28 airports, eliminating paper IDs and boarding passes." },
    { t: "Krishi Udan 2.0", d: "Air-cargo subsidy for perishables & North-East / hill / island producers." },
    { t: "Drone Rules 2025", d: "BVLOS corridors, NPNT compliance and cargo drone pilot programs scaling rapidly." },
    { t: "MoCA Vision 2030", d: "4.2 L new aviation jobs, 220 operational airports and 420 M annual passengers." },
  ];
  return (
    <SiteLayout>
      <section className="border-b border-border bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-saffron">Industry Outlook</div>
          <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">Aviation India · 2026 & Beyond</h1>
          <p className="mt-3 max-w-3xl text-white/80">
            All data referenced from the Ministry of Civil Aviation (MoCA), DGCA traffic reports,
            AAI passenger statistics and IATA India outlook. ALTTII publishes this view to keep
            students, parents and partners informed.
          </p>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="By the Numbers" title="The decade that defines Indian aviation" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AVIATION_STATS_2026.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="font-display text-4xl font-bold text-navy">{s.value}</div>
                <div className="mt-2 text-sm text-foreground">{s.label}</div>
                <div className="mt-3 text-[10px] uppercase tracking-widest text-muted-foreground">Source · {s.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="Policy Tailwinds" title="The government framework powering the boom" sub="Each policy is a direct demand driver for ALTTII-trained roles." />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {policies.map((p) => (
              <div key={p.t} className="rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="font-display text-lg font-bold text-navy">{p.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="Hub-wise Outlook" title="Where the demand is concentrated" />
          <div className="mt-8 overflow-hidden rounded-xl border border-border shadow-card">
            <table className="w-full text-left text-sm">
              <thead className="bg-navy text-navy-foreground">
                <tr>
                  <th className="px-4 py-3">Code</th>
                  <th className="px-4 py-3">Airport</th>
                  <th className="px-4 py-3">Passengers/yr</th>
                  <th className="px-4 py-3">Strategic Role</th>
                </tr>
              </thead>
              <tbody className="bg-card">
                {HUBS.map((h, i) => (
                  <tr key={h.code} className={i % 2 ? "bg-secondary/40" : ""}>
                    <td className="px-4 py-3 font-display text-lg font-bold text-saffron">{h.code}</td>
                    <td className="px-4 py-3 font-medium text-navy">{h.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{h.pax}</td>
                    <td className="px-4 py-3 text-muted-foreground">{h.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
