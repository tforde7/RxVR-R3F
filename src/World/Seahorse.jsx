import { Base, Geometry, Subtraction } from '@react-three/csg'
import { useLoader } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { useControls } from 'leva'
import * as THREE from 'three'
import Bed_w_acc from './MainEntrance/room_bedandaccess'
import BedRow from './MainEntrance/BedRow'

const Seahorse = () => {
  const { seahorsePosition, rotation } = useControls('Seahorse', {
    seahorsePosition: {
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

  const { wardPosition } = useControls('Ward', {
    wardPosition: {
      value: {
        x: -10.24,
        y: 0,
        z: -26.6,
      },
      step: 0.01,
    },
  })

  const { corridorCavityPosition } = useControls('Corridor Cavity', {
    corridorCavityPosition: {
      value: {
        x: 10.24,
        y: 0,
        z: 0,
      },
      step: 0.01,
    },
  })

  const { bedRow1Position, bedRow1Rotation } = useControls('Bed Row 1', {
    bedRow1Position: {
      value: {
        x: 40.27,
        y: 0,
        z: -37.62,
      },
      step: 0.01,
    },
    bedRow1Rotation: {
      value: -2.77,
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
      <group position={[seahorsePosition.x, seahorsePosition.y, seahorsePosition.z]} rotation-y={rotation}>
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

        {/* Ward  41 x 35 */}
        <group position={[wardPosition.x, wardPosition.y, wardPosition.z]}>
          {/* Floor */}
          <mesh material={floorMaterial} position={[0, 0.01, 0]} rotation-x={Math.PI / 2}>
            <planeGeometry args={[35, 41]}></planeGeometry>
          </mesh>
          {/* Ceiling */}
          <mesh material={ceilingMaterial} rotation-x={Math.PI / 2} position={[0, 3.6, 0]}>
            <planeGeometry args={[35, 41]}></planeGeometry>
          </mesh>
          {/* Left Wall */}
          <RigidBody colliders={'cuboid'} type="fixed">
            <mesh material={wallMaterial} rotation-y={Math.PI / 2} position={[17.5, 1.8, 0]}>
              <planeGeometry args={[41, 3.6]}></planeGeometry>
            </mesh>
          </RigidBody>
          {/* Right Wall */}
          <RigidBody colliders={'cuboid'} type="fixed">
            <mesh material={wallMaterial} rotation-y={Math.PI / 2} position={[-17.5, 1.8, 0]}>
              <planeGeometry args={[41, 3.6]}></planeGeometry>
            </mesh>
          </RigidBody>
          {/* Front wall */}
          <RigidBody colliders={'cuboid'} type="fixed">
            <mesh material={wallMaterial} position={[0, 1.8, 20.5]}>
              <Geometry>
                <Base>
                  <planeGeometry args={[35, 3.6]}></planeGeometry>
                </Base>
                <Subtraction position={[corridorCavityPosition.x, corridorCavityPosition.y, corridorCavityPosition.z]}>
                  <planeGeometry args={[3.08, 3.6]}></planeGeometry>
                </Subtraction>
              </Geometry>
            </mesh>
          </RigidBody>
          {/* Back wall */}
          <RigidBody colliders={'cuboid'} type="fixed">
            <mesh material={wallMaterial} position={[0, 1.8, -20.5]}>
              <planeGeometry args={[35, 3.6]}></planeGeometry>
            </mesh>
          </RigidBody>
        </group>
      </group>
      <BedRow position={[bedRow1Position.x, bedRow1Position.y, bedRow1Position.z]} rotation-y={bedRow1Rotation}></BedRow>
    </>
  )
}

export default Seahorse
