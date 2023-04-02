import Image from "next/image";
import CheckboxComponent from "./CheckBoxes";
import Input from "./Input";

export default function RoomCard() {
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
            <CheckboxComponent />
          </li>
        </ul>
      </div>
    </div>
  );
}
