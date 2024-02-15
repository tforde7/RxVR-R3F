import { useLoader } from '@react-three/fiber'
import { useControls } from 'leva'
import * as THREE from 'three'

const LectureTheatre = () => {
  const [colorTexture, normalTexture] = useLoader(THREE.TextureLoader, ['/textures/bricks/color.jpg', '/textures/bricks/normal.jpg'])

  colorTexture.repeat.set(3, 3)
  colorTexture.wrapS = THREE.RepeatWrapping
  colorTexture.wrapT = THREE.RepeatWrapping

  normalTexture.repeat.set(3, 3)
  normalTexture.wrapS = THREE.RepeatWrapping
  normalTexture.wrapT = THREE.RepeatWrapping

  const { position, rotation } = useControls('Lecture Theatre', {
    position: {
      value: { x: 12.4, y: 5.3, z: -19.1 },
      step: 0.1,
    },
    rotation: { value: 0.28, step: 0.01 },
  })

  return (
    <mesh position={[position.x, position.y, position.z]} rotation-y={rotation}>
      <boxGeometry args={[26.27, 10.6, 12]}></boxGeometry>
      <meshStandardMaterial map={colorTexture} normalMap={normalTexture}></meshStandardMaterial>
    </mesh>
  )
}

export default LectureTheatre
