const ship = require("./ship");

class GameBoard {
  constructor() {
    this.size = 10;
    this.board = this.createBoard(this.size);
    this.attacks = new Set();
    this.missed = new Set();
  }

  shiptypes = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2,
  };

  createBoard(size) {
    const board = [];
    for (let i = 0; i <= size; i++) {
      board.push(Array(size).fill("."));
    }
    return board;
  }

  placeship(x, y, type, orientation) {
    let newShip = new ship(this.shiptypes[type]);

    let collisionDetected = true;
    while (collisionDetected) {
      if (!this.checkCollision(x, y, newShip.length, orientation)) {
        collisionDetected = false;
      } else {
        // Generate new random coordinates
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      }
    }

    if (orientation === "vertical") {
      for (let i = y; i < y + newShip.length; i++) {
        this.board[x][i] = newShip;
      }
    } else {
      for (let i = x; i < x + newShip.length; i++) {
        this.board[i][y] = newShip;
      }
    }
  }

  checkCollision(x, y, length, orientation) {
    if (orientation === "vertical") {
      for (let i = y; i < y + length; i++) {
        if (this.board[x][i] !== ".") {
          return true; // Collision detected
        }
      }
    } else {
      for (let i = x; i < x + length; i++) {
        if (this.board[i][y] !== ".") {
          return true; // Collision detected
        }
      }
    }
    return false; // No collision detected
  }

  receiveAttack(x, y) {
    if (this.attacks.has([[x], [y]].toString())) {
      return "Incorrect";
    } else {
      let target = this.board[x][y];
      if (target instanceof ship) {
        target.hit();
        this.board[x][y] = "H";
        if (target.isSunk()) {
          console.log("sunk");
        }
      } else {
        this.missed.add([[x], [y]].toString());
        this.board[x][y] = "M";
      }

      this.attacks.add([[x], [y]].toString());
    }
  }

  printBoard() {
    for (let i = 0; i < this.board.length; i++) {
      let row = "";
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] instanceof ship) {
          row += "S";
        } else {
          row += this.board[i][j];
        }
        row += " ";
      }
      console.log(row);
    }
  }

  allSunk() {
    if (this.board.includes("S")) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = GameBoard;
