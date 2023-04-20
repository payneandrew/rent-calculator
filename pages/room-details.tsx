import Input from "@/components/Input/Input";
import Page from "@/components/Page";
import RoomCard from "@/components/RoomCard";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from "@/components/Button";

export default function RoomDetailsPage() {
  const router = useRouter();
  const { rooms: numberOfRooms, totalRentAmount } = router.query;

  const roomDetails = { costPerRoom: 0, roomName: "", roomSize: "100" };
  const rooms = [];

  for (let i = 0; i < Number(numberOfRooms); i++) {
    rooms.push(roomDetails);
  }

  rooms.forEach(
    (room) => (room.costPerRoom = Number(totalRentAmount) / rooms.length)
  );

  return (
    <Page title="Rent Calculator">
      <div>Room Details</div>
      <div className="flex flex-wrap justify-center">
        {rooms.map(({ costPerRoom, roomName, roomSize }) => (
          <RoomCard size={roomSize} name={roomName} cost={costPerRoom} />
        ))}
      </div>
    </Page>
  );
}
