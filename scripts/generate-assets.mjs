// Generates brand assets from the logo:
//   public/og-image.png          (1200x630 social preview)
//   public/favicon.ico           (16/32/48, PNG-embedded)
//   public/apple-touch-icon.png  (180x180)
//   public/icon-192.png          (192x192, white badge, maskable-safe)
//   public/icon-512.png          (512x512, white badge, maskable-safe)
// Run: node scripts/generate-assets.mjs  (from the project root)
import { readFileSync, writeFileSync } from 'node:fs'
import sharp from 'sharp'

const LOGO = readFileSync('public/faizyab-logo.png')
const LOGO_B64 = LOGO.toString('base64')
const HERO = readFileSync('public/images/hero.jpg')
const HERO_B64 = HERO.toString('base64')

// ─── OG image 1200x630 ──────────────────────────────────────────────
const ogSvg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="82%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#1D4A42" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#0A1917" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="dot" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#E8A23C"/>
      <stop offset="100%" stop-color="#B97F22"/>
    </radialGradient>
    <clipPath id="shot">
      <rect x="770" y="150" width="330" height="330" rx="26"/>
    </clipPath>
  </defs>

  <rect width="1200" height="630" fill="#0A1917"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- inset frame -->
  <rect x="28" y="28" width="1144" height="574" rx="22" fill="none" stroke="#1D3A35" stroke-width="2"/>

  <!-- left column -->
  <rect x="84" y="86" width="46" height="6" rx="3" fill="#E8A23C"/>
  <text x="84" y="132" font-family="Consolas, monospace" font-size="21" letter-spacing="6" fill="#3FBBA8">WEB DEVELOPER</text>
  <text x="84" y="172" font-family="Consolas, monospace" font-size="21" letter-spacing="6" fill="#5C7A72">KARACHI, PAKISTAN</text>

  <text x="84" y="268" font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="72" fill="#F2F7F5">Faizyab Hussain</text>

  <g font-family="Segoe UI, Arial, sans-serif" font-size="30" fill="#E8A23C">
    <circle cx="92" cy="338" r="6" fill="url(#dot)"/>
    <text x="116" y="346">Modern Websites</text>
  </g>
  <g font-family="Segoe UI, Arial, sans-serif" font-size="30" fill="#E8A23C">
    <circle cx="92" cy="394" r="6" fill="url(#dot)"/>
    <text x="116" y="402">Digital Experiences</text>
  </g>
  <g font-family="Segoe UI, Arial, sans-serif" font-size="30" fill="#E8A23C">
    <circle cx="92" cy="450" r="6" fill="url(#dot)"/>
    <text x="116" y="458">Business Websites</text>
  </g>

  <text x="84" y="540" font-family="Segoe UI, Arial, sans-serif" font-size="24" fill="#8FA8A2">faizyab-hussain.vercel.app</text>
  <text x="84" y="578" font-family="Consolas, monospace" font-size="19" letter-spacing="1" fill="#5C7A72">github.com/FaizyabHussain07</text>

  <!-- right: hero screenshot preview -->
  <circle cx="910" cy="315" r="240" fill="#0F2E29" fill-opacity="0.6"/>
  <image x="770" y="150" width="330" height="330" href="data:image/jpeg;base64,${HERO_B64}" preserveAspectRatio="xMidYMid slice" clip-path="url(#shot)"/>
  <rect x="770" y="150" width="330" height="330" rx="26" fill="none" stroke="#1D3A35" stroke-width="2"/>
</svg>`)

await sharp(ogSvg).png({ compressionLevel: 9 }).toFile('public/og-image.png')
console.log('og-image.png (1200x630) written')

// ─── Favicon + app icons (white rounded badge + logo) ───────────────
async function badge(size) {
  const margin = Math.round(size * 0.24)
  const inner = size - margin * 2
  const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <rect width="${size}" height="${size}" rx="${Math.round(size * 0.22)}" fill="#FFFFFF"/>
    <image x="${margin}" y="${margin + Math.round(size * 0.015)}" width="${inner}" height="${Math.round(inner * 1.04)}" href="data:image/png;base64,${LOGO_B64}" preserveAspectRatio="xMidYMid meet"/>
  </svg>`)
  return sharp(svg).png().toBuffer()
}

const png16 = await badge(16)
const png32 = await badge(32)
const png48 = await badge(48)
const png180 = await badge(180)
const png192 = await badge(192)
const png512 = await badge(512)

// ICO container with PNG-embedded entries (valid since Vista)
function buildIco(images) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0) // reserved
  header.writeUInt16LE(1, 2) // type: icon
  header.writeUInt16LE(images.length, 4)
  const entries = []
  let offset = 6 + 16 * images.length
  for (const { size, data } of images) {
    const e = Buffer.alloc(16)
    e.writeUInt8(size >= 256 ? 0 : size, 0)
    e.writeUInt8(size >= 256 ? 0 : size, 1)
    e.writeUInt8(0, 2) // palette
    e.writeUInt8(0, 3) // reserved
    e.writeUInt16LE(1, 4) // planes
    e.writeUInt16LE(32, 6) // bpp
    e.writeUInt32LE(data.length, 8)
    e.writeUInt32LE(offset, 12)
    offset += data.length
    entries.push(e)
  }
  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)])
}

writeFileSync('public/favicon.ico', buildIco([
  { size: 16, data: png16 },
  { size: 32, data: png32 },
  { size: 48, data: png48 },
]))
console.log('favicon.ico (16/32/48) written')

writeFileSync('public/apple-touch-icon.png', png180)
console.log('apple-touch-icon.png (180) written')

writeFileSync('public/icon-192.png', png192)
console.log('icon-192.png written')

writeFileSync('public/icon-512.png', png512)
console.log('icon-512.png written')
