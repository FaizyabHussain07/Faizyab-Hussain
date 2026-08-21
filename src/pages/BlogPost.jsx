import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { getBlogPostBySlug, BLOG_POSTS, SITE } from '../data/portfolio'
import { ArrowUpRight } from 'lucide-react'

function renderMarkdown(content) {
  if (!content) return null
  // Simple markdown-ish renderer for blog posts
  const lines = content.trim().split('\n')
  const elements = []
  let currentList = []
  let listType = null

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="blog-list">
          {currentList.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )
      currentList = []
    }
  }

  lines.forEach((line, i) => {
    const trimmed = line.trim()
    if (!trimmed) {
      flushList()
      return
    }

    if (trimmed.startsWith('## ')) {
      flushList()
      elements.push(<h2 key={i}>{trimmed.slice(3)}</h2>)
    } else if (trimmed.startsWith('### ')) {
      flushList()
      elements.push(<h3 key={i}>{trimmed.slice(4)}</h3>)
    } else if (trimmed.startsWith('- ')) {
      const text = trimmed.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      currentList.push(<span dangerouslySetInnerHTML={{ __html: text }} />)
    } else {
      flushList()
      const text = trimmed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      elements.push(<p key={i} dangerouslySetInnerHTML={{ __html: text }} />)
    }
  })
  flushList()
  return elements
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return (
      <>
        <SEO title="Article Not Found" noindex />
        <section className="section">
          <div className="wrap" style={{ textAlign: 'center', padding: '120px 24px' }}>
            <h1>Article Not Found</h1>
            <p style={{ color: 'var(--muted-foreground)', marginTop: 16 }}>The article you're looking for doesn't exist.</p>
            <Link to="/blog" className="btn btn-primary" style={{ marginTop: 24 }}>View all articles</Link>
          </div>
        </section>
      </>
    )
  }

  // Find related posts (same category, excluding current)
  const related = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2)

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.updatedDate,
          author: {
            '@type': 'Person',
            name: SITE.name,
            url: SITE.url,
          },
          publisher: {
            '@type': 'Person',
            name: SITE.name,
          },
        }}
      />

      <section className="page-hero">
        <div className="wrap">
          <Link to="/blog" className="back-link">← Back to insights</Link>
          <span className="eyebrow">{post.category}</span>
          <h1 className="page-title">{post.title}</h1>
          <div className="blog-post-meta">
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="blog-meta-dot">·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <article className="blog-content">
            {renderMarkdown(post.content)}
          </article>

          {post.tags && (
            <div className="blog-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-tinted">
          <div className="wrap">
            <Reveal>
              <h2 className="section-title">Related Articles</h2>
            </Reveal>
            <div className="blog-grid" style={{ marginTop: 32 }}>
              {related.map((rp, i) => (
                <Reveal key={rp.slug} delay={i * 80}>
                  <Link to={`/blog/${rp.slug}`} className="blog-card">
                    <span className="blog-card-category">{rp.category}</span>
                    <h2>{rp.title}</h2>
                    <p>{rp.excerpt}</p>
                    <span className="project-link">Read article <ArrowUpRight size={14} /></span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
