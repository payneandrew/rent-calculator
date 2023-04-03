import React, { useState } from "react";

function CheckboxComponent() {
  const [checkboxValues, setCheckboxValues] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues({
      ...checkboxValues,
      [name]: checked,
    });
  };

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="font-bold">Room Size</h1>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="checkbox1"
          checked={checkboxValues.checkbox1}
          onChange={handleCheckboxChange}
          className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
        />
        <span>Tiny</span>
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="checkbox2"
          checked={checkboxValues.checkbox2}
          onChange={handleCheckboxChange}
          className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
        />
        <span>Small</span>
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="checkbox3"
          checked={checkboxValues.checkbox3}
          onChange={handleCheckboxChange}
          className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
        />
        <span>Medium</span>
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="checkbox4"
          checked={checkboxValues.checkbox4}
          onChange={handleCheckboxChange}
          className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
        />
        <span>Large</span>
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="checkbox5"
          checked={checkboxValues.checkbox5}
          onChange={handleCheckboxChange}
          className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
        />
        <span>Extra Large</span>
      </label>
    </div>
  );
}

export default CheckboxComponent;
