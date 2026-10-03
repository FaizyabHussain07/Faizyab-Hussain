import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { HERO_TECH_STRIP, SITE } from '../data/portfolio'

export default function Hero() {
  return (
    <header className="hero" id="home">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <Reveal><span className="eyebrow">Full-Stack Developer · AI Engineer · AI Product Builder</span></Reveal>
          <Reveal delay={80}>
            <h1>
              Faizyab Hussain: Full-Stack Developer &amp; AI Product Builder
              <span className="hero-h1-line">Building Scalable Web, SaaS & AI Products for Modern Businesses.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p>I build websites, web apps, SaaS products and AI-powered systems for businesses and founders.</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero-cta">
              <Link to="/projects" className="btn btn-ghost">
                View My Work
              </Link>
              <a href={SITE.resume} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
              <Link to="/contact" className="btn btn-primary">
                Let's Build Something
              </Link>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="availability">
              <span className="pulse-dot" />
              Available for freelance, remote &amp; product opportunities
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="hero-tech-strip">
              {HERO_TECH_STRIP.map((tech) => (
                <span key={tech} className="hero-tech-tag">{tech}</span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="hero-visual">
          <img
            src="/images/hero.jpg"
            alt="Modern web application interface — dashboard and AI system concept by Faizyab Hussain"
            width="1024"
            height="1024"
          />
        </Reveal>
      </div>
    </header>
  )
}
