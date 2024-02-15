const gameBoard = require("./gameboard");

class player {
  constructor() {
    this.turn = true;
    this.board = new gameBoard();
  }

  randomships() {
    let ships = ["carrier", "destroyer", "submarine", "cruiser", "battleship"];
    ships.forEach((ship) => {
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      let orientation = Math.random() < 0.5 ? "horizontal" : "vertical";
      this.board.placeship(x, y, ship, orientation);
    });
    this.board.printBoard();
  }

  takeTurn(x, y) {
    while (this.turn) {
      let attack = this.board.receiveAttack(x, y);
      if (attack === "Incorrect") {
        return;
      } else {
        this.turn = false;
        this.board.printBoard();
        return attack;
      }
    }
  }
}

module.exports = player;
