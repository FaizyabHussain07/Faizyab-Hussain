import { TRUST_ITEMS } from '../data/portfolio'

export default function Trust() {
  return (
    <div className="trust-strip">
      <div className="trust-track">
        {TRUST_ITEMS.map((item, i) => {
          const Icon = item.icon
          return (
            <div className="trust-item" key={i}>
              <Icon />
              {item.label}
            </div>
          )
        })}
      </div>
    </div>
  )
}
