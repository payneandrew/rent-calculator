import { faker } from "@faker-js/faker";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import Input from ".";

describe("Input", () => {
  const mockHandleChange = jest.fn();

  const randomText = faker.lorem.words(3);

  const testProps = {
    value: randomText,
    type: "text",
    onChange: mockHandleChange,
  };

  it("renders the input with correct type", () => {
    const { getByRole } = render(<Input {...testProps} />);
    const input = getByRole("textbox");
    expect(input).toHaveAttribute("type", "text");
  });

  it("renders the input with the correct value", () => {
    const { getByRole } = render(<Input {...testProps} />);
    const input = getByRole("textbox");
    expect(input).toHaveValue(randomText);
  });

  it("calls onChange handler when input value is changed", () => {
    const { getByRole } = render(<Input {...testProps} />);
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(mockHandleChange).toHaveBeenCalled();
  });
});
