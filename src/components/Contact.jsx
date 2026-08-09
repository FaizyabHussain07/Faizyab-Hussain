import { useState } from 'react'
import { Check } from 'lucide-react'
import Reveal from './Reveal'
import { CONTACT_METHODS, SITE } from '../data/portfolio'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = Object.fromEntries(new FormData(form).entries())
    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section" id="contact">
      <div className="wrap contact-grid">
        <div>
          <Reveal><span className="eyebrow">Contact</span></Reveal>
          <Reveal delay={80}><h2 className="section-title">Let's build something.</h2></Reveal>
          <Reveal delay={160}>
            <p style={{ marginTop: 14, color: 'var(--muted-foreground)', fontSize: '15.5px', lineHeight: 1.6 }}>
              Tell me a bit about your business and what you need. I'll get back to you with next steps — usually within a day or two.
            </p>
          </Reveal>
          <div className="contact-methods">
            {CONTACT_METHODS.map((method) => {
              const Icon = method.icon
              const external = method.href && method.href.startsWith('http')
              return method.href ? (
                <a
                  key={method.label}
                  className="contact-method"
                  href={method.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                >
                  <Icon />
                  <span>{method.label}</span>
                </a>
              ) : (
                <div key={method.label} className="contact-method">
                  <Icon />
                  <span>{method.label}</span>
                </div>
              )
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="fname">Name</label>
              <input id="fname" name="name" required placeholder="Your full name" autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="femail">Email</label>
              <input id="femail" name="email" type="email" required placeholder="you@company.com" autoComplete="email" />
            </div>
          </div>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="fbiz">Business / company</label>
              <input id="fbiz" name="business" placeholder="e.g. The Golden Fork" />
            </div>
            <div className="field">
              <label htmlFor="fweb">Website (optional)</label>
              <input id="fweb" name="website" placeholder="https://" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="fneed">What do you need?</label>
            <select id="fneed" name="need">
              <option>A new website</option>
              <option>A website redesign</option>
              <option>A landing page</option>
              <option>A custom web application</option>
              <option>Ongoing maintenance</option>
              <option>Not sure yet</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="fmsg">Message</label>
            <textarea id="fmsg" name="message" required placeholder="Tell me a bit about your business and what you're looking for." />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          <p className="form-note">I'll reply from {SITE.email} — usually within 1–2 business days.</p>
          {status === 'sent' && (
            <div className="form-success" role="status">
              <Check size={18} />
              Message sent. I'll be in touch soon.
            </div>
          )}
          {status === 'error' && (
            <div className="form-success" role="status">
              <Check size={18} style={{ stroke: 'var(--accent)' }} />
              Something went wrong — please email me directly at {SITE.email}.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
