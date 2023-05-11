import { BathroomSize } from "@/types/rooms";

export const bathroomSizeCost = (
  roomCost: number,
  bathroomSize: BathroomSize
) => {
  switch (bathroomSize) {
    case BathroomSize.None:
      return roomCost * 1;
    case BathroomSize.Half:
      return roomCost * 1.1;
    case BathroomSize.Full:
      return roomCost * 1.2;
  }
};
