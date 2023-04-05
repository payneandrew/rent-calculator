import React, { useState } from "react";

interface CheckboxProps {
  label: string;
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
}

export default function Checkbox(props: CheckboxProps) {
  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (props.onChange) {
      props.onChange(event.target.checked);
    }
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={props.isChecked}
          onChange={handleCheckboxChange}
        />
        {props.label}
      </label>
    </div>
  );
}
