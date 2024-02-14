class GameBoard {
  constructor() {
    this.size = 10;
    this.board = this.createBoard(this.size);
  }

  createBoard(size) {
    const board = [];
    for (let i = 0; i <= size; i++) {
      board.push(Array(size).fill("."));
    }
    return board;
  }

  placeship(x, y) {}

  receiveAttack(x, y) {}

  allSunk() {}
}
