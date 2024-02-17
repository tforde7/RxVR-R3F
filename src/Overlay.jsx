import * as THREE from 'three'

const Overlay = () => {
  const material = new THREE.ShaderMaterial({
    transparent: true,
    uniforms: {
      uAlpha: { value: 0.5 },
    },
    vertexShader: `
            void main() {
                gl_Position = vec4(position, 1.0);
            }
        `,
    fragmentShader: `
            float uAlpha;

            void main() {
                gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
            }
        `,
  })
  return (
    <mesh material={material}>
      <planeGeometry args={[2, 2]}></planeGeometry>
    </mesh>
  )
}

export default Overlay
