import React, { useState } from "react";
import Button from "./Button";
import { useRouter } from "next/router";

export default function FormComponent() {
  const router = useRouter();
  const [totalRentAmount, setTotalRentAmount] = useState("");
  const [rooms, setRooms] = useState(2);

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("/room-details");
    console.log("totalRentAmount", totalRentAmount);
    console.log("rooms", rooms);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter the total rent: $
        <input
          type="number"
          value={totalRentAmount}
          onChange={(event) => setTotalRentAmount(event.target.value)}
        />
      </label>
      <br />
      <label>
        Number of rooms:
        <select
          value={rooms}
          onChange={(event) => setRooms(parseInt(event.target.value))}
        >
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </label>
      <br />
      <p></p>
      <Button>Next Step</Button>
    </form>
  );
}

FormComponent;
