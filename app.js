let myCruises = [
  {
    tahiti: {
      A: {
        price: 1000,
        number: 10,
      },
      B: {
        price: 800,
        number: 5,
      },
      C: {
        price: 300,
        number: 0,
      },
    },
  },
  {
    seychelles: {
      A: {
        price: 600,
        number: 11,
      },
      B: {
        price: 400,
        number: 2,
      },
      C: {
        price: 200,
        number: 1,
      },
    },
  },
];

function myFunction() {
  let destination = document.getElementById("destination").value;
  let category = document.getElementById("category").value;
  let outputCabinNum = document.getElementById("output-cabin-num");
  let outputCabinPrice = document.getElementById("output-cabin-price");
  let outPrice = 0;
  let avaCabin = 0;

  for (let i of myCruises) {
    if (i.hasOwnProperty(destination)) {
      let selectedDestination = i[destination];
      console.log(selectedDestination[category]);
      outPrice += selectedDestination[category].price;
      avaCabin += selectedDestination[category].number;
    }
  }
  if (avaCabin > 0) {
    outputCabinNum.innerText = avaCabin;
    outputCabinPrice.innerText = outPrice;
  } else {
    outputCabinNum.innerText = `Not available`;
    outputCabinPrice.innerText = `N/A`;
    outputCabinNum.style.color = "red";
  }

  console.log(outPrice);
  console.log(avaCabin);
}
