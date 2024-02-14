import { useGLTF, useHelper } from "@react-three/drei"
import { extend } from '@react-three/fiber'
import { useLoader } from "@react-three/fiber"
import { RigidBody } from "@react-three/rapier"
import { useRef } from "react"
import { BoxHelper } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export default function Testrabbit ()
{

    const rabbittest = useGLTF('/models/AnimalGuides/BlondRabbitedit.glb') 
    

    return <>
    <RigidBody type="fixed">
        <primitive object={rabbittest.scene} scale={1} position-y={0} position-x={0} position-z={0}> </primitive>
    </RigidBody>
    </>
}