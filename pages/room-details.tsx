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

  const rooms = new Array(numberOfRooms).fill({
    roomCost: totalRentAmount / numberOfRooms,
    roomName: "",
    roomSize: "100",
  });

  const [roomProps, setRoomProps] = useState(rooms);

  const { totalSquareFootage, roomPropsWithTotalRent } = useMemo(() => {
    const totalSquareFootage = calculateTotalSquareFootage(roomProps);
    const roomPropsWithTotalRent = roomProps.map((room) => ({
      ...room,
      roomCost: (totalRentAmount * Number(room.roomSize)) / totalSquareFootage,
    }));
    return { totalSquareFootage, roomPropsWithTotalRent };
  }, [roomProps, totalRentAmount]);

  const updateRoomProps = (updatedData: RoomUpdateProps, index: number) => {
    const updatedRoomProps = [...roomProps];
    updatedRoomProps[index] = { ...updatedRoomProps[index], ...updatedData };
    setRoomProps(updatedRoomProps);
  };

  return (
    <Page title="Rent Calculator">
      <div>Room Details</div>
      <div className="flex flex-wrap justify-center">
        {roomPropsWithTotalRent.map(
          ({ roomCost, roomName, roomSize }, index) => (
            <RoomCard
              key={index}
              roomSize={roomSize}
              roomName={roomName}
              roomCost={roomCost}
              handleChange={(updatedData) =>
                updateRoomProps(updatedData, index)
              }
            />
          )
        )}
      </div>
      <div className="flex flex-wrap justify-center">{`Total Square Footage: ${totalSquareFootage}`}</div>
      <div className="flex flex-wrap justify-center">{`Total Cost: ${totalRentAmount.toFixed(
        2
      )}`}</div>
    </Page>
  );
}
