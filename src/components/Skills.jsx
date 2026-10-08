import { useInView } from '../hooks/useInView'
import './Skills.css'

/**
 * SKILLS DATA
 * Add or remove skills here easily.
 */
const SKILLS = [
  { name: 'Python', emoji: '🐍', category: 'Language' },
  { name: 'MySQL', emoji: '🗄️', category: 'Language' },
  { name: 'NumPy', emoji: '∑', category: 'Data' },
  { name: 'Pandas', emoji: '🐼', category: 'Data' },
  { name: 'Matplotlib', emoji: '📊', category: 'Viz' },
  { name: 'Seaborn', emoji: '🎨', category: 'Viz' },
  { name: 'Scikit-learn', emoji: '⚙️', category: 'ML' },
  { name: 'Git', emoji: '🌿', category: 'Tools' },
  { name: 'GitHub', emoji: '🐙', category: 'Tools' },
  { name: 'Flask', emoji: '🧪', category: 'Tools' },
  { name: 'Streamlit', emoji: '🚀', category: 'Tools' },
]

const CATEGORY_COLORS = {
  Language: { bg: 'rgba(56,189,248,0.08)', border: 'rgba(56,189,248,0.25)', bar: '#38bdf8' },
  Data: { bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.25)', bar: '#a78bfa' },
  Viz: { bg: 'rgba(34,211,238,0.08)', border: 'rgba(34,211,238,0.25)', bar: '#22d3ee' },
  ML: { bg: 'rgba(129,140,248,0.08)', border: 'rgba(129,140,248,0.25)', bar: '#818cf8' },
  Tools: { bg: 'rgba(251,191,36,0.07)', border: 'rgba(251,191,36,0.2)', bar: '#fbbf24' },
}

function SkillCard({ name, emoji, category }) {
  const colors = CATEGORY_COLORS[category] || CATEGORY_COLORS.Tools
  return (
    <div
      className="skill-card card"
      style={{ '--card-bg': colors.bg, '--card-border': colors.border }}
    >
      <div className="skill-card__top">
        <span className="skill-card__emoji" role="img" aria-label={name}>{emoji}</span>
        <div className="skill-card__info">
          <p className="skill-card__name">{name}</p>
          <span className="skill-card__category" style={{ color: colors.bar }}>{category}</span>
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const headingRef = useInView()
  const gridRef = useInView()

  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-heading fade-in" ref={headingRef}>
          <span className="label">Tech Stack</span>
          <h2 id="skills-heading">Skills &amp; Tools</h2>
          <p>Technologies I work with to build data-driven projects.</p>
        </div>

        <div className="skills-grid stagger-children" ref={gridRef}>
          {SKILLS.map(skill => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

