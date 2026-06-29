import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/sources")({
  head: () => ({
    meta: [
      { title: "Sources & Citations — DGCA · BCAS · MoCA | ALTTII" },
      {
        name: "description",
        content:
          "Official sources and citations behind ALTTII's aviation, logistics and travel technology statistics — DGCA, BCAS, Ministry of Civil Aviation, AAI, NSDC and IATA.",
      },
      { property: "og:title", content: "Sources & Citations — ALTTII" },
      {
        property: "og:description",
        content:
          "Government data behind our infographics: DGCA, BCAS, Ministry of Civil Aviation, AAI and NSDC.",
      },
    ],
  }),
  component: SourcesPage,
});

type Source = {
  claim: { en: string; hi: string };
  value: string;
  body: { en: string; hi: string };
  url: string;
  publisher: string;
  updated: string;
};

const SECTIONS: { title: { en: string; hi: string }; items: Source[] }[] = [
  {
    title: { en: "Regulators & Ministry", hi: "नियामक एवं मंत्रालय" },
    items: [
      {
        claim: { en: "DGCA — Civil aviation safety regulator of India", hi: "डीजीसीए — भारत का नागर विमानन सुरक्षा नियामक" },
        value: "DGCA",
        body: {
          en: "The Directorate General of Civil Aviation regulates air transport services, enforces civil air regulations, airworthiness and licensing of pilots, AMEs and cabin crew.",
          hi: "नागर विमानन महानिदेशालय हवाई परिवहन सेवाओं को नियंत्रित करता है तथा पायलट, एएमई एवं केबिन क्रू के लाइसेंसिंग एवं उड़ान योग्यता का प्रवर्तन करता है।",
        },
        url: "https://www.dgca.gov.in/",
        publisher: "Government of India",
        updated: "2026",
      },
      {
        claim: { en: "BCAS — Civil aviation security regulator", hi: "बीसीएएस — नागर विमानन सुरक्षा नियामक" },
        value: "BCAS",
        body: {
          en: "Bureau of Civil Aviation Security lays down standards and measures for security of civil flights at international and domestic airports in India.",
          hi: "नागर विमानन सुरक्षा ब्यूरो भारत के अंतर्राष्ट्रीय एवं घरेलू हवाई अड्डों पर नागरिक उड़ानों की सुरक्षा हेतु मानक निर्धारित करता है।",
        },
        url: "https://bcasindia.gov.in/",
        publisher: "Government of India",
        updated: "2026",
      },
      {
        claim: { en: "Ministry of Civil Aviation — Policy & framework", hi: "नागर विमानन मंत्रालय — नीति एवं रूपरेखा" },
        value: "MoCA",
        body: {
          en: "MoCA is responsible for formulation of national policies and programmes for development and regulation of the civil aviation sector in India.",
          hi: "मंत्रालय भारत में नागर विमानन क्षेत्र के विकास एवं विनियमन हेतु राष्ट्रीय नीतियों एवं कार्यक्रमों के निर्माण के लिए उत्तरदायी है।",
        },
        url: "https://www.civilaviation.gov.in/",
        publisher: "Government of India",
        updated: "2026",
      },
      {
        claim: { en: "Airports Authority of India", hi: "भारतीय विमानपत्तन प्राधिकरण" },
        value: "AAI",
        body: {
          en: "AAI manages a total of 137 airports and provides air navigation services over Indian airspace and adjoining oceanic areas.",
          hi: "एएआई कुल 137 हवाई अड्डों का प्रबंधन करता है तथा भारतीय वायुक्षेत्र एवं निकटवर्ती समुद्री क्षेत्रों में वायु संचालन सेवाएं प्रदान करता है।",
        },
        url: "https://www.aai.aero/",
        publisher: "Government of India",
        updated: "2026",
      },
    ],
  },
  {
    title: { en: "Growth, Traffic & Fleet Data", hi: "विकास, यातायात एवं बेड़ा डेटा" },
    items: [
      {
        claim: { en: "India is the 3rd largest domestic aviation market", hi: "भारत विश्व का तीसरा सबसे बड़ा घरेलू विमानन बाजार" },
        value: "#3",
        body: {
          en: "India has overtaken the UK to become the world's third largest air passenger market behind the US and China — per MoCA and IATA outlook.",
          hi: "भारत यूके को पीछे छोड़कर अमेरिका एवं चीन के बाद विश्व का तीसरा सबसे बड़ा हवाई यात्री बाजार बन गया है।",
        },
        url: "https://www.civilaviation.gov.in/en/about/about-ministry",
        publisher: "Ministry of Civil Aviation",
        updated: "2026",
      },
      {
        claim: { en: "Domestic air passengers (FY 2024-25)", hi: "घरेलू हवाई यात्री (वित्त वर्ष 2024-25)" },
        value: "~165 Mn",
        body: {
          en: "DGCA monthly traffic reports — domestic scheduled airlines carried ~165 million passengers in FY 2024-25, with continued double-digit growth.",
          hi: "डीजीसीए मासिक यातायात रिपोर्ट — वित्त वर्ष 2024-25 में घरेलू निर्धारित एयरलाइनों ने लगभग 16.5 करोड़ यात्रियों का परिवहन किया।",
        },
        url: "https://www.dgca.gov.in/digigov-portal/?page=jsp/dgca/InventoryList/dataReports/aviationDataStatistics/airTransport/monthlyReports.jsp",
        publisher: "DGCA Air Transport Statistics",
        updated: "2025",
      },
      {
        claim: { en: "Scheduled Indian carrier fleet (orderbook)", hi: "भारतीय एयरलाइनों का बेड़ा (ऑर्डर सहित)" },
        value: "1,700+",
        body: {
          en: "Indian carriers (IndiGo, Air India Group, Akasa) have a combined firm orderbook exceeding 1,700 aircraft, driving multi-decade hiring across operations, MRO and ground handling.",
          hi: "भारतीय वाहकों (इंडिगो, एयर इंडिया समूह, अकासा) का कुल पक्का ऑर्डर 1,700 से अधिक विमानों का है, जो परिचालन, एमआरओ एवं ग्राउंड हैंडलिंग में कई दशकों की भर्ती चलाएगा।",
        },
        url: "https://www.civilaviation.gov.in/",
        publisher: "Ministry of Civil Aviation",
        updated: "2026",
      },
      {
        claim: { en: "Operational airports target by 2026", hi: "2026 तक संचालित हवाई अड्डे" },
        value: "200+",
        body: {
          en: "Under UDAN / RCS the network is expanding past 150 operational airports toward the 200+ airport target, expanding tier-2/3 demand for trained ground staff.",
          hi: "उड़ान / आरसीएस के अंतर्गत नेटवर्क 150 से अधिक संचालित हवाई अड्डों से 200+ के लक्ष्य की ओर बढ़ रहा है।",
        },
        url: "https://www.civilaviation.gov.in/schemes-policies/udan-rcs",
        publisher: "UDAN — Ministry of Civil Aviation",
        updated: "2026",
      },
      {
        claim: { en: "Air cargo handled at Indian airports", hi: "भारतीय हवाई अड्डों पर एयर कार्गो" },
        value: "3.7 Mn MT+",
        body: {
          en: "AAI traffic statistics indicate Indian airports handle over 3.7 million metric tonnes of air cargo annually, with double-digit growth in express and e-commerce segments.",
          hi: "एएआई के आंकड़ों के अनुसार भारतीय हवाई अड्डे सालाना 37 लाख टन से अधिक एयर कार्गो संभालते हैं।",
        },
        url: "https://www.aai.aero/en/business-opportunities/aai-traffic-news",
        publisher: "Airports Authority of India",
        updated: "2025",
      },
    ],
  },
  {
    title: { en: "Skills, Jobs & Workforce Gap", hi: "कौशल, नौकरियाँ एवं कार्यबल अंतर" },
    items: [
      {
        claim: { en: "Direct + indirect aviation jobs by 2030", hi: "2030 तक प्रत्यक्ष + अप्रत्यक्ष विमानन नौकरियाँ" },
        value: "~3.5 Mn",
        body: {
          en: "Ministry of Civil Aviation projections (Vision 2040 & subsequent updates) indicate aviation will support millions of direct and indirect jobs across airlines, airports, MRO, cargo and travel tech.",
          hi: "नागर विमानन मंत्रालय के विज़न 2040 के अनुमानों के अनुसार विमानन क्षेत्र एयरलाइन, हवाई अड्डा, एमआरओ, कार्गो एवं ट्रैवल टेक में लाखों नौकरियों का समर्थन करेगा।",
        },
        url: "https://www.civilaviation.gov.in/sites/default/files/Vision%202040.pdf",
        publisher: "MoCA — Vision 2040",
        updated: "2024",
      },
      {
        claim: { en: "Aerospace & Aviation Sector Skill Council", hi: "एयरोस्पेस एवं एविएशन सेक्टर स्किल काउंसिल" },
        value: "AASSC",
        body: {
          en: "NSDC-promoted AASSC publishes Qualification Packs (QPs) and National Occupational Standards (NOS) used by ALTTII to align curricula with NSQF levels.",
          hi: "एनएसडीसी द्वारा प्रवर्तित एएएसएससी क्यूपी एवं एनओएस प्रकाशित करता है जिनका उपयोग ALTTII पाठ्यक्रम को एनएसक्यूएफ स्तरों के अनुरूप करने हेतु करता है।",
        },
        url: "https://aassc.in/",
        publisher: "NSDC / AASSC",
        updated: "2026",
      },
      {
        claim: { en: "Pilots required over next 20 years", hi: "अगले 20 वर्षों में आवश्यक पायलट" },
        value: "30,000+",
        body: {
          en: "Boeing & Airbus India market outlook estimate India will need 30,000+ new pilots and 40,000+ technicians/cabin crew through 2043 — referenced by MoCA in industry briefings.",
          hi: "बोइंग एवं एयरबस के अनुमान के अनुसार भारत को 2043 तक 30,000+ नए पायलट एवं 40,000+ तकनीशियन/केबिन क्रू की आवश्यकता होगी।",
        },
        url: "https://www.boeing.com/commercial/market/pilot-technician-outlook",
        publisher: "Boeing CMO / Airbus GMF",
        updated: "2025",
      },
    ],
  },
  {
    title: { en: "Travel Technology & GDS", hi: "यात्रा प्रौद्योगिकी एवं GDS" },
    items: [
      {
        claim: { en: "IATA — Global standards for travel & cargo", hi: "आईएटीए — यात्रा एवं कार्गो हेतु वैश्विक मानक" },
        value: "IATA",
        body: {
          en: "International Air Transport Association sets fare construction, DG, cargo and BSP standards used by GDS operators (Amadeus, Sabre, Galileo) — core of ALTTII Travel Tech curriculum.",
          hi: "आईएटीए किराया निर्माण, खतरनाक माल, कार्गो एवं बीएसपी मानकों को निर्धारित करता है जो जीडीएस संचालकों के लिए मुख्य हैं।",
        },
        url: "https://www.iata.org/en/training/",
        publisher: "IATA",
        updated: "2026",
      },
      {
        claim: { en: "Indian outbound travel market (2026E)", hi: "भारतीय आउटबाउंड यात्रा बाजार (2026 अनुमान)" },
        value: "$42 Bn+",
        body: {
          en: "Industry trackers and Ministry of Tourism data indicate Indian outbound spend is on track to exceed USD 42 billion, expanding demand for GDS-trained travel consultants.",
          hi: "उद्योग एवं पर्यटन मंत्रालय के आंकड़ों के अनुसार भारतीय आउटबाउंड व्यय 42 बिलियन डॉलर से अधिक होने की दिशा में है।",
        },
        url: "https://tourism.gov.in/",
        publisher: "Ministry of Tourism, GoI",
        updated: "2025",
      },
    ],
  },
];

function SourcesPage() {
  const { t, lang } = useLang();
  return (
    <div className="bg-secondary/30">
      <section className="bg-navy text-navy-foreground">
        <div className="h-1 bg-tricolor-bar" />
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="text-[11px] font-semibold uppercase tracking-widest text-saffron">
            {t("Transparency · Government Sources", "पारदर्शिता · सरकारी स्रोत")}
          </div>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            {t("Sources & Citations", "स्रोत एवं संदर्भ")}
          </h1>
          <p className="mt-3 max-w-3xl text-sm opacity-90 sm:text-base">
            {t(
              "Every statistic, projection and infographic on ALTTII is anchored in official data from DGCA, BCAS, the Ministry of Civil Aviation, AAI, NSDC and recognised global aviation bodies. Click any source to verify on the publisher's website.",
              "ALTTII पर प्रत्येक आँकड़ा एवं इन्फोग्राफिक डीजीसीए, बीसीएएस, नागर विमानन मंत्रालय, एएआई, एनएसडीसी एवं मान्यता प्राप्त वैश्विक विमानन संस्थानों के आधिकारिक डेटा पर आधारित है। सत्यापन हेतु किसी भी स्रोत पर क्लिक करें।"
            )}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 space-y-12">
        {SECTIONS.map((sec) => (
          <section key={sec.title.en}>
            <div className="mb-5 flex items-end justify-between border-b border-border pb-2">
              <h2 className="text-xl font-bold text-navy sm:text-2xl">
                {lang === "hi" ? sec.title.hi : sec.title.en}
              </h2>
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                {t("Verified sources", "सत्यापित स्रोत")}
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {sec.items.map((s) => (
                <a
                  key={s.claim.en}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-lg border border-border bg-background p-5 shadow-card transition hover:border-saffron hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="text-2xl font-bold text-saffron">{s.value}</div>
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      {s.updated}
                    </div>
                  </div>
                  <div className="mt-2 text-sm font-semibold text-navy">
                    {lang === "hi" ? s.claim.hi : s.claim.en}
                  </div>
                  <p className="mt-2 text-sm text-foreground/80">
                    {lang === "hi" ? s.body.hi : s.body.en}
                  </p>
                  <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-xs">
                    <span className="font-medium text-navy">{s.publisher}</span>
                    <span className="text-saffron group-hover:underline">
                      {t("View source →", "स्रोत देखें →")}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}

        <section className="rounded-lg border border-border bg-background p-6 shadow-card">
          <h3 className="text-lg font-bold text-navy">
            {t("Methodology & Disclaimer", "कार्यप्रणाली एवं अस्वीकरण")}
          </h3>
          <p className="mt-2 text-sm text-foreground/80">
            {t(
              "ALTTII compiles infographics by aggregating the latest publicly available statistics from the Government of India and recognised aviation bodies as of June 2026. Figures marked as projections (E) reference MoCA's Vision 2040, Boeing CMO and Airbus GMF outlooks. ALTTII is an independent training institute and is not a unit of DGCA, BCAS or the Ministry of Civil Aviation; logos of these bodies are used solely to indicate that our curriculum is aligned with their published frameworks.",
              "ALTTII जून 2026 तक भारत सरकार एवं मान्यता प्राप्त विमानन निकायों के सार्वजनिक रूप से उपलब्ध नवीनतम आँकड़ों को संकलित करके इन्फोग्राफिक्स तैयार करता है। (E) चिह्नित आँकड़े विज़न 2040, बोइंग सीएमओ एवं एयरबस जीएमएफ के अनुमान हैं। ALTTII एक स्वतंत्र प्रशिक्षण संस्थान है तथा डीजीसीए, बीसीएएस अथवा नागर विमानन मंत्रालय की इकाई नहीं है; इन निकायों के लोगो केवल यह दर्शाने हेतु प्रयुक्त हैं कि हमारा पाठ्यक्रम उनकी प्रकाशित रूपरेखाओं के अनुरूप है।"
            )}
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            {t(
              "Found an outdated figure? Write to data@alttii.com — we refresh sources every quarter.",
              "कोई पुराना आँकड़ा मिला? data@alttii.com पर लिखें — हम स्रोतों को प्रत्येक तिमाही अद्यतन करते हैं।"
            )}
          </p>
        </section>
      </div>
    </div>
  );
}
