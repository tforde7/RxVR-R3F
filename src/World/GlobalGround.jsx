import { useHelper } from "@react-three/drei";
import {useLoader} from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import * as THREE from "three";

export default function GlobalGround ()
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
    groundColorTexture.repeat.set(100, 100)
    groundColorTexture.wrapS = THREE.RepeatWrapping
    groundColorTexture.wrapT = THREE.RepeatWrapping

    groundNormalTexture.repeat.set(100, 100)
    groundNormalTexture.wrapS = THREE.RepeatWrapping
    groundNormalTexture.wrapT = THREE.RepeatWrapping

    groundHeightTexture.repeat.set(100, 100)
    groundHeightTexture.wrapS = THREE.RepeatWrapping
    groundHeightTexture.wrapT = THREE.RepeatWrapping

    groundAOTexture.repeat.set(100, 100)
    groundAOTexture.wrapS = THREE.RepeatWrapping
    groundAOTexture.wrapT = THREE.RepeatWrapping

    groundRoughnessTexture.repeat.set(100, 100)
    groundRoughnessTexture.wrapS = THREE.RepeatWrapping
    groundRoughnessTexture.wrapT = THREE.RepeatWrapping


    return <>
    <RigidBody type="fixed">
        <mesh receiveShadow rotation-x={-Math.PI * 0.5} >
            <boxGeometry args={[1000, 1000, 1]} ></boxGeometry>
            <meshStandardMaterial
                map={groundColorTexture}
                normalMap={groundNormalTexture} 
                aoMap={groundAOTexture}
                roughnessMap={groundRoughnessTexture}>
            </meshStandardMaterial >
        </mesh>
    </RigidBody>
    </>
}