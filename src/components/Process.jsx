import Reveal from './Reveal'
import { PROCESS } from '../data/portfolio'

export default function Process() {
  return (
    <section className="section section-tinted" id="process">
      <div className="wrap">
        <div className="section-head">
          <Reveal><span className="eyebrow">How I Work</span></Reveal>
          <Reveal delay={80}><h2>From idea to production</h2></Reveal>
          <Reveal delay={160}>
            <p>A structured approach to building software — from understanding the problem to shipping a production-ready product.</p>
          </Reveal>
        </div>
        <div className="process-list">
          {PROCESS.map((step, i) => (
            <Reveal key={step.title} className="process-item" delay={i * 60}>
              <div className="process-num">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
