import Page from "@/components/Page";
import RoomCard from "@/components/RoomCard";
import { useRouter } from "next/router";
import { useState } from "react";

export default function RoomDetailsPage() {
  const router = useRouter();
  const { rooms: numberOfRooms, totalRentAmount } = router.query;

  const rooms = new Array(Number(numberOfRooms)).fill({
    costPerRoom: Number(totalRentAmount) / Number(numberOfRooms),
    roomName: "",
    roomSize: "100",
  });

  const [roomProps, setRoomProps] = useState(rooms);

  const updateRoomProps = (updatedData: any, index: number) => {
    const updatedRoomProps = [...roomProps];
    updatedRoomProps[index] = { ...updatedRoomProps[index], ...updatedData };
    setRoomProps(updatedRoomProps);
  };

  console.log(roomProps);

  return (
    <Page title="Rent Calculator">
      <div>Room Details</div>
      <div className="flex flex-wrap justify-center">
        {roomProps.map(({ costPerRoom, roomName, roomSize }, index) => (
          // eslint-disable-next-line react/jsx-key
          <RoomCard
            roomSize={roomSize}
            roomName={roomName}
            roomCost={costPerRoom}
            handleChange={(updatedData) => updateRoomProps(updatedData, index)}
          />
        ))}
      </div>
    </Page>
  );
}
