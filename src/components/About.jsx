import { motion } from 'framer-motion'
import { MapPin, Globe, Cpu, Layers, Rocket, Code2, ArrowRight } from 'lucide-react'

const INFO_CARDS = [
  { icon: <MapPin className="w-4 h-4 text-teal-light" />, text: 'Based in Pakistan', sub: 'Karachi timezone' },
  { icon: <Globe className="w-4 h-4 text-[#38bdf8]" />, text: 'Global Collaboration', sub: '100% remote-ready' },
  { icon: <Cpu className="w-4 h-4 text-gold" />, text: 'AI Enthusiast', sub: 'GPT, Claude & workflows' },
  { icon: <Layers className="w-4 h-4 text-[#a855f7]" />, text: 'SaaS Builder', sub: 'Full lifecycle architecture' },
  { icon: <Rocket className="w-4 h-4 text-[#ec4899]" />, text: 'Founder Mindset', sub: 'DevWeaveX creator' },
  { icon: <Code2 className="w-4 h-4 text-[#22c55e]" />, text: 'Open-Source Interested', sub: 'Building in public' },
]

export default function About() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="relative py-28 bg-[#07080c] overflow-hidden">
      {/* Background divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-teal-light bg-teal/10 px-3 py-1 rounded-full animate-pulse"
          >
            Who I Am
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight"
          >
            The Builder <span className="text-gradient-gold">Behind The Code</span>
          </motion.h2>
        </div>

        {/* Content split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT STORY (7 columns on large screen) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <p className="text-lg text-slate-200 font-semibold leading-relaxed">
              Hi, I'm <span className="text-white underline decoration-teal decoration-2 underline-offset-4">Faizyab Hussain</span>. I design and build highly optimized web systems, intelligent AI pipelines, and SaaS platforms that make an impact.
            </p>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Based in Karachi, Pakistan, I specialize in full-stack engineering with an international mindset. I combine visual aesthetics with high-performance execution. I believe modern websites should not only feel alive and interactive, but must also serve as functional assets that convert visitors and run on robust architectures.
            </p>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              As the founder of <strong className="text-teal-light">DevWeaveX</strong>, I approach development with a product founder's lens: analyzing user problems, mapping efficient data models, integrating predictive AI engines, and optimizing code size for fast load times.
            </p>

            <blockquote className="border-l-2 border-gold pl-4 py-1.5 italic text-slate-350 text-xs font-mono">
              "I build with modern AI accelerators like Cursor, v0, and Claude, but my thinking is rooted in core software engineering principles, clean design patterns, and conversion architecture."
            </blockquote>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => handleScrollTo("contact")}
                className="btn-premium-teal px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
              >
                <span>Work With Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href="/Resume_Faizyab_Hussain.pdf"
                download
                className="btn-premium-ghost px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* RIGHT GRID CARDS (5 columns on large screen) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {INFO_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 border border-white/5 hover:border-teal/20 text-left flex flex-col justify-between h-36 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-9 h-9 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white tracking-wide">
                    {card.text}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-medium mt-1">
                    {card.sub}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  )
}
