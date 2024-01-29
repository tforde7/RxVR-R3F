import { useLoader } from "@react-three/fiber"
import * as THREE from 'three'

export default function BrickWall ()
{
    const [brickColorTexture, brickNormalTexture] = useLoader(THREE.TextureLoader, [
        '/textures/bricks/color.jpg',
        '/textures/bricks/normal.jpg'
    ])
    brickColorTexture.repeat.set(3, 3)
    brickNormalTexture.repeat.set(3, 3)
    brickColorTexture.wrapS = THREE.RepeatWrapping
    brickNormalTexture.wrapS = THREE.RepeatWrapping
    brickColorTexture.wrapT = THREE.RepeatWrapping
    brickNormalTexture.wrapT = THREE.RepeatWrapping
    return <>
        <mesh position-x={-15} position-y={15} rotation-y={Math.PI * 0.5}>
            <boxGeometry args={[30, 30, 0.2]}></boxGeometry>
            <meshStandardMaterial
                map={brickColorTexture}
                normalMap={brickNormalTexture}>
                
            </meshStandardMaterial>
        </mesh>
    </>
}