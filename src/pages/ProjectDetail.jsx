import { useParams, Link } from 'react-router-dom'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { getProjectBySlug, getRelatedProjects } from '../data/portfolio'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <>
        <SEO title="Project Not Found" noindex />
        <section className="section">
          <div className="wrap" style={{ textAlign: 'center', padding: '120px 24px' }}>
            <h1>Project Not Found</h1>
            <p style={{ color: 'var(--muted-foreground)', marginTop: 16 }}>The project you're looking for doesn't exist.</p>
            <Link to="/projects" className="btn btn-primary" style={{ marginTop: 24 }}>View all projects</Link>
          </div>
        </section>
      </>
    )
  }

  const related = getRelatedProjects(slug, 3)

  return (
    <>
      <SEO
        title={project.title}
        description={project.desc}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: project.title,
          description: project.desc,
          url: project.live || project.url,
          applicationCategory: 'WebApplication',
          author: {
            '@type': 'Person',
            name: 'Faizyab Hussain',
          },
        }}
      />

      <section className="page-hero">
        <div className="wrap">
          <Link to="/projects" className="back-link">← Back to projects</Link>
          <span className="eyebrow">{project.tag === 'concept' ? 'Concept Project' : 'Case Study'}</span>
          <h1 className="page-title">{project.title}</h1>
          <p className="page-subtitle">{project.desc}</p>

          <div className="project-detail-meta">
            <div className="project-detail-meta-item">
              <span className="meta-label">Status</span>
              <span className="meta-value">{project.status || (project.tag === 'concept' ? 'Concept' : 'Live')}</span>
            </div>
            <div className="project-detail-meta-item">
              <span className="meta-label">Category</span>
              <span className="meta-value">{project.category}</span>
            </div>
            <div className="project-detail-meta-item">
              <span className="meta-label">Technologies</span>
              <span className="meta-value">{project.tech.join(', ')}</span>
            </div>
          </div>

          <div className="project-detail-actions">
            {(project.live || project.url) && (
              <a href={project.live || project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Live Demo <ArrowUpRight size={15} />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                GitHub <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </section>

      {project.thumb && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="project-detail-hero-image">
              <img
                src={project.thumb}
                alt={`${project.title} — project screenshot`}
                width="1200"
                height="900"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      )}

      {/* Case study content for shipped projects */}
      {project.tag === 'shipped' && (
        <section className="section">
          <div className="wrap project-detail-content">
            {project.problem && (
              <Reveal>
                <div className="detail-section">
                  <h2>The Problem</h2>
                  <p>{project.problem}</p>
                </div>
              </Reveal>
            )}

            {project.goal && (
              <Reveal delay={80}>
                <div className="detail-section">
                  <h2>The Goal</h2>
                  <p>{project.goal}</p>
                </div>
              </Reveal>
            )}

            {project.solution && (
              <Reveal delay={160}>
                <div className="detail-section">
                  <h2>The Solution</h2>
                  <p>{project.solution}</p>
                </div>
              </Reveal>
            )}

            {project.features && (
              <Reveal delay={200}>
                <div className="detail-section">
                  <h2>Key Features</h2>
                  <ul className="detail-feature-list">
                    {project.features.map((f) => (
                      <li key={f}><span className="feature-bullet" />{f}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            <Reveal delay={240}>
              <div className="detail-section">
                <h2>Technologies</h2>
                <div className="tech-tags" style={{ marginTop: 12 }}>
                  {project.tech.map((t) => <span className="tech-tag" key={t}>{t}</span>)}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Related projects */}
      {related.length > 0 && (
        <section className="section section-tinted">
          <div className="wrap">
            <Reveal>
              <h2 className="section-title" style={{ marginBottom: 32 }}>Related Projects</h2>
            </Reveal>
            <div className="project-grid project-grid-3">
              {related.map((rp, i) => (
                <Reveal key={rp.slug} delay={i * 80}>
                  <Link to={`/projects/${rp.slug}`} className="related-project-card">
                    <div className="related-project-icon">
                      {rp.icon && <rp.icon />}
                    </div>
                    <h3>{rp.title}</h3>
                    <p>{rp.desc.slice(0, 100)}…</p>
                    <span className="project-link">View project <ArrowUpRight size={14} /></span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap">
          <Reveal className="final-cta">
            <span className="eyebrow" style={{ color: 'var(--accent)' }}>Interested?</span>
            <h2 style={{ marginTop: 14 }}>Have a similar project in mind?</h2>
            <p>Let's talk about what you're building.</p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">Start a conversation</Link>
              <Link to="/projects" className="btn btn-ghost">View more projects</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
