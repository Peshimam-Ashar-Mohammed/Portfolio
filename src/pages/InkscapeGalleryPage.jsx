import React from 'react'
import { processCollections } from '../data/portfolioData'

export default function InkscapeGalleryPage() {
  return (
    <section className="section-panel slide-up stack-md">
      <p className="eyebrow">Dedicated Gallery</p>
      <h1>Inkscape Gallery</h1>
      <p className="section-copy">
        Typography-driven poster compositions and vector structures displayed in full aspect ratio.
      </p>

      <div className="gallery-grid">
        {processCollections.inkscape.map((item, index) => (
          <figure key={item.id} className="gallery-card" style={{ animationDelay: `${index * 55}ms` }}>
            <img src={item.src} alt={item.title} loading="lazy" />
            <figcaption>{item.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
