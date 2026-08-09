import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data/portfolio'

export default function Navbar({ activeSection, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [showCta, setShowCta] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      setShowCta(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`nav ${scrolled ? 'scrolled' : ''}`}
      >
        <div className="nav-inner">
          <a href="#home" className="brand" onClick={(e) => { e.preventDefault(); scrollTo('#home') }}>
            <img src="/faizyab-logo.png" alt="Faizyab Hussain" className="brand-logo" width="324" height="337" />
            <span className="brand-name">Faizyab Hussain</span>
          </a>

          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={activeSection === link.href.slice(1) ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav-right">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? <Sun className="icon" /> : <Moon className="icon" />}
            </button>
            {showCta && (
              <a href="#contact" className="btn btn-primary btn-sm" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}>
                Get a free demo
              </a>
            )}
            <button
              className="menu-btn"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X className="icon" /> : <Menu className="icon" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}>
          Get a free demo
        </a>
      </div>
    </>
  )
}
