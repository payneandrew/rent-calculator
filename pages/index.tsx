import Button from "@/components/Button";
import Input from "@/components/Input/Input";
import Page from "@/components/Page";
import Select from "@/components/Select";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function Home() {
  const router = useRouter();
  const maxRooms = [2, 3, 4, 5, 6, 7, 8];
  const [rooms, setRooms] = useState(2);
  const [totalRentAmount, setTotalRentAmount] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push({
      pathname: "/room-details",
      query: { rooms: rooms, totalRentAmountQuery: totalRentAmount },
    });
  };

  return (
    <Page title="Rent Calculator">
      <form onSubmit={handleSubmit}>
        <label>
          Enter the total rent: ${" "}
          <Input
            type="number"
            value={totalRentAmount}
            onChange={(event) => setTotalRentAmount(event.target.value)}
          ></Input>
        </label>
        <br />
        <label>
          Number of rooms:
          <Select
            value={rooms}
            onChange={(event) => setRooms(parseInt(event.target.value))}
            options={maxRooms}
          ></Select>
        </label>
        <br />
        <p></p>
        <Button>Next Step</Button>
      </form>
    </Page>
  );
}
