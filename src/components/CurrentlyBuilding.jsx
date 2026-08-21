import Reveal from './Reveal'
import { CURRENTLY_BUILDING, getShippedProjects } from '../data/portfolio'
import { Link } from 'react-router-dom'

export default function CurrentlyBuilding() {
  const featured = getShippedProjects().slice(0, 3)

  return (
    <section className="section" id="currently-building">
      <div className="wrap">
        <div className="section-head">
          <Reveal><span className="eyebrow">Currently Building</span></Reveal>
          <Reveal delay={80}><h2>Active projects &amp; experiments</h2></Reveal>
          <Reveal delay={160}>
            <p>Building products, experimenting with AI, exploring modern software architecture and sharing what I learn.</p>
          </Reveal>
        </div>

        <div className="building-grid">
          <Reveal className="building-focus">
            <h3>What I'm focused on</h3>
            <ul className="building-list">
              {CURRENTLY_BUILDING.map((item, i) => (
                <li key={i}>
                  <span className="building-bullet" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="building-projects">
            {featured.map((project, i) => {
              const Icon = project.icon
              return (
                <Reveal key={project.slug} delay={i * 80}>
                  <Link to={`/projects/${project.slug}`} className="building-project-card">
                    <div className="building-project-icon"><Icon /></div>
                    <div>
                      <h4>{project.title}</h4>
                      <p>{project.desc.slice(0, 120)}…</p>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
