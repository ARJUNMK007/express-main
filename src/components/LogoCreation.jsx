import { OrbitControls, Stage, Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Tablet from './Tablet'

function LogoCreation() {
  return (
   <Canvas>
    <Stage environment="city" intensity={0.5}>
       <Text>
        hello
       </Text>
      <Tablet/>
    </Stage>
    <OrbitControls enableZoom={false} />
   </Canvas>
  )
}

export default LogoCreation