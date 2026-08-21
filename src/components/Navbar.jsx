import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data/portfolio'

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [showCta, setShowCta] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      setShowCta(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`nav ${scrolled ? 'scrolled' : ''}`}
      >
        <div className="nav-inner">
          <Link to="/" className="brand">
            <img src="/faizyab-logo.png" alt="Faizyab Hussain" className="brand-logo" width="324" height="337" />
            <span className="brand-name">Faizyab Hussain</span>
          </Link>

          <div className="nav-links">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={isActive ? 'active' : ''}
                >
                  {link.label}
                </Link>
              )
            })}
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
              <Link to="/contact" className="btn btn-primary btn-sm">
                Let's Build
              </Link>
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
          <Link key={link.href} to={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link to="/contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
          Let's Build
        </Link>
      </div>
    </>
  )
}
