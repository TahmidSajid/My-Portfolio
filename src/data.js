// ============================================================
// data.js — Single source of truth for all portfolio content
// Update your info here and every component updates automatically
// ============================================================

import resumePDF from './assets/resume.pdf';

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
  resumeUrl: resumePDF,   // ← auto-loaded from src/assets/resume.pdf
  available: true, // toggles the "Available for work" badge
  experience: '1.5+', // years
  projectsDone: '7',
  clients: '20+',
  primaryStack: 'Laravel',
  bio: [
    "I am a <strong>Laravel backend developer</strong> with strong experience in building SaaS platforms, fintech solutions, and scalable web applications. I focus on creating secure, maintainable, and performance-driven systems tailored for real-world business needs.",
    "I have worked on multiple production-level systems including virtual card issuing platforms, AI chatbot SaaS, booking systems, and digital commerce solutions. My goal is to deliver efficient backend architectures that power seamless user experiences."
  ],
  heroDescription:
    'I specialize in developing high-performance Laravel applications including SaaS platforms, fintech systems, AI solutions, and booking systems.',
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
  { iconKey: 'github',   href: 'https://github.com/TahmidSajid',   label: 'GitHub' },
  { iconKey: 'linkedin', href: 'https://www.linkedin.com/in/tahmid-khan-sajid-9ab41a270/', label: 'LinkedIn' },
  { iconKey: 'email',    href: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox', label: 'Email' },
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
  { name: 'Bootstrap',  iconKey: 'bootstrap',   color: '#7952b3', level: 100, category: 'Frontend' },

  // Database
  { name: 'MySQL',      iconKey: 'mysql',       color: '#4479a1', level: 100, category: 'Database' },

  // Tools
  { name: 'Git',        iconKey: 'git',         color: '#f34f29', level: 100, category: 'Tools' },
  { name: 'Composer',   iconKey: 'composer',    color: '#885630', level: 100, category: 'Tools' },
  { name: 'Postman',    iconKey: 'postman',     color: '#ff6c37', level: 100, category: 'Tools' },
  { name: 'VS Code',    iconKey: 'vscode',      color: '#007acc', level: 100, category: 'Tools' },
];

// ─── Projects ─────────────────────────────────────────────────
export const projectFilters = ['All', 'Full Stack'];

export const projects = [
  {
    name: 'PayLoad - Airtime | Data Bundles | Gift cards and VTU Full Solution',
    desc: 'PayLoad, the all-in-one platform designed for entrepreneurs to effortlessly start a profitable business in mobile top-ups, data bundles, and gift cards.',
    tags: ['Laravel', 'PHP', 'MySQL', 'jQuery'],
    emoji: '📱',
    gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)',
    accent: '#6c63ff',
    category: 'Full Stack',
    live: "https://codecanyon.net/item/payload-airtime-data-bundles-gift-cards-and-vtu-full-solution/56026497?s_rank=17",
  },
  {
    name: 'CarBo - Car Rental & Booking Management Full Solution',
    desc: 'CarBo is a comprehensive car booking and rental platform designed for seamless business management, featuring a fully integrated website, mobile apps, and an advanced admin panel.',
    tags: ['Laravel', 'PHP', 'MySQL', 'jQuery'],
    emoji: '🚗',
    gradient: 'linear-gradient(135deg, #0f3460, #16213e)',
    accent: '#00f5a0',
    category: 'Full Stack',
    live: "https://codecanyon.net/item/carbo-car-rental-booking-management-full-solution/57288398?s_rank=12",
  },
  {
    name: "MastCard - Virtual Card Issuing SAAS Full Solution",
    desc: "MastCard is a powerful and affordable Virtual Card Issuing SaaS Full Solution designed for entrepreneurs, fintech startups, digital banks, and enterprises looking to launch their own branded card issuing platform without recurring licensing fees.",
    tags: ['Laravel', 'PHP', 'MySQL', 'jQuery'],
    emoji: '💳',
    gradient: 'linear-gradient(135deg, #1a2a1a, #0a1a0a)',
    accent: '#00d9f5',
    category: 'Full Stack',
    live: 'https://codecanyon.net/item/mastcard-virtual-card-issuing-saas-full-solution/61802316?s_rank=1',
  },
  {
    name: "AdBot Pro – AI Chatbot SaaS Platform with OpenAI Full Solution",
    desc: "AdBotPro is a complete AI-powered SaaS solution built for entrepreneurs and businesses looking to launch their own chatbot platform with ease and affordability.",
    tags: ['Laravel', 'PHP', 'MySQL', 'jQuery'],
    emoji: '🤖',
    gradient: 'linear-gradient(135deg, #2a1a00, #1a0f00)',
    accent: '#ffc107',
    category: 'Full Stack',
    live: 'https://codecanyon.net/item/adbotpro-chatgpt-business-platform-website-androidios-app-admin-panel/45299173?s_rank=1',
  },
  {
    name: 'GameShop - Game Top-Up | Diamond and Coin Selling Business Platform',
    desc: 'GameShop is the ultimate gaming hub that offers a complete package for Online Game Diamond Top-Up and Gift Card Business Platform, encompassing a user-friendly website, Android and iOS apps, and a robust admin panel',
    tags: ['Laravel', 'PHP', 'MySQL', 'jQuery'],
    emoji: '📱',
    gradient: 'linear-gradient(135deg, #1a0a2e, #120020)',
    accent: '#ff6584',
    category: 'Full Stack',
    live: 'https://codecanyon.net/item/gameshop-game-topup-diamond-and-coin-selling-business-platform/48224092?s_rank=1',
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
