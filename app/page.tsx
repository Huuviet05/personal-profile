"use client";

import { useEffect, useRef } from "react";

// ─── DATA ──────────────────────────────────────────────────────────────────
const SKILLS = [
  {
    icon: "⚛️",
    name: "Frontend Development",
    desc: "Xây dựng giao diện hiện đại, responsive với trải nghiệm người dùng tuyệt vời.",
    tags: ["React", "Next.js", "Vue", "TypeScript"],
  },
  {
    icon: "🖥️",
    name: "Backend Development",
    desc: "Thiết kế và phát triển REST API, microservices với hiệu suất cao và bảo mật.",
    tags: ["Node.js", "Express", "Python", "PostgreSQL"],
  },
  {
    icon: "☁️",
    name: "Cloud & DevOps",
    desc: "Triển khai, quản lý hạ tầng đám mây và tự động hoá quy trình CI/CD.",
    tags: ["Cloudflare", "Docker", "GitHub Actions", "Vercel"],
  },
  {
    icon: "🎨",
    name: "UI/UX Design",
    desc: "Thiết kế giao diện đẹp mắt, trực quan với tư duy lấy người dùng làm trung tâm.",
    tags: ["Figma", "CSS", "Animations", "Design Systems"],
  },
  {
    icon: "📱",
    name: "Mobile Development",
    desc: "Phát triển ứng dụng di động đa nền tảng với hiệu suất gần-native.",
    tags: ["React Native", "Expo", "Flutter"],
  },
  {
    icon: "🔐",
    name: "Security & Auth",
    desc: "Triển khai xác thực, phân quyền và bảo mật ứng dụng theo best practices.",
    tags: ["JWT", "OAuth2", "HTTPS", "RBAC"],
  },
];

const EXPERIENCES = [
  {
    date: "2024 – Hiện tại",
    role: "Senior Full-Stack Developer",
    company: "Công ty Công nghệ XYZ",
    desc: "Dẫn dắt nhóm phát triển 5 người, thiết kế kiến trúc hệ thống microservices, cải thiện hiệu suất ứng dụng lên 40%. Xây dựng dashboard quản lý cho 10,000+ người dùng.",
  },
  {
    date: "2022 – 2024",
    role: "Full-Stack Developer",
    company: "Startup ABC",
    desc: "Phát triển toàn bộ giao diện và backend cho sản phẩm SaaS. Tích hợp thanh toán, thông báo real-time, và hệ thống báo cáo.",
  },
  {
    date: "2021 – 2022",
    role: "Frontend Developer",
    company: "Agency Creative",
    desc: "Xây dựng giao diện cho các dự án web thương mại điện tử và landing page, tối ưu SEO và Core Web Vitals.",
  },
  {
    date: "2019 – 2021",
    role: "Sinh viên IT — Thực tập",
    company: "Trường Đại học CNTT",
    desc: "Hoàn thành chương trình Công nghệ Thông tin, thực tập tại các công ty startup và tích lũy kinh nghiệm thực tế.",
  },
];

const PROJECTS = [
  {
    emoji: "🛒",
    title: "EcomHub Platform",
    desc: "Nền tảng thương mại điện tử đầy đủ tính năng: quản lý sản phẩm, giỏ hàng, thanh toán VNPay/Momo, báo cáo doanh thu real-time.",
    stack: ["Next.js", "Node.js", "MongoDB"],
    github: "https://github.com/Huuviet05",
    demo: "#",
  },
  {
    emoji: "💬",
    title: "ChatFlow App",
    desc: "Ứng dụng chat real-time hỗ trợ nhóm, chia sẻ file, video call, markdown editor tích hợp. Kiến trúc WebSocket.",
    stack: ["React", "Socket.io", "Redis"],
    github: "https://github.com/Huuviet05",
    demo: "#",
  },
  {
    emoji: "📊",
    title: "Analytics Dashboard",
    desc: "Dashboard phân tích dữ liệu với biểu đồ tương tác, xuất báo cáo PDF/Excel, phân quyền theo role.",
    stack: ["Vue", "D3.js", "Python"],
    github: "https://github.com/Huuviet05",
    demo: "#",
  },
  {
    emoji: "🤖",
    title: "AI Writing Assistant",
    desc: "Trợ lý viết lách thông minh dùng AI, hỗ trợ nhiều ngôn ngữ, gợi ý nội dung theo context.",
    stack: ["Next.js", "OpenAI", "PostgreSQL"],
    github: "https://github.com/Huuviet05",
    demo: "#",
  },
];

// ─── COMPONENT ──────────────────────────────────────────────────────────────
export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
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
              <li><a href="#about">Giới thiệu</a></li>
              <li><a href="#skills">Kỹ năng</a></li>
              <li><a href="#experience">Kinh nghiệm</a></li>
              <li><a href="#projects">Dự án</a></li>
              <li>
                <a href="#contact" className="nav-cta" id="nav-contact-btn">
                  Liên hệ
                </a>
              </li>
            </ul>
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
                  Sẵn sàng nhận dự án mới
                </div>
                <h1 className="hero-name">
                  Nguyễn<br />
                  <span className="highlight">Hữu Việt</span>
                </h1>
                <p className="hero-title">Full-Stack Developer · UI Enthusiast</p>
                <p className="hero-desc">
                  Tôi xây dựng các ứng dụng web hiện đại, đẹp mắt và có hiệu suất cao.
                  Từ ý tưởng đến sản phẩm — tôi biến tầm nhìn thành thực tế.
                </p>
                <div className="hero-actions">
                  <a href="#projects" className="btn btn-primary" id="hero-view-projects-btn">
                    Xem dự án 🚀
                  </a>
                  <a href="#contact" className="btn btn-outline" id="hero-contact-btn">
                    Liên hệ tôi
                  </a>
                </div>
              </div>

              <div className="hero-visual">
                <div className="avatar-wrapper">
                  <div className="avatar-ring" aria-label="Profile avatar">
                    <div className="avatar-inner">👨‍💻</div>
                  </div>
                  <div className="avatar-badge" role="note" aria-label="Experience">
                    <span style={{ fontSize: "1.25rem" }}>🏆</span>
                    <div>
                      <div className="badge-text">5+ Năm</div>
                      <div className="badge-sub">Kinh nghiệm</div>
                    </div>
                  </div>
                  <div className="avatar-badge-2" role="note" aria-label="Projects done">
                    <span style={{ fontSize: "1.25rem" }}>💎</span>
                    <div>
                      <div className="badge-text">30+ Dự án</div>
                      <div className="badge-sub">Hoàn thành</div>
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
                <p className="section-label">✦ Về tôi</p>
                <h2 className="section-title">
                  Đam mê tạo ra<br />
                  <span style={{ background: "var(--gradient-text)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    trải nghiệm tuyệt vời
                  </span>
                </h2>
                <p className="section-desc">
                  Với hơn 5 năm kinh nghiệm trong phát triển web, tôi chuyên xây dựng
                  các ứng dụng full-stack từ thiết kế UI/UX đến triển khai cloud.
                  Tôi luôn cập nhật công nghệ mới nhất và không ngừng học hỏi.
                </p>
                <div className="about-stats">
                  {[
                    { num: "5+", label: "Năm kinh nghiệm" },
                    { num: "30+", label: "Dự án hoàn thành" },
                    { num: "10+", label: "Khách hàng hài lòng" },
                    { num: "99%", label: "Tỷ lệ hoàn thành" },
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
                    { icon: "📍", label: "Vị trí", value: "Hà Nội, Việt Nam" },
                    { icon: "🎓", label: "Học vấn", value: "Đại học Công nghệ Thông tin" },
                    { icon: "💼", label: "Trạng thái", value: "Freelance & Full-time" },
                    { icon: "🌐", label: "Ngôn ngữ", value: "Tiếng Việt, English" },
                    { icon: "📧", label: "Email", value: "huuviet05@gmail.com" },
                    { icon: "⚡", label: "Sở thích", value: "Code · Đọc sách · Coffee" },
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
              <p className="section-label">✦ Chuyên môn</p>
              <h2 className="section-title">Kỹ năng & Công nghệ</h2>
              <p className="section-desc" style={{ margin: "0 auto" }}>
                Tôi làm việc với nhiều công nghệ khác nhau, từ frontend đến backend và cloud.
              </p>
            </div>
            <div className="skills-grid">
              {SKILLS.map((skill, i) => (
                <article
                  key={skill.name}
                  className="skill-card reveal"
                  style={{ animationDelay: `${i * 0.1}s` }}
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
              <p className="section-label">✦ Hành trình</p>
              <h2 className="section-title">Kinh nghiệm làm việc</h2>
            </div>
            <div className="timeline">
              {EXPERIENCES.map((exp) => (
                <article key={exp.role} className="timeline-item reveal">
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
              <p className="section-label">✦ Sản phẩm</p>
              <h2 className="section-title">Dự án nổi bật</h2>
              <p className="section-desc" style={{ margin: "0 auto" }}>
                Một số dự án tiêu biểu mà tôi đã xây dựng.
              </p>
            </div>
            <div className="projects-grid">
              {PROJECTS.map((project, i) => (
                <article
                  key={project.title}
                  className="project-card reveal"
                  style={{ animationDelay: `${i * 0.1}s` }}
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
                        aria-label={`GitHub - ${project.title}`}
                        id={`project-github-${project.title.replace(/\s/g, "-").toLowerCase()}`}
                      >
                        🔗
                      </a>
                      <a
                        href={project.demo}
                        className="icon-link"
                        aria-label={`Demo - ${project.title}`}
                        id={`project-demo-${project.title.replace(/\s/g, "-").toLowerCase()}`}
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
                <p className="section-label" style={{ justifyContent: "center" }}>✦ Liên hệ</p>
                <h2 className="section-title">Bắt đầu cùng nhau</h2>
              </div>
              <div className="contact-card reveal">
                <div className="contact-icon" aria-hidden="true">👋</div>
                <h3 className="contact-title">Hãy nói chuyện!</h3>
                <p className="contact-desc">
                  Bạn có dự án cần phát triển, hoặc chỉ muốn kết nối?
                  Tôi luôn mở cửa để thảo luận về các ý tưởng thú vị.
                </p>
                <a
                  href="mailto:huuviet05@gmail.com"
                  className="btn btn-primary"
                  id="contact-email-btn"
                  style={{ display: "inline-flex" }}
                >
                  ✉️ &nbsp;Gửi email cho tôi
                </a>
                <div className="social-links" role="list" aria-label="Social media links">
                  <a
                    href="https://github.com/Huuviet05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    id="social-github-link"
                    role="listitem"
                  >
                    <span aria-hidden="true">🐙</span> GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    id="social-linkedin-link"
                    role="listitem"
                  >
                    <span aria-hidden="true">💼</span> LinkedIn
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    id="social-facebook-link"
                    role="listitem"
                  >
                    <span aria-hidden="true">📘</span> Facebook
                  </a>
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    id="social-telegram-link"
                    role="listitem"
                  >
                    <span aria-hidden="true">✈️</span> Telegram
                  </a>
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
            Made with <span aria-label="love">❤️</span> by{" "}
            <strong style={{ color: "var(--text-secondary)" }}>Nguyễn Hữu Việt</strong>{" "}
            · Powered by Next.js + Cloudflare Pages · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
}
