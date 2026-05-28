import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQ_DATA = [
  {
    question: "What kind of projects do you build?",
    answer: "I specialize in engineering full-stack digital products, multi-tenant SaaS platforms, interactive custom landing pages, and AI-powered web applications. Every application is built with a strong focus on responsiveness, modern UX design systems, and under 2-second load times."
  },
  {
    question: "Are you available for freelance or collaboration?",
    answer: "Yes! I am actively open to remote contract opportunities, freelance packages, and global developer collaborations. I work with clients across different time zones, managing tasks from feature additions to full MVP launches."
  },
  {
    question: "What technologies do you use?",
    answer: "My core technology stack includes React and Next.js for frontend architectures, Tailwind CSS for styling systems, Framer Motion for smooth visual interactions, and Node.js (Express), MongoDB, and Supabase (PostgreSQL) for database management and APIs."
  },
  {
    question: "Do you build AI-powered products?",
    answer: "Yes, I integrate generative AI endpoints (like OpenAI and Claude), construct prompt routing pipelines, design semantic RAG search utilities, and configure automated backgrounds utilizing custom AI agent workflows."
  },
  {
    question: "Do you work on startup MVPs?",
    answer: "Absolutely. I help early-stage startup founders conceptualize, database-model, and build functional MVP versions of their ideas. I focus on developing clean, modular code that is ready for investor demonstrations and user validations in 3 to 4 weeks."
  },
  {
    question: "How can I contact you?",
    answer: "You can submit an inquiry through the contact form at the bottom of this page. Alternatively, you can email me directly at syedfaizyabhussain07@gmail.com, or reach out through LinkedIn or GitHub. I typically respond to emails and forms within 2 hours."
  },
  {
    question: "Can you build a custom portfolio or SaaS website?",
    answer: "Yes, I design and build fully custom personal portfolios, SaaS websites, and business applications centered around your logo-based color schemes and brand identity. I avoid using standard templates to ensure your site is lightweight, accessible, and highly optimized for SEO."
  }
]

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_DATA.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="relative py-28 bg-[#07080c] overflow-hidden">
      {/* FAQ JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      {/* Background divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-teal-light bg-teal/10 px-3 py-1 rounded-full"
          >
            Answering Inquiries
          </motion.span>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
            Frequently Asked <span className="text-gradient-teal">Questions</span>
          </h2>
          
          <p className="text-slate-455 text-sm max-w-xl mx-auto">
            Find answers regarding remote collaborations, project delivery times, and tech stack configurations.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-white/5 hover:border-teal/20 transition-all duration-300 overflow-hidden text-left"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-bold text-white pr-4 font-sora">
                    {item.question}
                  </span>
                  
                  <div className="w-6 h-6 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-teal/30 transition-colors">
                    <ChevronDown 
                      className={`w-3.5 h-3.5 text-teal-light transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-gold' : ''
                      }`} 
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="faq-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
