import { RoomsProps } from "@/types/rooms";

export const calculateTotalSquareFootage = (rooms: RoomsProps[]) => {
  return rooms
    .map((room) => Number(room.roomSize))
    .reduce(function (a, b) {
      return a + b;
    }, 0);
};
