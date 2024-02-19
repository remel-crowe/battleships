import Ship from "./ship";
import Player from "./player";
export default () => {
  const user = new Player();
  const bot = new Player();
  // player ships
  const carrier = new Ship(5);
  const battleship = new Ship(4);
  const destroyer = new Ship(3);
  const submarine = new Ship(3);
  const patrolBoat = new Ship(2);
  // bot ships
  const botCarrier = new Ship(5);
  const botBattleship = new Ship(4);
  const botDestroyer = new Ship(3);
  const botSubmarine = new Ship(3);
  const botPatrolBoat = new Ship(2);

  placeShip(bot, [carrier, battleship, destroyer, submarine, patrolBoat]);
  placeShip(user, [
    botCarrier,
    botBattleship,
    botDestroyer,
    botSubmarine,
    botPatrolBoat,
  ]);

  renderShipInfo(user.gameboard.ships, "player");
  // Render opponent's ship info
  renderShipInfo(bot.gameboard.ships, "enemy");

  const enemyBoard = document.querySelector("#enemy-board");
  const playerBoard = document.querySelector("#player-board");
  playerBoard.style.backgroundColor = "rgb(226, 226, 226)";
  enemyBoard.style.backgroundColor = "rgb(255, 255, 255)";
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.id = `${row} ${col}`;

      box.addEventListener("click", () => {
        const id = box.id;
        const arrID = id.split(" ");
        const x = arrID[0];
        const y = arrID[1];
        const result = bot.attack(user.gameboard, x, y);
        if (result === false) return;
        enemyBoard.style.backgroundColor = "rgb(226, 226, 226)";
        playerBoard.style.backgroundColor = "rgb(255, 255, 255)";
        if (result === "hit") {
          box.style.color = "red";
          box.textContent = "X";
          renderShipInfo(user.gameboard.ships, "enemy");
        } else {
          box.textContent = "/";
        }
        if (user.gameboard.allShipsSunk()) {
          modal("You won", "You destroyed opponent's ships");
        }
        setTimeout(() => {
          playerBoard.style.backgroundColor = "rgb(226, 226, 226)";
          enemyBoard.style.backgroundColor = "rgb(255, 255, 255)";
          while (true) {
            let row = generateRandomNumber();
            let col = generateRandomNumber();
            const res = user.attack(bot.gameboard, row, col);
            if (res) {
              row = row + 10;
              col = col + 10;
              let id = String(row) + "-" + String(col);
              const element = document.getElementById(id);
              if (res === "hit") {
                element.style.color = "red";
                element.textContent = "X";
                renderShipInfo(bot.gameboard.ships, "player");
              } else {
                element.textContent = "/";
              }
              if (bot.gameboard.allShipsSunk()) {
                modal("You lost", "Opponent destroyed all your ships");
              }
              break;
            }
          }
        }, 500);
      });

      enemyBoard.appendChild(box);

      const box1 = document.createElement("div");
      box1.classList.add("box");
      box1.id = `${row + 10}-${col + 10}`;
      if (bot.gameboard.board[row][col]) box1.textContent = "x";
      playerBoard.appendChild(box1);
    }
  }
};

const placeShip = (board, ships) => {
  ships.forEach((ship) => {
    while (true) {
      const x = generateRandomNumber();
      const y = generateRandomNumber();
      const isVertical = generateBoolean();
      if (board.gameboard.placeShip(ship, x, y, isVertical)) {
        board.gameboard.placeShip(ship, x, y, isVertical);
        break;
      }
    }
  });
};

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10);
};
const generateBoolean = () => {
  return Math.floor(Math.random() * 2);
};
const modal = (winner, sub) => {
  const modalDiv = document.querySelector(".modal");
  const div = document.createElement("div");
  modalDiv.innerHTML = "";
  const heading = document.createElement("h1");
  heading.textContent = winner;
  const subHeading = document.createElement("p");
  subHeading.textContent = sub;
  div.append(heading, subHeading);
  modalDiv.append(div);
  modalDiv.classList.remove("hide");
  setTimeout(() => {
    modalDiv.classList.add("hide");
    document.getElementById("reset").click();
  }, 3000);
};

const renderShipInfo = (ships, player) => {
  const wrapper = document.querySelector(`#${player}-ship-info`);
  wrapper.innerHTML = "";

  ships.forEach((ship) => {
    const shipWrapper = document.createElement("div");
    let colored = 0;

    for (let i = 0; i < ship.length; i++) {
      const div = document.createElement("div");
      div.classList.add("ships");

      if (colored < ship.hits) {
        div.style.backgroundColor = "green";
        colored++;
      }

      shipWrapper.appendChild(div);
    }

    wrapper.appendChild(shipWrapper);
  });
};
