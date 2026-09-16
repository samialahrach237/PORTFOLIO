import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Palette,
  Phone,
  Rocket,
  Send,
  ShoppingBag,
  Sparkles,
  Store,
  TerminalSquare,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import './App.css'

const navLinks = [
  ['home', 'Accueil'],
  ['about', 'À propos'],
  ['skills', 'Compétences'],
  ['experience', 'Expérience'],
  ['projects', 'Projets'],
  ['education', 'Formation'],
  ['contact', 'Contact'],
]

const technologies = [
  'React.js',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Bootstrap',
  'PHP',
  'Laravel',
  'MySQL',
  'REST API',
  'Node.js',
  'MongoDB',
  'Git',
  'GitHub',
  'Vite',
  'WordPress',
  'WooCommerce',
  'Postman',
  'Figma',
  'Canva',
]

const stacks = [
  { title: 'Frontend', icon: Code2, items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'Backend', icon: Database, items: ['PHP', 'Laravel', 'REST API', 'Node.js', 'MySQL', 'MongoDB'] },
  { title: 'CMS & Commerce', icon: Store, items: ['WordPress', 'WooCommerce', 'Mini Store', 'Boutiques en ligne'] },
  { title: 'Outils', icon: TerminalSquare, items: ['Git', 'GitHub', 'Vite', 'Postman', 'Figma', 'Canva'] },
]

const projects = [
  {
    title: 'AARSSI',
    type: 'Projet principal',
    description: 'Marketplace de services pour mariages et evenements.',
    tags: ['Marketplace', 'Services', 'Evenements'],
    featured: true,
    icon: Sparkles,
  },
  {
    title: 'Coffee Shop',
    type: 'Site vitrine',
    description: 'Site web moderne pour un cafe.',
    tags: ['Branding', 'Responsive', 'UI'],
    icon: Store,
  },
  {
    title: 'Real Estate',
    type: 'Plateforme immobilière',
    description: 'Plateforme pour appartements à Meknès, Fès et Casablanca.',
    tags: ['Immobilier', 'Recherche', 'Villes'],
    icon: Layers3,
  },
  {
    title: 'Mini Store',
    type: 'E-commerce',
    description: 'Application e-commerce pour presenter et organiser des produits.',
    tags: ['Produits', 'Boutique', 'Web app'],
    icon: ShoppingBag,
  },
  {
    title: 'WordPress E-commerce',
    type: 'WooCommerce',
    description: 'Boutique en ligne avec WordPress et WooCommerce.',
    tags: ['WordPress', 'WooCommerce', 'Commerce'],
    icon: Palette,
  },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = navLinks.map(([id]) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-35% 0px -50% 0px', threshold: 0.01 },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="Accueil Samia Lahrach">
        <span>SL</span>
        <small>Full Stack Developer</small>
      </a>

      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Navigation principale">
        {navLinks.map(([id, label]) => (
          <a className={active === id ? 'active' : ''} href={`#${id}`} key={id} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <a className="nav-contact" href="#contact">
          Me contacter <ArrowRight size={16} />
        </a>
        <button className="menu-button" type="button" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}

function SectionLabel({ eyebrow, title, centered = false }) {
  return (
    <div className={centered ? 'section-title centered' : 'section-title'}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-content">
        <div className="pill">
          <span />
          Full Stack - React - Laravel - Maroc
        </div>
        <h1>
          Samia Lahrach
          <strong>Full Stack Developer</strong>
        </h1>
        <p>
          Je crée des interfaces modernes et des applications web complètes avec une approche propre,
          professionnelle et responsive.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#projects">
            Voir mes projets <ArrowRight size={18} />
          </a>
          <a className="secondary-button" href="#contact">
            Me contacter
          </a>
        </div>
        <div className="hero-notes">
          <span><CheckCircle2 size={15} /> React.js, Laravel, MySQL</span>
          <span><CheckCircle2 size={15} /> Meknès, Maroc</span>
          <span><CheckCircle2 size={15} /> Disponible pour projets web</span>
        </div>
      </div>
      <aside className="hero-card" aria-label="Portrait de Samia Lahrach">
        <img src="/samia-photo.jpg" alt="Samia Lahrach" />
        <div>
          <span>FULL STACK DEVELOPER</span>
          <strong>React.js / Laravel</strong>
        </div>
      </aside>
    </section>
  )
}

function Stats() {
  return (
    <section className="stats-band" aria-label="Resume rapide">
      <div><strong>20</strong><span>Technologies</span></div>
      <div><strong>5</strong><span>Projets presentes</span></div>
      <div><strong>Bac+2</strong><span>Developpement digital</span></div>
      <div><strong>2026</strong><span>Experience web</span></div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section about">
      <SectionLabel eyebrow="À propos" title="Développeuse web orientée produit et expérience utilisateur." />
      <div className="about-layout">
        <div className="about-copy">
          <p>
            Samia Lahrach est Full Stack Developer basée à Meknès. Elle travaille sur des interfaces web
            modernes, des applications e-commerce, des plateformes métier et des intégrations API.
          </p>
          <p>
            Son parcours combine développement informatique digital, licence en cours à SupMITI Meknès,
            pratique frontend avec React.js et bases backend avec Laravel, PHP, MySQL et REST API.
          </p>
        </div>
        <div className="about-panel">
          <span>Profil</span>
          <ul>
            <li><CheckCircle2 size={17} /> Full Stack Developer</li>
            <li><CheckCircle2 size={17} /> Meknès, Maroc</li>
            <li><CheckCircle2 size={17} /> React.js, Laravel, MySQL</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section soft-section">
      <SectionLabel eyebrow="Technologies" title="Les outils que j'utilise" centered />
      <div className="tech-cloud">
        {technologies.map((tech) => <span key={tech}>{tech}</span>)}
      </div>
      <div className="stack-grid">
        {stacks.map(({ title, icon: Icon, items }) => (
          <article className="stack-card" key={title}>
            <Icon size={23} />
            <h3>{title}</h3>
            <p>{items.join(' - ')}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section split-section">
      <SectionLabel eyebrow="Expérience" title="Expérience professionnelle" />
      <div className="timeline-card">
        <div className="timeline-date">Janvier 2026 - 1 mois</div>
        <div>
          <BriefcaseBusiness size={24} />
          <h3>Stagiaire Développeuse Web Full Stack</h3>
          <p>YONETWORK Sarl, Meknès</p>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <SectionLabel eyebrow="Projets" title="Sélection de projets web" centered />
      <div className="projects-grid">
        {projects.map(({ title, type, description, tags, featured, icon: Icon }) => (
          <article className={featured ? 'project-card featured' : 'project-card'} key={title}>
            <div className="project-top">
              <div className="project-icon"><Icon size={22} /></div>
              <span>{type}</span>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-tags">
              {tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <a href="#contact" aria-label={`Discuter du projet ${title}`}>
              Discuter d'un projet similaire <ExternalLink size={15} />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="section education-section">
      <SectionLabel eyebrow="Formation" title="Parcours académique" />
      <div className="education-grid">
        <article>
          <GraduationCap size={24} />
          <h3>Bac+2 en Développement Informatique Digital</h3>
        </article>
        <article>
          <Rocket size={24} />
          <h3>Licence en cours à SupMITI Meknès</h3>
        </article>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-box">
        <div className="contact-dark">
          <span>Disponible pour discuter</span>
          <h2>Parlons de votre projet web.</h2>
          <p>Contact direct avec Samia Lahrach pour un site, une application ou une boutique en ligne.</p>
          <div className="quick-contact">
            <a href="tel:+212776207495"><Phone size={18} /> +212 776 207 495</a>
            <a href="mailto:samialahrach237@gmail.com"><Mail size={18} /> samialahrach237@gmail.com</a>
            <span><MapPin size={18} /> Meknès, Maroc</span>
          </div>
        </div>
        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <label>
            Nom
            <input type="text" placeholder="Votre nom" />
          </label>
          <label>
            Email
            <input type="email" placeholder="votre@email.com" />
          </label>
          <label>
            Message
            <textarea rows="5" placeholder="Décrivez votre besoin" />
          </label>
          <button className="primary-button" type="submit">
            Envoyer le message <Send size={17} />
          </button>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <a className="brand footer-brand" href="#home">
        <span>SL</span>
        <small>Samia Lahrach</small>
      </a>
      <p>Full Stack Developer - Meknès, Maroc</p>
      <a href="mailto:samialahrach237@gmail.com">samialahrach237@gmail.com</a>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
