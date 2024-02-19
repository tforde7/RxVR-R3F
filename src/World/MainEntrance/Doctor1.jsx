import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";

export default function Doctor1() {
    const doctor = useGLTF('/models/doctor (1)/scene.gltf');

    // Define fixed values for scale, position, and rotation
    const scale = [1, 1, 1]; // Example scale
    const position = [25, 0, -10]; // Example position
    const rotation = [0, 0.28, 0]; // Example rotation (in radians)

    return (
        <>
            <RigidBody colliders="hull" type="fixed">
                <primitive 
                    object={doctor.scene} 
                    scale={scale}
                    position={position}
                    rotation={rotation}
                />
            </RigidBody>
        </>
    );
}
