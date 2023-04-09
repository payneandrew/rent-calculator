import Input from "@/components/Input/Input";
import Page from "@/components/Page";
import RoomCard from "@/components/RoomCard";
import React from "react";
import { useRouter } from "next/router";

export default function RoomDetailsPage() {
  const router = useRouter();
  const { rooms, totalRentAmount } = router.query;
  const roomCountArray = Array.from(
    { length: Number(rooms) },
    (_, index) => index + 1
  );

  return (
    <Page title="Rent Calculator">
      <div>Room Details</div>
      <div className="flex flex-wrap justify-center">
        {roomCountArray.map((room) => (
          <RoomCard
            key={room}
            totalRentAmount={Number(totalRentAmount)}
            rooms={Number(rooms)}
          ></RoomCard>
        ))}
      </div>
    </Page>
  );
}
