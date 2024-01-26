export default function Ground ()
{
    return <>
        <mesh scale={10} position-y={-1} rotation-x={-Math.PI * 0.5}>
            <planeGeometry></planeGeometry>
            <meshStandardMaterial color={'blue'}></meshStandardMaterial>
        </mesh>
    </>
}