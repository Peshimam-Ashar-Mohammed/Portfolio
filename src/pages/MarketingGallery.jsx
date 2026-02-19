import { useState } from 'react'
import { marketingItems } from '../data/galleryData'
import MasonryGrid from '../components/MasonryGrid'
import InspectorModal from '../components/InspectorModal'

export default function MarketingGallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="marketing">
      <div className="section-block">
        <div className="gallery-header reveal">
          <p className="eyebrow">Gallery</p>
          <h2>Marketing Posters</h2>
          <p>Product campaigns, food branding, and festive promotional designs.</p>
        </div>

        <MasonryGrid items={marketingItems} onItemClick={setSelected} />
        <InspectorModal item={selected} onClose={() => setSelected(null)} />
      </div>
    </section>
  )
}
