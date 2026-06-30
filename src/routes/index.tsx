import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { TrustStrip } from "@/components/site/TrustStrip";
import heroImg from "@/assets/hero-airport.jpg";
import { PROGRAMS } from "@/lib/programs";
import { AVIATION_STATS_2026, DEMAND_GAP, HUBS } from "@/lib/stats";
import founderImg from "@/assets/founder.jpg";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALTTII — India's First Aviation Logistics & Travel Technology Institute" },
      { name: "description", content: "DGCA & BCAS aligned career institute for India's ₹45,000 Cr aviation economy. Certifications, guaranteed internships at DEL · BOM · BLR · MAA airports, 100% placement support." },
      { property: "og:title", content: "ALTTII — Aviation Logistics & Travel Technology Institute of India" },
      { property: "og:description", content: "India's first specialized aviation career platform. Get certified. Get hired. Intern inside major Indian airports." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <TrustStrip />
      <Stats />
      <Programs />
      <DemandSupply />
      <Hubs />
      <Founder />
      <FinalCTA />
    </SiteLayout>
  );
}

function Hero() {
  const { t } = useLang();
  return (
    <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
      <img
        src={heroImg}
        alt="Indian international airport at golden hour with IndiGo and Air India aircraft"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 gov-grid" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-saffron/40 bg-saffron/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-saffron">
              <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
              {t(
                "Est. 2026 · DGCA · BCAS · Ministry of Civil Aviation framework",
                "स्थापना 2026 · डीजीसीए · बीसीएएस · नागर विमानन मंत्रालय की रूपरेखा"
              )}
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-balance sm:text-5xl md:text-6xl">
              {t("India's First Institute for ", "विशिष्ट विमानन करियर के लिए ")}
              <span className="text-saffron">
                {t("Specialized Aviation Careers", "भारत का पहला संस्थान")}
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base text-white/85 sm:text-lg">
              {t(
                "Get Certified. Get Hired. Intern inside the airport logistics center by ",
                "प्रमाणित बनें। नौकरी पाएं। हवाई अड्डे के लॉजिस्टिक्स केंद्र में इंटर्नशिप करें — "
              )}
              <b className="text-white">Vimaan Desk</b> & <b className="text-white">Fly My Luggage™</b>.
              {" "}
              {t(
                "Curriculum aligned with DGCA & BCAS under the Ministry of Civil Aviation, India.",
                "पाठ्यक्रम डीजीसीए एवं बीसीएएस के अनुरूप, नागर विमानन मंत्रालय, भारत सरकार के अंतर्गत।"
              )}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/prospectus"
                className="rounded-md bg-saffron px-6 py-3 text-sm font-bold text-saffron-foreground shadow-elevated transition hover:brightness-105"
              >
                {t("Enroll for 2026–27 · Pay ₹299 →", "2026–27 बैच · ₹299 भुगतान करें →")}
              </Link>
              <a
                href="https://wa.me/918700904917?text=Hello%20ALTTII%2C%20I'd%20like%20to%20know%20more%20about%20the%202026%E2%80%9327%20batch."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-india-green bg-india-green/90 px-6 py-3 text-sm font-bold text-white transition hover:brightness-110"
              >
                💬 {t("WhatsApp Counsellor", "व्हाट्सएप पर बात करें")}
              </a>
              <Link
                to="/programs"
                className="rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                {t("Explore 8 Programs", "8 कार्यक्रम देखें")}
              </Link>
            </div>

            <div className="mt-8 grid max-w-2xl grid-cols-3 gap-4">
              {[
                { k: "3–9", v: t("Months to job-ready", "महीनों में नौकरी के लिए तैयार") },
                { k: "100%", v: t("Placement assistance", "नियुक्ति सहायता") },
                { k: "₹3–8 L", v: t("Average package range", "औसत वेतन सीमा") },
              ].map((s) => (
                <div key={s.v} className="rounded-md border border-white/15 bg-white/5 p-3 backdrop-blur">
                  <div className="font-display text-2xl font-bold text-saffron">{s.k}</div>
                  <div className="text-xs text-white/80">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur-md shadow-elevated">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-xs font-semibold uppercase tracking-widest text-saffron">
                  {t("Admission Enquiry", "प्रवेश पूछताछ")}
                </div>
                <div className="rounded bg-saffron/20 px-2 py-0.5 text-[10px] font-bold text-saffron">
                  {t("2026–27 OPEN", "2026–27 खुला")}
                </div>
              </div>
              <form className="space-y-3">
                <input className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 outline-none focus:border-saffron" placeholder={t("Full Name", "पूरा नाम")} />
                <input className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 outline-none focus:border-saffron" placeholder={t("Mobile (+91)", "मोबाइल (+91)")} />
                <input className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 outline-none focus:border-saffron" placeholder={t("Email", "ईमेल")} />
                <select className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white outline-none focus:border-saffron">
                  <option className="text-ink">{t("Interested Program", "रुचि का कार्यक्रम")}</option>
                  {PROGRAMS.map((p) => (<option key={p.slug} className="text-ink">{p.title}</option>))}
                </select>
                <button type="button" className="w-full rounded-md bg-saffron py-2.5 text-sm font-bold text-saffron-foreground transition hover:brightness-105">
                  {t("Request Callback", "कॉलबैक का अनुरोध करें")}
                </button>
                <div className="text-[10px] text-white/60">
                  {t(
                    "By submitting you agree to ALTTII's privacy policy. Data handled per MeitY norms.",
                    "सबमिट करके आप ALTTII की गोपनीयता नीति से सहमत होते हैं। डेटा MeitY मानकों के अनुसार संभाला जाता है।"
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 bg-tricolor-bar" />
    </section>
  );
}

function Stats() {
  const { t } = useLang();
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow={t("Aviation India · 2026 & Beyond", "विमानन भारत · 2026 एवं आगे")}
          title={t("The opportunity is generational", "यह अवसर पीढ़ीगत है")}
          sub={t(
            "Official data from Ministry of Civil Aviation, DGCA, AAI and IATA India outlook.",
            "नागर विमानन मंत्रालय, डीजीसीए, एएआई एवं IATA भारत आउटलुक के आधिकारिक आंकड़े।"
          )}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AVIATION_STATS_2026.map((s) => (
            <div key={s.label} className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-card transition hover:shadow-elevated">
              <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-full bg-saffron/10 transition group-hover:bg-saffron/20" />
              <div className="font-display text-4xl font-bold text-navy">{s.value}</div>
              <div className="mt-2 text-sm text-foreground">{s.label}</div>
              <div className="mt-3 text-[10px] uppercase tracking-widest text-muted-foreground">{t("Source", "स्रोत")} · {s.source}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programs() {
  const { t } = useLang();
  return (
    <section className="bg-secondary/40 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow={t("Specialized Programs", "विशिष्ट कार्यक्रम")}
          title={t("8 career tracks. One platform.", "8 करियर ट्रैक। एक मंच।")}
          sub={t(
            "From 3-month certifications to 9-month diplomas — every program is mapped to a live job role at India's busiest airports.",
            "3-माह के सर्टिफिकेशन से लेकर 9-माह के डिप्लोमा तक — प्रत्येक कार्यक्रम भारत के व्यस्ततम हवाई अड्डों की वास्तविक नौकरी से जुड़ा है।"
          )}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.slice(0, 6).map((p) => (
            <article key={p.slug} className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition hover:shadow-elevated">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} width={800} height={500} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded bg-navy/90 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white">{p.category}</span>
                <span className="absolute right-3 top-3 rounded bg-saffron px-2 py-1 text-[10px] font-bold uppercase text-saffron-foreground">{p.duration}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="text-[10px] uppercase tracking-widest text-india-green">{p.nsqf}</div>
                <h3 className="mt-1 font-display text-lg font-bold text-navy">{p.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.summary}</p>
                <div className="mt-4 flex items-center justify-between border-t border-dashed border-border pt-3 text-xs">
                  <div><span className="text-muted-foreground">{t("Fee", "शुल्क")} </span><b className="text-navy">{p.fee}</b></div>
                  <div><span className="text-muted-foreground">{t("CTC", "वेतन")} </span><b className="text-india-green">{p.salary}</b></div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/programs" className="inline-flex rounded-md bg-navy px-6 py-3 text-sm font-bold text-white transition hover:brightness-110">
            {t("View all 8 programs →", "सभी 8 कार्यक्रम देखें →")}
          </Link>
        </div>
      </div>
    </section>
  );
}

function DemandSupply() {
  const { t } = useLang();
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow={t("The Skill Gap", "कौशल अंतर")}
          title={t(
            "India trains 1 specialist for every 4 the airports need",
            "हवाई अड्डों की हर 4 ज़रूरतों पर भारत मात्र 1 विशेषज्ञ तैयार करता है"
          )}
          sub={t(
            "Industry vs supply (% of required workforce filled). Aviation India is hiring faster than colleges can train.",
            "मांग बनाम आपूर्ति (आवश्यक कार्यबल का %)। विमानन भारत कॉलेजों की प्रशिक्षण गति से तेज़ भर्ती कर रहा है।"
          )}
        />
        <div className="mt-10 grid gap-3">
          {DEMAND_GAP.map((d) => (
            <div key={d.role} className="rounded-lg border border-border bg-card p-4 shadow-card">
              <div className="flex items-center justify-between text-sm">
                <div className="font-semibold text-navy">{d.role}</div>
                <div className="text-xs text-muted-foreground">
                  <span className="font-bold text-saffron">{d.demand}%</span> {t("demand", "मांग")} · <span className="font-bold text-india-green">{d.supply}%</span> {t("supply", "आपूर्ति")}
                </div>
              </div>
              <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full bg-gradient-saffron" style={{ width: `${d.demand}%` }} />
              </div>
              <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full bg-india-green" style={{ width: `${d.supply}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hubs() {
  const { t } = useLang();
  return (
    <section className="bg-gradient-hero py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          dark
          eyebrow={t("Internship Network", "इंटर्नशिप नेटवर्क")}
          title={t(
            "Live operations at India's 6 busiest airports",
            "भारत के 6 व्यस्ततम हवाई अड्डों पर वास्तविक संचालन"
          )}
          sub={t(
            "Every ALTTII student trains inside a working terminal — not a simulator.",
            "हर ALTTII छात्र किसी सिमुलेटर पर नहीं, बल्कि असली टर्मिनल में प्रशिक्षण लेता है।"
          )}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HUBS.map((h) => (
            <div key={h.code} className="rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold text-saffron">{h.code}</span>
                <span className="text-xs text-white/70">{h.pax} {t("pax/yr", "यात्री/वर्ष")}</span>
              </div>
              <div className="mt-1 text-sm font-semibold">{h.name}</div>
              <div className="mt-2 text-xs text-white/70">{h.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  const { t } = useLang();
  return (
    <section className="bg-background py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-12">
        <div className="md:col-span-4">
          <img src={founderImg} alt="Mr. Narendra Kumar Tiwari, Founder ALTTII" width={800} height={800} loading="lazy" className="aspect-square w-full rounded-xl object-cover shadow-elevated" />
        </div>
        <div className="md:col-span-8">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-saffron">
            {t("Founder's Note", "संस्थापक का संदेश")}
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
            {t(
              "\"We don't teach aviation from textbooks. We teach it from terminals.\"",
              "\"हम विमानन किताबों से नहीं, हवाई अड्डों के टर्मिनलों से सिखाते हैं।\""
            )}
          </h2>
          <p className="mt-4 text-foreground/85">
            {t(
              "ALTTII was born from a simple frustration — India is building 90 new airports, ordering 1,200 aircraft, and projecting 4.2 lakh new jobs by 2030, yet there is no specialized institute that trains the workforce these airports actually need.",
              "ALTTII एक सरल विचार से जन्मा — भारत 90 नए हवाई अड्डे बना रहा है, 1,200 विमानों का ऑर्डर दे चुका है, और 2030 तक 4.2 लाख नई नौकरियाँ अनुमानित हैं, फिर भी इन हवाई अड्डों के लिए ज़रूरी कार्यबल को प्रशिक्षित करने वाला कोई विशिष्ट संस्थान नहीं है।"
            )}
          </p>
          <p className="mt-3 text-foreground/85">
            {t(
              "We've operated ",
              "हम वर्षों से "
            )}
            <b className="text-navy">Vimaan Desk</b> {t("and", "और")} <b className="text-navy">Fly My Luggage™</b>
            {t(
              " inside DEL, BOM, BLR & MAA for years. Now we're opening those live operations to students as a mandatory internship — so every ALTTII graduate ships out with real airport experience, not just a certificate.",
              " को DEL, BOM, BLR एवं MAA में संचालित कर रहे हैं। अब हम इन वास्तविक संचालनों को छात्रों के लिए अनिवार्य इंटर्नशिप के रूप में खोल रहे हैं — ताकि हर ALTTII स्नातक केवल प्रमाणपत्र नहीं, असली हवाई अड्डा अनुभव लेकर निकले।"
            )}
          </p>
          <div className="mt-5">
            <div className="font-display text-lg font-bold text-navy">
              {t("Mr. Narendra Kumar Tiwari", "श्री नरेन्द्र कुमार तिवारी")}
            </div>
            <div className="text-sm text-muted-foreground">
              {t(
                "Founder · Airport Logistics, Smart Baggage Solutions & Aviation Business Development",
                "संस्थापक · हवाई अड्डा लॉजिस्टिक्स, स्मार्ट बैगेज समाधान एवं विमानन व्यवसाय विकास"
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const { t } = useLang();
  return (
    <section className="bg-saffron py-14 text-saffron-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest opacity-80">
            {t("Admissions 2026–27 · Limited seats per hub", "प्रवेश 2026–27 · प्रत्येक हब में सीमित सीटें")}
          </div>
          <h3 className="mt-1 font-display text-2xl font-bold md:text-3xl">
            {t(
              "Don't just use technology. Build the future of travel.",
              "केवल तकनीक का उपयोग न करें। यात्रा का भविष्य गढ़िए।"
            )}
          </h3>
        </div>
        <Link to="/admissions" className="rounded-md bg-navy px-7 py-3.5 text-sm font-bold text-white shadow-elevated transition hover:brightness-110">
          {t("Start your application →", "अपना आवेदन शुरू करें →")}
        </Link>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, sub, dark }: { eyebrow: string; title: string; sub?: string; dark?: boolean }) {
  return (
    <div className="max-w-3xl">
      <div className={`text-[10px] font-semibold uppercase tracking-[0.25em] ${dark ? "text-saffron" : "text-saffron"}`}>{eyebrow}</div>
      <h2 className={`mt-2 font-display text-3xl font-bold md:text-4xl ${dark ? "text-white" : "text-navy"}`}>{title}</h2>
      {sub && <p className={`mt-3 text-base ${dark ? "text-white/80" : "text-muted-foreground"}`}>{sub}</p>}
    </div>
  );
}
