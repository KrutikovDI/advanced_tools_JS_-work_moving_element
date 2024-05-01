import Goblin from "./main/main";

test("проверяем создание экземпляра класса", () => {
  const goblin = new Goblin();
  const correct = "0";
  expect(goblin).toBeInstanceOf(Goblin);
});
