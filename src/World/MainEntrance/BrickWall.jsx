export default function BrickWall ()
{
    return <>
        <mesh position-x={-5} rotation-y={Math.PI * 0.5} scale={10}>
            <planeGeometry></planeGeometry>
            <meshStandardMaterial></meshStandardMaterial>
        </mesh>
    </>
}