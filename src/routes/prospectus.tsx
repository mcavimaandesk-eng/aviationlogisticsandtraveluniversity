import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useLang } from "@/lib/i18n";
import { PROGRAMS } from "@/lib/programs";
import { downloadProspectus, type ProspectusBuyer } from "@/lib/prospectus-pdf";
import {
  createProspectusOrder,
  verifyProspectusPayment,
} from "@/lib/razorpay.functions";

export const Route = createFileRoute("/prospectus")({
  head: () => ({
    meta: [
      { title: "Download Official Prospectus & Admission Form — ALTTII (₹299)" },
      {
        name: "description",
        content:
          "Pay ₹299 securely via Razorpay and instantly download the ALTTII Prospectus + Admission Form. Join the 2026–27 batch and connect with admissions on WhatsApp.",
      },
      { property: "og:title", content: "ALTTII Prospectus 2026–27 · ₹299" },
      {
        property: "og:description",
        content:
          "Official prospectus, admission form and WhatsApp joining — one secure checkout.",
      },
    ],
  }),
  component: ProspectusPage,
});

const WHATSAPP_NUMBER = "918700904917";
const FEE_INR = 299;
const FEE_PAISE = FEE_INR * 100;

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve(false);
    if (window.Razorpay) return resolve(true);
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.async = true;
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

function ProspectusPage() {
  const { t } = useLang();
  const createOrder = useServerFn(createProspectusOrder);
  const verifyPayment = useServerFn(verifyProspectusPayment);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    hub: "Delhi (DEL)",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<{ paymentId: string; buyer: ProspectusBuyer } | null>(null);

  useEffect(() => {
    void loadRazorpayScript();
  }, []);

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const waMessage = (paymentId?: string) =>
    encodeURIComponent(
      `Hello ALTTII Admissions 👋\n\nI just paid ₹${FEE_INR} and downloaded the Prospectus.\n\n• Name: ${form.name}\n• Mobile: ${form.phone}\n• Email: ${form.email}\n• Program of interest: ${form.program || "—"}\n• Preferred Hub: ${form.hub}\n${paymentId ? `• Razorpay Receipt: ${paymentId}\n` : ""}\nI'd like to confirm my seat in the 2026–27 batch. Please share the next steps.`
    );

  const openWhatsApp = (paymentId?: string) => {
    if (typeof window === "undefined") return;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage(paymentId)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const validate = () => {
    if (form.name.trim().length < 2) return "Please enter your full name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Please enter a valid email";
    if (form.phone.replace(/\D/g, "").length < 10) return "Please enter a valid mobile number";
    return null;
  };

  const handlePay = async () => {
    setError(null);
    const v = validate();
    if (v) { setError(v); return; }

    setLoading(true);
    try {
      const ok = await loadRazorpayScript();
      if (!ok || !window.Razorpay) throw new Error("Could not load payment gateway");

      const order = await createOrder({ data: form });

      const rzp = new window.Razorpay({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        order_id: order.orderId,
        name: "ALTTII",
        description: "Prospectus + Admission Form (2026–27)",
        prefill: { name: form.name, email: form.email, contact: form.phone },
        notes: { program: form.program, hub: form.hub },
        theme: { color: "#0b1d3a" },
        handler: async (resp: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }) => {
          try {
            const verified = await verifyPayment({ data: resp });
            const buyer: ProspectusBuyer = {
              name: form.name,
              email: form.email,
              phone: form.phone,
              program: form.program,
              hub: form.hub,
              paymentId: verified.paymentId,
            };
            downloadProspectus(buyer);
            setSuccess({ paymentId: verified.paymentId, buyer });
            setTimeout(() => openWhatsApp(verified.paymentId), 900);
          } catch (e) {
            setError(e instanceof Error ? e.message : "Verification failed");
          } finally {
            setLoading(false);
          }
        },
        modal: {
          ondismiss: () => setLoading(false),
        },
      });
      rzp.open();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
      setLoading(false);
    }
  };

  if (success) {
    return (
      <SiteLayout>
        <section className="bg-gradient-hero text-white">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-india-green text-3xl">✓</div>
            <h1 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              {t("Payment received. Welcome to ALTTII!", "भुगतान प्राप्त हुआ। ALTTII में आपका स्वागत है!")}
            </h1>
            <p className="mt-3 text-white/85">
              {t(
                "Your prospectus + admission form has been downloaded. Joining WhatsApp will lock your seat for the 2026–27 batch.",
                "आपकी प्रॉस्पेक्टस + प्रवेश फॉर्म डाउनलोड हो गया है। व्हाट्सएप पर जुड़कर अपनी सीट 2026–27 बैच के लिए सुरक्षित करें।"
              )}
            </p>
            <div className="mt-3 text-xs text-white/60">
              {t("Razorpay Receipt", "रसीद")}: {success.paymentId}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <button
                onClick={() => downloadProspectus(success.buyer)}
                className="rounded-md bg-white px-5 py-3 text-sm font-bold text-navy hover:bg-white/90"
              >
                ⬇  {t("Download Prospectus PDF again", "प्रॉस्पेक्टस फिर से डाउनलोड करें")}
              </button>
              <button
                onClick={() => openWhatsApp(success.paymentId)}
                className="rounded-md bg-india-green px-5 py-3 text-sm font-bold text-white hover:brightness-110"
              >
                💬  {t("Join Admissions on WhatsApp", "व्हाट्सएप पर एडमिशन से जुड़ें")}
              </button>
            </div>
            <p className="mt-6 text-xs text-white/70">
              {t(
                "Our admissions team will respond within 24 hours. Carry your signed admission form to the counselling call.",
                "हमारी एडमिशन टीम 24 घंटे के भीतर संपर्क करेगी। काउंसलिंग कॉल के समय अपना हस्ताक्षरित प्रवेश फॉर्म साथ रखें।"
              )}
            </p>
          </div>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="border-b border-border bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-saffron">
            {t("Official · 2026–27 Cohort", "आधिकारिक · 2026–27 बैच")}
          </div>
          <h1 className="mt-2 font-display text-3xl font-bold md:text-5xl">
            {t(
              "Download the Official Prospectus + Admission Form",
              "आधिकारिक प्रॉस्पेक्टस + प्रवेश फॉर्म डाउनलोड करें"
            )}
          </h1>
          <p className="mt-3 max-w-2xl text-white/85">
            {t(
              "Secure ₹299 payment via Razorpay. Instant PDF download. Direct WhatsApp onboarding with the admissions team on +91 87009 04917.",
              "Razorpay के माध्यम से सुरक्षित ₹299 भुगतान। तत्काल PDF डाउनलोड। +91 87009 04917 पर एडमिशन टीम से सीधे WhatsApp पर जुड़ें।"
            )}
          </p>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2">
          {/* Left: Value props */}
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-saffron">
              {t("What you get for ₹299", "₹299 में आपको क्या मिलता है")}
            </div>
            <h2 className="mt-2 font-display text-2xl font-bold text-navy md:text-3xl">
              {t("One platform. Every career step.", "एक मंच। हर करियर कदम।")}
            </h2>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                [
                  "Branded ALTTII Prospectus (PDF)",
                  "All programs, NSQF levels, fees & projected CTC for 2026–27",
                ],
                [
                  "Ready-to-sign Admission Form",
                  "Pre-filled with your details — bring it to the counselling call",
                ],
                [
                  "WhatsApp seat confirmation",
                  "Auto-opens chat with admissions on +91 87009 04917",
                ],
                [
                  "Priority counselling slot",
                  "24-hour response from a hub-specific counsellor (DEL / BOM / BLR / MAA)",
                ],
                [
                  "Scholarship eligibility check",
                  "Women candidates & North-East applicants — up to 30% fee waiver",
                ],
              ].map(([h, d]) => (
                <li key={h} className="flex gap-3 rounded-lg border border-border bg-card p-4 shadow-card">
                  <div className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-india-green text-xs font-bold text-white">✓</div>
                  <div>
                    <div className="font-semibold text-navy">{h}</div>
                    <div className="text-xs text-muted-foreground">{d}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-lg border border-saffron/30 bg-saffron/5 p-4 text-xs text-navy">
              <span className="font-bold text-saffron">⚡ {t("Limited seats", "सीमित सीटें")}:</span>{" "}
              {t(
                "Each hub airport (DEL · BOM · BLR · MAA) has fixed cohort intake. Prospectus buyers get first allocation.",
                "प्रत्येक हब हवाई अड्डे (DEL · BOM · BLR · MAA) में सीटें सीमित हैं। प्रॉस्पेक्टस खरीदारों को पहली प्राथमिकता।"
              )}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-baseline justify-between">
                <div className="font-display text-xl font-bold text-navy">
                  {t("Apply & Pay", "आवेदन व भुगतान")}
                </div>
                <div className="font-display text-3xl font-bold text-india-green">₹{FEE_INR}</div>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {t("One-time, includes GST. Refundable if seat unavailable.", "एकमुश्त, जीएसटी सहित। सीट उपलब्ध न होने पर वापसी योग्य।")}
              </div>

              <div className="mt-5 grid gap-3">
                <input
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-saffron"
                  placeholder={t("Full Name", "पूरा नाम")}
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  maxLength={80}
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    type="email"
                    className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-saffron"
                    placeholder={t("Email", "ईमेल")}
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    maxLength={120}
                  />
                  <input
                    type="tel"
                    inputMode="numeric"
                    className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-saffron"
                    placeholder={t("Mobile (+91)", "मोबाइल (+91)")}
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    maxLength={20}
                  />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <select
                    className="rounded-md border border-input bg-background px-3 py-2.5 text-sm"
                    value={form.program}
                    onChange={(e) => update("program", e.target.value)}
                  >
                    <option value="">{t("Program of interest", "रुचि का कार्यक्रम")}</option>
                    {PROGRAMS.map((p) => (
                      <option key={p.slug} value={p.title}>{p.title}</option>
                    ))}
                  </select>
                  <select
                    className="rounded-md border border-input bg-background px-3 py-2.5 text-sm"
                    value={form.hub}
                    onChange={(e) => update("hub", e.target.value)}
                  >
                    <option>Delhi (DEL)</option>
                    <option>Mumbai (BOM)</option>
                    <option>Bengaluru (BLR)</option>
                    <option>Chennai (MAA)</option>
                  </select>
                </div>

                {error && (
                  <div className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs text-destructive">
                    {error}
                  </div>
                )}

                <button
                  type="button"
                  onClick={handlePay}
                  disabled={loading}
                  className="mt-1 w-full rounded-md bg-saffron py-3 text-sm font-bold text-saffron-foreground transition hover:brightness-105 disabled:opacity-60"
                >
                  {loading
                    ? t("Opening Razorpay…", "Razorpay खोल रहा है…")
                    : t(`Pay ₹${FEE_INR} & Download Prospectus →`, `₹${FEE_INR} भुगतान करें व प्रॉस्पेक्टस डाउनलोड करें →`)}
                </button>

                <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                  <span>🔒 {t("Secured by Razorpay (256-bit SSL)", "Razorpay द्वारा सुरक्षित (256-बिट SSL)")}</span>
                  <span>UPI · Cards · Netbanking · Wallets</span>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center text-xs text-muted-foreground">
              {t("Already paid? ", "पहले भुगतान कर चुके हैं? ")}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-navy underline"
              >
                {t("Chat with admissions on WhatsApp", "WhatsApp पर एडमिशन से बात करें")}
              </a>
            </div>
          </div>
        </div>

        {/* Fake URL noise: omitted */}
        <noscript>{FEE_PAISE}</noscript>
      </section>
    </SiteLayout>
  );
}
