import type { NextRequest } from "next/server";
import { recordEvent, type AnalyticsEventType } from "@/lib/analytics";

const ALLOWED_TYPES: AnalyticsEventType[] = ["pageview", "click", "duration"];
const MAX_BODY_LENGTH = 4000;
const MAX_STRING_LENGTH = 300;

function clip(value: unknown, max = MAX_STRING_LENGTH): string | undefined {
  if (typeof value !== "string" || value.length === 0) return undefined;
  return value.slice(0, max);
}

export async function POST(request: NextRequest) {
  const text = await request.text();
  if (text.length === 0 || text.length > MAX_BODY_LENGTH) {
    return new Response(null, { status: 204 });
  }

  let body: unknown;
  try {
    body = JSON.parse(text);
  } catch {
    return new Response(null, { status: 204 });
  }

  if (typeof body !== "object" || body === null) {
    return new Response(null, { status: 204 });
  }

  const payload = body as Record<string, unknown>;
  const type = payload.type;
  const sessionId = clip(payload.sessionId, 100);
  const path = clip(payload.path);

  if (
    typeof type !== "string" ||
    !ALLOWED_TYPES.includes(type as AnalyticsEventType) ||
    !sessionId ||
    !path
  ) {
    return new Response(null, { status: 204 });
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip =
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    undefined;

  const rawCity = request.headers.get("x-vercel-ip-city");
  const city = rawCity ? decodeURIComponent(rawCity) : undefined;

  const seconds =
    typeof payload.seconds === "number" && Number.isFinite(payload.seconds)
      ? Math.max(0, Math.min(payload.seconds, 24 * 60 * 60))
      : undefined;

  await recordEvent({
    id: crypto.randomUUID(),
    type: type as AnalyticsEventType,
    sessionId,
    path,
    ts: Date.now(),
    referrer: clip(payload.referrer),
    label: clip(payload.label, 200),
    href: clip(payload.href),
    seconds,
    ip: clip(ip, 64),
    country: clip(request.headers.get("x-vercel-ip-country"), 8),
    region: clip(request.headers.get("x-vercel-ip-country-region"), 32),
    city: clip(city, 100),
    userAgent: clip(request.headers.get("user-agent"), 300),
  });

  return new Response(null, { status: 204 });
}
