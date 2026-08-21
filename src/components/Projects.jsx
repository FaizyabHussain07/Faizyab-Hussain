import { useState } from 'react'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { PROJECT_CATEGORIES, PROJECTS } from '../data/portfolio'

export default function Projects({ showAll = true, limit }) {
  const [activeCat, setActiveCat] = useState('All')

  let filtered = activeCat === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === activeCat)
  if (limit) filtered = filtered.slice(0, limit)

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section-head">
          <Reveal><span className="eyebrow">Selected Work</span></Reveal>
          <Reveal delay={80}><h2>From AI products and SaaS platforms to business systems and modern web experiences.</h2></Reveal>
          <Reveal delay={160}>
            <p>A collection of shipped products, web applications and business website concepts — each built to solve a real problem or explore a real use case.</p>
          </Reveal>
        </div>

        {showAll && (
          <div className="filter-row" role="group" aria-label="Filter projects by category">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCat === cat ? 'active' : ''}`}
                onClick={() => setActiveCat(cat)}
                aria-pressed={activeCat === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="project-grid">
          {filtered.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 90}>
              <article className="project-card">
                <div className="project-thumb">
                  <div className="badge-row">
                    <span className={`badge ${project.tag === 'concept' ? 'badge-concept' : 'badge-personal'}`}>
                      {project.tag === 'concept' ? 'Concept Project' : 'Shipped'}
                    </span>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="badge badge-live">
                        Live demo <ArrowUpRight size={11} />
                      </a>
                    )}
                    {project.url && !project.live && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="badge badge-live">
                        Live demo <ArrowUpRight size={11} />
                      </a>
                    )}
                  </div>
                  {project.thumb ? (
                    <img
                      src={project.thumb}
                      alt={`${project.title} — ${project.category} project by Faizyab Hussain`}
                      loading="lazy"
                      width="1024"
                      height="765"
                    />
                  ) : (
                    <div className="browser-mock">
                      <div className="chrome"><span /><span /><span /></div>
                      <div className="mock-body">
                        <div className="mock-hero" style={{ background: project.tone || 'var(--primary)', opacity: 0.3 }} />
                        <div className="mock-lines" style={{ marginTop: 10 }}><div /><div /><div /></div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="project-body">
                  <div className="project-cat">
                    {project.tag === 'concept' ? `Concept · ${project.category}` : project.category}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="tech-tags">
                    {project.tech.map((tech) => <span className="tech-tag" key={tech}>{tech}</span>)}
                  </div>
                  <div className="project-links-row">
                    {project.tag === 'shipped' ? (
                      <Link to={`/projects/${project.slug}`} className="project-link">
                        View case study <ArrowUpRight size={14} />
                      </Link>
                    ) : project.url ? (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                        View live demo <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <Link to="/contact" className="project-link">
                        Get a similar site <ArrowUpRight size={14} />
                      </Link>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link project-link-secondary">
                        GitHub <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {showAll && (
          <Reveal delay={200}>
            <div className="section-cta">
              <Link to="/projects" className="btn btn-ghost">
                View all projects <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
