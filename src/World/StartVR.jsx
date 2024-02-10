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
          <Hands />
          <TeleportationPlane
            /** Whether to allow teleportation from left controller. Default is `false` */
            leftHand={true}
            /** Whether to allow teleportation from right controller. Default is `false` */
            rightHand={true}
            /** The maximum distance from the camera to the teleportation point. Default is `10` */
            maxDistance={10}
            /** The radial size of the teleportation marker. Default is `0.25` */
            size={0.25}
            />
          <World></World>

        </XR>
      </Canvas>
    </>
  )
}

export default StartVR