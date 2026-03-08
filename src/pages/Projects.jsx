import { useState } from 'react'

const projects = [
  {
    id: 'cinevault',
    title: 'CineVault',
    description: 'Movie library web application for browsing and managing films with dynamic listings and subtitle support.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://peshimam-ashar-mohammed.github.io/CineVault/',
    sourceUrl: 'https://github.com/peshimam-ashar-mohammed/CineVault',
    problem: 'Finding and managing movies in one place can be tedious. CineVault provides a streamlined browsing experience.',
    features: ['Dynamic movie listing', 'Subtitle support', 'Responsive UI', 'Search and filter functionality'],
    role: 'Designed and developed the full application — from UI/UX layout to JavaScript logic for dynamic content rendering.',
  },
  {
    id: 'cybertoolkit',
    title: 'CyberToolKit',
    description: 'A cybersecurity toolkit web application featuring essential security utilities and tools in one interface.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://peshimam-ashar-mohammed.github.io/CyberToolKit/',
    sourceUrl: 'https://github.com/peshimam-ashar-mohammed/CyberToolKit',
    problem: 'Security tools are scattered across different platforms. CyberToolKit bundles essential utilities into a single accessible interface.',
    features: ['Multiple security tools', 'Clean dashboard interface', 'Responsive design', 'Easy-to-use UI'],
    role: 'Built the entire application end-to-end — structure, styling, and all tool implementations.',
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker',
    description: 'A fitness tracking application to monitor workouts, set goals, and visualise progress over time.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: null,
    sourceUrl: null,
    problem: 'Keeping consistent track of fitness routines and progress requires a dedicated, simple tool.',
    features: ['Workout logging', 'Goal setting', 'Progress visualisation', 'Responsive layout'],
    role: 'Developed the complete frontend with workout tracking logic and progress display.',
  },
]

export default function Projects() {
  const [expanded, setExpanded] = useState(null)

  const toggle = (id) => {
    setExpanded(expanded === id ? null : id)
  }

  return (
    <section id="projects">
      <div className="section-block">
        <div className="gallery-header reveal">
          <p className="eyebrow">Work</p>
          <h2>Featured Projects</h2>
          <p>Web applications I've designed and developed.</p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={p.id} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
            <div className={`project-card${expanded === p.id ? ' expanded' : ''}`}>
              <div className="project-card-header">
                <h3>{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm">
                      Live Demo
                    </a>
                  )}
                  {p.sourceUrl && (
                    <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn-outline btn-sm">
                      Source Code
                    </a>
                  )}
                </div>
              </div>

              <button className="project-toggle" onClick={() => toggle(p.id)}>
                {expanded === p.id ? 'Hide Details' : 'View Details'}
              </button>

              {expanded === p.id && (
                <div className="project-details">
                  <div className="detail-block">
                    <span className="detail-label">Problem</span>
                    <p>{p.problem}</p>
                  </div>
                  <div className="detail-block">
                    <span className="detail-label">Features</span>
                    <ul className="feature-list">
                      {p.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="detail-block">
                    <span className="detail-label">Tech Stack</span>
                    <p>{p.tech.join(', ')}</p>
                  </div>
                  <div className="detail-block">
                    <span className="detail-label">My Role</span>
                    <p>{p.role}</p>
                  </div>
                </div>
              )}
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
