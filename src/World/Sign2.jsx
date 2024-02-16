import { Text3D } from "@react-three/drei";
import { useControls } from "leva";

// react component
export default function Sign2() {
    const textSize = 1.5;

    const SIGN_POSITION = [-422, 15, -74]

  return (
    <>
    <group position={SIGN_POSITION} rotation-y={Math.PI * 0.08}>
      <Text3D
          font="./fonts/helvetiker_regular.typeface.json"
          position={[-14.5, 21.5, 8]}
          size = {textSize}
        >
          <meshStandardMaterial color={"silver"} metalness={0.85}></meshStandardMaterial>

          CORK
        </Text3D>

        <Text3D
          font="./fonts/helvetiker_regular.typeface.json"
          position={[-14.5, 19, 8]}
          size = {textSize}
        >
          <meshStandardMaterial color={"silver"} metalness={0.85}></meshStandardMaterial>

          UNIVERSITY
        </Text3D>

        <Text3D
          font="./fonts/helvetiker_regular.typeface.json"
          position={[-14.5, 16.5, 8]}
          size = {textSize}
        >
          <meshStandardMaterial color={"silver"} metalness={0.85}></meshStandardMaterial>

          HOSPITAL
        </Text3D>

    </group>

    </>
  );
}
