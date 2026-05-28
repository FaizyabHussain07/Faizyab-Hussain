import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ExternalLink, Filter, ChevronDown } from 'lucide-react'

export default function Vault() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")
  const [visibleCount, setVisibleCount] = useState(6)

  const archiveProjects = [
    {
      title: "Faizyab Al-Quran",
      desc: "Digital Quran learning portal with dynamic translations, audio recitation features, and translation lookups.",
      category: "fullstack",
      tech: "React · Tailwind",
      link: "https://faizyab-al-quran.vercel.app/"
    },
    {
      title: "Help Hub AI",
      desc: "AI-powered productivity assistance interface designed to streamline task management and prompt workflows.",
      category: "ai",
      tech: "OpenAI · React",
      link: "https://helpy-ai-project-final.vercel.app/"
    },
    {
      title: "Prepflow AI Platform",
      desc: "AI-native SaaS application designed to automate corporate testing, notes synthesis, and task scheduling.",
      category: "ai",
      tech: "SaaS · Node.js",
      link: "https://app-bo9bgt5jn1tu.appmedo.com/"
    },
    {
      title: "ClinicFlow",
      desc: "Comprehensive clinic database management system handles patient records, status history, and bookings.",
      category: "fullstack",
      tech: "Next.js · Supabase",
      link: "https://clinic-flow-managemnet.vercel.app/"
    },
    {
      title: "Wibba Social Feed",
      desc: "Social messaging network application complete with image rendering feeds and user comment updates.",
      category: "webapp",
      tech: "React · Firebase",
      link: "https://wibba.netlify.app/"
    },
    {
      title: "Custom QR Code Master",
      desc: "Dynamic SVG/PNG vector QR code generator with styling configurations and custom embedded icons.",
      category: "webapp",
      tech: "JavaScript · Tailwind",
      link: "https://faizyabhussain07.github.io/Bar_QR_code-generator/"
    },
    {
      title: "Smart Parking System",
      desc: "Slot tracking logistics software tracking arrivals and space vacancies in modern lots.",
      category: "fullstack",
      tech: "JS · LocalStorage",
      link: "https://faizyabhussain07.github.io/Parking_Managment_System/"
    },
    {
      title: "Marksheet Pro",
      desc: "Instant result calculating engine generating detailed performance records for classes.",
      category: "webapp",
      tech: "HTML5 · CSS3 · JS",
      link: "https://faizyabhussain07.github.io/Marksheet/"
    },
    {
      title: "Advanced To-Do App",
      desc: "Clean, high-performance project task scheduling suite with offline localStorage persistence.",
      category: "webapp",
      tech: "React · Tailwind",
      link: "https://faizyabhussain07.github.io/advance-to-do-web/"
    },
    {
      title: "Zayka Restaurant Landing",
      desc: "Premium single-page web template for fine dining restaurant complete with reservation logs.",
      category: "landing",
      tech: "HTML · CSS · JS",
      link: "https://github.com/faizyabhussain07"
    },
    {
      title: "Woodcraft Portfolio",
      desc: "Modern visual showcase template showing carpentry design assets for luxury builders.",
      category: "landing",
      tech: "Tailwind · JavaScript",
      link: "https://github.com/faizyabhussain07"
    },
    {
      title: "Beauty Glow Catalog",
      desc: "Aesthetic beauty care booking flow presenting catalog selections and calendar schedules.",
      category: "landing",
      tech: "HTML5 · CSS3 · GSAP",
      link: "https://github.com/faizyabhussain07"
    },
    {
      title: "Dream House Listings",
      desc: "Real estate catalog portal presenting interactive house specifications and inquiry triggers.",
      category: "landing",
      tech: "Tailwind · HTML",
      link: "https://github.com/faizyabhussain07"
    },
    {
      title: "NexTech Startup",
      desc: "Modern investor presentation template built for rapid landing conversion and tech launches.",
      category: "landing",
      tech: "Vite · Tailwind",
      link: "https://github.com/faizyabhussain07"
    },
    {
      title: "Medical Care Portal",
      desc: "Responsive healthcare agency layout showing practitioner details and scheduler panels.",
      category: "landing",
      tech: "React · CSS",
      link: "https://github.com/faizyabhussain07"
    }
  ]

  const filters = [
    { label: "All", value: "all" },
    { label: "Fullstack", value: "fullstack" },
    { label: "Web Apps", value: "webapp" },
    { label: "Landing Pages", value: "landing" },
    { label: "AI Tools", value: "ai" }
  ]

  const filteredProjects = archiveProjects.filter((project) => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = activeFilter === "all" || project.category === activeFilter
    return matchesSearch && matchesFilter
  })

  const currentVisible = filteredProjects.slice(0, visibleCount)

  return (
    <section id="vault" className="py-28 px-6 lg:px-12 bg-white/[0.01] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12 text-left">
          <span className="text-teal text-[10px] font-bold uppercase tracking-[0.25em]">Engineering Vault</span>
          <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter mt-4 text-silver">
            Project <span className="text-teal">Archive</span>
          </h2>
          <p className="text-muted text-xs mt-3">
            Searchable log of supplementary builds, design templates, and technical utility programs.
          </p>
        </div>

        {/* Search & Filters Controller */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
          <div className="flex flex-wrap gap-2" id="filter-tabs">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => {
                  setActiveFilter(f.value)
                  setVisibleCount(6)
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                  activeFilter === f.value
                    ? 'bg-teal/15 border-teal/40 text-silver'
                    : 'bg-transparent border-white/5 text-muted hover:border-teal/20 hover:text-silver'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="relative flex-1 max-w-xs sm:ml-auto">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted/40 pointer-events-none" />
            <input
              type="text"
              placeholder="Search archive..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setVisibleCount(6)
              }}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs font-medium bg-slate-dark/60 border border-white/5 text-silver outline-none focus:border-teal/40 focus:bg-slate-dark/80 transition-all placeholder-muted/40"
            />
          </div>
        </div>

        {/* Vault Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {currentVisible.map((project, idx) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-effect rounded-2xl p-6 hover:border-teal/20 transition-all duration-300 relative group flex flex-col justify-between text-left"
              >
                <div>
                  <h4 className="text-sm font-black text-silver mb-2 group-hover:text-teal transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-[11px] text-muted leading-relaxed mb-4">
                    {project.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                  <div className="flex gap-2">
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-teal/5 border border-teal/15 text-teal uppercase tracking-wider font-bold">
                      {project.category}
                    </span>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-muted">
                      {project.tech}
                    </span>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-teal hover:text-teal-light transition-colors inline-flex items-center gap-1.5"
                  >
                    View <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {filteredProjects.length > visibleCount && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="bg-transparent border border-white/10 hover:border-teal/30 hover:bg-white/5 text-muted hover:text-silver px-8 py-3.5 rounded-2xl text-xs font-bold inline-flex items-center gap-2 transition-all"
            >
              Load More Projects
              <ChevronDown className="w-4 h-4" />
            </button>
            <p className="text-[10px] text-muted/40 mt-3 font-mono">
              Showing {currentVisible.length} of {filteredProjects.length} projects
            </p>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-sm text-muted">No projects found matching the search criteria.</p>
          </div>
        )}

      </div>
    </section>
  )
}
