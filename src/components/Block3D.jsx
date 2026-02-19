import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'

export default function Block3D({ block, index, selected, onSelect }) {
  const ref = useRef()

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.3
      ref.current.position.y = Math.sin(state.clock.elapsedTime + index) * 0.12 + (index % 2) * 0.1
    }
  })

  return (
    <group position={block.pos || [index * 1.8, 0, 0]}>
      <mesh ref={ref} onClick={() => onSelect(block.id)}>
        <boxGeometry args={[1.6, 0.9, 0.3]} />
        <meshStandardMaterial color={selected ? '#ff8c42' : '#4cc9f0'} metalness={0.3} roughness={0.4} />
      </mesh>
      <Html center>
        <div className="label">
          <strong>{block.title}</strong>
          <div className="muted">{block.type}</div>
        </div>
      </Html>
    </group>
  )
}
