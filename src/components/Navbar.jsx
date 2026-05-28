import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileMenuOpen(false)
    const targetElement = document.querySelector(href)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-[#07080c]/75 backdrop-blur-xl border-b border-white/[0.04] shadow-lg shadow-black/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="flex items-center shrink-0 group"
          >
            <img 
              src="/faizyab-logo.png" 
              alt="Faizyab Hussain"
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-xl bg-white/[0.04] border border-white/[0.06]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              )
            })}
          </div>

          {/* Right side - Mobile menu button only */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.04] transition-all duration-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-16 z-40 bg-[#07080c]/90 backdrop-blur-2xl border-b border-white/[0.04] shadow-2xl"
          >
            <div className="px-6 py-4 flex flex-col gap-1 max-w-7xl mx-auto">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                      isActive 
                        ? 'text-white bg-white/[0.04] border-l-2 border-teal' 
                        : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
                    }`}
                  >
                    {link.label}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
