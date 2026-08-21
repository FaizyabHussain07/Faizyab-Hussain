import Reveal from './Reveal'

const TRUST_ITEMS = [
  'Responsive',
  'Fast',
  'Production-ready',
  'Mobile-first',
  'SEO-friendly',
  'AI-powered',
]

export default function Trust() {
  return (
    <div className="trust-strip">
      <div className="trust-track">
        {TRUST_ITEMS.map((label, i) => (
          <Reveal key={label} delay={i * 60}>
            <div className="trust-item">
              <span className="trust-check">✓</span>
              {label}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
