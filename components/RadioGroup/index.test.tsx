import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import RadioGroup from ".";
import { roomSizeRadioGroup } from "../RoomCard";

describe("Room Card Tests", () => {
  const mockHandleChange = jest.fn();
  it("renders the correct number of radio buttons", () => {
    const { getAllByRole } = render(
      <RadioGroup
        options={roomSizeRadioGroup}
        value={60}
        handleChange={mockHandleChange}
      />
    );
    const radioButtons = getAllByRole("radio");
    expect(radioButtons.length).toEqual(roomSizeRadioGroup.length);
  });

  it("renders the correct labels", () => {
    const { getByText } = render(
      <RadioGroup
        options={roomSizeRadioGroup}
        value={60}
        handleChange={mockHandleChange}
      />
    );
    roomSizeRadioGroup.forEach((option) => {
      expect(getByText(option.label)).toBeInTheDocument();
    });
  });
  it("triggers handleChange when a radio button is clicked", () => {
    const { getByLabelText } = render(
      <RadioGroup
        options={roomSizeRadioGroup}
        value={60}
        handleChange={mockHandleChange}
      />
    );
    fireEvent.click(getByLabelText(roomSizeRadioGroup[0].label));
    expect(mockHandleChange).toHaveBeenCalled();
  });
});
