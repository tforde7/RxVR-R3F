import { useGLTF, useHelper } from "@react-three/drei"
import { extend } from '@react-three/fiber'
import { useLoader } from "@react-three/fiber"
import { RigidBody } from "@react-three/rapier"
import { useRef } from "react"
import { BoxHelper } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export default function Waiting_chair ()
{

    const waiting_chair = useGLTF('/models/waiting_chair/scene.gltf') 
    

    return <>
    <RigidBody colliders="hull" type="fixed" >
        <primitive object={waiting_chair.scene} scale={2} position-y={1} position-x={15} position-z={15}> </primitive>
    </RigidBody>
    </>
}