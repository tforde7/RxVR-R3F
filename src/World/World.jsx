import Ground from "./MainEntrance/Ground.jsx";
import BrickWall from "./MainEntrance/BrickWall.jsx";
import GlassWall from "./MainEntrance/GlassWall.jsx";
import FrontDoor from "./MainEntrance/FrontDoor.jsx";
import TourGuide from "./MainEntrance/TourGuide.jsx";
import {extend, useLoader, useThree} from "@react-three/fiber";
import {FirstPersonControls, OrbitControls, Sky, SoftShadows, useHelper} from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import * as THREE from 'three'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import MainEntrance from "./MainEntrance/MainEntrance.jsx";



export default function World ()
{

    const directionalLight = useRef()
    // useHelper(directionalLight, THREE.DirectionalLightHelper, 1)


    return <>
        <SoftShadows size={25} samples={10} focus={0} ></SoftShadows>
        <Perf position="top-left"></Perf>
        {/* <FirstPersonControls></FirstPersonControls> */}
        <OrbitControls></OrbitControls>
        <directionalLight ref={directionalLight} castShadow intensity={4.5} position={[1, 2, 3]}></directionalLight>
        <ambientLight intensity={1.5}></ambientLight>
        <Sky></Sky>
        <MainEntrance></MainEntrance>

    </>
}