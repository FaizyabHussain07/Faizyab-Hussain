import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Trust from '../components/Trust'
import WhatIBuild from '../components/WhatIBuild'
import Projects from '../components/Projects'
import Services from '../components/Services'
import About from '../components/About'
import Skills from '../components/Skills'
import Process from '../components/Process'
import CurrentlyBuilding from '../components/CurrentlyBuilding'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import { SITE } from '../data/portfolio'

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.name,
    jobTitle: 'Full-Stack Developer, AI Engineer, AI Product Builder',
    url: SITE.url,
    image: `${SITE.url}/faizyab-image-new.jpg`,
    sameAs: [SITE.github, SITE.linkedin, SITE.x],
    email: SITE.email,
    homeLocation: { '@type': 'Place', name: SITE.location },
    knowsAbout: [
      'Web Development', 'Full-Stack Development', 'AI Engineering',
      'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js',
      'MongoDB', 'PostgreSQL', 'AI APIs', 'LLM Integrations',
      'SaaS Development', 'Business Systems',
    ],
    description: SITE.description,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${SITE.name} — Full-Stack Developer & AI Product Builder`,
    url: SITE.url,
    description: SITE.description,
    inLanguage: 'en',
    publisher: {
      '@type': 'Person',
      name: SITE.name,
      url: SITE.url,
    },
  },
]

export default function Home() {
  return (
    <>
      <SEO
        title={null}
        description={SITE.description}
        jsonLd={jsonLd}
      />
      <Hero />
      <Trust />
      <WhatIBuild />
      <Projects showAll={true} limit={6} />
      <Services />
      <About />
      <Skills />
      <Process />
      <CurrentlyBuilding />
      <FAQ />
      <CTA />
    </>
  )
}
