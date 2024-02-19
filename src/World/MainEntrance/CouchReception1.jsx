// import { useGLTF } from "@react-three/drei";
// import { RigidBody } from "@react-three/rapier";
// import { useRef } from "react";
// import { useControls } from 'leva'; // Import useControls from leva

// export default function CornerCouchReception1() {
//     const cornerCouchReception = useGLTF('/models/Couch/Lounge Sofa.glb');

//     const { scale, position, rotation } = useControls( 'corner Couch', {
//         scale: { value: 2, step: 0.1 },
//         position: {x: 92, y: 0, z: -15.5 },
//         rotation: { value: 0.28, step: 0.01 },
//     });

//     return (
//         <>
//             <RigidBody colliders="hull" type="fixed">
//                 <primitive 
//                     object={cornerCouchReception.scene} 
//                     scale={scale} 
//                     position={[position.x, position.y, position.z]} 
//                     rotation-y = {rotation}
//                 />
//             </RigidBody>
//         </>
//     );
// }

// import { useGLTF } from "@react-three/drei";
// import { RigidBody } from "@react-three/rapier";
// import React from "react";
// import { useControls } from 'leva'; // Import useControls from leva

// export default function CornerCouchReception1() {
//     const cornerCouchReception = useGLTF('/models/Couch/Lounge Sofa.glb');

//     // Using useControls to define a UI for live tweaking
//     const { scale, positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = useControls('Corner Couch Controls', {
//         scale: { value: 2, min: 0.1, max: 5, step: 0.1 },
//         positionX: { value: 92, min: -100, max: 100, step: 0.1 },
//         positionY: { value: 0, min: -100, max: 100, step: 0.1 },
//         positionZ: { value: -15.5, min: -100, max: 100, step: 0.1 },
//         rotationX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
//         rotationY: { value: 0.28, min: -Math.PI, max: Math.PI, step: 0.01 },
//         rotationZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
//     });

//     return (
//         <>
//             <RigidBody colliders="hull" type="fixed">
//                 <primitive 
//                     object={cornerCouchReception.scene} 
//                     scale={Array.isArray(scale) ? scale : [scale, scale, scale]} // Ensuring scale is an array
//                     position={[positionX, positionY, positionZ]} 
//                     rotation={[rotationX, rotationY, rotationZ]}
//                 />
//             </RigidBody>
//         </>
//     );
// }

// import { useGLTF } from "@react-three/drei";
// import { RigidBody } from "@react-three/rapier";
// import React from "react";
// import { useControls } from 'leva'; // Import useControls from leva

// // Add an id parameter to the function's props
// export default function CornerCouchReception1({ id = 'Default' }) {
//     const cornerCouchReception = useGLTF('/models/Couch/Lounge Sofa Corner(1).gltf');

//     // Append the id to the control's name to ensure uniqueness
//     const { scale, positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = useControls(`${id} Corner Couch Controls`, {
//         scale: { value: 2, min: 0.1, max: 5, step: 0.1 },
//         positionX: { value: 92, min: -100, max: 100, step: 0.1 },
//         positionY: { value: 0, min: -100, max: 100, step: 0.1 },
//         positionZ: { value: -15.5, min: -100, max: 100, step: 0.1 },
//         rotationX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
//         rotationY: { value: 0.28, min: -Math.PI, max: Math.PI, step: 0.01 },
//         rotationZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
//     });

//     return (
//         <>
//             <RigidBody colliders="hull" type="fixed">
//                 <primitive 
//                     object={cornerCouchReception.scene} 
//                     scale={Array.isArray(scale) ? scale : [scale, scale, scale]} // Ensuring scale is an array
//                     position={[positionX, positionY, positionZ]} 
//                     rotation={[rotationX, rotationY, rotationZ]}
//                 />
//             </RigidBody>
//         </>
//     );
// }

// import { useGLTF } from "@react-three/drei";
// import { RigidBody } from "@react-three/rapier";
// import React from "react";
// import { useControls } from 'leva'; // Import useControls from leva

// export default function CornerCouchReception1() {
//     const cornerCouchReception = useGLTF('/models/Couch/black couch1.glb');

//     // Use a fixed name for the control's panel
//     const { scale, positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = useControls('Corner Couch Controls', {
//         scale: { value: 0.8, min: 0.1, max: 5, step: 0.1 },
//         positionX: { value: 89.5, min: -100, max: 100, step: 0.1 },
//         positionY: { value: -0.3, min: -100, max: 100, step: 0.1 },
//         positionZ: { value: -14.0, min: -100, max: 100, step: 0.1 },
//         rotationX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
//         rotationY: { value: -1.28, min: -Math.PI, max: Math.PI, step: 0.01 },
//         rotationZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
//     });

//     return (
//         <>
//             <RigidBody colliders="hull" type="fixed">
//                 <primitive 
//                     object={cornerCouchReception.scene} 
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

export default function CornerCouchReception1() {
    const cornerCouchReception = useGLTF('/models/Couch/black couch1.glb');

    const scale = [0.8, 0.8, 0.8]; // Example scale
    const position = [89.5, -0.3, -14]; // Example position
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

