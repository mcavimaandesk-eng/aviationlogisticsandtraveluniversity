import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";

const WA = "918700904917";

export function FloatingCTA() {
  const { t } = useLang();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waHref = `https://wa.me/${WA}?text=${encodeURIComponent(
    "Hello ALTTII 👋  I'd like to know about the 2026–27 batch and the prospectus."
  )}`;

  return (
    <>
      {/* Desktop floating WhatsApp */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`fixed bottom-5 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-india-green text-2xl text-white shadow-elevated transition hover:brightness-110 md:flex ${
          show ? "opacity-100" : "opacity-90"
        }`}
      >
        💬
      </a>

      {/* Mobile sticky bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-background/95 backdrop-blur md:hidden ${
          show ? "translate-y-0" : "translate-y-full"
        } transition-transform`}
      >
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-india-green py-3 text-center text-sm font-bold text-white"
        >
          💬 {t("WhatsApp", "व्हाट्सएप")}
        </a>
        <Link
          to="/prospectus"
          className="flex-1 bg-saffron py-3 text-center text-sm font-bold text-saffron-foreground"
        >
          {t("Apply ₹299 →", "आवेदन ₹299 →")}
        </Link>
      </div>
    </>
  );
}
