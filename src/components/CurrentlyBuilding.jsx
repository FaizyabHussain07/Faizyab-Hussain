import { motion } from 'framer-motion'
import { Activity, Sparkles, Folder, Terminal, GitCommit } from 'lucide-react'

const CURRENT_PROJECTS = [
  {
    title: "SLIK DEV Studio",
    status: "Active Development",
    progress: 92,
    desc: "Building a premium digital studio platform with conversion-optimized landing pages, dynamic case study systems, and tiered service pricing for high-ticket client acquisition.",
    update: "Deployed studio landing with SSR and Framer Motion transitions."
  },
  {
    title: "ProdSpark AI Planner",
    status: "Beta Testing",
    progress: 68,
    desc: "Developing an AI-powered SaaS workspace that parses raw objectives into structured kanban backlogs with intelligent priority scoring and velocity analytics.",
    update: "Integrated OpenAI objective parser with priority scoring engine."
  },
  {
    title: "QuizSpark AI Engine",
    status: "Active Training",
    progress: 85,
    desc: "Scaling the adaptive AI quiz generation pipeline with improved schema validation, real-time scoring, and curriculum-aligned question routing.",
    update: "Optimized prompt router for 99.8% schema parse reliability."
  }
]

export default function CurrentlyBuilding() {
  return (
    <section id="currently-building" className="relative py-28 bg-[#07080c] overflow-hidden">
      {/* Background divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-left max-w-3xl mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-teal-light bg-teal/10 px-3 py-1 rounded-full"
          >
            Active Momentum
          </motion.span>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
            Currently <span className="text-gradient-teal">Building</span>
          </h2>
          
          <p className="text-slate-455 text-sm max-w-xl">
            A real-time window into the active products, AI systems, and SaaS platforms currently compiling on my workstation.
          </p>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CURRENT_PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card rounded-[28px] p-6 hover:border-teal/30 transition-all duration-300 relative group flex flex-col justify-between text-left h-[330px]"
            >
              <div>
                {/* Meta line */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[9px] font-bold font-mono text-teal-light bg-teal/10 border border-teal/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {project.status}
                  </span>
                  <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-500 font-bold uppercase">
                    <Activity className="w-3.5 h-3.5 text-teal animate-pulse" />
                    <span>Live Lab</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white font-sora mb-3 flex items-center gap-2">
                  <Folder className="w-4 h-4 text-teal/40" />
                  <span>{project.title}</span>
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {/* Progress & Updates */}
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                    <span>Compilation Status</span>
                    <span className="text-teal-light">{project.progress}%</span>
                  </div>
                  <div className="w-full h-1 bg-black/40 rounded-full overflow-hidden border border-white/5">
                    <div 
                      className="h-full bg-teal rounded-full transition-all duration-1000" 
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Git commit subcard */}
                <div className="p-3 rounded-2xl bg-black/35 border border-white/5 flex items-start gap-2.5">
                  <GitCommit className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <div className="text-[10px]">
                    <span className="text-slate-500 font-bold uppercase tracking-wider font-mono block">Latest Update</span>
                    <span className="text-slate-350 leading-relaxed">{project.update}</span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
