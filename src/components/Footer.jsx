import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const SOCIAL_LINKS = [
  { icon: <FaGithub className="w-4 h-4" />, label: "GitHub", href: "https://github.com/faizyabhussain07" },
  { icon: <FaLinkedin className="w-4 h-4" />, label: "LinkedIn", href: "https://www.linkedin.com/in/faizyabhussain" },
  { icon: <FaTwitter className="w-4 h-4" />, label: "Twitter", href: "https://x.com/FaizyabHus74391" },
  { icon: <FaWhatsapp className="w-4 h-4" />, label: "WhatsApp", href: "https://wa.me/923352811970" },
  { icon: <FaEnvelope className="w-4 h-4" />, label: "Email", href: "mailto:syedfaizyabhussain07@gmail.com" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (href) => {
    const targetElement = document.querySelector(href)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-[#07080c] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand block */}
          <div className="md:col-span-2 space-y-6 text-left">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
              className="flex items-center gap-3 shrink-0"
            >
              <img 
                src="/faizyab-logo.png" 
                alt="Faizyab Hussain Logo" 
                className="h-10 w-auto" 
              />
              <div className="flex flex-col text-left">
                <span className="text-base font-bold font-display text-white tracking-wider leading-none">
                  FAIZYAB HUSSAIN
                </span>
                <span className="text-[11px] text-teal-light font-medium tracking-widest mt-0.5">
                  Full Stack Developer
                </span>
              </div>
            </a>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Engineering premium full-stack SaaS solutions, custom intelligent AI workflows, and high-performance user interfaces for global innovators.
            </p>
            
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#131622] border border-white/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-light opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
              </span>
              <span className="text-[10px] font-semibold text-slate-350 tracking-wider uppercase">
                Available for worldwide contract contracts
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="text-left">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6">
              Navigation
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {QUICK_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-xs text-slate-405 text-left hover:text-white transition-colors duration-150 font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Socials & Location */}
          <div className="text-left space-y-6">
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
                Connect With Me
              </h3>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-xl bg-[#131622] border border-white/5 hover:border-teal/30 text-slate-400 hover:text-teal-light flex items-center justify-center transition-all duration-200"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest">
                Location
              </h3>
              <p className="text-xs text-slate-400">
                Karachi, Pakistan · Remote Worldwide
              </p>
            </div>
          </div>

        </div>

        {/* Footer bottom dividers and details */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
            © {currentYear} FAIZYAB HUSSAIN. ALL RIGHTS RESERVED.
          </p>
          
          <p className="text-[10px] text-slate-500 font-mono italic">
            Building the future, one product at a time.
          </p>
        </div>

      </div>
    </footer>
  )
}
