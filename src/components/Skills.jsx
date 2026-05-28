import { motion } from 'framer-motion'
import { Code2, Server, Brain, Wrench, Palette, Sparkles } from 'lucide-react'

const SKILL_CATEGORIES = [
  {
    icon: <Code2 className="w-5 h-5 text-teal-light" />,
    title: 'Frontend Engineering',
    color: 'border-teal/20 hover:border-teal/40',
    glow: 'group-hover:bg-teal/5',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion']
  },
  {
    icon: <Server className="w-5 h-5 text-[#a855f7]" />,
    title: 'Backend Systems',
    color: 'border-[#a855f7]/20 hover:border-[#a855f7]/40',
    glow: 'group-hover:bg-[#a855f7]/5',
    skills: ['Node.js', 'Express.js', 'Firebase Auth/Firestore', 'MongoDB', 'Supabase', 'RESTful APIs', 'JWT Auth']
  },
  {
    icon: <Brain className="w-5 h-5 text-gold" />,
    title: 'AI & Automation',
    color: 'border-gold/20 hover:border-gold/40',
    glow: 'group-hover:bg-gold/5',
    skills: ['OpenAI APIs', 'AI System Integration', 'Automation Workflows', 'Prompt Systems', 'AI Product Engineering']
  },
  {
    icon: <Wrench className="w-5 h-5 text-[#38bdf8]" />,
    title: 'Modern Developer Tools',
    color: 'border-[#38bdf8]/20 hover:border-[#38bdf8]/40',
    glow: 'group-hover:bg-[#38bdf8]/5',
    skills: ['Lovable', 'Cursor IDE', 'v0.dev', 'GitHub', 'Vercel Deployment', 'Claude AI', 'Replit AI', 'Figma Design']
  },
  {
    icon: <Palette className="w-5 h-5 text-[#ec4899]" />,
    title: 'Design & Product',
    color: 'border-[#ec4899]/20 hover:border-[#ec4899]/40',
    glow: 'group-hover:bg-[#ec4899]/5',
    skills: ['SaaS UI Systems', 'UX Thinking & Wireframing', 'Responsive Design Grid', 'Conversion-Focused UX', 'Product Architecture']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-[#07080c] overflow-hidden">
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
            Technical Stack
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight"
          >
            Skills & <span className="text-gradient-teal">Expertise</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-450 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-mono italic"
          >
            "I build with modern tools, but I think like a product engineer."
          </motion.p>
        </div>

        {/* Skills grid split */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className={`glass-card rounded-3xl p-8 border ${category.color} text-left flex flex-col justify-between group relative transition-all duration-300 ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div>
                {/* Title block */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-sm font-bold tracking-wider uppercase text-white font-sora">
                    {category.title}
                  </h3>
                </div>

                {/* Skill pills grid */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl bg-[#0f111a] border border-white/5 text-[11px] text-slate-350 font-medium transition-all duration-200 hover:border-teal/30 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative footer */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                <span>Verified Expertise</span>
                <Sparkles className="w-3.5 h-3.5 text-teal/40 group-hover:text-teal group-hover:animate-spin transition-colors duration-500" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
