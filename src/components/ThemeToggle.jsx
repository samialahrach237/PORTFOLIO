import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ dark, onToggle }) {
  return <button className="icon-button theme-toggle" aria-label="Changer le thème" onClick={onToggle}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
}
