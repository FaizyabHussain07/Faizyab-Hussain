import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'
import { SERVICES, SITE } from '../data/portfolio'
import { ArrowUpRight } from 'lucide-react'

const SERVICE_DETAILS = {
  'AI Product Development': {
    fullDesc: 'I build AI-powered applications, SaaS products and intelligent workflows from concept to deployment. Whether you need a standalone AI product or AI features integrated into an existing system, I handle the full development lifecycle — from data pipeline design to frontend interfaces and API architecture.',
    for: 'Founders building AI products, SaaS companies adding AI features, businesses looking to automate with AI.',
    whatToExpect: 'A production-ready AI application built with modern frameworks, designed for real users and real data.',
    link: '/ai-development',
  },
  'Full-Stack Web Development': {
    fullDesc: 'Complete web applications built with modern frameworks — from frontend interfaces to backend APIs, databases, authentication and deployment. Every application is production-ready, tested and built with scalability in mind.',
    for: 'Businesses needing custom web applications, startups building their first product, teams needing internal tools.',
    whatToExpect: 'A complete application with frontend, backend, database, authentication and deployment — ready for users.',
    link: '/full-stack-development',
  },
  'SaaS Development': {
    fullDesc: 'End-to-end SaaS product development — from initial concept and MVP to a production-ready application with authentication, billing, dashboards and analytics. Built with modern, scalable architectures that grow with your product.',
    for: 'SaaS founders, startups with a product idea, businesses transitioning to subscription models.',
    whatToExpect: 'A complete SaaS product with the core features needed to launch and start acquiring users.',
  },
  'AI Integration': {
    fullDesc: 'Enhance existing products with practical AI capabilities — from LLM-powered content generation to intelligent data processing and automated workflows. I focus on AI features that deliver genuine value, not just novelty.',
    for: 'Existing products that could benefit from AI, businesses with data processing needs, teams wanting to automate workflows.',
    whatToExpect: 'Practical AI features that improve your product and save your users time.',
    link: '/ai-development',
  },
  'Business Systems': {
    fullDesc: 'When off-the-shelf software doesn\'t fit, I build custom business systems — CRM-style tools, booking platforms, internal dashboards and workflow applications tailored to your exact requirements.',
    for: 'Businesses with unique workflows, clinics needing patient management, teams needing internal tools.',
    whatToExpect: 'A custom-built system designed around your actual workflow, not forced into a generic template.',
  },
  'Modern Website Development': {
    fullDesc: 'Professional, responsive websites built for conversion. Whether you need a corporate site, a local business presence or a brand showcase — every site is fast, mobile-first and designed to turn visitors into customers.',
    for: 'Businesses, startups, local brands, companies needing a professional web presence.',
    whatToExpect: 'A fast, responsive, conversion-focused website that represents your brand professionally.',
    link: '/web-development',
  },
  'Website Redesign': {
    fullDesc: 'Modernize outdated websites with better UX, responsive design, performance and modern frameworks. I keep what works, rebuild what doesn\'t and ensure the result is faster, more professional and easier to maintain.',
    for: 'Businesses with outdated websites, companies that have outgrown their current design, brands needing a refresh.',
    whatToExpect: 'A modern, responsive redesign that improves user experience and performance while maintaining your brand.',
  },
  'Landing Pages': {
    fullDesc: 'High-quality landing pages for products, startups, campaigns and businesses. Focused on conversion, with clear messaging, strong CTAs and responsive design that works on every device.',
    for: 'Product launches, marketing campaigns, startup MVPs, service promotion.',
    whatToExpect: 'A focused, high-converting landing page built and deployed quickly.',
  },
}

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services"
        description="Full-Stack Development, AI Engineering, SaaS Development, Business Systems and Modern Website Development — services offered by Faizyab Hussain."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Full-Stack & AI Development Services',
          description: 'Full-stack web development, AI product development, SaaS development, business systems and modern website development.',
          provider: {
            '@type': 'Person',
            name: SITE.name,
            jobTitle: 'Full-Stack Developer, AI Engineer, AI Product Builder',
            url: SITE.url,
          },
          areaServed: 'Worldwide',
        }}
      />

      <section className="page-hero">
        <div className="wrap">
          <Reveal><span className="eyebrow">Services</span></Reveal>
          <Reveal delay={80}><h1 className="page-title">What I can build for you</h1></Reveal>
          <Reveal delay={120}>
            <p className="page-subtitle">AI products, full-stack apps, SaaS, business systems, websites.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="services-detail-grid">
            {SERVICES.map((service, i) => {
              const Icon = service.icon
              const details = SERVICE_DETAILS[service.title] || {}
              return (
                <Reveal key={service.title} className="service-detail-card" delay={(i % 2) * 80}>
                  <div className="service-detail-header">
                    <div className="service-icon"><Icon /></div>
                    <h2>{service.title}</h2>
                  </div>
                  <p className="service-detail-desc">{details.fullDesc || service.desc}</p>
                  {details.for && (
                    <div className="service-detail-meta">
                      <h4>Who it's for</h4>
                      <p>{details.for}</p>
                    </div>
                  )}
                  {details.whatToExpect && (
                    <div className="service-detail-meta">
                      <h4>What to expect</h4>
                      <p>{details.whatToExpect}</p>
                    </div>
                  )}
                  {details.link && (
                    <Link to={details.link} className="project-link" style={{ marginTop: 12 }}>
                      Learn more <ArrowUpRight size={14} />
                    </Link>
                  )}
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="wrap">
          <Reveal className="final-cta">
            <span className="eyebrow" style={{ color: 'var(--accent)' }}>Ready to start?</span>
            <h2 style={{ marginTop: 14 }}>Have a project in mind?</h2>
            <p>Tell me about what you're building. I'll get back to you with how I can help.</p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">Start a conversation</Link>
              <Link to="/projects" className="btn btn-ghost">View my work</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
