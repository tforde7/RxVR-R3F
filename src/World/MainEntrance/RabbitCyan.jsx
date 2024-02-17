import { useAnimations, useGLTF, useHelper } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { Interactive, useInteraction } from '@react-three/xr'
import { useEffect, useRef } from 'react'
import { BoxHelper } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function RabbitCyan() {
  const rabbitcyan = useGLTF('/models/AnimalGuides/Rabbit Cyan.glb')
  //   rabbitcyan.scene.traverse((child) => {
  //     if (child.isMesh) {
  //       child.castShadow = true
  //       child.receiveShadow = true
  //     }
  //   })

  //   const sounds = [
  //     new Audio('/sounds')
  //   ]

  const animations = useAnimations(rabbitcyan.animations, rabbitcyan.scene)
  console.log(animations)

  const rabbitRef = useRef()

  useInteraction(rabbitRef, 'onSelect', (event) => {
    console.log('Rabbit Selected')
    // trigger animation change, audio, etc.
  })

  useEffect(() => {
    const ACTION_PREFIX = 'CharacterArmature|CharacterArmature|CharacterArmature|'
    const idle = animations.actions[ACTION_PREFIX + 'Idle']
    idle.play()
  }, [])

  return (
    <>
      <primitive ref={rabbitRef} object={rabbitcyan.scene} scale={0.5} position-y={0} rotation-y={Math.PI}></primitive>
    </>
  )
}
