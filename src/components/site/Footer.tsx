import { Link } from "@tanstack/react-router";
import logo from "@/assets/alttii-logo.png";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-navy text-navy-foreground">
      <div className="h-1 bg-tricolor-bar" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="ALTTII" width={44} height={44} className="h-11 w-11 rounded bg-white p-1" />
            <div>
              <div className="text-sm font-bold">ALTTII</div>
              <div className="text-xs opacity-80">Est. 2026, New Delhi</div>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-80">
            India's first specialized institute dedicated to Aviation Logistics, Airport Operations
            & Travel Technology — building career-ready professionals for the ₹45,000 Cr aviation
            economy.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold text-saffron">Programs</div>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li><Link to="/programs">Aviation Logistics & Cargo</Link></li>
            <li><Link to="/programs">Travel Technology & GDS</Link></li>
            <li><Link to="/programs">Airport Assistance (Namaskar Seva)</Link></li>
            <li><Link to="/programs">Elite Courier Specialist</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-saffron">Compliance</div>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li>DGCA aligned curriculum</li>
            <li>BCAS security protocols</li>
            <li>Ministry of Civil Aviation framework</li>
            <li>NSDC / Skill India ready</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-saffron">Contact</div>
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
          <div>© 2026 ALTTII. All curriculum aligned with DGCA, BCAS & Ministry of Civil Aviation, GoI.</div>
          <div>Last updated: 22 May 2026 · Version 1.0</div>
        </div>
      </div>
    </footer>
  );
}
