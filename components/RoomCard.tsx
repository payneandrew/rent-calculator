import { RoomUpdateProps } from "@/types/rooms";
import Input from "./Input/Input";
import RadioGroup from "./RadioGroup";

const checkboxes = [
  { label: "Tiny (50 sq ft)", value: "50", weight: 1 },
  { label: "Small (65 sq ft)", value: "65", weight: 1.2 },
  { label: "A bit Small (80 sq ft)", value: "80", weight: 1.4 },
  { label: "Medium (100 sq ft)", value: "100", weight: 1.6 },
  { label: "Generous (125 sq ft)", value: "125", weight: 1.8 },
  { label: "Large (160 sq ft)", value: "160", weight: 2.0 },
  { label: "Enormous (200 sq ft)", value: "200", weight: 2.2 },
];

interface RoomCardProps {
  roomName: string;
  roomCost: number;
  roomSize: string;
  handleChange: (props: RoomUpdateProps) => void;
}

const RoomCard: React.FC<RoomCardProps> = ({
  roomSize,
  roomName,
  roomCost,
  handleChange,
}) => {
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({ roomName: event.target.value });
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({ roomSize: event.target.value });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 md:w-1/2 lg:w-1/3">
      <div className="p-6">
        <ul className="text-gray-700">
          <li>
            <label>
              <span className="pr-2">Room Name</span>
              <Input
                type="text"
                value={roomName}
                onChange={handleNameChange}
              ></Input>
            </label>
          </li>
          <li>
            <div className="flex flex-col space-y-4">
              <h1 className="font-bold">Room Size</h1>
              <label className="flex items-center space-x-2">
                <RadioGroup
                  options={checkboxes}
                  value={roomSize}
                  handleChange={handleSizeChange}
                />
              </label>
            </div>
          </li>
          <li className="pt-2">
            <span className="pr-2">Cost:</span>
            <label>{`$${roomCost.toFixed(2)}`}</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RoomCard;
