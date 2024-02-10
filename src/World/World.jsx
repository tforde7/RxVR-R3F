import {extend, useFrame, useLoader, useThree} from "@react-three/fiber";
import {FirstPersonControls, OrbitControls, Sky, SoftShadows, useHelper} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useEffect, useRef } from "react";
import * as THREE from 'three'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import MainEntrance from "./MainEntrance/MainEntrance.jsx";
import { Physics } from "@react-three/rapier";
import Player from "./Player/Player.jsx";
import { useControls } from "leva";
import GlobalGround from "./GlobalGround.jsx";
import { Buildings } from "./Buildings.jsx";
import Sign2 from "./Sign2.jsx";
import GlassWall from "./MainEntrance/GlassWall.jsx";
import StartVR from "./StartVR.jsx";
import { TeleportationPlane, useController } from "@react-three/xr";
import FrontWallUpper from "./MainEntrance/FrontWallUpper.jsx";



export default function World ()
{
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



    // Set the initial position of the camera
    const {camera} = useThree()
    useEffect(() => {camera.position.set(-350, 100, 0)}, [])

    const {cameraTarget, orbitControlsEnabled} = useControls({
        cameraTarget: {
            value: {x: 0, y: 0, z: 0},
            step: 0.1,
        },
        orbitControlsEnabled: false
    })

    const orbitControls = useRef()

    const directionalLight = useRef()
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



    return <>
        {/* <SoftShadows size={25} samples={10} focus={0} ></SoftShadows> */}
        <Perf position="top-left"></Perf>
        <OrbitControls makeDefault
            ref={orbitControls} 
            target={[cameraTarget.x, cameraTarget.y, cameraTarget.z]}
            enabled={orbitControlsEnabled}
             >
        </OrbitControls>
        <directionalLight ref={directionalLight} castShadow intensity={4.5} position={[1, 2, 3]}></directionalLight>
        <ambientLight intensity={1.5}></ambientLight>
        <Sky></Sky>
        <Physics>

            { orbitControlsEnabled ? null : <Player></Player>}
            {/* <MainEntrance></MainEntrance>   */}
            <GlobalGround></GlobalGround>
            <Buildings></Buildings>
            <Sign2></Sign2>
            <GlassWall></GlassWall>
            <FrontWallUpper></FrontWallUpper>
        </Physics>

    </>
}