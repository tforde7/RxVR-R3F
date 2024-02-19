// import { Text3D } from "@react-three/drei";
// import { useControls } from 'leva'; 

// export default function ReceptionSign() {
//   const { textSize, position, rotationY, color, metalness, depth } = useControls('Text Controls', {
//     textSize: { value: 0.5, min: 0.1, max: 2, step: 0.1 },
//     position: { value: [25, 0.5, -3], step: 1 },
//     rotationY: { value: Math.PI * 0.5, min: -Math.PI, max: Math.PI, step: 0.1 },
//     color: { value: "silver" },
//     metalness: { value: 0.85, min: 0, max: 1, step: 0.05 },
//     depth: { value: 0.1, min: 0.01, max: 1, step: 0.01 }, // Add control for text depth
//   });

//   return (
//     <>
//       <Text3D
//         font="./fonts/helvetiker_regular.typeface.json"
//         position={position}
//         rotation-y={rotationY}
//         size={textSize}
//         depth={depth} // Apply the depth value from controls
//       >
//         <meshStandardMaterial color={color} metalness={metalness}></meshStandardMaterial>
//         RECEPTION
//       </Text3D>
//     </>
//   );
// }

import { Text3D } from "@react-three/drei";
import React from "react";

export default function ReceptionSign() {
  // Fixed values for the properties
  const textSize = 0.3;
  const position = [30, 2.5, -16];
  const rotationY = -1.3;
  const color = "black";
  const metalness = 0.5;
  const depth = 0.05;

  return (
    <>
      <Text3D
        font="./fonts/helvetiker_regular.typeface.json"
        position={position}
        rotation-y={rotationY}
        size={textSize}
        depth={depth}
      >
        <meshStandardMaterial color={color} metalness={metalness} />
        RECEPTION
      </Text3D>
    </>
  );
}

