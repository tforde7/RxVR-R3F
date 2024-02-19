import { Base, Geometry, Subtraction } from '@react-three/csg'
import { useLoader } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { useControls } from 'leva'
import * as THREE from 'three'
import MRI from './MainEntrance/Mri'
import Panda from './MainEntrance/Panda'
import Placeholder from './MainEntrance/placeholder'
import Rabbit from './MainEntrance/rabbit'
import RabbitCyan from './MainEntrance/RabbitCyan'
import RabbitPigtails from './MainEntrance/RabbitPigtails'
import Bed_w_acc from './MainEntrance/room_bedandaccess'
import Testrabbit from './MainEntrance/testRabbit'
import TourGuide from './MainEntrance/TourGuide'
import Ultrasound from './MainEntrance/ultrasound'
import Waiting_chair from './MainEntrance/waiting_chair'
import XRayBoard from './MainEntrance/XrayBoard'
import CouchReception1 from './MainEntrance/CouchReception1'
import CouchReception2 from './MainEntrance/CouchReception2'
import CouchReception3 from './MainEntrance/CouchReception3'
import CouchReception4 from './MainEntrance/CouchReception4'
// import CouchReception5 from './MainEntrance/CouchReception5'
import Plant1 from './MainEntrance/Plant1'
import Plant2 from './MainEntrance/Plant2'
import Plant3 from './MainEntrance/Plant3'
import CoffeeTable from './MainEntrance/Coffeetable'
import CoffeeTable2 from './MainEntrance/CoffeeTable2'
import Monitor from './MainEntrance/Monitor1'
import ChairCouchTable1 from './MainEntrance/ChairCouchTable1'
import ChairCouchTable2 from './MainEntrance/ChairCouchTable2'
import ReceptionDesk from './MainEntrance/ReceptionDesk'
import ReceptionSign from './MainEntrance/ReceptionSign'
import Doctor1 from './MainEntrance/Doctor1'
import Doctor2 from './MainEntrance/Doctor2'
import Doctor3 from './MainEntrance/Doctor3'

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
            <mesh rotation-x={Math.PI / 2} position={[0, -1.82, 0]} material={floorMaterial}>
              <planeGeometry args={[22, 20.5]} />
            </mesh>
          </group>
        </group>
      </RigidBody>
      {/* Models */}
      <group>
        <MRI></MRI>
        {/* <Panda></Panda>
        <Rabbit></Rabbit>
        <RabbitCyan></RabbitCyan>
        <Testrabbit></Testrabbit>
        <RabbitPigtails></RabbitPigtails>
        <TourGuide></TourGuide> */}
        <Bed_w_acc></Bed_w_acc>
        <Ultrasound></Ultrasound>
        {/* <Waiting_chair></Waiting_chair> */}
        <XRayBoard></XRayBoard>
        <CouchReception1/>
        <CouchReception2/>
        <CouchReception3/>
        <CouchReception4/>
        <Plant1/>
        <Plant2/>
        <Plant3/>
        <CoffeeTable/>
        <CoffeeTable2/>
        <Monitor/>
        <ChairCouchTable1/>
        <ChairCouchTable2/>
        <ReceptionDesk/>
        <ReceptionSign/>
        <Doctor1/>
        <Doctor2/>
        <Doctor3/>
      </group>
    </>
  )
}

export default Lobby
