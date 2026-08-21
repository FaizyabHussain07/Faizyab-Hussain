import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'
import { INDUSTRIES, SITE } from '../data/portfolio'

export default function IndustriesPage() {
  return (
    <>
      <SEO
        title="Industries"
        description="Digital solutions for startups, SaaS companies, local businesses, restaurants, clinics, real estate, professional services and agencies — by Faizyab Hussain."
      />

      <section className="page-hero">
        <div className="wrap">
          <Reveal><span className="eyebrow">Industries</span></Reveal>
          <Reveal delay={80}><h1 className="page-title">Industries I build for</h1></Reveal>
          <Reveal delay={120}>
            <p className="page-subtitle">Digital solutions tailored to the unique needs of different businesses and sectors.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="industries-grid">
            {INDUSTRIES.map((industry, i) => {
              const Icon = industry.icon
              return (
                <Reveal key={industry.title} className="industry-card" delay={(i % 3) * 80}>
                  <div className="industry-icon"><Icon /></div>
                  <h3>{industry.title}</h3>
                  <p>{industry.desc}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="wrap">
          <Reveal className="final-cta">
            <span className="eyebrow" style={{ color: 'var(--accent)' }}>Your Industry</span>
            <h2 style={{ marginTop: 14 }}>Don't see your industry?</h2>
            <p>I build digital solutions for any business that needs a modern web presence, custom application or AI-powered tool. Let's talk about your specific needs.</p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">Get in touch</Link>
              <Link to="/services" className="btn btn-ghost">View services</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
