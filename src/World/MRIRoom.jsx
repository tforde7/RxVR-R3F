import MRI from './MainEntrance/Mri'
import Room from './Room'

const MRIRoom = () => {
  return (
    <>
      <Room length={20} width={20} height={3.6} position={[150, 0, -80]}></Room>
      <group position={[150, 0, -80]}>
        <MRI></MRI>
      </group>
    </>
  )
}

export default MRIRoom
