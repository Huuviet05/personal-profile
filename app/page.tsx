"use client";

import { useEffect, useRef, useState } from "react";

// ─── DATA (English) ─────────────────────────────────────────────────────────
const SKILLS = [
  {
    icon: "⚛️",
    name: "Frontend Development",
    desc: "Building modern, responsive UIs with a focus on performance and delightful user experiences.",
    tags: ["React", "Next.js", "Vue", "TypeScript"],
  },
  {
    icon: "🖥️",
    name: "Backend Development",
    desc: "Designing and building REST APIs, microservices with high throughput and security best practices.",
    tags: ["Node.js", "Express", "Python", "PostgreSQL"],
  },
  {
    icon: "☁️",
    name: "Cloud & DevOps",
    desc: "Deploying and managing cloud infrastructure, automating CI/CD pipelines end-to-end.",
    tags: ["Cloudflare", "Docker", "GitHub Actions", "Vercel"],
  },
  {
    icon: "🎨",
    name: "UI/UX Design",
    desc: "Crafting beautiful, intuitive interfaces with a user-centered design approach.",
    tags: ["Figma", "CSS", "Animations", "Design Systems"],
  },
  {
    icon: "📱",
    name: "Mobile Development",
    desc: "Building cross-platform mobile apps with near-native performance and great DX.",
    tags: ["React Native", "Expo", "Flutter"],
  },
  {
    icon: "🔐",
    name: "Security & Auth",
    desc: "Implementing authentication, authorization, and application security following industry standards.",
    tags: ["JWT", "OAuth2", "HTTPS", "RBAC"],
  },
];

const EXPERIENCES = [
  {
    date: "2024 – Present",
    role: "Senior Full-Stack Developer",
    company: "XYZ Technology Co.",
    desc: "Leading a 5-person engineering team, architecting a microservices system, and improving app performance by 40%. Built a management dashboard serving 10,000+ users.",
  },
  {
    date: "2022 – 2024",
    role: "Full-Stack Developer",
    company: "ABC Startup",
    desc: "Developed the full frontend and backend for a SaaS product, including payment integration, real-time notifications, and reporting systems.",
  },
  {
    date: "2021 – 2022",
    role: "Frontend Developer",
    company: "Creative Agency",
    desc: "Built UIs for e-commerce projects and landing pages, optimizing for SEO and Core Web Vitals performance scores.",
  },
  {
    date: "2019 – 2021",
    role: "IT Student & Intern",
    company: "University of IT",
    desc: "Completed an Information Technology degree and gained hands-on experience through internships at local startups.",
  },
];

const PROJECTS = [
  {
    emoji: "🛒",
    title: "EcomHub Platform",
    desc: "A full-featured e-commerce platform: product management, cart, payment gateway (VNPay/Momo), and real-time revenue reporting.",
    stack: ["Next.js", "Node.js", "MongoDB"],
    github: "https://github.com/Huuviet05",
    demo: "#",
  },
  {
    emoji: "💬",
    title: "ChatFlow App",
    desc: "Real-time chat application with group support, file sharing, video calls, and an integrated markdown editor. WebSocket architecture.",
    stack: ["React", "Socket.io", "Redis"],
    github: "https://github.com/Huuviet05",
    demo: "#",
  },
  {
    emoji: "📊",
    title: "Analytics Dashboard",
    desc: "Data analytics dashboard with interactive charts, PDF/Excel report export, and role-based access control.",
    stack: ["Vue", "D3.js", "Python"],
    github: "https://github.com/Huuviet05",
    demo: "#",
  },
  {
    emoji: "🤖",
    title: "AI Writing Assistant",
    desc: "An AI-powered writing assistant supporting multiple languages, content suggestions based on context, and smart editing tools.",
    stack: ["Next.js", "OpenAI", "PostgreSQL"],
    github: "https://github.com/Huuviet05",
    demo: "#",
  },
];

// ─── COMPONENT ──────────────────────────────────────────────────────────────
export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = saved === "dark" || (!saved && prefersDark);
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  // Scroll reveal
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => {
      observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      {/* Background Orbs */}
      <div className="bg-orbs" aria-hidden="true" />

      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-inner">
            <span className="nav-logo">HV.dev</span>

            <ul className="nav-links" role="list">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>

            <div className="nav-right">
              {/* Theme Toggle */}
              <button
                id="theme-toggle-btn"
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                title={isDark ? "Light mode" : "Dark mode"}
              >
                {isDark ? "🌙" : "☀️"}
              </button>

              <a href="#contact" className="nav-cta" id="nav-contact-btn">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* ── HERO ── */}
        <section className="hero" id="hero" aria-label="Hero section">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">
                <div className="hero-tag">
                  <span className="dot" aria-hidden="true" />
                  Available for new opportunities
                </div>
                <h1 className="hero-name">
                  Nguyen<br />
                  <span className="highlight">Huu Viet</span>
                </h1>
                <p className="hero-title">Full-Stack Developer · UI Enthusiast</p>
                <p className="hero-desc">
                  I build modern, beautiful, and high-performance web applications.
                  From idea to product — I turn visions into reality.
                </p>
                <div className="hero-actions">
                  <a href="#projects" className="btn btn-primary" id="hero-view-projects-btn">
                    View Projects 🚀
                  </a>
                  <a href="#contact" className="btn btn-outline" id="hero-contact-btn">
                    Get in Touch
                  </a>
                </div>
              </div>

              {/* Avatar */}
              <div className="hero-visual">
                <div className="avatar-wrapper">
                  <div className="avatar-glow" aria-hidden="true" />
                  <div className="avatar-ring" aria-hidden="true">
                    <div className="avatar-inner">👨‍💻</div>
                  </div>

                  <div className="avatar-badge" role="note" aria-label="Years of experience">
                    <span style={{ fontSize: "1.3rem" }}>🏆</span>
                    <div>
                      <div className="badge-text">5+ Years</div>
                      <div className="badge-sub">Experience</div>
                    </div>
                  </div>

                  <div className="avatar-badge-2" role="note" aria-label="Projects completed">
                    <span style={{ fontSize: "1.3rem" }}>💎</span>
                    <div>
                      <div className="badge-text">30+ Projects</div>
                      <div className="badge-sub">Completed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" aria-label="About me">
          <div className="container">
            <div className="about-grid">
              <div className="reveal">
                <p className="section-label">✦ About Me</p>
                <h2 className="section-title">
                  Passionate about creating
                  <br />
                  <span style={{ background: "var(--gradient-text)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    exceptional experiences
                  </span>
                </h2>
                <p className="section-desc">
                  With 5+ years of experience in web development, I specialize in building
                  full-stack applications from UI/UX design to cloud deployment.
                  I stay current with the latest technologies and never stop learning.
                </p>
                <div className="about-stats">
                  {[
                    { num: "5+", label: "Years of Experience" },
                    { num: "30+", label: "Projects Delivered" },
                    { num: "10+", label: "Happy Clients" },
                    { num: "99%", label: "Completion Rate" },
                  ].map((s) => (
                    <div key={s.label} className="stat-card">
                      <div className="stat-number">{s.num}</div>
                      <div className="stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="about-visual reveal">
                <ul className="info-list" role="list">
                  {[
                    { icon: "📍", label: "Location", value: "Da Nang, Vietnam" },
                    { icon: "🎓", label: "Education", value: "Vietnam-Korea Univ. of ICT" },
                    { icon: "💼", label: "Status", value: "Freelance & Full-time" },
                    { icon: "🌐", label: "Languages", value: "Vietnamese, English" },
                    { icon: "📧", label: "Email", value: "huuviet05@gmail.com" },
                    { icon: "⚡", label: "Interests", value: "Code · Reading · Coffee" },
                  ].map((item) => (
                    <li key={item.label} className="info-item">
                      <div className="info-icon" aria-hidden="true">{item.icon}</div>
                      <div className="info-content">
                        <strong>{item.label}</strong>
                        <span>{item.value}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="skills-section" aria-label="Skills">
          <div className="container">
            <div className="reveal" style={{ textAlign: "center", marginBottom: "1rem" }}>
              <p className="section-label">✦ Expertise</p>
              <h2 className="section-title">Skills & Technologies</h2>
              <p className="section-desc" style={{ margin: "0 auto" }}>
                I work with a wide range of technologies across frontend, backend, and cloud.
              </p>
            </div>
            <div className="skills-grid">
              {SKILLS.map((skill, i) => (
                <article
                  key={skill.name}
                  className="skill-card reveal"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="skill-icon" aria-hidden="true">{skill.icon}</div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-desc">{skill.desc}</p>
                  <ul className="skill-tags" role="list" aria-label={`${skill.name} technologies`}>
                    {skill.tags.map((t) => (
                      <li key={t} className="tag">{t}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" aria-label="Work experience">
          <div className="container">
            <div className="reveal">
              <p className="section-label">✦ Journey</p>
              <h2 className="section-title">Work Experience</h2>
            </div>
            <div className="timeline">
              {EXPERIENCES.map((exp, i) => (
                <article key={exp.role} className="timeline-item reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="timeline-dot" aria-hidden="true" />
                  <time className="timeline-date">{exp.date}</time>
                  <div className="timeline-card">
                    <h3 className="timeline-role">{exp.role}</h3>
                    <p className="timeline-company">🏢 {exp.company}</p>
                    <p className="timeline-desc">{exp.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" className="projects-section" aria-label="Projects">
          <div className="container">
            <div className="reveal" style={{ textAlign: "center", marginBottom: "1rem" }}>
              <p className="section-label">✦ Portfolio</p>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-desc" style={{ margin: "0 auto" }}>
                A selection of projects I've built and shipped.
              </p>
            </div>
            <div className="projects-grid">
              {PROJECTS.map((project, i) => (
                <article
                  key={project.title}
                  className="project-card reveal"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="project-emoji" aria-hidden="true">{project.emoji}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                  <div className="project-footer">
                    <ul className="project-stack skill-tags" role="list" aria-label="Tech stack">
                      {project.stack.map((t) => (
                        <li key={t} className="tag">{t}</li>
                      ))}
                    </ul>
                    <div className="project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                        aria-label={`GitHub — ${project.title}`}
                        id={`project-github-${project.title.replace(/\s/g, "-").toLowerCase()}`}
                        title="View on GitHub"
                      >
                        🔗
                      </a>
                      <a
                        href={project.demo}
                        className="icon-link"
                        aria-label={`Live demo — ${project.title}`}
                        id={`project-demo-${project.title.replace(/\s/g, "-").toLowerCase()}`}
                        title="Live Demo"
                      >
                        ↗
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="contact-section" aria-label="Contact">
          <div className="container">
            <div className="contact-wrapper">
              <div className="reveal">
                <p className="section-label" style={{ justifyContent: "center" }}>✦ Contact</p>
                <h2 className="section-title">Let&apos;s Work Together</h2>
              </div>
              <div className="contact-card reveal">
                <div className="contact-icon" aria-hidden="true">👋</div>
                <h3 className="contact-title">Say Hello!</h3>
                <p className="contact-desc">
                  Have a project in mind or just want to connect?
                  I&apos;m always open to discussing new and exciting ideas.
                </p>
                <a
                  href="mailto:huuviet05@gmail.com"
                  className="btn btn-primary"
                  id="contact-email-btn"
                  style={{ display: "inline-flex" }}
                >
                  ✉️ &nbsp;Send me an email
                </a>
                <div className="social-links" role="list" aria-label="Social media links">
                  {[
                    { href: "https://github.com/Huuviet05", icon: "🐙", label: "GitHub", id: "social-github" },
                    { href: "https://linkedin.com", icon: "💼", label: "LinkedIn", id: "social-linkedin" },
                    { href: "https://facebook.com", icon: "📘", label: "Facebook", id: "social-facebook" },
                    { href: "https://t.me", icon: "✈️", label: "Telegram", id: "social-telegram" },
                  ].map((s) => (
                    <a
                      key={s.id}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      id={`${s.id}-link`}
                      role="listitem"
                    >
                      <span aria-hidden="true">{s.icon}</span> {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer" role="contentinfo">
        <div className="container">
          <p>
            Made with{" "}
            <span aria-label="love" style={{ color: "#f87171" }}>❤️</span>{" "}
            by{" "}
            <strong style={{ color: "var(--text-secondary)" }}>Nguyen Huu Viet</strong>
            {" "}· Built with Next.js · Hosted on Cloudflare Pages · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
}
