import { Github, ArrowRight, Database, Brain, Download } from 'lucide-react'
import './Hero.css'

/* ── Subtle ML Visualization ────────────────────────────── */
function MLVisualization() {
  return (
    <div className="hero-viz" aria-hidden="true">
      {/* Central brain icon */}
      <div className="viz-center">
        <div className="viz-icon-ring">
          <Brain size={32} />
        </div>
      </div>

      {/* Orbit nodes */}
      {[
        { label: 'Python', icon: '🐍', cls: 'node-1' },
        { label: 'Scikit', icon: '⚙️', cls: 'node-2' },
        { label: 'Pandas', icon: '🐼', cls: 'node-3' },
        { label: 'NumPy', icon: '∑', cls: 'node-4' },
        { label: 'MySQL', icon: '🗄', cls: 'node-5' },
        { label: 'ML', icon: '📈', cls: 'node-6' },
      ].map(({ label, icon, cls }) => (
        <div key={label} className={`viz-node ${cls}`}>
          <span className="viz-node-icon">{icon}</span>
          <span className="viz-node-label">{label}</span>
        </div>
      ))}

      {/* Connecting lines */}
      <svg className="viz-lines" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="150" r="90" fill="none" stroke="rgba(56,189,248,0.12)" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="150" cy="150" r="50" fill="none" stroke="rgba(167,139,250,0.1)" strokeWidth="1" strokeDasharray="3 5" />
        {/* Radial lines */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const x2 = 150 + 90 * Math.cos(rad)
          const y2 = 150 + 90 * Math.sin(rad)
          return (
            <line
              key={i}
              x1="150" y1="150"
              x2={x2} y2={y2}
              stroke="rgba(56,189,248,0.08)"
              strokeWidth="1"
            />
          )
        })}
      </svg>

      {/* Floating stat card */}
      <div className="viz-stat viz-stat--b">
        <Database size={14} />
        <span>10k+ rows</span>
      </div>
    </div>
  )
}

/* ── Hero Component ─────────────────────────────────────── */
export default function Hero() {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" aria-label="Introduction">
      {/* Background gradient blobs */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-blob hero-blob--1" />
        <div className="hero-blob hero-blob--2" />
      </div>

      <div className="container hero__inner">
        {/* Left: Text content */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Open to opportunities
          </div>

          <h1 className="hero__greeting">Hi, I'm Subodh Kumar</h1>

          <p className="hero__title">
            Python &amp; Machine Learning
            <span className="hero__title-accent"> Enthusiast</span>
          </p>

          <p className="hero__desc">
            I'm passionate about Python, data science, and machine learning,
            building practical projects while continuously expanding my skills.
          </p>

          <div className="hero__cta">
            <button
              className="btn btn-primary"
              onClick={() => handleScroll('projects')}
              aria-label="View my projects"
            >
              View Projects
              <ArrowRight size={16} />
            </button>

            <a
              className="btn btn-outline"
              href="https://github.com/CreatorSubodh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in new tab)"
            >
              <Github size={16} />
              GitHub
            </a>

            <a
              className="btn btn-ghost"
              href="/assets/resume/Subodh-Kumar-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open resume PDF"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          {/* Quick stats */}
          <div className="hero__stats">
            {[
              { value: '10+', label: 'ML Algorithms' },
              { value: '2+', label: 'Projects' },
              { value: '∞', label: 'Learning' },
            ].map(({ value, label }) => (
              <div key={label} className="hero__stat">
                <span className="hero__stat-value">{value}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: ML Visualization */}
        <div className="hero__visual">
          <MLVisualization />
        </div>
      </div>
    </section>
  )
}
