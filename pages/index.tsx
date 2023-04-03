import Page from "@/components/Page";
import { useRouter } from "next/router";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { FormEvent, useState, createContext } from "react";
import Select from "@/components/Select";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const maxRooms = [2, 3, 4, 5, 6, 7, 8];
  const [totalRentAmount, setTotalRentAmount] = useState("");
  const [rooms, setRooms] = useState(2);

  //const ClickContext = createContext(0, () => {});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push({ pathname: "/room-details", search: `?rooms=${rooms}` });
    console.log("totalRentAmount", totalRentAmount);
    console.log("rooms", rooms);
  };

  return (
    <Page title="Rent Calculator">
      <form onSubmit={handleSubmit}>
        <label>
          Enter the total rent: $
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
