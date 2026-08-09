import Reveal from './Reveal'

export default function Hero() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <header className="hero" id="home">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <Reveal><span className="eyebrow">Faizyab Hussain — Web Developer</span></Reveal>
          <Reveal delay={80}>
            <h1>Modern websites<br />for local businesses.</h1>
          </Reveal>
          <Reveal delay={160}>
            <p>I design and build modern, responsive websites and digital experiences for businesses and local businesses — from restaurant and clinic sites to custom web applications.</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-ghost" onClick={(e) => { e.preventDefault(); scrollTo('#projects') }}>
                View my work
              </a>
              <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}>
                Get a free demo
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="availability">
              <span className="pulse-dot" />
              Available for freelance &amp; remote projects
            </div>
          </Reveal>
        </div>

        {/* Right-side visual — modern business website / CRM interface preview */}
        <Reveal delay={200} className="hero-visual">
          <img
            src="/images/hero.jpg"
            alt="Modern business website interface with booking and lead panel — concept by Faizyab Hussain"
            width="1024"
            height="1024"
          />
        </Reveal>
      </div>
    </header>
  )
}
