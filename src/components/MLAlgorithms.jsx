import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import './MLAlgorithms.css'

/**
 * ML ALGORITHMS DATA
 * ─────────────────────────────────────────────────────────
 * tags: The categories this algorithm belongs to.
 *   Supported tags: "Classification" | "Regression" | "Ensemble" | "Boosting"
 *
 * To add a new algorithm:
 *   { name: 'Algorithm Name', tags: ['Tag1', 'Tag2'] }
 * ─────────────────────────────────────────────────────────
 */
const ALGORITHMS = [
  { name: 'Linear Regression',   tags: ['Regression'] },
  { name: 'Logistic Regression', tags: ['Classification'] },
  { name: 'K-Nearest Neighbors', tags: ['Classification', 'Regression'] },
  { name: 'Naive Bayes',         tags: ['Classification'] },
  { name: 'SVM',                 tags: ['Classification', 'Regression'] },
  { name: 'Decision Tree',       tags: ['Classification', 'Regression'] },
  { name: 'Random Forest',       tags: ['Classification', 'Regression', 'Ensemble'] },
  { name: 'AdaBoost',            tags: ['Classification', 'Regression', 'Ensemble', 'Boosting'] },
  { name: 'Gradient Boosting',   tags: ['Classification', 'Regression', 'Ensemble', 'Boosting'] },
  { name: 'XGBoost',             tags: ['Classification', 'Regression', 'Ensemble', 'Boosting'] },
]

const FILTERS = ['All', 'Classification', 'Regression', 'Ensemble', 'Boosting']

const TAG_STYLES = {
  Classification: { color: '#38bdf8', bg: 'rgba(56,189,248,0.1)',  border: 'rgba(56,189,248,0.25)' },
  Regression:     { color: '#a78bfa', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.25)' },
  Ensemble:       { color: '#22d3ee', bg: 'rgba(34,211,238,0.1)',  border: 'rgba(34,211,238,0.25)'  },
  Boosting:       { color: '#fbbf24', bg: 'rgba(251,191,36,0.1)',  border: 'rgba(251,191,36,0.25)'  },
}

function AlgoTag({ label }) {
  const s = TAG_STYLES[label] || {}
  return (
    <span
      className="algo-tag"
      style={{ color: s.color, background: s.bg, borderColor: s.border }}
    >
      {label}
    </span>
  )
}

function AlgoCard({ name, tags }) {
  return (
    <div className="algo-card card">
      <p className="algo-card__name">{name}</p>
      <div className="algo-card__tags">
        {tags.map(t => <AlgoTag key={t} label={t} />)}
      </div>
    </div>
  )
}

export default function MLAlgorithms() {
  const [active, setActive] = useState('All')
  const headingRef = useInView()

  const filtered = active === 'All'
    ? ALGORITHMS
    : ALGORITHMS.filter(a => a.tags.includes(active))

  return (
    <section id="ml" aria-labelledby="ml-heading">
      <div className="container">
        <div className="section-heading fade-in" ref={headingRef}>
          <span className="label">Machine Learning</span>
          <h2 id="ml-heading">Algorithms I've Learned</h2>
          <p>
            A curated overview of machine learning algorithms I've studied and practiced.
          </p>
        </div>

        {/* Filter bar */}
        <div className="ml-filters" role="group" aria-label="Filter algorithms by category">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`ml-filter-btn ${active === f ? 'ml-filter-btn--active' : ''}`}
              onClick={() => setActive(f)}
              aria-pressed={active === f}
            >
              {f}
              <span className="ml-filter-count">
                {f === 'All'
                  ? ALGORITHMS.length
                  : ALGORITHMS.filter(a => a.tags.includes(f)).length}
              </span>
            </button>
          ))}
        </div>

        {/* Algorithm grid */}
        <div className="algo-grid" key={active}>
          {filtered.map((algo, i) => (
            <div
              key={algo.name}
              className="algo-grid__item"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <AlgoCard {...algo} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="ml-empty">No algorithms match this filter.</p>
        )}

        <p className="ml-note fade-in" ref={useInView()}>
          More algorithms will be added as I continue learning. This section grows with me.
        </p>
      </div>
    </section>
  )
}
