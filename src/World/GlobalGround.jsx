import { useHelper } from "@react-three/drei";
import {useLoader} from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { TeleportationPlane } from "@react-three/xr";
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
    <TeleportationPlane
            /** Whether to allow teleportation from left controller. Default is `false` */
            leftHand={true}
            /** Whether to allow teleportation from right controller. Default is `false` */
            rightHand={true}
            /** The maximum distance from the camera to the teleportation point. Default is `10` */
            maxDistance={10}
            /** The radial size of the teleportation marker. Default is `0.25` */
            size={0.25}
            />
    </>
}