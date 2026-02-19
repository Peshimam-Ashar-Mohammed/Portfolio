import { useEffect } from 'react'

export default function InspectorModal({ item, onClose }) {
  /* close on Escape */
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  if (!item) return null

  return (
    <div className="inspector-overlay" onClick={onClose}>
      <div className="inspector-modal" onClick={(e) => e.stopPropagation()}>
        <button className="inspector-close" onClick={onClose}>✕</button>
        <img src={item.src} alt={item.title} />
        <div className="inspector-body">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          {item.tools && (
            <>
              <div className="detail-label">Tools</div>
              <p>{item.tools}</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
