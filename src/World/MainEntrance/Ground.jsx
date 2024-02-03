import { useHelper } from "@react-three/drei";
import {useLoader} from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import * as THREE from "three";

export default function Ground ()
{
    const [
        diffuseMapTexture,
        aoMapTexture,
        armMapTexture,
        displacementMapTexture,
        normalMapDXTexture,
        roughnessMapTexture
    ] = useLoader(THREE.TextureLoader, [
        '/textures/block_pavement/brick_floor_003_diffuse_4k.jpg',
        '/textures/block_pavement/brick_floor_003_ao_4k.jpg',
        '/textures/block_pavement/brick_floor_003_arm_4k.jpg',
        '/textures/block_pavement/brick_floor_003_displacement_4k.jpg',
        '/textures/block_pavement/brick_floor_003_nor_dx_4k.jpg',
        '/textures/block_pavement/brick_floor_003_rough_4k.jpg'
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
        <mesh receiveShadow rotation-x={-Math.PI * 0.5}>
            <boxGeometry args={[30, 30, 1]}></boxGeometry>
            <meshStandardMaterial
                map = {diffuseMapTexture}
                aoMap={aoMapTexture}
                armMap={armMapTexture} 
                displacementMap={displacementMapTexture}
                normalDXMap={normalMapDXTexture}
                roughnessMap={roughnessMapTexture}
                >
            </meshStandardMaterial>
        </mesh>
    </RigidBody>
    </>
}