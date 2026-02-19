import React from 'react'
import { archiveWorks } from '../data/portfolioData'

export default function ArchivePage() {
  return (
    <section className="section-panel slide-up">
      <p className="eyebrow">Archive</p>
      <h1>Experimental Work</h1>
      <p className="section-copy">An extended archive of additional visual experiments and studies.</p>

      <div className="work-grid work-grid-4">
        {archiveWorks.map((item, index) => (
          <figure key={item.id} className="work-image" style={{ animationDelay: `${index * 60}ms` }}>
            <img src={item.src} alt={item.title} loading="lazy" />
            <figcaption>{item.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
