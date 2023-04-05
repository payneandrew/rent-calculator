import Checkbox from "./Checkbox";
import Input from "./Input";
import { useState } from "react";

export default function RoomCard(props) {
  const [checkboxValues, setCheckboxValues] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
  });
  const [selectedOption, setSelectedOption] = useState(null);
  function handleCheckboxChange(index, isChecked) {
    setSelectedOption(isChecked ? index : null);
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 md:w-1/2 lg:w-1/3">
      <div className="p-6">
        <ul className="text-gray-700">
          <li>
            <label>
              Room Name
              <Input type="text" value={null} onChange={null}></Input>
            </label>
          </li>
          <li>
            <div className="flex flex-col space-y-4">
              <h1 className="font-bold">Room Size</h1>
              <label className="flex items-center space-x-2">
                <Checkbox
                  isChecked={selectedOption === 1}
                  onChange={(isChecked) => handleCheckboxChange(1, isChecked)}
                />
                <span>Tiny</span>
              </label>
              <label className="flex items-center space-x-2">
                <Checkbox
                  isChecked={selectedOption === 2}
                  onChange={(isChecked) => handleCheckboxChange(2, isChecked)}
                />
                <span>Small</span>
              </label>
              <label className="flex items-center space-x-2">
                <Checkbox
                  isChecked={selectedOption === 3}
                  onChange={(isChecked) => handleCheckboxChange(3, isChecked)}
                />
                <span>Medium</span>
              </label>
              <label className="flex items-center space-x-2">
                <Checkbox
                  isChecked={selectedOption === 4}
                  onChange={(isChecked) => handleCheckboxChange(4, isChecked)}
                />
                <span>Large</span>
              </label>
              <label className="flex items-center space-x-2">
                <Checkbox
                  isChecked={selectedOption === 5}
                  onChange={(isChecked) => handleCheckboxChange(5, isChecked)}
                />
                <span>Extra Large</span>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
