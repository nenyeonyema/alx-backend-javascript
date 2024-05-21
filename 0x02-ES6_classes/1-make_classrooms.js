// Implements a function named initializeRooms
import ClassRoom from './0-classroom.js';


export default function initializeRooms() {
  // const roomSizes = [19, 20, 34];
  //return roomSizes.map(size => new ClassRoom(size));
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);
  return [room1, room2, room3];
}
