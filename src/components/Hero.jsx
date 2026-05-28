import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Terminal, Cpu, Globe, Database, Network, ChevronRight } from 'lucide-react'

const STATS_ITEMS = [
  { icon: <Cpu className="w-4 h-4 text-teal-light animate-pulse" />, text: '15+ Projects Built' },
  { icon: <Network className="w-4 h-4 text-gold animate-bounce" />, text: 'AI & SaaS Focused' },
  { icon: <Globe className="w-4 h-4 text-[#38bdf8]" />, text: 'Open to Global Collaboration' },
  { icon: <Database className="w-4 h-4 text-[#a855f7]" />, text: 'Founder of DevWeaveX' },
]

export default function Hero({ onSelectCaseStudy }) {
  const [terminalLineIdx, setTerminalLineIdx] = useState(0)
  const [activeNode, setActiveNode] = useState(null)
  
  const terminalLines = [
    { text: "Initializing AI Product Agent...", type: "system" },
    { text: "Loading neural engine, model=claude-3.5-sonnet", type: "success" },
    { text: "Connecting Supabase database cluster...", type: "system" },
    { text: "Checking API endpoints status: SECURE [200 OK]", type: "success" },
    { text: "devweavex@faizyab:~# npm run build", type: "input" },
    { text: "Executing build optimization algorithms...", type: "system" },
    { text: "✓ Route validation complete.", type: "success" },
    { text: "✓ Bundle optimized (Vite size: 84.2 kB). Ready.", type: "success" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalLineIdx((prev) => {
        if (prev < terminalLines.length) return prev + 1
        return 0 // Loop compiler log
      })
    }, 2200)
    return () => clearInterval(timer)
  }, [])

  const handleScrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16 lg:py-32">
      {/* Visual background lights */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-teal/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-mustard/3 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Status indicator badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#131622] border border-white/5 text-xs font-semibold text-slate-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-light opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
              </span>
              <span>Available for global contract work</span>
            </motion.div>

            {/* Name & Titles */}
            <div className="space-y-3">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-6xl font-black font-sora leading-none tracking-tight"
              >
                <span className="text-white">Faizyab</span>{" "}
                <span className="text-gradient-teal">Hussain</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs sm:text-sm font-bold tracking-[0.35em] uppercase text-teal-light"
              >
                Full-Stack Developer • AI Builder • SaaS Creator
              </motion.p>
            </div>

            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl sm:text-4xl font-extrabold font-display leading-tight text-white/90"
            >
              Building Modern AI Products,{" "}
              <span className="text-gradient-gold">Scalable Systems</span> & Premium Web Experiences.
            </motion.h2>

            {/* Description Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl"
            >
              I design and develop high-performance digital products, AI-powered systems, and scalable web experiences with modern engineering and clean UI principles.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => handleScrollTo("projects")}
                className="btn-premium-teal px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => handleScrollTo("contact")}
                className="btn-premium-ghost px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider"
              >
                Contact Me
              </button>
              
              <a
                href="/Resume_Faizyab_Hussain.pdf"
                download
                className="btn-premium-ghost px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-teal-light" />
                <span>Resume</span>
              </a>
            </motion.div>

            {/* Stat chips */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-2.5 pt-4 border-t border-white/5"
            >
              {STATS_ITEMS.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#131622] border border-white/5 text-xs text-slate-350 font-medium"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE VISUAL - Interactive Dev Dashboard / AI Pipeline */}
          <div className="lg:col-span-5 relative mt-10 lg:mt-0">
            {/* Ambient glow container */}
            <div className="absolute inset-0 bg-teal/10 blur-[80px] rounded-3xl scale-95 pointer-events-none -z-10" />

            {/* Outer panel container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="glass-card rounded-[28px] overflow-hidden border border-white/10 shadow-2xl relative"
            >
              {/* Header bar */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-[#0f111a]/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] text-slate-500 font-mono">faizyab-core-pipeline.js</span>
                <Terminal className="w-3.5 h-3.5 text-slate-500" />
              </div>

              <div className="p-6 space-y-6">
                
                {/* Visual AI Workflow Graph */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block text-left">
                    Intelligent Architecture Flow
                  </span>
                  
                  <div className="h-28 rounded-2xl bg-black/45 border border-white/5 relative p-4 flex items-center justify-between overflow-hidden">
                    {/* Graph grid lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px]" />

                    {/* Nodes (Interactive hover states) */}
                    <div className="relative flex w-full items-center justify-between z-10">
                      
                      {/* Node 1: API */}
                      <div 
                        onMouseEnter={() => setActiveNode('api')}
                        onMouseLeave={() => setActiveNode(null)}
                        className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center border transition-all cursor-pointer ${
                          activeNode === 'api' 
                            ? 'bg-teal/15 border-teal text-teal-light scale-105 shadow-[0_0_15px_rgba(0,126,138,0.2)]' 
                            : 'bg-[#131622] border-white/5 text-slate-400'
                        }`}
                      >
                        <Database className="w-5 h-5" />
                        <span className="text-[7px] font-bold mt-1 uppercase font-mono">Data</span>
                      </div>

                      {/* Line 1 */}
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-teal/30 to-gold/30 mx-2 relative overflow-hidden">
                        <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-teal-light to-transparent animate-[scroll_2s_linear_infinite]" 
                          style={{
                            animationName: 'nodeFlow'
                          }}
                        />
                      </div>

                      {/* Node 2: AI */}
                      <div 
                        onMouseEnter={() => setActiveNode('ai')}
                        onMouseLeave={() => setActiveNode(null)}
                        className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center border transition-all cursor-pointer ${
                          activeNode === 'ai' 
                            ? 'bg-gold/15 border-gold text-gold scale-105 shadow-[0_0_15px_rgba(240,165,0,0.2)]' 
                            : 'bg-[#131622] border-white/5 text-slate-400'
                        }`}
                      >
                        <Cpu className="w-5 h-5" />
                        <span className="text-[7px] font-bold mt-1 uppercase font-mono">LLM Core</span>
                      </div>

                      {/* Line 2 */}
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-gold/30 to-teal/30 mx-2 relative overflow-hidden">
                        <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-gold to-transparent animate-[scroll_2s_linear_infinite]" 
                          style={{
                            animationName: 'nodeFlow',
                            animationDelay: '1s'
                          }}
                        />
                      </div>

                      {/* Node 3: Deployment */}
                      <div 
                        onMouseEnter={() => setActiveNode('ui')}
                        onMouseLeave={() => setActiveNode(null)}
                        className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center border transition-all cursor-pointer ${
                          activeNode === 'ui' 
                            ? 'bg-teal/15 border-teal text-teal-light scale-105 shadow-[0_0_15px_rgba(0,126,138,0.2)]' 
                            : 'bg-[#131622] border-white/5 text-slate-400'
                        }`}
                      >
                        <Network className="w-5 h-5" />
                        <span className="text-[7px] font-bold mt-1 uppercase font-mono">Product</span>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Live Build / Terminal Compilation widget */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block text-left">
                    Live Compiler Log
                  </span>
                  
                  <div className="h-36 rounded-2xl bg-black/60 border border-white/5 p-4 font-mono text-[10px] text-left text-slate-400 overflow-y-auto space-y-1.5 scrollbar-thin">
                    {terminalLines.slice(0, terminalLineIdx + 1).map((line, idx) => (
                      <div key={idx} className="flex gap-2">
                        <span className="text-slate-650 select-none">{(idx + 1).toString().padStart(2, '0')}</span>
                        {line.type === 'input' && <span className="text-gold font-bold">&gt; {line.text}</span>}
                        {line.type === 'system' && <span className="text-slate-400">{line.text}</span>}
                        {line.type === 'success' && <span className="text-teal-light font-medium">{line.text}</span>}
                      </div>
                    ))}
                    {terminalLineIdx < terminalLines.length && (
                      <div className="flex gap-2 items-center">
                        <span className="text-slate-650">{(terminalLineIdx + 2).toString().padStart(2, '0')}</span>
                        <div className="w-1.5 h-3 bg-teal animate-pulse" />
                      </div>
                    )}
                  </div>
                </div>

                {/* SaaS Metrics block */}
                <div className="grid grid-cols-3 gap-3 border-t border-white/5 pt-4">
                  <div className="p-3.5 rounded-xl bg-[#131622] border border-white/5 text-center">
                    <div className="text-lg font-extrabold text-teal-light font-display">100%</div>
                    <div className="text-[8px] text-slate-500 uppercase tracking-wider font-bold mt-0.5">Uptime SLA</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#131622] border border-white/5 text-center">
                    <div className="text-lg font-extrabold text-gold font-display">&lt;140ms</div>
                    <div className="text-[8px] text-slate-500 uppercase tracking-wider font-bold mt-0.5">Response Time</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#131622] border border-white/5 text-center">
                    <div className="text-lg font-extrabold text-white font-display">99.8%</div>
                    <div className="text-[8px] text-slate-500 uppercase tracking-wider font-bold mt-0.5">LLM Accuracy</div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Custom keyframes injected via style tag */}
            <style>{`
              @keyframes nodeFlow {
                0% { left: -30%; }
                100% { left: 100%; }
              }
            `}</style>
          </div>

        </div>
      </div>
      
      {/* Bottom scroll down trigger */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer text-slate-600 hover:text-slate-350 transition-colors"
        onClick={() => handleScrollTo("trust")}
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.25em] font-mono">SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-slate-600 flex justify-center p-1"
        >
          <div className="w-1.5 h-1.5 bg-teal rounded-full animate-pulse" />
        </motion.div>
      </div>

    </section>
  )
}
