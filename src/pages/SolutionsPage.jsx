import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'
import { SOLUTIONS } from '../data/portfolio'
import { ArrowUpRight } from 'lucide-react'

export default function SolutionsPage() {
  return (
    <>
      <SEO
        title="Solutions"
        description="Digital solutions for businesses — AI products, SaaS development, business websites, business systems, AI integrations and web applications. By Faizyab Hussain."
      />

      <section className="page-hero">
        <div className="wrap">
          <Reveal><span className="eyebrow">Solutions</span></Reveal>
          <Reveal delay={80}><h1 className="page-title">Solutions</h1></Reveal>
          <Reveal delay={120}>
            <p className="page-subtitle">Tailored digital solutions for different business needs — from AI-powered products to modern business websites.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="solutions-grid">
            {SOLUTIONS.map((solution, i) => {
              const Icon = solution.icon
              return (
                <Reveal key={solution.slug} delay={(i % 3) * 80}>
                  <Link to={`/solutions/${solution.slug}`} className="solution-card">
                    <div className="solution-card-icon"><Icon /></div>
                    <h2>{solution.title}</h2>
                    <p>{solution.shortDesc}</p>
                    <span className="project-link">Learn more <ArrowUpRight size={14} /></span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
