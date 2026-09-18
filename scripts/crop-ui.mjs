import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("public/images/ui");
await mkdir(root, { recursive: true });

async function crop(src, out, region) {
  const image = sharp(src);
  const meta = await image.metadata();
  const extract = {
    left: Math.max(0, Math.round(region.left)),
    top: Math.max(0, Math.round(region.top)),
    width: Math.round(region.width),
    height: Math.round(region.height),
  };
  if (extract.left + extract.width > meta.width) {
    extract.width = meta.width - extract.left;
  }
  if (extract.top + extract.height > meta.height) {
    extract.height = meta.height - extract.top;
  }
  await image.extract(extract).png().toFile(path.join(root, out));
  console.log(out, extract);
}

await crop("public/images/team/anna.png", "anna.png", {
  left: 318,
  top: 332,
  width: 528,
  height: 566,
});
await crop("public/images/team/iveta.png", "iveta.png", {
  left: 405,
  top: 310,
  width: 528,
  height: 661,
});
await crop("public/images/team/kristine-paula.png", "kristine-paula.png", {
  left: 460,
  top: 238,
  width: 474,
  height: 731,
});
await crop("public/images/team/kristine.png", "kristine.png", {
  left: 400,
  top: 276,
  width: 556,
  height: 702,
});
await crop("public/images/hero/groomer.png", "hero-anna.png", {
  left: 430,
  top: 340,
  width: 545,
  height: 622,
});

await crop("reference/1.png", "polaroid-iveta.png", {
  left: 1110,
  top: 205,
  width: 255,
  height: 245,
});
await crop("reference/1.png", "polaroid-kristine.png", {
  left: 1145,
  top: 545,
  width: 255,
  height: 245,
});
await crop("reference/2.png", "card-anna.png", {
  left: 430,
  top: 105,
  width: 205,
  height: 168,
});
await crop("reference/2.png", "card-iveta.png", {
  left: 668,
  top: 105,
  width: 205,
  height: 168,
});
await crop("reference/2.png", "card-kristine-paula.png", {
  left: 906,
  top: 105,
  width: 205,
  height: 168,
});
await crop("reference/2.png", "card-kristine.png", {
  left: 1144,
  top: 105,
  width: 205,
  height: 168,
});
