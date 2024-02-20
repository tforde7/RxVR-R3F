import { useAnimations, useGLTF, useHelper } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { Interactive, useInteraction, useTeleportation } from '@react-three/xr'
import { useEffect, useRef, useState } from 'react'
import { BoxHelper } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import FloatingButton from './FloatingButton'
import * as THREE from 'three'
import teleportObject from '../util/teleportObject'

export default function RabbitCyan() {
  const MRI_POSITION = [150, 0, -80]
  const rabbitMriPosition = [MRI_POSITION[0], MRI_POSITION[1], MRI_POSITION[2] - 4]

  const XRAY_POSITION = [200, 0, -50]
  const rabbitXrayPosition = [XRAY_POSITION[0], XRAY_POSITION[1], XRAY_POSITION[2] - 4]

  const SEAHORSE_POSITION = [64, 0, -36]
  const rabbitSeahorsePosition = [SEAHORSE_POSITION[0], SEAHORSE_POSITION[1], SEAHORSE_POSITION[2] - 4]

  const rabbitcyan = useGLTF('/models/AnimalGuides/Rabbit Cyan.glb')

  const animations = useAnimations(rabbitcyan.animations, rabbitcyan.scene)
  console.log(animations)
  const ACTION_PREFIX = 'CharacterArmature|CharacterArmature|CharacterArmature|'
  const idleAnimation = animations.actions[ACTION_PREFIX + 'Idle']
  const talkingAnimation = animations.actions[ACTION_PREFIX + 'Sitting_Idle']
  const waveAnimation = animations.actions[ACTION_PREFIX + 'Wave']
  waveAnimation.loop = THREE.LoopOnce

  const rabbitWelcome = new Audio('/sounds/hoppy-welcome.mp3')
  const seahorseOutpatientDialogue = new Audio('/sounds/hoppy-seahorse-outpatient.mp3')
  const whereToNextDialogue = new Audio('/sounds/hoppy-where-to-next.mp3')
  // const mriDialogue = new Audio('/sounds/hoppy-mri.mp3')
  const xrayDialogue = new Audio('/sounds/hoppy-xray.mp3')

  const rabbitRef = useRef()
  const mriButtonref = useRef()
  const xrayButtonref = useRef()
  const seahorseButtonref = useRef()
  const buttonGroupRef = useRef()

  const teleport = useTeleportation()

  useInteraction(seahorseButtonref, 'onSelect', (event) => {
    if (event.target.inputSource.handedness === 'right') {
      return
    }
    buttonGroupRef.current.visible = false
    teleport(SEAHORSE_POSITION)
    teleportObject(rabbitRef.current, rabbitSeahorsePosition)
  })

  useInteraction(mriButtonref, 'onSelect', (event) => {
    if (event.target.inputSource.handedness === 'right') {
      return
    }
    buttonGroupRef.current.visible = false
    teleport(MRI_POSITION)
    teleportObject(rabbitRef.current, rabbitMriPosition)
  })

  useInteraction(xrayButtonref, 'onSelect', (event) => {
    if (event.target.inputSource.handedness === 'right') {
      return
    }
    buttonGroupRef.current.visible = false
    teleport(XRAY_POSITION)
    const rabbitXrayPosition = [XRAY_POSITION[0], XRAY_POSITION[1], XRAY_POSITION[2] - 4]
    teleportObject(rabbitRef.current, rabbitXrayPosition)
  })

  useInteraction(rabbitRef, 'onSelect', (event) => {
    if (event.target.inputSource.handedness === 'right') {
      return
    }

    if (rabbitRef.current.position.z === rabbitSeahorsePosition[2]) {
      // play seahorse clip
      seahorseOutpatientDialogue.play()
      seahorseOutpatientDialogue.onended = () => {
        whereToNextDialogue.play()
        whereToNextDialogue.onended = () => {
          //show buttons
        }
      }
    } else if (rabbitRef.current.position.z === rabbitMriPosition[2]) {
      // play mri clip
    } else if (rabbitRef.current.position.z === rabbitXrayPosition[2]) {
      // play xray clip
      xrayDialogue.play()
      xrayDialogue.onended = () => {
        whereToNextDialogue.play()
        whereToNextDialogue.onended = () => {
          //show buttons
        }
      }
    } else {
      // play welcome clip
      rabbitWelcome.play().then(() => {
        idleAnimation.stop()
        waveAnimation.play()
        waveAnimation.getMixer().addEventListener('finished', () => {
          talkingAnimation.play()
        })

        rabbitWelcome.onended = () => {
          talkingAnimation.stop()
          // animate buttons here
          buttonGroupRef.current.visible = true
          idleAnimation.play()
        }
      })
    }
  })

  useEffect(() => {
    idleAnimation.play()
  }, [])

  return (
    <>
      <primitive ref={rabbitRef} object={rabbitcyan.scene} scale={0.5} position={[0, 0, -3]}></primitive>
      <group ref={buttonGroupRef} rotation-y={Math.PI} position={[0, 2.5, -3]} visible={false}>
        <FloatingButton ref={seahorseButtonref} height={0.5} width={1.1} position={[2, 0, 0]} text="Seahorse Ward"></FloatingButton>
        <FloatingButton ref={mriButtonref} height={0.5} width={1.1} position={[0, 0, 0]} text="MRI Room"></FloatingButton>
        <FloatingButton ref={xrayButtonref} height={0.5} width={1.1} position={[-2, 0, 0]} text="X-Ray Room"></FloatingButton>
      </group>
    </>
  )
}
