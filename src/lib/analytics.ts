import "server-only";
import { getRedis } from "./redis";

const EVENTS_KEY = "analytics:events";
const SESSIONS_KEY = "analytics:sessions";
const PAGEVIEWS_KEY = "analytics:stats:pageviews";
const CLICKS_KEY = "analytics:stats:clicks";
const DURATION_SUM_KEY = "analytics:duration:sum";
const DURATION_COUNT_KEY = "analytics:duration:count";
const MAX_EVENTS = 3000;

export type AnalyticsEventType = "pageview" | "click" | "duration";

export type AnalyticsEvent = {
  id: string;
  type: AnalyticsEventType;
  sessionId: string;
  path: string;
  ts: number;
  referrer?: string;
  label?: string;
  href?: string;
  seconds?: number;
  ip?: string;
  country?: string;
  region?: string;
  city?: string;
  userAgent?: string;
};

export async function recordEvent(event: AnalyticsEvent) {
  const redis = getRedis();
  if (!redis) return;

  const pipeline = redis.pipeline();
  pipeline.lpush(EVENTS_KEY, event);
  pipeline.ltrim(EVENTS_KEY, 0, MAX_EVENTS - 1);
  pipeline.sadd(SESSIONS_KEY, event.sessionId);

  if (event.type === "pageview") {
    pipeline.incr(PAGEVIEWS_KEY);
  } else if (event.type === "click") {
    pipeline.incr(CLICKS_KEY);
  } else if (event.type === "duration" && typeof event.seconds === "number") {
    pipeline.incrbyfloat(DURATION_SUM_KEY, event.seconds);
    pipeline.incr(DURATION_COUNT_KEY);
  }

  await pipeline.exec();
}

export async function getRecentEvents(limit = 200): Promise<AnalyticsEvent[]> {
  const redis = getRedis();
  if (!redis) return [];

  const raw = await redis.lrange<AnalyticsEvent>(EVENTS_KEY, 0, limit - 1);
  return raw.filter((event): event is AnalyticsEvent => event != null);
}

export type AnalyticsSummary = {
  pageviews: number;
  clicks: number;
  uniqueSessions: number;
  avgDurationSeconds: number;
};

export async function getAnalyticsSummary(): Promise<AnalyticsSummary | null> {
  const redis = getRedis();
  if (!redis) return null;

  const [pageviews, clicks, uniqueSessions, durationSum, durationCount] =
    await Promise.all([
      redis.get<number>(PAGEVIEWS_KEY),
      redis.get<number>(CLICKS_KEY),
      redis.scard(SESSIONS_KEY),
      redis.get<number>(DURATION_SUM_KEY),
      redis.get<number>(DURATION_COUNT_KEY),
    ]);

  const sum = durationSum ?? 0;
  const count = durationCount ?? 0;

  return {
    pageviews: pageviews ?? 0,
    clicks: clicks ?? 0,
    uniqueSessions: uniqueSessions ?? 0,
    avgDurationSeconds: count > 0 ? sum / count : 0,
  };
}
