const skillCategories = [
  {
    title: 'Programming',
    skills: ['Java', 'C', 'JavaScript'],
  },
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'React'],
  },
  {
    title: 'Database',
    skills: ['SQL', 'MongoDB', 'NoSQL'],
  },
  {
    title: 'Design Tools',
    skills: ['Photoshop', 'Canva', 'Inkscape', 'Blender'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-block">
        <div className="gallery-header reveal">
          <p className="eyebrow">Capabilities</p>
          <h2>Skills</h2>
          <p>Technologies and tools I work with.</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="skill-card reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3>{cat.title}</h3>
              <ul className="skill-list">
                {cat.skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
