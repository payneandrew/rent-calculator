import Input from "@/components/Input";
import Page from "@/components/Page";
import RoomCard from "@/components/RoomCard";
import React from "react";
import { useRouter } from "next/router";

export default function RoomDetailsPage() {
  const router = useRouter();
  const { rooms } = router.query;
  const roomCountArray = Array.from(
    { length: parseInt(rooms) },
    (_, index) => index + 1
  );

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
