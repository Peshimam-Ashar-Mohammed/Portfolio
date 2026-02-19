import React from 'react'
import { processCollections } from '../data/portfolioData'

export default function BlenderGalleryPage() {
  return (
    <section className="section-panel slide-up stack-md">
      <p className="eyebrow">Dedicated Gallery</p>
      <h1>Blender Gallery</h1>
      <p className="section-copy">
        Spatial foundations, lighting setups, and environmental studies displayed in full aspect ratio.
      </p>

      <div className="gallery-grid">
        {processCollections.blender.map((item, index) => (
          <figure key={item.id} className="gallery-card" style={{ animationDelay: `${index * 55}ms` }}>
            <img src={item.src} alt={item.title} loading="lazy" />
            <figcaption>{item.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
