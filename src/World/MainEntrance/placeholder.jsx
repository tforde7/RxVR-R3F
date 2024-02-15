import { useGLTF, useHelper } from "@react-three/drei"
import { extend } from '@react-three/fiber'
import { useLoader } from "@react-three/fiber"
import { RigidBody } from "@react-three/rapier"
import { useRef } from "react"
import { BoxHelper } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export default function Placeholder ()
{

    const placeholder = useGLTF('/models/waiting_chair/scene.gltf') 
    console.log(placeholder)
    

    return <>
    <RigidBody type="static" >
        <primitive object={placeholder.scene} scale={2.5} position-y={1} position-x={-5} position-z={4}> </primitive>
    </RigidBody>
    </>
}