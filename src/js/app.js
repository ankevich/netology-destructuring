const character = {
  name: "Лучник",
  type: "Bowman",
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: "Двойной выстрел",
      icon: "http://...",
      description: "Двойной выстрел наносит двойной урон",
    },
    {
      id: 9,
      name: "Нокаутирующий удар",
      icon: "http://...",
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

const extract = ({ id, name, description = "Описание недоступно", icon }) => [
  id,
  name,
  description,
  icon,
];

const result = character.special.map((attack) => extract(attack));
console.log(result)

export default extract