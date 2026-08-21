import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { SERVICES } from '../data/portfolio'

export default function Services() {
  return (
    <section className="section section-tinted" id="services">
      <div className="wrap">
        <div className="section-head">
          <Reveal><span className="eyebrow">Services</span></Reveal>
          <Reveal delay={80}><h2>What I can build for you</h2></Reveal>
          <Reveal delay={160}>
            <p>AI products, full-stack apps, SaaS, business systems, websites — I build what you need.</p>
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
        <Reveal delay={200}>
          <div className="section-cta">
            <Link to="/services" className="btn btn-ghost">
              View all services <ArrowUpRight size={15} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
