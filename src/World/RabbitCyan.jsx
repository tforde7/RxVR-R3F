import { useAnimations, useGLTF, useHelper } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { Interactive, useInteraction, useTeleportation } from '@react-three/xr'
import { useEffect, useRef } from 'react'
import { BoxHelper } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import FloatingButton from './FloatingButton'
import * as THREE from 'three'

export default function RabbitCyan() {
  const MRI_POSITION = [150, 0, -80]
  const XRAY_POSITION = [200, 0, -50]
  const SEAHORSE_POSITION = [64, 0, -36]

  const rabbitcyan = useGLTF('/models/AnimalGuides/Rabbit Cyan.glb')

  const animations = useAnimations(rabbitcyan.animations, rabbitcyan.scene)
  console.log(animations)
  const ACTION_PREFIX = 'CharacterArmature|CharacterArmature|CharacterArmature|'
  const idleAnimation = animations.actions[ACTION_PREFIX + 'Idle']
  const talkingAnimation = animations.actions[ACTION_PREFIX + 'Sitting_Idle']
  const waveAnimation = animations.actions[ACTION_PREFIX + 'Wave']
  waveAnimation.loop = THREE.LoopOnce

  const rabbitWelcome = new Audio('/sounds/hoppy-welcome.mp3')

  const rabbitRef = useRef()
  const mriButtonref = useRef()
  const xrayButtonref = useRef()
  const seahorseButtonref = useRef()

  const teleport = useTeleportation()

  useInteraction(seahorseButtonref, 'onSelect', (event) => {
    teleport(SEAHORSE_POSITION)
  })

  useInteraction(mriButtonref, 'onSelect', (event) => {
    teleport(MRI_POSITION)
  })

  useInteraction(xrayButtonref, 'onSelect', (event) => {
    teleport(XRAY_POSITION)
  })

  useInteraction(rabbitRef, 'onSelect', (event) => {
    rabbitWelcome.play().then(() => {
      idleAnimation.stop()
      waveAnimation.play()
      waveAnimation.getMixer().addEventListener('finished', () => {
        talkingAnimation.play()
      })

      rabbitWelcome.onended = () => {
        talkingAnimation.stop()
        // animate buttons here
        idleAnimation.play()
      }
    })
  })

  useEffect(() => {
    idleAnimation.play()
  }, [])

  return (
    <>
      <primitive ref={rabbitRef} object={rabbitcyan.scene} scale={0.5} position={[0, 0, -3]}></primitive>
      <group rotation-y={Math.PI} position={[0, 2.5, -3]}>
        <FloatingButton ref={seahorseButtonref} height={0.5} width={1.1} position={[2, 0, 0]} text="Seahorse Ward"></FloatingButton>
        <FloatingButton ref={mriButtonref} height={0.5} width={1.1} position={[0, 0, 0]} text="MRI Room"></FloatingButton>
        <FloatingButton ref={xrayButtonref} height={0.5} width={1.1} position={[-2, 0, 0]} text="X-Ray Room"></FloatingButton>
      </group>
    </>
  )
}
