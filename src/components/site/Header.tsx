import { Link } from "@tanstack/react-router";
import logo from "@/assets/alttii-logo.png";
import { useLang } from "@/lib/i18n";

export function Header() {
  const { t } = useLang();
  const nav = [
    { to: "/", label: t("Home", "मुख्य पृष्ठ") },
    { to: "/about", label: t("About", "हमारे बारे में") },
    { to: "/programs", label: t("Programs", "कार्यक्रम") },
    { to: "/admissions", label: t("Admissions", "प्रवेश") },
    { to: "/placements", label: t("Placements", "नियुक्तियाँ") },
    { to: "/industry", label: t("Industry", "उद्योग") },
    { to: "/contact", label: t("Contact", "संपर्क") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="ALTTII logo" width={44} height={44} className="h-11 w-11" />
          <div className="leading-tight">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-saffron">
              {t("Est. 2026 · DGCA · BCAS framework", "स्थापना 2026 · डीजीसीए · बीसीएएस रूपरेखा")}
            </div>
            <div className="text-sm font-bold text-navy sm:text-base">
              {t(
                "Aviation Logistics & Travel Technology Institute of India",
                "विमानन लॉजिस्टिक्स एवं यात्रा प्रौद्योगिकी संस्थान, भारत"
              )}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              {t("ALTTII — A Career Platform for New Bharat", "ALTTII — नए भारत का करियर मंच")}
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition hover:bg-secondary hover:text-navy"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-navy bg-secondary" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/admissions"
            className="ml-2 rounded-md bg-saffron px-4 py-2 text-sm font-bold text-saffron-foreground shadow-card transition hover:brightness-105"
          >
            {t("Apply Now →", "अभी आवेदन करें →")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
