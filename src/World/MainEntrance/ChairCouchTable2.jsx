import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";

export default function ChairCouchTable2() {
    const cornerCouchReception = useGLTF('/models/Couch/chaircouchtable - Copy.glb');

    // Define fixed values for scale, position, and rotation
    const scale = [7, 7, 7]; // Example scale
    const position = [29, 0, -1]; // Example position
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
