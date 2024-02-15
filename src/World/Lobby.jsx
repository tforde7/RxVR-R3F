import { Base, Geometry, Subtraction } from '@react-three/csg'
import { RigidBody } from '@react-three/rapier'
import { useControls } from 'leva'
import * as THREE from 'three'

const Lobby = () => {
  const { lobbyPosition, rotation } = useControls('Lobby', {
    lobbyPosition: {
      value: {
        x: 22.9,
        y: 5.4,
        z: -5.1,
      },
      step: 0.1,
    },
    rotation: {
      value: 0.28,
      step: 0.01,
    },
  })

  const { size, doorPosition } = useControls('Front Door Cavity', {
    size: {
      value: {
        height: 3,
        width: 5,
      },
      step: 0.1,
    },
    doorPosition: {
      value: {
        x: -11,
        y: -0.3,
        z: 0,
      },
      step: 0.1,
    },
  })

  return (
    <RigidBody colliders="trimesh" type="fixed">
      <group position={[lobbyPosition.x, lobbyPosition.y, lobbyPosition.z]} rotation-y={rotation}>
        <mesh position-y={3.6}>
          <boxGeometry args={[22, 3.6, 20.5]}></boxGeometry>
          <meshStandardMaterial></meshStandardMaterial>
        </mesh>
        <mesh>
          <boxGeometry args={[22, 3.6, 20.5]}></boxGeometry>
          <meshStandardMaterial></meshStandardMaterial>
        </mesh>
        <mesh position-y={-3.6}>
          <Geometry>
            <Base>
              <boxGeometry args={[22, 3.6, 20.5]}></boxGeometry>
            </Base>
            <Subtraction position={[doorPosition.x, doorPosition.y, doorPosition.z]}>
              <boxGeometry args={[1, size.height, size.width]}></boxGeometry>
              {/* <meshStandardMaterial wireframe color={'red'}></meshStandardMaterial> */}
            </Subtraction>
          </Geometry>
          <meshStandardMaterial side={THREE.DoubleSide}></meshStandardMaterial>
        </mesh>
      </group>
    </RigidBody>
  )
}

export default Lobby
