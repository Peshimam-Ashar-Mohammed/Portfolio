import GalleryItem from './GalleryItem'

export default function MasonryGrid({ items, onItemClick }) {
  return (
    <div className="masonry-grid">
      {items.map((item, i) => (
        <GalleryItem
          key={item.id}
          item={item}
          delay={i * 50}
          onClick={onItemClick}
        />
      ))}
    </div>
  )
}
