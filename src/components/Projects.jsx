import { Github, ExternalLink } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import './Projects.css'

/**
 * PROJECTS DATA
 * ─────────────────────────────────────────────────────────
 * To add a new project, copy one object below and fill in:
 *   title       — project name
 *   category    — e.g. "Machine Learning"
 *   description — short summary (1–2 sentences)
 *   tags        — array of technology strings
 *   model       — ML model name shown as a badge (optional)
 *   github      — your GitHub repo URL, or null if not public yet
 *   demo        — live demo URL, or null if not available
 * ─────────────────────────────────────────────────────────
 */
const PROJECTS = [
  {
    id: 'churn',
    title: 'Telecom Customer Churn Prediction',
    category: 'Machine Learning',
    model: 'Logistic Regression',
    description:
      'Built a customer churn prediction model using Logistic Regression. ' +
      'Performed data cleaning, EDA, preprocessing, feature engineering, ' +
      'and model evaluation.',
    tags: ['Python', 'Scikit-learn', 'Streamlit'],
    github: 'https://github.com/CreatorSubodh/telco-churn-prediction',
    demo: 'https://ml-telco-churn-prediction.streamlit.app/',
  },
  {
    id: 'forest-fire',
    title: 'Algerian Forest Fire FWI Prediction',
    category: 'Machine Learning',
    model: 'Linear Regression',
    description:
      'Built a Linear Regression model to predict the Fire Weather Index (FWI) ' +
      'using weather and fire-weather indicators. Performed data preprocessing, ' +
      'EDA, feature selection, feature scaling, model training and evaluation, ' +
      'and deployed the model using Streamlit.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit'],
    github: 'https://github.com/CreatorSubodh/forest-fire-fwi-prediction',
    demo: 'https://forest-fire-fwi-prediction.streamlit.app/',
  },
]

function ProjectCard({ title, category, model, description, tags, github, demo }) {
  return (
    <article className="project-card card">
      {/* Header */}
      <div className="project-card__header">
        <span className="project-card__category tag">{category}</span>
        {model && (
          <span className="project-card__model">{model}</span>
        )}
      </div>

      {/* Content */}
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{description}</p>

      {/* Tags */}
      <div className="project-card__tags">
        {tags.map(t => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      {/* Actions */}
      <div className="project-card__actions">
        {github ? (
          <a
            href={github}
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub repository for ${title}`}
          >
            <Github size={15} />
            GitHub
          </a>
        ) : (
          <span className="btn btn-ghost project-card__btn--disabled" aria-disabled="true">
            <Github size={15} />
            GitHub
          </span>
        )}

        {demo && (
          <a
            href={demo}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live demo for ${title} (opens in new tab)`}
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const headingRef = useInView()
  const gridRef = useInView()

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-heading fade-in" ref={headingRef}>
          <span className="label">Work</span>
          <h2 id="projects-heading">Projects</h2>
          <p>
            Practical projects that demonstrate my data science and ML skills.
            More coming as I continue building.
          </p>
        </div>

        <div className="projects-grid stagger-children" ref={gridRef}>
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="projects-cta fade-in" ref={useInView()}>
          <p className="projects-cta__text">
            More projects in progress — check back soon, or visit my GitHub.
          </p>
          <a
            href="https://github.com/CreatorSubodh"
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all projects on GitHub (opens in new tab)"
          >
            <Github size={16} />
            View GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
