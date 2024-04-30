import Goblin from "./main/main";
import OnClick from "./main/click";

const goblin = new Goblin();
const onClickToGoblin = new OnClick();

setInterval(() => {
  goblin.randomCellHasGoblin();
  if (goblin.missCounter.textContent == 500) {
    goblin.missCounter.textContent = -1;
    goblin.hitCounter.textContent = 0;
    alert("Вы проиграли");
  }
}, 1800);

onClickToGoblin.takeShot();
