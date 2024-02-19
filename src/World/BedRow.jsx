import { Bed } from './Bed'

const BedRow = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 5, numberOfBeds = 1 }) => {
  return (
    <group position={position} rotation={rotation}>
      {Array.from({ length: numberOfBeds }, (_, i) => (
        <Bed key={i} scale={scale} position={[0, 0, i * 3]} />
      ))}
    </group>
  )
}

export default BedRow
