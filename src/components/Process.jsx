import Reveal from './Reveal'
import { PROCESS } from '../data/portfolio'

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <div className="section-head">
          <Reveal><span className="eyebrow">Process</span></Reveal>
          <Reveal delay={80}><h2>A simple process from idea to launch</h2></Reveal>
          <Reveal delay={160}>
            <p>No black box. Here's exactly how a project moves from a first conversation to a live website.</p>
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
