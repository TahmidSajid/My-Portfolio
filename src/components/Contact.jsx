import { useEffect, useRef, useState } from 'react';
import {
  FiMail, FiPhone, FiMapPin,
  FiGithub, FiLinkedin, FiTwitter, FiSend
} from 'react-icons/fi';
import { contactInfo, socialLinks, personalInfo } from '../data';

function useFadeIn(ref, delay = 0) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), delay);
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, delay]);
}

// Map iconKey → react-icon component
const ContactIcon = ({ iconKey }) => {
  const icons = {
    email:    <FiMail />,
    phone:    <FiPhone />,
    location: <FiMapPin />,
  };
  return icons[iconKey] ?? null;
};

const SocialIcon = ({ iconKey }) => {
  const icons = {
    github:   <FiGithub />,
    linkedin: <FiLinkedin />,
    twitter:  <FiTwitter />,
  };
  return icons[iconKey] ?? null;
};

// Only show social links that have a matching icon in Contact (no email)
const contactSocials = socialLinks.filter((s) => ['github', 'linkedin', 'twitter'].includes(s.iconKey));

export default function Contact() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  useFadeIn(leftRef);
  useFadeIn(rightRef, 150);

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Simulate async send — replace with EmailJS or your API call
    try {
      await new Promise((res) => setTimeout(res, 1500));
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div className="section-tag">📬 Contact</div>
        <h2 className="section-title">
          Let's <span>Work Together</span>
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Have a project in mind? Whether it's a new web app, API integration, or consulting —
          I'd love to hear about it.
        </p>
      </div>

      <div className="contact-layout">
        {/* Left - Info */}
        <div className="contact-info fade-in" ref={leftRef}>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>
              Get in Touch
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              I'm currently available for freelance projects and full-time opportunities.
              My typical response time is within 24 hours.
            </p>
          </div>

          <div className="contact-info-cards">
            {contactInfo.map((item) => (
              <div key={item.label} className="contact-info-card">
                <div className="contact-icon">
                  <ContactIcon iconKey={item.iconKey} />
                </div>
                <div>
                  <div className="contact-info-label">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="contact-info-value" style={{ color: 'var(--text-primary)' }}>
                      {item.value}
                    </a>
                  ) : (
                    <div className="contact-info-value">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Availability */}
          {personalInfo.available && (
            <div style={{
              background: 'rgba(0,245,160,0.05)',
              border: '1px solid rgba(0,245,160,0.15)',
              borderRadius: 'var(--radius-sm)',
              padding: '1.2rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--accent-green)', animation: 'blink 1.5s infinite', display: 'inline-block' }} />
                <span style={{ fontWeight: 600, color: 'var(--accent-green)', fontSize: '0.9rem' }}>
                  Available for work
                </span>
              </div>
              <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Open to full-time roles and freelance projects. Prefer remote-first, open to hybrid in {personalInfo.location.split(',')[0]}.
              </p>
            </div>
          )}

          {/* Socials */}
          <div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              Find me on
            </div>
            <div className="contact-socials">
              {contactSocials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn"
                  aria-label={s.label}
                >
                  <SocialIcon iconKey={s.iconKey} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="contact-form-wrap fade-in" ref={rightRef}>
          <h3 className="form-title">Send Me a Message</h3>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder={personalInfo.email}
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="subject">Subject *</label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="form-input"
                placeholder="Project Inquiry / Collaboration..."
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Tell me about your project, timeline, and budget..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {status === 'success' && (
              <div className="form-status success">
                ✅ Message sent successfully! I'll get back to you within 24 hours.
              </div>
            )}
            {status === 'error' && (
              <div className="form-status error">
                ❌ Something went wrong. Please try again or email me directly at {personalInfo.email}.
              </div>
            )}

            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? (
                <>
                  <span style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}>⟳</span>
                  Sending...
                </>
              ) : (
                <><FiSend /> Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
