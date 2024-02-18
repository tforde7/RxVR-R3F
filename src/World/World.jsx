import { extend, useFrame, useLoader, useThree } from '@react-three/fiber'
import { FirstPersonControls, OrbitControls, Sky, SoftShadows, useHelper, useProgress } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import MainEntrance from './MainEntrance/MainEntrance.jsx'
import { Physics } from '@react-three/rapier'
import Player from './Player/Player.jsx'
import { useControls } from 'leva'
import GlobalGround from './GlobalGround.jsx'
import { Buildings } from './Buildings.jsx'
import Sign2 from './Sign2.jsx'
import GlassWall from './MainEntrance/GlassWall.jsx'
import StartVR from './StartVR.jsx'
import { TeleportationPlane, XR, useController, useXR } from '@react-three/xr'
import FrontWallUpper from './MainEntrance/FrontWallUpper.jsx'
import Ecctrl from 'ecctrl'
import { LargeBuilding } from './Large-building.jsx'
import LectureTheatre from './LectureTheatre.jsx'
import Lobby from './Lobby.jsx'
import MainConcourse from './MainConcourse.jsx'
import Seahorse from './Seahorse.jsx'
import XRayRoom from './XRayRoom.jsx'
import MRIRoom from './MRIRoom.jsx'
import RabbitCyan from './MainEntrance/RabbitCyan.jsx'
import Overlay from '../Overlay.jsx'

export default function World() {
  // const {gl} = useThree()
  // const three = useThree()
  // console.log(three)
  // const xrSession = gl.xr.getSession()
  // const controller = gl.xr.getController(0)

  // if (xrSession) {
  //     console.log(xrSession)
  //     xrSession.addEventListener('oninputsourceschange', (event) => {
  //         console.log(event)
  //     })

  // }

  // useProgress((progress) => console.log(progress))

  const backgroundMusic = new Audio('/sounds/ballerina.mp3')
  // backgroundMusic.play()
  backgroundMusic.loop = true

  // Set the initial position of the camera
  // const { camera } = useThree()
  // useEffect(() => {
  //   camera.position.set(0, 1.8, -3)
  // }, [])

  const { cameraTarget, orbitControlsEnabled } = useControls({
    cameraTarget: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.1,
    },
    orbitControlsEnabled: true,
  })

  //   const orbitControls = useRef()

  // const directionalLight = useRef()
  // useHelper(directionalLight, THREE.DirectionalLightHelper, 1)

  // const leftController = useController('left')
  // if (leftController) {
  //     console.log(leftController)

  // }

  // async createMotionController(xrInputSource) {

  // }
  // console.log(leftController)
  // console.log(leftController?.inputSource.gamepad.axes)

  // useFrame(() => {
  //     if (leftController) {
  //         console.log(leftController)
  //     }

  // })

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
    // console.log(player)
    // player.position.set(0, 1.8, -3)
  }, [])

  useEffect(() => {
    console.log(player.position)
  }, [player.position])

  // console.log(controllers)
  // console.log(isPresenting)
  // console.log(isHandTracking)
  // console.log(player)
  // console.log(session)
  // console.log(foveation)
  // console.log(referenceSpace)

  return (
    <>
      {/* <SoftShadows size={25} samples={10} focus={0} ></SoftShadows> */}
      <Perf position="top-left"></Perf>
      <OrbitControls makeDefault target={[cameraTarget.x, cameraTarget.y, cameraTarget.z]} enabled={orbitControlsEnabled}></OrbitControls>
      {/* <directionalLight ref={directionalLight} castShadow intensity={4.5} position={[1, 2, 3]}></directionalLight> */}
      <ambientLight intensity={1.5}></ambientLight>
      <Sky></Sky>
      <Buildings></Buildings>
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
