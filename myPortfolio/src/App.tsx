import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaCopy,
  FaCheck,
  FaGlobe,
  FaChevronRight,
  FaBars,
  FaTimes,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaShieldAlt,
  FaTerminal,
  FaMedal,
  FaGraduationCap,
  FaBriefcase,
  FaArrowRight,
  FaStar,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { ProjectModal } from "./components/ProjectModal";
import type { ProjectData } from "./components/ProjectModal";

// --- Project Data ---
const projectsData: ProjectData[] = [
  {
    title: "Nycapexrental",
    subtitle: "Luxury Real Estate Listing Platform",
    tag: "Featured Full Stack",
    category: "fullstack",
    desc: "A luxury NYC rental and sales platform featuring cinematic video property tours, filterable property listings (by price, bedrooms, status), and an authenticated admin panel for inventory and inquiry management. Built solo end-to-end: schema design, public-facing UI, and admin dashboard.",
    challenge: "Designed and debugged Supabase Row-Level Security (RLS) policies so that public visitors can browse live listings while admin-only data and management actions stay properly gated — a common but easy-to-get-wrong pattern in Supabase-backed apps that directly affects data integrity and security.",
    image: "/images/nycapexrental.png",
    link: "https://nycapexrental.com",
    isLive: true,
    stack: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    features: [
      "Cinematic video property walkthroughs",
      "Real-time filterable listings (price, beds, status)",
      "Authenticated admin panel for inventory control",
      "Granular Supabase Row-Level Security (RLS)",
      "Responsive high-luxury UI architecture"
    ]
  },
  {
    title: "Truist Surge Bank",
    subtitle: "Banking Management System",
    tag: "Full Stack MERN",
    category: "fullstack",
    desc: "A full banking workflow simulation featuring secure authentication, role-based access control (RBAC), account management, transaction processing, and an admin dashboard for system oversight.",
    challenge: "Implemented role-based access and JWT-secured routes so regular users and admins see and act on strictly different data, while keeping transaction logic consistent and auditable across accounts.",
    image: "/images/truist.png",
    link: "https://truist-surge-bank.vercel.app/",
    isLive: true,
    stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    features: [
      "Role-Based Access Control (Admin & User)",
      "Secure JWT route protection & session management",
      "Auditable transaction processing engine",
      "Interactive analytics & account control dashboard"
    ]
  },
  {
    title: "Edukaster Mobile App",
    subtitle: "Online Tutor Booking App",
    tag: "Mobile React Native",
    category: "mobile",
    desc: "A mobile marketplace connecting students with tutors for online sessions. Students can browse tutor profiles, book live sessions, and manage schedules from the mobile app, backed by a Node.js/Express API for auth and booking management.",
    challenge: "Built the booking flow so it reliably reflects tutor availability and prevents conflicting session bookings, while keeping the mobile UI responsive across the auth and booking API calls.",
    image: "/images/edukaster.jpeg",
    link: "https://github.com/iGWE-eDWIN/EdukasterServer",
    githubLink: "https://github.com/iGWE-eDWIN/EdukasterServer",
    isLive: false,
    stack: ["React Native", "Node.js", "Express.js", "MongoDB", "REST API"],
    features: [
      "Tutor discovery & availability schedule finder",
      "Double-booking concurrency protection",
      "Cross-platform iOS/Android React Native UI",
      "Secure student/tutor auth & profile management"
    ]
  },
  {
    title: "Nexus Express",
    subtitle: "Real-Time Logistics Tracking",
    tag: "Real-Time Full Stack",
    category: "fullstack",
    desc: "A real-time shipment tracking platform where users follow a delivery's status and location live as it updates, backed by a Socket.IO event layer and a scalable MongoDB schema for shipments and status history.",
    challenge: "Designed the real-time event layer so shipment status updates push to the client instantly via Socket.IO instead of relying on polling, and structured the MongoDB schema to keep shipment history queryable as it grows.",
    image: "/images/nexus.png",
    link: "https://nexus-express.vercel.app/",
    isLive: true,
    stack: ["React", "Socket.IO", "Node.js", "MongoDB", "Express.js"],
    features: [
      "Instant push status updates via Socket.IO",
      "Scalable MongoDB shipment history schema",
      "Live courier status timeline visualization",
      "Admin dispatch & shipment update console"
    ]
  },
  {
    title: "Royal Trust Bank",
    subtitle: "Modern Banking Portal",
    tag: "Full Stack UI",
    category: "fullstack",
    desc: "Modern banking portal with interactive account dashboard, responsive money transfer UI, and account history management.",
    challenge: "Crafted high-fidelity finance dashboard components with zero layout shift and smooth state synchronizations across complex transaction forms.",
    image: "/images/royal.png",
    link: "https://royal-trust-bank.vercel.app/",
    isLive: true,
    stack: ["React", "Node.js", "Tailwind CSS", "JavaScript ES6+"],
    features: [
      "Interactive balance & transfer workflow UI",
      "Responsive financial dashboard components",
      "Real-time form validation & error feedback"
    ]
  },
  {
    title: "Forkify Recipe App",
    subtitle: "Interactive Recipe Engine",
    tag: "Frontend MVC",
    category: "frontend",
    desc: "Interactive recipe search application featuring custom ingredient serving adjustments, bookmarking, and custom recipe uploads built with vanilla JS and Object-Oriented MVC architecture.",
    challenge: "Implemented asynchronous API handling with custom error boundaries and pagination state management without external framework abstractions.",
    image: "/images/forkify.png",
    link: "https://forkify-app-ed.netlify.app/#664c8f193e7aa067e94e868f",
    isLive: true,
    stack: ["JavaScript ES6+", "HTML5", "CSS3", "MVC Architecture", "REST API"],
    features: [
      "Custom serving portion dynamic calculator",
      "Local storage recipe bookmarking",
      "Custom recipe creation & payload publishing"
    ]
  }
];

// --- Skill Matrix Data ---
const skillCategories = [
  {
    name: "Frontend & Mobile",
    icon: <FaMobileAlt className="text-cyan-400" size={18} />,
    skills: ["React.js", "Next.js", "React Native", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3", "Bootstrap"]
  },
  {
    name: "Backend & APIs",
    icon: <FaServer className="text-indigo-400" size={18} />,
    skills: ["Node.js", "Express.js", "Django REST Framework", "Python", "Java", "RESTful APIs", "Socket.IO"]
  },
  {
    name: "Databases & Cloud",
    icon: <FaDatabase className="text-emerald-400" size={18} />,
    skills: ["PostgreSQL", "Supabase", "MongoDB", "Mongoose", "MySQL"]
  },
  {
    name: "Auth & Security",
    icon: <FaShieldAlt className="text-amber-400" size={18} />,
    skills: ["Supabase RLS", "JWT", "Role-Based Access (RBAC)", "bcrypt"]
  },
  {
    name: "Tools & Architecture",
    icon: <FaTerminal className="text-purple-400" size={18} />,
    skills: ["Git", "GitHub", "Postman", "Vercel", "NPM", "MVC Architecture", "API Integration"]
  }
];

// --- Work Experience Data ---
const experiences = [
  {
    role: "Full Stack Software Engineer",
    type: "Part-time, Remote",
    company: "Topswami U.S.A",
    period: "Jun 2025 — Present",
    points: [
      "Developed and maintained RESTful APIs using Django Rest Framework for core platform features.",
      "Integrated backend services seamlessly with a Next.js frontend application.",
      "Contributed to mobile application updates and bug fixes.",
      "Collaborated with cross-functional teams in a remote, agile environment."
    ]
  },
  {
    role: "Lead Full Stack Developer",
    type: "Part-time, Remote",
    company: "Ajatek Multisolutions Ltd",
    period: "Jun 2025 — Present",
    points: [
      "Led development of web and mobile applications using React, React Native, Node.js, and MongoDB.",
      "Designed robust backend APIs and scalable data models.",
      "Coordinated cross-functional teams to deliver production-ready solutions."
    ]
  },
  {
    role: "React Native Developer",
    type: "Part-time, Remote",
    company: "DAP Tech LLC",
    period: "Jul 2025 — Jan 2026",
    points: [
      "Implemented new features and functionalities in an iOS React Native app.",
      "Collaborated with designers to translate UI/UX designs into high-quality React Native components.",
      "Integrated with existing APIs and supported new API requirements.",
      "Conducted bug fixing and performance optimization for the iOS platform."
    ]
  },
  {
    role: "Web Developer",
    type: "NYSC",
    company: "Chigisoft Limited",
    period: "Jan 2023 — Nov 2023",
    points: [
      "Developed and maintained responsive web interfaces using HTML, CSS, and JavaScript.",
      "Built and integrated RESTful backend APIs using Node.js and Express.",
      "Connected frontend applications to MongoDB using Mongoose.",
      "Participated in agile development with daily standups and team code reviews."
    ]
  },
  {
    role: "IT Support Intern",
    type: "Internship",
    company: "ICT Centre, University of Port Harcourt",
    period: "Jun 2019 — Nov 2019",
    points: [
      "Supported campus-wide network and web infrastructure.",
      "Conducted routine system troubleshooting and server-side scripting.",
      "Assisted with backend configuration and web service maintenance."
    ]
  }
];

// --- Education Data ---
const educationAndCerts = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "University of Port Harcourt",
    period: "Sep 2016 — Nov 2021",
    type: "degree"
  },
  {
    title: "Front End Developer Career Path Certificate",
    institution: "Scrimba",
    period: "April 2025",
    link: "https://scrimba.com/certificate/u9ZQyDf3/gfrontend",
    type: "cert"
  },
  {
    title: "National Youth Service Corps (NYSC) Certificate",
    institution: "Federal Republic of Nigeria",
    period: "Nov 2023",
    type: "cert"
  },
  {
    title: "Huawei Routing and Switching Certification",
    institution: "Huawei Academy",
    period: "Jul 2024",
    link: "http://support.huawei.com/learning/verifycertificate",
    type: "cert"
  }
];

type TabFilter = 'all' | 'fullstack' | 'mobile' | 'frontend';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabFilter>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("igweedwin15@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const filteredProjects = activeTab === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans overflow-x-hidden" style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif" }}>
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        background: "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.13) 0%, rgba(56,189,248,0.05) 45%, transparent 70%)"
      }} />
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20" style={{
        backgroundSize: "40px 40px",
        backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)"
      }} />

      {/* ── NAVBAR ── */}
      <header className="fixed top-0 w-full z-40" style={{ background: "rgba(7,9,14,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-white text-lg shadow-lg" style={{ background: "linear-gradient(135deg,#06b6d4,#6366f1)" }}>E</div>
              <div>
                <div className="font-bold text-lg text-white leading-none">Edwin Igwe</div>
                <div className="text-xs text-slate-400 font-medium">Full Stack Engineer</div>
              </div>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              {["projects", "skills", "experience", "education", "contact"].map(s => (
                <button key={s} onClick={() => scrollToSection(s)} className="hover:text-cyan-400 transition-colors capitalize">{s}</button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                Open to Remote
              </span>
              <button onClick={() => scrollToSection("contact")} className="px-4 py-2 text-sm font-semibold text-white rounded-xl shadow-lg transition-all hover:scale-105" style={{ background: "linear-gradient(135deg,#06b6d4,#6366f1)" }}>
                Let's Talk
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />Remote
              </span>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-300 bg-slate-800/80 rounded-xl border border-slate-700">
                {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden px-6 py-6 space-y-4 border-b border-slate-800"
              style={{ background: "#0a0e17" }}
            >
              {["projects", "skills", "experience", "education", "contact"].map(s => (
                <button key={s} onClick={() => scrollToSection(s)} className="block w-full text-left py-2 text-base font-medium text-slate-200 hover:text-cyan-400 capitalize">
                  {s === "experience" ? "Work Experience" : s === "education" ? "Education & Credentials" : s}
                </button>
              ))}
              <div className="pt-4 border-t border-slate-800">
                <a href="mailto:igweedwin15@gmail.com" className="w-full block py-3 text-center font-semibold text-white rounded-xl" style={{ background: "linear-gradient(135deg,#06b6d4,#6366f1)" }}>
                  Email Edwin Directly
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative z-10 pt-28">

        {/* ── HERO ── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide"
                style={{ background: "rgba(30,41,59,0.8)", borderColor: "rgba(255,255,255,0.1)" }}>
                <FaStar size={12} className="text-cyan-400" />
                <span>Full Stack Product Engineer</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">Rivers, Nigeria (Open to Remote)</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                Building Complete<br className="hidden sm:inline" />
                <span style={{ background: "linear-gradient(135deg,#38bdf8,#818cf8,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {" "}Products End-to-End
                </span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                I build and ship complete, production-ready applications — from database schema design and RESTful backend services to responsive React/Next.js interfaces and cloud deployments.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button onClick={() => scrollToSection("projects")}
                  className="px-6 py-3.5 text-base font-semibold text-white rounded-xl shadow-xl transition-all hover:scale-105 flex items-center gap-2"
                  style={{ background: "linear-gradient(135deg,#06b6d4,#3b82f6,#6366f1)" }}>
                  Explore Live Projects <FaChevronRight size={14} />
                </button>
                <a href="mailto:igweedwin15@gmail.com"
                  className="px-6 py-3.5 text-base font-semibold text-slate-200 rounded-xl border border-slate-700 hover:bg-slate-800 transition-all flex items-center gap-2 bg-slate-800/80">
                  <FaEnvelope size={16} /> Contact Me
                </a>
                <div className="flex items-center gap-3 pl-2">
                  <a href="https://github.com/iGWE-eDWIN" target="_blank" rel="noopener noreferrer"
                    className="p-3 text-slate-400 hover:text-white rounded-xl border border-slate-700/60 bg-slate-800/60 hover:bg-slate-800 transition-all">
                    <FaGithub size={20} />
                  </a>
                  <a href="https://linkedin.com/in/edwin-igwe-ab83a2249" target="_blank" rel="noopener noreferrer"
                    className="p-3 text-slate-400 hover:text-white rounded-xl border border-slate-700/60 bg-slate-800/60 hover:bg-slate-800 transition-all">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </motion.div>

              {/* Contact chips */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                className="pt-4 border-t border-slate-800/80 flex flex-wrap justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-cyan-400" size={14} /><span>Rivers, Nigeria (Open to Remote)</span></div>
                <div className="flex items-center gap-2"><FaEnvelope className="text-indigo-400" size={14} /><span>igweedwin15@gmail.com</span></div>
                <div className="flex items-center gap-2"><FaPhone className="text-emerald-400" size={14} /><span>(+234) 818-242-2371</span></div>
              </motion.div>
            </div>

            {/* Right — Profile Card */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative w-full max-w-md">
                <div className="absolute inset-0 rounded-3xl blur-2xl opacity-20 -rotate-3" style={{ background: "linear-gradient(135deg,#06b6d4,#6366f1)" }} />
                <div className="relative p-6 sm:p-8 rounded-3xl space-y-6" style={{ background: "rgba(13,19,34,0.75)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 shadow-2xl" style={{ borderColor: "rgba(6,182,212,0.4)" }}>
                    <img src="/images/edwin.jpeg" alt="Edwin Azubuike Igwe" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-center space-y-1">
                    <h2 className="text-2xl font-bold text-white">Edwin Azubuike Igwe</h2>
                    <p className="text-sm font-medium text-cyan-400">B.Sc. Computer Science • Full Stack Engineer</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-2 text-center border-t border-slate-800">
                    {[
                      { val: "5+", label: "Live Apps", color: "text-cyan-400" },
                      { val: "100%", label: "Solo Built", color: "text-indigo-400" },
                      { val: "B.Sc.", label: "UniPort CS", color: "text-emerald-400" }
                    ].map(s => (
                      <div key={s.label} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                        <div className={`text-xl font-extrabold ${s.color}`}>{s.val}</div>
                        <div className="text-[11px] text-slate-400 mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-4 mb-12">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20">Selected Work</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Featured Engineering Projects</h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">Real-world deployed products with live links, production database schemas, and solved engineering challenges.</p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {[
                { id: 'all' as TabFilter, label: 'All Projects' },
                { id: 'fullstack' as TabFilter, label: 'Full Stack' },
                { id: 'mobile' as TabFilter, label: 'Mobile Apps' },
                { id: 'frontend' as TabFilter, label: 'Frontend & Web' }
              ].map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${activeTab === tab.id
                    ? 'text-white shadow-md'
                    : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800'}`}
                  style={activeTab === tab.id ? { background: "linear-gradient(135deg,#0891b2,#6366f1)" } : {}}>
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div key={project.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(13,19,34,0.75)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.08)" }}>

                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-slate-900 border-b border-slate-800">
                  <img src={project.image} alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,19,34,0.85), transparent)" }} />
                  <span className="absolute top-4 left-4 px-3 py-1 text-[11px] font-bold tracking-wider text-cyan-300 uppercase rounded-full" style={{ background: "rgba(7,9,14,0.8)", border: "1px solid rgba(6,182,212,0.3)" }}>
                    {project.tag}
                  </span>
                  {project.isLive && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      className="absolute top-4 right-4 p-2 bg-slate-900/90 hover:bg-cyan-600 text-white rounded-full border border-slate-700 transition-colors">
                      <FaArrowRight size={14} />
                    </a>
                  )}
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">{project.subtitle}</p>
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">{project.desc}</p>

                    {/* Challenge callout */}
                    <div className="p-3.5 rounded-xl space-y-1" style={{ background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.2)" }}>
                      <div className="flex items-center gap-1.5 font-semibold text-amber-400 text-xs">
                        <FaExclamationTriangle size={12} className="flex-shrink-0" />
                        <span>Core Engineering Challenge</span>
                      </div>
                      <p className="line-clamp-2 pl-5 text-[12px] text-slate-300">{project.challenge}</p>
                    </div>
                  </div>

                  {/* Stack + actions */}
                  <div className="pt-4 border-t border-slate-800 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((tech, i) => (
                        <span key={i} className="px-2.5 py-1 text-[11px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60 rounded-md">{tech}</span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="px-2 py-1 text-[11px] text-slate-500 bg-slate-800/40 rounded-md">+{project.stack.length - 4}</span>
                      )}
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <button onClick={() => setSelectedProject(project)} className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                        View Details <FaChevronRight size={10} />
                      </button>
                      {project.isLive ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                          className="px-3.5 py-1.5 text-xs font-semibold text-white rounded-lg flex items-center gap-1.5 shadow-md transition-all hover:scale-105"
                          style={{ background: "linear-gradient(135deg,#0891b2,#6366f1)" }}>
                          Live Site <FaExternalLinkAlt size={10} />
                        </a>
                      ) : (
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                          className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center gap-1.5">
                          Repository <FaGithub size={10} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20">Technical Competencies</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Skills & Architecture Matrix</h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">Modern full-stack technologies, databases, and security protocols I use to deliver production systems.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => (
              <motion.div key={cat.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl space-y-4"
                style={{ background: "rgba(13,19,34,0.75)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">{cat.icon}</div>
                  <h3 className="text-lg font-bold text-white">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 text-xs font-medium bg-slate-900/90 text-slate-200 border border-slate-800 rounded-lg hover:border-cyan-500/40 hover:text-cyan-300 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20">Career Track</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Work Experience</h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">Hands-on engineering roles building production platforms and mobile applications in agile environments.</p>
          </motion.div>

          <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div key={idx}
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-6 sm:pl-10">
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full flex items-center justify-center border-2 border-cyan-500 text-cyan-400 shadow-lg"
                  style={{ background: "#07090e", boxShadow: "0 0 12px rgba(6,182,212,0.2)" }}>
                  <FaBriefcase size={12} />
                </div>
                <div className="p-6 sm:p-8 rounded-2xl space-y-4"
                  style={{ background: "rgba(13,19,34,0.75)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-cyan-400 font-medium mt-0.5">
                        <span>{exp.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400 text-xs px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700">{exp.type}</span>
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-400 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-800 w-fit">{exp.period}</div>
                  </div>
                  <ul className="space-y-2.5 text-sm text-slate-300">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <FaCheckCircle size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider text-purple-400 uppercase bg-purple-500/10 border border-purple-500/20">Verified Background</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Education & Certifications</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {educationAndCerts.map((item, idx) => (
              <motion.div key={idx}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl flex flex-col justify-between space-y-4"
                style={{ background: "rgba(13,19,34,0.75)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                      {item.type === 'degree' ? <FaGraduationCap size={20} /> : <FaMedal size={20} />}
                    </div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {item.type === 'degree' ? 'University Degree' : 'Professional Certification'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">{item.title}</h3>
                  <p className="text-sm font-medium text-cyan-400">{item.institution}</p>
                </div>
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>{item.period}</span>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1">
                      View Credential <FaExternalLinkAlt size={10} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-20">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="p-8 sm:p-12 rounded-3xl text-center space-y-8 relative overflow-hidden"
            style={{ background: "rgba(13,19,34,0.75)", backdropFilter: "blur(16px)", border: "1px solid rgba(6,182,212,0.3)" }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.06), transparent, rgba(99,102,241,0.06))" }} />

            <div className="space-y-4 max-w-2xl mx-auto">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20">Open for Opportunities</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Let's Build Something Great Together</h2>
              <p className="text-slate-300 text-base sm:text-lg">I'm actively seeking Full Stack Engineer roles (Remote / Relocation). Whether you have a project to build, a role to discuss, or just want to connect — my inbox is open!</p>
            </div>

            {/* Email copy */}
            <div className="inline-flex items-center justify-between gap-4 p-3 sm:px-6 sm:py-3 rounded-2xl max-w-full sm:max-w-md mx-auto" style={{ background: "rgba(15,23,42,0.9)", border: "1px solid rgba(51,65,85,0.8)" }}>
              <span className="text-sm sm:text-base font-semibold text-cyan-300 truncate">igweedwin15@gmail.com</span>
              <button onClick={copyEmail} className="px-3 py-1.5 text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-600 transition-colors flex items-center gap-1.5 flex-shrink-0">
                {copiedEmail ? <><FaCheck size={12} className="text-emerald-400" /> Copied!</> : <><FaCopy size={12} /> Copy</>}
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a href="mailto:igweedwin15@gmail.com"
                className="px-6 py-3.5 text-base font-semibold text-white rounded-xl shadow-lg flex items-center gap-2 transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg,#06b6d4,#6366f1)" }}>
                <FaEnvelope size={18} /> Send Direct Email
              </a>
              <a href="tel:+2348182422371"
                className="px-6 py-3.5 text-base font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-800 rounded-xl border border-slate-700 flex items-center gap-2">
                <FaPhone size={18} /> (+234) 818-242-2371
              </a>
            </div>

            <div className="flex justify-center gap-6 pt-4 border-t border-slate-800/80">
              <a href="https://github.com/iGWE-eDWIN" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <FaGithub size={18} /> GitHub
              </a>
              <span className="text-slate-700">•</span>
              <a href="https://linkedin.com/in/edwin-igwe-ab83a2249" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <FaLinkedin size={18} /> LinkedIn
              </a>
              <span className="text-slate-700">•</span>
              <a href="https://igwe-edwin.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <FaGlobe size={18} /> igwe-edwin.vercel.app
              </a>
            </div>
          </motion.div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-4 text-center text-xs text-slate-500 border-t border-slate-800 relative z-10">
        <p>© {new Date().getFullYear()} Edwin Azubuike Igwe · Full Stack Product Engineer · Rivers, Nigeria</p>
      </footer>

      {/* ── PROJECT MODAL ── */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
