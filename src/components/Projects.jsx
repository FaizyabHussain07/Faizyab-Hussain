import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { PROJECT_CATEGORIES, PROJECTS } from '../data/portfolio'

export default function Projects() {
  const [activeCat, setActiveCat] = useState('All')

  const visible = activeCat === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === activeCat)

  const scrollToContact = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section-head">
          <Reveal><span className="eyebrow">Selected work</span></Reveal>
          <Reveal delay={80}><h2>Concept projects, built to solve real business problems</h2></Reveal>
          <Reveal delay={160}>
            <p>A collection of website concepts built to explore how different local businesses could present themselves online. Every concept project below is clearly labeled — none of these are real clients.</p>
          </Reveal>
        </div>

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

        <div className="project-grid">
          {visible.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 90}>
              <article className="project-card">
                <div className="project-thumb">
                  <div className="badge-row">
                    <span className="badge badge-concept">Concept project</span>
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="badge badge-live">
                        Live demo <ArrowUpRight size={11} />
                      </a>
                    )}
                  </div>
                  {project.thumb ? (
                    <img
                      src={project.thumb}
                      alt={`${project.title} — ${project.category} website concept`}
                      loading="lazy"
                      width="1024"
                      height="765"
                    />
                  ) : (
                    <div className="browser-mock">
                      <div className="chrome"><span /><span /><span /></div>
                      <div className="mock-body">
                        <div className="mock-hero" style={{ background: project.tone, opacity: 0.3 }} />
                        <div className="mock-lines" style={{ marginTop: 10 }}><div /><div /><div /></div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="project-body">
                  <div className="project-cat">Concept project · {project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="tech-tags">
                    {project.tech.map((tech) => <span className="tech-tag" key={tech}>{tech}</span>)}
                  </div>
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                      View live demo <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <a href="#contact" className="project-link" onClick={scrollToContact}>
                      Get a free demo <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
