import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { useControls } from 'leva'; // Import useControls from leva

export default function WaitingChair() {
    const waitingChair = useGLTF('/models/waiting_chair/scene.gltf');

    const { scale, position, rotation } = useControls( 'waiting chair', {
        scale: { value: 1.5, step: 0.1 },
        position: {x: 70.4, y: 0, z: -10 },
        rotation: { value: 30.28, step: 0.01 },
    });

    return (
        <>
            <RigidBody colliders="hull" type="fixed">
                <primitive 
                    object={waitingChair.scene} 
                    scale={scale} // Use scale from Leva controls
                    position={[position.x, position.y, position.z]} 
                    rotation-y = {rotation}
                />
            </RigidBody>
        </>
    );
}
