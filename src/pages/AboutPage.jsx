import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'
import { SITE } from '../data/portfolio'

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Faizyab Hussain"
        description="Full-Stack Developer, AI Engineer and AI Product Builder based in Karachi, Pakistan."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          mainEntity: {
            '@type': 'Person',
            name: SITE.name,
            jobTitle: 'Full-Stack Developer, AI Engineer, AI Product Builder',
            url: SITE.url,
            description: SITE.description,
            homeLocation: { '@type': 'Place', name: SITE.location },
          },
        }}
      />

      <section className="page-hero">
        <div className="wrap">
          <Reveal><span className="eyebrow">About</span></Reveal>
          <Reveal delay={80}><h1 className="page-title">About Me</h1></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap about-page-grid">

          <Reveal className="about-photo about-photo-large">
            <img
              src={SITE.portrait}
              alt="Portrait of Faizyab Hussain"
              loading="lazy"
              width="1024"
              height="1024"
            />
          </Reveal>

          <div className="about-page-content">

            <Reveal delay={80}>
              <h2 className="about-name">Faizyab Hussain</h2>
              <p className="about-role">Full-Stack Developer · AI Engineer · AI Product Builder</p>
              <p className="about-location">Karachi, Pakistan</p>
            </Reveal>

            <Reveal delay={120}>
              <p className="about-bio">
                Hi, I'm Faizyab Hussain, a <strong>full-stack developer</strong> and <strong>AI product builder</strong> based in Karachi, Pakistan. I turn ideas into working products: <strong>web applications</strong>, <strong>SaaS tools</strong>, <strong>AI-powered systems</strong>, and <strong>custom business solutions</strong>.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="about-bio">
                I handle the full stack — <strong>frontend</strong>, <strong>backend</strong>, <strong>APIs</strong>, <strong>databases</strong>, and <strong>deployment</strong> — using modern tools like JavaScript, TypeScript, React, Next.js, Node.js, and contemporary databases. My focus is on building <strong>clean</strong>, <strong>responsive</strong>, and <strong>maintainable</strong> products that actually solve real problems.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="about-bio">
                Recent work includes shipped products such as <strong>DevPass</strong>, <strong>PasteLink Pro</strong>, <strong>PromptAudit</strong>, and <strong>ClinicFlow</strong>, along with concept websites and digital solutions for restaurants, clinics, gyms, law firms, real estate, and other local businesses.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <p className="about-bio">
                I'm currently focused on <strong>AI</strong>, <strong>software engineering</strong>, and <strong>scalable systems</strong>, helping startups and businesses move from concept to production with practical, high-quality digital products.
              </p>
            </Reveal>

            <Reveal delay={280}>
              <h2>Let's Connect</h2>
              <div className="about-links" style={{ marginTop: 20 }}>
                <Link to="/contact" className="btn btn-primary btn-sm">Get in touch</Link>
                <a href={SITE.resume} className="btn btn-ghost btn-sm" target="_blank" rel="noopener noreferrer">Resume</a>
                <a href={SITE.github} className="btn btn-ghost btn-sm" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={SITE.linkedin} className="btn btn-ghost btn-sm" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </>
  )
}
