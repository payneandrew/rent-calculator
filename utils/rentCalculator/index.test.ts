import { BathroomSize, RoomProps } from "@/types/rooms";
import { calculateTotalSquareFootage } from ".";

describe("calculateTotalSquareFootage", () => {
  it("calculates total square footage correctly with 0 rooms", () => {
    const rooms: RoomProps[] = [];

    const totalSquareFootage = calculateTotalSquareFootage(rooms);

    expect(totalSquareFootage).toEqual(0);
  });

  it("calculates total square footage correctly with a room size of 0", () => {
    const rooms: RoomProps[] = [
      {
        roomCost: 300,
        roomName: "",
        roomSize: 0,
        bathroomSize: BathroomSize.None,
      },
    ];

    const totalSquareFootage = calculateTotalSquareFootage(rooms);

    expect(totalSquareFootage).toEqual(0);
  });

  it("calculates total square footage correctly with 1 room", () => {
    const rooms: RoomProps[] = [
      {
        roomCost: 300,
        roomName: "",
        roomSize: 100,
        bathroomSize: BathroomSize.None,
      },
    ];

    const totalSquareFootage = calculateTotalSquareFootage(rooms);

    expect(totalSquareFootage).toEqual(100);
  });

  it("calculates total square footage correctly with 3 rooms", () => {
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
