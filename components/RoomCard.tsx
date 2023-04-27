import Input from "./Input/Input";
import RadioGroup from "./RadioGroup";

const checkboxes = [
  { label: "Tiny (50 sq ft)", value: "50" },
  { label: "Small (65 sq ft)", value: "65" },
  { label: "A bit Small (80 sq ft)", value: "80" },
  { label: "Medium (100 sq ft)", value: "100" },
  { label: "Generous (125 sq ft)", value: "125" },
  { label: "Large (160 sq ft)", value: "160" },
  { label: "Enormous (200 sq ft)", value: "200" },
];

// move this interface to be a global interface
interface HandleChangeProps {
  roomName?: string;
  roomSize?: string;
}
interface RoomCardProps {
  roomName: string;
  roomCost: number;
  roomSize: string;
  handleChange: (props: HandleChangeProps) => void;
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
            <label>{`$${roomCost}`}</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RoomCard;
