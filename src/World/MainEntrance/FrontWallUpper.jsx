import { Base, Geometry, Subtraction } from "@react-three/csg"
import { PivotControls, TransformControls } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { RigidBody } from "@react-three/rapier"
import { useControls } from "leva"
import { useRef } from "react"
import * as THREE from 'three'

export default function FrontWallUpper ()
{
    const position = [-413, 26.8, -34.5]
    const rotation = 1.83

    return <>
            <mesh  position={position} rotation-y={rotation} scale={[3,2.5,3]}>
            <meshStandardMaterial>
            </meshStandardMaterial>
            <boxGeometry args={[22, 14.8, 0.2]}></boxGeometry>
            </mesh>



    </>
}