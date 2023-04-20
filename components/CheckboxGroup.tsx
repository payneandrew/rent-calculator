import React, { useState } from "react";

interface CheckboxGroupProps {
  options: { value: string; label: string }[];
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => {
  const [checked, setChecked] = useState("");
  //console.log(checked);
  const [checkedValues, setCheckedValues] = useState<string[]>([]);
  console.log(checkedValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value);
    // on change of the radio button, add the checked value to an array
    if (event.target.value) {
      setCheckedValues([...checkedValues, event.target.value]);
    } else {
      setCheckedValues(
        checkedValues.filter((value) => value !== event.target.value)
      );
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      {props.options.map((option) => (
        <label key={option.value} className="inline-flex items-center">
          <input
            type="radio"
            value={option.value}
            checked={checked === option.value}
            onChange={handleChange}
          />
          <span className="ml-2">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default CheckboxGroup;
