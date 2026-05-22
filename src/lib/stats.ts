// Sources: Ministry of Civil Aviation, DGCA, AAI traffic reports, IATA India 2026 outlook.
export const AVIATION_STATS_2026 = [
  { value: "₹45,000 Cr", label: "Indian aviation economy size (FY26)", source: "MoCA" },
  { value: "USD 315 B", label: "India logistics market by 2030", source: "Invest India" },
  { value: "157", label: "Operational airports by 2026", source: "AAI" },
  { value: "1,200+", label: "Aircraft order pipeline (IndiGo + Air India)", source: "DGCA" },
  { value: "4.2 L", label: "New aviation jobs projected by 2030", source: "MoCA Vision 2030" },
  { value: "420 M+", label: "Annual passenger throughput by 2030", source: "AAI forecast" },
];

export const DEMAND_GAP = [
  { role: "Cargo & Logistics Specialists", demand: 96, supply: 22 },
  { role: "Travel Tech / GDS Analysts", demand: 88, supply: 31 },
  { role: "Airport Assistance (PRM/Namaskar)", demand: 82, supply: 18 },
  { role: "AVSEC / BCAS Screeners", demand: 75, supply: 40 },
  { role: "Ground Handling & Ramp", demand: 91, supply: 28 },
  { role: "Drone & UTM Operators", demand: 70, supply: 9 },
];

export const HUBS = [
  { code: "DEL", name: "Indira Gandhi Intl., Delhi", pax: "73.7 M", role: "Global hub & cargo gateway" },
  { code: "BOM", name: "Chhatrapati Shivaji Maharaj Intl., Mumbai", pax: "55.1 M", role: "Financial capital hub" },
  { code: "BLR", name: "Kempegowda Intl., Bengaluru", pax: "41.9 M", role: "Tech & e-commerce cargo" },
  { code: "MAA", name: "Chennai Intl., Chennai", pax: "26.4 M", role: "South India gateway" },
  { code: "HYD", name: "Rajiv Gandhi Intl., Hyderabad", pax: "25.8 M", role: "Pharma cold chain" },
  { code: "CCU", name: "Netaji Subhas Chandra Bose Intl., Kolkata", pax: "21.6 M", role: "Eastern India hub" },
];
