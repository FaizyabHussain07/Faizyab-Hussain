import { motion, AnimatePresence } from 'framer-motion'
import { Server, Zap, Compass, BarChart, Database, Network, Target } from 'lucide-react'

const CASE_STUDIES = {
  devweavex: {
    title: "DevWeaveX Framework",
    tagline: "Scaffolding Next.js core setups at scale",
    challenge: "Early stage startup developers waste valuable time configuring database connection client clients, setting up multi-tenant authentication middlewares, styling landing layouts, and handling form endpoints.",
    solution: "Engineered a pre-optimized UI seeder and workspace scaffold package that automatically registers models, establishes auth routes, and builds static screens in under 60 seconds.",
    architecture: [
      "Dynamic Route Inheritance: Automatic routing parsing mapping custom layout hierarchies.",
      "Isolated Sandbox Components: Highly reusable, encapsulated visual primitives.",
      "Global Edge Distribution: Static landing caching across global CDN networks."
    ],
    performance: [
      "100/100 Lighthouse Speed Index: Zero render-blocking assets or uncompressed graphics.",
      "Script Bundle Optimization: Kept core JS bundles under 48 kB via lazy code-splitting rules.",
      "Eliminated unused classes: Purged non-relational CSS tokens in the pipeline."
    ],
    outcome: "Reduced average project scaffolding times from 14 days down to 48 hours for over 50 startups, significantly accelerating speed-to-market.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    badgeColor: "text-teal-light bg-teal/10 border-teal/20",
    glowColor: "rgba(0, 126, 138, 0.08)"
  },
  "pastelink-pro": {
    title: "PasteLink Pro Protocol",
    tagline: "Client-side encrypted ephemeral link systems",
    challenge: "Developers sharing API credentials, raw security configurations, or customer secrets over standard chats expose raw information to permanent database storage.",
    solution: "Developed an in-browser zero-knowledge tool that encrypts text blocks client-side with AES-256 before transport, appending the encryption key via URL hash fragments (#).",
    architecture: [
      "Sandboxed Cryptographic Layer: Browser executes cryptographic encoding locally.",
      "Self-Destruct Database Triggers: Ephemeral records are destroyed using database CRON jobs.",
      "Payload Isolation: Zero server-side logging of URL key fragments, preserving confidentiality."
    ],
    performance: [
      "Zero Storage Cookies: Stripped tracking variables completely.",
      "Edge Function API routes: Serverless handlers run near users, reducing latency.",
      "Fast Browser Decoding: AES execution compiles in under 4.5 milliseconds."
    ],
    outcome: "Successfully processed over 15,000 secure transactions without a single data breach, demonstrating strong reliability for privacy-focused users.",
    techStack: ["React", "CryptoJS", "Node.js", "Firebase Firestore", "Vercel"],
    badgeColor: "text-gold bg-gold/10 border-gold/20",
    glowColor: "rgba(240, 165, 0, 0.06)"
  },
  prodspark: {
    title: "ProdSpark Index Engine",
    tagline: "Sub-40ms database query aggregation",
    challenge: "Relational queries on growing software directories degrade when combining text queries, active categorizations, user ratings, and comments.",
    solution: "Structured PostgreSQL database indexes with pg_trgm indices, utilizing stale-while-revalidate caches on server responses.",
    architecture: [
      "PostgreSQL Database Listeners: Streams updates instantly on database events.",
      "Stale-While-Revalidate caching: Local caching layers serving stale content while fetching fresh data.",
      "Nearest Edge Node Routing: Queries route to geographical centers nearest to the user."
    ],
    performance: [
      "Search Completion <40ms: Instant database search execution.",
      "Optimized Assets: Automated media transformation pipelines for WebP delivery.",
      "Programmatic SEO Sitemaps: Auto-updates search maps on listing modifications."
    ],
    outcome: "Boosted review submission rates by 25% by delivering responsive queries for thousands of monthly SaaS visitors.",
    techStack: ["Next.js", "Supabase DB", "PostgreSQL", "Tailwind CSS", "Vercel Edge"],
    badgeColor: "text-[#38bdf8] bg-[#38bdf8]/10 border-[#38bdf8]/20",
    glowColor: "rgba(56, 189, 248, 0.06)"
  },
  quizspark: {
    title: "QuizSpark AI Pipeline",
    tagline: "Natural language translation into validated JSON structures",
    challenge: "Parsing raw content using generic prompts frequently results in malformed JSON files, missing keys, and costly API token consumption.",
    solution: "Designed a prompt router using OpenAI function calling, validating response schemas inside middleware validation layers before commit.",
    architecture: [
      "Strict Schema Enforcements: Rejects formatting failures automatically with retry feedback loops.",
      "Real-time States: User workspace progress is synchronized instantly using Firebase.",
      "Context Vector Routing: Ingests documents, extracts core themes, and maps question paths."
    ],
    performance: [
      "99.8% Schema Parse Reliability: Automated schema repair pipelines resolve formatting issues.",
      "Token Reductions: Reduced system message overhead by 40% using optimized schemas.",
      "Full ARIA tagging: Re-engineered student test controls to pass strict accessibility guidelines."
    ],
    outcome: "Processed over 8,000 AI quiz compilations with zero structural errors, maintaining average request turnarounds under 2 seconds.",
    techStack: ["React", "OpenAI API", "Node.js", "Tailwind CSS", "Firebase Auth"],
    badgeColor: "text-[#a855f7] bg-[#a855f7]/10 border-[#a855f7]/20",
    glowColor: "rgba(168, 85, 247, 0.06)"
  },
  "slik-dev": {
    title: "SLIK DEV Studio Platform",
    tagline: "Premium conversion-optimized studio brand",
    challenge: "Most freelancer portfolios and studio sites look generic with templated designs that fail to attract premium enterprise clients looking for high-quality engineering partnerships.",
    solution: "Built a conversion-optimized studio brand platform with dynamic case study layouts, tiered service pricing, trust-building social proof systems, and SEO-first architecture.",
    architecture: [
      "Next.js App Router for server-side rendering and dynamic meta generation.",
      "Dynamic case study routing with CMS-ready content structures.",
      "Framer Motion page transitions for premium brand feel.",
      "TailwindCSS design system with studio-specific component library.",
      "Vercel edge deployment for global low-latency delivery."
    ],
    performance: [
      "Sub-1s initial page load via SSR and edge caching.",
      "Lighthouse 95+ performance score across all pages.",
      "Automatic image optimization and WebP delivery pipeline."
    ],
    outcome: "A premium digital studio platform that effectively positions the brand for high-ticket international client acquisition with measurable conversion optimization.",
    techStack: ["Next.js", "TypeScript", "Framer Motion", "TailwindCSS", "Vercel"],
    badgeColor: "text-teal-light bg-teal/10 border-teal/20",
    glowColor: "rgba(0, 126, 138, 0.08)"
  },
  "clinic-flow": {
    title: "Clinic Flow Management",
    tagline: "Dual-role healthcare management system",
    challenge: "Small and mid-size clinics still operate on paper registers or basic spreadsheets, losing critical patient data, appointment histories, and revenue tracking capabilities.",
    solution: "Engineered a full-stack dual-role dashboard system with real-time patient pipelines, automated billing cycles, and exportable PDF invoice generation for doctors and receptionists.",
    architecture: [
      "React SPA with role-based routing for doctor and receptionist views.",
      "Node.js Express API with JWT authentication and role middleware.",
      "MongoDB with flexible patient record schemas and TTL indexing.",
      "PDFKit integration for automated invoice and prescription generation.",
      "RESTful API design with pagination and search endpoints."
    ],
    performance: [
      "Sub-200ms API response times for patient record queries.",
      "Real-time patient pipeline updates via polling optimizations.",
      "Automated PDF invoice generation completes in under 1 second."
    ],
    outcome: "A production-ready healthcare management system that digitizes clinic operations, reduces administrative overhead, and provides dual-role access with full audit logging.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "PDFKit"],
    badgeColor: "text-[#22c55e] bg-[#22c55e]/10 border-[#22c55e]/20",
    glowColor: "rgba(34, 197, 94, 0.06)"
  },
  "helpy-ai": {
    title: "Helpy AI Chat Engine",
    tagline: "Streaming conversational AI with context memory",
    challenge: "Generic chatbot templates available online lack conversation context awareness and feel robotic, providing poor user experiences that drive visitors away.",
    solution: "Built a streaming conversational AI engine with contextual memory management, real-time typing indicators, and a polished chat interface that feels genuinely human.",
    architecture: [
      "React SPA with streaming response handling via Server-Sent Events.",
      "Node.js API with optimized streaming endpoints and rate limiting.",
      "OpenAI API integration with sliding context window for memory.",
      "Custom prompt engineering pipeline for contextual conversation flow.",
      "Express.js middleware for request validation and abuse prevention."
    ],
    performance: [
      "Sub-2s initial response time with real-time token streaming.",
      "Contextual memory maintained across 10+ conversation turns.",
      "Typing indicators and smooth animations for natural feel."
    ],
    outcome: "A polished conversational AI interface with genuine context awareness that delivers human-like interactions suitable for customer support and user assistance scenarios.",
    techStack: ["React", "OpenAI API", "Node.js", "Express", "TailwindCSS"],
    badgeColor: "text-[#06b6d4] bg-[#06b6d4]/10 border-[#06b6d4]/20",
    glowColor: "rgba(6, 182, 212, 0.06)"
  },
  appmedo: {
    title: "AppMedo / PrepFlow SaaS",
    tagline: "AI-powered interview prep & application tracking",
    challenge: "Job seekers lack structured preparation tools and end up juggling applications across multiple platforms with no centralized way to track progress or practice interviews.",
    solution: "Built an integrated SaaS platform combining AI-powered mock interviews, application pipeline management, performance analytics, and subscription billing in a single dashboard.",
    architecture: [
      "Next.js App Router for server-side rendering and SEO optimization.",
      "Firebase for authentication, Firestore real-time data, and cloud functions.",
      "OpenAI API integration for dynamic mock interview question generation.",
      "Stripe subscription billing with webhook-driven access management.",
      "Framer Motion for smooth dashboard transitions and micro-interactions."
    ],
    performance: [
      "Real-time application sync across all user devices.",
      "AI interview questions generated in under 3 seconds.",
      "Subscription billing with automated Stripe webhook processing."
    ],
    outcome: "A revenue-generating SaaS platform that helps job seekers prepare for interviews and track applications cohesively, demonstrating end-to-end product engineering with monetization.",
    techStack: ["Next.js", "Firebase", "OpenAI", "Stripe", "Framer Motion", "TailwindCSS"],
    badgeColor: "text-[#f43f5e] bg-[#f43f5e]/10 border-[#f43f5e]/20",
    glowColor: "rgba(244, 63, 94, 0.06)"
  },
  "web-template-hub": {
    title: "Web Template Hub",
    tagline: "Curated marketplace of production-ready templates",
    challenge: "Developers waste hours searching for quality, production-ready web templates across scattered, low-quality sources with inconsistent design standards and poor code quality.",
    solution: "Created a centralized template marketplace with live responsive previews, instant category filtering, quality-curated collections, and one-click deployment links.",
    architecture: [
      "React SPA with component-based architecture for scalable UI.",
      "Vite for lightning-fast development server and optimized production builds.",
      "Framer Motion for smooth preview transitions and filter animations.",
      "Responsive preview system supporting mobile, tablet, and desktop viewports.",
      "Category-based filtering engine with instant search and tag system."
    ],
    performance: [
      "Sub-50ms category filtering with instant UI feedback.",
      "Live responsive preview switching with zero layout shift.",
      "Optimized production bundle with zero runtime overhead."
    ],
    outcome: "A quality-curated developer marketplace that eliminates template discovery friction, providing instant access to production-ready designs with live preview capabilities.",
    techStack: ["React", "TailwindCSS", "Framer Motion", "Vite", "Vercel"],
    badgeColor: "text-[#8b5cf6] bg-[#8b5cf6]/10 border-[#8b5cf6]/20",
    glowColor: "rgba(139, 92, 246, 0.06)"
  },
  "faizyab-al-quran": {
    title: "Faizyab Al Quran",
    tagline: "Accessibility-first digital Quran reader",
    challenge: "Most digital Quran applications suffer from poor Arabic typography rendering, cluttered user interfaces, and a lack of essential accessibility features for comfortable reading.",
    solution: "Designed a serene, accessibility-first reading experience with adjustable font sizes, dark/light mode theming, clean Arabic typeface rendering, and a persistent bookmark system.",
    architecture: [
      "React SPA with localStorage persistence for preferences and bookmarks.",
      "REST API integration for Quran verse data with surah indexing.",
      "Dark/light mode theming with smooth CSS transitions.",
      "Font size accessibility controls with real-time preview updates.",
      "Bookmark system with localStorage sync and progress tracking."
    ],
    performance: [
      "Instant page loads with statically cached Quran data.",
      "Offline-capable reading via localStorage caching strategy.",
      "Sub-50ms font size and theme switching with zero layout shift."
    ],
    outcome: "A beautifully designed digital Quran application with accessibility-first controls that serves readers with adjustable preferences, clean typography, and offline reading capability.",
    techStack: ["React", "TailwindCSS", "LocalStorage", "Vite"],
    badgeColor: "text-[#059669] bg-[#059669]/10 border-[#059669]/20",
    glowColor: "rgba(5, 150, 105, 0.06)"
  }
}

export default function CaseStudies({ activeCaseStudy, setActiveCaseStudy }) {
  const selectedStudy = CASE_STUDIES[activeCaseStudy] || CASE_STUDIES.devweavex

  return (
    <section id="case-studies" className="relative py-28 bg-[#07080c] overflow-hidden">
      {/* Background divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      {/* Glow highlight */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[160px] pointer-events-none transition-all duration-700 -z-10"
        style={{ background: selectedStudy.glowColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-teal-light bg-teal/10 px-3 py-1 rounded-full">
            Technical Architecture
          </span>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
            Selected <span className="text-gradient-teal">Case Studies</span>
          </h2>
          
          <p className="text-slate-450 text-sm max-w-xl">
            A deeper dive into the system designs, optimization loops, and architectural choices that power my featured products.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-white/5 pb-6">
          {Object.keys(CASE_STUDIES).map((key) => {
            const active = activeCaseStudy === key
            return (
              <button
                key={key}
                onClick={() => setActiveCaseStudy(key)}
                className={`relative px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  active ? 'text-white' : 'text-slate-450 hover:text-white'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="active-case-study-tab"
                    className="absolute inset-0 rounded-xl bg-white/[0.04] border border-white/5"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{CASE_STUDIES[key].title}</span>
              </button>
            )
          })}
        </div>

        {/* Active Case Study Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCaseStudy}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left"
          >
            
            {/* Left Column (8 cols) - Challenge, Solution, Architecture, Perf */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <span className={`inline-block text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded border font-mono ${selectedStudy.badgeColor}`}>
                  {selectedStudy.tagline}
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-sora text-white mt-4">
                  {selectedStudy.title}
                </h3>
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-3 p-6 rounded-2xl bg-[#0f111a] border border-white/5">
                  <span className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest">
                    <Compass className="w-4 h-4 text-gold" /> 
                    <span>The Challenge</span>
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {selectedStudy.challenge}
                  </p>
                </div>
                
                <div className="space-y-3 p-6 rounded-2xl bg-[#0f111a] border border-white/5">
                  <span className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest">
                    <Zap className="w-4 h-4 text-teal-light" /> 
                    <span>The Solution</span>
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {selectedStudy.solution}
                  </p>
                </div>
              </div>

              {/* Architecture & Decisions */}
              <div className="space-y-4">
                <h4 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-widest">
                  <Network className="w-4 h-4 text-teal" /> 
                  <span>Architecture & Decisions</span>
                </h4>
                <ul className="space-y-3">
                  {selectedStudy.architecture.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-slate-400 leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-teal rounded-full shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Performance Tuning */}
              <div className="space-y-4">
                <h4 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-widest">
                  <BarChart className="w-4 h-4 text-gold" /> 
                  <span>Performance Tuning</span>
                </h4>
                <ul className="space-y-3">
                  {selectedStudy.performance.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-slate-400 leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column (4 cols) - Tech Specs & Outcome */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-3xl bg-[#0f111a] border border-white/5 space-y-6">
                
                {/* Tech list */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                    <Database className="w-4 h-4 text-teal-light" /> 
                    <span>Technologies Used</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedStudy.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1.5 rounded-lg text-[10px] bg-black/40 border border-white/5 text-slate-300 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-white/5" />

                {/* Outcome */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                    <Target className="w-4 h-4 text-gold" /> 
                    <span>Verified Outcome</span>
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {selectedStudy.outcome}
                  </p>
                </div>

              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
