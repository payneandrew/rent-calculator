import Page from "@/components/Page";
import RoomCard from "@/components/RoomCard/RoomCard";
import { BathroomSize, RoomProps } from "@/types/rooms";
import { bathroomSizeCost } from "@/utils/helpers/bathroomSizeCost/bathroomSizeCost";
import { convertToCurrency } from "@/utils/helpers/currencyHelper/currencyHelper";
import { calculateTotalSquareFootage } from "@/utils/helpers/rentCalculator/rentCalculator";
import { useRouter } from "next/router";
import { useState } from "react";

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
  const roomWithUpdatedRent = rooms.map((room: RoomProps) => {
    const baseRoomCost = (totalRentAmount * room.roomSize) / totalSquareFootage;
    const adjustedRoomCost = bathroomSizeCost(baseRoomCost, room.bathroomSize);

    return {
      ...room,
      roomCost: adjustedRoomCost,
    };
  });

  const updateRoom = (updatedData: Partial<RoomProps>, index: number) => {
    console.log(updatedData, index);
    const updatedRoomProps = [...rooms];
    updatedRoomProps[index] = { ...updatedRoomProps[index], ...updatedData };
    setRooms(updatedRoomProps);
  };

  return (
    <Page>
      <h1 className="text-2xl text-center font-bold mb-4">Room Details</h1>
      <p className="text-center">{`Total Square Footage: ${totalSquareFootage}`}</p>
      <p className="text-center">{`Total Cost: ${convertToCurrency(
        totalRentAmount
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
