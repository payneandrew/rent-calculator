export const roomSizeRadioGroup = [
  { label: "Tiny (50 sq ft)", value: 50 },
  { label: "Small (65 sq ft)", value: 65 },
  { label: "Schmedium (80 sq ft)", value: 80 },
  { label: "Medium (100 sq ft)", value: 100 },
  { label: "Generous (125 sq ft)", value: 125 },
  { label: "Large (160 sq ft)", value: 160 },
  { label: "Enormous (200 sq ft)", value: 200 },
];

export enum RoomSize {
  Tiny = 50,
  Small = 65,
  Schmedium = 80,
  Medium = 100,
  Generous = 125,
  Large = 160,
  Enormous = 200,
}

export enum BathroomSize {
  None = "none",
  Half = "half",
  Full = "full",
}

export interface RoomProps {
  roomName: string;
  roomCost: number;
  roomSize: number;
  bathroomSize: BathroomSize;
}
