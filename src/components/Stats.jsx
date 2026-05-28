import { motion } from 'framer-motion'
import { Linkedin, Zap, Cpu, Code2, Rocket, Activity } from 'lucide-react'

const STATS = [
  { 
    icon: <Linkedin className="w-5 h-5 text-[#0077b5]" />,
    value: '2.4K+', 
    label: 'LinkedIn Audience', 
    desc: 'Professional network & tech community presence.',
    sub: 'Growth of +15% MoM',
    color: 'from-[#0077b5]/20 to-transparent'
  },
  { 
    icon: <Zap className="w-5 h-5 text-gold" />,
    value: '15+', 
    label: 'Projects Built', 
    desc: 'Production MVPs, web tools, and full-stack utilities.',
    sub: '4 featured products',
    color: 'from-gold/15 to-transparent'
  },
  { 
    icon: <Code2 className="w-5 h-5 text-[#22c55e]" />,
    value: 'Modern Tech', 
    label: 'Stack Experience', 
    desc: 'Next.js, React, Node.js, and TypeScript engineering.',
    sub: 'Full-stack delivery',
    color: 'from-[#22c55e]/15 to-transparent'
  },
  { 
    icon: <Cpu className="w-5 h-5 text-teal-light" />,
    value: 'AI & SaaS', 
    label: 'Core Orientation', 
    desc: 'Deep integration of LLM engines, auth, and billings.',
    sub: 'Automated pipelines',
    color: 'from-teal/15 to-transparent'
  },
  { 
    icon: <Rocket className="w-5 h-5 text-[#ec4899]" />,
    value: 'DevWeaveX', 
    label: 'Founder & Architect', 
    desc: 'Scaffolding intelligent tooling for active development.',
    sub: 'Bootstrapped tool suite',
    color: 'from-[#ec4899]/15 to-transparent'
  },
  { 
    icon: <Activity className="w-5 h-5 text-[#38bdf8]" />,
    value: 'Public', 
    label: 'Active Builder', 
    desc: 'Commits, documentation logs, and building in public.',
    sub: 'Daily development loops',
    color: 'from-[#38bdf8]/15 to-transparent'
  },
]

export default function Stats() {
  return (
    <section id="stats" className="relative py-28 bg-[#07080c] overflow-hidden">
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
            Social Proof & Influence
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight"
          >
            Proof In <span className="text-gradient-teal">Product Shipped</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-450 text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
          >
            Verifiable data detailing global audience reach, active project delivery timelines, and framework experience.
          </motion.p>
        </div>

        {/* Stats list layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="glass-card rounded-3xl p-8 border border-white/5 hover:border-teal/20 text-left flex flex-col justify-between group relative overflow-hidden h-64"
            >
              {/* Corner ambient color block */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${stat.color} blur-[60px] pointer-events-none -z-10 group-hover:scale-125 transition-transform duration-500`} />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                    Metric Card {(idx + 1).toString().padStart(2, '0')}
                  </span>
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight">
                    {stat.value}
                  </h3>
                  <p className="text-xs font-bold text-teal-light tracking-wide uppercase font-sora">
                    {stat.label}
                  </p>
                </div>
              </div>

              <div className="border-t border-white/5 pt-4 flex flex-col gap-1.5">
                <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                  {stat.desc}
                </p>
                <p className="text-[9px] text-slate-550 font-mono flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block animate-pulse" />
                  {stat.sub}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
