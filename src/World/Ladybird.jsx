import { useLoader } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { useControls } from 'leva'
import * as THREE from 'three'

const Ladybird = () => {
  const { ladybirdPosition, rotation } = useControls('Ladybird', {
    ladybirdPosition: {
      value: {
        x: 64.06,
        y: -0.01,
        z: -28.67,
      },
      step: 0.01,
    },
    rotation: {
      value: 0.37,
      step: 0.01,
    },
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

  return (
    <>
      <group position={[ladybirdPosition.x, ladybirdPosition.y, ladybirdPosition.z]} rotation-y={rotation}>
        {/* Corridoor */}
        <group>
          {/* Floor */}
          <mesh material={floorMaterial} rotation-x={Math.PI / 2}>
            <planeGeometry args={[3.08, 12.23]}></planeGeometry>
          </mesh>
          {/* Ceiling */}
          <mesh material={ceilingMaterial} rotation-x={-Math.PI / 2} position={[0, 3.6, 0]}>
            <planeGeometry args={[3.08, 12.23]}></planeGeometry>
          </mesh>
          {/* Left Wall */}
          <RigidBody colliders={'cuboid'} type="fixed">
            <mesh material={wallMaterial} position={[-1.54, 1.8, 0]} rotation-y={Math.PI / 2}>
              <planeGeometry args={[12.23, 3.6]}></planeGeometry>
            </mesh>
          </RigidBody>

          {/* Right Wall */}
          <RigidBody colliders={'cuboid'} type="fixed">
            <mesh material={wallMaterial} position={[1.54, 1.8, 0]} rotation-y={Math.PI / 2}>
              <planeGeometry args={[12.23, 3.6]}></planeGeometry>
            </mesh>
          </RigidBody>
        </group>

        {/* Ward */}
      </group>
    </>
  )
}

export default Ladybird
