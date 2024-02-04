import Ground from "./Ground";
import BrickWall from "./BrickWall";
import GlassWall from "./GlassWall";
import FrontDoor from "./FrontDoor";
import TourGuide from "./TourGuide";
import Sign from "./Sign";
// import WineCharacter from "./winecharacter";
// import Horse from "./horse";
// import { Knight } from "./Knight";


const MainEntrance = () => {
    return (
        <>
            <rectAreaLight
                intensity={200} 
                position={[0,2,-13]}
                lookAt={[0,0,0]}
                color={'purple'}
                width={5} 
                height={7} >
            </rectAreaLight>
            <Ground ></Ground>
            <BrickWall></BrickWall>
            <GlassWall></GlassWall>
            <FrontDoor></FrontDoor>
            <TourGuide></TourGuide>
            <Sign></Sign>
            {/* <WineCharacter></WineCharacter> */}
            {/* <Horse></Horse> */}
            {/* <Knight></Knight> */}
        </>
    );
};

export default MainEntrance;
