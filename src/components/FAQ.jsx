import { useRef, useState } from 'react'
import { Plus } from 'lucide-react'
import { FAQS } from '../data/portfolio'

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  const [maxHeight, setMaxHeight] = useState(0)
  const bodyRef = useRef(null)

  const toggle = () => {
    const el = bodyRef.current
    if (open) {
      // Two-step so the closing transition animates from the current height.
      if (el) setMaxHeight(el.scrollHeight)
      requestAnimationFrame(() => setMaxHeight(0))
    } else if (el) {
      setMaxHeight(el.scrollHeight)
    }
    setOpen(!open)
  }

  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-q" onClick={toggle} aria-expanded={open}>
        {question}
        <Plus />
      </button>
      <div className="faq-a" ref={bodyRef} style={{ maxHeight }}>
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 800 }}>
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Questions, answered honestly</h2>
        </div>
        {FAQS.map((faq) => (
          <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </section>
  )
}
