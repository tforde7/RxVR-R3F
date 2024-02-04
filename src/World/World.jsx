import {extend, useLoader, useThree} from "@react-three/fiber";
import {FirstPersonControls, OrbitControls, Sky, SoftShadows, useHelper} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useEffect, useRef } from "react";
import * as THREE from 'three'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import MainEntrance from "./MainEntrance/MainEntrance.jsx";
import { Physics } from "@react-three/rapier";
import Player from "./Player/Player.jsx";
import { useControls } from "leva";



export default function World ()
{


    // Set the initial position of the camera
    const {camera} = useThree()
    useEffect(() => {camera.position.set(0,3,15)}, [])

    const {cameraTarget, orbitControlsEnabled} = useControls({
        cameraTarget: {
            value: {x: 0, y: 0},
            step: 0.1,
            joystick: 'invertY'
        },
        orbitControlsEnabled: false
    })

    const orbitControls = useRef()

    const directionalLight = useRef()
    // useHelper(directionalLight, THREE.DirectionalLightHelper, 1)


    return <>
        <SoftShadows size={25} samples={10} focus={0} ></SoftShadows>
        <Perf position="top-left"></Perf>
        {/* <FirstPersonControls></FirstPersonControls> */}
        <OrbitControls
            ref={orbitControls} 
            target={[cameraTarget.x, cameraTarget.y, 0]}
            enabled={orbitControlsEnabled} >
        </OrbitControls>
        <directionalLight ref={directionalLight} castShadow intensity={4.5} position={[1, 2, 3]}></directionalLight>
        <ambientLight intensity={1.5}></ambientLight>
        <Sky></Sky>
        <Physics >

            { orbitControlsEnabled ? null : <Player></Player>}
            <MainEntrance></MainEntrance>  
        </Physics>

    </>
}