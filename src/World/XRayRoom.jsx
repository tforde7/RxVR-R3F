import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { Base, Geometry, Subtraction } from '@react-three/csg'
import Room from './Room'
import XRayBoard from './MainEntrance/XrayBoard'
const XRayRoom = ({ length, width, height, position }) => {
  return (
    <>
      <Room length={20} width={20} height={3.6} position={[200, 0, -50]}></Room>
      <group position={[200, 0, -50]}>
        <XRayBoard></XRayBoard>
      </group>
    </>
  )
}

export default XRayRoom
