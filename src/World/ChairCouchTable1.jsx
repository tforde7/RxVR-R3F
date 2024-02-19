// import { useGLTF } from "@react-three/drei";
// import { RigidBody } from "@react-three/rapier";
// import React from "react";
// import { useControls } from 'leva'; 

// export default function ChairCouchTable1() {
//     const table = useGLTF('/models/Couch/chaircouchtable.glb');

//     const { scale, positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = useControls('CCT1 Controls', {
//         scale: { value: 7, min: 0.1, max: 15, step: 0.1 },
//         positionX: { value: 30, min: -100, max: 100, step: 0.1 },
//         positionY: { value: 0, min: -100, max: 100, step: 0.1 },
//         positionZ: { value: 3, min: -100, max: 100, step: 0.1 },
//         rotationX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
//         rotationY: { value: 1.8, min: -Math.PI, max: Math.PI, step: 0.01 },
//         rotationZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
//     });

//     return (
//         <>
//             <RigidBody colliders="hull" type="fixed">
//                 <primitive 
//                     object={table.scene} 
//                     scale={Array.isArray(scale) ? scale : [scale, scale, scale]}
//                     position={[positionX, positionY, positionZ]} 
//                     rotation={[rotationX, rotationY, rotationZ]}
//                 />
//             </RigidBody>
//         </>
//     );
// }


import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";

export default function ChairCouchTable1() {
    const cornerCouchReception = useGLTF('/models/Couch/chaircouchtable.glb');

    // Define fixed values for scale, position, and rotation
    const scale = [7, 7, 7]; // Example scale
    const position = [30, 0, 3]; // Example position
    const rotation = [0, 1.8, 0]; // Example rotation (in radians)

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
