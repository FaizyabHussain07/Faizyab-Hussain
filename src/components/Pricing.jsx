import { motion } from 'framer-motion'
import { Check, Star, HelpCircle } from 'lucide-react'

const PACKAGES = [
  {
    id: 'starter',
    name: 'Starter Website',
    price: '$499',
    caption: 'High-end layout for single-purpose products and personal brands.',
    audience: 'Freelancers, consultants, and founders launching ideas.',
    outcome: 'Establishes high-fidelity international brand presence fast.',
    features: [
      'Responsive visual grids',
      'Up to 6 structured sections',
      'Interactive Framer Motion effects',
      'Configured FormSubmit endpoints',
      'Optimized asset loading & SEO tags',
      '3 rounds of layouts revisions',
      'Delivery in 4–6 business days'
    ],
    cta: 'Select Starter Plan',
    popular: false,
    color: 'border-white/5 hover:border-teal/20'
  },
  {
    id: 'saas',
    name: 'Startup SaaS Package',
    price: '$1,499',
    caption: 'Production-ready SaaS architecture built to capture revenue.',
    audience: 'Product startups and digital software founders.',
    outcome: 'Ships a fully functional, market-ready SaaS application.',
    features: [
      'Full-stack Next.js or React setup',
      'Supabase or Firebase database',
      'Secure authentication workflows',
      'Stripe billing & checkouts hooks',
      'Comprehensive admin dashboard',
      'Sub-second query optimizations',
      'Continuous deployment via Vercel',
      'Extended 30-day bug guarantees'
    ],
    cta: 'Scaffold Your SaaS',
    popular: true,
    color: 'border-teal/40 hover:border-teal bg-[#131622]/40'
  },
  {
    id: 'ai',
    name: 'AI Integration Package',
    price: '$999',
    caption: 'Embed conversational AI, vector search, and automations.',
    audience: 'Teams adding predictive layers to existing products.',
    outcome: 'Converts legacy applications into smart AI systems.',
    features: [
      'OpenAI or Claude SDK structures',
      'Pinecone/Supabase Vector indexes',
      'AI Assistant chat user-interfaces',
      'Multi-agent workflow triggers',
      'Strict schema parsing middlewares',
      'Token consumption limit safeguards',
      'Automated retry fallback routers'
    ],
    cta: 'Integrate Intelligent LLM',
    popular: false,
    color: 'border-[#a855f7]/20 hover:border-[#a855f7]/40'
  },
  {
    id: 'custom',
    name: 'Custom Product',
    price: 'Custom',
    caption: 'For enterprise solutions, custom APIs, and high-load web systems.',
    audience: 'Growing startups, digital agencies, and companies.',
    outcome: 'Engineers custom, enterprise-scalable web systems.',
    features: [
      'Bespoke systems planning',
      'Custom database schemas designs',
      'High-throughput API endpoints',
      'CI/CD pipeline orchestrations',
      'Multi-tenant network controls',
      'Direct WhatsApp & Slack channels',
      'Dedicated post-launch developer'
    ],
    cta: 'Initiate Consultation',
    popular: false,
    color: 'border-gold/20 hover:border-gold/40'
  }
]

export default function Pricing() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="pricing" className="relative py-28 bg-[#07080c] overflow-hidden">
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
            Pricing Matrix
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight"
          >
            Transparent <span className="text-gradient-teal">Pricing Packages</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-455 text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
          >
            Clear, value-driven investment tiers. No hidden maintenance invoices.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.5 }}
              className={`glass-card rounded-[28px] border overflow-hidden flex flex-col justify-between transition-all duration-300 ${pkg.color} ${pkg.popular ? 'shadow-[0_0_40px_rgba(0,126,138,0.06)]' : ''}`}
            >
              {/* Popular ribbon */}
              {pkg.popular && (
                <div className="bg-teal py-1.5 flex items-center justify-center gap-1">
                  <Star className="w-3.5 h-3.5 text-white fill-white" />
                  <span className="text-[9px] font-bold text-white uppercase tracking-widest">
                    Recommended Deal
                  </span>
                </div>
              )}

              {/* Package Meta details */}
              <div className="p-8 space-y-6 flex-1 flex flex-col justify-between text-left">
                <div className="space-y-4">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-mono">
                    {pkg.name}
                  </span>
                  
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                      {pkg.price}
                    </span>
                    {pkg.price !== 'Custom' && (
                      <span className="text-xs text-slate-500 font-semibold">/ project</span>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed min-h-[48px]">
                    {pkg.caption}
                  </p>

                  <div className="h-px bg-white/5" />
                  
                  <p className="text-[10px] font-bold text-teal-light uppercase tracking-wider">
                    For: {pkg.audience}
                  </p>
                </div>

                {/* Features checklist */}
                <ul className="space-y-3.5 my-6 flex-1">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-350 leading-tight">
                      <Check className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Outcome card */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <span className="text-[9px] font-bold text-gold uppercase tracking-wider font-mono">Target Outcome</span>
                  <p className="text-[11.5px] text-slate-400 leading-normal font-medium">{pkg.outcome}</p>
                </div>
              </div>

              {/* Card Action footer */}
              <div className="p-8 pt-0 text-left">
                <button
                  onClick={() => handleScrollTo("contact")}
                  className={`w-full py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 ${
                    pkg.popular 
                      ? 'btn-premium-teal' 
                      : 'btn-premium-ghost'
                  }`}
                >
                  <span>{pkg.cta}</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Pricing disclaimer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-xs text-slate-550 mt-10 font-medium"
        >
          * Final pricing packages depend on custom scoping and relational database requirements.
        </motion.p>

      </div>
    </section>
  )
}
