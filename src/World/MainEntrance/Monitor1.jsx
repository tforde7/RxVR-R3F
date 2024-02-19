import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";
import { useControls } from 'leva'; 

export default function Monitor() {
    const tv = useGLTF('/models/Monitors/Tv.glb');

    // Use a fixed name for the control's panel
    const { scale, positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = useControls('tv1 Controls', {
        scale: { value: 1.3, min: 0.1, max: 5, step: 0.1 },
        positionX: { value: 93, min: -100, max: 100, step: 0.1 },
        positionY: { value: 2.5, min: -100, max: 100, step: 0.1 },
        positionZ: { value: -17.0, min: -100, max: 100, step: 0.1 },
        rotationX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
        rotationY: { value: -1.28, min: -Math.PI, max: Math.PI, step: 0.01 },
        rotationZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    });

    return (
        <>
            <RigidBody colliders="hull" type="fixed">
                <primitive 
                    object={tv.scene} 
                    scale={Array.isArray(scale) ? scale : [scale, scale, scale]}
                    position={[positionX, positionY, positionZ]} 
                    rotation={[rotationX, rotationY, rotationZ]}
                />
            </RigidBody>
        </>
    );
}


