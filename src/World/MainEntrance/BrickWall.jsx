import { useLoader } from "@react-three/fiber"
import { RigidBody } from "@react-three/rapier"
import * as THREE from 'three'

export default function BrickWall ()
{
    const [        
        diffuseMapTexture,
        aoMapTexture,
        armMapTexture,
        displacementMapTexture,
        normalMapDXTexture,
        roughnessMapTexture] = useLoader(THREE.TextureLoader, [
        '/textures/Red_Brick_Wall/red_brick_03_diff_4k.jpg',
        '/textures/Red_Brick_Wall/red_brick_03_ao_4k.jpg',
        '/textures/Red_Brick_Wall/red_brick_03_arm_4k.jpg',
        '/textures/Red_Brick_Wall/red_brick_03_disp_4k.jpg',
        '/textures/Red_Brick_Wall/red_brick_03_nor_dx_4k.jpg',
        '/textures/Red_Brick_Wall/red_brick_03_rough_4k.jpg',
    ])
    aoMapTexture.repeat.set(3, 3)
    aoMapTexture.wrapS = THREE.RepeatWrapping
    aoMapTexture.wrapT = THREE.RepeatWrapping

    armMapTexture.repeat.set(3, 3)
    armMapTexture.wrapS = THREE.RepeatWrapping
    armMapTexture.wrapT = THREE.RepeatWrapping

    diffuseMapTexture.repeat.set(3, 3)
    diffuseMapTexture.wrapS = THREE.RepeatWrapping
    diffuseMapTexture.wrapT = THREE.RepeatWrapping

    displacementMapTexture.repeat.set(3, 3)
    displacementMapTexture.wrapS = THREE.RepeatWrapping
    displacementMapTexture.wrapT = THREE.RepeatWrapping

    normalMapDXTexture.repeat.set(3, 3)
    normalMapDXTexture.wrapS = THREE.RepeatWrapping
    normalMapDXTexture.wrapT = THREE.RepeatWrapping


    roughnessMapTexture.repeat.set(3, 3)
    roughnessMapTexture.wrapS = THREE.RepeatWrapping
    roughnessMapTexture.wrapT = THREE.RepeatWrapping

    return <>
        <RigidBody type="fixed">
            <mesh position-x={-15} position-y={15} rotation-y={Math.PI * 0.5}>
                <boxGeometry args={[30, 30, 0.2]}></boxGeometry>
                <meshStandardMaterial
                map = {diffuseMapTexture}
                aoMap={aoMapTexture}
                armMap={armMapTexture} 
                displacementMap={displacementMapTexture}
                normalDXMap={normalMapDXTexture}
                roughnessMap={roughnessMapTexture}>
                    
                </meshStandardMaterial>
            </mesh>
        </RigidBody>

    </>
}