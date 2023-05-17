import { BathroomSize, RoomProps } from "@/types/rooms";
import { calculateTotalSquareFootage } from "./rentCalculator";

describe("calculateTotalSquareFootage", () => {
  it("calculates total square footage correctly", () => {
    const rooms: RoomProps[] = [
      {
        roomCost: 0,
        roomName: "",
        roomSize: 100,
        bathroomSize: BathroomSize.None,
      },
      {
        roomSize: 200,
        roomName: "Room 2",
        roomCost: 200,
        bathroomSize: BathroomSize.None,
      },
      {
        roomSize: 300,
        roomName: "Room 3",
        roomCost: 300,
        bathroomSize: BathroomSize.None,
      },
    ];

    const totalSquareFootage = calculateTotalSquareFootage(rooms);

    expect(totalSquareFootage).toEqual(600);
  });
});
