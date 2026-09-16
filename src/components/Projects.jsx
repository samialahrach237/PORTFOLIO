import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCarousel from './ProjectCarousel'
export default function Projects() { const [active, setActive] = useState(0); return <section id="projects" className="projects section-wrap section-line"><ProjectCarousel projects={projects} active={active} onChange={setActive} /></section> }
