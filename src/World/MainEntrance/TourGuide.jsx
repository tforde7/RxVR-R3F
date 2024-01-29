import { useGLTF, useHelper } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { RigidBody } from "@react-three/rapier"
import { useRef } from "react"
import { BoxHelper } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export default function TourGuide ()
{

    const tourGuideModel = useGLTF('/models/duck/duck.gltf') 
    

    return <>
    <RigidBody colliders="hull" >
        <primitive object={tourGuideModel.scene} scale={2} position-y={0.5} ></primitive>
    </RigidBody>
    </>
}