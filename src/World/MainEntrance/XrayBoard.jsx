import { useGLTF, useHelper } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { useRef } from 'react'
import { BoxHelper } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function XRayBoard() {
  const xray_board = useGLTF('/models/x-ray_board/scene.gltf')

  return (
    <>
      <RigidBody colliders="hull" type="fixed">
        <primitive object={xray_board.scene}> </primitive>
      </RigidBody>
    </>
  )
}
