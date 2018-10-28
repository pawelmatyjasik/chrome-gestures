import { isHorizontalSwipe, isForward } from "./gestures";

describe("horizontal swipe recognition", () => {
  it("recognizes horizontal swipe when delta x over threshold", () => {
    expect(isHorizontalSwipe(2, 0)).toBe(true);
  });

  it("ignores horizontal swipe when delta x under threshold", () => {
    expect(isHorizontalSwipe(0.5, 0)).toBe(false);
  });

  it("ignores skew swipe", () => {
    expect(isHorizontalSwipe(2.2, 2)).toBe(false);
  });
});

describe("forward swipe recognition", () => {
  it("recognizes forward swipe when delta x positive", () => {
    expect(isForward(1.4).toBe(true));
  });

  it("denies forward swipe when delta x negative", () => {
    expect(isForward(-1.2).toBe(false));
  });
});
