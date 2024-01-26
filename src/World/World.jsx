import Ground from "./MainEntrance/Ground.jsx";
import BrickWall from "./MainEntrance/BrickWall.jsx";
import GlassWall from "./MainEntrance/GlassWall.jsx";
import FrontDoor from "./MainEntrance/FrontDoor.jsx";
import TourGuide from "./MainEntrance/TourGuide.jsx";
import {extend, useThree} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
export default function World ()
{
    return <>

        <OrbitControls></OrbitControls>
        <directionalLight intensity={4.5} position={[1, 2, 3]}></directionalLight>
        <ambientLight intensity={1.5}></ambientLight>
        <Ground></Ground>
        <BrickWall></BrickWall>
        <GlassWall></GlassWall>
        <FrontDoor></FrontDoor>
        <TourGuide></TourGuide>
    </>
}