import { useEffect, useRef } from 'react';
import { FiMapPin, FiMail, FiPhone, FiCalendar, FiUser, FiCode } from 'react-icons/fi';
import { personalInfo, aboutStats, aboutInfo } from '../data';

function useFadeIn(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}

// Map iconKey → react-icon component
const InfoIcon = ({ iconKey }) => {
  const icons = {
    user:     <FiUser />,
    location: <FiMapPin />,
    email:    <FiMail />,
    phone:    <FiPhone />,
    calendar: <FiCalendar />,
    code:     <FiCode />,
  };
  return icons[iconKey] ?? null;
};

// Build code window lines dynamically from personalInfo
const buildCodeLines = () => [
  { ln: 1,  parts: [{ cls: 'code-comment', text: `// About Me - ${personalInfo.role}` }] },
  { ln: 2,  parts: [] },
  { ln: 3,  parts: [{ cls: 'code-keyword', text: 'class ' }, { cls: 'code-var', text: 'Developer' }, { cls: 'code-bracket', text: ' {' }] },
  { ln: 4,  parts: [{ cls: 'code-keyword', text: '  public ' }, { cls: 'code-property', text: 'string ' }, { cls: 'code-var', text: '$name' }, { cls: 'code-bracket', text: ' = ' }, { cls: 'code-string', text: `"${personalInfo.name}"` }, { cls: 'code-bracket', text: ';' }] },
  { ln: 5,  parts: [{ cls: 'code-keyword', text: '  public ' }, { cls: 'code-property', text: 'string ' }, { cls: 'code-var', text: '$role' }, { cls: 'code-bracket', text: ' = ' }, { cls: 'code-string', text: `"${personalInfo.role}"` }, { cls: 'code-bracket', text: ';' }] },
  { ln: 6,  parts: [{ cls: 'code-keyword', text: '  public ' }, { cls: 'code-property', text: 'int ' }, { cls: 'code-var', text: '$experience' }, { cls: 'code-bracket', text: ' = ' }, { cls: 'code-number', text: personalInfo.experience.replace('+', '') }, { cls: 'code-bracket', text: ';' }] },
  { ln: 7,  parts: [] },
  { ln: 8,  parts: [{ cls: 'code-keyword', text: '  public function ' }, { cls: 'code-var', text: 'info' }, { cls: 'code-bracket', text: '(): array {' }] },
  { ln: 9,  parts: [{ cls: 'code-keyword', text: '    return ' }, { cls: 'code-bracket', text: '[' }] },
  { ln: 10, parts: [{ cls: 'code-string', text: '      "location"' }, { cls: 'code-bracket', text: ' => ' }, { cls: 'code-string', text: `"${personalInfo.location}"` }, { cls: 'code-bracket', text: ',' }] },
  { ln: 11, parts: [{ cls: 'code-string', text: '      "email"' }, { cls: 'code-bracket', text: ' => ' }, { cls: 'code-string', text: `"${personalInfo.email}"` }, { cls: 'code-bracket', text: ',' }] },
  { ln: 12, parts: [{ cls: 'code-string', text: '      "status"' }, { cls: 'code-bracket', text: ' => ' }, { cls: 'code-string', text: personalInfo.available ? '"Available"' : '"Unavailable"' }, { cls: 'code-bracket', text: ',' }] },
  { ln: 13, parts: [{ cls: 'code-bracket', text: '    ];' }] },
  { ln: 14, parts: [{ cls: 'code-bracket', text: '  }' }] },
  { ln: 15, parts: [{ cls: 'code-bracket', text: '}' }] },
];

export default function About() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  useFadeIn(leftRef);
  useFadeIn(rightRef);

  const codeLines = buildCodeLines();

  return (
    <section id="about">
      <div className="about-grid">
        {/* Code Window */}
        <div className="about-image-wrap fade-in" ref={leftRef}>
          <div className="about-code-window">
            <div className="code-window-bar">
              <span className="code-dot red" />
              <span className="code-dot yellow" />
              <span className="code-dot green" />
              <span className="code-window-title">Developer.php</span>
            </div>
            <div className="code-window-body">
              {codeLines.map((line) => (
                <div key={line.ln} className="code-line">
                  <span className="code-ln">{line.ln}</span>
                  <span>
                    {line.parts.map((p, i) => (
                      <span key={i} className={p.cls}>{p.text}</span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="about-right fade-in" ref={rightRef} style={{ transitionDelay: '0.15s' }}>
          <div>
            <div className="section-tag">🙋‍♂️ About Me</div>
            <h2 className="section-title">
              Building the Web,<br />
              <span>One Route at a Time</span>
            </h2>
          </div>

          {personalInfo.bio.map((paragraph, i) => (
            <p
              key={i}
              className="about-text"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}

          <div className="about-stats">
            {aboutStats.map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="about-info-grid">
            {aboutInfo.map((item) => (
              <div key={item.label} className="about-info-item">
                <span className="info-icon"><InfoIcon iconKey={item.iconKey} /></span>
                <div>
                  <div className="info-label">{item.label}</div>
                  <div className="info-value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#contact"
              className="btn-primary"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); }}
            >
              Get in Touch
            </a>
            <a href={personalInfo.resumeUrl} download className="btn-outline">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
