import { useState } from 'react'
import { inkscapeItems } from '../data/galleryData'
import MasonryGrid from '../components/MasonryGrid'
import InspectorModal from '../components/InspectorModal'

export default function InkscapeGallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="inkscape">
      <div className="section-block">
        <div className="gallery-header reveal">
          <p className="eyebrow">Gallery</p>
          <h2>Inkscape Posters</h2>
          <p>Typography-driven poster compositions and vector structures.</p>
        </div>

        <MasonryGrid items={inkscapeItems} onItemClick={setSelected} />
        <InspectorModal item={selected} onClose={() => setSelected(null)} />
      </div>
    </section>
  )
}
