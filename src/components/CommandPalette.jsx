import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Home, User, Layers, Cpu, CreditCard, Mail, BookOpen, FileText, HelpCircle, Sparkles, Clock, Compass } from 'lucide-react'

const MENU_ITEMS = [
  { name: "Home Dashboard", icon: Home, href: "#home", desc: "Jump to name, hero visual, and stats strip" },
  { name: "About Builder", icon: User, href: "#about", desc: "Read developer background and biography details" },
  { name: "Skills & Tech Stack", icon: Layers, href: "#skills", desc: "View Frontend, Backend, AI & Automation skill blocks" },
  { name: "Featured Projects", icon: Cpu, href: "#projects", desc: "Review DevWeaveX, PasteLink Pro, and other platforms" },
  { name: "Selected Case Studies", icon: Sparkles, href: "#case-studies", desc: "Analyze database indexing, encryption, and AI parsers" },
  { name: "Client Testimonials", icon: Compass, href: "#testimonials", desc: "Read feedback from founders, engineers, and PMs" },
  { name: "Services Catalog", icon: Search, href: "#services", desc: "Check SaaS, MVP, and AI-powered app services" },
  { name: "Pricing Packages", icon: CreditCard, href: "#pricing", desc: "Review transparent project tiers starting at $499" },
  { name: "Active Development Lab", icon: Clock, href: "#currently-building", desc: "Check current live compilations and git commits" },
  { name: "Experience Timeline", icon: FileText, href: "#journey", desc: "Track SMIT certification and corporate tech internships" },
  { name: "Why I Build Vision", icon: User, href: "#why-i-build", desc: "Read the AI, SaaS, and product engineering manifesto" },
  { name: "Technical Blog Articles", icon: BookOpen, href: "#blog", desc: "Read optimization and structured prompting guides" },
  { name: "Frequently Asked Questions", icon: HelpCircle, href: "#faq", desc: "Find answers on rates, time zones, and API stacks" },
  { name: "Initiate Contact", icon: Mail, href: "#contact", desc: "Send an AJAX project inquiry via FormSubmit" },
  { name: "Download Resume PDF", icon: FileText, href: "/Resume_Faizyab_Hussain.pdf", target: "_blank", desc: "Open resume PDF directly in a new tab" }
]

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState("")
  const inputRef = useRef(null)

  const filteredItems = MENU_ITEMS.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.desc.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // reinforcing Escape keypress
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  const handleItemClick = (href, target) => {
    onClose()
    if (target === "_blank") {
      window.open(href, "_blank")
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-full max-w-lg overflow-hidden border glass-card border-white/10 rounded-3xl shadow-2xl bg-[#0f111a]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input bar */}
            <div className="flex items-center gap-3.5 px-6 py-5 border-b border-white/5 bg-[#131622]/60">
              <Search className="w-5 h-5 text-teal" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search shortcuts, sections, and utilities..."
                className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 outline-none border-none"
              />
              <kbd className="text-[10px] text-slate-500 font-mono border border-white/10 px-2 py-0.5 rounded-lg bg-[#07080c]">
                ESC
              </kbd>
            </div>

            {/* List panel */}
            <div className="p-3 max-h-[320px] overflow-y-auto space-y-1 scrollbar-thin">
              {filteredItems.map((item, idx) => {
                const Icon = item.icon
                return (
                  <button
                    key={idx}
                    onClick={() => handleItemClick(item.href, item.target)}
                    className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-left hover:bg-white/[0.04] transition-all group focus:bg-white/[0.04] focus:outline-none"
                  >
                    <div className="w-8.5 h-8.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-teal/10 group-hover:border-teal/20 transition-all duration-200">
                      <Icon className="w-4.5 h-4.5 text-teal-light" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-slate-205 group-hover:text-white transition-colors leading-none">
                        {item.name}
                      </p>
                      <p className="text-[10px] text-slate-500 truncate mt-1.5 font-medium leading-none">
                        {item.desc}
                      </p>
                    </div>
                  </button>
                )
              })}

              {filteredItems.length === 0 && (
                <div className="py-12 text-center text-xs text-slate-500 font-medium">
                  No matching shortcuts compiled in the directory.
                </div>
              )}
            </div>

            {/* Helper footer */}
            <div className="px-6 py-3 bg-[#07080c] border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-slate-600 font-bold uppercase tracking-wider">
              <span>Scroll to navigate shortcuts list</span>
              <span>Core Spotlight Menu</span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
