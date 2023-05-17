import { BathroomSize } from "@/types/rooms";
import { bathroomSizeCost } from ".";

describe("bathroomSizeCost", () => {
  it("calculates cost correctly for no bathroom", () => {
    const cost = bathroomSizeCost(100, BathroomSize.None);
    expect(cost).toEqual(100);
  });

  it("calculates cost correctly for no bathroom", () => {
    const cost = bathroomSizeCost(100, BathroomSize.Half);
    expect(cost).toEqual(110);
  });

  it("calculates cost correctly for full bathroom", () => {
    const cost = bathroomSizeCost(100, BathroomSize.Full);
    expect(cost).toEqual(120);
  });
});
