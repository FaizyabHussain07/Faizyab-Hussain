import { ExternalLink } from 'lucide-react'
import Reveal from './Reveal'
import { TECH_PROJECTS } from '../data/portfolio'

export default function TechProjects() {
  return (
    <section className="section section-tinted" id="technical">
      <div className="wrap">
        <div className="section-head">
          <Reveal><span className="eyebrow">Built beyond websites</span></Reveal>
          <Reveal delay={80}><h2>Real projects, actually shipped</h2></Reveal>
          <Reveal delay={160}>
            <p>Some of my work goes beyond marketing websites — from web applications to small tools built to solve a specific problem.</p>
          </Reveal>
        </div>

        <div className="tech-project-grid">
          {TECH_PROJECTS.map((project, i) => {
            const Icon = project.icon
            return (
              <Reveal key={project.title} className="tech-card" delay={(i % 3) * 80}>
                <div className="tech-card-icon"><Icon /></div>
                <h3>{project.title}</h3>
                <div className="tech-label">Live project</div>
                <p className="tech-desc">{project.desc}</p>
                <div className="tech-card-links">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    Live demo <ExternalLink size={14} />
                  </a>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      Source <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
