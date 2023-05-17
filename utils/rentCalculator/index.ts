import { RoomProps } from "@/types/rooms";

export const calculateTotalSquareFootage = (rooms: RoomProps[]) => {
  return rooms
    .map((room) => Number(room.roomSize))
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
};
