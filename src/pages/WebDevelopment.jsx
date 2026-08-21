import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'
import { SITE, getConceptProjects } from '../data/portfolio'
import { ArrowUpRight } from 'lucide-react'

export default function WebDevelopment() {
  const concepts = getConceptProjects()

  return (
    <>
      <SEO
        title="Web Development"
        description="Web Development Services — business websites, landing pages, website redesign, responsive design, performance optimization and SEO foundations. By Faizyab Hussain."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Web Development Services',
          description: 'Business websites, landing pages, website redesign and responsive web development.',
          provider: { '@type': 'Person', name: SITE.name, url: SITE.url },
          areaServed: 'Worldwide',
        }}
      />

      <section className="page-hero">
        <div className="wrap">
          <Reveal><span className="eyebrow">Web Development</span></Reveal>
          <Reveal delay={80}><h1 className="page-title">Web Development Services</h1></Reveal>
          <Reveal delay={120}>
            <p className="page-subtitle">Modern, fast and responsive websites for businesses, startups and brands — built with performance, UX and conversion in mind.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap page-content">
          <Reveal>
            <h2>What I Build</h2>
            <p>New websites, redesigns, landing pages. Modern design, fast loading, works on every device.</p>
          </Reveal>

          <Reveal delay={80}>
            <h2>Services</h2>
            <div className="page-feature-grid">
              <div className="page-feature">
                <h3>Business Websites</h3>
                <p>Professional websites for companies, startups and local businesses. Clean design, fast loading, works on mobile.</p>
              </div>
              <div className="page-feature">
                <h3>Landing Pages</h3>
                <p>Focused pages for products, campaigns and services. Built fast, deployed fast.</p>
              </div>
              <div className="page-feature">
                <h3>Website Redesign</h3>
                <p>Update outdated websites with modern design and better performance. Keep what works, rebuild what doesn't.</p>
              </div>
              <div className="page-feature">
                <h3>Responsive Design</h3>
                <p>Works on desktop, tablet and mobile. Every website I build is mobile-first.</p>
              </div>
              <div className="page-feature">
                <h3>Performance</h3>
                <p>Fast loading. Image optimization, code splitting, lazy loading.</p>
              </div>
              <div className="page-feature">
                <h3>SEO Foundations</h3>
                <p>Semantic HTML, structured data, meta tags, proper heading hierarchy.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <h2>Tech Stack</h2>
            <p>React · Next.js · TypeScript · JavaScript · Tailwind CSS · HTML · CSS · Vercel · Netlify</p>
          </Reveal>

          {concepts.length > 0 && (
            <Reveal delay={200}>
              <h2>Website Concepts</h2>
              <p>Business website concepts exploring how different industries can present themselves online:</p>
              <div className="page-project-links">
                {concepts.slice(0, 4).map((p) => (
                  <a key={p.slug} href={p.url || '#'} target={p.url ? '_blank' : undefined} rel={p.url ? 'noopener noreferrer' : undefined} className="page-project-link">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <span className="project-link">Concept · {p.category}</span>
                  </a>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="section section-tinted">
        <div className="wrap">
          <Reveal className="final-cta">
            <span className="eyebrow" style={{ color: 'var(--accent)' }}>Need a website?</span>
            <h2 style={{ marginTop: 14 }}>Let's build your online presence</h2>
            <p>A modern, fast and conversion-focused website for your business or project.</p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">Start a conversation</Link>
              <Link to="/projects" className="btn btn-ghost">View projects</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
