import { Base, Geometry, Subtraction } from '@react-three/csg'
import { useLoader } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { useControls } from 'leva'
import * as THREE from 'three'

const MainConcourse = () => {
  const { concoursePosition, rotation } = useControls('Concourse', {
    concoursePosition: {
      value: {
        x: 62.9,
        y: 5.4,
        z: -14.2,
      },
      step: 0.1,
    },
    rotation: {
      value: 0.28,
      step: 0.01,
    },
  })

  const { wardCavitySize, wardCavityPosition } = useControls('Ward Cavity', {
    wardCavitySize: {
      value: {
        height: 3,
        width: 6,
      },
      step: 0.1,
    },
    wardCavityPosition: {
      value: {
        x: -0.6,
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
  return (
    <>
      <RigidBody colliders="trimesh" type="fixed">
        <group position={[concoursePosition.x, concoursePosition.y, concoursePosition.z]} rotation-y={rotation}>
          <mesh position-y={3.6}>
            <boxGeometry args={[60, 3.6, 16]}></boxGeometry>
            <meshStandardMaterial></meshStandardMaterial>
          </mesh>
          <mesh>
            <boxGeometry args={[60, 3.6, 16]}></boxGeometry>
            <meshStandardMaterial></meshStandardMaterial>
          </mesh>
          <group position-y={-3.6}>
            {/* left */}
            <mesh position={[0, 0, -8]} material={wallMaterial}>
              <planeGeometry args={[60, 3.6]} />
            </mesh>
            {/* right */}
            <mesh position={[0, 0, 8]} material={wallMaterial}>
              <planeGeometry args={[60, 3.6]} />
            </mesh>
            {/* front */}
            {/* <mesh rotation-y={Math.PI / 2} position={[-30, 0, 0]} material={wallMaterial}>
              <Geometry showOperations useGroups>
                <Base>
                  <planeGeometry args={[16, 3.6]} />
                </Base>
                <Subtraction position={[lobbyCavityPosition.x, lobbyCavityPosition.y, lobbyCavityPosition.z]}>
                  <boxGeometry args={[lobbyCavitySize.width, lobbyCavitySize.height, 1]}></boxGeometry>
                  <meshStandardMaterial color={'red'} wireframe></meshStandardMaterial>
                </Subtraction>
              </Geometry>
            </mesh> */}
            {/* back */}
            <mesh rotation-y={Math.PI / 2} position={[30, 0, 0]} material={wallMaterial}>
              <planeGeometry args={[16, 3.6]} />
            </mesh>
            {/* ceiling */}
            <mesh rotation-x={Math.PI / 2} position={[0, 1.79, 0]} material={ceilingMaterial}>
              <planeGeometry args={[60, 16]} />
            </mesh>
            {/* floor */}
            <mesh rotation-x={Math.PI / 2} position={[0, -1.8, 0]} material={floorMaterial}>
              <planeGeometry args={[60, 16]} />
            </mesh>
          </group>
        </group>
      </RigidBody>
    </>
  )
}

export default MainConcourse
