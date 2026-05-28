import { useState, useEffect, useRef } from 'react'
import { ArrowUp, Check, X } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trust from './components/Trust'
import About from './components/About'
import Stats from './components/Stats'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Pricing from './components/Pricing'
import CurrentlyBuilding from './components/CurrentlyBuilding'
import Journey from './components/Journey'
import Vision from './components/Vision'
import Blog from './components/Blog'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'

export default function App() {
  const [activeSection, setActiveSection] = useState("home")
  const [isCmdPaletteOpen, setIsCmdPaletteOpen] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [activeCaseStudy, setActiveCaseStudy] = useState("devweavex")
  const [showScrollTop, setShowScrollTop] = useState(false)
  
  const cursorGlowRef = useRef(null)
  const canvasRef = useRef(null)

  // Cursor follow glow logic (only active on desktop hover)
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.left = `${e.clientX}px`
        cursorGlowRef.current.style.top = `${e.clientY}px`
        cursorGlowRef.current.style.opacity = 1
      }
    }
    const handleMouseLeave = () => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.opacity = 0
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Floating ambient dots canvas background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    let animationFrameId
    let particles = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    const particleCount = Math.min(Math.floor(window.innerWidth / 25), 50)
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        color: Math.random() > 0.45 ? "rgba(0, 126, 138, 0.12)" : "rgba(240, 165, 0, 0.08)",
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
        
        p.x += p.vx
        p.y += p.vy

        // Wrap around boundaries
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
      })
      animationFrameId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  // Active section scroll checking + scroll progress updates
  useEffect(() => {
    const sections = [
      "home", "about", "skills", "projects", "case-studies",
      "testimonials", "services", "pricing", "currently-building",
      "journey", "why-i-build", "blog", "faq", "contact"
    ]
    
    const handleScroll = () => {
      // Toggle back to top button visibility
      setShowScrollTop(window.scrollY > 500)

      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100
        const progressIndicator = document.getElementById("scroll-progress-indicator")
        if (progressIndicator) {
          progressIndicator.style.width = `${progress}%`
        }
      }

      // Highlight active navbar section
      let currentSection = "home"
      const scrollPos = window.scrollY + 200
      
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el && scrollPos >= el.offsetTop) {
          currentSection = section
        }
      }
      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Keyboard shortcut Ctrl+K / Cmd+K Spotlight Palette toggle
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        setIsCmdPaletteOpen((prev) => !prev)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Direct case-study detail selection from projects component
  const handleSelectCaseStudy = (projectId) => {
    setActiveCaseStudy(projectId)
    const element = document.getElementById("case-studies")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative min-h-screen text-slate-200 font-sans overflow-x-hidden">
      
      {/* Background canvas effects */}
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-3]"
      />
      <div className="noise-overlay" />
      <div className="mesh-bg" />
      <div className="grid-overlay" />

      {/* Scroll progress bar indicator */}
      <div id="scroll-progress-indicator" style={{ width: '0%' }} />

      {/* Desktop hover cursor glow tracker */}
      <div 
        ref={cursorGlowRef}
        className="fixed pointer-events-none z-[-2] w-[350px] h-[350px] rounded-full opacity-0 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 hidden md:block"
        style={{
          background: "radial-gradient(circle, rgba(0, 126, 138, 0.08) 0%, rgba(240, 165, 0, 0.02) 40%, transparent 70%)"
        }}
      />

      {/* 1. Navbar */}
      <Navbar activeSection={activeSection} />

      <main className="relative z-10">
        
        {/* 2. Hero Section */}
        <Hero onSelectCaseStudy={handleSelectCaseStudy} />
        
        {/* 3. Trust / Credibility Section */}
        <Trust />
        
        {/* 4. About Section */}
        <About />
        
        {/* 5. Social Proof / Stats Section */}
        <Stats />
        
        {/* 6. Skills Section */}
        <Skills />
        
        {/* 7. Featured Projects Section */}
        <Projects onSelectCaseStudy={handleSelectCaseStudy} />
        
        {/* 8. Case Studies Section */}
        <CaseStudies activeCaseStudy={activeCaseStudy} setActiveCaseStudy={setActiveCaseStudy} />
        
        {/* 9. Testimonials Section */}
        <Testimonials />
        
        {/* 10. Services Section */}
        <Services />
        
        {/* 11. Pricing Section */}
        <Pricing />
        
        {/* 12. Currently Building Section */}
        <CurrentlyBuilding />
        
        {/* 13. Experience / Journey Section */}
        <Journey />
        
        {/* 14. Why I Build / Vision Section */}
        <Vision />
        
        {/* 15. Blog Section */}
        <Blog />
        
        {/* 16. FAQ Section */}
        <FAQ />
        
        {/* 17. Contact Section */}
        <Contact onShowSuccessModal={() => setIsSuccessModalOpen(true)} />

      </main>

      {/* 18. Footer Section */}
      <Footer />

      {/* Command Spotlight Menu Modal */}
      <CommandPalette 
        isOpen={isCmdPaletteOpen} 
        onClose={() => setIsCmdPaletteOpen(false)} 
      />

      {/* Floating Back to Top Anchor */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-6 z-40 w-11 h-11 rounded-xl bg-slate-dark/95 border border-white/5 hover:border-teal/30 text-slate-400 hover:text-teal-light flex items-center justify-center transition-all duration-300 shadow-2xl backdrop-blur ${
          showScrollTop ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-3 invisible'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Contact Success Overlay Modal */}
      {isSuccessModalOpen && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setIsSuccessModalOpen(false)}
        >
          <div 
            className="w-full max-w-sm glass-card rounded-3xl p-8 text-center border border-white/10 bg-slate-dark shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsSuccessModalOpen(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-250 p-1.5 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="w-14 h-14 rounded-full bg-teal/10 border-2 border-teal/30 flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Check className="w-7 h-7 text-teal-light" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">Message Dispatched!</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Thank you for reaching out. Your message has been routed successfully. Faizyab will review your request and reply within 24 hours.
            </p>
            
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="btn-premium-teal w-full py-3 rounded-xl text-sm font-semibold shadow-lg"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

    </div>
  )
}
