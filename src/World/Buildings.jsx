/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/models/buildings/buildings.gltf --transform 
Files: ./public/models/buildings/buildings.gltf [12.33KB] > /Users/cex/Desktop/projects/RxVR-R3F/buildings-transformed.glb [4.62KB] (63%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useControls } from 'leva'

export function Buildings(props) {
  const { nodes, materials } = useGLTF('/models/buildings/buildings-transformed.glb')

  const { buildingsPosition, buildingsVisibile } = useControls({
    buildingsPosition: {
      value: {
        x: 150,
        y: 0,
        z: 10,
      },
      step: 0.1,
    },
    buildingsVisibile: false,
  })

  return (
    // <RigidBody colliders="trimesh" type="fixed">
    <group {...props} dispose={null} position-x={buildingsPosition.x} position-z={buildingsPosition.z} visible={buildingsVisibile}>
      <group>
        <mesh geometry={nodes.Cork_University_Hospital_1.geometry} material={materials.wall} />
        <mesh geometry={nodes.Cork_University_Hospital_2.geometry} material={materials.roof} />
      </group>
      {/* <group scale={[3,2.5,3]} position-y={4.8}>
          <mesh geometry={nodes.Cork_University_Hospital_1.geometry} material={materials.wall} />
          <mesh geometry={nodes.Cork_University_Hospital_2.geometry} material={materials.roof} />
        </group> */}
    </group>
    // </RigidBody>
  )
}

useGLTF.preload('/models/buildings/buildings-transformed.glb')
