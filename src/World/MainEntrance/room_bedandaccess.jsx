import { useGLTF } from '@react-three/drei'

export default function Bed_w_acc({ position }) {
  const bed_w_acc = useGLTF('/models/hospital_room/bed.glb')

  return (
    <>
      <primitive object={bed_w_acc.scene} scale={5} position={position}></primitive>
    </>
  )
}
