const { default: expect } = require("expect");
const ship = require("../ship");

describe("Suite of tests to check ship functionality", () => {
  test("Hit function should increase its hits property by 1", () => {
    let newShip = new ship(4);
    let initalHits = newShip.hits;
    newShip.hit();
    expect(newShip.hits).toBe(initalHits + 1);
  });

  test("Ship successfully sinks when its received the same hits as its length", () => {
    let newShip = new ship(2);
    newShip.hit();
    newShip.hit();
    expect(newShip.isSunk()).toBe(true);
  });
});
