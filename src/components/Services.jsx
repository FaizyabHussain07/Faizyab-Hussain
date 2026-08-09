import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { SERVICES } from '../data/portfolio'

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section-head">
          <Reveal><span className="eyebrow">Services</span></Reveal>
          <Reveal delay={80}><h2>Everything your business needs online</h2></Reveal>
          <Reveal delay={160}>
            <p>From a professional website to custom digital tools, I build practical solutions around your business and customers.</p>
          </Reveal>
        </div>
        <div className="services-grid">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} className="service-card" delay={(i % 3) * 80}>
                <div className="service-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="service-icon"><Icon /></div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <span className="service-arrow"><ArrowUpRight size={15} /></span>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
