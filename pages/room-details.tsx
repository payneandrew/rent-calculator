import Page from "@/components/Page";
import RoomCard from "@/components/RoomCard";
import { BathroomSize, RoomUpdateProps } from "@/types/rooms";
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

  const totalSquareFootage = calculateTotalSquareFootage(rooms);
  const roomWithUpdatedRent = rooms.map((room) => ({
    ...room,
    roomCost: (totalRentAmount * room.roomSize) / totalSquareFootage,
  }));

  const updateRoom = (updatedData: RoomUpdateProps, index: number) => {
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
