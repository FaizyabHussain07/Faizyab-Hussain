import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trust from './components/Trust'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import TechProjects from './components/TechProjects'
import Skills from './components/Skills'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useTheme from './hooks/useTheme'

const SECTIONS = ['home', 'about', 'services', 'projects', 'skills', 'process', 'testimonials', 'contact']

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('home')
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500)

      let current = 'home'
      const pos = window.scrollY + 220
      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (el && pos >= el.offsetTop) current = id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <Navbar activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <Trust />
        <About />
        <Services />
        <Projects />
        <TechProjects />
        <Skills />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>

      <Footer />

      <button
        className={`back-top ${showTop ? 'show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <ArrowUp />
      </button>
    </div>
  )
}
