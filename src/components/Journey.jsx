import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Rocket, Terminal, Code2 } from 'lucide-react'

const MILESTONES = [
  {
    year: "2024 – 2026",
    title: "SMIT Engineering & Certification",
    subtitle: "Saylani Mass IT Training",
    icon: <GraduationCap className="w-4 h-4 text-teal-light" />,
    description: "Successfully completed intensive Full-Stack Web Development training, focusing on HTML5, CSS3 layout rules, JavaScript ES6+ algorithms, and asynchronous database connections.",
    highlights: [
      "Recipient of SMIT Programming Excellence Recognition",
      "Earned top scores in structured backend coding hackathons under strict time limits"
    ],
    active: true
  },
  {
    year: "2024 – Present",
    title: "Freelance Software Engineering",
    subtitle: "Remote Developer Contracts",
    icon: <Code2 className="w-4 h-4 text-gold" />,
    description: "Shipped digital products, SaaS templates, and landing pages for startup clients globally. Established a reputation for high visual fidelity and clean component codes.",
    highlights: [
      "Delivered 100+ fully responsive web applications and landing interfaces",
      "Configured custom boilerplate configurations, saving clients significant project setup time"
    ],
    active: false
  },
  {
    year: "2025",
    title: "Exploring AI Integration Models",
    subtitle: "AI Systems Engineering & Research",
    icon: <Terminal className="w-4 h-4 text-[#38bdf8]" />,
    description: "Pivoted focus to generative AI and LLM APIs, building automated workflow pipelines, vector embeddings directories, and interactive prompt scaffolding systems.",
    highlights: [
      "Engineered structured prompt routing layers that output validated JSON payloads",
      "Integrated secure client-side cryptography protocols to secure ephemeral data sharing"
    ],
    active: false
  },
  {
    year: "2025 – Present",
    title: "DevWeaveX Frameworks",
    subtitle: "Founder & Lead Architect",
    icon: <Rocket className="w-4 h-4 text-[#ec4899]" />,
    description: "Founded an open-source template project aimed at providing developers with highly optimized Next.js boilerplates and responsive CSS layouts.",
    highlights: [
      "Curated component frameworks designed to achieve under 1-second load times",
      "Provided mentorship to developers learning modern Tailwind utility standards"
    ],
    active: false
  },
  {
    year: "Aug – Sep 2025",
    title: "Corporate Engineering Intern",
    subtitle: "Kohaq (Karachi Office)",
    icon: <Briefcase className="w-4 h-4 text-[#22c55e]" />,
    description: "Gained hands-on experience working inside an enterprise corporate environment, contributing to production code repositories and database management.",
    highlights: [
      "Boosted release cycles by 20% by implementing clean Git branch management standards",
      "Helped decrease front-end interface QA reports by 15% via modular component refactoring"
    ],
    active: false
  }
]

export default function Journey() {
  return (
    <section id="journey" className="relative py-28 bg-[#07080c] overflow-hidden">
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
            Chronological Career
          </motion.span>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
            My <span className="text-gradient-teal">Journey</span>
          </h2>
          
          <p className="text-slate-455 text-sm max-w-xl">
            A history of learning web architectures, shipping freelance projects, interning at corporate firms, and building developer scaffolding systems.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central/left line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-px journey-line pointer-events-none" />

          <div className="space-y-16">
            {MILESTONES.map((item, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div 
                  key={idx} 
                  className={`flex flex-col md:flex-row relative items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Marker node */}
                  <div className={`absolute left-6 md:left-1/2 w-4 h-4 rounded-full -translate-x-1.5 md:-translate-x-2 z-20 ${
                    item.active 
                      ? 'journey-node-active' 
                      : idx === 1 ? 'journey-node-gold' : 'journey-node bg-slate-card'
                  }`} />

                  {/* Left spacing for desktop layout */}
                  <div className="w-full md:w-1/2" />

                  {/* Timeline block */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                      isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                    }`}
                  >
                    
                    {/* Year badge */}
                    <span className="inline-block text-[10px] font-mono font-bold text-teal-light bg-teal/10 border border-teal/20 px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                      {item.year}
                    </span>

                    {/* Milestone card */}
                    <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/5 hover:border-teal/20 transition-all duration-300 relative text-left">
                      <div className="flex items-center gap-3.5 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white font-sora">
                            {item.title}
                          </h3>
                          <p className="text-xs text-slate-500 font-semibold mt-0.5">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed mb-6">
                        {item.description}
                      </p>

                      <ul className="space-y-2.5 border-t border-white/5 pt-4">
                        {item.highlights.map((high, hIdx) => (
                          <li key={hIdx} className="text-[11px] text-slate-350 flex items-start gap-2 leading-relaxed">
                            <span className="text-teal font-extrabold shrink-0 mt-0.5">•</span>
                            <span>{high}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </motion.div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
