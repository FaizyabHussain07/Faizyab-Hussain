import SEO from '../components/SEO'
import Projects from '../components/Projects'

export default function ProjectsPage() {
  return (
    <>
      <SEO
        title="Projects & Case Studies"
        description="Projects and case studies by Faizyab Hussain — from AI-powered SaaS products and full-stack web applications to business systems and modern website concepts."
      />
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Work</span>
          <h1 className="page-title">Selected Work</h1>
          <p className="page-subtitle">From AI products and SaaS platforms to business systems and modern web experiences.</p>
        </div>
      </section>
      <Projects showAll={true} />
    </>
  )
}
