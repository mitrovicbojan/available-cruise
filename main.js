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
let bookingBtn = document.getElementById("booking-btn");
bookingBtn.style.display = "None";
for (let cruise of cruisesArr) {
  let options = document.createElement("option");
  options.style.textTransform = "Capitalize";
  section.style.textTransform = "Capitalize";
  section.appendChild(options);
  options.append(cruise.destination);
  if (cruise.destination == section.value) {
    for (let cat of cruise.ship.cabins) {
      let cabinCatOpt = document.createElement("option");
      category.appendChild(cabinCatOpt);
      cabinCatOpt.append(cat.category);
    }
  }
}

section.addEventListener("change", function () {
  for (let cruise of cruisesArr) {
    if (section.value == cruise.destination) {
      for (let cat of cruise.ship.cabins) {
        let cabinCatOpt = document.createElement("option");
        category.remove(cabinCatOpt);
        category.appendChild(cabinCatOpt);
        cabinCatOpt.append(cat.category);
      }
    }
  }
});

function myFunction() {
  let newOpt = document.getElementById("destination").value;
  let selectedCabin = document.getElementById("category").value;
  let cabinNum = document.getElementById("output-cabin-num");
  let cabinPrice = document.getElementById("output-cabin-price");
  let bkgDestination = document.getElementById("booking-destination");
  let bkgCabinCat = document.getElementById("booking-category");
  let bkgPrice = document.getElementById("booking-price");

  for (let cruise of cruisesArr) {
    if (newOpt == cruise.destination) {
      for (let cat of cruise.ship.cabins) {
        if (cat.category == selectedCabin) {
          cabinNum.innerHTML = cat.number;
          cabinPrice.innerHTML = cat.price;
          bookingBtn.style.display = "Block";
          bkgDestination.innerHTML = newOpt;
          bkgCabinCat.innerHTML = selectedCabin;
          bkgPrice.innerHTML = cat.price;
        }
      }
    }
  }
}

let bkgForm = document.getElementById("booking-form");
let mainForm = document.getElementById("form");
let paymentBtn = document.getElementById("payment-btn");

bkgForm.style.display = "None";
paymentBtn.style.display = "None";
let sglTraveler = document.getElementById("inputs-sgl");
let dblTraveler = document.getElementById("inputs-dbl");
dblTraveler.style.display = "None";
sglTraveler.style.display = "None";
function bookingForm() {
  bkgForm.style.display = "Block";
  mainForm.style.display = "None";
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

let bkgPrice = document.getElementById("booking-price");
let finalPrice = document.getElementById("final-price");
function sgl() {
  sglTraveler.style.display = "Block";
  paymentBtn.style.display = "Block";
  dblTraveler.style.display = "None";
  sngPrice = Number(bkgPrice.innerHTML) + Number(bkgPrice.innerHTML) * 0.6;
  finalPrice.innerHTML = "Price for Single Traveler: " + `${sngPrice}`;
}
function dbl() {
  sglTraveler.style.display = "Block";
  dblTraveler.style.display = "Block";
  paymentBtn.style.display = "Block";
  finalPrice.innerHTML = "Final Price: " + `${Number(bkgPrice.innerHTML) * 2}`;
}
