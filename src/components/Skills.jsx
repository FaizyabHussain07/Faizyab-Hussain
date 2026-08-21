import Reveal from './Reveal'
import { TECH_STACK } from '../data/portfolio'

export default function Skills() {
  const groups = [
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'database', label: 'Database' },
    { key: 'ai', label: 'AI' },
    { key: 'tools', label: 'Tools & Deployment' },
  ]

  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section-head">
          <Reveal><span className="eyebrow">Tech Stack</span></Reveal>
          <Reveal delay={80}><h2>Technologies I work with</h2></Reveal>
          <Reveal delay={160}>
            <p>The modern stack behind the products above — frontend frameworks, backend runtimes, databases, AI APIs and deployment tools.</p>
          </Reveal>
        </div>
        <div className="skills-grid skills-grid-5">
          {groups.map((group) => (
            <Reveal key={group.key} className="skill-group">
              <h4>{group.label}</h4>
              <div className="skill-tags">
                {TECH_STACK[group.key].map((item) => <span className="skill-tag" key={item}>{item}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
