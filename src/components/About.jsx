import { Code2, Database, BrainCircuit, BarChart3 } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import './About.css'

const FOCUS_AREAS = [
  {
    icon: <Code2 size={20} />,
    title: 'Python Programming',
    desc: 'Building scripts, automation tools, and data pipelines using clean, readable Python code.',
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'Data Analysis',
    desc: 'Exploring, cleaning, and visualizing datasets with Pandas, NumPy, Matplotlib, and Seaborn.',
  },
  {
    icon: <BrainCircuit size={20} />,
    title: 'Machine Learning',
    desc: 'Applying supervised learning algorithms with Scikit-learn to solve real-world classification and regression problems.',
  },
  {
    icon: <Database size={20} />,
    title: 'SQL & Data Management',
    desc: 'Writing queries to extract, transform, and manage structured data efficiently.',
  },
]

export default function About() {
  const sectionRef = useInView()
  const cardsRef = useInView()

  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-heading fade-in" ref={sectionRef}>
          <span className="label">About Me</span>
          <h2 id="about-heading">Who I Am</h2>
          <p>
            A passionate developer on a focused journey through data science
            and machine learning.
          </p>
        </div>

        <div className="about__layout">
          {/* Bio card */}
          <div className="about__bio card fade-in" ref={useInView()}>
            <div className="about__bio-header">
              <div className="about__avatar">SK</div>
              <div>
                <h3 className="about__name">Subodh Kumar</h3>
                <p className="about__role">Python &amp; ML Enthusiast</p>
              </div>
            </div>
            <p className="about__text">
              I'm actively learning and building in the fields of Python, data science,
              and machine learning. My focus is on understanding how data-driven models
              work — from exploratory analysis to deploying predictions.
            </p>
            <p className="about__text">
              I believe in learning by doing: each project I build deepens my
              understanding of algorithms, data manipulation, and practical problem-solving.
              I'm growing every day and excited about where this path leads.
            </p>

            <div className="about__tags">
              {['Python', 'Data Science', 'Machine Learning', 'SQL', 'Data Analysis'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Focus area cards */}
          <div className="about__cards stagger-children" ref={cardsRef}>
            {FOCUS_AREAS.map(({ icon, title, desc }) => (
              <div key={title} className="about__focus-card card">
                <div className="about__focus-icon">{icon}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
