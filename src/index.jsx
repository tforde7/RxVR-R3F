import { Canvas } from '@react-three/fiber'
import './style.css'
import ReactDOM from 'react-dom/client'
import World from './World/World.jsx'
import { StrictMode } from 'react'
import { KeyboardControls, PointerLockControls } from '@react-three/drei'
import { Leva } from 'leva'
import StartVR from './World/StartVR.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const backgroundMusic = new Audio('/sounds/ballerina.mp3')
console.log(backgroundMusic.volume)
backgroundMusic.volume = 0.1

document.addEventListener('DOMContentLoaded', () => {
  const volumeButton = document.getElementById('volume-button')
  let soundEnabled = false
  volumeButton.innerHTML = '🔊'

  volumeButton.addEventListener('click', () => {
    if (soundEnabled) {
      volumeButton.innerHTML = '🔊'
      backgroundMusic.pause()
    } else {
      volumeButton.innerHTML = '🔇'
      backgroundMusic.play()
      backgroundMusic.loop = true
    }
    soundEnabled = !soundEnabled
  })
})

root.render(
  <StrictMode>
    <Leva hidden></Leva>
    <KeyboardControls
      map={[
        { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
        { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
        { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
        { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
        { name: 'jump', keys: ['Space'] },
      ]}>
      <StartVR></StartVR>
    </KeyboardControls>
  </StrictMode>,
)
