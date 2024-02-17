import { Float, Text } from '@react-three/drei'

const FloatingButton = ({ height, width, position, text }) => {
  return (
    <Float>
      <mesh position={position}>
        <boxGeometry args={[width, height, 0.1]}></boxGeometry>
        <meshStandardMaterial></meshStandardMaterial>
        <group position={[0, 0, -0.06]} rotation-y={Math.PI}>
          <Text fontSize={0.15} color={'black'}>
            {text}
          </Text>
        </group>
      </mesh>
    </Float>
  )
}

export default FloatingButton
