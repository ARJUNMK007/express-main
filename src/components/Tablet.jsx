/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Tablet.gltf --transform
Author: Somersby (https://sketchfab.com/Somersby)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/graphic-tablet-3d9bcb1a899e41dd8eacc77671ae61e3
Title: Graphic Tablet
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Tablet-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 135.94, -12.14]} rotation={[2.69, 0, Math.PI]} scale={[-117.41, 69.21, 1.65]}>
        <mesh geometry={nodes.Tablet_Metallic_0_3.geometry} material={materials.Metallic} />
        <mesh geometry={nodes.Tablet_Metallic_0_4.geometry} material={materials.Metallic} />
        <mesh geometry={nodes.Tablet_Metallic_0.geometry} material={materials.Metallic} />
        <mesh geometry={nodes.Tablet_Metallic_0_1.geometry} material={materials.Metallic} />
        <mesh geometry={nodes.Tablet_Metallic_0_2.geometry} material={materials.Metallic} />
        <mesh geometry={nodes.Tablet_Plastic_0.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Tablet_Plastic_0_1.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Tablet_Plastic_0_2.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Tablet_Plastic_0_3.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Tablet_Plastic_0_4.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Tablet_Plastic_0_5.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Tablet_Plastic_0_6.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Tablet_Plastic_0_7.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Tablet_Screen_0.geometry} material={materials.Screen} />
        <mesh geometry={nodes.Tablet_Screen_0_1.geometry} material={materials.Screen} />
        <mesh geometry={nodes.Tablet_Kevlar_001_0.geometry} material={materials.Kevlar_001} />
        <mesh geometry={nodes.Tablet_Glass_0.geometry} material={materials.Glass} />
        <mesh geometry={nodes.Tablet_MetallicWhite_0.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Tablet_MetallicWhite_0_1.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Tablet_MetallicWhite_0_2.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Tablet_MetallicWhite_0_3.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Tablet_MetallicWhite_0_4.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Tablet_MetallicWhite_0_5.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Tablet_MetallicWhite_0_6.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Tablet_MetallicWhite_0_7.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Tablet_MetallicWhite_0_8.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Tablet_MetallicWhite_0_9.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Tablet_MetallicWhite_0_10.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Tablet_MetallicWhite_0_11.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Tablet_MetallicWhite_0_12.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Tablet_MetallicWhite_0_13.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Tablet_MetallicWhite_0_14.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Tablet_MetallicWhite_0_15.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Tablet_MetallicWhite_0_16.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Tablet_MetallicWhite_0_17.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Tablet_PlasticS_0.geometry} material={materials.PlasticS} />
      </group>
      <group position={[158.42, 120.43, 47.54]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Holder2_Kevlar_001_0.geometry} material={materials.Kevlar_001} />
        <mesh geometry={nodes.Holder2_PlasticS_0.geometry} material={materials.PlasticS} />
        <mesh geometry={nodes.Holder2_Metallic_0.geometry} material={materials.Metallic} />
        <mesh geometry={nodes.Holder2_SoftBlack_0.geometry} material={materials.SoftBlack} />
      </group>
      <mesh geometry={nodes.Holder_PlasticS_0.geometry} material={materials.PlasticS} position={[0, 170.67, -36.78]} rotation={[-0.41, 0, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('/Tablet-transformed.glb')
