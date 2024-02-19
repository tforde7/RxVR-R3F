import { WardBed } from '../Bed'
import Bed_w_acc from './room_bedandaccess'

const BedRow = (props) => {
  return (
    <group {...props}>
      <WardBed scale={5}></WardBed>
      <WardBed scale={5} position={[0, 0, 3]}></WardBed>
      <WardBed scale={5} position={[0, 0, 6]}></WardBed>
      <WardBed scale={5} position={[0, 0, 9]}></WardBed>
      <WardBed scale={5} position={[0, 0, 12]}></WardBed>
      <WardBed scale={5} position={[0, 0, 15]}></WardBed>
      <WardBed scale={5} position={[0, 0, 18]}></WardBed>
      <WardBed scale={5} position={[0, 0, 21]}></WardBed>
    </group>
  )
}

export default BedRow
