import { Text3D } from "@react-three/drei";

// react component
export default function Sign() {
    const textSize = 1.5;
  return (
    <>
      <Text3D
        font="./fonts/helvetiker_regular.typeface.json"
        position={[-15, 21.5, 8]}
        rotation-y={Math.PI * 0.5}
        size = {textSize}
      >
        <meshStandardMaterial color={"silver"} metalness={0.85}></meshStandardMaterial>

        CORK
      </Text3D>

      <Text3D
        font="./fonts/helvetiker_regular.typeface.json"
        position={[-15, 19, 8]}
        rotation-y={Math.PI * 0.5}
        size = {textSize}
      >
        <meshStandardMaterial color={"silver"} metalness={0.85}></meshStandardMaterial>

        UNIVERSITY
      </Text3D>

      <Text3D
        font="./fonts/helvetiker_regular.typeface.json"
        position={[-15, 16.5, 8]}
        rotation-y={Math.PI * 0.5}
        size = {textSize}
      >
        <meshStandardMaterial color={"silver"} metalness={0.85}></meshStandardMaterial>

        HOSPITAL
      </Text3D>
    </>
  );
}
