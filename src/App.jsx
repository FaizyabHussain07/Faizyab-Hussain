import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

// Lazy-load pages for better code splitting
const Home = lazy(() => import('./pages/Home'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'))
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'))
const SolutionDetail = lazy(() => import('./pages/SolutionDetail'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const AIDevelopment = lazy(() => import('./pages/AIDevelopment'))
const FullStackDevelopment = lazy(() => import('./pages/FullStackDevelopment'))
const WebDevelopment = lazy(() => import('./pages/WebDevelopment'))
const WebDevelopmentKarachi = lazy(() => import('./pages/WebDevelopmentKarachi'))

function Loading() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <div style={{ textAlign: 'center' }}>
        <div className="pulse-dot" style={{ margin: '0 auto 16px' }} />
        <span style={{ fontSize: 13, color: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)' }}>Loading…</span>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/:slug" element={<SolutionDetail />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/ai-development" element={<AIDevelopment />} />
            <Route path="/full-stack-development" element={<FullStackDevelopment />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/web-development-karachi" element={<WebDevelopmentKarachi />} />
            {/* 404 */}
            <Route path="*" element={
              <div style={{ textAlign: 'center', padding: '160px 24px 120px' }}>
                <span className="eyebrow">Error 404</span>
                <h1 style={{ fontSize: 'clamp(72px, 15vw, 120px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1, marginTop: 14, background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>404</h1>
                <h2 style={{ fontSize: 24, fontWeight: 700, marginTop: 10 }}>Page not found</h2>
                <p style={{ color: 'var(--muted-foreground)', marginTop: 14, maxWidth: 420, margin: '14px auto 0' }}>
                  Looks like this route doesn't exist. Let's get you back on track.
                </p>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
                  <a href="/" className="btn btn-primary">Back Home</a>
                  <a href="/projects" className="btn btn-ghost">View Projects</a>
                </div>
              </div>
            } />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}
