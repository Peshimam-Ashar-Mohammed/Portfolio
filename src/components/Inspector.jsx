import React from 'react'

export default function Inspector({ blocks, onAdd, onUpdate, onRemove, selectedId, onSelect }) {
  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <button onClick={() => onAdd('skills')}>Add Skills Block</button>
        <button onClick={() => onAdd('projects')} style={{ marginLeft: 8 }}>
          Add Projects Block
        </button>
      </div>

      <div>
        {blocks.length === 0 && <div className="muted">No blocks yet — add one.</div>}
        {blocks.map((b) => (
          <div key={b.id} className={b.id === selectedId ? 'item selected' : 'item'} onClick={() => onSelect(b.id)}>
            <div className="item-row">
              <input
                value={b.title}
                onChange={(e) => onUpdate(b.id, { title: e.target.value })}
                className="title-input"
              />
              <button onClick={() => onRemove(b.id)} className="delete-btn">
                ×
              </button>
            </div>
            <textarea
              value={b.desc}
              onChange={(e) => onUpdate(b.id, { desc: e.target.value })}
              placeholder="Description"
            />
            <div className="muted">Type: {b.type}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
