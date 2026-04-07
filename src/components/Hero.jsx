import { useEffect, useRef, useState } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';
import { personalInfo, heroRoles, socialLinks } from '../data';

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

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = heroRoles[roleIndex];
    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % heroRoles.length);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, roleIndex]);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero" style={{ maxWidth: '100%', padding: 0 }}>
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="hero-content">
        {/* ── Left ── */}
        <div className="hero-left">

          {/* Availability badge */}
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for Freelance &amp; Full-time
          </div>

          {/* Greeting */}
          <div className="hero-greeting">
            {personalInfo.greeting}
          </div>

          {/* Name */}
          <h1 className="hero-name-title">
            <span className="hero-name-highlight">{personalInfo.shortName}</span>
          </h1>

          {/* Typewriter role */}
          <div className="hero-typed-wrapper">
            <span className="typed-prefix">$_</span>
            <span className="hero-typed">
              {displayed}
              <span style={{ borderRight: '2px solid #00d9f5', marginLeft: 2, animation: 'blink 1s step-end infinite' }} />
            </span>
          </div>

          <p className="hero-desc">{personalInfo.heroDescription}</p>

          {/* CTA buttons */}
          <div className="hero-actions">
            <a
              href="#projects"
              className="btn-primary"
              onClick={(e) => { e.preventDefault(); handleScroll('#projects'); }}
            >
              View Projects <FiArrowRight />
            </a>
            <a href={personalInfo.resumeUrl} className="btn-outline" download>
              <FiDownload /> Download CV
            </a>
          </div>

          {/* Social links */}
          <div className="hero-social">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                <SocialIcon iconKey={s.iconKey} />
              </a>
            ))}
          </div>
        </div>

        {/* ── Right — Photo ── */}
        <div className="hero-right">
          <div className="hero-photo-wrap">
            {/* Animated glow rings */}
            <div className="hero-photo-ring" />
            <div className="hero-photo-ring-2" />

            {/* Actual photo */}
            <div className="hero-photo-frame">
              <img
                src={personalInfo.heroImage}
                alt={personalInfo.name}
                className="hero-photo-img"
                onError={(e) => {
                  // fallback initials if image missing
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback initials */}
              <div className="hero-photo-fallback" style={{ display: 'none' }}>
                {personalInfo.initials}
              </div>
            </div>

            {/* Floating stat badges */}
            <div className="hero-float-badge" style={{ top: '8%', left: '-10%', width: '140px'}}>
              <div className="float-badge-label">Experience</div>
              <div className="float-badge-value purple">{personalInfo.experience} Years</div>
            </div>
            <div className="hero-float-badge" style={{ bottom: '18%', left: '-14%' }}>
              <div className="float-badge-label">Projects Done</div>
              <div className="float-badge-value green">{personalInfo.projectsDone}+</div>
            </div>
            <div className="hero-float-badge" style={{ top: '12%', right: '-10%' }}>
              <div className="float-badge-label">Stack</div>
              <div className="float-badge-value blue">{personalInfo.primaryStack}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          animation: 'floatBadge 2s ease infinite',
          cursor: 'pointer',
        }}
        onClick={() => handleScroll('#about')}
      >
        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '2px' }}>SCROLL</span>
        <div style={{
          width: '24px', height: '40px',
          border: '2px solid var(--border-hover)',
          borderRadius: '12px',
          display: 'flex', justifyContent: 'center', paddingTop: '6px',
        }}>
          <div style={{
            width: '4px', height: '8px',
            background: 'var(--accent-primary)',
            borderRadius: '2px',
            animation: 'scrollDot 1.5s ease infinite',
          }} />
        </div>
      </div>

      <style>{`
        /* ── Greeting ── */
        .hero-greeting {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          font-weight: 500;
          color: var(--accent-primary);
          letter-spacing: 0.04em;
          margin-bottom: 0.2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .hero-greeting::before {
          content: '';
          display: inline-block;
          width: 32px;
          height: 2px;
          background: var(--accent-primary);
          border-radius: 2px;
        }

        /* ── Name title ── */
        .hero-name-title {
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 900;
          line-height: 1;
          margin: 0.1rem 0 0.6rem;
          background: linear-gradient(135deg, #fff 30%, var(--accent-primary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-name-highlight {
          display: inline-block;
        }

        /* ── Photo frame ── */
        .hero-photo-wrap {
          position: relative;
          width: min(340px, 80vw);
          height: min(420px, 90vw);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-photo-ring {
          position: absolute;
          inset: -18px;
          border-radius: 50% 40% 50% 40%;
          border: 2px solid rgba(108,99,255,0.35);
          animation: spinSlow 12s linear infinite;
        }
        .hero-photo-ring-2 {
          position: absolute;
          inset: -32px;
          border-radius: 40% 50% 40% 50%;
          border: 1px solid rgba(0,217,245,0.2);
          animation: spinSlow 18s linear infinite reverse;
        }
        .hero-photo-frame {
          width: 280px;
          height: 340px;
          border-radius: 48% 52% 46% 54% / 44% 40% 60% 56%;
          overflow: hidden;
          position: relative;
          border: 3px solid transparent;
          background:
            linear-gradient(var(--bg-primary), var(--bg-primary)) padding-box,
            linear-gradient(135deg, #6c63ff, #00d9f5) border-box;
          box-shadow:
            0 0 40px rgba(108,99,255,0.25),
            0 0 80px rgba(0,217,245,0.1);
          animation: morphBlob 8s ease-in-out infinite;
        }
        .hero-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }
        .hero-photo-fallback {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #6c63ff22, #00d9f522);
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          font-weight: 900;
          color: var(--accent-primary);
          letter-spacing: 2px;
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes morphBlob {
          0%,100% { border-radius: 48% 52% 46% 54% / 44% 40% 60% 56%; }
          25%      { border-radius: 55% 45% 55% 45% / 52% 48% 52% 48%; }
          50%      { border-radius: 42% 58% 50% 50% / 56% 44% 56% 44%; }
          75%      { border-radius: 50% 50% 45% 55% / 46% 54% 46% 54%; }
        }
        @keyframes scrollDot {
          0%   { transform: translateY(0);    opacity: 1; }
          100% { transform: translateY(14px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
