import { RoomsProps } from "@/types/rooms";

export const calculateTotalSquareFootage = (rooms: RoomsProps[]) => {
  return rooms
    .map((room) => Number(room.roomSize))
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
};
