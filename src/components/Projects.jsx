import { useEffect, useRef, useState } from 'react';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import { projects, projectFilters } from '../data';

function useFadeIn(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible'); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}

export default function Projects() {
  const [active, setActive] = useState('All');
  const headerRef = useRef(null);
  useFadeIn(headerRef);

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects">
      <div className="projects-header fade-in" ref={headerRef}>
        <div>
          <div className="section-tag">🚀 Portfolio</div>
          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>
        </div>
        <div className="projects-filter">
          {projectFilters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filtered.map((project, i) => (
          <ProjectCard key={project.name} project={project} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), delay);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div className="project-card fade-in" ref={ref}>
      {/* Image / Preview */}
      <div className="project-img">
        <div
          className="project-img-bg"
          style={{ background: project.gradient }}
        >
          <span style={{ fontSize: '5rem', filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.5))' }}>
            {project.emoji}
          </span>
        </div>
        <div className="project-overlay">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-overlay-btn primary"
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
          {/* <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-overlay-btn outline"
          >
            <FiGithub /> Source
          </a> */}
        </div>
      </div>

      {/* Body */}
      <div className="project-body">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="project-tags">
            {project.tags.slice(0, 3).map((t) => (
              <span key={t} className="project-tag">{t}</span>
            ))}
            {project.tags.length > 3 && (
              <span className="project-tag">+{project.tags.length - 3}</span>
            )}
          </div>
          {project.featured && (
            <span className="project-badge featured">⭐ Featured</span>
          )}
        </div>

        <h3 className="project-name">{project.name}</h3>
        <p className="project-desc">{project.desc}</p>

        <div className="project-footer">
          <div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                <FiGithub /> Code
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                <FiExternalLink /> Demo
              </a>
            )}
          </div>
          {/* <div className="project-stars">
            <FiStar /> {project.stars}
          </div> */}
        </div>
      </div>
    </div>
  );
}
