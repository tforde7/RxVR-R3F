import * as THREE from "three"
import * as RAPIER from "@dimforge/rapier3d-compat"
import { useEffect, useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier"
import { useController, useXR } from "@react-three/xr"

export default function Player() {

  const STARTING_POSITION = [-420, 2.5, 3]

  // scale 1
  const STARTING_POSITION_2 = [0, 1.8, 0]
  const playerMesh = useRef()
  const { rapier, world } = useRapier()
  const [subscribeKeys, getKeys] = useKeyboardControls()

  const { player, isPresenting } = useXR() 
  const { gl } = useThree()

  const leftController = useController('left')
  const rightController = useController('right')


  const jump = () =>
  {
    const origin = playerMesh.current.translation()
    origin.y -= 0.31
    const direction = {x:0, y:-1, z:0}
    const ray = new rapier.Ray(origin, direction)
    const hit = world.castRay(ray, 10, true)
    if (hit.toi < 0.015) 
      playerMesh.current.applyImpulse({x:0, y:0.5, z:0})
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


  useFrame((state, delta, XRFrame) => {
    const { forward, backward, leftward, rightward } = getKeys()

    

    const camera = isPresenting ? player : state.camera

    const impulse = { x: 0, y: 0, z: 0 }

    const impulseStrength = 3 * delta

    if (forward) impulse.z -= impulseStrength
    if (backward) impulse.z += impulseStrength
    if (leftward) impulse.x -= impulseStrength
    if (rightward) impulse.x += impulseStrength

    // console.log(playerMesh.current.translation())

    if (XRFrame) {
      const leftGamepad = leftController?.inputSource.gamepad
      if (leftGamepad) {
        console.log(leftGamepad.axes)
      }
      const rightGamepad = rightController?.inputSource.gamepad
      if (rightGamepad) {
        // axes is an array of 4 values
        // index 0, 1 appear to do nothing
        // index 2 is -1 to 1 left to right
        // index 3 is -1 to 1 up to down
        console.log(rightGamepad.axes)
        if (rightGamepad.axes[2] > 0.5) impulse.x += impulseStrength
        if (rightGamepad.axes[2] < -0.5) impulse.x -= impulseStrength
        if (rightGamepad.axes[3] > 0.5) impulse.z += impulseStrength
        if (rightGamepad.axes[3] < -0.5) impulse.z -= impulseStrength
      }
    }

    if (playerMesh.current) {
      playerMesh.current.applyImpulse(impulse)

      const playerPosition = playerMesh.current.translation()
      const cameraPosition = new THREE.Vector3()
      cameraPosition.copy(playerPosition)
      cameraPosition.y += 3
     
      camera.position.copy(cameraPosition)
  
      const cameraTarget = new THREE.Vector3()
      cameraTarget.copy(playerPosition)
      cameraTarget.y += 3
  
      camera.lookAt(cameraTarget)
      // console.log(camera.position)
      // console.log(isPresenting)

    }




    // console.log(player.current.translation())

  })
  return (
    <>
    <RigidBody 
      ref={playerMesh} 
      colliders='ball'
      restitution={ 0.2 }
      friction={1}
      position={STARTING_POSITION_2}
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
