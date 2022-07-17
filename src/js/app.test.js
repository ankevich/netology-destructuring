import extract from "./app";

test("Функция возвращает извлеченный массив с 4 полями", () => {
  const input = {
    id: 8,
    name: "Двойной выстрел",
    icon: "http://...",
    description: "Двойной выстрел наносит двойной урон",
  };
  const received = extract(input);
  const expected = [
    8,
    "Двойной выстрел",
    "Двойной выстрел наносит двойной урон",
    "http://...",
  ];
  expect(received).toEqual(expected);
});

test("Функция устанавливает дефолтное значение - `Описание недоступно`", () => {
  const input = {
    id: 9,
    name: "Нокаутирующий удар",
    icon: "http://...",
    // <- обратите внимание, описание "засекречено"
  };
  const received = extract(input);
  const expected = [
    9,
    "Нокаутирующий удар",
    "Описание недоступно",
    "http://...",
  ];
  expect(received).toEqual(expected);
});
