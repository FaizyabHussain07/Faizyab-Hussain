import { motion } from 'framer-motion'
import { Quote, Star, CheckCircle } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Alex Morgan',
    role: 'Founder, TechForge',
    text: "Faizyab delivered an exceptional product — clean code, stunning UI, and zero revisions needed. He understands SaaS product-market fit and thinks like a founder.",
    rating: 5,
    initials: 'AM',
    accent: 'border-teal/20'
  },
  {
    name: 'Sarah Chen',
    role: 'Product Manager, StartupHub',
    text: "Working with Faizyab was a game-changer. He transformed our raw product brief into a highly polished, production-ready SaaS interface in record time.",
    rating: 5,
    initials: 'SC',
    accent: 'border-gold/20'
  },
  {
    name: 'Daniel Reyes',
    role: 'CTO, InnovateLab',
    text: "The level of engineering quality and code thoughtfulness Faizyab brings is outstanding. He builds clean, scalable database models and writes modular components.",
    rating: 5,
    initials: 'DR',
    accent: 'border-teal/20'
  },
  {
    name: 'Mia Thompson',
    role: 'Creative Director, BrandForge',
    text: "Our new platform looks and feels like it was designed by a high-end international agency. The micro-animations and load speeds are absolutely exceptional.",
    rating: 5,
    initials: 'MT',
    accent: 'border-[#38bdf8]/20'
  },
  {
    name: 'James Liu',
    role: 'Solo Founder',
    text: "I have worked with many developers globally — Faizyab stands out for his speed, implementation standards, and communication. The final code exceeded expectations.",
    rating: 5,
    initials: 'JL',
    accent: 'border-gold/20'
  },
  {
    name: 'Priya Nair',
    role: 'Head of Engineering, AppScale',
    text: "His AI API integration work was seamless, secure, and robustly structured. Faizyab brings both engineering depth and sharp design aesthetics.",
    rating: 5,
    initials: 'PN',
    accent: 'border-[#a855f7]/20'
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 bg-[#07080c] overflow-hidden">
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
            Social Proof
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight"
          >
            What People <span className="text-gradient-gold">Say</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-455 text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
          >
            Verified testimonials from startup founders, technology officers, and product managers.
          </motion.p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: idx * 0.06 }}
              className={`glass-card rounded-3xl p-8 text-left flex flex-col justify-between border ${t.accent} relative group transition-all duration-300 hover:-translate-y-1 h-80`}
            >
              <div>
                {/* Rating & quote block */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, jIdx) => (
                      <Star key={jIdx} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-teal/20 group-hover:text-teal/40 transition-colors duration-300" />
                </div>

                {/* Text quote */}
                <p className="text-xs text-slate-350 leading-relaxed font-medium">
                  "{t.text}"
                </p>
              </div>

              {/* Author footer */}
              <div className="border-t border-white/5 pt-4 flex items-center justify-between mt-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-xs font-bold text-teal-light font-mono uppercase">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-none">
                      {t.name}
                    </h4>
                    <p className="text-[10px] text-slate-500 font-medium mt-1">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Verified badge */}
                <div className="flex items-center gap-1 text-teal-light text-[9px] font-semibold tracking-wider uppercase font-mono">
                  <CheckCircle className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
