import { useEffect } from 'react'
import { SITE } from '../data/portfolio'

/**
 * Sets document title, meta tags and canonical URL for each page.
 * Pass page-specific props to override defaults.
 */
export default function SEO({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  noindex = false,
  jsonLd,
}) {
  const fullTitle = title
    ? `${title} | ${SITE.name}`
    : `${SITE.name} — Full-Stack Developer & AI Product Builder`
  const desc = description || SITE.description
  const url = canonical || SITE.url
  const image = ogImage || `${SITE.url}/og-image.png`

  useEffect(() => {
    document.title = fullTitle

    const setMeta = (name, content, attribute = 'name') => {
      let el = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attribute, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', desc)
    setMeta('robots', noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    setMeta('theme-color', '#0A1917')

    // Canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]')
    if (!canonicalEl) {
      canonicalEl = document.createElement('link')
      canonicalEl.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalEl)
    }
    canonicalEl.setAttribute('href', url)

    // Open Graph
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', desc, 'property')
    setMeta('og:url', url, 'property')
    setMeta('og:image', image, 'property')
    setMeta('og:type', ogType, 'property')
    setMeta('og:site_name', SITE.name, 'property')
    setMeta('og:locale', 'en_US', 'property')

    // Twitter
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', desc)
    setMeta('twitter:image', image)
  }, [fullTitle, desc, url, image, ogType, noindex])

  // JSON-LD structured data
  useEffect(() => {
    // Remove existing JSON-LD scripts we manage
    document.querySelectorAll('script[data-seo-jsonld]').forEach((el) => el.remove())

    if (jsonLd) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-seo-jsonld', 'true')
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }
  }, [jsonLd])

  return null
}
