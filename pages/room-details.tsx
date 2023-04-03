import Input from "@/components/Input";
import Page from "@/components/Page";
import RoomCard from "@/components/RoomCard";
import React from "react";

const roomCount = 5;
const roomCountArray = Array.from(
  { length: roomCount },
  (_, index) => index + 1
);

export default function RoomDetailsPage() {
  console.log("props");
  return (
    <Page title="Rent Calculator">
      <div>Room Details</div>
      <div>
        {roomCountArray.map((room) => (
          <RoomCard key={room}></RoomCard>
        ))}
      </div>
    </Page>
  );
}
