import RadioGroup from "@/components/RadioGroup";
import { RoomSize } from "@/types/rooms";

const roomSizeRadioGroup = Object.entries(RoomSize)
  .filter(([key]) => isNaN(Number(key))) // Filter out the numeric key-value pairs
  .map(([key, value]) => ({
    label: `${key} (${value} sq ft)`,
    value: Number(value),
  }));

describe("<RadioGroup />", () => {
  it("renders", () => {
    cy.mount(
      <RadioGroup
        options={roomSizeRadioGroup}
        value={100}
        handleChange={() => {}}
      />
    );
  });
});
