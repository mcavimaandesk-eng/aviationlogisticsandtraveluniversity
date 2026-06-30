import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "./index";
import { PROGRAMS } from "@/lib/programs";
import { openWhatsAppLead, readForm } from "@/lib/lead";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions 2026–27 — Apply to ALTTII Aviation Programs" },
      { name: "description", content: "Apply for the 2026–27 cohort. Simple 4-step admission process, scholarships, EMI options, and guaranteed internships at India's major airports." },
      { property: "og:title", content: "ALTTII Admissions 2026–27" },
      { property: "og:description", content: "Limited seats per hub. Apply now for India's first specialized aviation institute." },
    ],
  }),
  component: AdmissionsPage,
});

function AdmissionsPage() {
  const steps = [
    { n: "01", t: "Online Enquiry", d: "Submit the application form — 2 minutes. Counsellor calls within 24 hrs." },
    { n: "02", t: "Eligibility Check", d: "12th pass (any stream) for Certifications · Graduate/UG for Diplomas. English communication test." },
    { n: "03", t: "Aptitude & Interview", d: "Domain aptitude + personal interview with industry panel." },
    { n: "04", t: "Offer + Internship Allocation", d: "Seat confirmed at preferred hub (DEL/BOM/BLR/MAA). Internship slot locked." },
  ];
  return (
    <SiteLayout>
      <section className="border-b border-border bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-saffron">Admissions Open · 2026–27 Cohort</div>
          <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">Your aviation career begins here</h1>
          <p className="mt-3 max-w-2xl text-white/80">
            Transparent fees. Scholarships for women & North-East candidates. EMI options via partner NBFCs.
            Internship guarantee at Indian airports.
          </p>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="How to Apply" title="4 steps from enquiry to enrollment" />
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="font-display text-3xl font-bold text-saffron">{s.n}</div>
                <div className="mt-2 font-semibold text-navy">{s.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Eligibility & Fees" title="Transparent. NSQF-graded." />
            <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card shadow-card">
              <table className="w-full text-left text-sm">
                <thead className="bg-navy text-navy-foreground">
                  <tr>
                    <th className="px-4 py-3">Program</th>
                    <th className="px-4 py-3">NSQF</th>
                    <th className="px-4 py-3">Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {PROGRAMS.map((p, i) => (
                    <tr key={p.slug} className={i % 2 ? "bg-secondary/40" : ""}>
                      <td className="px-4 py-3 font-medium text-navy">{p.title}</td>
                      <td className="px-4 py-3 text-muted-foreground">{p.nsqf}</td>
                      <td className="px-4 py-3 font-bold text-india-green">{p.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="Apply Now" title="Reserve your seat" />
            <form
              className="mt-6 space-y-3 rounded-xl border border-border bg-card p-6 shadow-card"
              onSubmit={(e) => {
                e.preventDefault();
                const f = readForm(e.currentTarget);
                openWhatsAppLead("Admission Application — 2026–27", {
                  Name: f.name, Mobile: f.mobile, Email: f.email,
                  Hub: f.hub, Program: f.program, Notes: f.notes,
                });
              }}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <input name="name" required className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-saffron" placeholder="Full Name" />
                <input name="mobile" required className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-saffron" placeholder="Mobile (+91)" />
              </div>
              <input name="email" type="email" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-saffron" placeholder="Email" />
              <div className="grid gap-3 sm:grid-cols-2">
                <select name="hub" className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option>Preferred Hub</option><option>Delhi (DEL)</option><option>Mumbai (BOM)</option><option>Bengaluru (BLR)</option><option>Chennai (MAA)</option>
                </select>
                <select name="program" className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option>Program</option>
                  {PROGRAMS.map((p) => <option key={p.slug}>{p.title}</option>)}
                </select>
              </div>
              <textarea name="notes" rows={3} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Anything we should know? (Optional)" />
              <button type="submit" className="w-full rounded-md bg-saffron py-2.5 text-sm font-bold text-saffron-foreground transition hover:brightness-105">
                💬 Submit via WhatsApp →
              </button>
              <Link to="/prospectus" className="block w-full rounded-md border border-navy bg-navy py-2.5 text-center text-sm font-bold text-white hover:brightness-110">
                Reserve seat now — Pay ₹299 & download Prospectus →
              </Link>
              <div className="text-[10px] text-muted-foreground">Data handled per MeitY norms. We never share applicant data.</div>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
