// Lightweight lead-capture helper: turns any form into a WhatsApp deep-link
// so every CTA is workable without backend setup. High-conversion: pre-fills
// the admissions team's WhatsApp with the lead's intent.

export const ALTTII_WA = "918700904917";

export function openWhatsAppLead(
  subject: string,
  fields: Record<string, string | undefined>
) {
  const lines = [
    `Hello ALTTII 👋`,
    ``,
    `Subject: ${subject}`,
    ``,
    ...Object.entries(fields)
      .filter(([, v]) => v && v.trim().length)
      .map(([k, v]) => `• ${k}: ${v}`),
    ``,
    `Please share next steps for the 2026–27 batch.`,
  ];
  const url = `https://wa.me/${ALTTII_WA}?text=${encodeURIComponent(lines.join("\n"))}`;
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

export function readForm(form: HTMLFormElement) {
  const data: Record<string, string> = {};
  new FormData(form).forEach((v, k) => {
    data[k] = String(v ?? "");
  });
  return data;
}
