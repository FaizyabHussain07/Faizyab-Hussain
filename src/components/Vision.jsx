import { motion } from 'framer-motion'
import { Eye, Shield, Cpu, Sparkles } from 'lucide-react'

const PILLARS = [
  {
    icon: <Eye className="w-4 h-4 text-teal-light" />,
    title: "Product Design",
    desc: "Polishing user interfaces until they command immediate trust and visually stand out globally."
  },
  {
    icon: <Cpu className="w-4 h-4 text-gold" />,
    title: "Intelligent Systems",
    desc: "Leveraging predictive AI agents and structured API interfaces to automate complex operations."
  },
  {
    icon: <Shield className="w-4 h-4 text-[#38bdf8]" />,
    title: "Global Scalability",
    desc: "Engineering clean serverless routes and cached relational database structures prepared for expansion."
  }
]

export default function Vision() {
  return (
    <section id="why-i-build" className="relative py-28 bg-[#07080c] overflow-hidden">
      {/* Background divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      {/* Dynamic ambient highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-teal/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Header */}
        <div className="space-y-4 mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-teal-light bg-teal/10 px-3 py-1 rounded-full"
          >
            Engineering Manifesto
          </motion.span>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
            Why I <span className="text-gradient-teal">Build</span>
          </h2>
        </div>

        {/* Vision Statement Body */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-4xl mx-auto text-slate-350 text-base sm:text-xl leading-relaxed font-medium font-sora p-8 rounded-3xl bg-[#0f111a]/40 border border-white/5 relative overflow-hidden text-left"
        >
          {/* Subtle decoration */}
          <div className="absolute top-4 right-4">
            <Sparkles className="w-5 h-5 text-gold/30" />
          </div>

          <p className="border-l-2 border-teal pl-4 md:pl-6">
            "I believe the future belongs to software engineers who bridge the gap between <strong className="text-white">generative AI models</strong>, <strong className="text-white">scalable system architectures</strong>, and <strong className="text-white">interactive interface designs</strong>."
          </p>
          
          <p className="border-l-2 border-gold pl-4 md:pl-6">
            "My mission is to deliver high-performance digital products that compete on a global scale while representing modern, world-class engineering and product development from Pakistan."
          </p>
        </motion.div>

        {/* Three Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card rounded-2xl p-6 text-left flex flex-col justify-between h-48 border border-white/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-2 font-sora">
                  {pillar.title}
                </h4>
                <p className="text-[11px] text-slate-450 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
