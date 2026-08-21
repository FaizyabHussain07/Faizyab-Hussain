import SEO from '../components/SEO'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Faizyab Hussain — Full-Stack Developer, AI Engineer and AI Product Builder. Let's discuss your next project."
      />
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Contact</span>
          <h1 className="page-title">Let's Build Something</h1>
          <p className="page-subtitle">Whether you have a clear project brief or just an idea, I'd love to hear about it.</p>
        </div>
      </section>
      <Contact />
    </>
  )
}
