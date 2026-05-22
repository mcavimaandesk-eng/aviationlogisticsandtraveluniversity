import { Link } from "@tanstack/react-router";
import logo from "@/assets/alttii-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/admissions", label: "Admissions" },
  { to: "/placements", label: "Placements" },
  { to: "/industry", label: "Industry" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="ALTTII logo" width={44} height={44} className="h-11 w-11" />
          <div className="leading-tight">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-saffron">
              Est. 2026 · DGCA · BCAS framework
            </div>
            <div className="text-sm font-bold text-navy sm:text-base">
              Aviation Logistics & Travel Technology Institute of India
            </div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              ALTTII — A Career Platform for New Bharat
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
            Apply Now →
          </Link>
        </nav>
      </div>
    </header>
  );
}
