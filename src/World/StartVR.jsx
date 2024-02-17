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
      <Canvas>
        <XR>
          <World></World>
          <ambientLight />
          <Controllers />
        </XR>
      </Canvas>
      <Loader />
    </>
  )
}

export default StartVR
