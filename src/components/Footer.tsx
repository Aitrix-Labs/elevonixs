import { Link } from 'react-router-dom'
import { footerColumns } from '../data'
import {
  FacebookIcon,
  LinkedInIcon,
  LogoMark,
  RssIcon,
  XIcon,
  YouTubeIcon,
} from './Icons'

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: FacebookIcon, external: true },
  { label: 'X', href: 'https://x.com/', icon: XIcon, external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: LinkedInIcon, external: true },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: YouTubeIcon, external: true },
  { label: 'RSS', href: '/resources', icon: RssIcon, external: false },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-wide">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <LogoMark className="brand-mark" />
              <span className="brand-name">elevonixs</span>
            </Link>
            <p>
              Elevonixs helps organizations turn data into trusted decisions with analytics, AI and
              governance built for the enterprise.
            </p>
            <div className="socials">
              <h2 className="socials-title">Follow Us</h2>
              <ul className="socials-list" aria-label="Social links">
                {socialLinks.map(({ label, href, icon: Icon, external }) => (
                  <li key={label}>
                    {external ? (
                      <a href={href} aria-label={label} target="_blank" rel="noreferrer">
                        <Icon />
                        <span className="sr-only">{label}</span>
                      </a>
                    ) : (
                      <Link to={href} aria-label={label}>
                        <Icon />
                        <span className="sr-only">{label}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div className="footer-col" key={column.title}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <Link to={`/${slugify(link)}`}>{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <Link to="/privacy">Privacy Statement</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/company/trust">Trust Center</Link>
            <Link to="/privacy">Cookie Preferences</Link>
          </div>
          <span>©{new Date().getFullYear()} Elevonixs. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  )
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}
