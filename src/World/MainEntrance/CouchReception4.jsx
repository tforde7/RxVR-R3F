import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";

export default function CornerCouchReception4() {
    const cornerCouchReception = useGLTF('/models/Couch/black couch1 - Copy (3).glb');

    const scale = [0.8, 0.8, 0.8]; // Example scale
    const position = [78.0, -0.3, -15.8]; // Example position
    const rotation = [0, 1.85, 0]; // Example rotation (in radians)

    return (
        <>
            <RigidBody colliders="hull" type="fixed">
                <primitive 
                    object={cornerCouchReception.scene} 
                    scale={scale}
                    position={position}
                    rotation={rotation}
                />
            </RigidBody>
        </>
    );
}
