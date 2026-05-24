// One-off helper: convert poster PNGs to optimized WebP and shrink dimensions.
// Run with: node scripts/convert-to-webp.mjs
import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";

const TARGETS = [
  { src: "public/Robotina.jpg", maxWidth: 600 },
];

const DEFAULT_MAX_WIDTH = 800;
const QUALITY = 78;    // good balance between quality and size

(async () => {
  for (const item of TARGETS) {
    const src = typeof item === "string" ? item : item.src;
    const maxWidth = typeof item === "string" ? DEFAULT_MAX_WIDTH : (item.maxWidth || DEFAULT_MAX_WIDTH);
    const dst = src.replace(/\.(png|jpe?g)$/i, ".webp");
    try {
      const before = (await stat(src)).size;
      await sharp(src)
        .resize({ width: maxWidth, withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 6 })
        .toFile(dst);
      const after = (await stat(dst)).size;
      const saved = (((before - after) / before) * 100).toFixed(1);
      console.log(
        `${src} (${(before / 1024).toFixed(1)} KB) -> ${dst} (${(after / 1024).toFixed(1)} KB)  saved ${saved}%`
      );
    } catch (err) {
      console.error(`Failed ${src}: ${err.message}`);
    }
  }
})();
