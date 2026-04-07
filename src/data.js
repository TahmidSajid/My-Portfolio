// ============================================================
// data.js — Single source of truth for all portfolio content
// Update your info here and every component updates automatically
// ============================================================

// ─── Personal Info ───────────────────────────────────────────
export const personalInfo = {
  name: 'Tahmid Khan Sajid',
  shortName: 'Tahmid Khan Sajid',          // used in the hero greeting
  greeting: 'Hello, I am',     // greeting line above the name
  initials: 'TKS',
  heroImage: '/hero.png',      // put your photo in the /public folder as hero.png
  role: 'Laravel Developer',
  email: 'tahmidkhansajid@gmail.com',
  phone: '+8801799863305',
  location: 'Dhaka, Bangladesh',
  resumeUrl: '/resume.pdf',
  available: true, // toggles the "Available for work" badge
  experience: '1.5+', // years
  projectsDone: '7',
  clients: '20+',
  primaryStack: 'Laravel',
  bio: [
    "I'm a passionate <strong>Laravel &amp; PHP developer</strong> with 1.5+ years of experience crafting scalable, high-performance web applications. I specialize in designing clean RESTful APIs, optimizing database queries, and delivering maintainable codebases that teams love to work with.",
    "Beyond the backend, I'm comfortable in Vue.js, React, and modern front-end tooling — which means I can own features end-to-end and collaborate seamlessly with any team.",
  ],
  heroDescription:
    'Passionate Laravel developer specializing in building robust, scalable web applications with clean code and elegant APIs. I turn complex business requirements into elegant digital solutions.',
};

// ─── Typed Roles (Hero typewriter) ───────────────────────────
export const heroRoles = [
  'Laravel Developer',
  'PHP Developer',
  'Full Stack Developer',
  'REST API Builder',
];

// ─── Nav Links ────────────────────────────────────────────────
export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

// ─── Social Links ─────────────────────────────────────────────
// iconKey maps to react-icons used in components
export const socialLinks = [
  { iconKey: 'github',   href: 'https://github.com',   label: 'GitHub' },
  { iconKey: 'linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
  { iconKey: 'twitter',  href: 'https://twitter.com',  label: 'Twitter' },
  { iconKey: 'email',    href: `mailto:your@email.com`, label: 'Email' },
];

// ─── Stats (About section) ────────────────────────────────────
export const aboutStats = [
  { number: '1.5+', label: 'Years Exp.' },
  { number: '7', label: 'Projects' },
  { number: '2+', label: 'Clients' },
];

// ─── About Info Grid ──────────────────────────────────────────
// iconKey maps to react-icons used in About.jsx
export const aboutInfo = [
  { iconKey: 'user',     label: 'Name',       value: 'Tahmid Khan Sajid' },
  { iconKey: 'location', label: 'Location',   value: 'Dhaka, Bangladesh' },
  { iconKey: 'email',    label: 'Email',      value: 'tahmidkhansajid@gmail.com' },
  { iconKey: 'phone',    label: 'Phone',      value: '+880 1799863305' },
  { iconKey: 'calendar', label: 'Experience', value: '1.5+ Years' },
  { iconKey: 'code',     label: 'Specialty',  value: 'Laravel & PHP' },
];

// ─── Skills ───────────────────────────────────────────────────
// iconKey is used in Skills.jsx to render the correct react-icon
export const skillCategories = ['All', 'Backend', 'Frontend', 'Database', 'Tools'];

export const skills = [
  // Backend
  { name: 'Laravel',    iconKey: 'laravel',     color: '#ff2d20', level: 100, category: 'Backend' },
  { name: 'PHP',        iconKey: 'php',         color: '#777bb4', level: 100, category: 'Backend' },
  { name: 'REST API',   iconKey: 'api',         color: '#00d9f5', level: 100, category: 'Backend' },

  // Frontend
  { name: 'React',      iconKey: 'react',       color: '#61dafb', level: 100, category: 'Frontend' },
  { name: 'JavaScript', iconKey: 'javascript',  color: '#f7df1e', level: 100, category: 'Frontend' },
  { name: 'Tailwind',   iconKey: 'tailwind',    color: '#38bdf8', level: 100, category: 'Frontend' },

  // Database
  { name: 'MySQL',      iconKey: 'mysql',       color: '#4479a1', level: 100, category: 'Database' },

  // Tools
  { name: 'Git',        iconKey: 'git',         color: '#f34f29', level: 100, category: 'Tools' },
  { name: 'Composer',   iconKey: 'composer',    color: '#885630', level: 100, category: 'Tools' },
  { name: 'Postman',    iconKey: 'postman',     color: '#ff6c37', level: 100, category: 'Tools' },
  { name: 'VS Code',    iconKey: 'vscode',      color: '#007acc', level: 100, category: 'Tools' },
];

// ─── Projects ─────────────────────────────────────────────────
export const projectFilters = ['All', 'Full Stack', 'API'];

export const projects = [
  {
    name: 'MediCare HMS',
    desc: 'Full-featured Hospital Management System with patient records, appointments, billing, and real-time notifications. Multi-role auth with Laravel Sanctum.',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'Tailwind'],
    emoji: '🏥',
    gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)',
    accent: '#6c63ff',
    category: 'Full Stack',
    featured: true,
    stars: 128,
    live: 'https://medicare.example.com',
    github: 'https://github.com',
  },
  {
    name: 'ShopVault E-Commerce',
    desc: 'Multi-vendor e-commerce platform with Stripe payments, inventory management, order tracking, and an advanced admin dashboard built with Filament.',
    tags: ['Laravel', 'Filament', 'Stripe', 'MySQL', 'Livewire'],
    emoji: '🛒',
    gradient: 'linear-gradient(135deg, #0f3460, #16213e)',
    accent: '#00f5a0',
    category: 'Full Stack',
    featured: true,
    stars: 95,
    live: 'https://shopvault.example.com',
    github: 'https://github.com',
  },
  {
    name: 'TaskFlow API',
    desc: 'RESTful project management API with JWT auth, team workspaces, real-time events via Pusher, and comprehensive Swagger documentation.',
    tags: ['Laravel', 'REST API', 'JWT', 'Pusher', 'Swagger'],
    emoji: '📋',
    gradient: 'linear-gradient(135deg, #1a2a1a, #0a1a0a)',
    accent: '#00d9f5',
    category: 'API',
    featured: false,
    stars: 74,
    live: null,
    github: 'https://github.com',
  },
  {
    name: 'EduCloud LMS',
    desc: 'Learning management system supporting video courses, quizzes, progress tracking, certificate generation with mPDF, and subscription billing.',
    tags: ['Laravel', 'Vue.js', 'FFmpeg', 'mPDF', 'Stripe'],
    emoji: '🎓',
    gradient: 'linear-gradient(135deg, #2a1a00, #1a0f00)',
    accent: '#ffc107',
    category: 'Full Stack',
    featured: false,
    stars: 61,
    live: 'https://educloud.example.com',
    github: 'https://github.com',
  },
  {
    name: 'QuickSMS Gateway',
    desc: 'High-throughput SMS broadcasting service with queue-based delivery, delivery reports, contact list management, and a webhook integration system.',
    tags: ['Laravel', 'Queues', 'Redis', 'Twilio', 'Webhook'],
    emoji: '📱',
    gradient: 'linear-gradient(135deg, #1a0a2e, #120020)',
    accent: '#ff6584',
    category: 'API',
    featured: false,
    stars: 43,
    live: null,
    github: 'https://github.com',
  },
  {
    name: 'HRpulse System',
    desc: 'Human Resources management platform covering employee lifecycle, leave tracking, payroll calculation, and performance reviews with PDF reports.',
    tags: ['Laravel', 'Filament', 'MySQL', 'dompdf', 'Vue.js'],
    emoji: '👥',
    gradient: 'linear-gradient(135deg, #001a1a, #002a2a)',
    accent: '#00d9f5',
    category: 'Full Stack',
    featured: false,
    stars: 88,
    live: 'https://hrpulse.example.com',
    github: 'https://github.com',
  },
];

// ─── Work Experience ──────────────────────────────────────────
export const jobs = [
  {
    date: 'Jul 2024 – Feb 2026',
    role: 'Junior Backend Developer (Laravel)',
    company: 'AppDevs Solution Ltd.',
    desc: 'Worked as a Jr. Backend Laravel Developer at AppDevs, where I built and maintained fintech and SaaS applications. Improved existing systems and integrated third-party APIs to enhance functionality.',
    tags: ['Laravel', 'PHP','JavaScript','jQuery', 'MySQL', 'REST API'],
  },
  {
    date: 'March 2024 – Jun 2024',
    role: 'Junior Web Developer (Internship)',
    company: 'Creative IT Institute',
    desc: 'Completed an internship at Creative IT Institute, where I developed multiple Laravel-based projects to strengthen my skills. Worked on both front-end and back-end development, building dynamic features and improving overall application functionality.',
    tags: ['Laravel', 'PHP', 'JavaScript', 'MySQL', 'HTML/CSS'],
  },
];

// ─── Education & Certifications ───────────────────────────────
export const education = [
  {
    icon: '🎓',
    iconClass: 'purple',
    degree: 'B.Sc. in Computer Science & Engineering',
    school: 'Sonargaon University',
    year: '2026 (Running)',
  },
  {
    icon: '🏆',
    iconClass: 'green',
    degree: 'Diploma in Professional Web Development (Laravel)',
    school: 'Creative IT Institute',
    year: '2022-2023',
  },
];

// ─── Services (Footer) ────────────────────────────────────────
export const services = [
  'Laravel Development',
  'REST API Design',
  'SaaS Applications',
  'Fintech Applications',
  'Third Party API Intregation',
  'Payment Gateway Integration',
  'Web Application Development',
  'Open AI API Intregation',
  'AI Chatbot Development',
];

// ─── Contact Info ─────────────────────────────────────────────
export const contactInfo = [
  { iconKey: 'email',    label: 'Email',    value: 'tahmidkhansajid@gmail.com',   href: 'mailto:tahmidkhansajid@gmail.com' },
  { iconKey: 'phone',    label: 'Phone',    value: '+880 1799863305', href: 'tel:+8801799863305' },
  { iconKey: 'location', label: 'Location', value: 'Dhaka, Bangladesh', href: null },
];
