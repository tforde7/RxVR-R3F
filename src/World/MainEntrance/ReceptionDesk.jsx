import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";
import { useControls } from 'leva'; 

export default function ReceptionDesk() {
    const reception = useGLTF('/models/reception/reception1.glb');

    const { scale, positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = useControls('Reception Controls', {
        scale: { value: 1.2, min: 0.1, max: 15, step: 0.1 },
        positionX: { value: 40.5, min: -100, max: 100, step: 0.1 },
        positionY: { value: 0, min: -100, max: 100, step: 0.1 },
        positionZ: { value: -26.3, min: -100, max: 100, step: 0.1 },
        rotationX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
        rotationY: { value: 3.4, min: -Math.PI, max: 100, step: 0.01 },
        rotationZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    });

    return (
        <>
            <RigidBody colliders="hull" type="fixed">
                <primitive 
                    object={reception.scene} 
                    scale={Array.isArray(scale) ? scale : [scale, scale, scale]}
                    position={[positionX, positionY, positionZ]} 
                    rotation={[rotationX, rotationY, rotationZ]}
                />
            </RigidBody>
        </>
    );
}


