import Input from "@/components/Input/Input";
import Page from "@/components/Page";
import RoomCard from "@/components/RoomCard";
import React from "react";
import { useRouter } from "next/router";
import Button from "@/components/Button";

export default function RoomDetailsPage() {
  const router = useRouter();
  const { rooms, totalRentAmount } = router.query;
  const roomCountArray = Array.from(
    { length: Number(rooms) },
    (_, index) => index + 1
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit clicked");
  };

  // create an object that contains the size of each room and name of each room upon saving
  return (
    <Page title="Rent Calculator">
      <div>Room Details</div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap justify-center">
          {roomCountArray.map((room) => (
            <RoomCard
              key={room}
              totalRentAmount={Number(totalRentAmount)}
              rooms={Number(rooms)}
            ></RoomCard>
          ))}
        </div>
        <Button>Submit</Button>
      </form>
    </Page>
  );
}
