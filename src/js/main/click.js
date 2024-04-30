export default class OnClick {
  constructor() {
    this.hitCounter = document.querySelector(".hit-counter");
    this._element = document.querySelector(".playingField");
    this.takeShot = this.takeShot.bind(this);
    this._element.addEventListener("click", this.takeShot);
  }

  takeShot(e) {
    const clickElement = e.target;
    if (clickElement.classList.contains("cellHasGoblin")) {
      clickElement.classList.remove("cellHasGoblin");
      this.hitCounter.textContent = Number(this.hitCounter.textContent) + 1;
    }
  }
}
