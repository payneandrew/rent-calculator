import CheckboxGroup from "./CheckboxGroup";
import Checkbox from "./CheckboxGroup";
import { useState } from "react";
import Input from "./Input/Input";
import { NumberLiteralType } from "typescript";

const checkboxes = [
  { label: "Tiny", value: "option1" },
  { label: "Small", value: "option2" },
  { label: "Medium", value: "option3" },
  { label: "Large", value: "option4" },
  { label: "Extra Large", value: "option5" },
];

interface RoomCardProps {
  totalRentAmount: number;
  rooms: number;
}

const RoomCard: React.FC<RoomCardProps> = ({ totalRentAmount, rooms }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 md:w-1/2 lg:w-1/3">
      <div className="p-6">
        <ul className="text-gray-700">
          <li>
            <label>
              <span className="pr-2">Room Name</span>
              <Input type="text"></Input>
            </label>
          </li>
          <li>
            <div className="flex flex-col space-y-4">
              <h1 className="font-bold">Room Size</h1>
              <label className="flex items-center space-x-2">
                <CheckboxGroup options={checkboxes} />
              </label>
            </div>
          </li>
          <li className="pt-2">
            <span className="pr-2">Cost:</span>
            <label>{`$${totalRentAmount / rooms}`}</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RoomCard;
