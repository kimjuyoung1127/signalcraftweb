import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  reason: string;
  message: string;
};

const MAX_FIELD_LENGTH = 2000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isContactPayload(value: unknown): value is ContactPayload {
  if (!value || typeof value !== "object") {
    return false;
  }

  const payload = value as Record<string, unknown>;
  const requiredFields = ["firstName", "lastName", "email", "reason", "message"];

  return requiredFields.every((field) => {
    const fieldValue = payload[field];
    return (
      typeof fieldValue === "string" &&
      fieldValue.trim().length > 0 &&
      fieldValue.length <= MAX_FIELD_LENGTH
    );
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizePayload(payload: ContactPayload) {
  return {
    firstName: payload.firstName.trim(),
    lastName: payload.lastName.trim(),
    email: payload.email.trim().toLowerCase(),
    reason: payload.reason.trim(),
    message: payload.message.trim(),
  };
}

export async function POST(request: Request) {
  try {
    const rawPayload = await request.json();

    if (!isContactPayload(rawPayload)) {
      return NextResponse.json({ error: "Invalid contact payload" }, { status: 400 });
    }

    const payload = normalizePayload(rawPayload);

    if (!EMAIL_PATTERN.test(payload.email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const isDryRun = process.env.CONTACT_FORM_DRY_RUN === "true";
    const apiKey = process.env.RESEND_API_KEY;

    if (isDryRun) {
      return NextResponse.json({ success: true, dryRun: true });
    }

    if (!apiKey) {
      console.error("RESEND_API_KEY is not defined");
      return NextResponse.json({ error: "Mail service configuration missing" }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "SignalCraft <contact@signalcraft.kr>";
    const toEmail = process.env.CONTACT_TO_EMAIL ?? "sndercer@gmail.com";
    const safeName = `${escapeHtml(payload.firstName)} ${escapeHtml(payload.lastName)}`;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `[Contact] New Inquiry from ${payload.firstName} ${payload.lastName}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
          <p><strong>Reason:</strong> ${escapeHtml(payload.reason)}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(payload.message)}</p>
        </div>
      `,
      replyTo: payload.email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Mail delivery failed" }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
