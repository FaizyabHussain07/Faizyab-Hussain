import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'
import { SITE, getShippedProjects } from '../data/portfolio'
import { ArrowUpRight } from 'lucide-react'

export default function AIDevelopment() {
  const aiProjects = getShippedProjects().filter((p) =>
    p.tech.some((t) => t.toLowerCase().includes('ai'))
  )

  return (
    <>
      <SEO
        title="AI Development"
        description="AI Product Development and AI-Powered Web Applications — building AI integrations, LLM-powered applications, AI automation and AI SaaS products. By Faizyab Hussain."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI Product Development',
          description: 'AI-powered applications, LLM integrations, AI automation and AI SaaS products.',
          provider: { '@type': 'Person', name: SITE.name, url: SITE.url },
          areaServed: 'Worldwide',
        }}
      />

      <section className="page-hero">
        <div className="wrap">
          <Reveal><span className="eyebrow">AI Development</span></Reveal>
          <Reveal delay={80}><h1 className="page-title">AI Product Development &amp; AI-Powered Web Applications</h1></Reveal>
          <Reveal delay={120}>
            <p className="page-subtitle">Building AI-powered products, intelligent integrations and practical AI workflows that solve real business problems.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap page-content">
          <Reveal>
            <h2>What I Do</h2>
            <p>I build AI-powered products and integrations for businesses. From chatbots and content tools to automated workflows and data processing — AI features that actually help.</p>
          </Reveal>

          <Reveal delay={80}>
            <h2>What I Build</h2>
            <div className="page-feature-grid">
              <div className="page-feature">
                <h3>AI-Powered SaaS Products</h3>
                <p>Complete SaaS products with AI at their core — from intelligent content generation to automated data processing and smart user experiences.</p>
              </div>
              <div className="page-feature">
                <h3>LLM-Powered Applications</h3>
                <p>Applications built around large language models — chatbots, content tools, analysis systems and prompt-based workflows that leverage the latest AI capabilities.</p>
              </div>
              <div className="page-feature">
                <h3>AI Automation</h3>
                <p>Automated workflows powered by AI — from data entry and content moderation to customer support triage and intelligent routing systems.</p>
              </div>
              <div className="page-feature">
                <h3>AI Features for Existing Products</h3>
                <p>Add practical AI capabilities to your existing applications — smart search, content generation, recommendation systems and automated analysis.</p>
              </div>
              <div className="page-feature">
                <h3>AI Workflows</h3>
                <p>Workflows that use AI to process and act on data — reducing manual work and saving time.</p>
              </div>
              <div className="page-feature">
                <h3>Prompt Engineering</h3>
                <p>Writing prompts and AI pipelines that produce consistent results for your specific use case.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <h2>Technologies</h2>
            <p>AI APIs · LLM Integrations · Prompt Engineering · React · Next.js · Node.js · Python · REST APIs</p>
          </Reveal>

          {aiProjects.length > 0 && (
            <Reveal delay={200}>
              <h2>AI Projects</h2>
              <div className="page-project-links">
                {aiProjects.map((p) => (
                  <Link key={p.slug} to={`/projects/${p.slug}`} className="page-project-link">
                    <h3>{p.title}</h3>
                    <p>{p.desc.slice(0, 120)}…</p>
                    <span className="project-link">View case study <ArrowUpRight size={14} /></span>
                  </Link>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="section section-tinted">
        <div className="wrap">
          <Reveal className="final-cta">
            <span className="eyebrow" style={{ color: 'var(--accent)' }}>Let's build with AI</span>
            <h2 style={{ marginTop: 14 }}>Have an AI project in mind?</h2>
            <p>Whether you need a standalone AI product or want to add AI features to your existing application, let's talk.</p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">Start a conversation</Link>
              <Link to="/projects" className="btn btn-ghost">View projects</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
