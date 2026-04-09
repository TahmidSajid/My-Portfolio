import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
import { personalInfo, navLinks, services, socialLinks } from '../data';

// Map iconKey → react-icon component
const SocialIcon = ({ iconKey }) => {
  const icons = {
    github:   <FiGithub />,
    linkedin: <FiLinkedin />,
    twitter:  <FiTwitter />,
    email:    <FiMail />,
  };
  return icons[iconKey] ?? null;
};

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="bracket">&lt;</span>
            <span></span>
            <span className="bracket">/&gt;</span>
          </div>
          <p className="footer-tagline">
            {personalInfo.role} crafting scalable web experiences. Open to freelance projects
            and full-time opportunities.
          </p>
          <div className="footer-social">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label={s.label}
              >
                <SocialIcon iconKey={s.iconKey} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <div className="footer-col-title">Navigation</div>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            {services.map((s) => (
              <li key={s}>
                <a href="#contact" onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}>
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact snippet */}
        <div>
          <div className="footer-col-title">Quick Contact</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href={`mailto:${personalInfo.email}`} style={{ fontSize: '0.875rem', color: 'var(--text-muted)', transition: 'var(--transition)' }}>
              📧 {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone}`} style={{ fontSize: '0.875rem', color: 'var(--text-muted)', transition: 'var(--transition)' }}>
              📞 {personalInfo.phone}
            </a>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              📍 {personalInfo.location}
            </span>
            {personalInfo.available && (
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                marginTop: '0.25rem',
                fontSize: '0.78rem',
                color: 'var(--accent-green)',
                background: 'rgba(0,245,160,0.08)',
                border: '1px solid rgba(0,245,160,0.15)',
                borderRadius: '50px',
                padding: '0.3rem 0.8rem',
                width: 'fit-content',
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent-green)', animation: 'blink 1.5s infinite' }} />
                Available for Work
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {year} <span>{personalInfo.name}</span>. All rights reserved.
        </p>
        <p className="footer-made">
          Built with <FiHeart className="heart" style={{ color: 'var(--accent-secondary)' }} /> using React &amp; Laravel love
        </p>
      </div>
    </footer>
  );
}
