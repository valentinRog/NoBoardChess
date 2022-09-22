class Game {
  constructor() {
    this.failedMoveIndex = null;
    this.currentMoveIndex = 1;
    this.guessing = true;
    this.level = 1;
    this.lives = 3;
    this.fails = 0;
  }

  async getPuzzle() {
    const res = await fetch(
      `https://valenbel123.pythonanywhere.com/level/${this.level}`
    );
    const puzzle = await res.json();
    if (res.ok) {
      console.log(puzzle);
      return puzzle;
    } else {
      throw new Error(puzzle);
    }
  }
}

export default Game;
