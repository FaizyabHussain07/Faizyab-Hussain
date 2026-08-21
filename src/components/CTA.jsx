import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function CTA() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="final-cta">
          <span className="eyebrow" style={{ color: 'var(--accent)' }}>Let's Build Together</span>
          <h2 style={{ marginTop: 14 }}>Have an Idea or Product to Build?</h2>
          <p>Startup, SaaS, business system, AI project — let's talk.</p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-primary">
              Start a Conversation
            </Link>
            <Link to="/projects" className="btn btn-ghost">
              View My Work
            </Link>
          </div>
          <small>No pressure. Just a conversation about your idea.</small>
        </Reveal>
      </div>
    </section>
  )
}
