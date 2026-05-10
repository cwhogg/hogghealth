#!/usr/bin/env node

/**
 * Download company logos for the "Partnering with Pharma" card.
 *
 * Tries three sources in order:
 *   1. Clearbit Logo API (free, no key, best quality)
 *   2. Google favicon service (fallback, lower quality)
 *   3. Direct apple-touch-icon from company site
 *
 * Saves images to public/logos/{name}.png
 *
 * Usage: node scripts/download-logos.mjs
 *        node scripts/download-logos.mjs --force   # re-download existing
 */

import { mkdirSync, writeFileSync, existsSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";

const OUTPUT_DIR = join(import.meta.dirname, "..", "public", "logos");
const FORCE = process.argv.includes("--force");

const companies = [
  // Life Sciences
  { name: "lilly", domain: "lilly.com", display: "Lilly" },
  { name: "eisai", domain: "eisai.com", display: "Eisai" },
  { name: "biogen", domain: "biogen.com", display: "Biogen" },
  { name: "gsk", domain: "gsk.com", display: "GSK" },
  { name: "novartis", domain: "novartis.com", display: "Novartis" },
  { name: "astrazeneca", domain: "astrazeneca.com", display: "AstraZeneca" },
  {
    name: "boehringer-ingelheim",
    domain: "boehringer-ingelheim.com",
    display: "Boehringer Ingelheim",
  },

  // Digital Health
  {
    name: "propeller-health",
    domain: "propellerhealth.com",
    display: "Propeller Health",
  },
  { name: "synapticure", domain: "synapticure.com", display: "Synapticure" },
  {
    name: "heartbeat-health",
    domain: "heartbeathealth.com",
    display: "Heartbeat Health",
  },
  { name: "amplifymd", domain: "amplifymd.com", display: "AmplifyMD" },
  {
    name: "liverright",
    domain: "getliverright.com",
    display: "LiverRight",
  },
];

/**
 * Try to download a URL using curl (works in more environments than fetch).
 * Returns the file buffer on success, null on failure.
 */
function curlDownload(url, label) {
  const tmp = join(OUTPUT_DIR, `.tmp-${Date.now()}`);
  try {
    execSync(
      `curl -sL --fail --max-time 15 -o "${tmp}" "${url}"`,
      { stdio: "pipe" }
    );
    const info = execSync(`file "${tmp}"`, { encoding: "utf-8" });
    if (!info.includes("image")) {
      execSync(`rm -f "${tmp}"`);
      return null;
    }
    const buf = execSync(`cat "${tmp}"`);
    execSync(`rm -f "${tmp}"`);
    return buf;
  } catch {
    execSync(`rm -f "${tmp}"`, { stdio: "ignore" });
    return null;
  }
}

function downloadLogo(company) {
  const dest = join(OUTPUT_DIR, `${company.name}.png`);

  if (!FORCE && existsSync(dest)) {
    console.log(`  SKIP  ${company.display} (already exists)`);
    return "skipped";
  }

  // Source 1: Clearbit Logo API — best quality, square PNGs
  const clearbitUrl = `https://logo.clearbit.com/${company.domain}?size=200&format=png`;
  let buf = curlDownload(clearbitUrl, "clearbit");
  if (buf) {
    writeFileSync(dest, buf);
    console.log(`  OK    ${company.display} (clearbit, ${buf.length} bytes)`);
    return "ok";
  }

  // Source 2: Google high-res favicon
  const googleUrl = `https://www.google.com/s2/favicons?domain=${company.domain}&sz=128`;
  buf = curlDownload(googleUrl, "google");
  if (buf && buf.length > 1000) {
    // Skip tiny 16x16 fallback icons
    writeFileSync(dest, buf);
    console.log(`  OK    ${company.display} (google favicon, ${buf.length} bytes)`);
    return "ok";
  }

  // Source 3: apple-touch-icon from the company site
  for (const path of [
    "/apple-touch-icon.png",
    "/apple-touch-icon-precomposed.png",
    "/favicon-192x192.png",
  ]) {
    const url = `https://www.${company.domain}${path}`;
    buf = curlDownload(url, "apple-touch-icon");
    if (buf) {
      writeFileSync(dest, buf);
      console.log(
        `  OK    ${company.display} (${path}, ${buf.length} bytes)`
      );
      return "ok";
    }
  }

  console.log(`  FAIL  ${company.display} — no source returned a logo`);
  return "failed";
}

function main() {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log(`Downloading ${companies.length} logos to ${OUTPUT_DIR}`);
  if (FORCE) console.log("(--force: re-downloading all)");
  console.log();

  const results = companies.map((c) => downloadLogo(c));

  const ok = results.filter((r) => r === "ok").length;
  const skipped = results.filter((r) => r === "skipped").length;
  const failed = results.filter((r) => r === "failed").length;

  console.log(`\nDone: ${ok} downloaded, ${skipped} skipped, ${failed} failed`);

  if (failed > 0) {
    console.log(
      "\nFor failed logos, download manually and save as public/logos/{name}.png"
    );
    console.log("Expected filenames:");
    companies.forEach((c) => {
      const dest = join(OUTPUT_DIR, `${c.name}.png`);
      if (!existsSync(dest)) {
        console.log(`  ${c.name}.png  (${c.display})`);
      }
    });
  }
}

main();
