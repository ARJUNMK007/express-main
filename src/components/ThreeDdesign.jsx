import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Robot from './Robot'

function ThreeDdesign() {
  return (
   <Canvas>
    <Stage environment="forest" intensity={0.5}>
      <Robot/>
    </Stage>
    <OrbitControls enableZoom={false} autoRotate/>
   </Canvas>
  )
}

export default ThreeDdesign
