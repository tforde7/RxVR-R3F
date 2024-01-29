import {useLoader} from "@react-three/fiber";
import * as THREE from "three";

export default function Ground ()
{
    const [
        groundColorTexture,
        groundNormalTexture,
        groundHeightTexture,
        groundAOTexture,
        groundRoughnessTexture
    ] = useLoader(THREE.TextureLoader, [
        '/textures/pavement/color.jpg',
        '/textures/pavement/normal.jpg',
        '/textures/pavement/height.jpg',
        '/textures/pavement/ao.jpg',
        '/textures/pavement/roughness.jpg'
    ])
    groundColorTexture.repeat.set(3, 3)
    groundColorTexture.wrapS = THREE.RepeatWrapping
    groundColorTexture.wrapT = THREE.RepeatWrapping

    groundNormalTexture.repeat.set(3, 3)
    groundNormalTexture.wrapS = THREE.RepeatWrapping
    groundNormalTexture.wrapT = THREE.RepeatWrapping

    groundHeightTexture.repeat.set(3, 3)
    groundHeightTexture.wrapS = THREE.RepeatWrapping
    groundHeightTexture.wrapT = THREE.RepeatWrapping

    groundAOTexture.repeat.set(3, 3)
    groundAOTexture.wrapS = THREE.RepeatWrapping
    groundAOTexture.wrapT = THREE.RepeatWrapping

    groundRoughnessTexture.repeat.set(3, 3)
    groundRoughnessTexture.wrapS = THREE.RepeatWrapping
    groundRoughnessTexture.wrapT = THREE.RepeatWrapping


    return <>
        <mesh receiveShadow rotation-x={-Math.PI * 0.5}>
            <boxGeometry args={[30, 30, 0.2]}></boxGeometry>
            <meshStandardMaterial
                map={groundColorTexture}
                normalMap={groundNormalTexture} 
                aoMap={groundAOTexture}
                roughnessMap={groundRoughnessTexture}
                displacementMap={groundHeightTexture}>

                </meshStandardMaterial>
        </mesh>
    </>
}