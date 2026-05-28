import { motion } from 'framer-motion'
import { BookOpen, Calendar, Clock, ArrowUpRight } from 'lucide-react'

const ARTICLES = [
  {
    category: "AI Engineering",
    readTime: "5 min read",
    date: "May 18, 2026",
    title: "AI and the Future of Software Development",
    excerpt: "Exploring the shift from manual boilerplate to agentic code workflows. A guide to writing system prompts, evaluating contexts, and mapping vector stores.",
    link: "https://github.com/faizyabhussain07"
  },
  {
    category: "SaaS Architecture",
    readTime: "6 min read",
    date: "Apr 22, 2026",
    title: "Building Scalable SaaS Products as a Developer",
    excerpt: "Analyzing the optimal tech stack for bootstrapped founders: secure session databases, workspace routing, billing loops, and database syncing keys.",
    link: "https://github.com/faizyabhussain07"
  },
  {
    category: "Design Systems",
    readTime: "4 min read",
    date: "Mar 10, 2026",
    title: "Structuring Startup Design Systems in Tailwind",
    excerpt: "How to compile maintainable visual assets, map custom color variables, avoid CSS code duplication, and build reusable UI primitives.",
    link: "https://github.com/faizyabhussain07"
  },
  {
    category: "Productivity",
    readTime: "4 min read",
    date: "Feb 14, 2026",
    title: "Optimizing Your Workflows: Cursor, v0 & Claude",
    excerpt: "A look inside the daily tools of a modern AI product engineer. How to accelerate scaffolding velocity while keeping strict code review controls.",
    link: "https://github.com/faizyabhussain07"
  },
  {
    category: "Open Source",
    readTime: "3 min read",
    date: "Jan 28, 2026",
    title: "Growing Open-Source Utilities & Building in Public",
    excerpt: "How sharing project code logs, architecture decisions, and design specs on GitHub increases community trust and global remote opportunities.",
    link: "https://github.com/faizyabhussain07"
  },
  {
    category: "Full-Stack Journey",
    readTime: "5 min read",
    date: "Dec 12, 2025",
    title: "My Engineering Journey: Learning from SaylaniMass (SMIT)",
    excerpt: "Key lessons learned from full-stack training, writing complex algorithm solutions under timers, and interning inside enterprise corporate offices.",
    link: "https://github.com/faizyabhussain07"
  }
]

export default function Blog() {
  return (
    <section id="blog" className="relative py-28 bg-[#07080c] overflow-hidden">
      {/* Background divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-left max-w-3xl mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-teal-light bg-teal/10 px-3 py-1 rounded-full animate-pulse"
          >
            Technical Publications
          </motion.span>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
            Latest <span className="text-gradient-teal">Articles</span>
          </h2>
          
          <p className="text-slate-455 text-sm max-w-xl">
            Sharing optimization guides, architectural choices, and thoughts on the evolving AI developer stack.
          </p>
        </div>

        {/* Articles list grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((article, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="glass-card rounded-[28px] p-6 hover:border-teal/30 transition-all duration-300 relative group flex flex-col justify-between text-left h-[290px]"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold text-teal-light uppercase tracking-widest font-mono">
                    {article.category}
                  </span>
                  
                  <div className="flex items-center gap-1 text-[10px] text-slate-500 font-medium font-mono">
                    <Clock className="w-3.5 h-3.5 text-slate-650" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-white font-sora tracking-wide mb-3 leading-snug group-hover:text-teal-light transition-colors duration-200">
                  {article.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Action footer */}
              <div className="border-t border-white/5 pt-4 flex items-center justify-between text-[10px] font-mono font-medium text-slate-500 mt-6">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-650" />
                  {article.date}
                </span>
                
                <a 
                  href={article.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-teal-light font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform uppercase tracking-wider text-[9px]"
                >
                  <span>Read Post</span>
                  <BookOpen className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}
