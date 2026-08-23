import type { Metadata } from "next";
import { verifyAdminSession } from "@/lib/auth";
import { getAnalyticsSummary, getRecentEvents } from "@/lib/analytics";
import { logout } from "./actions";

export const metadata: Metadata = {
  title: "Admin — HoggHealth Consulting",
  robots: { index: false, follow: false },
};

function formatTime(ts: number) {
  return new Date(ts).toLocaleString("en-US", {
    dateStyle: "short",
    timeStyle: "medium",
  });
}

function formatLocation(event: { city?: string; region?: string; country?: string }) {
  return [event.city, event.region, event.country].filter(Boolean).join(", ") || "—";
}

function formatDetail(event: {
  type: string;
  label?: string;
  href?: string;
  seconds?: number;
}) {
  if (event.type === "click") {
    return event.label || event.href || "—";
  }
  if (event.type === "duration") {
    return typeof event.seconds === "number" ? `${event.seconds.toFixed(0)}s` : "—";
  }
  return "—";
}

export default async function AdminPage() {
  await verifyAdminSession();

  const [summary, events] = await Promise.all([
    getAnalyticsSummary(),
    getRecentEvents(200),
  ]);

  return (
    <section className="max-w-[1080px] mx-auto px-4 sm:px-8 py-12 sm:py-16">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-headline text-[2rem] text-foreground">Admin</h1>
        <form action={logout}>
          <button type="submit" className="btn-secondary">
            Log Out
          </button>
        </form>
      </div>

      {!summary ? (
        <div className="card p-6">
          <p className="font-serif text-body text-sm leading-relaxed">
            Analytics storage isn&apos;t configured yet. Add{" "}
            <code className="font-sans text-xs">UPSTASH_REDIS_REST_URL</code> and{" "}
            <code className="font-sans text-xs">UPSTASH_REDIS_REST_TOKEN</code>{" "}
            as environment variables to start tracking visits.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            <div className="card p-5">
              <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-muted mb-1">
                Pageviews
              </p>
              <p className="font-headline text-2xl text-foreground">
                {summary.pageviews.toLocaleString()}
              </p>
            </div>
            <div className="card p-5">
              <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-muted mb-1">
                Unique Visitors
              </p>
              <p className="font-headline text-2xl text-foreground">
                {summary.uniqueSessions.toLocaleString()}
              </p>
            </div>
            <div className="card p-5">
              <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-muted mb-1">
                Clicks
              </p>
              <p className="font-headline text-2xl text-foreground">
                {summary.clicks.toLocaleString()}
              </p>
            </div>
            <div className="card p-5">
              <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-muted mb-1">
                Avg. Time on Page
              </p>
              <p className="font-headline text-2xl text-foreground">
                {summary.avgDurationSeconds.toFixed(0)}s
              </p>
            </div>
          </div>

          <div className="section-label mb-4">Recent Activity</div>
          <div className="card overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-rule">
                  {["Time", "Type", "Path", "Detail", "Location", "IP"].map(
                    (h) => (
                      <th
                        key={h}
                        className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.06em] text-muted px-4 py-3 whitespace-nowrap"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {events.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="font-serif text-sm text-muted px-4 py-6"
                    >
                      No activity recorded yet.
                    </td>
                  </tr>
                ) : (
                  events.map((event) => (
                    <tr
                      key={event.id}
                      className="border-b border-rule-light last:border-b-0"
                    >
                      <td className="font-sans text-xs text-muted px-4 py-2.5 whitespace-nowrap">
                        {formatTime(event.ts)}
                      </td>
                      <td className="font-sans text-xs text-foreground px-4 py-2.5 whitespace-nowrap capitalize">
                        {event.type}
                      </td>
                      <td className="font-sans text-xs text-foreground px-4 py-2.5 max-w-[200px] truncate">
                        {event.path}
                      </td>
                      <td className="font-sans text-xs text-foreground px-4 py-2.5 max-w-[240px] truncate">
                        {formatDetail(event)}
                      </td>
                      <td className="font-sans text-xs text-muted px-4 py-2.5 whitespace-nowrap">
                        {formatLocation(event)}
                      </td>
                      <td className="font-sans text-xs text-muted px-4 py-2.5 whitespace-nowrap">
                        {event.ip || "—"}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  );
}
