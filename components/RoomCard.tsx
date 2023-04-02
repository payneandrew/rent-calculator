import Image from "next/image";

export default function RoomCard() {
  return (
    <div className="border my-4 w-80 shadow hover:shadow-xl">
      <div className="p-2 flex justify-between items-baseline">
        <h2 className="text-lg font-bold">Info</h2>
        <span>Info 2</span>
      </div>
    </div>
  );
}
