import Reveal from './Reveal'
import { SITE } from '../data/portfolio'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <Reveal className="about-photo">
          <img
            src={SITE.portrait}
            alt="Portrait of Faizyab Hussain"
            loading="lazy"
            width="1024"
            height="1024"
          />
        </Reveal>
        <div className="about-copy">
          <Reveal><span className="eyebrow">About</span></Reveal>
          <Reveal delay={80}><h2>Hi, I'm Faizyab Hussain.</h2></Reveal>
          <Reveal delay={160}>
            <p>I'm a web developer based in Karachi, Pakistan, focused on building modern digital experiences for businesses, startups and local brands.</p>
          </Reveal>
          <Reveal delay={200}>
            <p>I work with JavaScript, TypeScript, React, Next.js, Node.js and modern databases to build responsive, maintainable websites — from restaurant and clinic sites to landing pages and small custom web applications.</p>
          </Reveal>
          <Reveal delay={240}>
            <p>My recent work includes concept websites for local businesses — restaurants, gyms, dental clinics, law firms, real estate, home services, barbershops and personal trainers — plus shipped products like DevPass, PasteLink Pro and ClinicFlow.</p>
          </Reveal>
          <Reveal delay={280}>
            <p>Today I'm focused on helping businesses build a stronger presence online through professional websites and practical digital solutions.</p>
          </Reveal>
          <Reveal delay={320}>
            <div className="about-links">
              <a href={SITE.resume} className="btn btn-ghost btn-sm" target="_blank" rel="noopener noreferrer">View resume</a>
              <a href={SITE.github} className="btn btn-ghost btn-sm" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={SITE.linkedin} className="btn btn-ghost btn-sm" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
