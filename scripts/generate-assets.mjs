// Gera favicons e imagem Open Graph a partir de SVGs vetoriais.
// Ferramenta de desenvolvimento (não é necessária para build/deploy —
// os PNGs resultantes já ficam versionados em public/).
// Requer: npm install sharp --save-dev
import sharp from "sharp";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
await mkdir(publicDir, { recursive: true });

const NAVY = "#0b0f2e";
const CREAM = "#f6f3ea";

// ---------- Favicon: monograma "m." sobre fundo navy arredondado ----------
const faviconSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7c6cff" />
      <stop offset="55%" stop-color="#5b8bff" />
      <stop offset="100%" stop-color="#35e0c8" />
    </linearGradient>
    <radialGradient id="glow" cx="78%" cy="18%" r="60%">
      <stop offset="0%" stop-color="#7c6cff" stop-opacity="0.55" />
      <stop offset="100%" stop-color="#7c6cff" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="${NAVY}" />
  <rect width="512" height="512" rx="112" fill="url(#glow)" />
  <text x="176" y="345" font-family="Poppins" font-weight="700" font-size="272" fill="${CREAM}" text-anchor="middle">m</text>
  <circle cx="358" cy="205" r="26" fill="${CREAM}" />
</svg>`;

// ---------- OG Image: 1200x630 wordmark + tagline ----------
const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7c6cff" />
      <stop offset="55%" stop-color="#5b8bff" />
      <stop offset="100%" stop-color="#35e0c8" />
    </linearGradient>
    <radialGradient id="glow1" cx="86%" cy="6%" r="55%">
      <stop offset="0%" stop-color="#7c6cff" stop-opacity="0.45" />
      <stop offset="100%" stop-color="#7c6cff" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="glow2" cx="6%" cy="100%" r="55%">
      <stop offset="0%" stop-color="#35e0c8" stop-opacity="0.28" />
      <stop offset="100%" stop-color="#35e0c8" stop-opacity="0" />
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(246,243,234,0.06)" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="${NAVY}" />
  <rect width="1200" height="630" fill="url(#glow1)" />
  <rect width="1200" height="630" fill="url(#glow2)" />
  <rect width="1200" height="630" fill="url(#grid)" />

  <!-- constelação de nós decorativa -->
  <g opacity="0.55" stroke="url(#g)" stroke-width="1.4">
    <line x1="880" y1="140" x2="990" y2="220" />
    <line x1="990" y1="220" x2="960" y2="330" />
    <line x1="880" y1="140" x2="1040" y2="120" />
    <line x1="960" y1="330" x2="1080" y2="360" />
  </g>
  <g fill="url(#g)">
    <circle cx="880" cy="140" r="6" />
    <circle cx="990" cy="220" r="8" />
    <circle cx="960" cy="330" r="5" />
    <circle cx="1040" cy="120" r="5" />
    <circle cx="1080" cy="360" r="7" />
  </g>

  <text x="90" y="300" font-family="Poppins" font-weight="700" font-size="104" fill="${CREAM}" letter-spacing="-2">mindit</text>
  <circle cx="447" cy="262" r="16" fill="${CREAM}" />

  <text x="92" y="368" font-family="Poppins" font-weight="500" font-size="30" fill="#a9adcf">Inteligência Artificial sob demanda para o seu negócio</text>

  <g font-family="Poppins" font-weight="600" font-size="19" fill="#0b0f2e">
    <rect x="92" y="420" width="230" height="46" rx="23" fill="url(#g)" />
    <text x="207" y="449" text-anchor="middle">Agentes de IA</text>

    <rect x="336" y="420" width="240" height="46" rx="23" fill="none" stroke="rgba(246,243,234,0.35)" />
    <text x="456" y="449" text-anchor="middle" fill="#f6f3ea">IA Generativa</text>

    <rect x="590" y="420" width="270" height="46" rx="23" fill="none" stroke="rgba(246,243,234,0.35)" />
    <text x="725" y="449" text-anchor="middle" fill="#f6f3ea">Machine Learning</text>
  </g>
</svg>`;

async function main() {
  await writeFile(path.join(publicDir, "favicon.svg"), faviconSvg.trim(), "utf8");

  const faviconBuf = Buffer.from(faviconSvg);
  await sharp(faviconBuf).resize(32, 32).png().toFile(path.join(publicDir, "favicon-32.png"));
  await sharp(faviconBuf).resize(180, 180).png().toFile(path.join(publicDir, "apple-touch-icon.png"));
  await sharp(faviconBuf).resize(192, 192).png().toFile(path.join(publicDir, "favicon-192.png"));
  await sharp(faviconBuf).resize(512, 512).png().toFile(path.join(publicDir, "favicon-512.png"));

  await sharp(Buffer.from(ogSvg)).resize(1200, 630).png().toFile(path.join(publicDir, "og-image.png"));

  console.log("✔ Ícones e imagem OG gerados em public/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
