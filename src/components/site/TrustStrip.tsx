import { useLang } from "@/lib/i18n";

export function TrustStrip() {
  const { t } = useLang();
  const items = [
    { tag: "DGCA", sub: t("Directorate General of Civil Aviation", "नागरिक उड्डयन महानिदेशालय") },
    { tag: "BCAS", sub: t("Bureau of Civil Aviation Security", "नागरिक उड्डयन सुरक्षा ब्यूरो") },
    { tag: "MoCA", sub: t("Ministry of Civil Aviation, GoI", "नागर विमानन मंत्रालय, भारत सरकार") },
    { tag: "AAI", sub: t("Airports Authority of India", "भारतीय विमानपत्तन प्राधिकरण") },
    { tag: "NSDC", sub: t("Skill India · NSQF Level 5–7", "स्किल इंडिया · NSQF स्तर 5–7") },
    { tag: "IATA", sub: t("Global Travel Standards", "वैश्विक यात्रा मानक") },
  ];
  return (
    <section aria-label="Regulatory alignment" className="border-y border-border bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {t(
            "Curriculum aligned with regulators of the Government of India",
            "पाठ्यक्रम भारत सरकार के नियामकों के अनुरूप"
          )}
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
