import { Base, Geometry, Subtraction } from '@react-three/csg'
import { useLoader } from '@react-three/fiber'
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
        width: 6,
      },
      step: 0.1,
    },
    doorPosition: {
      value: {
        x: -0.6,
        y: -0.3,
        z: 0,
      },
      step: 0.1,
    },
  })

  const { lobbyCavitySize, lobbyCavityPosition } = useControls('Lobby Cavity', {
    lobbyCavitySize: {
      value: {
        height: 3,
        width: 15.7,
      },
      step: 0.1,
    },
    lobbyCavityPosition: {
      value: {
        x: -2.4,
        y: -0.3,
        z: 0,
      },
      step: 0.1,
    },
  })

  const [wallColorTexture, wallAoTexture, wallDisplacementTexture, wallNormalTexture, wallRoughnessTexture] = useLoader(THREE.TextureLoader, [
    '/textures/indoor/wall/color.jpg',
    '/textures/indoor/wall/ao.jpg',
    '/textures/indoor/wall/displacement.png',
    '/textures/indoor/wall/normal.jpg',
    '/textures/indoor/wall/roughness.jpg',
  ])
  const wallMaterial = new THREE.MeshStandardMaterial({
    map: wallColorTexture,
    aoMap: wallAoTexture,
    normalMap: wallNormalTexture,
    roughnessMap: wallRoughnessTexture,
    side: THREE.DoubleSide,
  })

  const [floorColorTexture, floorAoTexture, floorDisplacementTexture, floorNormalTexture, floorRoughnessTexture] = useLoader(THREE.TextureLoader, [
    '/textures/indoor/floor/color.jpg',
    '/textures/indoor/floor/ao.jpg',
    '/textures/indoor/floor/height.png',
    '/textures/indoor/floor/normal.jpg',
    '/textures/indoor/floor/roughness.jpg',
  ])
  const floorMaterial = new THREE.MeshStandardMaterial({
    map: floorColorTexture,
    aoMap: floorAoTexture,
    normalMap: floorNormalTexture,
    roughnessMap: floorRoughnessTexture,
    side: THREE.DoubleSide,
  })

  const [ceilingColorTexture, ceilingAoTexture, ceilingDisplacementTexture, ceilingNormalTexture, ceilingRoughnessTexture] = useLoader(THREE.TextureLoader, [
    '/textures/indoor/ceiling/color.jpg',
    '/textures/indoor/ceiling/ao.jpg',
    '/textures/indoor/ceiling/height.png',
    '/textures/indoor/ceiling/normal.jpg',
    '/textures/indoor/ceiling/roughness.jpg',
  ])
  const ceilingMaterial = new THREE.MeshStandardMaterial({
    map: ceilingColorTexture,
    aoMap: ceilingAoTexture,
    normalMap: ceilingNormalTexture,
    roughnessMap: ceilingRoughnessTexture,
    side: THREE.DoubleSide,
  })

  const roomMaterials = [wallMaterial, wallMaterial, floorMaterial, ceilingMaterial, wallMaterial, wallMaterial]

  return (
    <>
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
          <group position-y={-3.6}>
            {/* left */}
            <mesh position={[0, 0, -10.25]} material={wallMaterial}>
              <planeGeometry args={[22, 3.6]} />
            </mesh>
            {/* right */}
            <mesh position={[0, 0, 10.25]} material={wallMaterial}>
              <planeGeometry args={[22, 3.6]} />
            </mesh>
            {/* front */}
            <mesh rotation-y={Math.PI / 2} position={[-11, 0, 0]} material={wallMaterial}>
              <Geometry>
                <Base>
                  <planeGeometry args={[20.5, 3.6]} />
                </Base>
                <Subtraction position={[doorPosition.x, doorPosition.y, doorPosition.z]}>
                  <boxGeometry args={[size.width, size.height, 1]}></boxGeometry>
                </Subtraction>
              </Geometry>
            </mesh>
            {/* back */}
            <mesh rotation-y={Math.PI / 2} position={[11, 0, 0]} material={wallMaterial}>
              <Geometry>
                <Base>
                  <planeGeometry args={[20.5, 3.6]} />
                </Base>
                <Subtraction position={[lobbyCavityPosition.x, lobbyCavityPosition.y, lobbyCavityPosition.z]}>
                  <boxGeometry args={[lobbyCavitySize.width, lobbyCavitySize.height, 1]}></boxGeometry>
                </Subtraction>
              </Geometry>
            </mesh>
            {/* ceiling */}
            <mesh rotation-x={Math.PI / 2} position={[0, 1.79, 0]} material={ceilingMaterial}>
              <planeGeometry args={[22, 20.5]} />
            </mesh>
            {/* floor */}
            <mesh rotation-x={Math.PI / 2} position={[0, -1.81, 0]} material={floorMaterial}>
              <planeGeometry args={[22, 20.5]} />
            </mesh>
          </group>
        </group>
      </RigidBody>
    </>
  )
}

export default Lobby
