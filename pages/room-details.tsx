import Page from "@/components/Page";
import RoomCard from "@/components/RoomCard";
import { BathroomSize, RoomUpdateProps, RoomsProps } from "@/types/rooms";
import { calculateTotalSquareFootage } from "@/utils/helpers/rentCalculator";
import { useRouter } from "next/router";
import { useState } from "react";

// create types for roomSize, bathroomSize

export default function RoomDetailsPage() {
  const router = useRouter();
  const { rooms: numberOfRoomsString, totalRentAmountQuery } = router.query;

  let intialRooms = [];

  const totalRentAmount = Number(totalRentAmountQuery);
  const numberOfRooms = Number(numberOfRoomsString);

  if (numberOfRoomsString !== undefined) {
    intialRooms = new Array(numberOfRooms).fill({
      roomCost: totalRentAmount / numberOfRooms,
      roomName: "",
      roomSize: 100,
      bathroomSize: BathroomSize.None,
    });
  }

  const [rooms, setRooms] = useState(intialRooms);

  const bathroomSizeCost = (roomCost: number, bathroomSize: string) => {
    switch (bathroomSize) {
      case BathroomSize.None:
        return roomCost * 1;
      case BathroomSize.Half:
        return roomCost * 1.1;
      case BathroomSize.Full:
        return roomCost * 1.2;
    }
  };

  const totalSquareFootage = calculateTotalSquareFootage(rooms);
  const roomWithUpdatedRent = rooms.map((room: RoomsProps) => {
    const baseRoomCost = (totalRentAmount * room.roomSize) / totalSquareFootage;
    const adjustedRoomCost = bathroomSizeCost(baseRoomCost, room.bathroomSize);
    console.log(adjustedRoomCost);

    return {
      ...room,
      roomCost: adjustedRoomCost,
    };
  });

  const updateRoom = (updatedData: RoomUpdateProps, index: number) => {
    console.log(updatedData, index);
    const updatedRoomProps = [...rooms];
    updatedRoomProps[index] = { ...updatedRoomProps[index], ...updatedData };
    setRooms(updatedRoomProps);
  };

  return (
    <Page>
      <h1 className="text-2xl text-center font-bold mb-4">Room Details</h1>
      <p className="text-center">{`Total Square Footage: ${totalSquareFootage}`}</p>
      <p className="text-center">{`Total Cost: $${totalRentAmount.toFixed(
        2
      )}`}</p>
      <div className="flex flex-wrap justify-center">
        {roomWithUpdatedRent.map(
          ({ roomCost, roomName, roomSize, bathroomSize }, index) => (
            <RoomCard
              key={index}
              roomSize={roomSize}
              roomName={roomName}
              roomCost={roomCost}
              bathroomSize={bathroomSize}
              handleChange={(updatedData) => updateRoom(updatedData, index)}
            />
          )
        )}
      </div>
    </Page>
  );
}
