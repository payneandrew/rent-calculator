import { RoomUpdateProps } from "@/types/rooms";
import Input from "./Input/Input";
import RadioGroup from "./RadioGroup";

const checkboxes = [
  { label: "Tiny (50 sq ft)", value: 50 },
  { label: "Small (65 sq ft)", value: 65 },
  { label: "A bit Small (80 sq ft)", value: 80 },
  { label: "Medium (100 sq ft)", value: 100 },
  { label: "Generous (125 sq ft)", value: 125 },
  { label: "Large (160 sq ft)", value: 160 },
  { label: "Enormous (200 sq ft)", value: 200 },
];

interface RoomCardProps {
  roomName: string;
  roomCost: number;
  roomSize: number;
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
    handleChange({ roomSize: parseInt(event.target.value) });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 md:w-1/2 lg:w-1/3">
      <div className="p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-lg">Room Name</h2>
            <Input type="text" value={roomName} onChange={handleNameChange} />
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-lg">Room Size</h2>
            <RadioGroup
              options={checkboxes}
              value={roomSize}
              handleChange={handleSizeChange}
            />
          </div>
          <div className="flex justify-between">
            <h2 className="font-bold text-lg">Cost</h2>
            <span className="text-gray-700">{`$${roomCost.toFixed(2)}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
