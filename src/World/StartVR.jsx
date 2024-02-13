import { VRButton, ARButton, XR, Controllers, Hands, TeleportationPlane } from '@react-three/xr'
import { Canvas } from '@react-three/fiber'
import World from './World'
import { Environment } from '@react-three/drei'

const StartVR = () => {

  const EnterVR = (enterVREvent) => {
    console.log(enterVREvent)
  }
  return (
    <>
      <VRButton />
      <Canvas >
        <XR
        onSessionStart={EnterVR}>
                    <color attach="background" args={["#16161b"]} />

          <Controllers 
          />
          <World></World>
        


          

        </XR>
      </Canvas>
    </>
  )
}

export default StartVR