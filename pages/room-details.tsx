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
    roomSize: 100,
  });

  const [roomProps, setRoomProps] = useState(rooms);

  const updateRoomProps = () => {
    setRoomProps();
  };
  // call set rooms props with the updated array we get from roomcard

  return (
    <Page title="Rent Calculator">
      <div>Room Details</div>
      <div className="flex flex-wrap justify-center">
        {roomProps.map(({ costPerRoom, roomName, roomSize }) => (
          <RoomCard
            size={roomSize}
            name={roomName}
            cost={costPerRoom}
            handleChange={updateRoomProps}
          />
        ))}
      </div>
    </Page>
  );
}
