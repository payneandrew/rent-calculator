import CheckboxGroup from "./CheckboxGroup";
import Checkbox from "./CheckboxGroup";
import { useState } from "react";
import Input from "./Input/Input";
import { NumberLiteralType } from "typescript";
import { calculateRentPerSquareFoot } from "@/utils/helpers/calculateRentPerSquareFoot";

const checkboxes = [
  { label: "Tiny (50 sq ft)", value: "50" },
  { label: "Small (65 sq ft)", value: "65" },
  { label: "A bit Small (80 sq ft)", value: "80" },
  { label: "Medium (100 sq ft)", value: "100" },
  { label: "Generous (125 sq ft)", value: "125" },
  { label: "Large (160 sq ft)", value: "160" },
  { label: "Enormous (200 sq ft)", value: "200" },
];

const roomSizeOptions = [
  { label: "Tiny (50 sq ft)", value: 50 },
  { label: "Small (65 sq ft)", value: 65 },
  { label: "A bit Small (80 sq ft)", value: 80 },
  { label: "Medium (100 sq ft)", value: 100 },
  { label: "Generous (125 sq ft)", value: 125 },
  { label: "Large (160 sq ft)", value: 160 },
  { label: "Enormous (200 sq ft)", value: 200 },
];

const selectedOptions = [
  { roomSize: 100, roomName: "Henry" },
  { roomSize: 200, roomName: "John" },
  { roomSize: 160, roomName: "Henry" },
];

calculateRentPerSquareFoot(selectedOptions, 4000);

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
