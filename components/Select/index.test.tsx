import { faker } from "@faker-js/faker";
import { fireEvent, render } from "@testing-library/react";
import Select from ".";

describe("Select", () => {
  const mockHandleChange = jest.fn();

  const randomOptionsRange = faker.datatype.number({ min: 2, max: 8 });

  const testProps = {
    options: [2, 3, 4, 5, 6, 7, 8],
    value: randomOptionsRange,
    onChange: mockHandleChange,
  };

  it("renders the correct number of options", () => {
    const { getAllByRole } = render(<Select {...testProps} />);
    const options = getAllByRole("option");
    expect(options.length).toEqual(testProps.options.length);
  });

  it("renders the correct selected option", () => {
    const { getByDisplayValue } = render(<Select {...testProps} />);
    const selectedOption = getByDisplayValue(testProps.value.toString());
    expect(selectedOption).toBeInTheDocument();
  });

  it("triggers onChange when a different option is selected", () => {
    const { getByRole } = render(<Select {...testProps} />);
    const select = getByRole("combobox");
    fireEvent.change(select, {
      target: { value: randomOptionsRange },
    });
    expect(mockHandleChange).toHaveBeenCalled();
  });
});
