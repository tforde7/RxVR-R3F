import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";
import { useControls } from 'leva'; 

export default function Plant2() {
    const pottedPlant = useGLTF('/models/house_plants/House plant - Copy.glb');

    const { scale, positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = useControls('Plant2 Controls', {
        scale: { value: 0.3, min: 0.1, max: 5, step: 0.1 },
        positionX: { value: 83, min: -100, max: 100, step: 0.1 },
        positionY: { value: 0, min: -100, max: 100, step: 0.1 },
        positionZ: { value: -15.5, min: -100, max: 100, step: 0.1 },
        rotationX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
        rotationY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
        rotationZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    });

    return (
        <>
            <RigidBody colliders="hull" type="fixed">
                <primitive 
                    object={pottedPlant.scene} 
                    scale={Array.isArray(scale) ? scale : [scale, scale, scale]}
                    position={[positionX, positionY, positionZ]} 
                    rotation={[rotationX, rotationY, rotationZ]}
                />
            </RigidBody>
        </>
    );
}


