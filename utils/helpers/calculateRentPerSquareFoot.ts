import { RoomsProps } from "@/types/rooms";

interface calculateRentProps {
  roomSize: number;
  roomName: string;
}

// Calculate rent based on square footage
export const calculateRentPerSquareFoot = (
  selectedOptions: calculateRentProps[],
  totalRentAmount: number
) => {
  const totalSquareFootage: number = selectedOptions
    .map((option) => option.roomSize)
    .reduce(function (a, b) {
      return a + b;
    });
  const rentPerSquareFoot = totalRentAmount / totalSquareFootage;
  console.log("Rent per square foot", rentPerSquareFoot);
};

export const calculateTotalSquareFootage = (rooms: RoomsProps[]) => {
  return rooms
    .map((room) => Number(room.roomSize))
    .reduce(function (a, b) {
      return a + b;
    });
};
