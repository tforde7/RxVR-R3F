import { Text3D } from '@react-three/drei'
import { useControls } from 'leva'

// react component
export default function Sign2() {
  const textSize = 1.5

  const { position, rotation } = useControls('Sign', {
    position: {
      value: {
        x: 0,
        y: 5,
        z: 0,
      },
      step: 0.1,
    },
    rotation: {
      value: 0,
      step: 0.01,
    },
  })

  return (
    <>
      <group position={[position.x, position.y, position.z]} rotation-y={rotation} scale={0.33}>
        <Text3D font="./fonts/helvetiker_regular.typeface.json" position={[0, 0, 0]} size={textSize}>
          <meshStandardMaterial color={'silver'} metalness={0.85}></meshStandardMaterial>
          CORK
        </Text3D>

        <Text3D font="./fonts/helvetiker_regular.typeface.json" position={[0, -2.5, 0]} size={textSize}>
          <meshStandardMaterial color={'silver'} metalness={0.85}></meshStandardMaterial>
          UNIVERSITY
        </Text3D>

        <Text3D font="./fonts/helvetiker_regular.typeface.json" position={[0, -5, 0]} size={textSize}>
          <meshStandardMaterial color={'silver'} metalness={0.85}></meshStandardMaterial>
          HOSPITAL
        </Text3D>
      </group>
    </>
  )
}
