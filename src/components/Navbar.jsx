const links = [
  { id: 'about',      label: 'About' },
  { id: 'inkscape',   label: 'Inkscape' },
  { id: '3d',         label: '3D' },
  { id: 'marketing',  label: 'Marketing' },
  { id: 'commission', label: 'Commission' },
  { id: 'contact',    label: 'Contact' },
]

export default function Navbar({ activeSection }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="site-header">
      <span className="brand" onClick={() => scrollTo('about')}>Portfolio</span>
      <nav className="main-nav">
        {links.map((l) => (
          <button
            key={l.id}
            onClick={() => scrollTo(l.id)}
            className={`nav-link${activeSection === l.id ? ' active' : ''}`}
          >
            {l.label}
          </button>
        ))}
      </nav>
    </header>
  )
}
