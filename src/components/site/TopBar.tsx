export function TopBar() {
  return (
    <div className="bg-navy text-navy-foreground text-xs">
      <div className="h-1 bg-tricolor-bar" />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5">
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline">भारत सरकार | Government of India aligned</span>
          <span className="opacity-60 hidden md:inline">|</span>
          <span className="hidden md:inline">Ministry of Civil Aviation framework</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="tel:+918700904917" className="hover:underline">📞 +91 870 090 4917</a>
          <span className="opacity-60 hidden sm:inline">|</span>
          <span className="hidden sm:inline">A+ | A | A-</span>
          <span className="hidden sm:inline">EN | हिन्दी</span>
        </div>
      </div>
    </div>
  );
}
