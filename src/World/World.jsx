import { useFrame } from '@react-three/fiber'
import { OrbitControls, Sky } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useEffect } from 'react'
import { Physics } from '@react-three/rapier'
import Player from './Player/Player.jsx'
import { useControls } from 'leva'
import GlobalGround from './GlobalGround.jsx'
import Sign2 from './Sign2.jsx'
import { TeleportationPlane, useXR } from '@react-three/xr'
import { LargeBuilding } from './Large-building.jsx'
import LectureTheatre from './LectureTheatre.jsx'
import Lobby from './Lobby.jsx'
import MainConcourse from './MainConcourse.jsx'
import Seahorse from './Seahorse.jsx'
import XRayRoom from './XRayRoom.jsx'
import MRIRoom from './MRIRoom.jsx'
import RabbitCyan from './RabbitCyan.jsx'

export default function World() {
  const { cameraTarget, orbitControlsEnabled } = useControls({
    cameraTarget: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.1,
    },
    orbitControlsEnabled: true,
  })

  const {
    // An array of connected `XRController`
    controllers,
    // Whether the XR device is presenting in an XR session
    isPresenting,
    // Whether hand tracking inputs are active
    isHandTracking,
    // A THREE.Group representing the XR viewer or player
    player,
    // The active `XRSession`
    session,
    // `XRSession` foveation. This can be configured as `foveation` on <XR>. Default is `0`
    foveation,
    // `XRSession` reference-space type. This can be configured as `referenceSpace` on <XR>. Default is `local-floor`
    referenceSpace,
  } = useXR()

  useEffect(() => {
    if (!isPresenting) {
      player.position.set(0, 1.6, 0)
    } else {
      player.position.set(0, 0, 0)
    }
  }, [isPresenting])

  useFrame((state, delta, XRFrame) => {
    // if (XRFrame) {
    //   console.log(`Player position: ${player.position.x}, ${player.position.y}, ${player.position.z}`)
    //   console.log(`Player camera position: ${player.children[0].position.x}, ${player.children[0].position.y}, ${player.children[0].position.z}`)
    // }
  })

  return (
    <>
      {/* <SoftShadows size={25} samples={10} focus={0} ></SoftShadows> */}
      <Perf position="top-left"></Perf>
      <OrbitControls makeDefault target={[cameraTarget.x, cameraTarget.y, cameraTarget.z]} enabled={orbitControlsEnabled}></OrbitControls>
      {/* <directionalLight ref={directionalLight} castShadow intensity={4.5} position={[1, 2, 3]}></directionalLight> */}
      <Sky></Sky>
      <Physics>
        {orbitControlsEnabled ? null : <Player></Player>}
        <GlobalGround></GlobalGround>
        <LargeBuilding></LargeBuilding>
        <Sign2></Sign2>
        <Lobby></Lobby>
        <LectureTheatre></LectureTheatre>
        <MainConcourse></MainConcourse>
        <Seahorse></Seahorse>
        <XRayRoom></XRayRoom>
        <MRIRoom></MRIRoom>
        <RabbitCyan></RabbitCyan>
      </Physics>

      {isPresenting && (
        <>
          <TeleportationPlane rightHand />
        </>
      )}
      {/* <Overlay></Overlay> */}
    </>
  )
}
