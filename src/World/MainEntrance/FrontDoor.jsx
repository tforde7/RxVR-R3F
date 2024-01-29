import { useFBX } from "@react-three/drei"

export default function FrontDoor ()
{

    const doorModel = useFBX('/models/FrontDoor/FrontDoor.fbx')
    console.log(doorModel)
    return <>
            <primitive 
                castShadow 
                object={doorModel} 
                scale={0.05}
                position-z={-14} >

            </primitive>
    </>
}