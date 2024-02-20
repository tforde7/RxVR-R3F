import MRI from './Mri'
import Room from './Room'

const MRIRoom = () => {
  return (
    <>
      <Room length={20} width={20} height={3.6} position={[150, 0, -80]}></Room>
      <group position={[156, 0, -86]}>
        <MRI></MRI>
      </group>
    </>
  )
}

export default MRIRoom
