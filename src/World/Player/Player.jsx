import * as THREE from "three"
import * as RAPIER from "@dimforge/rapier3d-compat"
import { useEffect, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier"

// const SPEED = 5
// const direction = new THREE.Vector3()
// const frontVector = new THREE.Vector3()
// const sideVector = new THREE.Vector3()

export default function Player() {

  const STARTING_POSITION = [-420, 2.5, 3]
  const player = useRef()
  const { rapier, world } = useRapier()
  const [subscribeKeys, getKeys] = useKeyboardControls()

  const jump = () =>
  {
    const origin = player.current.translation()
    origin.y -= 0.31
    const direction = {x:0, y:-1, z:0}
    const ray = new rapier.Ray(origin, direction)
    const hit = world.castRay(ray, 10, true)
    if (hit.toi < 0.015) 
      player.current.applyImpulse({x:0, y:0.5, z:0})
  }

  useEffect(() => 
  {

    const unsubscribeJump = subscribeKeys(
      (state) => state.jump,
      (value) => 
      {
        if (value) 
          jump()

      }
    )
    return () => { unsubscribeJump() }

  }, [])
  useFrame((state, delta) => {
    const { forward, backward, left, right } = getKeys()
    const impulse = { x: 0, y: 0, z: 0 }

    const impulseStrength = 3 * delta

    if (forward) impulse.z -= impulseStrength
    if (backward) impulse.z += impulseStrength
    if (left) impulse.x -= impulseStrength
    if (right) impulse.x += impulseStrength

    if (player.current) {
      player.current.applyImpulse(impulse)

      const playerPosition = player.current.translation()
      const cameraPosition = new THREE.Vector3()
      cameraPosition.copy(playerPosition)
      cameraPosition.y += 3
     
      state.camera.position.copy(cameraPosition)
  
      const cameraTarget = new THREE.Vector3()
      cameraTarget.copy(playerPosition)
      cameraTarget.y += 3
  
      state.camera.lookAt(cameraTarget)

    }


    // console.log(player.current.translation())

  })
  return (
    <>
    <RigidBody 
      ref={player} 
      colliders='ball'
      restitution={ 0.2 }
      friction={1}
      position={STARTING_POSITION}
      canSleep={false}
      linearDamping={1}
      angularDamping={1}
      // enabledRotations={[false, false, false]}
       >
        {/* <CapsuleCollider args={[0.5, 3]} /> */}

      <mesh >
        <icosahedronGeometry args={[0.3, 1]}  />
        <meshStandardMaterial />
      </mesh>

    </RigidBody>
      {/* <RigidBody ref={ref} colliders={false} mass={1} type="dynamic" position={[0, 10, 0]} enabledRotations={[false, false, false]}>
        <CapsuleCollider args={[0.75, 0.5]} />
      </RigidBody> */}
    </>
  )
}
