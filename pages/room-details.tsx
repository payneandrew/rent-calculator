import Page from "@/components/Page";
import RoomCard from "@/components/RoomCard";
import { RoomUpdateProps, RoomsProps } from "@/types/rooms";
import { calculateTotalSquareFootage } from "@/utils/helpers/calculateRentPerSquareFoot";
import { useRouter } from "next/router";
import { useState } from "react";

export default function RoomDetailsPage() {
  const router = useRouter();
  const { rooms: numberOfRooms, totalRentAmount } = router.query;

  function getStringValue(value: string | string[] | undefined): string {
    if (typeof value === "undefined") {
      return "";
    } else if (Array.isArray(value)) {
      return value[0];
    } else {
      return value;
    }
  }

  const rooms = new Array(Number(numberOfRooms)).fill({
    roomCost: Number(totalRentAmount) / Number(numberOfRooms),
    roomName: "",
    roomSize: "100",
  });

  const calculateCostPerRoom = (rooms: RoomsProps[], totalRent: string) => {
    {
      return rooms.map((room) => ({
        ...room,
        roomCost:
          (Number(totalRent) * Number(room.roomSize)) / totalSquareFootage,
      }));
    }
  };

  const [roomProps, setRoomProps] = useState(rooms);
  const [totalSquareFootage, setTotalSquareFootage] = useState(
    calculateTotalSquareFootage(rooms)
  );

  const updateRoomProps = (updatedData: RoomUpdateProps, index: number) => {
    const updatedRoomProps = [...roomProps];
    updatedRoomProps[index] = { ...updatedRoomProps[index], ...updatedData };
    const roomPropsWithTotalRent = calculateCostPerRoom(
      updatedRoomProps,
      getStringValue(totalRentAmount)
    );
    console.log(roomPropsWithTotalRent);
    setRoomProps(roomPropsWithTotalRent);
    const totalSquareFootage = calculateTotalSquareFootage(updatedRoomProps);
    setTotalSquareFootage(totalSquareFootage);
  };

  return (
    <Page title="Rent Calculator">
      <div>Room Details</div>
      <div className="flex flex-wrap justify-center">
        {roomProps.map(({ roomCost, roomName, roomSize }, index) => (
          <RoomCard
            key={index}
            roomSize={roomSize}
            roomName={roomName}
            roomCost={roomCost}
            handleChange={(updatedData) => updateRoomProps(updatedData, index)}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center">{`Total Square Footage: ${totalSquareFootage}`}</div>
      <div className="flex flex-wrap justify-center">{`Total Cost: ${totalRentAmount}`}</div>
    </Page>
  );
}
