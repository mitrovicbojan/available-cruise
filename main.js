class Cruise {
  constructor(destination, ship) {
    this.destination = destination;
    this.ship = ship;
  }
}

class Ship {
  constructor(name, cabins) {
    this.name = name;
    this.cabins = cabins;
  }
}

class Cabins {
  constructor(category, number, price) {
    this.category = category;
    this.number = number;
    this.price = price;
  }
}
let tahitiCabins = [
  new Cabins("A", 5, 1000),
  new Cabins("B", 3, 800),
  new Cabins("C", 2, 500),
];

function removeNum(cat) {
  for (let num in tahitiCabins) {
    if (cat == tahitiCabins[num].category) {
      return tahitiCabins[num].number - 1;
    }
  }
}

tahitiCabins[1].number = removeNum("B");
console.log(tahitiCabins[1].number);
