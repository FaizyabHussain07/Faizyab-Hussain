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
} from 'lucide-react'

/* ============================================================
   CONTENT DATA — kept separate from presentation.
   Edit copy, links and projects here without touching components.
   ============================================================ */

export const SITE = {
  name: 'Faizyab Hussain',
  role: 'Web Developer',
  url: 'https://faizyab-hussain.vercel.app/',
  // NOTE: the new HTML reference displayed "hello@faizyabhussain.dev".
  // The working address from the existing project is used below —
  // swap here if the hello@ address becomes live.
  email: 'syedfaizyabhussain07@gmail.com',
  github: 'https://github.com/FaizyabHussain07',
  linkedin: 'https://www.linkedin.com/in/faizyabhussain',
  x: 'https://x.com/FaizyabHus74391',
  instagram: 'https://instagram.com/syedfaizyabhussain07',
  whatsapp: 'https://wa.me/923352811970', // real number kept in data; displayed as "on request"
  whatsappLabel: 'WhatsApp — on request',
  resume: '/Resume_Faizyab_Hussain.pdf',
  portrait: '/faizyab-image-new.jpg',
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const TRUST_ITEMS = [
  { icon: Check, label: 'Responsive by default' },
  { icon: Zap, label: 'Fast & modern' },
  { icon: Check, label: 'Built for your business' },
  { icon: Smartphone, label: 'Mobile-first' },
  { icon: Search, label: 'SEO-friendly structure' },
]

export const SERVICES = [
  { icon: Layout, title: 'Business websites', desc: 'Modern websites designed around your business, services, customers and goals.' },
  { icon: RefreshCw, title: 'Website redesign', desc: 'Turn an outdated website into a clean, modern and professional digital experience.' },
  { icon: Target, title: 'Landing pages', desc: 'Focused landing pages designed for campaigns, services, products and lead generation.' },
  { icon: Compass, title: 'Lead capture', desc: 'Contact forms, enquiry flows, booking forms and conversion-focused sections.' },
  { icon: Code2, title: 'Custom web applications', desc: 'Dashboards, internal tools, booking systems and custom business applications.' },
  { icon: Wrench, title: 'Website maintenance', desc: 'Updates, improvements, bug fixes and ongoing technical support after launch.' },
]

export const PROJECT_CATEGORIES = [
  'All',
  'Restaurant',
  'Gym / Fitness',
  'Dental Clinic',
  'Law Firm',
  'Real Estate',
  'HVAC / Home Services',
  'Barbershop',
  'Personal Trainer',
]

// Concept projects — no real clients. `thumb` is reserved for a future
// image path (e.g. '/images/projects/golden-fork.jpg'); while null, the
// card renders a stylised browser mock tinted with the project's `tone`.
export const PROJECTS = [
  {
    title: 'The Golden Fork',
    category: 'Restaurant',
    tag: 'concept',
    tone: '#B4603A',
    desc: 'A premium restaurant website concept focused on menu discovery, reservations and mobile users.',
    tech: ['React', 'CSS', 'JavaScript'],
    url: 'https://the-golden-fork-web.netlify.app/',
    thumb: '/images/projects/the-golden-fork.jpg',
  },
  {
    title: 'Iron District',
    category: 'Gym / Fitness',
    tag: 'concept',
    tone: '#2F5D62',
    desc: 'A gym and fitness studio concept built around class schedules, trainer profiles and membership sign-ups.',
    tech: ['React', 'Tailwind', 'JavaScript'],
    url: 'https://iron-district-web.netlify.app/',
    thumb: '/images/projects/iron-district.jpg',
  },
  {
    title: 'BrightSmile',
    category: 'Dental Clinic',
    tag: 'concept',
    tone: '#2E7D8C',
    desc: 'A dental clinic concept designed to make booking an appointment feel simple and reassuring.',
    tech: ['React', 'CSS', 'JavaScript'],
    url: null,
    thumb: '/images/projects/brightsmile.jpg',
  },
  {
    title: 'Sterling Legal',
    category: 'Law Firm',
    tag: 'concept',
    tone: '#4A5568',
    desc: 'A law firm concept focused on credibility, practice areas and a clear consultation request flow.',
    tech: ['Next.js', 'Tailwind'],
    url: null,
    thumb: '/images/projects/sterling-legal.jpg',
  },
  {
    title: 'Horizon Realty',
    category: 'Real Estate',
    tag: 'concept',
    tone: '#8A6D3B',
    desc: 'A real estate concept exploring listing discovery, filtering and agent contact on mobile.',
    tech: ['React', 'JavaScript'],
    url: null,
    thumb: '/images/projects/horizon-realty.jpg',
  },
  {
    title: 'AirFlow Pro',
    category: 'HVAC / Home Services',
    tag: 'concept',
    tone: '#3B6E8F',
    desc: 'An HVAC and home services concept built around service areas, quotes and emergency contact.',
    tech: ['React', 'CSS'],
    url: null,
    thumb: '/images/projects/airflow-pro.jpg',
  },
  {
    title: 'Northside Barber',
    category: 'Barbershop',
    tag: 'concept',
    tone: '#7A4A2B',
    desc: 'A barbershop concept with a strong visual identity, service menu and online booking.',
    tech: ['React', 'Tailwind'],
    url: null,
    thumb: '/images/projects/northside-barber.jpg',
  },
  {
    title: 'Peak Performance',
    category: 'Personal Trainer',
    tag: 'concept',
    tone: '#3E7C4F',
    desc: 'A personal-trainer and coaching concept designed around programs, results and lead capture.',
    tech: ['Next.js', 'JavaScript'],
    url: null,
    thumb: '/images/projects/peak-performance.jpg',
  },
]

// Real projects with live links — the "Built beyond websites" section.
// `live` is the real deployed URL; `github` stays null until a repo link
// is provided (no fake links).
export const TECH_PROJECTS = [
  {
    icon: BadgeCheck,
    title: 'DevPass',
    desc: 'Professional identity platform for software engineers — verify once, get hired anywhere. Developer passport with verified profile, GitHub analysis, role-based assessments, trust score, AI profile summary and smart matching for companies.',
    live: 'https://devpass-app.vercel.app/',
    github: null,
  },
  {
    icon: Link2,
    title: 'PasteLink Pro',
    desc: 'Secure temporary text and code sharing — password protection, burn-after-read, auto-expiry, unique links with QR codes. Free, no registration, 100% private.',
    live: 'https://paste-link-pro.vercel.app/',
    github: null,
  },
  {
    icon: LayoutTemplate,
    title: 'Web Template Hub',
    desc: 'Free open-source library of professional HTML templates and Tailwind CSS components — 200+ components, production-ready landing pages, live preview and easy copy-paste. MIT licensed.',
    live: 'https://web-template-hub.netlify.app/',
    github: null,
  },
  {
    icon: Rocket,
    title: 'Slik',
    desc: 'Multi-framework SaaS boilerplate (Next.js, React/Vite, HTML) with a CLI — landing page, Supabase authentication, dashboards and admin panels out of the box.',
    live: 'https://slik-dev.vercel.app/',
    github: null,
  },
  {
    icon: Brain,
    title: 'QuizSpark',
    desc: 'AI-powered quiz builder for educators, businesses and creators — create, customize, share and analyze quizzes with AI-generated questions.',
    live: 'https://quiz-spark-ai.base44.app/',
    github: null,
  },
  {
    icon: Stethoscope,
    title: 'ClinicFlow',
    desc: 'Smart clinic management system — patient management, appointment scheduling, digital prescriptions with auto-generated PDFs and role-based dashboards.',
    live: 'https://clinic-flow-managemnet.vercel.app/',
    github: null,
  },
  {
    icon: PencilRuler,
    title: 'BuildLayout',
    desc: 'Draw house floor plans online — 2D floor plan editor, no signup needed. Precise drawing to the centimetre with walls, rooms, furniture and labels, snap-to-grid editing, starter templates, live cost estimate and PNG/PDF/JSON export. Best for homeowners, builders, small architecture studios and contractors.',
    live: 'https://buildplan-studio-web.lovable.app/',
    github: null,
  },
  {
    icon: SearchCheck,
    title: 'PromptAudit',
    desc: 'SEO, GEO & AEO website audits with AI fix prompts — free during beta, 5 audits per week. Paste any public URL for an instant report with overall and category-wise scores, issue reports with severity, and production-ready fix prompts for Claude Code, Cursor, Codex CLI, Gemini CLI and Windsurf. Private and read-only.',
    live: 'https://prompt-audit.lovable.app/',
    github: null,
  },
]

export const PROCESS = [
  { title: 'Discover', desc: 'Understand your business, audience and goals.' },
  { title: 'Plan', desc: 'Define structure, content and user journey.' },
  { title: 'Design', desc: 'Create a clean visual direction focused on usability and conversion.' },
  { title: 'Build', desc: 'Develop a responsive, fast and maintainable website.' },
  { title: 'Test', desc: 'Check everything across devices, browsers and edge cases.' },
  { title: 'Launch', desc: 'Deploy and make sure everything works in the real world.' },
]

export const SKILLS = [
  { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Node.js', 'Express'] },
  { group: 'Database', items: ['MongoDB', 'MySQL'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Vite', 'Vercel', 'Netlify', 'Figma'] },
]

// Keep in sync with the FAQPage JSON-LD in index.html.
export const FAQS = [
  { q: 'Who is Faizyab Hussain?', a: 'Faizyab Hussain is a web developer based in Karachi, Pakistan. He builds modern, responsive websites and digital experiences for businesses and growing brands.' },
  { q: 'What does Faizyab Hussain do?', a: 'He designs and builds websites: business websites, landing pages, website redesigns and small custom web applications.' },
  { q: 'What types of websites does Faizyab Hussain build?', a: 'Mainly websites for local businesses — restaurants, gyms, clinics, law firms, real estate, home services, barbershops and coaches — plus landing pages and small custom web applications.' },
  { q: 'Does Faizyab Hussain build websites for local businesses?', a: 'Yes. Local business websites are the main focus. The portfolio includes restaurant, gym, dental clinic, law firm, real estate, HVAC, barbershop and personal-trainer website concepts.' },
  { q: 'What technologies does Faizyab Hussain use?', a: 'React, Next.js, JavaScript, TypeScript, Tailwind CSS, Node.js and Express, with MongoDB or MySQL for data, built with Vite and version-controlled with Git and GitHub.' },
  { q: 'Where is Faizyab Hussain based?', a: 'Karachi, Pakistan. He works remotely with businesses worldwide over video calls, email and messaging.' },
  { q: 'Can Faizyab Hussain redesign an existing website?', a: 'Yes. He reviews the current site and rebuilds it with a modern, responsive design while keeping the content and structure that already works.' },
  { q: 'Can I see a demo before committing?', a: 'Yes. A free concept demo — a small sample homepage design for your business — is available so you can see the direction before deciding anything.' },
  { q: 'How long does a website take?', a: 'It depends on scope, but a typical business website takes a few weeks from the discovery call to launch.' },
  { q: 'How can I contact Faizyab Hussain?', a: 'Through the contact form on this website, or by email at syedfaizyabhussain07@gmail.com.' },
]

// NOTE: These are SAMPLE DRAFT quotes so the section can be previewed.
// Replace them with real quotes from real clients before going live —
// invented testimonials can damage trust if a visitor tries to verify them.
export const TESTIMONIALS = [
  { quote: 'Faizyab rebuilt our restaurant website from scratch — fast, clean and easy to update. The new site finally looks as good as the food.', name: 'Ahmed R.', role: 'Restaurant owner' },
  { quote: 'Patients kept asking for online bookings, so we needed a simple clinic website. He delivered something clear and mobile-friendly that our team finds easy to use.', name: 'Dr. Sana K.', role: 'Dental clinic' },
  { quote: 'From the first call to launch, everything was explained clearly and delivered on time. No jargon, no surprises — exactly what we agreed on.', name: 'Bilal M.', role: 'Real estate agent' },
]

export const CONTACT_METHODS = [
  { icon: Mail, label: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MessageSquare, label: SITE.whatsappLabel, href: null },
  { icon: Linkedin, label: 'LinkedIn', href: SITE.linkedin },
  { icon: Github, label: 'GitHub', href: SITE.github },
]
