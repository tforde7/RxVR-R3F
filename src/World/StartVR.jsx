import { VRButton, ARButton, XR, Controllers, Hands, TeleportationPlane } from '@react-three/xr'
import { Canvas } from '@react-three/fiber'
import World from './World'
import { Environment, Loader } from '@react-three/drei'

const StartVR = () => {
  const EnterVR = (enterVREvent) => {
    console.log(enterVREvent)
  }
  return (
    <>
      <VRButton />
      <Canvas frameloop="demand">
        <XR>
          <World></World>
          <ambientLight intensity={2.5} />
          <Controllers />
        </XR>
      </Canvas>
      <Loader />
    </>
  )
}

export default StartVR
