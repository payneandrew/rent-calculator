import { BathroomSize, RoomProps, RoomSize } from "@/types/rooms";
import { convertToCurrency } from "@/utils/helpers/currencyHelper/currencyHelper";
import Input from "../Input/Input";
import RadioGroup from "../RadioGroup";

const bathroomSizeRadioGroup = Object.entries(BathroomSize).map(
  ([label, value]) => ({ label, value })
);

export const roomSizeRadioGroup = Object.entries(RoomSize)
  .filter(([key]) => isNaN(Number(key))) // Filter out the numeric key-value pairs
  .map(([key, value]) => ({
    label: `${key} (${value} sq ft)`,
    value: Number(value),
  }));

interface RoomCardProps extends RoomProps {
  handleChange: (props: Partial<RoomProps>) => void;
}

const RoomCard: React.FC<RoomCardProps> = ({
  roomSize,
  roomName,
  roomCost,
  bathroomSize,
  handleChange,
}) => {
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({ roomName: event.target.value });
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({ roomSize: parseInt(event.target.value) });
  };

  const handleBathroomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({ bathroomSize: event.target.value as BathroomSize });
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
              options={roomSizeRadioGroup}
              value={roomSize}
              handleChange={handleSizeChange}
            />
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-lg">Bathroom</h2>
            <RadioGroup
              options={bathroomSizeRadioGroup}
              value={bathroomSize}
              handleChange={handleBathroomChange}
            />
          </div>
          <div className="flex justify-between">
            <h2 className="font-bold text-lg">Cost</h2>
            <span className="text-gray-700">{`${convertToCurrency(
              roomCost
            )}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
