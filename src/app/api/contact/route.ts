import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject?: string;
  message?: string;
  // Honeypot field — real users never fill this.
  website?: string;
  // Source locale (de/en = Austrian site, cs = Czech site).
  locale?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Spam honeypot: pretend success so bots don't retry.
  if (data.website && data.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim();
  const message = (data.message ?? "").trim();

  if (!name || !EMAIL_RE.test(email) || message.length < 10) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 422 });
  }

  const lead = {
    name,
    email,
    phone: (data.phone ?? "").trim(),
    company: (data.company ?? "").trim(),
    subject: (data.subject ?? "").trim(),
    message,
    receivedAt: new Date().toISOString(),
  };

  const source = (data.locale ?? "").trim();
  const siteLabel = source === "cs" ? "CZ-Seite (moduloparking.cz)" : source ? "AT-Seite (moduloparking.at)" : "—";
  const text =
    `Name: ${name}\n` +
    `E-Mail: ${email}\n` +
    `Telefon: ${lead.phone || "—"}\n` +
    `Unternehmen: ${lead.company || "—"}\n` +
    `Betreff: ${lead.subject || "—"}\n` +
    `Quelle: ${siteLabel}\n\n` +
    `${message}\n`;
  const mailSubject = `[Kontakt${source ? "/" + source : ""}] ${lead.subject || "Neue Anfrage"} – ${name}`;

  // Delivery strategy (in order of preference):
  //   1. SMTP (e.g. the Hetzner mailbox) when SMTP_HOST/SMTP_USER/SMTP_PASS are set.
  //   2. Otherwise, just log the lead server-side so nothing is silently lost.
  //
  // Required env vars for SMTP delivery (set in Vercel project settings):
  //   SMTP_HOST   e.g. mail.moduloparking.at
  //   SMTP_PORT   587 (STARTTLS) or 465 (implicit TLS) — defaults to 587
  //   SMTP_USER   the mailbox login (e.g. info@moduloparking.at)
  //   SMTP_PASS   the mailbox password
  //   CONTACT_TO  where leads are delivered (defaults to SMTP_USER)
  //   CONTACT_FROM the From address (defaults to SMTP_USER)
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (host && user && pass) {
    const port = Number(process.env.SMTP_PORT ?? 587);
    const to = process.env.CONTACT_TO ?? user;
    const from = process.env.CONTACT_FROM ?? user;
    try {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465, // implicit TLS on 465, STARTTLS otherwise
        auth: { user, pass },
      });
      await transporter.sendMail({
        from,
        to,
        replyTo: email,
        subject: mailSubject,
        text,
      });
    } catch (err) {
      console.error("[contact] SMTP delivery failed", err);
      return NextResponse.json({ ok: false, error: "delivery" }, { status: 502 });
    }
  } else {
    // No mail backend configured yet — capture the lead in server logs.
    console.warn(
      "[contact] No SMTP backend configured (set SMTP_HOST, SMTP_USER, SMTP_PASS, CONTACT_TO). Lead:",
      JSON.stringify(lead)
    );
  }

  return NextResponse.json({ ok: true });
}
