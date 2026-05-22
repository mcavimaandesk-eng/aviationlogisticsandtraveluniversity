import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "./index";
import { PROGRAMS } from "@/lib/programs";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — ALTTII Aviation, Logistics & Travel Technology Courses" },
      { name: "description", content: "8 specialized aviation career tracks from 3-month certifications to 9-month diplomas. DGCA, BCAS & NSQF aligned. Internships at DEL, BOM, BLR, MAA airports." },
      { property: "og:title", content: "ALTTII Programs — Aviation, Cargo, Travel Tech, Drone, AVSEC" },
      { property: "og:description", content: "Industry-aligned aviation programs designed for India's ₹45,000 Cr aviation economy." },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  const categories = ["Certification", "Diploma", "Advanced", "Internship Track"] as const;
  return (
    <SiteLayout>
      <section className="border-b border-border bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-saffron">Career Catalog · 2026–27</div>
          <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">8 Specialized Aviation Programs</h1>
          <p className="mt-3 max-w-2xl text-white/80">
            Every track is mapped to a live job role at India's busiest airports. NSQF aligned,
            DGCA & BCAS compliant, with guaranteed paid internships at our partner hubs.
          </p>
        </div>
      </section>

      {categories.map((cat) => {
        const items = PROGRAMS.filter((p) => p.category === cat);
        if (!items.length) return null;
        return (
          <section key={cat} className="border-b border-border bg-background py-14">
            <div className="mx-auto max-w-7xl px-4">
              <SectionHeader eyebrow={cat} title={`${cat} Programs`} />
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {items.map((p) => (
                  <article key={p.slug} className="grid gap-0 overflow-hidden rounded-xl border border-border bg-card shadow-card md:grid-cols-5">
                    <img src={p.image} alt={p.title} width={600} height={600} loading="lazy" className="aspect-square h-full w-full object-cover md:col-span-2" />
                    <div className="flex flex-col p-5 md:col-span-3">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest">
                        <span className="rounded bg-navy px-2 py-0.5 text-white">{p.duration}</span>
                        <span className="rounded bg-india-green/10 px-2 py-0.5 text-india-green">{p.nsqf}</span>
                      </div>
                      <h3 className="mt-2 font-display text-xl font-bold text-navy">{p.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                      <div className="mt-3">
                        <div className="text-[10px] font-semibold uppercase tracking-widest text-saffron">Core Modules</div>
                        <ul className="mt-1 grid grid-cols-1 gap-x-3 gap-y-1 text-xs text-foreground/85 sm:grid-cols-2">
                          {p.modules.map((m) => <li key={m}>• {m}</li>)}
                        </ul>
                      </div>
                      <div className="mt-3">
                        <div className="text-[10px] font-semibold uppercase tracking-widest text-saffron">Target Job Roles</div>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {p.jobs.map((j) => (
                            <span key={j} className="rounded-full border border-border bg-secondary px-2 py-0.5 text-[11px] text-foreground/80">{j}</span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-auto flex items-center justify-between border-t border-dashed border-border pt-3 text-xs">
                        <div><span className="text-muted-foreground">Program Fee </span><b className="text-navy">{p.fee}</b></div>
                        <div><span className="text-muted-foreground">Expected CTC </span><b className="text-india-green">{p.salary}</b></div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </SiteLayout>
  );
}
