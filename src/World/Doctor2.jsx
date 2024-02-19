import { useAnimations, useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import React from 'react'

export default function Doctor2() {
  const doctor = useGLTF('/models/doctor_-_sketchfab_weekly_-_13_mar23/scene.gltf')

  function findAnimations(obj) {
    if (obj.animations && obj.animations.length > 0) {
      return obj.animations
    } else {
      if (obj.children) {
        return obj.children.forEach(findAnimations)
      }
    }
  }

  // Call findAnimations on the root of the object tree
  const animationClips = findAnimations(doctor)

  const animations = useAnimations(animationClips, doctor.scene)
  if (animations.actions) {
    animations.actions['Take 001'].play()
  }

  // Define fixed values for scale, position, and rotation
  const scale = [0.5, 0.5, 0.5] // Example scale
  const position = [25, 1.5, -12] // Example position
  const rotation = [0, -1.28, 0] // Example rotation (in radians)

  return (
    <>
      <RigidBody colliders="hull" type="fixed">
        <primitive object={doctor.scene} scale={scale} position={position} rotation={rotation} />
      </RigidBody>
    </>
  )
}
