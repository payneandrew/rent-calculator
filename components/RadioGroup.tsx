import React, { useState } from "react";

interface RadioGroupProps {
  options: { value: string; label: string }[];
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  handleChange,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <label key={option.value} className="inline-flex items-center">
          <input
            type="radio"
            value={option.value}
            checked={value === option.value}
            onChange={handleChange}
          />
          <span className="ml-2">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
