import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const orderInput = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().min(8).max(20),
  program: z.string().trim().max(120).optional().default(""),
  hub: z.string().trim().max(40).optional().default(""),
});

export const createProspectusOrder = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => orderInput.parse(d))
  .handler(async ({ data }) => {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keyId || !keySecret) throw new Error("Razorpay keys not configured");

    const amountPaise = 29900; // ₹299
    const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
    const receipt = `pros_${Date.now().toString(36)}`;

    const res = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amountPaise,
        currency: "INR",
        receipt,
        notes: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          program: data.program ?? "",
          hub: data.hub ?? "",
          product: "ALTTII Prospectus + Admission Form",
        },
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Razorpay order failed", res.status, errText);
      throw new Error("Unable to create order. Please retry.");
    }

    const order = (await res.json()) as { id: string; amount: number; currency: string };
    return {
      orderId: order.id,
      keyId,
      amount: order.amount,
      currency: order.currency,
    };
  });

const verifyInput = z.object({
  razorpay_order_id: z.string().min(4),
  razorpay_payment_id: z.string().min(4),
  razorpay_signature: z.string().min(10),
});

export const verifyProspectusPayment = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => verifyInput.parse(d))
  .handler(async ({ data }) => {
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) throw new Error("Razorpay secret not configured");

    const { createHmac, timingSafeEqual } = await import("crypto");
    const expected = createHmac("sha256", keySecret)
      .update(`${data.razorpay_order_id}|${data.razorpay_payment_id}`)
      .digest("hex");

    const a = Buffer.from(expected, "utf8");
    const b = Buffer.from(data.razorpay_signature, "utf8");
    const ok = a.length === b.length && timingSafeEqual(a, b);
    if (!ok) throw new Error("Payment signature invalid");

    return { verified: true, paymentId: data.razorpay_payment_id };
  });
