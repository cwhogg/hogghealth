"use client";

import { useState } from "react";

export function DownloadPdfButton() {
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  async function handleDownload() {
    if (status === "loading") return;
    setStatus("loading");
    try {
      const [{ pdf }, { CVDocument }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("@/components/CVDocument"),
      ]);
      const blob = await pdf(<CVDocument />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Chris-Hogg-CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } finally {
      setStatus("idle");
    }
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={status === "loading"}
      className="btn-primary disabled:opacity-60 disabled:cursor-wait"
    >
      {status === "loading" ? (
        <>
          <svg
            className="w-4 h-4 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
          Preparing PDF…
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
            />
          </svg>
          Download PDF
        </>
      )}
    </button>
  );
}
