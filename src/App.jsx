import { useEffect, useState } from 'react'
import './App.css'

const DATA = {
  name: 'Labish Roopani',
  title: 'Computer Science Student',
  subtitle: 'AI & Software Development Enthusiast',
  tagline: 'CS student building real products — AI systems, mobile apps, and automation tools. Passionate about intelligent solutions and a career in AI & Data Science.',
  email: 'labeshroopani@gmail.com',
  phone: '+92 309 398 9404',
  location: 'Hyderabad, Sindh, Pakistan',
  linkedin: 'linkedin.com/in/labish-roopani-09a0a6267',
  linkedinUrl: 'https://linkedin.com/in/labish-roopani-09a0a6267',
  github: 'github.com/LabishRoopani',
  githubUrl: 'https://github.com/LabishRoopani?tab=repositories',
  university: 'Sukkur IBA University',

  summary: 'Motivated Computer Science student at Sukkur IBA University with hands-on experience in AI-based systems, mobile app development, and automation tools. Proficient in Python, Flutter, and computer vision technologies, with growing expertise in React Native. Passionate about building intelligent solutions and pursuing a career in AI and Data Science.',

  experience: [
    {
      role: 'Freelance Software Engineer',
      company: 'Independent',
      period: '2024 – Present',
      description: 'Offering end-to-end software development services for clients. Specializing in mobile and full-stack applications — from UI/UX design and database architecture to final deployment.',
      highlights: [
        'Developed and deployed 6+ custom software applications, including Aura (mood journal app) and a Tailor Management System.',
        'Designed clean, responsive interfaces and structured database architectures (Firebase, local databases) for clients.',
        'Provided end-to-end support, including system optimization, API integration, and post-launch maintenance.',
      ],
      tag: 'Available Now',
      isFreelance: true,
      stats: { icon: '📱', label: 'Mobile Apps', value: '6+ Projects' },
    },
  ],

  projects: [
    {
      num: '01',
      name: 'AI Sales Agent',
      desc: 'AI-powered sales assistant to automate customer interactions. Implemented intelligent NLP-based response handling, automating repetitive sales queries and improving response efficiency significantly.',
      tech: ['Python', 'AI APIs', 'NLP', 'Automation'],
      category: 'AI & Automation',
      color: '#f0f4ff',
      darkColor: '#1a1f2e',
      emoji: '🤖',
    },
    {
      num: '02',
      name: 'AI Excel Agent',
      desc: 'AI-powered system to manage Excel data using natural language — dynamic add, update, delete, and search. Built during Python internship at CodeAlpha. Automated repetitive data tasks to improve efficiency.',
      tech: ['Python', 'Excel Integration', 'AI', 'NLP'],
      category: 'AI & Automation',
      color: '#f0fff4',
      darkColor: '#0f1e16',
      emoji: '📊',
      screenshots: [
        '/ae-1.png',
        '/ae-2.png',
        '/ae-3.png',
        '/ae-4.png'
      ]
    },
    {
      num: '03',
      name: 'YouTube Gesture Controller — AirPointer',
      desc: 'Real-time gesture-based YouTube control using OpenCV and MediaPipe. Sub-100ms response time with fully touchless interaction — no keyboard or mouse required.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
      category: 'Computer Vision',
      color: '#fff7f0',
      darkColor: '#1e160f',
      emoji: '👋',
    },
    {
      num: '04',
      name: 'Smart Door Camera System',
      desc: 'ML-based facial recognition security system integrated with a Flutter mobile app for real-time monitoring and instant push notifications. End-to-end CV + mobile solution.',
      tech: ['Python', 'Flutter', 'ML', 'Firebase', 'OpenCV'],
      category: 'Computer Vision',
      color: '#fdf0ff',
      darkColor: '#1a0f1e',
      emoji: '🔐',
      screenshots: [
        '/sdc-1.png',
        '/sdc-2.png',
        '/sdc-3.png',
        '/sdc-4.png',
        '/sdc-5.png',
        '/sdc-6.png',
        '/sdc-7.png',
        '/sdc-8.png',
        '/sdc-9.png',
        '/sdc-10.png'
      ]
    },
    {
      num: '05',
      name: 'Tailor Management System',
      desc: 'Flutter + Firebase mobile app for a tailoring business — order tracking, customer records, and digital measurements with real-time sync. Built as a freelance project for a local client.',
      tech: ['Flutter', 'Firebase', 'Dart', 'Freelance'],
      category: 'Mobile App',
      color: '#f0f9ff',
      darkColor: '#0f1a1e',
      emoji: '✂️',
      screenshots: [
        '/tms-1.png',
        '/tms-2.png',
        '/tms-3.png',
        '/tms-4.png',
        '/tms-5.png'
      ]
    },
    {
      num: '06',
      name: 'Sloppy Rush — Mobile Game',
      desc: 'Mobile game built in Unity with physics-based mechanics, level design, and a polished UI within a complete and playable game loop.',
      tech: ['Unity', 'C#', 'Game Design'],
      category: 'Game Dev',
      color: '#fffbf0',
      darkColor: '#1e1a0f',
      emoji: '🎮',
    },
    {
      num: '07',
      name: 'Hand Stress Pro',
      desc: 'Real-time stress detection mobile application that analyzes hand motion and gestures. Powered by a machine learning model, it offers low-latency results, featuring local history tracking, custom settings, and gesture analytics.',
      tech: ['Flutter', 'Firebase', 'ML', 'Computer Vision', 'Dart'],
      category: 'Mobile App',
      color: '#e6fffa',
      darkColor: '#0c2222',
      emoji: '🖐️',
      screenshots: [
        '/hsp-1.png',
        '/hsp-2.png',
        '/hsp-3.png',
        '/hsp-4.png'
      ]
    },
    {
      num: '08',
      name: 'Aura',
      desc: 'Mental health and wellness mobile application designed to track and analyze daily mood patterns. Integrates interactive mood logging, daily streaks, customizable notes, and detailed visual analytics to provide mental well-being insights.',
      tech: ['Flutter', 'Dart', 'Local DB', 'UI/UX'],
      category: 'Mobile App',
      color: '#fdfbf7',
      darkColor: '#1e1c18',
      emoji: '🌙',
      screenshots: [
        '/aura-1.png',
        '/aura-2.png',
        '/aura-3.png',
        '/aura-4.png',
        '/aura-5.png'
      ]
    },
  ],

  skills: [
    { title: 'Programming', tags: ['Python', 'Dart (Flutter)', 'C++', 'Java', 'React Native'] },
    { title: 'Technologies', tags: ['Flutter', 'React', 'Firebase', 'OpenCV', 'MediaPipe', 'PyAutoGUI', 'Git'] },
    { title: 'Database', tags: ['MySQL', 'PostgreSQL', 'Firebase Realtime DB'] },
    { title: 'Web Dev', tags: ['HTML', 'CSS', 'Flexbox', 'Responsive Design', 'Figma'] },
    { title: 'Tools', tags: ['VS Code', 'Android Studio', 'Jupyter Notebook', 'GitHub'] },
    { title: 'Soft Skills', tags: ['Problem Solving', 'Communication', 'Team Collaboration', 'Adaptability'] },
  ],

  education: [
    { degree: 'Bachelor of Science in Computer Science', school: 'Sukkur IBA University', detail: '', period: 'Aug 2023 – Present' },
    { degree: 'Intermediate (Pre-Engineering)', school: 'Shah Abdul Latif Degree College', detail: '', period: '2020 – 2022' },
    { degree: 'Matriculation (Science)', school: 'The Stepping Stone High School', detail: '', period: '2018 – 2022' },
  ],

  certifications: [
    {
      name: 'Mastering Deep Learning for Generative AI',
      issuer: 'Udemy',
      date: 'Nov 2025',
      image: '/cert-deep-learning.png'
    },
    {
      name: 'Introduction to Neural Network',
      issuer: 'Great Learning Academy',
      date: 'Jun 2024',
      image: '/cert-neural-networks.png'
    },
    {
      name: 'Basics of Data Structures and Algorithms',
      issuer: 'Simplilearn',
      date: 'Jun 2024',
      image: '/cert-dsa.png'
    },
    {
      name: 'Mobile App Development - Android App Development',
      issuer: 'Simplilearn',
      date: 'Apr 2024',
      image: '/cert-android.png'
    },
    {
      name: 'Java Programming for Beginners',
      issuer: 'Simplilearn',
      date: 'Feb 2024',
      image: '/cert-java.png'
    }
  ],

  languages: [
    { name: 'English', level: 'Fluent' },
    { name: 'Urdu', level: 'Proficient' },
    { name: 'Sindhi', level: 'Native' },
  ],
}

function useScrolled() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return scrolled
}

function useReveal() {
  useEffect(() => {
    const t = setTimeout(() => {
      const els = document.querySelectorAll('.reveal')
      const obs = new IntersectionObserver(
        entries => entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
        }),
        { threshold: 0.08 }
      )
      els.forEach(el => obs.observe(el))
      return () => obs.disconnect()
    }, 100)
    return () => clearTimeout(t)
  }, [])
}

function LogoMark() {
  return (
    <img src="/logo.png" alt="Labish Roopani Logo" className="logo-img" />
  )
}

function Nav({ scrolled, dark, toggleDark }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#top" className="nav-logo-wrap">
        <LogoMark />
        <span className="nav-logo-text">Labish Roopani</span>
      </a>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        {['about','projects','skills','experience','education','contact'].map(s => (
          <li key={s}>
            <a href={`#${s}`} onClick={() => setMenuOpen(false)}>
              {s === 'experience' ? 'Experience' : s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-right">
        <button className="theme-toggle" onClick={toggleDark} aria-label="Toggle theme">
          <span>{dark ? '☀️' : '🌙'}</span>
          <span className="theme-label">{dark ? 'Light' : 'Dark'}</span>
        </button>
        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-eyebrow">Computer Science Student · AI &amp; Mobile Development</p>
          <h1 className="hero-name">Labish<br /><em>Roopani</em></h1>
          <p className="hero-tagline">{DATA.tagline}</p>
          <div className="hero-links">
            <a href={DATA.linkedinUrl} target="_blank" rel="noreferrer" className="hero-link">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href={DATA.githubUrl} target="_blank" rel="noreferrer" className="hero-link">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects ↓</a>
            <a href="/Labish_Roopani_CV.pdf" download className="btn btn-outline">↓ Download CV</a>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <div className="hero-photo">
            <img src="/profile.jpg" alt="Labish Roopani" />
          </div>

        </div>
      </div>
    </section>
  )
}

function SectionHeader({ num, label, title }) {
  return (
    <div className="reveal">
      <div className="section-header-row">
        <div>
          <p className="section-label">{num} — {label}</p>
          <h2 className="section-title">{title}</h2>
        </div>
        <div className="section-num-large">{num}</div>
      </div>
      <div className="divider" />
    </div>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <SectionHeader num="01" label="About" title="Professional Summary" />
      <div className="about-grid reveal">
        <div className="about-bio">
          <p>{DATA.summary}</p>
        </div>
        <div className="about-meta">
          {[
            ['Location', DATA.location, null],
            ['University', DATA.university, null],
            ['Status', 'Open to internships & opportunities', null],
            ['Email', DATA.email, `mailto:${DATA.email}`],
            ['LinkedIn', 'labish-roopani', DATA.linkedinUrl],
            ['GitHub', 'LabishRoopani', DATA.githubUrl],
          ].map(([label, val, href]) => (
            <div className="meta-item" key={label}>
              <p className="meta-label">{label}</p>
              <p className="meta-value">
                {href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{val}</a> : val}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const [activeScreens, setActiveScreens] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="section" id="projects">
      <SectionHeader num="02" label="Projects" title="Things I've Built" />
      <div className="projects-cards reveal">
        {DATA.projects.map((p, i) => (
          <div className="project-card" key={i} style={{'--card-color': p.color, '--card-dark': p.darkColor}}>
            <div className="project-card-header">
              <div className="project-emoji">{p.emoji}</div>
              <div className="project-card-meta">
                <span className="project-category">{p.category}</span>
                <span className="project-num-badge">{p.num}</span>
              </div>
            </div>
            <h3 className="project-card-name">{p.name}</h3>
            <p className="project-card-desc">{p.desc}</p>
            <div className="project-card-footer">
              <div className="project-tech" style={{ marginBottom: '0.4rem' }}>
                {p.tech.map(t => <span className="project-badge" key={t}>{t}</span>)}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: 'auto' }}>
                <span className="project-status-done">✓ Complete</span>
                {p.screenshots && (
                  <button className="project-view-screens-btn" onClick={() => { setActiveScreens(p.screenshots); setCurrentIndex(0); }}>
                    Screens 📱
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeScreens && (
        <div className="modal-overlay" onClick={() => setActiveScreens(null)}>
          <button className="modal-close" onClick={() => setActiveScreens(null)}>×</button>
          
          <div className="screenshot-modal-content" onClick={e => e.stopPropagation()}>
            <div className="screenshot-wrapper">
              <button className="screenshot-nav-btn prev" onClick={(e) => { e.stopPropagation(); setCurrentIndex(prev => (prev === 0 ? activeScreens.length - 1 : prev - 1)); }}>
                ‹
              </button>
              <div className="screenshot-image-container">
                <img src={activeScreens[currentIndex]} alt={`Screenshot ${currentIndex + 1}`} className="screenshot-image" />
              </div>
              <button className="screenshot-nav-btn next" onClick={(e) => { e.stopPropagation(); setCurrentIndex(prev => (prev === activeScreens.length - 1 ? 0 : prev + 1)); }}>
                ›
              </button>
            </div>
            
            <div className="screenshot-indicators">
              {activeScreens.map((_, idx) => (
                <div key={idx} className={`indicator-dot${idx === currentIndex ? ' active' : ''}`} onClick={() => setCurrentIndex(idx)} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeader num="03" label="Skills" title="Technical Expertise" />
      <div className="skills-grid reveal">
        {DATA.skills.map((s, i) => (
          <div className="skill-card" key={i}>
            <h3 className="skill-card-title">{s.title}</h3>
            <div className="skill-tags">
              {s.tags.map(t => <span className="skill-tag" key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHeader num="04" label="Experience" title="Work Experience" />
      <div className="experience-list reveal">
        {DATA.experience.map((exp, i) => (
          <div className="exp-item" key={i}>
            <div className="exp-meta">
              <h3 className="exp-role">{exp.role}</h3>
              <div className="exp-company-period">
                <span className="exp-company">{exp.company}</span>
                <span className="exp-period">{exp.period}</span>
              </div>
              {exp.tag && (
                <span className="exp-badge">
                  <span className="badge-dot badge-dot-blue" />
                  {exp.tag}
                </span>
              )}
            </div>
            <div className="exp-content">
              <p className="exp-desc">{exp.description}</p>
              <ul className="exp-highlights">
                {exp.highlights.map((h, idx) => (
                  <li key={idx}>
                    <span className="highlight-bullet">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
              {exp.isFreelance && exp.stats && (
                <div className="exp-extra">
                  <div className="freelance-stat-card-inline">
                    <span className="stat-icon-inline">{exp.stats.icon}</span>
                    <div>
                      <h4 className="stat-title-inline">{exp.stats.label}</h4>
                      <p className="stat-value-inline">{exp.stats.value}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Education() {
  const [activeCert, setActiveCert] = useState(null)

  return (
    <section className="section" id="education">
      <SectionHeader num="05" label="Education" title="Academic Background" />
      <div className="education-list reveal">
        {DATA.education.map((e, i) => (
          <div className="edu-row" key={i}>
            <div>
              <h3 className="edu-degree">{e.degree}</h3>
              <p className="edu-school">{e.school}</p>
              {e.detail && <p className="edu-detail">{e.detail}</p>}
            </div>
            {e.period && <span className="edu-period">{e.period}</span>}
          </div>
        ))}
      </div>
      <div className="reveal" style={{ marginTop: '3rem' }}>
        <p className="section-label" style={{ marginBottom: '1rem' }}>Certifications (Click to view)</p>
        <div className="cert-grid">
          {DATA.certifications.map((c, i) => (
            <div className="cert-card" key={i} onClick={() => c.image && setActiveCert(c.image)} style={c.image ? { cursor: 'pointer' } : {}}>
              <span className="cert-check">✓</span>
              <div className="cert-info">
                <p className="cert-name">{c.name}</p>
                <p className="cert-issuer">{c.issuer} {c.date && `• ${c.date}`}</p>
              </div>
              {c.image && <span className="cert-view-btn">👁️</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="reveal" style={{ marginTop: '2.5rem' }}>
        <p className="section-label" style={{ marginBottom: '1rem' }}>Languages</p>
        <div className="lang-grid">
          {DATA.languages.map((l, i) => (
            <div className="lang-card" key={i}>
              <span className="lang-name">{l.name}</span>
              <span className="lang-level">{l.level}</span>
            </div>
          ))}
        </div>
      </div>

      {activeCert && (
        <div className="modal-overlay" onClick={() => setActiveCert(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveCert(null)}>×</button>
            <img src={activeCert} alt="Certificate Preview" className="modal-img" />
          </div>
        </div>
      )}
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xreddbdl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      })
      if (res.ok) { setStatus('sent'); setForm({ name: '', email: '', message: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section className="section" id="contact">
      <SectionHeader num="06" label="Contact" title="Get In Touch" />
      <div className="contact-wrapper reveal">
        <div className="contact-info">
          <h3 className="contact-headline">Open to opportunities<br />&amp; conversations.</h3>
          <p className="contact-sub">Internship opening, freelance project, or just want to chat about tech — I'd love to hear from you.</p>
          <div className="contact-links">
            {[
              ['Email', DATA.email, `mailto:${DATA.email}`],
              ['Phone', DATA.phone, `tel:${DATA.phone.replace(/\s/g,'')}`],
              ['LinkedIn', 'labish-roopani', DATA.linkedinUrl],
              ['GitHub', 'LabishRoopani', DATA.githubUrl],
              ['Location', DATA.location, null],
            ].map(([label, val, href]) => (
              <div className="contact-link-row" key={label}
                onClick={() => href && window.open(href, href.startsWith('http') ? '_blank' : '_self')}
                style={href ? { cursor: 'pointer' } : {}}>
                <span className="contact-link-label">{label}</span>
                <span className="contact-link-value">{val}</span>
                {href && <span className="contact-arrow">↗</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="contact-form-wrap">
          <h4 className="form-title">Send a Message</h4>
          {status === 'sent'
            ? <div className="form-success">
                <span className="success-icon">✓</span>
                <p>Message sent! I'll get back to you soon.</p>
              </div>
            : <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input className="form-input" type="text" placeholder="Your name" value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" placeholder="your@email.com" value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-textarea" placeholder="Your message..." rows={5} value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))} required />
                </div>
                {status === 'error' && <p className="form-error">Something went wrong. Please try again.</p>}
                <button type="submit" className="btn btn-primary form-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
          }
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <LogoMark />
        <span className="footer-copy">© {new Date().getFullYear()} Labish Roopani</span>
      </div>
      <span className="footer-note">Built with React · Hosted on Vercel</span>
    </footer>
  )
}

export default function App() {
  const [dark, setDark] = useState(false)
  const scrolled = useScrolled()
  useReveal()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className="portfolio">
      <Nav scrolled={scrolled} dark={dark} toggleDark={() => setDark(d => !d)} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}
