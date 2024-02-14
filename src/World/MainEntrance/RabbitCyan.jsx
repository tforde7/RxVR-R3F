import { useGLTF, useHelper } from "@react-three/drei"
import { extend } from '@react-three/fiber'
import { useLoader } from "@react-three/fiber"
import { RigidBody } from "@react-three/rapier"
import { useRef } from "react"
import { BoxHelper } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export default function RabbitCyan ()
{

    const rabbitcyan = useGLTF('/models/AnimalGuides/Rabbit Cyan.glb') 
    

    return <>
    <RigidBody type="fixed">
        <primitive object={rabbitcyan.scene} scale={1} position-y={0} position-x={-4} position-z={0}> </primitive>
    </RigidBody>
    </>
}