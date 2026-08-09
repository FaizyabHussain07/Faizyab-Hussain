import Reveal from './Reveal'

export default function CTA() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="final-cta">
          <span className="eyebrow" style={{ color: 'var(--accent)' }}>Let's talk</span>
          <h2 style={{ marginTop: 14 }}>Have a business that needs a better website?</h2>
          <p>Let's build a modern online presence that makes your business look professional and makes it easier for customers to take the next step.</p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}>
              Get a free demo
            </a>
            <a href="#projects" className="btn btn-ghost" onClick={(e) => { e.preventDefault(); scrollTo('#projects') }}>
              View my work
            </a>
          </div>
          <small>No pressure. Just a conversation about your idea.</small>
        </Reveal>
      </div>
    </section>
  )
}
