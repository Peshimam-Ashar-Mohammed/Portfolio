export default function About() {
  return (
    <section id="about">
      <div className="section-block hero-wrapper">
        <div className="about-section reveal">
          <p className="eyebrow">Visual Designer &amp; 3D Artist</p>
          <h1>Creative<br />Portfolio</h1>
          <p className="lead">
            Designing bold posters, building immersive 3D environments, and crafting
            visual identities that hit hard. Brutalist aesthetics, clean grids, and
            relentless attention to typography drive every piece of work.
          </p>
        </div>

        {/* Abstract inflatable 3D blobs — right side filler */}
        <div className="hero-blobs" aria-hidden="true">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>
      </div>
    </section>
  )
}
