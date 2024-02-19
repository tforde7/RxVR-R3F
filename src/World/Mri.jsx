import { useGLTF, useHelper } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { useRef } from 'react'
import { BoxHelper } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function MRI() {
  const mri = useGLTF('/models/MRI/scene.gltf')

  return (
    <>
      <RigidBody colliders="hull" type="fixed">
        <primitive object={mri.scene}></primitive>
      </RigidBody>
    </>
  )
}
