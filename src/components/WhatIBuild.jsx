import Reveal from './Reveal'
import { WHAT_I_BUILD } from '../data/portfolio'

export default function WhatIBuild() {
  return (
    <section className="section" id="what-i-build">
      <div className="wrap">
        <div className="section-head">
          <Reveal><span className="eyebrow">What I Build</span></Reveal>
          <Reveal delay={80}><h2>From AI products to modern web experiences</h2></Reveal>
          <Reveal delay={160}>
            <p>I build across the full spectrum of modern software — from AI-powered products and SaaS platforms to business systems and conversion-focused websites.</p>
          </Reveal>
        </div>

        <div className="what-build-grid">
          {WHAT_I_BUILD.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} className="what-build-card" delay={(i % 3) * 80}>
                <div className="what-build-num">{item.num}</div>
                <div className="what-build-icon"><Icon /></div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
