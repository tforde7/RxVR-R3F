import { VRButton, ARButton, XR, Controllers, Hands, TeleportationPlane } from '@react-three/xr'
import { Canvas } from '@react-three/fiber'
import World from './World'

const StartVR = () => {
  return (
    <>
      <VRButton />
      <Canvas>
        <XR>
          <Controllers />
          <World></World>

        </XR>
      </Canvas>
    </>
  )
}

export default StartVR