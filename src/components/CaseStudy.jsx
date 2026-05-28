import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cpu, Lock, Zap, Layers, ArrowRight, Check } from 'lucide-react'

const CASE_STUDIES = [
  {
    id: 'devweavex',
    title: 'DevWeaveX',
    tagline: 'Building the AI Developer Platform',
    icon: <Cpu className="w-5 h-5 text-teal-400" />,
    color: 'text-teal-400',
    border: 'border-teal-500/20',
    challenge:
      'Developers waste hours on repetitive tasks, context-switching between tools, and setting up boilerplate. No unified AI-powered workspace existed for the solo developer or small team.',
    solution:
      'Built a modular, AI-first developer platform that combines code generation, project scaffolding, and workflow automation under a single premium interface.',
    architecture: [
      'Next.js App Router for server-side rendering and routing',
      'Supabase for auth, real-time subscriptions, and storage',
      'OpenAI API with custom prompt chaining for code generation',
      'Edge functions for low-latency AI responses',
      'Tailwind CSS design system for scalable UI components',
    ],
    performance: ['Sub-1s first contentful paint', 'Lighthouse 97 / 100 / 95 / 100', 'Edge-deployed for global performance'],
    outcome:
      'A production-ready AI developer platform with real users, a clean UI system, and a scalable architecture capable of handling concurrent AI requests.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'OpenAI', 'Vercel Edge', 'Tailwind'],
  },
  {
    id: 'pastelink',
    title: 'PasteLink Pro',
    tagline: 'Rethinking the Developer Snippet Tool',
    icon: <Lock className="w-5 h-5 text-yellow-400" />,
    color: 'text-yellow-400',
    border: 'border-yellow-500/20',
    challenge:
      'Existing tools like Pastebin were outdated, ugly, and missing critical features like expiry, password protection, and analytics that professionals needed.',
    solution:
      'Designed and built a modern, full-stack alternative with a polished UI, link expiry, password protection, syntax highlighting, and an analytics dashboard.',
    architecture: [
      'React SPA with component-based architecture',
      'Node.js + Express REST API with JWT auth',
      'MongoDB with TTL indexes for automatic expiry',
      'Highlight.js for syntax rendering',
      'Deployed on Vercel (frontend) + Railway (API)',
    ],
    performance: ['99.9% uptime target', 'Auto-expiry via MongoDB TTL', 'Sub-200ms API response times'],
    outcome:
      'A clean, production-ready SaaS alternative to Pastebin with real-world usage and a premium brand feel — proof that simple tools can be done right.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Highlight.js', 'Tailwind'],
  },
  {
    id: 'prodspark',
    title: 'ProdSpark',
    tagline: 'AI-Powered Productivity for Modern Teams',
    icon: <Zap className="w-5 h-5 text-sky-400" />,
    color: 'text-sky-400',
    border: 'border-sky-500/20',
    challenge:
      'Teams lack intelligent tools that understand context. Existing task managers are dumb — they do not suggest priorities, generate content, or adapt to workflow.',
    solution:
      'Built a task management platform with an AI core that can suggest tasks, generate content briefs, and prioritise intelligently based on project context.',
    architecture: [
      'React with context API for global state',
      'Firebase Firestore for real-time data',
      'OpenAI GPT-4 for task suggestions and content generation',
      'Framer Motion for fluid task-board animations',
      'Firebase Functions for AI orchestration',
    ],
    performance: ['Real-time sync across devices', 'AI response in <2s average', 'Optimistic UI updates for instant feel'],
    outcome:
      'A genuinely useful AI productivity tool with a premium UI that demonstrates deep thinking about user experience and intelligent system design.',
    tech: ['React', 'Firebase', 'OpenAI', 'Framer Motion', 'Tailwind'],
  },
  {
    id: 'quizspark',
    title: 'QuizSpark',
    tagline: 'AI-Generated Quizzes at Scale',
    icon: <Layers className="w-5 h-5 text-purple-400" />,
    color: 'text-purple-400',
    border: 'border-purple-500/20',
    challenge:
      'Creating quality quiz content manually is slow, inconsistent, and hard to scale for educators and content creators who need thousands of questions.',
    solution:
      'Built an AI quiz engine that generates topic-specific, adaptive-difficulty quizzes, scores them in real-time, and provides shareable result links.',
    architecture: [
      'React SPA with quiz-state machine architecture',
      'Node.js API for quiz generation and scoring',
      'OpenAI API with structured output parsing for quiz data',
      'Firebase for quiz persistence and sharing',
      'Custom analytics for quiz performance tracking',
    ],
    performance: ['Quiz generated in <3s', 'Supports 1000+ concurrent users', 'Shareable links with analytics'],
    outcome:
      'A scalable, AI-powered education tool with real use cases in online learning, corporate training, and content creation — shipped end-to-end by one developer.',
    tech: ['React', 'Node.js', 'OpenAI', 'Firebase', 'Tailwind'],
  },
]

export default function CaseStudy({ selected, onClose }) {
  const cs = selected ? CASE_STUDIES.find(c => c.id === selected.id) : null

  return (
    <AnimatePresence>
      {cs && (
        <motion.div
          key="case-study-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Panel */}
          <motion.div
            key="case-study-panel"
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            onClick={e => e.stopPropagation()}
            className={`relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl glass border ${cs.border} p-6 sm:p-8 shadow-2xl`}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl hover:bg-white/[0.06] text-slate-400 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center">
                {cs.icon}
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{cs.title}</h2>
                <p className="text-xs text-slate-500">{cs.tagline}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Challenge */}
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Challenge</p>
                <p className="text-sm text-slate-400 leading-relaxed">{cs.challenge}</p>
              </div>

              {/* Solution */}
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Solution</p>
                <p className="text-sm text-slate-400 leading-relaxed">{cs.solution}</p>
              </div>

              {/* Architecture */}
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Architecture Decisions</p>
                <ul className="space-y-1.5">
                  {cs.architecture.map(a => (
                    <li key={a} className="flex items-start gap-2 text-xs text-slate-400">
                      <ArrowRight className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" /> {a}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Performance */}
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Performance</p>
                <ul className="space-y-1.5">
                  {cs.performance.map(p => (
                    <li key={p} className="flex items-start gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-green-400 mt-0.5 shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Outcome */}
            <div className="mt-6 p-4 rounded-xl bg-teal-500/5 border border-teal-500/15">
              <p className="text-[10px] font-bold uppercase tracking-widest text-teal-400 mb-2">Final Outcome</p>
              <p className="text-sm text-slate-300 leading-relaxed">{cs.outcome}</p>
            </div>

            {/* Tech */}
            <div className="mt-4 flex flex-wrap gap-2">
              {cs.tech.map(t => (
                <span key={t} className="skill-pill text-[11px] px-2.5 py-1 rounded-full font-medium">{t}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
