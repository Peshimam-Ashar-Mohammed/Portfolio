export default function About() {
  return (
    <section id="about">
      <div className="section-block hero-wrapper">
        <div className="about-section reveal">
          <p className="eyebrow">Designer &amp; Full-Stack Developer</p>
          <h1>Peshimam<br />Ashar<br />Mohammed</h1>
          <p className="lead">
            I build visually engaging digital products by combining
            graphic design with web development.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="/resume.pdf" className="btn-outline" download>Download Resume</a>
          </div>
        </div>

        {/* Abstract geometric decoration — right side */}
        <div className="hero-blobs" aria-hidden="true">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>
      </div>
    </section>
  )
}
