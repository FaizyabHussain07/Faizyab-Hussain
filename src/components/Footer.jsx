import { Link } from 'react-router-dom'
import { NAV_LINKS, SITE } from '../data/portfolio'
import { Github, Linkedin, Twitter } from 'lucide-react'

const SOCIALS = [
  { icon: Github, label: 'GitHub', href: SITE.github },
  { icon: Linkedin, label: 'LinkedIn', href: SITE.linkedin },
  { icon: Twitter, label: 'X / Twitter', href: SITE.x },
]

const SERVICES_LINKS = [
  { label: 'AI Development', href: '/ai-development' },
  { label: 'Full-Stack Development', href: '/full-stack-development' },
  { label: 'Web Development', href: '/web-development' },
  { label: 'SaaS Development', href: '/services' },
  { label: 'Business Systems', href: '/services' },
]

const PROJECT_LINKS = [
  { label: 'All Projects', href: '/projects' },
  { label: 'DevPass', href: '/projects/devpass' },
  { label: 'PromptAudit', href: '/projects/promptaudit' },
  { label: 'ClinicFlow', href: '/projects/clinicflow' },
]

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top footer-top-4">
          <div>
            <Link to="/" className="brand">
              <img src="/faizyab-logo.png" alt="Faizyab Hussain" className="brand-logo" width="324" height="337" />
              <span className="brand-name">Faizyab Hussain</span>
            </Link>
            <p className="footer-tagline">Full-Stack Developer · AI Engineer · AI Product Builder</p>
            <p className="footer-desc">Building websites, web apps, SaaS products and AI-powered systems.</p>
          </div>
          <div className="footer-col">
            <h5>Navigate</h5>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} to={link.href}>{link.label}</Link>
            ))}
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            {SERVICES_LINKS.map((link) => (
              <Link key={link.href + link.label} to={link.href}>{link.label}</Link>
            ))}
          </div>
          <div className="footer-col">
            <h5>Connect</h5>
            {SOCIALS.map((social) => {
              const Icon = social.icon
              return (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                  <Icon style={{ width: 14, height: 14, display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
                  {social.label}
                </a>
              )
            })}
            <a href={`mailto:${SITE.email}`}>Email</a>
            <a href={SITE.resume} target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Faizyab Hussain. All rights reserved.</p>
          <div className="footer-social">
            {SOCIALS.map((social) => {
              const Icon = social.icon
              return (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
