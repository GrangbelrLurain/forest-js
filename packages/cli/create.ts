import { tmpdir } from "os";
import { createWriteStream, mkdirSync, unlinkSync } from "fs";
import { pipeline } from "stream/promises";
import fetch from "node-fetch";
import unzipper from "unzipper";
import path from "path";
import fs from "fs";

/**
 * @description Icons
 * @example
 *  try: "🔄",
 *  success: "✅",
 *  error: "❌",
 *  warning: "⚠️",
 */

export async function fetchPureTemplate(targetDir: string) {
  const zipUrl = "https://codeload.github.com/GrangbelrLurain/forest-js/zip/refs/heads/main";
  const zipPath = path.join(tmpdir(), `forest-template.zip`);

  console.log("🔄 Downloading...");
  const response = await fetch(zipUrl);
  if (!response.ok) throw new Error("❌ download failed");

  await pipeline(response.body, createWriteStream(zipPath));
  console.log("✅ Downloaded");

  console.log("🔄 Unpacking...");
  const zipStream = fs.createReadStream(zipPath).pipe(unzipper.Parse({ forceStream: true }));

  for await (const entry of zipStream) {
    const filePath = entry.path;
    if (!filePath.startsWith("forest-js-main/packages/forest-pure-demo/")) {
      entry.autodrain();
      continue;
    }

    const relative = filePath.replace("forest-js-main/packages/forest-pure-demo/", "");
    const outPath = path.join(targetDir, relative);

    if (entry.type === "Directory") {
      mkdirSync(outPath, { recursive: true });
      entry.autodrain();
    } else {
      await pipeline(entry, fs.createWriteStream(outPath));
    }
  }
  console.log("✅ Unpacked");

  console.log("🔄 Deleting cache...");
  try {
    unlinkSync(zipPath);
    console.log("✅ Deleted cache");
  } catch (err) {
    console.warn("⚠️ Failed to delete cache:", err);
  }
}
