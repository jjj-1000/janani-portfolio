import { useEffect, useMemo, useState } from 'react'
import {
  ArrowDownToLine,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Database,
  Download,
  GitBranch,
  GraduationCap,
  Layers3,
  Network,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  Send,
  Sparkles,
  TerminalSquare,
  Trophy,
  Users,
  X,
  Zap,
} from 'lucide-react'

const profile = {
  name: 'Janani K',
  role: 'Software Developer · AI Engineer',
  eyebrow: 'Pre-final-year B.Tech student · Coimbatore, India',
  email: 'jananinila04@gmail.com',
  phone: '8838529436',
  github: 'https://github.com/jjj-1000/',
  linkedin: 'https://linkedin.com/in/janani-karthikeyan-052245326',
  leetcode: 'https://leetcode.com/u/rouufJP9bq/',
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'GitHub', href: profile.github, icon: GitBranch },
  { label: 'LinkedIn', href: profile.linkedin, icon: Network },
  { label: 'LeetCode', href: profile.leetcode, icon: Code2 },
]

const skillGroups = [
  {
    title: 'Programming',
    icon: TerminalSquare,
    tone: 'plum',
    skills: ['Python', 'Java', 'SQL', 'R (Basics)', 'C (Basics)', 'JavaScript'],
  },
  {
    title: 'Web Development',
    icon: Code2,
    tone: 'lilac',
    skills: ['HTML', 'CSS', 'React.js', 'Flask', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Database',
    icon: Database,
    tone: 'sand',
    skills: ['SQLite', 'MySQL', 'MongoDB', 'Firebase'],
  },
  {
    title: 'AI & ML',
    icon: BrainCircuit,
    tone: 'plum',
    skills: ['Machine Learning', 'Generative AI', 'Explainable AI', 'Gemini AI', 'Claude AI', 'Stable Diffusion'],
  },
  {
    title: 'Core Concepts',
    icon: Layers3,
    tone: 'lilac',
    skills: ['Data Structures', 'OOP', 'Data Analysis', 'JWT Authentication'],
  },
  {
    title: 'Libraries',
    icon: Sparkles,
    tone: 'sand',
    skills: ['NumPy', 'Pandas'],
  },
  {
    title: 'Tools',
    icon: Zap,
    tone: 'plum',
    skills: ['Git', 'GitHub', 'VS Code', 'Google Colab'],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    tone: 'lilac',
    skills: ['Problem Solving', 'Analytical Thinking', 'Communication', 'Teamwork', 'Adaptability'],
  },
]

const projects = [
  {
    number: '01',
    title: 'HoloSign AI',
    subtitle: 'Assistive Sign Language Communication System',
    description: 'AI-assisted communication system integrating speech recognition, Agora RTC, and Firebase.',
    tags: ['Speech Recognition', 'Agora RTC', 'Firebase'],
    icon: MessageCircle,
    tone: 'violet',
    detail: 'An assistive communication concept that brings together speech recognition, real-time communication, and Firebase services.',
  },
  {
    number: '02',
    title: 'CliniSight AI',
    subtitle: 'Adaptive Medical Scan Analysis & Clinical Decision Support',
    description: 'Chest X-ray analysis using DenseNet-121, Grad-CAM explainability, uncertainty handling, and adaptive clinical explanations.',
    tags: ['DenseNet-121', 'Grad-CAM', 'Explainable AI'],
    icon: BrainCircuit,
    tone: 'blue',
    detail: 'A clinical support project focused on explainable chest X-ray analysis, handling uncertainty, and adapting explanations for clinical decision support.',
  },
  {
    number: '03',
    title: 'FairHire AI',
    subtitle: 'AI Recruitment System',
    description: 'AI-powered recruitment platform for automated candidate screening and personalized recommendations.',
    tags: ['Generative AI', 'Candidate Screening', 'Recommendations'],
    icon: BadgeCheck,
    tone: 'rose',
    detail: 'An AI-powered recruitment platform concept designed around automated candidate screening and personalized recommendations.',
  },
  {
    number: '04',
    title: 'DevCollab',
    subtitle: 'Developer Collaboration & Project Management Platform',
    description: 'MERN-based platform with JWT authentication, role-based access, project/task management, and REST APIs.',
    tags: ['MERN Stack', 'JWT Authentication', 'REST APIs'],
    icon: Users,
    tone: 'green',
    detail: 'A full-stack collaboration platform built around authenticated, role-aware project and task management workflows.',
  },
  {
    number: '05',
    title: 'FabriQ AI',
    subtitle: 'Smart Textile Inventory Management System',
    description: 'Flask-based inventory system with Gemini AI, CRUD operations, image upload, and CSV reporting.',
    tags: ['Flask', 'Gemini AI', 'CSV Reporting'],
    icon: Database,
    tone: 'amber',
    detail: 'A smart inventory system that combines Flask application development with Gemini AI, CRUD operations, image uploads, and reporting.',
  },
]

const achievements = [
  { title: 'COGINX 2K26 Hackathon', meta: 'Secured 2nd Place', featured: true },
  { title: 'HackDevengers — 24-Hour Virtual Hackathon', meta: 'Participation' },
  { title: 'Innovation Showcase 2.0', meta: 'Pitching Competition · Participation' },
  { title: 'Adobe University Hackathon', meta: 'Participation' },
  { title: 'Pitchathon — Dr. N.G.P. Institute of Technology', meta: 'Participation' },
  { title: 'ASTRANOVA 2K26 Hackathon', meta: 'Participation' },
  { title: 'TECHAURA 2.0', meta: 'Paper Presentation · Participation' },
]

const education = [
  {
    year: '2026–2027',
    title: 'B.Tech · Artificial Intelligence and Data Science',
    school: 'Dr. N.G.P. Institute of Technology, Coimbatore',
    score: 'Current CGPA: 8.85 / 10',
    icon: GraduationCap,
    current: true,
  },
  {
    year: '2024',
    title: 'Higher Secondary Education (HSC)',
    school: 'SFS Matriculation Higher Secondary School',
    score: '91.8%',
    icon: Award,
  },
  {
    year: '2022',
    title: 'Higher Secondary Education (SSLC)',
    school: 'SFS Matriculation Higher Secondary School',
    score: '89%',
    icon: Award,
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [expandedProject, setExpandedProject] = useState(null)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
      document.documentElement.style.setProperty('--scroll-progress', `${progress}%`)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = [...document.querySelectorAll('main section[id]')]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0.1, 0.35, 0.65] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const formattedCount = useMemo(() => String(projects.length).padStart(2, '0'), [])

  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setFormStatus('Please complete your name, email, and message.')
      return
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${formState.name.trim()}`)
    const body = encodeURIComponent(`${formState.message.trim()}\n\nReply to: ${formState.email.trim()}`)
    setFormStatus('Your email app is opening with the message prefilled.')
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const handleFormChange = (event) => {
    setFormState((current) => ({ ...current, [event.target.name]: event.target.value }))
    if (formStatus) setFormStatus('')
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeSection={activeSection} closeMenu={closeMenu} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects expandedProject={expandedProject} setExpandedProject={setExpandedProject} count={formattedCount} />
        <Education />
        <Achievements />
        <Contact formState={formState} formStatus={formStatus} onSubmit={handleFormSubmit} onChange={handleFormChange} />
      </main>

      <Footer />
    </div>
  )
}

function Header({ menuOpen, setMenuOpen, activeSection, closeMenu }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Janani K home">
          <span className="brand-mark">JK</span>
          <span className="brand-copy">
            <strong>Janani K</strong>
            <small>AI · Software</small>
          </span>
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} className={activeSection === item.href.slice(1) ? 'active' : ''} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s connect <ArrowUpRight size={15} /></a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero section-dark" id="top">
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-grid-layout">
        <div className="hero-copy" data-reveal>
          <div className="eyebrow light"><span className="eyebrow-dot" />{profile.eyebrow}</div>
          <h1>Building thoughtful <em>software</em> for a more intelligent future.</h1>
          <p className="hero-intro">I&apos;m <strong>Janani K</strong>, an aspiring Software Developer and AI Engineer with a strong interest in software development and AI-powered applications.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/Janani-K-Resume.pdf" download="Janani-K-Resume.pdf">Download resume <Download size={16} /></a>
            <a className="button button-ghost" href="#projects">View projects <ArrowDownToLine size={16} /></a>
          </div>
          <div className="hero-socials" aria-label="Social links">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <Icon size={17} /> <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
        <DeveloperIllustration />
      </div>
      <div className="hero-footer container" data-reveal>
        <span>Scroll to explore</span>
        <span className="scroll-line" />
        <span>01 / 08</span>
      </div>
    </section>
  )
}

function DeveloperIllustration() {
  return (
    <div className="developer-stage" data-reveal aria-label="Abstract animated developer illustration">
      <div className="stage-glow" />
      <div className="orbit orbit-a" />
      <div className="orbit orbit-b" />
      <div className="float-chip chip-python"><span>Py</span> Python</div>
      <div className="float-chip chip-ai"><BrainCircuit size={15} /> AI/ML</div>
      <div className="float-chip chip-react"><span>JS</span> React.js</div>
      <div className="code-card">
        <div className="code-card-top"><span><i /><i /><i /></span><small>janani.dev</small><TerminalSquare size={15} /></div>
        <div className="code-lines">
          <span><b>01</b><i>const</i> <strong>vision</strong> = <em>"build with purpose"</em></span>
          <span><b>02</b><i>const</i> <strong>stack</strong> = [<em>"AI"</em>, <em>"web"</em>]</span>
          <span><b>03</b></span>
          <span><b>04</b><i>return</i> <strong>impact</strong>(vision, stack)</span>
          <span><b>05</b></span>
        </div>
        <div className="code-card-bottom"><span className="status-dot" /> Available for internship opportunities</div>
      </div>
      <div className="stage-caption"><span className="caption-line" /> curious by default</div>
    </div>
  )
}

function SectionIntro({ kicker, title, copy, light = false, number }) {
  return (
    <div className={`section-intro ${light ? 'light' : ''}`} data-reveal>
      <div className="section-heading-row">
        <div>
          <div className="eyebrow"><span className="eyebrow-dot" />{kicker}</div>
          <h2>{title}</h2>
        </div>
        {number && <span className="section-number">{number}</span>}
      </div>
      {copy && <p>{copy}</p>}
    </div>
  )
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <SectionIntro
          kicker="A little about me"
          title={<>Curious mind.<br /><em>Builder&apos;s heart.</em></>}
          number="01"
        />
        <div className="about-layout">
          <div className="about-lead" data-reveal>
            <p className="large-copy">Pre-final-year B.Tech Artificial Intelligence and Data Science student with a strong interest in software development and AI-powered applications.</p>
            <p>Skilled in Python, Java, SQL, Flask, and web technologies, with hands-on experience in AI and full-stack projects. Seeking an internship to apply technical skills and contribute to real-world software solutions.</p>
            <a className="text-link" href="#contact">Let&apos;s build something meaningful <ArrowUpRight size={15} /></a>
          </div>
          <div className="about-card-stack" data-reveal>
            <div className="stat-card stat-card-featured"><span className="stat-icon"><GraduationCap size={20} /></span><strong>8.85<span>/10</span></strong><small>Current CGPA</small></div>
            <div className="stat-card"><span className="stat-icon"><MapPin size={18} /></span><strong>Coimbatore</strong><small>Dr. N.G.P. Institute of Technology</small></div>
            <div className="quote-card"><Quote size={21} /><p>“The best work sits where useful ideas meet thoughtful execution.”</p><span>— personal working principle</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section section-tinted" id="skills">
      <div className="container">
        <SectionIntro kicker="The toolkit" title={<>Skills that turn ideas<br /><em>into outcomes.</em></>} copy="A practical, growing toolkit spanning full-stack development, AI, data, and the habits that make good work collaborative." number="02" />
        <div className="skills-grid">
          {skillGroups.map(({ title, icon: Icon, skills, tone }, index) => (
            <article className={`skill-card tone-${tone}`} data-reveal key={title} style={{ '--delay': `${index * 45}ms` }}>
              <div className="skill-card-header"><span className="skill-icon"><Icon size={20} /></span><span className="skill-index">0{index + 1}</span></div>
              <h3>{title}</h3>
              <div className="tag-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <SectionIntro kicker="Experience" title={<>Learning by<br /><em>shipping.</em></>} number="03" />
        <article className="experience-card" data-reveal>
          <div className="experience-mark"><BriefcaseBusiness size={22} /></div>
          <div className="experience-main">
            <div className="experience-topline"><span className="experience-type">Internship experience</span><span className="experience-period">Hands-on experience</span></div>
            <h3>MERN Stack Development Intern</h3>
            <p className="experience-company">Gateway Solution</p>
            <div className="experience-rule" />
            <ul className="experience-list">
              <li><Check size={16} />Completed a MERN Stack Development Internship with hands-on experience in MongoDB, Express.js, React.js, and Node.js.</li>
              <li><Check size={16} />Developed and contributed to full-stack web application modules.</li>
            </ul>
          </div>
          <div className="experience-badge"><span>Full-stack</span><strong>MERN</strong><small>MongoDB · Express · React · Node</small></div>
        </article>
      </div>
    </section>
  )
}

function Projects({ expandedProject, setExpandedProject, count }) {
  return (
    <section className="section projects-section section-dark" id="projects">
      <div className="project-bg-line" aria-hidden="true" />
      <div className="container">
        <SectionIntro kicker="Selected work" title={<>Ideas, made<br /><em>tangible.</em></>} copy="Five project directions that reflect a bias toward useful tools, explainable intelligence, and thoughtful product experiences." light number="04" />
        <div className="projects-count"><strong>{count}</strong><span>projects<br />in focus</span></div>
        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} expanded={expandedProject === index} onToggle={() => setExpandedProject(expandedProject === index ? null : index)} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, expanded, onToggle }) {
  const Icon = project.icon
  return (
    <article className={`project-card project-${project.tone} ${expanded ? 'is-expanded' : ''}`} data-reveal style={{ '--delay': `${index * 70}ms` }}>
      <div className="project-visual" aria-hidden="true">
        <div className="visual-grid" />
        <div className="visual-orb" />
        <div className="visual-window"><span /><span /><span /><div className="visual-lines"><i /><i /><i /></div></div>
        <div className="visual-icon"><Icon size={28} /></div>
        <span className="visual-label">{project.tags[0]}</span>
      </div>
      <div className="project-content">
        <div className="project-meta"><span>{project.number}</span><span className="project-dot" /> <span>Project</span></div>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>
        <div className="tag-list project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <button className="project-detail-button" type="button" onClick={onToggle} aria-expanded={expanded}>
          {expanded ? 'Hide details' : 'View project details'} <ChevronDown size={16} className={expanded ? 'rotated' : ''} />
        </button>
        <div className={`project-detail ${expanded ? 'open' : ''}`} aria-hidden={!expanded}><p>{project.detail}</p></div>
      </div>
    </article>
  )
}

function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container education-layout">
        <SectionIntro kicker="Education" title={<>The foundation<br /><em>so far.</em></>} copy="A steady academic base in artificial intelligence, data science, and the fundamentals behind dependable software." number="05" />
        <div className="education-timeline" data-reveal>
          {education.map((item, index) => {
            const Icon = item.icon
            return <article className={`education-item ${item.current ? 'is-current' : ''}`} key={item.year + item.title}>
              <div className="education-marker"><Icon size={17} /></div>
              {index < education.length - 1 && <div className="education-connector" />}
              <div className="education-year">{item.year}</div>
              <div className="education-copy"><h3>{item.title}</h3><p>{item.school}</p><strong>{item.score}</strong></div>
            </article>
          })}
        </div>
      </div>
    </section>
  )
}

function Achievements() {
  return (
    <section className="section section-tinted achievement-section" id="achievements">
      <div className="container">
        <SectionIntro kicker="Achievements" title={<>Moments that<br /><em>moved the bar.</em></>} number="06" />
        <div className="achievements-layout">
          <div className="achievement-feature" data-reveal>
            <div className="feature-star"><Trophy size={25} /></div>
            <span className="feature-kicker">Featured achievement</span>
            <h3>COGINX<br /><em>2K26</em></h3>
            <p>Hackathon · Secured 2nd Place</p>
            <div className="feature-footer"><span>Recognition</span><ArrowUpRight size={18} /></div>
          </div>
          <div className="achievement-list" data-reveal>
            {achievements.slice(1).map((achievement, index) => <div className="achievement-row" key={achievement.title}><span className="achievement-num">0{index + 2}</span><div><h3>{achievement.title}</h3><p>{achievement.meta}</p></div><ArrowUpRight size={16} /></div>)}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact({ formState, formStatus, onSubmit, onChange }) {
  return (
    <section className="section contact-section section-dark" id="contact">
      <div className="contact-shape contact-shape-one" aria-hidden="true" />
      <div className="contact-shape contact-shape-two" aria-hidden="true" />
      <div className="container">
        <SectionIntro kicker="Get in touch" title={<>Let&apos;s make<br /><em>something useful.</em></>} copy="Open to internship opportunities, thoughtful collaborations, and conversations about software, AI, and the ideas in between." light number="07" />
        <div className="contact-layout">
          <div className="contact-details" data-reveal>
            <div className="contact-detail-intro"><span className="contact-pulse" />Currently seeking internship opportunities.</div>
            <a href={`mailto:${profile.email}`} className="contact-line"><span className="contact-line-icon"><Mail size={17} /></span><span><small>Email</small><strong>{profile.email}</strong></span><ArrowUpRight size={16} /></a>
            <a href={`tel:${profile.phone}`} className="contact-line"><span className="contact-line-icon"><Phone size={17} /></span><span><small>Phone</small><strong>{profile.phone}</strong></span><ArrowUpRight size={16} /></a>
            <div className="contact-social-row">{socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon size={18} /><span>{label}</span></a>)}</div>
          </div>
          <form className="contact-form" onSubmit={onSubmit} data-reveal>
            <div className="form-heading"><span>Have an idea or an opportunity?</span><Send size={18} /></div>
            <label htmlFor="name">Your name<input id="name" name="name" type="text" value={formState.name} onChange={onChange} placeholder="Jane Doe" autoComplete="name" /></label>
            <label htmlFor="email">Your email<input id="email" name="email" type="email" value={formState.email} onChange={onChange} placeholder="jane@example.com" autoComplete="email" /></label>
            <label htmlFor="message">Message<textarea id="message" name="message" value={formState.message} onChange={onChange} placeholder="Tell me a little about it..." rows="4" /></label>
            <button className="button button-primary form-submit" type="submit">Send message <ArrowUpRight size={16} /></button>
            <p className="form-status" aria-live="polite">{formStatus}</p>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand"><span className="brand-mark">JK</span><span>Designed & built by Janani K.</span></div>
        <p>© {new Date().getFullYear()} Janani K · Software Developer & AI Engineer</p>
        <a href="#top" className="back-to-top" aria-label="Back to top"><ArrowUpRight size={16} /></a>
      </div>
    </footer>
  )
}

export default App
