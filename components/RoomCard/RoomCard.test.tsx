import { BathroomSize } from "@/types/rooms";
import { faker } from "@faker-js/faker";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import RoomCard from "./RoomCard";

const { roomCost, roomName, roomSize, bathroomSize, handleChange } = {
  roomCost: 0,
  roomName: "",
  roomSize: 100,
  bathroomSize: BathroomSize.None,
  handleChange: jest.fn(),
};

describe("Room Card Tests", () => {
  it("should handle change from input field", () => {
    const inputValue = faker.random.word();

    render(
      <RoomCard
        roomSize={roomSize}
        roomName={roomName}
        roomCost={roomCost}
        bathroomSize={bathroomSize}
        handleChange={handleChange}
      />
    );

    const nameInput = screen.getByRole("textbox");
    fireEvent.change(nameInput, { target: { value: inputValue } });

    expect(handleChange).toHaveBeenCalledWith({ roomName: inputValue });
  });
});
