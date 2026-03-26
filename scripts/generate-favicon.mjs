import { chromium } from '@playwright/test';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = dirname(__dirname);
const svgPath = join(rootDir, 'public', 'favicon.svg');
const icoPath = join(rootDir, 'public', 'favicon.ico');

const svgMarkup = readFileSync(svgPath, 'utf8');
const sizes = [16, 32, 48, 64];

async function launchBrowser() {
  try {
    return await chromium.launch({ headless: true });
  } catch {
    return chromium.launch({ channel: 'chrome', headless: true });
  }
}

function buildIco(buffers) {
  const count = buffers.length;
  const header = Buffer.alloc(6 + count * 16);

  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  let offset = header.length;

  buffers.forEach(({ size, png }, index) => {
    const entryOffset = 6 + index * 16;

    header.writeUInt8(size === 256 ? 0 : size, entryOffset);
    header.writeUInt8(size === 256 ? 0 : size, entryOffset + 1);
    header.writeUInt8(0, entryOffset + 2);
    header.writeUInt8(0, entryOffset + 3);
    header.writeUInt16LE(1, entryOffset + 4);
    header.writeUInt16LE(32, entryOffset + 6);
    header.writeUInt32LE(png.length, entryOffset + 8);
    header.writeUInt32LE(offset, entryOffset + 12);

    offset += png.length;
  });

  return Buffer.concat([header, ...buffers.map(({ png }) => png)]);
}

async function createPng(browser, size) {
  const page = await browser.newPage({
    viewport: { width: size, height: size },
    deviceScaleFactor: 1,
  });

  await page.setContent(
    `<style>
      html, body { margin: 0; background: transparent; }
      body { width: ${size}px; height: ${size}px; overflow: hidden; }
      svg { display: block; width: ${size}px; height: ${size}px; }
    </style>${svgMarkup}`,
    { waitUntil: 'load' },
  );

  const png = await page.screenshot({ omitBackground: true });
  await page.close();
  return png;
}

async function main() {
  mkdirSync(join(rootDir, 'public'), { recursive: true });

  const browser = await launchBrowser();

  try {
    const pngBuffers = [];
    for (const size of sizes) {
      const png = await createPng(browser, size);
      pngBuffers.push({ size, png });
    }

    writeFileSync(icoPath, buildIco(pngBuffers));
  } finally {
    await browser.close();
  }
}

await main();
