import { motion } from 'framer-motion'
import { Layers, Cpu, TrendingUp, Zap, Globe, ShieldCheck } from 'lucide-react'

const CAPABILITIES = [
  { 
    icon: <Layers className="w-5 h-5 text-teal-light" />, 
    title: 'Full-Stack Development', 
    desc: 'Engineering end-to-end web products from robust relational schemas up to pixel-perfect micro-animations.',
    highlight: 'Next.js & TypeScript focus' 
  },
  { 
    icon: <Cpu className="w-5 h-5 text-gold" />, 
    title: 'AI Integration', 
    desc: 'Embedding advanced neural models, vector search indexing, semantic routers, and custom AI agents into SaaS codebases.',
    highlight: 'OpenAI & Claude expert'
  },
  { 
    icon: <TrendingUp className="w-5 h-5 text-[#38bdf8]" />, 
    title: 'SaaS Architecture', 
    desc: 'Building secure authentication, Stripe billing hooks, workspace routing systems, and multi-tenant architectures.',
    highlight: 'Scale-ready engines' 
  },
  { 
    icon: <Zap className="w-5 h-5 text-[#a855f7]" />, 
    title: 'Startup MVPs', 
    desc: 'Synthesizing product ideas into production-shipped MVPs in record times using cursor scaffolding and clean code.',
    highlight: 'Founder-grade velocity'
  },
  { 
    icon: <Globe className="w-5 h-5 text-teal" />, 
    title: 'Modern UI Engineering', 
    desc: 'Crafting responsive design grids, component UI states, and custom transitions focused on maximizing user conversion.',
    highlight: 'Tailwind & Framer Motion'
  },
  { 
    icon: <ShieldCheck className="w-5 h-5 text-[#22c55e]" />, 
    title: 'Performance Audits', 
    desc: 'Refactoring heavy bundles, asset compression pipelines, database query indices, and lazy-loading states to hit 95+ Lighthouse scores.',
    highlight: 'Sub-second page loads'
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
}

export default function Trust() {
  return (
    <section id="trust" className="relative py-28 bg-[#07080c] overflow-hidden">
      {/* Background divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-teal-light bg-teal/10 px-3 py-1 rounded-full"
          >
            Engineering Capabilities
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight"
          >
            Building Modern Products With <span className="text-gradient-teal">Scalable Thinking</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-450 text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
          >
            I operate at the intersection of full-stack engineering, artificial intelligence integration, and high-fidelity user interface design, building solutions that compete internationally.
          </motion.p>
        </div>

        {/* Grid cards list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CAPABILITIES.map((c, idx) => (
            <motion.div
              key={c.title}
              variants={cardVariants}
              className="glass-card glow-border-teal rounded-3xl p-8 flex flex-col justify-between text-left group relative cursor-default"
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-6 group-hover:border-teal/30 transition-all duration-300">
                  {c.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold font-sora text-white mb-3 group-hover:text-teal-light transition-colors duration-200">
                  {c.title}
                </h3>
                
                {/* Desc */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  {c.desc}
                </p>
              </div>

              {/* Tag / Highlight */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                  Focus Area
                </span>
                <span className="text-[10px] font-semibold text-teal-light font-mono">
                  {c.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
