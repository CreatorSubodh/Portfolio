import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import './Contact.css'

/**
 * CONTACT LINKS — updated with real profile URLs
 */
const CONTACTS = [
  {
    id: 'github',
    icon: <Github size={22} />,
    label: 'GitHub',
    handle: '@CreatorSubodh',
    href: 'https://github.com/CreatorSubodh',
    color: '#e2e8f0',
    bg: 'rgba(226,232,240,0.07)',
    border: 'rgba(226,232,240,0.15)',
  },
  {
    id: 'linkedin',
    icon: <Linkedin size={22} />,
    label: 'LinkedIn',
    handle: 'Subodh Kumar',
    href: 'https://www.linkedin.com/in/subodh-kumar-993242230/',
    color: '#60a5fa',
    bg: 'rgba(96,165,250,0.08)',
    border: 'rgba(96,165,250,0.2)',
  },
  {
    id: 'email',
    icon: <Mail size={22} />,
    label: 'Email',
    handle: 'subodhofficialz@gmail.com',
    href: 'mailto:subodhofficialz@gmail.com',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.2)',
  },
]

export default function Contact() {
  const headingRef = useInView()
  const cardsRef = useInView()

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-heading fade-in" ref={headingRef}>
          <span className="label">Contact</span>
          <h2 id="contact-heading">Let's Connect</h2>
          <p>
            I'm open to opportunities, collaborations, or just a friendly conversation
            about data science and ML.
          </p>
        </div>

        {/* Contact cards */}
        <div className="contact-grid stagger-children" ref={cardsRef}>
          {CONTACTS.map(({ id, icon, label, handle, href, color, bg, border }) => {
            const isExternal = !href.startsWith('mailto:')
            return (
              <a
                key={id}
                href={href}
                className="contact-card card"
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                style={{ '--c-color': color, '--c-bg': bg, '--c-border': border }}
                aria-label={`${label}: ${handle}${isExternal ? ' (opens in new tab)' : ''}`}
              >
                <div className="contact-card__icon-wrap">
                  {icon}
                </div>
                <div className="contact-card__body">
                  <p className="contact-card__label">{label}</p>
                  <p className="contact-card__handle">{handle}</p>
                </div>
                <Send size={15} className="contact-card__arrow" />
              </a>
            )
          })}
        </div>


      </div>
    </section>
  )
}
