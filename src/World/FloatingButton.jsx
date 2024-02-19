import { Float, Text } from '@react-three/drei'
import React from 'react'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

const FloatingButton = React.forwardRef(({ height, width, position, text }, ref) => {
  const buttonTexture = useLoader(THREE.TextureLoader, '/textures/matcaps/cyan-matcap.png')

  return (
    <Float>
      <mesh position={position} ref={ref}>
        <boxGeometry args={[width, height, 0.1]}></boxGeometry>
        <meshMatcapMaterial matcap={buttonTexture}></meshMatcapMaterial>
        <group position={[0, 0, -0.06]} rotation-y={Math.PI}>
          <Text fontSize={0.15} color={'black'}>
            {text}
          </Text>
        </group>
      </mesh>
    </Float>
  )
})

export default FloatingButton
