/* ============================================================
   DATA LAYER — Faizyab Hussain Portfolio 2026
   
   All content, copy, links, projects and metadata in one place.
   Components consume this file. Edit copy here, not in components.
   ============================================================ */

import {
  Layout,
  RefreshCw,
  Target,
  Compass,
  Code2,
  Wrench,
  Mail,
  MessageSquare,
  Linkedin,
  Github,
  Twitter,
  Check,
  Zap,
  Smartphone,
  Search,
  BadgeCheck,
  Link2,
  LayoutTemplate,
  Rocket,
  Brain,
  Stethoscope,
  PencilRuler,
  SearchCheck,
  Bot,
  Blocks,
  Database,
  Globe,
  Paintbrush,
  FileText,
  ExternalLink,
} from 'lucide-react'

/* ─── SITE METADATA ─── */
export const SITE = {
  name: 'Faizyab Hussain',
  role: 'Full-Stack Developer · AI Engineer · AI Product Builder',
  tagline: 'Scalable AI & Web Systems for Modern Businesses',
  url: 'https://faizyab-hussain.vercel.app',
  email: 'syedfaizyabhussain07@gmail.com',
  github: 'https://github.com/FaizyabHussain07',
  linkedin: 'https://www.linkedin.com/in/faizyabhussain',
  x: 'https://x.com/FaizyabHus74391',
  instagram: 'https://instagram.com/syedfaizyabhussain07',
  whatsapp: 'https://wa.me/923352811970',
  whatsappLabel: 'WhatsApp — on request',
  resume: '/Resume_Faizyab_Hussain.pdf',
  portrait: '/faizyab-image-new.jpg',
  location: 'Karachi, Pakistan',
  description: 'Full-Stack Developer, AI Engineer and AI Product Builder based in Karachi, Pakistan. Building scalable AI and web systems — from SaaS products and business applications to modern websites and AI-powered experiences.',
}

/* ─── NAVIGATION ─── */
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

/* ─── SOCIAL LINKS ─── */
export const SOCIALS = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/FaizyabHussain07' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/faizyabhussain' },
  { icon: Twitter, label: 'X / Twitter', href: 'https://x.com/FaizyabHus74391' },
]

/* ─── TECH STACK ─── */
export const TECH_STACK = {
  frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  backend: ['Node.js', 'Express.js', 'REST APIs'],
  database: ['MongoDB', 'MySQL', 'PostgreSQL', 'Convex', 'Supabase'],
  ai: ['AI APIs', 'LLM Integrations', 'Prompt Engineering', 'AI Automation'],
  tools: ['Git', 'GitHub', 'Vercel', 'Netlify', 'Vite', 'Figma'],
}

export const HERO_TECH_STRIP = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'AI', 'LLMs', 'APIs',
]

/* ─── WHAT I BUILD ─── */
export const WHAT_I_BUILD = [
  {
    num: '01',
    icon: Brain,
    title: 'AI-Powered Products',
    desc: 'AI-powered SaaS products, automation tools, AI integrations and intelligent workflows.',
  },
  {
    num: '02',
    icon: Code2,
    title: 'Full-Stack Web Applications',
    desc: 'Production-ready applications with modern frontend, backend, APIs, authentication, databases and dashboards.',
  },
  {
    num: '03',
    icon: Blocks,
    title: 'Business Systems',
    desc: 'Custom dashboards, CRM-style systems, booking systems, internal tools and workflow applications.',
  },
  {
    num: '04',
    icon: Globe,
    title: 'Modern Business Websites',
    desc: 'Fast, responsive and conversion-focused websites for companies, startups and local businesses.',
  },
  {
    num: '05',
    icon: Rocket,
    title: 'SaaS Products',
    desc: 'End-to-end SaaS products from product idea to frontend, backend, database and deployment.',
  },
  {
    num: '06',
    icon: Bot,
    title: 'AI Integrations',
    desc: 'LLM-powered features, AI workflows, prompt-based systems, AI automation and intelligent product features.',
  },
]

/* ─── SERVICES ─── */
export const SERVICES = [
  { icon: Brain, title: 'AI Product Development', desc: 'Build AI-powered applications, SaaS products and intelligent workflows from concept to deployment.' },
  { icon: Code2, title: 'Full-Stack Web Development', desc: 'Build complete web applications — frontend, backend, APIs, authentication, databases and deployment.' },
  { icon: Rocket, title: 'SaaS Development', desc: 'Build scalable SaaS MVPs and production-ready product experiences with modern tech stacks.' },
  { icon: Bot, title: 'AI Integration', desc: 'Add practical AI features, LLM-powered workflows and intelligent automation to existing products.' },
  { icon: Blocks, title: 'Business Systems', desc: 'Build dashboards, CRM-style systems, booking systems, internal tools and workflow applications.' },
  { icon: Globe, title: 'Modern Website Development', desc: 'Build fast, responsive and conversion-focused websites for businesses, startups and brands.' },
  { icon: RefreshCw, title: 'Website Redesign', desc: 'Modernize outdated websites with better UX, responsive design, performance and modern frameworks.' },
  { icon: Target, title: 'Landing Pages', desc: 'High-quality landing pages for products, startups, campaigns and businesses.' },
]

/* ─── ALL PROJECTS (combined: shipped + concept) ─── */
export const PROJECT_CATEGORIES = [
  'All',
  'AI & SaaS',
  'Web Applications',
  'Business Systems',
  'Developer Tools',
  'Websites',
]

export const PROJECTS = [
  // ─── Shipped / Live Projects ───
  {
    slug: 'devpass',
    title: 'DevPass',
    category: 'AI & SaaS',
    tag: 'shipped',
    desc: 'Professional identity platform for software engineers — verify once, get hired anywhere. Developer passport with verified profile, GitHub analysis, role-based assessments, trust score, AI profile summary and smart matching for companies.',
    problem: 'Software engineers lack a unified, verifiable professional identity that recruiters and companies can trust.',
    goal: 'Build a platform where developers create a verified profile that showcases their skills, GitHub activity and trust score — so companies can find and evaluate talent faster.',
    solution: 'Built a full-stack application with GitHub API integration for automated skill analysis, role-based assessment system and AI-powered profile summaries.',
    features: ['Verified developer profiles', 'GitHub analysis & skill assessment', 'Role-based assessments', 'AI-generated profile summaries', 'Trust score system', 'Smart matching for companies'],
    tech: ['React', 'Node.js', 'AI APIs', 'REST API'],
    status: 'Live',
    live: 'https://devpass-app.vercel.app/',
    github: null,
    icon: BadgeCheck,
  },
  {
    slug: 'pastelink-pro',
    title: 'PasteLink Pro',
    category: 'Web Applications',
    tag: 'shipped',
    desc: 'Secure temporary text and code sharing — password protection, burn-after-read, auto-expiry, unique links with QR codes. Free, no registration, 100% private.',
    problem: 'Sharing code snippets or sensitive text securely is cumbersome — most paste services lack privacy features.',
    goal: 'Create a privacy-first temporary sharing tool with enterprise-grade security features.',
    solution: 'Built a serverless application with encrypted storage, time-based auto-expiry, burn-after-read mode and QR code generation.',
    features: ['Password protection', 'Burn-after-read mode', 'Auto-expiry timers', 'Unique shareable links', 'QR code generation', 'No registration required'],
    tech: ['React', 'Node.js', 'MongoDB'],
    status: 'Live',
    live: 'https://paste-link-pro.vercel.app/',
    github: null,
    icon: Link2,
  },
  {
    slug: 'web-template-hub',
    title: 'Web Template Hub',
    category: 'Developer Tools',
    tag: 'shipped',
    desc: 'Free open-source library of professional HTML templates and Tailwind CSS components — 200+ components, production-ready landing pages, live preview and easy copy-paste. MIT licensed.',
    problem: 'Developers waste time building common UI components from scratch for every new project.',
    goal: 'Create an open-source library of production-ready templates and components that developers can use immediately.',
    solution: 'Built a comprehensive component library with live preview, copy-to-clipboard functionality and MIT licensing.',
    features: ['200+ UI components', 'Production-ready templates', 'Live preview system', 'One-click copy-paste', 'MIT licensed', 'Responsive by default'],
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    status: 'Live',
    live: 'https://web-template-hub.netlify.app/',
    github: null,
    icon: LayoutTemplate,
  },
  {
    slug: 'slik',
    title: 'Slik',
    category: 'Developer Tools',
    tag: 'shipped',
    desc: 'Multi-framework SaaS boilerplate (Next.js, React/Vite, HTML) with a CLI — landing page, Supabase authentication, dashboards and admin panels out of the box.',
    problem: 'Starting a new SaaS project means rebuilding authentication, dashboards and boilerplate every time.',
    goal: 'Build a CLI tool that scaffolds a production-ready SaaS foundation across multiple frameworks.',
    solution: 'Created a multi-framework boilerplate generator with Supabase auth, dashboard layouts and a CLI for quick setup.',
    features: ['Multi-framework support (Next.js, React/Vite, HTML)', 'Supabase authentication', 'Dashboard layouts', 'Admin panel', 'CLI scaffolding tool', 'Production-ready structure'],
    tech: ['Next.js', 'React', 'Supabase', 'CLI'],
    status: 'Live',
    live: 'https://slik-dev.vercel.app/',
    github: null,
    icon: Rocket,
  },
  {
    slug: 'quizspark',
    title: 'QuizSpark',
    category: 'AI & SaaS',
    tag: 'shipped',
    desc: 'AI-powered quiz builder for educators, businesses and creators — create, customize, share and analyze quizzes with AI-generated questions.',
    problem: 'Creating engaging quizzes manually is time-consuming and lacks intelligent question generation.',
    goal: 'Build an AI-powered platform that automates quiz creation while giving users full customization control.',
    solution: 'Integrated LLM APIs for intelligent question generation with a full quiz management and analytics dashboard.',
    features: ['AI question generation', 'Quiz customization', 'Shareable links', 'Analytics dashboard', 'Multiple question types', 'Export capabilities'],
    tech: ['React', 'AI APIs', 'Node.js'],
    status: 'Live',
    live: 'https://quiz-spark-ai.base44.app/',
    github: null,
    icon: Brain,
  },
  {
    slug: 'clinicflow',
    title: 'ClinicFlow',
    category: 'Business Systems',
    tag: 'shipped',
    desc: 'Smart clinic management system — patient management, appointment scheduling, digital prescriptions with auto-generated PDFs and role-based dashboards.',
    problem: 'Small clinics rely on paper-based systems or expensive software that doesn\'t fit their workflow.',
    goal: 'Build an affordable, intuitive clinic management system that handles the core workflow digitally.',
    solution: 'Built a full-stack application with role-based access, appointment scheduling, patient records and PDF prescription generation.',
    features: ['Patient management', 'Appointment scheduling', 'Digital prescriptions', 'Auto-generated PDFs', 'Role-based dashboards', 'Search & filtering'],
    tech: ['React', 'Node.js', 'MongoDB'],
    status: 'Live',
    live: 'https://clinic-flow-managemnet.vercel.app/',
    github: null,
    icon: Stethoscope,
  },
  {
    slug: 'buildlayout',
    title: 'BuildLayout',
    category: 'Web Applications',
    tag: 'shipped',
    desc: 'Draw house floor plans online — 2D floor plan editor, no signup needed. Precise drawing to the centimetre with walls, rooms, furniture and labels, snap-to-grid editing, starter templates, live cost estimate and PNG/PDF/JSON export.',
    problem: 'Homeowners and small contractors need a simple way to create floor plans without expensive CAD software.',
    goal: 'Build a free, intuitive 2D floor plan editor that works in the browser with no signup.',
    solution: 'Created a canvas-based drawing tool with snap-to-grid precision, furniture library and multi-format export.',
    features: ['2D floor plan editor', 'Snap-to-grid precision', 'Wall & room drawing', 'Furniture library', 'Live cost estimate', 'PNG/PDF/JSON export', 'Starter templates', 'No signup required'],
    tech: ['React', 'JavaScript', 'Canvas API'],
    status: 'Live',
    live: 'https://buildplan-studio-web.lovable.app/',
    github: null,
    icon: PencilRuler,
  },
  {
    slug: 'promptaudit',
    title: 'PromptAudit',
    category: 'AI & SaaS',
    tag: 'shipped',
    desc: 'SEO, GEO & AEO website audits with AI fix prompts — free during beta. Paste any public URL for an instant report with overall and category-wise scores, issue reports with severity, and production-ready fix prompts for AI coding tools.',
    problem: 'Website owners need actionable SEO insights but existing tools either lack depth or don\'t provide fix guidance.',
    goal: 'Build an AI-powered audit tool that not only identifies issues but generates production-ready fix prompts.',
    solution: 'Built a URL-based audit system with AI analysis, scoring engine and prompt generation for popular AI coding tools.',
    features: ['Instant URL auditing', 'SEO, GEO & AEO analysis', 'Category-wise scoring', 'Severity-based issue reports', 'AI-generated fix prompts', 'Compatible with Claude Code, Cursor, Codex CLI, Gemini CLI, Windsurf'],
    tech: ['React', 'AI APIs', 'Node.js'],
    status: 'Live',
    live: 'https://prompt-audit.lovable.app/',
    github: null,
    icon: SearchCheck,
  },

  // ─── Concept Projects (Business Website Concepts) ───
  {
    slug: 'the-golden-fork',
    title: 'The Golden Fork',
    category: 'Websites',
    tag: 'concept',
    tone: '#B4603A',
    desc: 'A premium restaurant website concept focused on menu discovery, reservations and mobile users.',
    tech: ['React', 'CSS', 'JavaScript'],
    url: 'https://the-golden-fork-web.netlify.app/',
    thumb: '/images/projects/the-golden-fork.jpg',
  },
  {
    slug: 'iron-district',
    title: 'Iron District',
    category: 'Websites',
    tag: 'concept',
    tone: '#2F5D62',
    desc: 'A gym and fitness studio concept built around class schedules, trainer profiles and membership sign-ups.',
    tech: ['React', 'Tailwind', 'JavaScript'],
    url: 'https://iron-district-web.netlify.app/',
    thumb: '/images/projects/iron-district.jpg',
  },
  {
    slug: 'brightsmile',
    title: 'BrightSmile',
    category: 'Websites',
    tag: 'concept',
    tone: '#2E7D8C',
    desc: 'A dental clinic concept designed to make booking an appointment feel simple and reassuring.',
    tech: ['React', 'CSS', 'JavaScript'],
    url: null,
    thumb: '/images/projects/brightsmile.jpg',
  },
  {
    slug: 'sterling-legal',
    title: 'Sterling Legal',
    category: 'Websites',
    tag: 'concept',
    tone: '#4A5568',
    desc: 'A law firm concept focused on credibility, practice areas and a clear consultation request flow.',
    tech: ['Next.js', 'Tailwind'],
    url: null,
    thumb: '/images/projects/sterling-legal.jpg',
  },
  {
    slug: 'horizon-realty',
    title: 'Horizon Realty',
    category: 'Websites',
    tag: 'concept',
    tone: '#8A6D3B',
    desc: 'A real estate concept exploring listing discovery, filtering and agent contact on mobile.',
    tech: ['React', 'JavaScript'],
    url: null,
    thumb: '/images/projects/horizon-realty.jpg',
  },
  {
    slug: 'airflow-pro',
    title: 'AirFlow Pro',
    category: 'Websites',
    tag: 'concept',
    tone: '#3B6E8F',
    desc: 'An HVAC and home services concept built around service areas, quotes and emergency contact.',
    tech: ['React', 'CSS'],
    url: null,
    thumb: '/images/projects/airflow-pro.jpg',
  },
  {
    slug: 'northside-barber',
    title: 'Northside Barber',
    category: 'Websites',
    tag: 'concept',
    tone: '#7A4A2B',
    desc: 'A barbershop concept with a strong visual identity, service menu and online booking.',
    tech: ['React', 'Tailwind'],
    url: null,
    thumb: '/images/projects/northside-barber.jpg',
  },
  {
    slug: 'peak-performance',
    title: 'Peak Performance',
    category: 'Websites',
    tag: 'concept',
    tone: '#3E7C4F',
    desc: 'A personal-trainer and coaching concept designed around programs, results and lead capture.',
    tech: ['Next.js', 'JavaScript'],
    url: null,
    thumb: '/images/projects/peak-performance.jpg',
  },
]

/* ─── PROCESS ─── */
export const PROCESS = [
  { title: 'Discover', desc: 'Understand the business, product and technical requirements.' },
  { title: 'Plan', desc: 'Define architecture, user flows, features and implementation strategy.' },
  { title: 'Design', desc: 'Create a clean, scalable and user-focused interface.' },
  { title: 'Build', desc: 'Develop the frontend, backend, APIs, database and AI integrations.' },
  { title: 'Test', desc: 'Test responsiveness, functionality, performance and edge cases.' },
  { title: 'Deploy', desc: 'Deploy, monitor and prepare the product for real users.' },
]

/* ─── INDUSTRIES ─── */
export const INDUSTRIES = [
  { title: 'Startups', desc: 'MVPs, product launches, SaaS foundations and rapid prototyping for founders validating ideas.', icon: Rocket },
  { title: 'SaaS Companies', desc: 'Scalable product development, feature builds, AI integrations and technical architecture.', icon: Code2 },
  { title: 'Local Businesses', desc: 'Professional websites, online booking, lead capture and digital presence.', icon: Globe },
  { title: 'Restaurants', desc: 'Menu discovery, online reservations, mobile-first ordering and delivery integration.', icon: Layout },
  { title: 'Clinics & Healthcare', desc: 'Patient portals, appointment systems, digital prescriptions and clinic management.', icon: Stethoscope },
  { title: 'Real Estate', desc: 'Property listings, agent profiles, virtual tours and lead management systems.', icon: Layout },
  { title: 'Professional Services', desc: 'Credibility-building websites, consultation booking and service showcases.', icon: BadgeCheck },
  { title: 'Agencies', desc: 'Scalable web solutions, client project delivery and white-label development.', icon: Blocks },
  { title: 'Education', desc: 'Learning platforms, quiz systems, course delivery and student management tools.', icon: Brain },
  { title: 'Small & Growing Businesses', desc: 'Modernizing digital presence, internal tools and workflow automation.', icon: Zap },
]

/* ─── SOLUTIONS ─── */
export const SOLUTIONS = [
  {
    slug: 'ai-products',
    title: 'AI Product Development',
    icon: Brain,
    shortDesc: 'Build AI-powered SaaS products and intelligent applications.',
    description: 'From AI-powered SaaS tools to intelligent automation systems — I build products that leverage artificial intelligence to solve real business problems. Whether you need an AI feature inside an existing product or a standalone AI-powered application, I handle the full development lifecycle.',
    features: ['AI-powered SaaS products', 'Intelligent automation tools', 'AI feature development', 'LLM-powered workflows', 'AI chatbots and assistants', 'Smart data processing'],
    technologies: ['React', 'Next.js', 'Node.js', 'AI APIs', 'LLM Integrations'],
  },
  {
    slug: 'saas-development',
    title: 'SaaS Development',
    icon: Rocket,
    shortDesc: 'Build scalable SaaS products from MVP to production.',
    description: 'End-to-end SaaS product development — from initial concept and MVP to a production-ready application with authentication, billing, dashboards and analytics. Built with modern, scalable architectures.',
    features: ['SaaS MVP development', 'Full-stack product builds', 'Authentication & authorization', 'Subscription & billing systems', 'Admin dashboards', 'API development'],
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Supabase'],
  },
  {
    slug: 'business-websites',
    title: 'Business Websites',
    icon: Globe,
    shortDesc: 'Modern, fast websites for businesses and brands.',
    description: 'Professional, responsive websites built for conversion. Whether you need a corporate site, a local business presence or a brand showcase — every site is fast, mobile-first and designed to turn visitors into customers.',
    features: ['Corporate websites', 'Local business sites', 'Conversion-focused design', 'Mobile-first responsive', 'SEO foundations', 'Performance optimization'],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
  },
  {
    slug: 'business-systems',
    title: 'Business Systems',
    icon: Blocks,
    shortDesc: 'Custom dashboards, CRM systems and internal tools.',
    description: 'When off-the-shelf software doesn\'t fit, I build custom business systems — CRM-style tools, booking platforms, internal dashboards and workflow applications tailored to your exact requirements.',
    features: ['CRM systems', 'Booking platforms', 'Internal dashboards', 'Workflow automation', 'Data management tools', 'Role-based access'],
    technologies: ['React', 'Node.js', 'MongoDB', 'PostgreSQL'],
  },
  {
    slug: 'ai-integrations',
    title: 'AI Integrations',
    icon: Bot,
    shortDesc: 'Add AI features and LLM workflows to existing products.',
    description: 'Enhance your existing products with practical AI capabilities — from LLM-powered content generation to intelligent data processing and automated workflows. AI features that actually deliver value.',
    features: ['LLM-powered features', 'AI content generation', 'Intelligent data processing', 'Automated workflows', 'AI chat & support tools', 'Smart recommendations'],
    technologies: ['Node.js', 'AI APIs', 'LLM Integrations', 'REST APIs'],
  },
  {
    slug: 'web-applications',
    title: 'Web Applications',
    icon: Code2,
    shortDesc: 'Full-stack web applications with modern architecture.',
    description: 'Complete web applications built with modern frameworks — from frontend interfaces to backend APIs, databases, authentication and deployment. Production-ready, scalable and maintainable.',
    features: ['Full-stack applications', 'REST API development', 'Authentication systems', 'Database design', 'Real-time features', 'Cloud deployment'],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Vercel'],
  },
]

/* ─── BLOG POSTS ─── */
export const BLOG_POSTS = [
  {
    slug: 'building-devpass-developer-identity',
    title: 'Building DevPass: A Developer Identity Platform',
    category: 'Project Case Study',
    date: '2026-08-15',
    updatedDate: '2026-08-15',
    readTime: '8 min read',
    excerpt: 'How I built DevPass — a professional identity platform for software engineers with GitHub analysis, AI profile summaries and trust scoring.',
    featuredImage: null,
    tags: ['AI', 'Full-Stack', 'Case Study', 'React', 'Node.js'],
    content: `
## The Problem

Software engineers often struggle to present a unified, verifiable professional identity. Recruiters need to piece together information from GitHub, LinkedIn, personal websites and resume PDFs — none of which are easily comparable or verifiable.

## The Goal

Build a platform where developers create a single verified profile that showcases their skills, GitHub activity, role-based assessments and trust score. Companies should be able to evaluate talent faster and with more confidence.

## The Solution

DevPass is a full-stack application that integrates with GitHub's API for automated skill analysis, implements a role-based assessment system and uses AI to generate professional profile summaries.

### Key Features

- **Verified Developer Profiles** — One profile, verified through multiple signals
- **GitHub Analysis** — Automated skill and activity assessment from public repos
- **Role-Based Assessments** — Technical evaluations for specific engineering roles
- **AI Profile Summaries** — Intelligent summaries generated from profile data
- **Trust Score System** — Composite score based on multiple verification signals
- **Smart Matching** — Companies can find developers matching specific criteria

### Architecture

Built with React on the frontend and Node.js on the backend, DevPass uses REST APIs for GitHub integration and AI APIs for profile analysis. The data layer handles developer profiles, assessment results and matching algorithms.

### What I Learned

Building DevPass taught me a lot about API integration complexity, especially when aggregating data from multiple sources into a coherent profile. The trust scoring system required careful thinking about what signals actually indicate developer competence versus what's just noise.

### Technologies

React · Node.js · AI APIs · REST API · GitHub API

## What's Next

DevPass continues to evolve. Future improvements include deeper assessment systems, team-based matching and integrations with job boards.
    `,
  },
  {
    slug: 'ai-powered-web-development-2026',
    title: 'AI-Powered Web Development in 2026',
    category: 'AI Development',
    date: '2026-08-10',
    updatedDate: '2026-08-10',
    readTime: '6 min read',
    excerpt: 'How AI is reshaping web development workflows — from code generation to intelligent testing and automated deployment pipelines.',
    featuredImage: null,
    tags: ['AI', 'Web Development', 'Trends'],
    content: `
## The Shift

AI is no longer a futuristic concept in web development — it's an active part of the daily workflow. From AI-assisted coding to intelligent testing and automated content generation, the tools are mature enough to deliver real value.

## Where AI Actually Helps

### Code Generation & Refactoring

AI coding assistants have become genuinely useful for boilerplate generation, code refactoring and exploring alternative implementations. The key is treating them as accelerators, not replacements.

### Intelligent Testing

AI can generate test cases, identify edge cases and even suggest fixes for failing tests. This significantly reduces the manual effort of writing comprehensive test suites.

### Content & Data Processing

For applications that process text, images or structured data, AI APIs provide capabilities that would have taken months to build from scratch — document analysis, content generation, smart search and recommendation systems.

### Automated Workflows

AI-powered automation handles repetitive tasks — from data entry to content moderation to customer support triage. The ROI is often immediate.

## What I Build With AI

In my recent projects, I've integrated AI in several practical ways:

- **QuizSpark** — AI generates quiz questions based on topic and difficulty
- **PromptAudit** — AI analyzes websites and generates fix prompts
- **DevPass** — AI creates professional profile summaries
- **ClinicFlow** — AI-assisted prescription generation

## The Practical Approach

The most effective approach to AI in development is pragmatic:

1. Start with the problem, not the technology
2. Identify where AI genuinely adds value
3. Build the simplest integration that works
4. Measure whether it actually improves the outcome
5. Iterate based on real usage

AI is a powerful tool. The developers who use it well will build better products faster.
    `,
  },
  {
    slug: 'full-stack-saas-development-guide',
    title: 'Full-Stack SaaS Development: From Idea to Deployment',
    category: 'Full-Stack Development',
    date: '2026-08-05',
    updatedDate: '2026-08-05',
    readTime: '10 min read',
    excerpt: 'A practical guide to building SaaS products — covering architecture decisions, authentication, databases, deployment and the real challenges nobody talks about.',
    featuredImage: null,
    tags: ['Full-Stack', 'SaaS', 'Guide', 'Architecture'],
    content: `
## Building a SaaS Product

Building a SaaS product is one of the most challenging and rewarding projects a developer can take on. It touches every layer of the stack — frontend, backend, database, authentication, billing, deployment and monitoring.

## Architecture Decisions

### Frontend

For most SaaS products, React with Next.js provides the right balance of developer experience, performance and ecosystem support. Server-side rendering helps with SEO for marketing pages, while client-side rendering handles dynamic dashboard interfaces.

### Backend

Node.js with Express remains my go-to for API development. It's fast enough for most use cases, has excellent ecosystem support and shares JavaScript/TypeScript with the frontend.

### Database

The choice depends on the product. MongoDB works well for flexible schemas and rapid iteration. PostgreSQL is better for complex queries and data integrity. Supabase and Convex offer managed solutions that reduce operational overhead.

### Authentication

Supabase Auth, NextAuth or custom JWT-based systems — the choice depends on complexity requirements. For most products, a managed auth solution saves weeks of development.

## The Real Challenges

### Not the Code

The hardest parts of building a SaaS aren't usually technical. They're product decisions: what to build first, what to leave out, how to handle edge cases that real users encounter.

### Data Model Evolution

Your data model will change. Building for flexibility without sacrificing data integrity is a skill that comes from experience.

### Deployment & Operations

Getting the product running is step one. Keeping it running reliably — monitoring, error handling, performance optimization — is where the real work begins.

## What I've Learned

Through projects like Slik, DevPass and PromptAudit, I've learned that the most important skill isn't knowing every technology — it's knowing which technology to use for which problem, and being honest about trade-offs.
    `,
  },
]

/* ─── CONTACT FORM FIELDS ─── */
export const PROJECT_TYPES = [
  'AI Product',
  'SaaS Application',
  'Full-Stack Web App',
  'Business Website',
  'Website Redesign',
  'AI Integration',
  'Business System',
  'Other',
]

export const CONTACT_METHODS = [
  { icon: Mail, label: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Linkedin, label: 'LinkedIn', href: SITE.linkedin },
  { icon: Github, label: 'GitHub', href: SITE.github },
]

/* ─── ABOUT PAGE DATA ─── */
export const ABOUT_HIGHLIGHTS = [
  { label: 'Based in', value: 'Karachi, Pakistan' },
  { label: 'Focus', value: 'AI & Web Systems' },
  { label: 'Stack', value: 'React, Node.js, AI APIs' },
  { label: 'Availability', value: 'Freelance & Remote' },
]

/* ─── CURRENTLY BUILDING ─── */
export const CURRENTLY_BUILDING = [
  'Building AI-powered tools and experiments with LLM integrations',
  'Exploring modern software architecture and scalable system design',
  'Contributing to open-source developer tools',
  'Sharing technical insights through blog posts and project documentation',
]

/* ─── HELPER: Get project by slug ─── */
export function getProjectBySlug(slug) {
  return PROJECTS.find((p) => p.slug === slug)
}

/* ─── HELPER: Get related projects ─── */
export function getRelatedProjects(slug, limit = 3) {
  const project = getProjectBySlug(slug)
  if (!project) return PROJECTS.slice(0, limit)
  return PROJECTS.filter((p) => p.slug !== slug && p.category === project.category).slice(0, limit)
    .concat(PROJECTS.filter((p) => p.slug !== slug && p.category !== project.category).slice(0, limit))
    .slice(0, limit)
}

/* ─── HELPER: Get blog post by slug ─── */
export function getBlogPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

/* ─── HELPER: Get solution by slug ─── */
export function getSolutionBySlug(slug) {
  return SOLUTIONS.find((s) => s.slug === slug)
}

/* ─── FAQ ─── */
export const FAQS = [
  { q: 'Who is Faizyab Hussain?', a: 'Faizyab Hussain is a Full-Stack Developer, AI Engineer and AI Product Builder based in Karachi, Pakistan. He builds modern web applications, SaaS products, AI-powered tools and business systems.' },
  { q: 'What does Faizyab Hussain build?', a: 'He builds AI-powered products, full-stack web applications, SaaS products, business systems, modern business websites and AI integrations for startups, businesses and founders.' },
  { q: 'What technologies does he use?', a: 'React, Next.js, TypeScript, JavaScript, Node.js, Express, MongoDB, PostgreSQL, Supabase, AI APIs, LLM integrations, Tailwind CSS, Vite, Vercel, Git and GitHub.' },
  { q: 'Where is Faizyab Hussain based?', a: 'Karachi, Pakistan. He works remotely with businesses worldwide over video calls, email and messaging.' },
  { q: 'Does he build AI products?', a: 'Yes. He builds AI-powered SaaS products, LLM-powered applications, AI integrations and intelligent automation systems for businesses and startups.' },
  { q: 'Does he build websites?', a: 'Yes. He builds modern, responsive websites for businesses, startups and local brands — along with web applications, SaaS products and business systems.' },
  { q: 'How can I contact Faizyab Hussain?', a: 'Through the contact form on this website, by email at syedfaizyabhussain07@gmail.com, or through LinkedIn.' },
]

/* ─── HELPER: Shipped projects only ─── */
export function getShippedProjects() {
  return PROJECTS.filter((p) => p.tag === 'shipped')
}

/* ─── HELPER: Concept projects only ─── */
export function getConceptProjects() {
  return PROJECTS.filter((p) => p.tag === 'concept')
}
