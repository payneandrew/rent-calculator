import Page from "@/components/Page";
import RoomCard from "@/components/RoomCard";
import { RoomUpdateProps } from "@/types/rooms";
import { calculateTotalSquareFootage } from "@/utils/helpers/calculateRentPerSquareFoot";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";

export default function RoomDetailsPage() {
  const router = useRouter();
  const { rooms: numberOfRoomsString, totalRentAmountQuery } = router.query;

  const totalRentAmount = Number(totalRentAmountQuery);
  const numberOfRooms = Number(numberOfRoomsString);

  const intialRooms = new Array(numberOfRooms).fill({
    roomCost: totalRentAmount / numberOfRooms,
    roomName: "",
    roomSize: 100,
  });

  const [rooms, setRoomProps] = useState(intialRooms);

  const { totalSquareFootage, roomWithUpdatedRent } = useMemo(() => {
    const totalSquareFootage = calculateTotalSquareFootage(rooms);
    const roomWithUpdatedRent = rooms.map((room) => ({
      ...room,
      roomCost: (totalRentAmount * room.roomSize) / totalSquareFootage,
    }));
    return { totalSquareFootage, roomWithUpdatedRent };
  }, [rooms, totalRentAmount]);

  const updateRoom = (updatedData: RoomUpdateProps, index: number) => {
    const updatedRoomProps = [...rooms];
    updatedRoomProps[index] = { ...updatedRoomProps[index], ...updatedData };
    setRoomProps(updatedRoomProps);
  };

  return (
    <Page>
      <h1 className="text-2xl text-center font-bold mb-4">Room Details</h1>
      <p className="text-center">{`Total Square Footage: ${totalSquareFootage}`}</p>
      <p className="text-center">{`Total Cost: $${totalRentAmount.toFixed(
        2
      )}`}</p>
      <div className="flex flex-wrap justify-center">
        {roomWithUpdatedRent.map(({ roomCost, roomName, roomSize }, roomId) => (
          <RoomCard
            key={roomId}
            roomSize={roomSize}
            roomName={roomName}
            roomCost={roomCost}
            handleChange={(updatedData) => updateRoom(updatedData, roomId)}
          />
        ))}
      </div>
    </Page>
  );
}
