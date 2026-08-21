import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { SITE } from '../data/portfolio'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <Reveal className="about-photo">
          <img
            src={SITE.portrait}
            alt="Portrait of Faizyab Hussain — Full-Stack Developer and AI Engineer"
            loading="lazy"
            width="1024"
            height="1024"
          />
        </Reveal>
        <div className="about-copy">
          <Reveal><span className="eyebrow">About</span></Reveal>
          <Reveal delay={80}><h2>Faizyab Hussain</h2></Reveal>
          <Reveal delay={120}>
            <p className="about-role">Full-Stack Developer · AI Engineer · AI Product Builder</p>
          </Reveal>
          <Reveal delay={160}>
            <p>Developer based in Karachi, Pakistan. I build web applications, SaaS products, AI-powered tools and business systems.</p>
          </Reveal>
          <Reveal delay={200}>
            <p>I take ideas from concept to working product — frontend, backend, APIs, databases, deployment. Currently focused on AI, software engineering and scalable systems.</p>
          </Reveal>
          <Reveal delay={240}>
            <p>Recent work includes DevPass, PasteLink Pro, PromptAudit and business website concepts for restaurants, clinics and professional services.</p>
          </Reveal>
          <Reveal delay={320}>
            <div className="about-links">
              <Link to="/about" className="btn btn-ghost btn-sm">Learn more</Link>
              <a href={SITE.resume} className="btn btn-ghost btn-sm" target="_blank" rel="noopener noreferrer">View resume</a>
              <a href={SITE.github} className="btn btn-ghost btn-sm" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
