import React, { useState } from "react";
import Button from "./Button";
import { useRouter } from "next/router";
import Input from "./Input";
import Select from "./Select";
import { useNavigate } from "react-router-dom";

export default function FormComponent({ selectorValues }) {
  const router = useRouter();
  const [totalRentAmount, setTotalRentAmount] = useState("");
  const [rooms, setRooms] = useState(2);

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push({ pathname: "/room-details", query: { rooms: rooms } });
    console.log("totalRentAmount", totalRentAmount);
    console.log("rooms", rooms);
  };

  return (
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
          options={selectorValues}
        ></Select>
      </label>
      <br />
      <p></p>
      <Button>Next Step</Button>
    </form>
  );
}

FormComponent;
