import { ArrowLeft, ArrowRight } from 'lucide-react'
import ProjectCard from './ProjectCard'
export default function ProjectCarousel({ projects, active, onChange }) {
	const move = (direction) => onChange((active + direction + projects.length) % projects.length)
	const visible = [-1, 0, 1].map((offset) => projects[(active + offset + projects.length) % projects.length])
	return <><div className="projects-top"><div><div className="section-label">04 <span>SELECTED WORK</span></div><h2>A few things I've<br /><em>built.</em></h2></div><div className="carousel-controls"><button className="icon-button" aria-label="Projet précédent" onClick={() => move(-1)}><ArrowLeft size={18} /></button><span>{String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span><button className="icon-button" aria-label="Projet suivant" onClick={() => move(1)}><ArrowRight size={18} /></button></div></div><div className="carousel-track">{visible.map((project, index) => <ProjectCard key={`${project.number}-${active}`} project={project} position={index - 1} />)}</div></>
}
