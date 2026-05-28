import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, Lock, Terminal, Monitor, Sparkles, MessageSquare, BarChart3, Layout, BookOpen, Users, FileText, ThumbsUp, Smartphone, Tablet, ChevronRight, Zap, Database, Cloud, Code2, Cpu, Globe, Layers, Shield, Palette } from 'lucide-react'

/* ─────────────────────────────────────────────
   9 REAL PROJECTS — each with unique visualizer
   ───────────────────────────────────────────── */

const PROJECTS = [
  /* ── FEATURED ─────────────────────────── */
  {
    id: 'slik-dev',
    title: 'SLIK DEV',
    tagline: 'Premium Digital Studio & Agency Platform',
    category: 'featured',
    description: 'A premium digital studio website showcasing full-stack development services, product builds, and SaaS consulting — designed to convert high-ticket international clients.',
    problem: 'Most freelancer portfolios look generic and fail to attract premium enterprise clients.',
    solution: 'Built a conversion-optimized studio brand with case-study layouts, service tiers, and trust-building social proof systems.',
    tech: ['Next.js', 'TypeScript', 'Framer Motion', 'TailwindCSS', 'Vercel'],
    features: ['Conversion-optimized landing pages', 'Dynamic case study system', 'Premium service tier pricing', 'SEO-first architecture'],
    highlight: 'Premium Studio Branding',
    demo: 'https://slik-dev.vercel.app/',
    github: 'https://github.com/faizyabhussain07',
    visualType: 'studio',
    accent: '#007e8a',
  },
  {
    id: 'clinic-flow',
    title: 'CLINIC FLOW',
    tagline: 'Healthcare Management System',
    category: 'featured',
    description: 'A full-stack clinic management platform with role-based dashboards for doctors and receptionists — handling patient records, appointments, billing, and PDF invoice generation.',
    problem: 'Small clinics operate on paper registers, losing patient data and revenue tracking capabilities.',
    solution: 'Engineered a dual-role dashboard with real-time patient pipelines, automated billing, and exportable PDF invoices.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'PDFKit'],
    features: ['Doctor & Receptionist dashboards', 'Patient record management', 'Automated billing system', 'PDF invoice generation'],
    highlight: 'Enterprise Healthcare SaaS',
    demo: 'https://github.com/faizyabhussain07',
    github: 'https://github.com/faizyabhussain07',
    visualType: 'dashboard',
    accent: '#22c55e',
  },
  {
    id: 'quizspark',
    title: 'QUIZ SPARK AI',
    tagline: 'Adaptive AI Assessment Engine',
    category: 'featured',
    description: 'An intelligent platform that auto-generates adaptive quiz sets from raw content using AI, with real-time scoring, student analytics, and curriculum alignment.',
    problem: 'Educators spend hours manually drafting quiz papers and scoring criteria for each student.',
    solution: 'Created an AI pipeline that extracts text context, builds structured question sets, scores submissions, and generates feedback reports.',
    tech: ['React', 'Node.js', 'OpenAI API', 'Firebase', 'Chart.js', 'TailwindCSS'],
    features: ['AI-powered question generation', 'Adaptive difficulty scaling', 'Real-time scoring engine', 'Student analytics dashboard'],
    highlight: 'EdTech AI Integration',
    demo: 'https://quiz-spark-ai.base44.app/',
    github: 'https://github.com/faizyabhussain07',
    visualType: 'quiz',
    accent: '#a855f7',
  },

  /* ── FULL-STACK SYSTEMS ───────────────── */
  {
    id: 'pastelink-pro',
    title: 'PASTELINK PRO',
    tagline: 'Zero-Knowledge Encrypted Sharing',
    category: 'fullstack',
    description: 'A zero-tracking pastebin alternative with client-side AES-256 encryption, auto-expiry timers, password protection, and read-receipt analytics for secure code sharing.',
    problem: 'Standard chat channels expose private code snippets permanently, risking data leakage.',
    solution: 'Designed zero-knowledge architecture encrypting snippets client-side and destroying them post-expiry.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'CryptoJS', 'TailwindCSS'],
    features: ['Client-side AES-256 encryption', 'Self-destruct timer system', 'Password protection gates', 'Read receipt analytics'],
    highlight: 'Zero-Knowledge Security',
    demo: 'https://paste-link-pro.vercel.app/',
    github: 'https://github.com/faizyabhussain07/PasteLink-Pro',
    visualType: 'terminal',
    accent: '#f0a500',
  },
  {
    id: 'prodspark',
    title: 'PRODSPARK',
    tagline: 'AI-First Product Planner',
    category: 'fullstack',
    description: 'An AI-powered SaaS workspace helping product teams break down objectives into detailed user stories, configure priority metrics, and generate roadmap schedules.',
    problem: 'Product founders lose momentum tracking goals across messy spreadsheets and project boards.',
    solution: 'Engineered an AI planner that parses raw text objectives into structured kanban backlogs with velocity tracking.',
    tech: ['React', 'Firebase', 'OpenAI', 'Framer Motion', 'TailwindCSS'],
    features: ['AI objective parser', 'Dynamic roadmap builder', 'Priority scoring engine', 'Team velocity analytics'],
    highlight: 'AI-First Workspace',
    demo: 'https://prodspark.vercel.app/',
    github: 'https://github.com/faizyabhussain07/ProdSpark',
    visualType: 'upvote',
    accent: '#38bdf8',
  },

  /* ── AI & AUTOMATION ──────────────────── */
  {
    id: 'helpy-ai',
    title: 'HELPY AI',
    tagline: 'Conversational AI Assistant',
    category: 'ai',
    description: 'A responsive AI chatbot interface with contextual conversation memory, streaming responses, and a polished chat UI — built for real-time user assistance.',
    problem: 'Generic chatbot templates lack conversation context and feel robotic to end users.',
    solution: 'Built a streaming conversational engine with context memory, typing indicators, and a premium chat experience.',
    tech: ['React', 'OpenAI API', 'Node.js', 'Express.js', 'TailwindCSS'],
    features: ['Streaming AI responses', 'Context-aware memory', 'Typing indicators & animations', 'Conversation export system'],
    highlight: 'Conversational AI Engine',
    demo: 'https://helpy-ai.vercel.app/',
    github: 'https://github.com/faizyabhussain07',
    visualType: 'chat',
    accent: '#06b6d4',
  },
  {
    id: 'appmedo',
    title: 'APPMEDO / PREPFLOW',
    tagline: 'AI SaaS Launch Platform',
    category: 'ai',
    description: 'A SaaS platform combining AI-powered interview preparation with application tracking — featuring mock interviews, performance analytics, and conversion funnels.',
    problem: 'Job seekers lack structured preparation tools and lose track of applications across platforms.',
    solution: 'Built an integrated SaaS combining AI mock interviews, application pipelines, and performance metrics in one dashboard.',
    tech: ['React', 'Next.js', 'OpenAI', 'Firebase', 'Stripe', 'TailwindCSS'],
    features: ['AI mock interview engine', 'Application pipeline tracker', 'Performance analytics graphs', 'Subscription billing system'],
    highlight: 'SaaS Revenue Platform',
    demo: 'https://github.com/faizyabhussain07',
    github: 'https://github.com/faizyabhussain07',
    visualType: 'metrics',
    accent: '#f43f5e',
  },

  /* ── MODERN TOOLS ─────────────────────── */
  {
    id: 'web-template-hub',
    title: 'WEB TEMPLATE HUB',
    tagline: 'Responsive Template Marketplace',
    category: 'tools',
    description: 'A curated marketplace of production-ready web templates with live responsive previews, category filtering, and one-click deployment — built for developers and designers.',
    problem: 'Developers waste hours searching for quality templates across scattered, low-quality sources.',
    solution: 'Created a centralized template hub with live responsive previews, instant filtering, and quality-curated collections.',
    tech: ['React', 'TailwindCSS', 'Framer Motion', 'Vite', 'Vercel'],
    features: ['Live responsive previews', 'Category-based filtering', 'One-click deployment links', 'Quality-curated collections'],
    highlight: 'Developer Marketplace',
    demo: 'https://github.com/faizyabhussain07',
    github: 'https://github.com/faizyabhussain07',
    visualType: 'responsive',
    accent: '#8b5cf6',
  },
  {
    id: 'faizyab-al-quran',
    title: 'FAIZYAB AL QURAN',
    tagline: 'Digital Quran Reading Experience',
    category: 'tools',
    description: 'A beautifully designed digital Quran application with clean Arabic typography, translation support, bookmark system, and accessibility-first reading controls.',
    problem: 'Most digital Quran apps have poor typography, cluttered UIs, and lack accessibility features.',
    solution: 'Designed a serene, accessibility-first reading experience with adjustable fonts, dark mode, and clean Arabic rendering.',
    tech: ['React', 'REST API', 'TailwindCSS', 'LocalStorage', 'Vite'],
    features: ['Clean Arabic typography', 'Translation toggle system', 'Bookmark & progress tracking', 'Accessibility reading controls'],
    highlight: 'Accessible Reading App',
    demo: 'https://github.com/faizyabhussain07',
    github: 'https://github.com/faizyabhussain07',
    visualType: 'reader',
    accent: '#059669',
  },
]

const CATEGORIES = [
  { key: 'all', label: 'All Projects' },
  { key: 'featured', label: 'Featured' },
  { key: 'fullstack', label: 'Full-Stack Systems' },
  { key: 'ai', label: 'AI & Automation' },
  { key: 'tools', label: 'Modern Tools' },
]

const TECH_ECOSYSTEM = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Express.js',
  'MongoDB', 'Firebase', 'PostgreSQL', 'OpenAI', 'TailwindCSS',
  'Framer Motion', 'Docker', 'Vercel', 'Stripe', 'JWT',
  'Vite', 'CryptoJS', 'Chart.js', 'PDFKit', 'REST APIs',
]

/* ─────────────────────────────────────────────
   UNIQUE VISUALIZER COMPONENTS
   ───────────────────────────────────────────── */

function StudioVisualizer() {
  const services = ['Web Development', 'SaaS Products', 'AI Integration', 'UI/UX Design']
  return (
    <div className="w-full space-y-3">
      {services.map((s, i) => (
        <motion.div
          key={s}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal/20 to-teal/5 border border-teal/20 flex items-center justify-center shrink-0 group-hover:border-teal/50 transition-colors">
            <ChevronRight className="w-3.5 h-3.5 text-teal-light" />
          </div>
          <div className="flex-1 h-10 rounded-lg bg-[#131622] border border-white/5 flex items-center px-3 group-hover:border-teal/20 transition-colors">
            <span className="text-[11px] text-slate-300 font-medium">{s}</span>
            <span className="ml-auto text-[8px] text-teal-light font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Active</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function DashboardVisualizer() {
  const [role, setRole] = useState('doctor')
  const doctorData = [
    { label: 'Patients Today', val: '24' },
    { label: 'Pending Reports', val: '7' },
    { label: 'Appointments', val: '12' },
  ]
  const receptionistData = [
    { label: 'Check-ins', val: '31' },
    { label: 'Invoices Sent', val: '18' },
    { label: 'Queue Length', val: '5' },
  ]
  const data = role === 'doctor' ? doctorData : receptionistData
  return (
    <div className="w-full space-y-3">
      <div className="flex gap-1 p-0.5 bg-[#131622] rounded-lg border border-white/5 w-fit">
        {['doctor', 'receptionist'].map(r => (
          <button
            key={r}
            onClick={() => setRole(r)}
            className={`px-3 py-1.5 rounded-md text-[9px] font-bold uppercase tracking-wider transition-all ${role === r ? 'bg-teal/20 text-teal-light border border-teal/30' : 'text-slate-500 hover:text-slate-300'}`}
          >
            {r === 'doctor' ? '🩺 Doctor' : '📋 Receptionist'}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {data.map((d, i) => (
          <motion.div
            key={`${role}-${i}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            className="bg-[#131622] border border-white/5 rounded-xl p-3 text-center"
          >
            <div className="text-lg font-black text-white leading-none">{d.val}</div>
            <div className="text-[7px] text-slate-500 uppercase tracking-wider mt-1 font-bold">{d.label}</div>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-2 text-[8px] text-slate-500">
        <FileText className="w-3 h-3" />
        <span className="font-mono">PDF invoices auto-generated on checkout</span>
      </div>
    </div>
  )
}

function QuizVisualizer() {
  const [selected, setSelected] = useState(null)
  const question = "What scheduling strategy does React Fiber use?"
  const options = [
    { text: "Recursive tree traversal", correct: false },
    { text: "Incremental time-sliced scheduling", correct: true },
    { text: "Direct DOM diffing", correct: false },
  ]
  return (
    <div className="w-full space-y-3 text-left">
      <div className="p-3 bg-[#131622] border border-white/5 rounded-xl">
        <span className="text-[8px] text-purple-400 font-bold uppercase tracking-wider">AI Generated</span>
        <p className="text-[11px] text-slate-300 mt-1 font-medium">{question}</p>
      </div>
      <div className="space-y-2">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-full px-3 py-2.5 rounded-lg border text-left text-[10px] font-medium transition-all ${
              selected === i
                ? opt.correct
                  ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400'
                  : 'border-red-500/50 bg-red-500/10 text-red-400'
                : 'border-white/5 text-slate-400 hover:border-white/10 hover:text-slate-300'
            }`}
          >
            <span className="text-slate-600 mr-2">{String.fromCharCode(65 + i)}.</span>
            {opt.text}
          </button>
        ))}
      </div>
      {selected !== null && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-[9px] font-bold px-2 py-1 rounded ${options[selected].correct ? 'text-emerald-400' : 'text-red-400'}`}
        >
          {options[selected].correct ? '✓ Correct! React Fiber uses cooperative scheduling.' : '✗ Try again — think about time slicing.'}
        </motion.div>
      )}
    </div>
  )
}

function TerminalVisualizer() {
  const [countdown, setCountdown] = useState(59)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCountdown(prev => (prev <= 0 ? 59 : prev - 1))
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [])

  return (
    <div className="w-full space-y-2 font-mono text-[10px] bg-black/40 rounded-xl p-4 border border-white/5">
      <div className="flex items-center gap-2 text-gold">
        <Lock className="w-3 h-3" />
        <span className="font-bold">AES-256 Encrypted Snippet</span>
      </div>
      <div className="text-slate-500 leading-relaxed">
        <span className="text-teal-light">const</span> apiKey = <span className="text-gold">"sk-••••••••••••••••"</span>;
      </div>
      <div className="text-slate-500 leading-relaxed">
        <span className="text-teal-light">const</span> dbUrl = <span className="text-gold">"mongodb+srv://••••"</span>;
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-white/5 mt-2">
        <span className="text-[8px] text-red-400 font-bold uppercase tracking-wider">
          Self-destructs in {countdown}s
        </span>
        <span className="text-[8px] text-emerald-500 font-bold">● ENCRYPTED</span>
      </div>
    </div>
  )
}

function UpvoteVisualizer() {
  const [votes, setVotes] = useState([42, 28, 19])
  const items = ['AI Task Parser', 'Roadmap Builder', 'Sprint Tracker']
  return (
    <div className="w-full space-y-2">
      {items.map((item, i) => (
        <div key={item} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#131622] border border-white/5 hover:border-white/10 transition-colors">
          <button
            onClick={() => {
              const next = [...votes]
              next[i] += 1
              setVotes(next)
            }}
            className="flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg bg-[#0a0c14] border border-white/5 hover:border-sky-500/30 hover:bg-sky-500/5 transition-all group"
          >
            <ThumbsUp className="w-3 h-3 text-slate-500 group-hover:text-sky-400 transition-colors" />
            <span className="text-[10px] font-bold text-slate-300">{votes[i]}</span>
          </button>
          <div>
            <div className="text-[11px] text-slate-200 font-semibold">{item}</div>
            <div className="text-[8px] text-slate-500 font-mono">Click to upvote</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function ChatVisualizer() {
  const [msgs, setMsgs] = useState([
    { from: 'user', text: 'How do I optimize React renders?' },
    { from: 'ai', text: 'Use React.memo, useMemo, and useCallback for expensive computations. Split components and implement lazy loading for code-split bundles.' },
  ])
  const [input, setInput] = useState('')
  return (
    <div className="w-full space-y-3">
      <div className="space-y-2 max-h-36 overflow-y-auto pr-1 custom-scrollbar">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-3 py-2 rounded-xl text-[10px] leading-relaxed ${
              m.from === 'user'
                ? 'bg-teal/15 text-teal-light border border-teal/20 rounded-br-sm'
                : 'bg-[#131622] text-slate-300 border border-white/5 rounded-bl-sm'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && input.trim()) {
              setMsgs(prev => [...prev, { from: 'user', text: input }, { from: 'ai', text: 'Processing your query with contextual memory...' }])
              setInput('')
            }
          }}
          placeholder="Ask Helpy AI..."
          className="flex-1 bg-[#131622] border border-white/5 rounded-lg px-3 py-2 text-[10px] text-slate-300 placeholder-slate-600 focus:outline-none focus:border-cyan-500/30"
        />
        <button className="px-3 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-400 hover:bg-cyan-500/20 transition-colors">
          <MessageSquare className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}

function MetricsVisualizer() {
  const metrics = [
    { label: 'MRR', value: '$4.2k', change: '+18%', up: true },
    { label: 'Users', value: '1,240', change: '+32%', up: true },
    { label: 'Churn', value: '2.1%', change: '-0.5%', up: false },
  ]
  const bars = [65, 78, 52, 89, 94, 71, 86]
  return (
    <div className="w-full space-y-3">
      <div className="grid grid-cols-3 gap-2">
        {metrics.map(m => (
          <div key={m.label} className="bg-[#131622] border border-white/5 rounded-xl p-2.5 text-center">
            <div className="text-[8px] text-slate-500 uppercase tracking-wider font-bold">{m.label}</div>
            <div className="text-sm font-black text-white">{m.value}</div>
            <div className={`text-[8px] font-bold ${m.up ? 'text-emerald-400' : 'text-rose-400'}`}>{m.change}</div>
          </div>
        ))}
      </div>
      <div className="bg-[#131622] border border-white/5 rounded-xl p-3">
        <div className="text-[8px] text-slate-500 font-bold uppercase tracking-wider mb-2">Weekly Revenue</div>
        <div className="flex items-end gap-1.5 h-16">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="flex-1 bg-gradient-to-t from-rose-500/40 to-rose-500/10 rounded-t border-t border-rose-500/50"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function ResponsiveVisualizer() {
  const [view, setView] = useState('desktop')
  const views = [
    { key: 'desktop', icon: Monitor, w: '100%' },
    { key: 'tablet', icon: Tablet, w: '70%' },
    { key: 'mobile', icon: Smartphone, w: '40%' },
  ]
  return (
    <div className="w-full space-y-3">
      <div className="flex gap-1 p-0.5 bg-[#131622] rounded-lg border border-white/5 w-fit">
        {views.map(v => {
          const Icon = v.icon
          return (
            <button
              key={v.key}
              onClick={() => setView(v.key)}
              className={`px-3 py-1.5 rounded-md text-[9px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                view === v.key ? 'bg-purple-500/15 text-purple-400 border border-purple-500/25' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <Icon className="w-3 h-3" />
              {v.key}
            </button>
          )
        })}
      </div>
      <motion.div
        animate={{ width: views.find(v => v.key === view)?.w }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-[#131622] border border-white/5 rounded-xl p-3 overflow-hidden mx-auto"
      >
        <div className="space-y-2">
          <div className="h-3 bg-white/5 rounded w-3/4" />
          <div className="h-2 bg-white/3 rounded w-full" />
          <div className="h-2 bg-white/3 rounded w-5/6" />
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div className="h-12 bg-purple-500/10 border border-purple-500/20 rounded-lg" />
            <div className="h-12 bg-purple-500/5 border border-white/5 rounded-lg" />
          </div>
        </div>
      </motion.div>
      <div className="text-[8px] text-slate-500 font-mono text-center">
        Breakpoint: {view === 'desktop' ? '1440px' : view === 'tablet' ? '768px' : '375px'}
      </div>
    </div>
  )
}

function ReaderVisualizer() {
  const [fontSize, setFontSize] = useState(16)
  const [darkMode, setDarkMode] = useState(true)
  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          <button onClick={() => setFontSize(Math.max(12, fontSize - 2))} className="w-7 h-7 rounded-lg bg-[#131622] border border-white/5 text-slate-400 text-xs font-bold hover:border-emerald-500/30 transition-colors">A-</button>
          <button onClick={() => setFontSize(Math.min(22, fontSize + 2))} className="w-7 h-7 rounded-lg bg-[#131622] border border-white/5 text-slate-400 text-xs font-bold hover:border-emerald-500/30 transition-colors">A+</button>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all ${
            darkMode ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
          }`}
        >
          {darkMode ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
      <div className={`rounded-xl p-4 border transition-all ${darkMode ? 'bg-[#131622] border-white/5' : 'bg-[#f5f0e8] border-amber-200/30'}`}>
        <p
          style={{ fontSize: `${fontSize}px`, lineHeight: 1.8 }}
          className={`font-serif text-right ${darkMode ? 'text-slate-300' : 'text-amber-900'}`}
          dir="rtl"
        >
          بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ
        </p>
        <p
          className={`text-[10px] mt-2 ${darkMode ? 'text-slate-500' : 'text-amber-700/60'}`}
        >
          In the name of Allah, the Most Gracious, the Most Merciful
        </p>
      </div>
      <div className="text-[8px] text-slate-500 font-mono">Font: {fontSize}px · Theme: {darkMode ? 'Dark' : 'Light'}</div>
    </div>
  )
}

const VISUALIZER_MAP = {
  studio: StudioVisualizer,
  dashboard: DashboardVisualizer,
  quiz: QuizVisualizer,
  terminal: TerminalVisualizer,
  upvote: UpvoteVisualizer,
  chat: ChatVisualizer,
  metrics: MetricsVisualizer,
  responsive: ResponsiveVisualizer,
  reader: ReaderVisualizer,
}

/* ─────────────────────────────────────────────
   PROJECT CARD COMPONENT
   ───────────────────────────────────────────── */

function ProjectCard({ project, index, onSelectCaseStudy }) {
  const isEven = index % 2 === 0
  const VisualizerComponent = VISUALIZER_MAP[project.visualType]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      {/* Visual Preview */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className={`lg:col-span-6 relative ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}
      >
        <div
          className="absolute inset-0 blur-[100px] rounded-3xl pointer-events-none -z-10 opacity-30"
          style={{ background: project.accent }}
        />

        <div className="glass-card rounded-[28px] border border-white/10 overflow-hidden shadow-2xl p-5 sm:p-6 min-h-[320px] flex flex-col justify-between">
          {/* Visual Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ background: project.accent, opacity: 0.7 }} />
              <span className="w-2 h-2 rounded-full bg-white/10" />
              <span className="w-2 h-2 rounded-full bg-white/10" />
            </div>
            <span className="text-[8px] font-mono text-slate-500 uppercase tracking-[0.15em]">{project.title}</span>
            <Monitor className="w-3 h-3 text-slate-600" />
          </div>

          {/* Visual Body */}
          <div className="flex-1 flex flex-col justify-center py-4">
            {VisualizerComponent && <VisualizerComponent />}
          </div>

          {/* Visual Footer */}
          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[8px] text-slate-550 font-bold uppercase tracking-[0.15em]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Production
            </span>
            <Sparkles className="w-3 h-3 text-gold/30" />
          </div>
        </div>
      </motion.div>

      {/* Details Column */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className={`lg:col-span-6 space-y-5 text-left ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}
      >
        <div className="space-y-2">
          <span
            className="text-[9px] font-bold uppercase tracking-[0.2em] font-mono px-2.5 py-1 rounded-full border"
            style={{ color: project.accent, borderColor: `${project.accent}33`, background: `${project.accent}10` }}
          >
            {project.highlight}
          </span>
          <h3 className="text-2xl sm:text-3xl font-black font-sora text-white leading-tight pt-1">
            {project.title}
          </h3>
          <p className="text-xs text-slate-400 font-medium">{project.tagline}</p>
        </div>

        <p className="text-sm text-slate-350 leading-relaxed">{project.description}</p>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#0f111a] border border-white/5">
          <div className="space-y-1.5">
            <span className="text-[9px] font-bold text-[#f43f5e] uppercase tracking-wider font-mono">The Problem</span>
            <p className="text-[11px] text-slate-400 leading-relaxed">{project.problem}</p>
          </div>
          <div className="space-y-1.5">
            <span className="text-[9px] font-bold text-[#22c55e] uppercase tracking-wider font-mono">The Solution</span>
            <p className="text-[11px] text-slate-400 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <span key={t} className="px-2 py-1 rounded-md bg-[#131622] border border-white/5 text-[9px] text-slate-400 font-medium">
              {t}
            </span>
          ))}
        </div>

        {/* Action links */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="btn-premium-teal px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-premium-ghost px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Source Code</span>
          </a>

          <button
            onClick={() => onSelectCaseStudy(project.id)}
            className="text-[10px] font-bold hover:text-white flex items-center gap-1 transition-colors uppercase tracking-wider ml-1"
            style={{ color: project.accent }}
          >
            <span>Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   CATEGORY SECTION HEADER
   ───────────────────────────────────────────── */

function CategoryHeader({ title, subtitle, icon: Icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 mb-12"
    >
      <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-teal-light" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-xs text-slate-500">{subtitle}</p>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-white/5 to-transparent ml-4" />
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   MAIN PROJECTS COMPONENT
   ───────────────────────────────────────────── */

export default function Projects({ onSelectCaseStudy }) {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter)

  const featured = filtered.filter(p => p.category === 'featured')
  const fullstack = filtered.filter(p => p.category === 'fullstack')
  const ai = filtered.filter(p => p.category === 'ai')
  const tools = filtered.filter(p => p.category === 'tools')

  return (
    <section id="projects" className="relative py-28 bg-[#07080c] overflow-hidden">
      {/* Background dividers */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-teal/3 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ─── Section Header ─── */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-teal-light bg-teal/10 px-3 py-1 rounded-full inline-block"
          >
            Selected Projects & Digital Systems
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight"
          >
            Products I've <span className="text-gradient-teal">Engineered</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-450 text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
          >
            Production-grade architectures solving real business problems — not tutorial clones.
          </motion.p>
        </div>

        {/* ─── Filter Tabs ─── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-20"
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-200 ${
                filter === cat.key
                  ? 'bg-teal/15 text-teal-light border border-teal/25'
                  : 'text-slate-500 border border-white/5 hover:text-slate-300 hover:border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* ─── Featured Projects ─── */}
        {featured.length > 0 && (
          <div className="mb-28">
            {filter === 'all' && (
              <CategoryHeader title="Featured Engineering" subtitle="Flagship products and platforms" icon={Sparkles} />
            )}
            <div className="space-y-28">
              {featured.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} onSelectCaseStudy={onSelectCaseStudy} />
              ))}
            </div>
          </div>
        )}

        {/* ─── Full-Stack Systems ─── */}
        {fullstack.length > 0 && (
          <div className="mb-28">
            {filter === 'all' && (
              <CategoryHeader title="Full-Stack Systems" subtitle="End-to-end production platforms" icon={Layers} />
            )}
            <div className="space-y-28">
              {fullstack.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={featured.length + i} onSelectCaseStudy={onSelectCaseStudy} />
              ))}
            </div>
          </div>
        )}

        {/* ─── AI & Automation ─── */}
        {ai.length > 0 && (
          <div className="mb-28">
            {filter === 'all' && (
              <CategoryHeader title="AI & Automation Products" subtitle="Intelligent systems and conversational engines" icon={Cpu} />
            )}
            <div className="space-y-28">
              {ai.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={featured.length + fullstack.length + i} onSelectCaseStudy={onSelectCaseStudy} />
              ))}
            </div>
          </div>
        )}

        {/* ─── Modern Tools ─── */}
        {tools.length > 0 && (
          <div className="mb-28">
            {filter === 'all' && (
              <CategoryHeader title="Modern Tools & Experimental Builds" subtitle="Utilities, marketplaces, and accessibility apps" icon={Code2} />
            )}
            <div className="space-y-28">
              {tools.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={featured.length + fullstack.length + ai.length + i} onSelectCaseStudy={onSelectCaseStudy} />
              ))}
            </div>
          </div>
        )}

        {/* ─── Tech Ecosystem Strip ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 mb-24"
        >
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
              Engineering Ecosystem
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
            {TECH_ECOSYSTEM.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.08, borderColor: 'rgba(0, 126, 138, 0.3)' }}
                className="px-3.5 py-2 rounded-xl bg-[#0f111a] border border-white/5 text-[10px] text-slate-400 font-semibold cursor-default hover:text-teal-light transition-all duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* ─── Conversion CTA Block ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-white/5 bg-gradient-to-br from-[#0f111a] to-[#0a0c14] p-10 sm:p-14 text-center overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-teal/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold bg-gold/10 px-3 py-1 rounded-full inline-block">
              Ready to Build?
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white leading-tight">
              Let's Build Something <span className="text-gradient-teal">Exceptional</span>
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-lg mx-auto">
              Whether it's a SaaS product, AI integration, or full-stack platform — I build production systems that solve real problems.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-3">
              <a
                href="#contact"
                className="btn-premium-teal px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                Start a Project
              </a>
              <a
                href="#case-studies"
                className="btn-premium-ghost px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <ArrowRight className="w-4 h-4" />
                View Case Studies
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
