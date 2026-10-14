import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const bookingSchema = z.object({
  name: z.string().trim().min(2),
  phone: z.string().trim().min(7),
  email: z.string().trim().email(),
  treatment: z.string().min(1),
  date: z.string().optional(),
  message: z.string().max(1000).optional(),
});

type PhotoPayload = {
  name: string;
  type: string;
  size: number;
  base64: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailHtml(data: z.infer<typeof bookingSchema>): string {
  const rows: [string, string | undefined][] = [
    ["Name", data.name],
    ["Phone", data.phone],
    ["Email", data.email],
    ["Treatment", data.treatment],
    ["Preferred date", data.date],
    ["Message", data.message],
  ];

  return `
    <div style="font-family:system-ui,sans-serif;color:#111">
      <h2 style="margin:0 0 16px">New consultation request</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${rows
          .filter(([, value]) => value)
          .map(
            ([label, value]) =>
              `<tr><td style="font-weight:600;padding-right:12px">${label}</td><td>${escapeHtml(
                String(value),
              )}</td></tr>`,
          )
          .join("")}
      </table>
    </div>
  `;
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  const isMultipart = contentType.includes("multipart/form-data");

  const values: Record<string, unknown> = {};
  let photo: PhotoPayload | null = null;

  try {
    if (isMultipart) {
      const formData = await request.formData();
      for (const [key, value] of formData.entries()) {
        if (value instanceof File) {
          if (value.size > 0) {
            const buffer = Buffer.from(await value.arrayBuffer());
            photo = {
              name: value.name,
              type: value.type,
              size: value.size,
              base64: buffer.toString("base64"),
            };
          }
        } else {
          values[key] = value;
        }
      }
    } else {
      Object.assign(values, await request.json());
    }
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unable to read request body" },
      { status: 400 },
    );
  }

  const parsed = bookingSchema.safeParse(values);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const summary = {
    ...parsed.data,
    photo: photo ? { name: photo.name, type: photo.type, size: photo.size } : null,
  };

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("[booking] new consultation request (logging only):", summary);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const to = process.env.BOOKING_TO_EMAIL ?? "hello@dermolyxa.com";
    const from =
      process.env.RESEND_FROM_EMAIL ?? "Dermolyxa <bookings@dermolyxa.com>";

    const attachments = photo
      ? [
          {
            filename: photo.name || "assessment.jpg",
            content: photo.base64,
          },
        ]
      : undefined;

    const result = await resend.emails.send({
      from,
      to,
      replyTo: parsed.data.email,
      subject: `New consultation request — ${parsed.data.treatment}`,
      html: buildEmailHtml(parsed.data),
      attachments,
    });

    if (result.error) throw new Error(result.error.message);

    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("[booking] email delivery failed:", error);
    console.log("[booking] fallback log:", summary);
    return NextResponse.json({ ok: true, delivered: false });
  }
}
