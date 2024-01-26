import { Canvas } from '@react-three/fiber'
import './style.css'
import ReactDOM from 'react-dom/client'
import World from "./World/World.jsx";

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas>
        <World></World>
    </Canvas>
)