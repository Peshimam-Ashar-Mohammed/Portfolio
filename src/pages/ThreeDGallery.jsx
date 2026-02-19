import { useState } from 'react'
import { threeDItems } from '../data/galleryData'
import MasonryGrid from '../components/MasonryGrid'
import InspectorModal from '../components/InspectorModal'

export default function ThreeDGallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="3d">
      <div className="section-block">
        <div className="gallery-header reveal">
          <p className="eyebrow">Gallery</p>
          <h2>3D Models</h2>
          <p>Spatial foundations, lighting setups, and environmental studies.</p>
        </div>

        <MasonryGrid items={threeDItems} onItemClick={setSelected} />
        <InspectorModal item={selected} onClose={() => setSelected(null)} />
      </div>
    </section>
  )
}
