import { BathroomSize } from "@/types/rooms";
import { bathroomSizeCost } from ".";

describe("bathroomSizeCost", () => {
  test("calculates cost correctly for no bathroom", () => {
    const cost = bathroomSizeCost(100, BathroomSize.None);
    expect(cost).toEqual(100);
  });

  test("calculates cost correctly for full bathroom", () => {
    const cost = bathroomSizeCost(100, BathroomSize.Full);
    expect(cost).toEqual(120);
  });
});
