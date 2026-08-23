"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const SESSION_STORAGE_KEY = "hh_session_id";

function getSessionId(): string {
  let id = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
  if (!id) {
    id = crypto.randomUUID();
    window.sessionStorage.setItem(SESSION_STORAGE_KEY, id);
  }
  return id;
}

function send(payload: Record<string, unknown>) {
  const body = JSON.stringify(payload);
  if (typeof navigator.sendBeacon === "function") {
    navigator.sendBeacon(
      "/api/track",
      new Blob([body], { type: "application/json" })
    );
  } else {
    fetch("/api/track", {
      method: "POST",
      body,
      headers: { "Content-Type": "application/json" },
      keepalive: true,
    }).catch(() => {});
  }
}

export function AnalyticsTracker() {
  const pathname = usePathname();
  const sessionIdRef = useRef<string>("");
  const pathRef = useRef<string>("");
  const isAdminRef = useRef<boolean>(false);
  const pageLoadTimeRef = useRef<number>(0);

  useEffect(() => {
    if (!sessionIdRef.current) sessionIdRef.current = getSessionId();
  }, []);

  useEffect(() => {
    const isAdmin = pathname?.startsWith("/admin") ?? false;

    if (pathRef.current && !isAdminRef.current) {
      const seconds = (Date.now() - pageLoadTimeRef.current) / 1000;
      send({
        type: "duration",
        sessionId: sessionIdRef.current,
        path: pathRef.current,
        seconds,
      });
    }

    isAdminRef.current = isAdmin;
    pathRef.current = pathname ?? "";
    pageLoadTimeRef.current = Date.now();

    if (!isAdmin && pathname) {
      send({
        type: "pageview",
        sessionId: sessionIdRef.current,
        path: pathname,
        referrer: document.referrer || undefined,
      });
    }
  }, [pathname]);

  useEffect(() => {
    function flushDuration() {
      if (isAdminRef.current || !pathRef.current) return;
      const seconds = (Date.now() - pageLoadTimeRef.current) / 1000;
      send({
        type: "duration",
        sessionId: sessionIdRef.current,
        path: pathRef.current,
        seconds,
      });
    }

    function handleVisibilityChange() {
      if (document.visibilityState === "hidden") flushDuration();
    }

    function handleClick(event: MouseEvent) {
      if (isAdminRef.current) return;
      const target = event.target as HTMLElement | null;
      const el = target?.closest("a[href], button, [data-track]") as
        | HTMLElement
        | null;
      if (!el) return;

      const label = (el.getAttribute("aria-label") || el.textContent || "")
        .trim()
        .slice(0, 100);

      send({
        type: "click",
        sessionId: sessionIdRef.current,
        path: pathRef.current,
        label: label || undefined,
        href: el.getAttribute("href") || undefined,
      });
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", flushDuration);
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", flushDuration);
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}
