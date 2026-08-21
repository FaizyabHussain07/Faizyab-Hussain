import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'
import { SITE } from '../data/portfolio'

export default function WebDevelopmentKarachi() {
  return (
    <>
      <SEO
        title="Web Development Karachi"
        description="Full-Stack and Web Development in Karachi — building websites, web applications, business systems, SaaS products and AI-powered tools. By Faizyab Hussain."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Full-Stack & Web Development in Karachi',
          description: 'Websites, web applications, business systems, SaaS products and AI-powered tools built in Karachi.',
          provider: { '@type': 'Person', name: SITE.name, url: SITE.url },
          areaServed: { '@type': 'Place', name: 'Karachi, Pakistan' },
        }}
      />

      <section className="page-hero">
        <div className="wrap">
          <Reveal><span className="eyebrow">Based in Karachi</span></Reveal>
          <Reveal delay={80}><h1 className="page-title">Full-Stack &amp; Web Development in Karachi</h1></Reveal>
          <Reveal delay={120}>
            <p className="page-subtitle">Building websites, web applications, business systems, SaaS products and AI-powered tools from Karachi, Pakistan — available for projects worldwide.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap page-content">
          <Reveal>
            <h2>What I Build</h2>
            <p>I'm Faizyab Hussain, based in Karachi. I build websites, web applications, business systems, SaaS products and AI-powered tools.</p>
          </Reveal>

          <Reveal delay={80}>
            <h2>Web Development Services</h2>
            <div className="page-feature-grid">
              <div className="page-feature">
                <h3>Business Websites</h3>
                <p>Fast, responsive and conversion-focused websites for businesses in Karachi and beyond. Designed for both local presence and global reach.</p>
              </div>
              <div className="page-feature">
                <h3>Web Applications</h3>
                <p>Full-stack web applications with modern frontend, backend APIs, databases and authentication. Built for startups, businesses and enterprises.</p>
              </div>
              <div className="page-feature">
                <h3>Business Systems</h3>
                <p>Custom dashboards, CRM-style tools, booking systems and internal applications tailored to specific business workflows.</p>
              </div>
              <div className="page-feature">
                <h3>SaaS Products</h3>
                <p>End-to-end SaaS development — from product concept to deployed application with authentication, billing and dashboards.</p>
              </div>
              <div className="page-feature">
                <h3>AI-Powered Products</h3>
                <p>AI integrations, LLM-powered applications and intelligent automation systems for businesses looking to leverage AI.</p>
              </div>
              <div className="page-feature">
                <h3>Website Redesign</h3>
                <p>Modernize outdated websites with better design, UX, performance and responsive behavior.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <h2>Based in Karachi. Working Worldwide.</h2>
            <p>I work with businesses and founders worldwide. Remote collaboration through video calls, messaging and project management tools.</p>
            <p>Modern dev tools — Vercel, GitHub, cloud databases — make it easy to deliver quality work regardless of location.</p>
          </Reveal>

          <Reveal delay={200}>
            <h2>Technologies</h2>
            <p>React · Next.js · TypeScript · JavaScript · Node.js · Express.js · MongoDB · PostgreSQL · Supabase · AI APIs · Vercel · Git</p>
          </Reveal>

          <Reveal delay={240}>
            <h2>Let's Work Together</h2>
            <p>Need a website, web app or AI product built? Let's talk.</p>
            <div className="about-links" style={{ marginTop: 16 }}>
              <Link to="/contact" className="btn btn-primary btn-sm">Get in touch</Link>
              <Link to="/projects" className="btn btn-ghost btn-sm">View projects</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
