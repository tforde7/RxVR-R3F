export default function GlassWall ()
{
    return <>
        <mesh position-z={-5} scale={10}>
            <planeGeometry></planeGeometry>
            <meshStandardMaterial></meshStandardMaterial>
        </mesh>
    </>
}