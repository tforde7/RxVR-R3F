import { useGLTF, useHelper } from "@react-three/drei"
import { extend } from '@react-three/fiber'
import { useLoader } from "@react-three/fiber"
import { RigidBody } from "@react-three/rapier"
import { useRef } from "react"
import { BoxHelper } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export default function Horse ()
{

    const horse = useGLTF('/models/dinosaurs/Triceratops.glb') 
    

    return <>
    <RigidBody colliders="hull" >
        <primitive object={horse.scene} scale={1} position-y={0.5} position-x={-4} position-z={0}> </primitive>
    </RigidBody>
    </>
}