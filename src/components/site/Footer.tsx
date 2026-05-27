import { Link } from "@tanstack/react-router";
import logo from "@/assets/alttii-logo.png";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-20 border-t border-border bg-navy text-navy-foreground">
      <div className="h-1 bg-tricolor-bar" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="ALTTII" width={44} height={44} className="h-11 w-11 rounded bg-white p-1" />
            <div>
              <div className="text-sm font-bold">ALTTII</div>
              <div className="text-xs opacity-80">
                {t("Est. 2026, New Delhi", "स्थापना 2026, नई दिल्ली")}
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-80">
            {t(
              "India's first specialized institute dedicated to Aviation Logistics, Airport Operations & Travel Technology — building career-ready professionals for the ₹45,000 Cr aviation economy.",
              "विमानन लॉजिस्टिक्स, हवाई अड्डा संचालन एवं यात्रा प्रौद्योगिकी को समर्पित भारत का पहला विशिष्ट संस्थान — ₹45,000 करोड़ की विमानन अर्थव्यवस्था के लिए करियर-तैयार पेशेवर तैयार कर रहा है।"
            )}
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold text-saffron">{t("Programs", "कार्यक्रम")}</div>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li><Link to="/programs">{t("Aviation Logistics & Cargo", "विमानन लॉजिस्टिक्स एवं कार्गो")}</Link></li>
            <li><Link to="/programs">{t("Travel Technology & GDS", "यात्रा प्रौद्योगिकी एवं GDS")}</Link></li>
            <li><Link to="/programs">{t("Airport Assistance (Namaskar Seva)", "हवाई अड्डा सहायता (नमस्कार सेवा)")}</Link></li>
            <li><Link to="/programs">{t("Elite Courier Specialist", "एलीट कूरियर विशेषज्ञ")}</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-saffron">{t("Compliance", "अनुपालन")}</div>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li>{t("DGCA aligned curriculum", "डीजीसीए अनुरूप पाठ्यक्रम")}</li>
            <li>{t("BCAS security protocols", "बीसीएएस सुरक्षा प्रोटोकॉल")}</li>
            <li>{t("Ministry of Civil Aviation framework", "नागर विमानन मंत्रालय की रूपरेखा")}</li>
            <li>{t("NSDC / Skill India ready", "एनएसडीसी / स्किल इंडिया अनुरूप")}</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-saffron">{t("Contact", "संपर्क")}</div>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li>📞 +91 870 090 4917</li>
            <li>✉ admissions@alttii.com</li>
            <li>🌐 www.alttii.com</li>
            <li>📍 DEL · BOM · BLR · MAA</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs opacity-70 md:flex-row">
          <div>
            {t(
              "© 2026 ALTTII. All curriculum aligned with DGCA, BCAS & Ministry of Civil Aviation, GoI.",
              "© 2026 ALTTII। समस्त पाठ्यक्रम डीजीसीए, बीसीएएस एवं नागर विमानन मंत्रालय, भारत सरकार के अनुरूप।"
            )}
          </div>
          <div>{t("Last updated: 22 May 2026 · Version 1.0", "अंतिम अद्यतन: 22 मई 2026 · संस्करण 1.0")}</div>
        </div>
      </div>
    </footer>
  );
}
