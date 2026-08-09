import Reveal from './Reveal'
import { SKILLS } from '../data/portfolio'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section-head">
          <Reveal><span className="eyebrow">Skills &amp; technologies</span></Reveal>
          <Reveal delay={80}><h2>Technologies I work with</h2></Reveal>
          <Reveal delay={160}>
            <p>The tools and technologies behind the projects above — focused on the modern web stack.</p>
          </Reveal>
        </div>
        <div className="skills-grid">
          {SKILLS.map((group) => (
            <Reveal key={group.group} className="skill-group">
              <h4>{group.group}</h4>
              <div className="skill-tags">
                {group.items.map((item) => <span className="skill-tag" key={item}>{item}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
