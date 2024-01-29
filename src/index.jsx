import { Canvas } from '@react-three/fiber'
import './style.css'
import ReactDOM from 'react-dom/client'
import World from "./World/World.jsx";
import { StrictMode } from 'react';
import { KeyboardControls, PointerLockControls } from '@react-three/drei';

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <KeyboardControls
            map={[
                { name: "forward", keys: ["ArrowUp", "w", "W"] },
                { name: "backward", keys: ["ArrowDown", "s", "S"] },
                { name: "left", keys: ["ArrowLeft", "a", "A"] },
                { name: "right", keys: ["ArrowRight", "d", "D"] },
                { name: "jump", keys: ["Space"] },
            ]} >
            <Canvas shadows>
                <World></World>
                {/* <PointerLockControls></PointerLockControls> */}
            </Canvas>
        </KeyboardControls>
    </StrictMode>

)