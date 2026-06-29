import jsPDF from "jspdf";
import { PROGRAMS } from "./programs";

export type ProspectusBuyer = {
  name: string;
  email: string;
  phone: string;
  program?: string;
  hub?: string;
  paymentId?: string;
};

const NAVY: [number, number, number] = [11, 29, 58];
const SAFFRON: [number, number, number] = [255, 153, 51];
const GREEN: [number, number, number] = [19, 136, 8];
const MUTED: [number, number, number] = [90, 100, 115];

export function generateProspectusPdf(buyer: ProspectusBuyer): jsPDF {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();
  const M = 40;

  const tricolor = (y: number) => {
    doc.setFillColor(...SAFFRON); doc.rect(0, y, W / 3, 4, "F");
    doc.setFillColor(255, 255, 255); doc.rect(W / 3, y, W / 3, 4, "F");
    doc.setFillColor(...GREEN); doc.rect((2 * W) / 3, y, W / 3, 4, "F");
  };

  const header = (title: string) => {
    doc.setFillColor(...NAVY); doc.rect(0, 0, W, 70, "F");
    tricolor(70);
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold"); doc.setFontSize(16);
    doc.text("ALTTII", M, 32);
    doc.setFont("helvetica", "normal"); doc.setFontSize(8);
    doc.text("Aviation Logistics & Travel Technology Institute of India", M, 46);
    doc.text("DGCA · BCAS · MoCA framework aligned", M, 58);
    doc.setFont("helvetica", "bold"); doc.setFontSize(11);
    doc.text(title, W - M, 38, { align: "right" });
    doc.setTextColor(0, 0, 0);
  };

  const footer = (page: number, total: number) => {
    tricolor(H - 24);
    doc.setFontSize(8); doc.setTextColor(...MUTED);
    doc.text("ALTTII · New Delhi · +91 870 090 4917 · admissions@alttii.in", M, H - 12);
    doc.text(`Page ${page} / ${total}`, W - M, H - 12, { align: "right" });
    doc.setTextColor(0, 0, 0);
  };

  // ---------- Page 1: Cover ----------
  header("OFFICIAL PROSPECTUS · 2026–27");
  let y = 110;
  doc.setFont("helvetica", "bold"); doc.setFontSize(26); doc.setTextColor(...NAVY);
  doc.text("Your Career in Indian Aviation", M, y); y += 30;
  doc.text("Begins at ALTTII", M, y); y += 26;
  doc.setFont("helvetica", "normal"); doc.setFontSize(11); doc.setTextColor(...MUTED);
  doc.text(
    "India's first specialized institute for Aviation Logistics, Airport Operations\nand Travel Technology — built for the ₹45,000 Cr aviation economy of 2026 and beyond.",
    M, y
  );
  y += 50;

  // Stat strip
  const stats = [
    ["₹45,000 Cr", "Aviation economy"],
    ["1.2 Lakh+", "Open roles by 2027"],
    ["157+", "Operational airports"],
    ["4 Hubs", "DEL · BOM · BLR · MAA"],
  ];
  const cardW = (W - 2 * M - 30) / 4;
  stats.forEach((s, i) => {
    const x = M + i * (cardW + 10);
    doc.setFillColor(245, 247, 250); doc.rect(x, y, cardW, 60, "F");
    doc.setDrawColor(...NAVY); doc.setLineWidth(0.5); doc.rect(x, y, cardW, 60);
    doc.setFont("helvetica", "bold"); doc.setFontSize(13); doc.setTextColor(...NAVY);
    doc.text(s[0], x + 8, y + 24);
    doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(...MUTED);
    doc.text(s[1], x + 8, y + 42);
  });
  y += 90;

  // Buyer card
  doc.setFillColor(255, 248, 235); doc.rect(M, y, W - 2 * M, 90, "F");
  doc.setDrawColor(...SAFFRON); doc.setLineWidth(1); doc.rect(M, y, W - 2 * M, 90);
  doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(...NAVY);
  doc.text("ISSUED TO", M + 12, y + 18);
  doc.setFontSize(14); doc.text(buyer.name, M + 12, y + 38);
  doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor(...MUTED);
  doc.text(`Email: ${buyer.email}`, M + 12, y + 54);
  doc.text(`Mobile: ${buyer.phone}`, M + 12, y + 68);
  if (buyer.program) doc.text(`Program of interest: ${buyer.program}`, M + 12, y + 82);
  doc.setFont("helvetica", "bold"); doc.setFontSize(9); doc.setTextColor(...GREEN);
  doc.text("✓ PAYMENT VERIFIED", W - M - 12, y + 18, { align: "right" });
  doc.setFont("helvetica", "normal"); doc.setTextColor(...MUTED);
  if (buyer.paymentId) doc.text(`Receipt: ${buyer.paymentId}`, W - M - 12, y + 34, { align: "right" });
  doc.text(`Issued: ${new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}`, W - M - 12, y + 48, { align: "right" });
  y += 110;

  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "bold"); doc.setFontSize(12); doc.setTextColor(...NAVY);
  doc.text("Why ALTTII", M, y); y += 18;
  doc.setFont("helvetica", "normal"); doc.setFontSize(10); doc.setTextColor(40, 40, 40);
  const why = [
    "• DGCA & BCAS framework aligned curriculum, NSQF-graded outcomes",
    "• Guaranteed internship at DEL / BOM / BLR / MAA hub airports",
    "• Industry-led faculty from IndiGo, Air India, Bird Group, Çelebi, Menzies",
    "• Job-centric: placement, certifications, soft-skills, English — one platform",
    "• Scholarships for women candidates and North-East India applicants",
  ];
  why.forEach((line) => { doc.text(line, M, y); y += 16; });

  footer(1, 3);

  // ---------- Page 2: Programs ----------
  doc.addPage(); header("PROGRAM CATALOGUE");
  y = 100;
  doc.setFont("helvetica", "bold"); doc.setFontSize(14); doc.setTextColor(...NAVY);
  doc.text("Specialized Tracks · 2026–27", M, y); y += 22;

  // Table header
  doc.setFillColor(...NAVY); doc.rect(M, y, W - 2 * M, 22, "F");
  doc.setTextColor(255, 255, 255); doc.setFont("helvetica", "bold"); doc.setFontSize(9);
  doc.text("Program", M + 8, y + 14);
  doc.text("NSQF", M + 250, y + 14);
  doc.text("Duration", M + 310, y + 14);
  doc.text("Fee", M + 390, y + 14);
  doc.text("Projected CTC", M + 450, y + 14);
  y += 22;

  doc.setFont("helvetica", "normal"); doc.setFontSize(8.5); doc.setTextColor(30, 30, 30);
  PROGRAMS.forEach((p, i) => {
    if (i % 2 === 0) { doc.setFillColor(245, 247, 250); doc.rect(M, y, W - 2 * M, 28, "F"); }
    const title = p.title.length > 42 ? p.title.slice(0, 40) + "…" : p.title;
    doc.setFont("helvetica", "bold"); doc.text(title, M + 8, y + 12);
    doc.setFont("helvetica", "normal"); doc.setFontSize(7.5); doc.setTextColor(...MUTED);
    doc.text(p.category, M + 8, y + 23);
    doc.setTextColor(30, 30, 30); doc.setFontSize(8.5);
    doc.text(p.nsqf, M + 250, y + 14);
    doc.text(p.duration, M + 310, y + 14);
    doc.setTextColor(...GREEN); doc.setFont("helvetica", "bold");
    doc.text(p.fee, M + 390, y + 14);
    doc.setTextColor(...NAVY);
    doc.text(p.salary, M + 450, y + 14);
    doc.setFont("helvetica", "normal"); doc.setTextColor(30, 30, 30);
    y += 28;
    if (y > H - 80) { footer(2, 3); doc.addPage(); header("PROGRAM CATALOGUE (cont.)"); y = 100; }
  });

  footer(2, 3);

  // ---------- Page 3: Admission form ----------
  doc.addPage(); header("ADMISSION APPLICATION FORM");
  y = 100;
  doc.setFont("helvetica", "bold"); doc.setFontSize(13); doc.setTextColor(...NAVY);
  doc.text("ALTTII Admission Application — 2026–27 Cohort", M, y); y += 18;
  doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor(...MUTED);
  doc.text("Please complete in BLOCK letters. Carry this form (signed) to your counselling call.", M, y); y += 22;

  const field = (label: string, prefill = "") => {
    doc.setFont("helvetica", "bold"); doc.setFontSize(9); doc.setTextColor(...NAVY);
    doc.text(label.toUpperCase(), M, y);
    doc.setDrawColor(180, 180, 180); doc.setLineWidth(0.4);
    doc.line(M + 150, y + 2, W - M, y + 2);
    if (prefill) {
      doc.setFont("helvetica", "normal"); doc.setFontSize(10); doc.setTextColor(20, 20, 20);
      doc.text(prefill, M + 155, y);
    }
    y += 22;
  };

  field("Full Name", buyer.name);
  field("Email", buyer.email);
  field("Mobile (+91)", buyer.phone);
  field("Date of Birth");
  field("Gender");
  field("Aadhaar (last 4)");
  field("Address");
  field("12th Board & Year");
  field("12th %");
  field("Graduation (if any)");
  field("Preferred Program", buyer.program || "");
  field("Preferred Hub", buyer.hub || "");
  field("How did you hear about us?");

  y += 6;
  doc.setFont("helvetica", "bold"); doc.setFontSize(9); doc.setTextColor(...NAVY);
  doc.text("DECLARATION", M, y); y += 14;
  doc.setFont("helvetica", "normal"); doc.setFontSize(8.5); doc.setTextColor(50, 50, 50);
  doc.text("I declare that the information provided is true. I consent to ALTTII processing this", M, y); y += 12;
  doc.text("data per MeitY norms for admission, counselling and placement assistance.", M, y); y += 30;

  doc.setDrawColor(120, 120, 120); doc.setLineWidth(0.4);
  doc.line(M, y, M + 180, y);
  doc.line(W - M - 180, y, W - M, y);
  doc.setFontSize(8); doc.setTextColor(...MUTED);
  doc.text("Applicant Signature & Date", M, y + 12);
  doc.text("ALTTII Counsellor", W - M - 180, y + 12);

  footer(3, 3);
  return doc;
}

export function downloadProspectus(buyer: ProspectusBuyer) {
  const doc = generateProspectusPdf(buyer);
  const safe = buyer.name.replace(/[^a-z0-9]+/gi, "_").slice(0, 30) || "applicant";
  doc.save(`ALTTII_Prospectus_${safe}.pdf`);
}
