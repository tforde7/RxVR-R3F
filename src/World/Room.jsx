import { Base, Geometry, Subtraction } from '@react-three/csg'
import { useLoader } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import * as THREE from 'three'

const Room = ({ length, width, height, position, doorPosition = [0, 0, 0] }) => {
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
      <group position={position}>
        {/* Floor */}
        <mesh material={floorMaterial} position={[0, 0.01, 0]} rotation-x={Math.PI / 2}>
          <planeGeometry args={[length, width]}></planeGeometry>
        </mesh>
        {/* Ceiling */}
        <mesh material={ceilingMaterial} rotation-x={Math.PI / 2} position={[0, height, 0]}>
          <planeGeometry args={[length, width]}></planeGeometry>
        </mesh>
        {/* Left Wall */}
        <RigidBody colliders={'cuboid'} type="fixed">
          <mesh material={wallMaterial} rotation-y={Math.PI / 2} position={[width / 2, height / 2, 0]}>
            <planeGeometry args={[length, height]}></planeGeometry>
          </mesh>
        </RigidBody>
        {/* Right Wall */}
        <RigidBody colliders={'cuboid'} type="fixed">
          <mesh material={wallMaterial} rotation-y={Math.PI / 2} position={[-(width / 2), height / 2, 0]}>
            <planeGeometry args={[length, height]}></planeGeometry>
          </mesh>
        </RigidBody>
        {/* Front wall */}
        <RigidBody colliders={'cuboid'} type="fixed">
          <mesh material={wallMaterial} position={[0, height / 2, width / 2]}>
            <Geometry>
              <Base>
                <planeGeometry args={[width, height]}></planeGeometry>
              </Base>
              <Subtraction position={[0, -0.7, 0]}>
                <planeGeometry args={[1, 2.2]}></planeGeometry>
              </Subtraction>
            </Geometry>
          </mesh>
        </RigidBody>
        {/* Back wall */}
        <RigidBody colliders={'cuboid'} type="fixed">
          <mesh material={wallMaterial} position={[0, height / 2, -(width / 2)]}>
            <planeGeometry args={[width, height]}></planeGeometry>
          </mesh>
        </RigidBody>
      </group>
    </>
  )
}

export default Room
