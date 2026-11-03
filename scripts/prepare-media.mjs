import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const SOURCES_DIR = path.join(ROOT, "public", "media", "sources");
const DERIV_DIR = path.join(ROOT, "public", "media", "derivatives");

fs.mkdirSync(SOURCES_DIR, { recursive: true });
fs.mkdirSync(DERIV_DIR, { recursive: true });

const svgDefs = [
  {
    svgFile: "01_Editorial_Portrait.svg",
    pngFile: "01_Editorial_Portrait.png",
    id: "portrait-01-studio-pinstripe",
    label: "Studio Pinstripe Portrait (Uncropped Source from SVG 01)",
    assignedRole: "Chapter III (Pan-Arab Newsroom), On Screen Lead Explainer Companion & Behind the Work Plate I",
    focalPoint: "50% 24%",
    status: "candidate_public_profile",
    sourceUrl: "https://www.facebook.com/photo.php?fbid=26225452487104095&set=pb.100001981029300.-2207520000&type=3",
    credit: "Nidal Elnaeem public profile (permission required for public launch)",
  },
  {
    svgFile: "02_Midnight_Broadcast.svg",
    pngFile: "02_Midnight_Broadcast.png",
    id: "portrait-02-saudi-media-forum",
    label: "Saudi Media Forum Portrait — Riyadh (Uncropped Source from SVG 02)",
    assignedRole: "Chapter IV (Public Forums & Presence) & Behind the Work Plate II (Credited to @momen_alfadl)",
    focalPoint: "50% 26%",
    status: "candidate_credited_photographer",
    sourceUrl: "https://www.facebook.com/photo.php?fbid=25639588639023819&set=pb.100001981029300.-2207520000&type=3",
    credit: "Photograph credited to @momen_alfadl (reuse permission required for public launch)",
  },
  {
    svgFile: "03_Gallery_Profile.svg",
    pngFile: "03_Gallery_Profile.png",
    id: "portrait-03-newsroom-archive",
    label: "Newsroom & Photo Archive Portrait (Uncropped Source from SVG 03)",
    assignedRole: "Chapter II (Television & Concurrent Horizons), Words & Stories Reflection Lead & Behind the Work Plate III",
    focalPoint: "52% 28%",
    status: "candidate_public_profile",
    sourceUrl: "https://www.facebook.com/photo.php?fbid=26052318974417448&set=pb.100001981029300.-2207520000&type=3",
    credit: "Nidal Elnaeem public profile (permission required for public launch)",
  },
  {
    svgFile: "04_The_Broadcast_Edit.svg",
    pngFile: "04_The_Broadcast_Edit.png",
    id: "portrait-04-broadcast-yellow-blazer",
    label: "Broadcast Studio Portrait — Navy Blazer & Yellow Top (Owner-Supplied Source)",
    assignedRole: "Home 'In Focus' Opening Scene Foreground Portrait & Behind the Work Plate IV",
    focalPoint: "52% 26%",
    status: "approved_owner_supplied",
    sourceUrl: "Owner-supplied source asset",
    credit: "Owner-supplied key approved source portrait",
  },
];

const mapping = [];

for (const item of svgDefs) {
  const svgPath = path.join(ROOT, item.svgFile);
  const svgContent = fs.readFileSync(svgPath, "utf8");
  const match = svgContent.match(/data:image\/([a-zA-Z]+);base64,([a-zA-Z0-9+/=]+)/);
  if (!match) {
    throw new Error(`No embedded image found in ${item.svgFile}`);
  }
  const rawBuffer = Buffer.from(match[2], "base64");
  const sourceJpgPath = path.join(SOURCES_DIR, `${item.id}.jpg`);
  fs.writeFileSync(sourceJpgPath, rawBuffer);

  const meta = await sharp(rawBuffer).metadata();
  const widths = [480, 800, 1200].filter((w) => w <= (meta.width || 1200));
  if (!widths.includes(meta.width)) widths.push(meta.width);

  const derivatives = { webp: {}, avif: {} };

  for (const w of widths) {
    const webpOut = path.join(DERIV_DIR, `${item.id}-${w}w.webp`);
    const avifOut = path.join(DERIV_DIR, `${item.id}-${w}w.avif`);
    await sharp(rawBuffer).resize({ width: w, withoutEnlargement: true }).webp({ quality: 86 }).toFile(webpOut);
    await sharp(rawBuffer).resize({ width: w, withoutEnlargement: true }).avif({ quality: 74 }).toFile(avifOut);
    derivatives.webp[`${w}w`] = `/media/derivatives/${item.id}-${w}w.webp`;
    derivatives.avif[`${w}w`] = `/media/derivatives/${item.id}-${w}w.avif`;
  }

  const primaryWebp = path.join(DERIV_DIR, `${item.id}.webp`);
  const primaryAvif = path.join(DERIV_DIR, `${item.id}.avif`);
  await sharp(rawBuffer).webp({ quality: 88 }).toFile(primaryWebp);
  await sharp(rawBuffer).avif({ quality: 78 }).toFile(primaryAvif);

  const posterWebp = path.join(DERIV_DIR, `poster-${item.id}.webp`);
  await sharp(path.join(ROOT, item.pngFile)).resize({ width: 720 }).webp({ quality: 84 }).toFile(posterWebp);

  mapping.push({
    id: item.id,
    label: item.label,
    assignedRole: item.assignedRole,
    originalContainer: item.svgFile,
    extractedSourcePath: `/media/sources/${item.id}.jpg`,
    nativeWidth: meta.width,
    nativeHeight: meta.height,
    nativeBytes: rawBuffer.length,
    focalPoint: item.focalPoint,
    status: item.status,
    sourceUrl: item.sourceUrl,
    credit: item.credit,
    primaryWebp: `/media/derivatives/${item.id}.webp`,
    primaryAvif: `/media/derivatives/${item.id}.avif`,
    posterConceptWebp: `/media/derivatives/poster-${item.id}.webp`,
    responsive: derivatives,
  });
}

// Extract clean architectural glass & globe layers from cover LI.png for the "In Focus" Opening Scene:
// Left slice (x: 0..2100, y: 0..1920) has the sculpted globe & glass studio walls WITHOUT text or portrait!
const coverPath = path.join(ROOT, "cover LI.png");
if (fs.existsSync(coverPath)) {
  const globeCropWebp = path.join(DERIV_DIR, "studio-globe-detail.webp");
  const globeCropAvif = path.join(DERIV_DIR, "studio-globe-detail.avif");
  await sharp(coverPath)
    .extract({ left: 0, top: 0, width: 2040, height: 1920 })
    .resize({ width: 1080, height: 1016 })
    .webp({ quality: 84 })
    .toFile(globeCropWebp);
  await sharp(coverPath)
    .extract({ left: 0, top: 0, width: 2040, height: 1920 })
    .resize({ width: 1080, height: 1016 })
    .avif({ quality: 74 })
    .toFile(globeCropAvif);

  // Extract pure architectural glass studio slice (x: 4650..5650, y: 0..1920) between text and portrait
  await sharp(coverPath)
    .extract({ left: 4650, top: 0, width: 1000, height: 1920 })
    .resize({ width: 600, height: 1152 })
    .webp({ quality: 82 })
    .toFile(path.join(DERIV_DIR, "studio-glass-architecture.webp"));

  // Scaled preview of cover LI.png for Behind the Work / Asset Reference only
  await sharp(coverPath)
    .resize({ width: 1600 })
    .webp({ quality: 84 })
    .toFile(path.join(DERIV_DIR, "cover-li-preview-1600w.webp"));
}

// Build Contact Sheet
const thumbBuffers = await Promise.all(
  svgDefs.map(async (item) => {
    const srcPath = path.join(SOURCES_DIR, `${item.id}.jpg`);
    return sharp(srcPath)
      .resize({ width: 360, height: 540, fit: "cover", position: "attention" })
      .jpeg({ quality: 88 })
      .toBuffer();
  })
);

await sharp({
  create: {
    width: 1560,
    height: 580,
    channels: 4,
    background: { r: 10, g: 23, b: 34, alpha: 1 },
  },
})
  .composite([
    { input: thumbBuffers[0], left: 20, top: 20 },
    { input: thumbBuffers[1], left: 400, top: 20 },
    { input: thumbBuffers[2], left: 780, top: 20 },
    { input: thumbBuffers[3], left: 1160, top: 20 },
  ])
  .webp({ quality: 86 })
  .toFile(path.join(DERIV_DIR, "contact-sheet.webp"));

fs.writeFileSync(path.join(DERIV_DIR, "source-mapping.json"), JSON.stringify(mapping, null, 2));
console.log("Prepared all In Focus media derivatives and contact sheet successfully.");
