import { useGLTF, useHelper } from "@react-three/drei"
import { extend } from '@react-three/fiber'
import { useLoader } from "@react-three/fiber"
import { RigidBody } from "@react-three/rapier"
import { useRef } from "react"
import { BoxHelper } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export default function Bed_w_acc ()
{

    const bed_w_acc = useGLTF('/models/hospital_room/bed.glb') 
    

    return <>
    <RigidBody colliders="hull" type="fixed" >
        <primitive object={bed_w_acc.scene} scale={15} position-y={0.2} position-x={-14} position-z={12} rotation-y={Math.PI * 4}> </primitive>
    </RigidBody>
    </>
}