import { BathroomSize } from "@/types/rooms";
import { multiply } from "../currencyHelper";

export const bathroomSizeCost = (
  roomCost: number,
  bathroomSize: BathroomSize
) => {
  switch (bathroomSize) {
    case BathroomSize.None:
      return multiply(roomCost, 1);
    case BathroomSize.Half:
      return multiply(roomCost, 1.1);
    case BathroomSize.Full:
      return multiply(roomCost, 1.2);
  }
};
