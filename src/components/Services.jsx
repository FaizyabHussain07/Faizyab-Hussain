import { motion } from 'framer-motion'
import { Cpu, Layers, Rocket, Paintbrush, Layout, Code2, Zap, Globe } from 'lucide-react'

const SERVICES = [
  {
    icon: <Cpu className="w-5 h-5 text-teal-light" />,
    title: 'AI-Powered Web Apps',
    desc: 'Integrating OpenAI models, auto-agent tasks, and semantic vector engines straight into web codebases. Custom chatbot assistants to intelligent analytics dashboards.',
    value: 'Adds custom intelligence to static apps.',
    accent: 'border-teal/20 hover:border-teal/40'
  },
  {
    icon: <Layers className="w-5 h-5 text-[#a855f7]" />,
    title: 'SaaS Product Development',
    desc: 'Architecting complete SaaS architectures including secure user databases, custom admin dashboards, workspace structures, and Stripe subscription logic.',
    value: 'Ready for market launch, not just a mockup.',
    accent: 'border-[#a855f7]/20 hover:border-[#a855f7]/40'
  },
  {
    icon: <Rocket className="w-5 h-5 text-gold" />,
    title: 'Startup MVP Engineering',
    desc: 'Translating early concepts into high-fidelity functional products ready to secure seed funding, pitch investors, or onboard early beta cohorts.',
    value: 'Deployed to production in record weeks.',
    accent: 'border-gold/20 hover:border-gold/40'
  },
  {
    icon: <Paintbrush className="w-5 h-5 text-[#ec4899]" />,
    title: 'Premium Portfolios',
    desc: 'Developing high-end personal branding websites for designers, builders, and executives with smooth page interactions and responsive layouts.',
    value: 'Positioning your digital brand globally.',
    accent: 'border-[#ec4899]/20 hover:border-[#ec4899]/40'
  },
  {
    icon: <Layout className="w-5 h-5 text-[#f43f5e]" />,
    title: 'Conversion Landing Pages',
    desc: 'Designing fast, accessible marketing and product landing pages optimized for search visibility, speed indexes, and customer signups.',
    value: 'Translating visual impressions into signups.',
    accent: 'border-[#f43f5e]/20 hover:border-[#f43f5e]/40'
  },
  {
    icon: <Code2 className="w-5 h-5 text-[#22c55e]" />,
    title: 'Full-Stack Engineering',
    desc: 'Undertaking both frontend layouts and backend database queries. One experienced engineer ensuring system-wide integration.',
    value: 'Ensuring seamless cross-layer architecture.',
    accent: 'border-[#22c55e]/20 hover:border-[#22c55e]/40'
  },
  {
    icon: <Zap className="w-5 h-5 text-[#e11d48]" />,
    title: 'AI Workflow Integration',
    desc: 'Automating internal processes using n8n scripts, custom event listeners, and API configurations to optimize business operational overhead.',
    value: 'Eliminating repetitive operations.',
    accent: 'border-[#e11d48]/20 hover:border-[#e11d48]/40'
  },
  {
    icon: <Globe className="w-5 h-5 text-[#38bdf8]" />,
    title: 'Modern UI/UX Systems',
    desc: 'Drafting structured component assets, custom color variables, and interactive layouts using Tailwind CSS configurations.',
    value: 'Built for scale and component reuse.',
    accent: 'border-[#38bdf8]/20 hover:border-[#38bdf8]/40'
  },
]

export default function Services() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="services" className="relative py-28 bg-[#07080c] overflow-hidden">
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
            Services Catalog
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight"
          >
            Services I <span className="text-gradient-teal">Offer</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-450 text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
          >
            From custom AI automations to complete SaaS platforms, I build solutions tailored to founders and startup teams.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className={`glass-card rounded-3xl p-6 flex flex-col justify-between border ${s.accent} group relative transition-all duration-350 hover:-translate-y-1 h-[270px]`}
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {s.icon}
                </div>
                <h3 className="text-sm font-bold text-white font-sora tracking-wide">
                  {s.title}
                </h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-left">
                <p className="text-[10px] font-semibold text-teal-light font-mono leading-none">
                  → {s.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => handleScrollTo("contact")}
            className="btn-premium-teal px-8 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider shadow-lg"
          >
            Discuss Your Project Scope
          </button>
        </motion.div>

      </div>
    </section>
  )
}
