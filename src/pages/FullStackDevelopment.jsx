import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'
import { SITE, getShippedProjects } from '../data/portfolio'
import { ArrowUpRight } from 'lucide-react'

export default function FullStackDevelopment() {
  const projects = getShippedProjects()

  return (
    <>
      <SEO
        title="Full-Stack Development"
        description="Full-Stack Web Development — React, Next.js, Node.js, APIs, databases, authentication, dashboards and deployment. By Faizyab Hussain."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Full-Stack Web Development',
          description: 'Complete web applications with frontend, backend, APIs, databases, authentication and deployment.',
          provider: { '@type': 'Person', name: SITE.name, url: SITE.url },
          areaServed: 'Worldwide',
        }}
      />

      <section className="page-hero">
        <div className="wrap">
          <Reveal><span className="eyebrow">Full-Stack Development</span></Reveal>
          <Reveal delay={80}><h1 className="page-title">Full-Stack Web Development</h1></Reveal>
          <Reveal delay={120}>
            <p className="page-subtitle">Complete web applications built with modern frameworks — from frontend interfaces to backend APIs, databases, authentication and deployment.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap page-content">
          <Reveal>
            <h2>What I Build</h2>
            <p>The full application — frontend, backend, database, APIs, auth and deployment. Everything connected, everything working together.</p>
          </Reveal>

          <Reveal delay={80}>
            <h2>What I Build</h2>
            <div className="page-feature-grid">
              <div className="page-feature">
                <h3>Frontend Development</h3>
                <p>Modern, responsive interfaces built with React, Next.js and TypeScript. Clean component architecture, state management and performance optimization.</p>
              </div>
              <div className="page-feature">
                <h3>Backend &amp; APIs</h3>
                <p>RESTful APIs and backend services built with Node.js and Express. Authentication, authorization, data validation and business logic.</p>
              </div>
              <div className="page-feature">
                <h3>Database Design</h3>
                <p>Data modeling and database implementation with MongoDB, PostgreSQL or MySQL. Schema design, indexing, queries and migrations.</p>
              </div>
              <div className="page-feature">
                <h3>Authentication</h3>
                <p>Secure authentication systems — JWT, OAuth, session management, role-based access control and user management.</p>
              </div>
              <div className="page-feature">
                <h3>Dashboards</h3>
                <p>Admin panels, analytics dashboards, management interfaces and data visualization for business applications.</p>
              </div>
              <div className="page-feature">
                <h3>Deployment</h3>
                <p>Production deployment on Vercel, Netlify or cloud platforms. CI/CD setup, environment configuration and monitoring.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <h2>Tech Stack</h2>
            <p><strong>Frontend:</strong> React · Next.js · TypeScript · JavaScript · Tailwind CSS</p>
            <p><strong>Backend:</strong> Node.js · Express.js · REST APIs</p>
            <p><strong>Database:</strong> MongoDB · PostgreSQL · MySQL · Supabase · Convex</p>
            <p><strong>Tools:</strong> Git · GitHub · Vercel · Netlify · Vite · Figma</p>
          </Reveal>

          <Reveal delay={200}>
            <h2>Projects</h2>
            <div className="page-project-links">
              {projects.slice(0, 4).map((p) => (
                <Link key={p.slug} to={`/projects/${p.slug}`} className="page-project-link">
                  <h3>{p.title}</h3>
                  <p>{p.desc.slice(0, 120)}…</p>
                  <span className="project-link">View case study <ArrowUpRight size={14} /></span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="wrap">
          <Reveal className="final-cta">
            <span className="eyebrow" style={{ color: 'var(--accent)' }}>Let's build</span>
            <h2 style={{ marginTop: 14 }}>Need a full-stack application?</h2>
            <p>From MVPs to production systems — I build complete web applications that are ready for real users.</p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">Start a conversation</Link>
              <Link to="/services" className="btn btn-ghost">All services</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
