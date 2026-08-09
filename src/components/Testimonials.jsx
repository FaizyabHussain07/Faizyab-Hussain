import { Quote } from 'lucide-react'
import Reveal from './Reveal'
import { TESTIMONIALS } from '../data/portfolio'

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="wrap">
        <div className="section-head">
          <Reveal><span className="eyebrow">Testimonials</span></Reveal>
          <Reveal delay={80}><h2>What people say about working with me</h2></Reveal>
          <Reveal delay={160}>
            <p>From business owners and teams I've built websites and digital projects for.</p>
          </Reveal>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} className="testimonial-card" delay={(i % 3) * 80}>
              <Quote size={22} className="testimonial-quote" />
              <p className="testimonial-text">“{t.quote}”</p>
              <footer className="testimonial-person">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
