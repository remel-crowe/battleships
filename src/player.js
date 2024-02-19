import Gameboard from "./gameboard";
class Player {
  constructor() {
    this.gameboard = new Gameboard();
  }

  attack(enemyGameboard, x, y) {
    // enemyGameboard.receiveAttack(x, y);
    return enemyGameboard.receiveAttack(x, y);
  }
}

export default Player;
