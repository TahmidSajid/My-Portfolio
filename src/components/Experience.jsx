import { useEffect, useRef } from 'react';
import { jobs, education } from '../data';

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

export default function Experience() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  useFadeIn(leftRef);
  useFadeIn(rightRef, 150);

  return (
    <section id="experience" style={{ background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary), var(--bg-primary))', maxWidth: '100%', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="fade-in" ref={leftRef}>
          <div className="section-tag">💼 Journey</div>
          <h2 className="section-title">
            Experience &amp; <span>Education</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            My professional timeline and academic background that shaped my development career.
          </p>
        </div>

        <div className="experience-layout">
          {/* Timeline */}
          <div>
            <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '2rem' }}>
              Work Experience
            </h3>
            <div className="timeline">
              {jobs.map((job) => (
                <div key={job.role} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-date">{job.date}</div>
                  <div className="timeline-role">{job.role}</div>
                  <div className="timeline-company">{job.company}</div>
                  <p className="timeline-desc">{job.desc}</p>
                  <div className="timeline-tags">
                    {job.tags.map((t) => (
                      <span key={t} className="timeline-tag">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="fade-in" ref={rightRef}>
            <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '2rem' }}>
              Education &amp; Certifications
            </h3>
            <div className="education-cards">
              {education.map((edu) => (
                <div key={edu.degree} className="edu-card">
                  <div className="edu-header">
                    <div className={`edu-icon ${edu.iconClass}`}>{edu.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div className="edu-degree">{edu.degree}</div>
                      <div className="edu-school">{edu.school}</div>
                    </div>
                    <div className="edu-year">{edu.year}</div>
                  </div>
                  <p className="edu-desc">{edu.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
