/**
 * Turns the supplied white-background logo JPGs into clean transparent PNGs so
 * the brand mark sits naturally on any background. Generates:
 *   public/images/brand/full-logo.png        (colour, transparent)
 *   public/images/brand/full-logo-white.png  (white silhouette, for dark UI)
 *   public/images/brand/favicon.png          (mark only, transparent)
 *   src/app/icon.png                          (browser tab favicon)
 *
 * Run: node scripts/process-logo.mjs
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const BRAND = "public/images/brand";
await mkdir(BRAND, { recursive: true });

/** Replace near-white pixels with transparency, feathering antialiased edges. */
async function knockOutWhite(input) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const px = info.width * info.height;
  for (let i = 0; i < px; i++) {
    const o = i * 4;
    const mn = Math.min(data[o], data[o + 1], data[o + 2]);
    let alpha = 255;
    if (mn >= 244) alpha = 0;
    else if (mn >= 214) alpha = Math.round((255 * (244 - mn)) / 30);
    data[o + 3] = Math.min(data[o + 3], alpha);
  }

  return { buffer: Buffer.from(data), info };
}

function fromRaw({ buffer, info }) {
  return sharp(buffer, {
    raw: { width: info.width, height: info.height, channels: 4 },
  });
}

// --- Full logo (colour) ---
const full = await knockOutWhite("full-logo.jpg");
await fromRaw(full)
  .trim()
  .png()
  .toFile(`${BRAND}/full-logo.png`);

// --- Full logo (white silhouette for dark backgrounds) ---
const whiteData = Buffer.from(full.buffer);
for (let i = 0; i < whiteData.length; i += 4) {
  if (whiteData[i + 3] > 0) {
    whiteData[i] = 255;
    whiteData[i + 1] = 255;
    whiteData[i + 2] = 255;
  }
}
await fromRaw({ buffer: whiteData, info: full.info })
  .trim()
  .png()
  .toFile(`${BRAND}/full-logo-white.png`);

// --- Favicon mark ---
const fav = await knockOutWhite("favicon.jpg");
await fromRaw(fav).trim().resize(128, 128, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(`${BRAND}/favicon.png`);
await fromRaw(fav).trim().resize(64, 64, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile("src/app/icon.png");

console.log("Logo assets generated.");
