import { useEffect, useRef } from 'react'

export default function GalleryItem({ item, onClick, delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('revealed'), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className="gallery-item"
      onClick={() => onClick(item)}
    >
      <img src={item.src} alt={item.title} loading="lazy" />
      <div className="item-overlay">
        <span className="overlay-title">{item.title}</span>
        <span className="overlay-hint">Click to view</span>
      </div>
      <div className="item-caption">{item.title}</div>
    </div>
  )
}
