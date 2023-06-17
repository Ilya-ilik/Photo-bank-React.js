let arr = [];
// Цикл который заполняет пустой массив рандомными никами
while (arr.length < 100) {
  // Скрипт ниже генератор рандомных никнеймов
  const listOfLetters = "abcdefghijklmnopqrstuvwxyz";
  let receivingString = "";
  while (receivingString.length < 6) {
    receivingString +=
      listOfLetters[Math.floor(Math.random() * listOfLetters.length)];
  }
  //
  arr.push(receivingString);
}
// 



export const images = [
  {
    id: 1,
    name: "Новый год",
    image:
      "https://www.pandotrip.com/wp-content/uploads/2022/12/Best-New-Years-Eve-Firework-Shows.jpg",
  },
  {
    id: 2,
    name: "Зима",
    image:
      "https://w-dog.ru/wallpapers/10/0/305838966598971/sneg-utrom-zima-utro-goluboe-nebo-derevya-sneg.jpg",
  },
  {
    id: 3,
    name: "Рождество",
    image:
      "https://wp-s.ru/wallpapers/2/73/357055760387995/dom-s-kaminom-i-novogodnej-lkoj.jpg",
  },
  {
    id: 4,
    name: "Курорты",
    image:
      "https://vsegda-pomnim.com/uploads/posts/2022-04/1651061431_3-vsegda-pomnim-com-p-more-kurort-foto-5.jpg ",
  },
  {
    id: 5,
    name: "Архитектурные детали",
    image: "https://kamnemir.ru/images/cms/data/projects/gallery/box/vaz4.jpg ",
  },
  {
    id: 6,
    name: "Снегопад",
    image: "https://photocentra.ru/images/main108/1084423_main.jpg ",
  },
];

export const imagesWinter = [
  {
    id: 1,
    // name: "@Aleks", 
    name: arr[Math.floor(Math.random() * arr.length)],
    image:
      "https://www.almanac.com/sites/default/files/users/The%20Editors/winter-snow-tracks_full_width.jpg",
  },
  {
    id: 2,
    // name: "@Zoro",
    name: arr[Math.floor(Math.random() * arr.length)],
    image:
      "https://w-dog.ru/wallpapers/10/0/305838966598971/sneg-utrom-zima-utro-goluboe-nebo-derevya-sneg.jpg",
  },
  {
    id: 3,
    // name: "@Pavel",
    name: arr[Math.floor(Math.random() * arr.length)],
    image:
      "https://wp-s.ru/wallpapers/2/73/357055760387995/dom-s-kaminom-i-novogodnej-lkoj.jpg",
  },
  {
    id: 4,
    // name: "@IVan",
    name: arr[Math.floor(Math.random() * arr.length)],
    image:
      "https://vsegda-pomnim.com/uploads/posts/2022-04/1651061431_3-vsegda-pomnim-com-p-more-kurort-foto-5.jpg ",
  },
  {
    id: 5,
    // name: "@Kir",
    name: arr[Math.floor(Math.random() * arr.length)],
    image: "https://kamnemir.ru/images/cms/data/projects/gallery/box/vaz4.jpg ",
  },
  {
    id: 6,
    // name: "@Svetlana",
    name: arr[Math.floor(Math.random() * arr.length)],
    image: "https://photocentra.ru/images/main108/1084423_main.jpg ",
  },
];
