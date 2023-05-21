import React, { useRef } from 'react'
import { PerspectiveCamera, RenderTexture, Text} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


const Cube = () => {
    
    const TextRef= useRef()
    useFrame(state=>(TextRef.current.position.x= Math.sin(state.clock.elapsedTime)*2))
  return (
    <mesh>
    <boxGeometry />
    <meshStandardMaterial color="pink" >
      <RenderTexture attach="map">
        <PerspectiveCamera makeDefault position={[0,0,3]}/>
        <color attach="background" args={["white"]}/>
        <Text ref={TextRef} fontSize={1} color="blue">
          HI IAM ARJUN
        </Text>
      </RenderTexture>
    </meshStandardMaterial>
     
</mesh>
  )
}

export default Cube
