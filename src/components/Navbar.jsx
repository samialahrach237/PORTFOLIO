import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Navbar({ dark, onToggle, menuOpen, setMenuOpen }) {
  const links = ['home', 'about', 'skills', 'projects', 'credentials', 'contact']
  const [active, setActive] = useState('home')
  useEffect(() => {
    const sections = links.map((link) => document.getElementById(link)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id) }), { rootMargin: '-35% 0px -55% 0px' })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  return <header className="navbar"><a className="brand" href="#home">Samia<span>Lahrach</span></a><nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{links.map((link) => <a className={active === link ? 'active' : ''} key={link} href={`#${link}`} onClick={() => setMenuOpen(false)}>{link}</a>)}</nav><div className="nav-actions"><ThemeToggle dark={dark} onToggle={onToggle} /><button className="menu-button" aria-label="Ouvrir le menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button></div></header>
}
