import { chromium } from '@playwright/test';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = dirname(__dirname);
const outputPath = join(rootDir, 'public', 'og-image.png');
const backgroundPath = join(rootDir, 'public', 'Pictures', 'building_1600.webp');

function fileToDataUrl(filePath, mimeType) {
  const buffer = readFileSync(filePath);
  return `data:${mimeType};base64,${buffer.toString('base64')}`;
}

async function launchBrowser() {
  try {
    return await chromium.launch({ headless: true });
  } catch {
    return chromium.launch({ channel: 'chrome', headless: true });
  }
}

const backgroundImage = fileToDataUrl(backgroundPath, 'image/webp');

const html = `
<!doctype html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <style>
      * { box-sizing: border-box; }
      html, body {
        margin: 0;
        width: 1200px;
        height: 630px;
        overflow: hidden;
        font-family: Arial, Helvetica, sans-serif;
        background: #f4f7fb;
      }

      body {
        position: relative;
        color: white;
        background-image:
          linear-gradient(180deg, rgba(9, 18, 31, 0.16) 0%, rgba(9, 18, 31, 0.38) 100%),
          url('${backgroundImage}');
        background-size: cover;
        background-position: center;
      }

      .overlay {
        position: absolute;
        inset: 0;
        background:
          linear-gradient(90deg, rgba(12, 23, 39, 0.88) 0%, rgba(12, 23, 39, 0.72) 35%, rgba(12, 23, 39, 0.20) 72%, rgba(12, 23, 39, 0.05) 100%);
      }

      .content {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        padding: 42px 48px;
      }

      .brand {
        display: flex;
        align-items: center;
        gap: 18px;
      }

      .logo {
        width: 66px;
        height: 66px;
        display: grid;
        place-items: center;
        border-radius: 8px;
        background: #4e79a7;
        color: #ffffff;
        font-size: 29px;
        font-weight: 700;
        letter-spacing: -1px;
      }

      .brand-name {
        font-size: 32px;
        font-weight: 700;
        line-height: 1.1;
      }

      .hero {
        max-width: 690px;
      }

      .eyebrow {
        display: inline-block;
        margin-bottom: 18px;
        color: #c5dbf5;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0.18em;
        text-transform: uppercase;
      }

      .title {
        margin: 0 0 18px;
        font-size: 72px;
        line-height: 0.98;
        font-weight: 800;
        letter-spacing: -0.04em;
      }

      .subtitle {
        margin: 0;
        color: rgba(255, 255, 255, 0.92);
        font-size: 29px;
        line-height: 1.35;
        max-width: 660px;
      }

      .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: rgba(255, 255, 255, 0.88);
        font-size: 24px;
        font-weight: 600;
      }

      .pill {
        padding: 12px 18px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 999px;
        backdrop-filter: blur(6px);
        background: rgba(255, 255, 255, 0.08);
      }
    </style>
  </head>
  <body>
    <div class="overlay"></div>
    <div class="content">
      <div class="brand">
        <div class="logo">GS</div>
        <div class="brand-name">Glaserei Schubert</div>
      </div>

      <div class="hero">
        <div class="eyebrow">Leipzig</div>
        <h1 class="title">Fenster, Türen und Fassaden aus einer Hand</h1>
        <p class="subtitle">Moderner Glasbau, individuelle Lösungen und präzise Montage für Privat- und Gewerbekunden.</p>
      </div>

      <div class="footer">
        <div>glaswerk-collective-01.vercel.app</div>
        <div class="pill">Glas, Fenster & Fassaden</div>
      </div>
    </div>
  </body>
</html>
`;

async function main() {
  mkdirSync(join(rootDir, 'public'), { recursive: true });
  const browser = await launchBrowser();

  try {
    const page = await browser.newPage({
      viewport: { width: 1200, height: 630 },
      deviceScaleFactor: 1,
    });

    await page.setContent(html, { waitUntil: 'load' });
    await page.screenshot({ path: outputPath, type: 'png' });
    await page.close();
  } finally {
    await browser.close();
  }
}

await main();
