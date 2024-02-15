const exp = require("constants");
const GameBoard = require("../gameboard");
const ship = require("../ship");

describe("Testing gameboard functionality", () => {
  test("Place a ship on the board given two coordinates", () => {
    let battlefield = new GameBoard();
    battlefield.placeship(0, 0, "destroyer", "horizontal");
    expect(battlefield.board[0][0]).toBeInstanceOf(ship);
  });
  test("Receive an attack from a player given two coordinates", () => {
    let battlefield = new GameBoard();
    battlefield.placeship(0, 0, "destroyer", "horizontal");
    battlefield.receiveAttack(0, 0);
    battlefield.receiveAttack(0, 1);
    expect(battlefield.board[0][0]).toBe("H");
    expect(battlefield.board[0][1]).toBe("M");
    expect(battlefield.receiveAttack(0, 1)).toBe("Incorrect");
  });
});
