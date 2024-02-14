import { useGLTF, useHelper } from "@react-three/drei"
import { extend } from '@react-three/fiber'
import { useLoader } from "@react-three/fiber"
import { RigidBody } from "@react-three/rapier"
import { useRef } from "react"
import { BoxHelper } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export default function Ultrasound ()
{

    const ultrasound = useGLTF('/models/ultrasound_machine/scene.gltf') 
    console.log(ultrasound)
    

    return <>
    <RigidBody type="static" >
        <primitive object={ultrasound.scene} scale={2.5} position-y={1} position-x={-5} position-z={-10}> </primitive>
    </RigidBody>
    </>
}