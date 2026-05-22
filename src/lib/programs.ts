import travelTech from "@/assets/program-travel-tech.jpg";
import cargo from "@/assets/program-cargo.jpg";
import namaskar from "@/assets/program-namaskar.jpg";
import baggage from "@/assets/program-baggage.jpg";

export type Program = {
  slug: string;
  category: "Certification" | "Diploma" | "Internship Track" | "Advanced";
  title: string;
  duration: string;
  nsqf: string;
  fee: string;
  salary: string;
  image: string;
  summary: string;
  modules: string[];
  jobs: string[];
};

export const PROGRAMS: Program[] = [
  {
    slug: "aviation-logistics-cargo",
    category: "Certification",
    title: "Aviation Logistics & Air Cargo Specialist",
    duration: "6 Months",
    nsqf: "NSQF Level 5",
    fee: "₹85,000",
    salary: "₹3.2 – 6.5 LPA",
    image: cargo,
    summary:
      "Master ULD handling, Dangerous Goods Regulations (IATA DGR), e-AWB documentation, customs procedures, and cold-chain pharma logistics at India's busiest cargo hubs.",
    modules: [
      "IATA DGR & Live Animal Regulations",
      "Unit Load Devices (ULD) & Build-up",
      "Customs ICEGATE & e-AWB workflow",
      "Cold-chain & Pharma logistics",
      "Warehouse Management Systems",
      "BCAS Security AVSEC 2025",
    ],
    jobs: ["Cargo Officer", "Ramp Coordinator", "DG Compliance Officer", "Warehouse Supervisor"],
  },
  {
    slug: "travel-technology-gds",
    category: "Diploma",
    title: "Travel Technology & GDS (Amadeus + DigiYatra)",
    duration: "9 Months",
    nsqf: "NSQF Level 6",
    fee: "₹1,15,000",
    salary: "₹3.6 – 7.2 LPA",
    image: travelTech,
    summary:
      "Beyond BBA. Become a Travel Tech specialist trained on Amadeus GDS, AI-driven passenger flow analytics, DigiYatra Face Authentication, and NDC retailing platforms.",
    modules: [
      "Amadeus Selling Platform Connect",
      "DigiYatra & Face Authentication systems",
      "NDC, ONE Order & Offer Management",
      "AI Passenger Flow Analytics",
      "PNR, Fares, Ticketing & Refunds",
      "OTA & TMC operations",
    ],
    jobs: ["GDS Executive", "Travel Tech Analyst", "OTA Operations", "Airline Reservations"],
  },
  {
    slug: "namaskar-seva-airport-assistance",
    category: "Certification",
    title: "Airport Assistance — Namaskar Seva Specialist",
    duration: "3 Months",
    nsqf: "NSQF Level 4",
    fee: "₹45,000",
    salary: "₹2.4 – 4.2 LPA",
    image: namaskar,
    summary:
      "Front-line airport guest experience — meet & greet, unaccompanied minors, special assistance (PRM), VIP handling and Namaskar Seva protocols aligned with AAI service standards.",
    modules: [
      "Airport SOPs & Terminal Navigation",
      "Special Assistance (PRM) protocols",
      "Soft Skills, Grooming, Body Language",
      "AAI Service Quality Framework",
      "Emergency & Evacuation handling",
      "Multilingual communication",
    ],
    jobs: ["Guest Service Agent", "PRM Coordinator", "Lounge Executive", "VIP Handler"],
  },
  {
    slug: "elite-courier-specialist",
    category: "Advanced",
    title: "Elite Courier & Express Cargo Specialist",
    duration: "4 Months",
    nsqf: "NSQF Level 5",
    fee: "₹65,000",
    salary: "₹3.0 – 5.8 LPA",
    image: cargo,
    summary:
      "Specialized track for high-value, time-critical and diplomatic courier handling — covering DGR Lite, last-mile express, hub-and-spoke routing and global integrator workflows.",
    modules: [
      "Express vs General Cargo SOPs",
      "Hub-and-Spoke routing optimization",
      "Last-mile & SLA management",
      "High-value & valuables handling",
      "Cross-border e-commerce",
      "Express integrator IT systems",
    ],
    jobs: ["Express Operations Exec", "Hub Coordinator", "Last-Mile Manager", "Account Specialist"],
  },
  {
    slug: "smart-baggage-fly-my-luggage",
    category: "Internship Track",
    title: "Smart Baggage Operations — Fly My Luggage™",
    duration: "5 Months + Internship",
    nsqf: "NSQF Level 5",
    fee: "₹70,000",
    salary: "₹3.0 – 5.5 LPA",
    image: baggage,
    summary:
      "Live operations training on India's first home-to-airport baggage logistics network. Self-bag-drop, RFID tracking, IATA Resolution 753, and door-to-door luggage transfer.",
    modules: [
      "Self Bag Drop (SBD) kiosk operations",
      "IATA Resolution 753 baggage tracking",
      "RFID & BHS coordination",
      "Door-to-door logistics SOP",
      "Customer Communication App",
      "Vimaan Desk live deployment",
    ],
    jobs: ["Baggage Ops Executive", "SBD Supervisor", "Fly My Luggage Field Lead"],
  },
  {
    slug: "airport-ground-handling",
    category: "Diploma",
    title: "Airport Ground Handling & Ramp Operations",
    duration: "9 Months",
    nsqf: "NSQF Level 6",
    fee: "₹1,25,000",
    salary: "₹3.4 – 6.8 LPA",
    image: cargo,
    summary:
      "Comprehensive ground handling — load control, turnaround coordination, pushback, GSE operations, FOD prevention and BCAS ramp security clearances.",
    modules: [
      "Load Control & Weight Balance",
      "Turnaround Coordination (TRC)",
      "Pushback & Marshalling",
      "GSE — Ground Support Equipment",
      "FOD Prevention & Safety",
      "BCAS Ramp Security",
    ],
    jobs: ["Ramp Agent", "Load Controller", "Turnaround Coordinator", "GSE Operator"],
  },
  {
    slug: "aviation-security-avsec",
    category: "Certification",
    title: "Aviation Security (AVSEC) — BCAS Aligned",
    duration: "3 Months",
    nsqf: "NSQF Level 5",
    fee: "₹55,000",
    salary: "₹2.8 – 5.0 LPA",
    image: namaskar,
    summary:
      "BCAS-aligned aviation security training covering X-BIS screening, profiling, behavior detection and ICAO Annex 17 compliance for airport security workforce.",
    modules: [
      "BCAS regulatory framework",
      "X-BIS & ETD screening",
      "Behavior Detection (BDO)",
      "ICAO Annex 17 standards",
      "Cargo & Mail security",
      "Crisis & Bomb threat response",
    ],
    jobs: ["AVSEC Officer", "Screener", "Cargo Security Agent", "BDO Trainee"],
  },
  {
    slug: "drone-utm-operations",
    category: "Advanced",
    title: "Drone Operations & UTM (DGCA RPAS)",
    duration: "4 Months",
    nsqf: "NSQF Level 6",
    fee: "₹95,000",
    salary: "₹4.0 – 8.5 LPA",
    image: travelTech,
    summary:
      "DGCA-aligned Remote Pilot Certification readiness, UTM airspace integration, BVLOS planning, and emerging cargo-drone logistics for India's drone corridor program.",
    modules: [
      "DGCA Drone Rules 2021/2025",
      "Airspace, NPNT & Digital Sky",
      "Cargo Drone Logistics",
      "UTM & BVLOS operations",
      "Maintenance & Pre-flight",
      "Insurance & Liability",
    ],
    jobs: ["Remote Pilot", "Drone Logistics Exec", "UTM Operator"],
  },
];
