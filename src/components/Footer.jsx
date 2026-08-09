import { Github, Linkedin, Instagram, Twitter } from 'lucide-react'
import { NAV_LINKS, SITE } from '../data/portfolio'

const SOCIALS = [
  { icon: Github, label: 'GitHub', href: SITE.github },
  { icon: Linkedin, label: 'LinkedIn', href: SITE.linkedin },
  { icon: Instagram, label: 'Instagram', href: SITE.instagram },
  { icon: Twitter, label: 'X / Twitter', href: SITE.x },
]

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div>
            <a href="#home" className="brand">
              <img src="/faizyab-logo.png" alt="Faizyab Hussain" className="brand-logo" width="324" height="337" />
              <span className="brand-name">Faizyab Hussain</span>
            </a>
            <p>Modern websites and digital solutions for local businesses.</p>
          </div>
          <div className="footer-col">
            <h5>Navigate</h5>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </div>
          <div className="footer-col">
            <h5>Connect</h5>
            <a href={SITE.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={SITE.x} target="_blank" rel="noopener noreferrer">X / Twitter</a>
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
