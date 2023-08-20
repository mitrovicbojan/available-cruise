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

let tahiti = new Cruise("tahiti", new Ship("Flafica", tahitiCabins));

let seychellesCabins = [
  new Cabins("P", 2, 3500),
  new Cabins("A", 1, 2500),
  new Cabins("B", 4, 1000),
];
let seychelles = new Cruise("seychelles", new Ship("Danzig", seychellesCabins));

let cruisesArr = [tahiti, seychelles];

let section = document.getElementById("destination");
let category = document.getElementById("category");

for (let cruise of cruisesArr) {
  let options = document.createElement("option");
  options.style.textTransform = "Capitalize";
  section.style.textTransform = "Capitalize";
  section.appendChild(options);
  options.append(cruise.destination);
}

for (let cruise of cruisesArr) {
  if (cruise.destination == section.value) {
    for (let cat of cruise.ship.cabins) {
      let cabinCatOpt = document.createElement("option");
      category.appendChild(cabinCatOpt);
      cabinCatOpt.append(cat.category);
    }
  }
}
// function removeNum(cat) {
//   for (let num in tahitiCabins) {
//     if (cat == tahitiCabins[num].category) {
//       return tahitiCabins[num].number - 1;
//     }
//   }
// }

// tahitiCabins[1].number = removeNum("B");
// console.log(tahitiCabins[1].number);
