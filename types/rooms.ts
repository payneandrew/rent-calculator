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
