import { useEffect, useRef, useState } from 'react';
import {
  FaLaravel, FaPhp, FaVuejs, FaReact, FaDocker,
  FaGitAlt, FaLinux, FaNodeJs, FaAws
} from 'react-icons/fa';
import {
  SiMysql, SiPostgresql, SiRedis, SiNginx,
  SiComposer, SiTailwindcss, SiJavascript,
  SiFilament, SiPostman, SiBootstrap
} from 'react-icons/si';
import { TbApi, TbBrandVscode } from 'react-icons/tb';
import { skills, skillCategories } from '../data';

// Map iconKey → colored react-icon element
const resolveIcon = (iconKey, color) => {
  const map = {
    laravel:    <FaLaravel color={color} />,
    php:        <FaPhp color={color} />,
    api:        <TbApi color={color} />,
    nodejs:     <FaNodeJs color={color} />,
    vuejs:      <FaVuejs color={color} />,
    react:      <FaReact color={color} />,
    javascript: <SiJavascript color={color} />,
    tailwind:   <SiTailwindcss color={color} />,
    mysql:      <SiMysql color={color} />,
    postgresql: <SiPostgresql color={color} />,
    redis:      <SiRedis color={color} />,
    docker:     <FaDocker color={color} />,
    aws:        <FaAws color={color} />,
    linux:      <FaLinux color={color} />,
    nginx:      <SiNginx color={color} />,
    git:        <FaGitAlt color={color} />,
    composer:   <SiComposer color={color} />,
    postman:    <SiPostman color={color} />,
    vscode:     <TbBrandVscode color={color} />,
    filament:   <SiFilament color={color} />,
    bootstrap:  <SiBootstrap color={color} />,
  };
  return map[iconKey] ?? <span style={{ color }}>{iconKey[0].toUpperCase()}</span>;
};

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

export default function Skills() {
  const [active, setActive] = useState('All');
  const sectionRef = useRef(null);
  useFadeIn(sectionRef);

  const filtered = active === 'All' ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" style={{ background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary), var(--bg-primary))', maxWidth: '100%', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="skills-header fade-in" ref={sectionRef}>
          <div className="section-tag">⚡ My Arsenal</div>
          <h2 className="section-title">
            Skills &amp; <span>Technologies</span>
          </h2>
          <p className="section-subtitle">
            The tools and technologies I use to bring ideas to life — from backend architecture
            to deployment pipelines.
          </p>
        </div>

        <div className="skills-categories">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              className={`skill-cat-btn ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filtered.map((skill, i) => (
            <SkillCard
              key={skill.name}
              skill={{ ...skill, icon: resolveIcon(skill.iconKey, skill.color) }}
              delay={i * 40}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, delay }) {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setAnimate(true), delay);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div className="skill-card" ref={ref}>
      <div className="skill-icon">{skill.icon}</div>
      <div className="skill-name">{skill.name}</div>
      <div className="skill-level">
        <div
          className="skill-level-fill"
          style={{ width: animate ? `${skill.level}%` : '0%' }}
        />
      </div>
    </div>
  );
}
