import { useEffect, useRef, useState } from 'react';
import {
  FiMail, FiPhone, FiMapPin,
  FiGithub, FiLinkedin, FiTwitter, FiSend,
  FiCheckCircle, FiAlertCircle,
} from 'react-icons/fi';

// ─── Fade-in hook ─────────────────────────────────────────
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

// ─── Static contact data ──────────────────────────────────
const contactInfo = [
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'tahmidkhansajid@gmail.com',
    href: 'mailto:tahmidkhansajid@gmail.com',
  },
  {
    icon: <FiPhone />,
    label: 'Phone',
    value: '+8801799863305',
    href: 'tel:+8801799863305',
  },
  {
    icon: <FiMapPin />,
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    href: null,
  },
];

const socials = [
  { icon: <FiGithub />,   href: 'https://github.com',   label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <FiTwitter />,  href: 'https://twitter.com',  label: 'Twitter' },
];

// ─── Web3Forms access key ─────────────────────────────────
// 1. Go to https://web3forms.com
// 2. Enter: tahmidkhansajid@gmail.com
// 3. Check your inbox → copy the access key
// 4. Paste it below 👇
const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY_HERE';

// ─── Component ────────────────────────────────────────────
export default function Contact() {
  const leftRef  = useRef(null);
  const rightRef = useRef(null);
  useFadeIn(leftRef);
  useFadeIn(rightRef, 150);

  const emptyForm = { name: '', email: '', subject: '', message: '' };
  const [form,     setForm]     = useState(emptyForm);
  const [status,   setStatus]   = useState(null);   // null | 'sending' | 'success' | 'error'
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === 'message') setCharCount(value.length);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio Contact: ${form.subject}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          message: form.message,
          // Honeypot — blocks spam bots silently
          botcheck: '',
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setForm(emptyForm);
        setCharCount(0);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const isLoading = status === 'sending';

  return (
    <section id="contact">
      {/* ── Header ── */}
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
        {/* ── Left: Info ── */}
        <div className="contact-info fade-in" ref={leftRef}>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              Get in Touch
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              I'm currently available for freelance projects and full-time opportunities.
              My typical response time is{' '}
              <strong style={{ color: 'var(--accent-primary)' }}>within 24 hours</strong>.
            </p>
          </div>

          {/* Contact info cards */}
          <div className="contact-info-cards">
            {contactInfo.map((item) => (
              <div key={item.label} className="contact-info-card">
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <div className="contact-info-label">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="contact-info-value"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="contact-info-value">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Availability badge */}
          <div style={{
            background: 'rgba(0,245,160,0.05)',
            border: '1px solid rgba(0,245,160,0.15)',
            borderRadius: 'var(--radius-sm)',
            padding: '1.2rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <span style={{
                width: 10, height: 10, borderRadius: '50%',
                background: 'var(--accent-green)',
                animation: 'blink 1.5s infinite',
                display: 'inline-block',
              }} />
              <span style={{ fontWeight: 600, color: 'var(--accent-green)', fontSize: '0.9rem' }}>
                Available for work
              </span>
            </div>
            <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Open to full-time roles and freelance projects.
              Prefer remote-first, open to hybrid in Dhaka.
            </p>
          </div>

          {/* Socials */}
          <div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              Find me on
            </div>
            <div className="contact-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: Form ── */}
        <div className="contact-form-wrap fade-in" ref={rightRef}>
          <h3 className="form-title">Send Me a Message</h3>

          <form className="form" onSubmit={handleSubmit}>

            <div className="form-row">
              {/* Name */}
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your Name *</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email Address *</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Subject */}
            <div className="form-group">
              <label className="form-label" htmlFor="contact-subject">Subject *</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                className="form-input"
                placeholder="Project Inquiry / Collaboration / Hiring..."
                value={form.subject}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            {/* Message */}
            <div className="form-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label className="form-label" htmlFor="contact-message">Message *</label>
                <span style={{
                  fontSize: '0.75rem',
                  color: charCount > 800 ? 'var(--accent-secondary)' : 'var(--text-muted)',
                }}>
                  {charCount} / 1000
                </span>
              </div>
              <textarea
                id="contact-message"
                name="message"
                className="form-textarea"
                placeholder="Tell me about your project, timeline, and budget..."
                value={form.message}
                onChange={handleChange}
                maxLength={1000}
                required
                disabled={isLoading}
              />
            </div>

            {/* Status messages */}
            {status === 'success' && (
              <div className="form-status success" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <FiCheckCircle size={18} />
                <span>
                  Message sent! I'll reply to <strong>{form.email || 'you'}</strong> within 24 hours. 🎉
                </span>
              </div>
            )}

            {status === 'error' && (
              <div className="form-status error" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <FiAlertCircle size={18} />
                <span>
                  Failed to send. Email me directly at{' '}
                  <a
                    href="mailto:tahmidkhansajid@gmail.com"
                    style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}
                  >
                    tahmidkhansajid@gmail.com
                  </a>
                </span>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              id="contact-submit-btn"
              className="btn-submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span style={{ display: 'inline-block', animation: 'spin 1s linear infinite' }}>⟳</span>
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
