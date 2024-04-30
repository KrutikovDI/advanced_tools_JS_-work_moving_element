export default class Goblin {
  constructor() {
    this.disappearGoblin = this.disappearGoblin.bind(this);
    this.missCounter = document.querySelector(".miss-counter");
    this.hitCounter = document.querySelector(".hit-counter");
  }

  randomCellHasGoblin() {
    const playingCells = document.querySelectorAll(".cell");

    let cellWithGoblin = document.querySelector(".cell cellHasGoblin");
    const playingCell =
      playingCells[Math.floor(Math.random() * playingCells.length)];
    if (cellWithGoblin != playingCell) {
      playingCell.classList.add("cellHasGoblin");
      setTimeout(() => {
        if (playingCell.classList.contains("cellHasGoblin")) {
          this.disappearGoblin(playingCell);
          this.missCounter.textContent =
            Number(this.missCounter.textContent) + 1;
        }
      }, 1000);
    } else {
      this.randomCellHasGoblin();
    }
  }

  disappearGoblin(elementWithGoblin) {
    elementWithGoblin.classList.remove("cellHasGoblin");
  }
}
