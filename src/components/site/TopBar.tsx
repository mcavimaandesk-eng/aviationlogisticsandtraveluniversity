import { useLang } from "@/lib/i18n";

export function TopBar() {
  const { lang, setLang, t } = useLang();
  return (
    <div className="bg-navy text-navy-foreground text-xs">
      <div className="h-1 bg-tricolor-bar" />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5">
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline">
            {t("भारत सरकार | Government of India aligned", "भारत सरकार के मानकों के अनुरूप")}
          </span>
          <span className="opacity-60 hidden md:inline">|</span>
          <span className="hidden md:inline">
            {t("Ministry of Civil Aviation framework", "नागर विमानन मंत्रालय की रूपरेखा")}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a href="tel:+918700904917" className="hover:underline">📞 +91 870 090 4917</a>
          <span className="opacity-60 hidden sm:inline">|</span>
          <div className="flex items-center gap-1 rounded border border-white/20 bg-white/5 px-1.5 py-0.5">
            <button
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`px-1.5 rounded text-[11px] font-semibold transition ${
                lang === "en" ? "bg-saffron text-saffron-foreground" : "text-white/80 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("hi")}
              aria-pressed={lang === "hi"}
              className={`px-1.5 rounded text-[11px] font-semibold transition ${
                lang === "hi" ? "bg-saffron text-saffron-foreground" : "text-white/80 hover:text-white"
              }`}
            >
              हिन्दी
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
