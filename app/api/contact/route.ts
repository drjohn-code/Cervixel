// TODO: Add rate limiting before high-traffic launch (e.g. Upstash Ratelimit or Vercel KV).

import { Resend } from "resend";
import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  organisation: string;
  email: string;
  subject: string;
  message: string;
}

const VALID_SUBJECTS = new Set([
  "Product preorder enquiry",
  "Service enquiry",
  "Partnership",
  "Press & media",
  "Other",
]);

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function parsePayload(body: unknown): ContactPayload | string {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return "Invalid request body.";
  }
  const b = body as Record<string, unknown>;

  const name = typeof b.name === "string" ? b.name.trim() : "";
  const organisation =
    typeof b.organisation === "string" ? b.organisation.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const subject = typeof b.subject === "string" ? b.subject.trim() : "";
  const message = typeof b.message === "string" ? b.message.trim() : "";

  if (!name) return "Name is required.";
  if (!email || !isValidEmail(email)) return "A valid email address is required.";
  if (!subject || !VALID_SUBJECTS.has(subject)) return "A valid subject is required.";
  if (!message) return "Message is required.";

  return { name, organisation, email, subject, message };
}

function buildHtml(p: ContactPayload): string {
  const org = p.organisation || "—";
  return `
<table cellpadding="0" cellspacing="0" style="font-family:sans-serif;font-size:15px;line-height:1.6;color:#0E2233;max-width:600px">
  <tr><td style="padding:24px 0 8px"><strong style="font-size:18px">New contact enquiry — Cervixel</strong></td></tr>
  <tr><td style="padding:4px 0"><strong>Name:</strong> ${escHtml(p.name)}</td></tr>
  <tr><td style="padding:4px 0"><strong>Organisation:</strong> ${escHtml(org)}</td></tr>
  <tr><td style="padding:4px 0"><strong>Email:</strong> <a href="mailto:${escHtml(p.email)}">${escHtml(p.email)}</a></td></tr>
  <tr><td style="padding:4px 0"><strong>Subject:</strong> ${escHtml(p.subject)}</td></tr>
  <tr><td style="padding:16px 0 4px"><strong>Message:</strong></td></tr>
  <tr><td style="padding:0 0 24px;white-space:pre-wrap">${escHtml(p.message)}</td></tr>
</table>`.trim();
}

function buildText(p: ContactPayload): string {
  const org = p.organisation || "—";
  return [
    "New contact enquiry — Cervixel",
    "",
    `Name: ${p.name}`,
    `Organisation: ${org}`,
    `Email: ${p.email}`,
    `Subject: ${p.subject}`,
    "",
    "Message:",
    p.message,
  ].join("\n");
}

function escHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request): Promise<NextResponse> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set.");
    return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = parsePayload(body);
  if (typeof parsed === "string") {
    return NextResponse.json({ error: parsed }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Cervixel Website <noreply@cervixel.com>",
    to: "info@cervixel.com",
    replyTo: parsed.email,
    subject: `[Contact] ${parsed.subject} — ${parsed.name}`,
    html: buildHtml(parsed),
    text: buildText(parsed),
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
