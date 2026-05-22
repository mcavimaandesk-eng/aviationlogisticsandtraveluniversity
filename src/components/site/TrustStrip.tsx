export function TrustStrip() {
  const items = [
    { tag: "DGCA", sub: "Directorate General of Civil Aviation" },
    { tag: "BCAS", sub: "Bureau of Civil Aviation Security" },
    { tag: "MoCA", sub: "Ministry of Civil Aviation, GoI" },
    { tag: "AAI", sub: "Airports Authority of India" },
    { tag: "NSDC", sub: "Skill India · NSQF Level 5–7" },
    { tag: "IATA", sub: "Global Travel Standards" },
  ];
  return (
    <section aria-label="Regulatory alignment" className="border-y border-border bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Curriculum aligned with regulators of the Government of India
        </div>
        <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
          {items.map((i) => (
            <div
              key={i.tag}
              className="flex flex-col items-center rounded-md border border-border bg-card px-3 py-3 text-center shadow-card"
            >
              <div className="font-display text-lg font-bold text-navy">{i.tag}</div>
              <div className="text-[10px] leading-tight text-muted-foreground">{i.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
