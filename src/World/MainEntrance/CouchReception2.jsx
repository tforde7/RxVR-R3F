import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";
import { useControls } from 'leva'; // Import useControls from leva

export default function CornerCouchReception2() {
    const cornerCouchReception = useGLTF('/models/Couch/black couch1 - Copy.glb');

    // Use a fixed name for the control's panel
    const { scale, positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = useControls('Corner Couch Controls 2', {
        scale: { value: 0.8, min: 0.1, max: 5, step: 0.1 },
        positionX: { value: 84.6, min: -100, max: 100, step: 0.1 },
        positionY: { value: -0.3, min: -100, max: 100, step: 0.1 },
        positionZ: { value: -18, min: -100, max: 100, step: 0.1 },
        rotationX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
        rotationY: { value: 1.85, min: -Math.PI, max: Math.PI, step: 0.01 },
        rotationZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    });

    return (
        <>
            <RigidBody colliders="hull" type="fixed">
                <primitive 
                    object={cornerCouchReception.scene} 
                    scale={Array.isArray(scale) ? scale : [scale, scale, scale]}
                    position={[positionX, positionY, positionZ]} 
                    rotation={[rotationX, rotationY, rotationZ]}
                />
            </RigidBody>
        </>
    );
}