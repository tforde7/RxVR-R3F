import { useGLTF } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export default function TourGuide ()
{

    const tourGuideModel = useGLTF('/models/duck/duck.gltf')    

    return <>
        <primitive object={tourGuideModel.scene} scale={2} position-y={0.25} ></primitive>
    </>
}