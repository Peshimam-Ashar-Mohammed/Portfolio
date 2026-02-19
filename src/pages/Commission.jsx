const services = [
  {
    title: 'Poster Design',
    description: 'Custom poster artwork — movie, music, sports, or personal projects. Bold typographic brutalist compositions.',
  },
  {
    title: 'Brand Visuals',
    description: 'Social-media graphics, marketing posters, and visual identity material for products and campaigns.',
  },
  {
    title: '3D Renders',
    description: 'Photo-real or stylised 3D scenes, product visualisations, and environmental renders in Blender.',
  },
]

export default function Commission() {
  return (
    <section id="commission">
      <div className="section-block commission-section">
        <div className="commission-intro reveal">
          <h2>Commission</h2>
          <p className="lead">
            Available for freelance work. Whether you need a poster, 3D render, or
            full brand visual — let's build something memorable.
          </p>
        </div>

        <div className="commission-boxes">
          {services.map((s, i) => (
            <div key={s.title} className="commission-box reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
