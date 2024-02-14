import Ground from "./Ground";
import BrickWall from "./BrickWall";
import GlassWall from "./GlassWall";
import FrontDoor from "./FrontDoor";
import TourGuide from "./TourGuide";
import Sign from "./Sign";
import MRI from "./Mri";
import Ultrasound from "./ultrasound";
import Bed_w_acc from "./room_bedandaccess";
import Placeholder from "./placeholder";
import Waiting_chair from "./waiting_chair";
import XRayBoard from "./XrayBoard";
import Rabbit from "./rabbit";
import RabbitPigtails from "./RabbitPigtails";
import Panda from "./Panda";
import RabbitCyan from "./RabbitCyan";
// import Testrabbit from "./testRabbit";
// import Couch from "./couch";


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
            {/* <TourGuide></TourGuide> */}
            <Sign></Sign>
            <MRI></MRI>
            <Ultrasound></Ultrasound>
            <Bed_w_acc></Bed_w_acc>
            <Waiting_chair></Waiting_chair>
            <Placeholder></Placeholder> 
            <XRayBoard></XRayBoard>
            <Rabbit></Rabbit>
            <RabbitPigtails></RabbitPigtails>
            <Panda></Panda>
            <RabbitCyan></RabbitCyan>
            {/* <Testrabbit></Testrabbit> */}
            {/* <Couch></Couch> */}
            


        </>
    );
};

export default MainEntrance;
