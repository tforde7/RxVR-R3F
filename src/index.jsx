import { Canvas } from '@react-three/fiber'
import './style.css'
import ReactDOM from 'react-dom/client'
import World from "./World/World.jsx";
import { StrictMode } from 'react';
import { KeyboardControls, PointerLockControls } from '@react-three/drei';
import { Leva } from 'leva';

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <Leva></Leva>
        <KeyboardControls
            map={[
                { name: "forward", keys: ["ArrowUp", "KeyW"] },
                { name: "backward", keys: ["ArrowDown", "KeyS"] },
                { name: "left", keys: ["ArrowLeft", "KeyA"] },
                { name: "right", keys: ["ArrowRight", "KeyD"] },
                { name: "jump", keys: ["Space"] },
            ]} >
            <Canvas shadows>
                <World></World>
                {/* <PointerLockControls></PointerLockControls> */}
            </Canvas>
        </KeyboardControls>
    </StrictMode>

)