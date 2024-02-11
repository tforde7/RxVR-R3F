import { VRButton, ARButton, XR, Controllers, Hands, TeleportationPlane } from '@react-three/xr'
import { Canvas } from '@react-three/fiber'
import World from './World'

const StartVR = () => {

  const EnterVR = (enterVREvent) => {
    console.log(enterVREvent)
  }
  return (
    <>
      <VRButton />
      <Canvas>
        <XR
        onSessionStart={EnterVR}>
          <Controllers/>
          <TeleportationPlane>
          <World></World>


          </TeleportationPlane>
          

        </XR>
      </Canvas>
    </>
  )
}

export default StartVR