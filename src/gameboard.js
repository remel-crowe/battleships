class Gameboard {
  constructor() {
    this.board = Array.from({ length: 10 }, () =>
      Array.from({ length: 10 }, () => null)
    );
    this.missedAttacks = [];
    this.ships = [];
  }

  placeShip(ship, x, y, isVertical) {
    if (!this.isValidPlacement(ship.length, x, y, isVertical)) {
      return false; // Invalid placement
    }

    // Place the ship on the board
    for (let i = 0; i < ship.length; i++) {
      if (isVertical) {
        this.board[x + i][y] = ship;
      } else {
        this.board[x][y + i] = ship;
      }
    }

    this.ships.push(ship); // Add the ship to the list of ships on the board
    return true; // Successful placement
  }

  receiveAttack(row, col) {
    if (this.board[row][col] !== "." && this.board[row][col] !== "x") {
      if (this.board[row][col] === null) {
        this.board[row][col] = ".";
        return true;
      }
      this.board[row][col].hit();
      this.board[row][col] = "x";
      return "hit";
    }
    return false;
  }

  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }

  isValidPlacement(length, x, y, isVertical) {
    // Ensure that the ship fits within the boundaries of the board
    if (isVertical) {
      if (x + length > 10) {
        return false; // Ship exceeds the board's height
      }
    } else {
      if (y + length > 10) {
        return false; // Ship exceeds the board's width
      }
    }

    // Ensure that the ship does not overlap with existing ships
    for (let i = 0; i < length; i++) {
      if (isVertical) {
        if (this.board[x + i][y] !== null) {
          return false; // Overlaps with existing ship
        }
      } else {
        if (this.board[x][y + i] !== null) {
          return false; // Overlaps with existing ship
        }
      }
    }

    if (isVertical) {
      if (y > 0 && this.board[x][y - 1] !== null) return false;
      if (y + length < 9 && this.board[x][y + length] !== null) return false;
    } else {
      if (x > 0 && this.board[x - 1][y] !== null) return false;
      if (x + length < 9 && this.board[x + length][y] !== null) return false;
    }

    return true; // Valid placement
  }
}

export default Gameboard;
