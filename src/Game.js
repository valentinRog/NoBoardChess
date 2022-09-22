class Game {
  constructor() {
    this.failedMoveIndex = null;
    this.currentMoveIndex = 1;
    this.guessing = true;
    this.level = 1;
    this.lives = 3;
    this.fails = 0;
  }
}

export default Game;
