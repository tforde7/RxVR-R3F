import { useLoader } from "@react-three/fiber"
import { RigidBody } from "@react-three/rapier"
import * as THREE from 'three'

export default function GlassWall ()
{
    const [
        glassColorTexture, 
        glassNormalTexture,
        glassHeightTexture,
        glassAOTexture,
        glassRoughnessTexture,
        glassMetalnessTexture,
        glassAlphaTexture
        ] = useLoader(THREE.TextureLoader, [
        '/textures/glass/color.jpg',
        '/textures/glass/normal.jpg',
        '/textures/glass/height.png',
        '/textures/glass/ao.jpg',
        '/textures/glass/roughness.jpg',
        '/textures/glass/metalness.jpg',
        '/textures/glass/alpha.jpg'
    ])
    glassColorTexture.repeat.set(3, 3)
    glassColorTexture.wrapS = THREE.RepeatWrapping
    glassColorTexture.wrapT = THREE.RepeatWrapping


    glassNormalTexture.repeat.set(3, 3)
    glassNormalTexture.wrapS = THREE.RepeatWrapping
    glassNormalTexture.wrapT = THREE.RepeatWrapping

    glassHeightTexture.repeat.set(3, 3)
    glassHeightTexture.wrapS = THREE.RepeatWrapping
    glassHeightTexture.wrapT = THREE.RepeatWrapping

    glassAOTexture.repeat.set(3, 3)
    glassAOTexture.wrapS = THREE.RepeatWrapping
    glassAOTexture.wrapT = THREE.RepeatWrapping

    glassRoughnessTexture.repeat.set(3, 3)
    glassRoughnessTexture.wrapS = THREE.RepeatWrapping
    glassRoughnessTexture.wrapT = THREE.RepeatWrapping

    glassMetalnessTexture.repeat.set(3, 3)
    glassMetalnessTexture.wrapS = THREE.RepeatWrapping
    glassMetalnessTexture.wrapT = THREE.RepeatWrapping

    glassAlphaTexture.repeat.set(3, 3)
    glassAlphaTexture.wrapS = THREE.RepeatWrapping
    glassAlphaTexture.wrapT = THREE.RepeatWrapping

    
    return <>
    <RigidBody type="fixed">
        <mesh position-z={-15} position-y={15}>
            <boxGeometry args={[30, 30, 0.2]}></boxGeometry>
            <meshStandardMaterial
                map={glassColorTexture}
                normalMap={glassNormalTexture}
                aoMap={glassAOTexture}
                roughnessMap={glassRoughnessTexture}
                metalnessMap={glassMetalnessTexture}
                alphaMap={glassAlphaTexture}
                transparent={true}
                
            >
            </meshStandardMaterial>
        </mesh>

    </RigidBody>

    </>
}