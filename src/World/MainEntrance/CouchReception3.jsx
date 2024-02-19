import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";

export default function CornerCouchReception3() {
    const cornerCouchReception = useGLTF('/models/Couch/black couch1 - Copy (2).glb');

    // Define fixed values for scale, position, and rotation
    const scale = [0.8, 0.8, 0.8]; // Example scale
    const position = [82.0, -0.3, -11.5]; // Example position
    const rotation = [0, -1.28, 0]; // Example rotation (in radians)

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
