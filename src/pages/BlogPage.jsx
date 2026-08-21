import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'
import { BLOG_POSTS } from '../data/portfolio'
import { ArrowUpRight } from 'lucide-react'

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Insights"
        description="Technical insights, project case studies, development guides and thoughts on AI, full-stack development and software engineering by Faizyab Hussain."
      />

      <section className="page-hero">
        <div className="wrap">
          <Reveal><span className="eyebrow">Insights</span></Reveal>
          <Reveal delay={80}><h1 className="page-title">Technical Insights</h1></Reveal>
          <Reveal delay={120}>
            <p className="page-subtitle">Thoughts on AI development, full-stack engineering, SaaS products and the real experience of building software.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {BLOG_POSTS.length === 0 ? (
            <Reveal>
              <div className="blog-empty">
                <h2>Coming soon</h2>
                <p>Technical articles and project insights are being written. Check back soon.</p>
              </div>
            </Reveal>
          ) : (
            <div className="blog-grid">
              {BLOG_POSTS.map((post, i) => (
                <Reveal key={post.slug} delay={i * 80}>
                  <Link to={`/blog/${post.slug}`} className="blog-card">
                    <div className="blog-card-meta">
                      <span className="blog-card-category">{post.category}</span>
                      <span className="blog-card-date">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <div className="blog-card-footer">
                      <span className="blog-card-readtime">{post.readTime}</span>
                      <span className="project-link">Read article <ArrowUpRight size={14} /></span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
