class ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    return (this.hits += 1);
  }

  isSunk() {
    return this.hits === this.length;
  }
}

module.exports = ship;
