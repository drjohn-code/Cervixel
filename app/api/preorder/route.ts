// TODO: Add rate limiting before high-traffic launch (e.g. Upstash Ratelimit or Vercel KV).
// TODO: Send auto-confirmation email to submitter acknowledging the
// 5-business-day reply window. Builds trust for high-value preorder enquiries.

import { Resend } from "resend";
import { NextResponse } from "next/server";

interface PreorderPayload {
  name: string;
  organisation: string;
  orgType: string;
  country: string;
  email: string;
  phone: string;
  package: string;
  message: string;
}

const VALID_ORG_TYPES = new Set([
  "Private clinic",
  "Distributor",
  "Charity or health organisation",
  "Government or public-health programme",
]);

const VALID_PACKAGES = new Set([
  "100 units",
  "1,000 units",
  "5,000 units",
  "10,000 units",
  "More than 10,000 units",
]);

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function parsePayload(body: unknown): PreorderPayload | string {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return "Invalid request body.";
  }
  const b = body as Record<string, unknown>;

  const name = typeof b.name === "string" ? b.name.trim() : "";
  const organisation =
    typeof b.organisation === "string" ? b.organisation.trim() : "";
  const orgType = typeof b.orgType === "string" ? b.orgType.trim() : "";
  const country = typeof b.country === "string" ? b.country.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const phone = typeof b.phone === "string" ? b.phone.trim() : "";
  const pkg = typeof b.package === "string" ? b.package.trim() : "";
  const message = typeof b.message === "string" ? b.message.trim() : "";

  if (!name) return "Name is required.";
  if (!organisation) return "Organisation is required.";
  if (!orgType || !VALID_ORG_TYPES.has(orgType)) return "A valid organisation type is required.";
  if (!country) return "Country is required.";
  if (!email || !isValidEmail(email)) return "A valid email address is required.";
  if (!pkg || !VALID_PACKAGES.has(pkg)) return "A valid package selection is required.";

  return { name, organisation, orgType, country, email, phone, package: pkg, message };
}

function buildHtml(p: PreorderPayload): string {
  const phone = p.phone || "—";
  const message = p.message || "—";
  return `
<table cellpadding="0" cellspacing="0" style="font-family:sans-serif;font-size:15px;line-height:1.6;color:#0E2233;max-width:600px">
  <tr><td style="padding:24px 0 8px"><strong style="font-size:18px">New preorder enquiry — Cervixel RapidCan</strong></td></tr>
  <tr><td style="padding:4px 0"><strong>Name:</strong> ${escHtml(p.name)}</td></tr>
  <tr><td style="padding:4px 0"><strong>Organisation:</strong> ${escHtml(p.organisation)}</td></tr>
  <tr><td style="padding:4px 0"><strong>Organisation type:</strong> ${escHtml(p.orgType)}</td></tr>
  <tr><td style="padding:4px 0"><strong>Country:</strong> ${escHtml(p.country)}</td></tr>
  <tr><td style="padding:4px 0"><strong>Email:</strong> <a href="mailto:${escHtml(p.email)}">${escHtml(p.email)}</a></td></tr>
  <tr><td style="padding:4px 0"><strong>Phone:</strong> ${escHtml(phone)}</td></tr>
  <tr><td style="padding:4px 0"><strong>Package:</strong> ${escHtml(p.package)}</td></tr>
  <tr><td style="padding:16px 0 4px"><strong>Additional details:</strong></td></tr>
  <tr><td style="padding:0 0 24px;white-space:pre-wrap">${escHtml(message)}</td></tr>
</table>`.trim();
}

function buildText(p: PreorderPayload): string {
  const phone = p.phone || "—";
  const message = p.message || "—";
  return [
    "New preorder enquiry — Cervixel RapidCan",
    "",
    `Name: ${p.name}`,
    `Organisation: ${p.organisation}`,
    `Organisation type: ${p.orgType}`,
    `Country: ${p.country}`,
    `Email: ${p.email}`,
    `Phone: ${phone}`,
    `Package: ${p.package}`,
    "",
    "Additional details:",
    message,
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
    console.error("[preorder] RESEND_API_KEY is not set.");
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
    to: "john@cervixel.com",
    replyTo: parsed.email,
    subject: `[Preorder] ${parsed.organisation} — ${parsed.package}`,
    html: buildHtml(parsed),
    text: buildText(parsed),
  });

  if (error) {
    console.error("[preorder] Resend error:", error);
    return NextResponse.json({ error: "Failed to send enquiry." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
