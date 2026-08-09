// One-time script: self-host the portfolio fonts.
// Reads /tmp/fonts.css (Google Fonts CSS2 response), downloads each woff2
// into public/fonts/ and prints the @font-face rules to use in index.css.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const css = readFileSync(path.join(root, 'fonts.css'), 'utf8')
const fontsDir = path.join(root, 'public', 'fonts')
mkdirSync(fontsDir, { recursive: true })

// Split into @font-face blocks
const blocks = css.match(/@font-face\s*{[^}]+}/g) || []
const seen = new Set()
const rules = []

for (const block of blocks) {
  const family = (block.match(/font-family:\s*'([^']+)'/) || [])[1]
  const style = (block.match(/font-style:\s*(\w+)/) || [])[1] || 'normal'
  const weight = (block.match(/font-weight:\s*(\d+)/) || [])[1] || '400'
  const range = (block.match(/unicode-range:\s*([^;]+)/) || [])[1] || ''
  const urlMatch = block.match(/url\((https:[^)]+)\)\s*format\('woff2'\)/)
  if (!urlMatch || !family) continue
  const url = urlMatch[1]

  const filename = `${family.replace(/\s+/g, '')}-${style}-${weight}-${Math.abs([...url].reduce((a, c) => a + c.charCodeAt(0), 0) % 99999)}.woff2`
  const localPath = `/fonts/${filename}`
  if (seen.has(localPath)) continue
  seen.add(localPath)

  const dest = path.join(fontsDir, filename)
  if (!existsSync(dest)) {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`fetch failed ${url}: ${res.status}`)
    writeFileSync(dest, Buffer.from(await res.arrayBuffer()))
  }
  console.log(`downloaded ${filename}`)

  rules.push(`@font-face {
  font-family: '${family}';
  font-style: ${style};
  font-weight: ${weight};
  font-display: swap;
  src: url('${localPath}') format('woff2');
  ${range ? `unicode-range: ${range};` : ''}
}`)
}

writeFileSync(path.join(root, 'fontfaces.css'), rules.join('\n\n') + '\n')
console.log(`\nWrote ${rules.length} @font-face rules to fontfaces.css`)
