import SkillCard from './SkillCard'
import { skillGroups } from '../data/skills'
export default function Skills() { return <section id="skills" className="skills section-wrap section-line"><div className="section-heading"><div className="section-label">03 <span>EXPERTISE</span></div><h2>What I bring<br /><em>to the table.</em></h2></div><div className="skills-grid">{skillGroups.map((group) => <SkillCard key={group.label} group={group} />)}</div></section> }
