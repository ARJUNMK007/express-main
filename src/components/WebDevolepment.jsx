import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Computer from './Computer'

function WebDevolepment() {
  return (
    <Canvas>
        <Stage environment="warehouse" intensity={0.5}>
          <pointLight/>
        <Computer/>
        </Stage>
        <OrbitControls enableZoom={false}  autoRotate/>
    </Canvas>
  )
}

export default WebDevolepment