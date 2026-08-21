import { useParams, Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { getSolutionBySlug, SOLUTIONS } from '../data/portfolio'

export default function SolutionDetail() {
  const { slug } = useParams()
  const solution = getSolutionBySlug(slug)

  if (!solution) {
    return (
      <>
        <SEO title="Solution Not Found" noindex />
        <section className="section">
          <div className="wrap" style={{ textAlign: 'center', padding: '120px 24px' }}>
            <h1>Solution Not Found</h1>
            <Link to="/solutions" className="btn btn-primary" style={{ marginTop: 24 }}>View all solutions</Link>
          </div>
        </section>
      </>
    )
  }

  const Icon = solution.icon
  const related = SOLUTIONS.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      <SEO
        title={solution.title}
        description={solution.shortDesc}
      />

      <section className="page-hero">
        <div className="wrap">
          <Link to="/solutions" className="back-link">← Back to solutions</Link>
          <div className="solution-hero-icon"><Icon /></div>
          <h1 className="page-title">{solution.title}</h1>
          <p className="page-subtitle">{solution.shortDesc}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap page-content">
          <Reveal>
            <p className="solution-full-desc">{solution.description}</p>
          </Reveal>

          {solution.features && (
            <Reveal delay={80}>
              <h2>What's Included</h2>
              <ul className="detail-feature-list">
                {solution.features.map((f) => (
                  <li key={f}><span className="feature-bullet" />{f}</li>
                ))}
              </ul>
            </Reveal>
          )}

          {solution.technologies && (
            <Reveal delay={160}>
              <h2>Technologies</h2>
              <div className="tech-tags" style={{ marginTop: 12 }}>
                {solution.technologies.map((t) => <span className="tech-tag" key={t}>{t}</span>)}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-tinted">
          <div className="wrap">
            <Reveal>
              <h2 className="section-title">Related Solutions</h2>
            </Reveal>
            <div className="solutions-grid" style={{ marginTop: 32 }}>
              {related.map((s, i) => {
                const RelIcon = s.icon
                return (
                  <Reveal key={s.slug} delay={i * 80}>
                    <Link to={`/solutions/${s.slug}`} className="solution-card">
                      <div className="solution-card-icon"><RelIcon /></div>
                      <h2>{s.title}</h2>
                      <p>{s.shortDesc}</p>
                      <span className="project-link">Learn more <ArrowUpRight size={14} /></span>
                    </Link>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap">
          <Reveal className="final-cta">
            <span className="eyebrow" style={{ color: 'var(--accent)' }}>Ready to start?</span>
            <h2 style={{ marginTop: 14 }}>Have a project in mind?</h2>
            <p>Tell me about what you're building. I'll get back to you with how I can help.</p>
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
