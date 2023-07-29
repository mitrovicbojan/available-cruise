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
  let output = document.getElementById("output");
  let outPrice = 0;
  let avaCabin = 0;

  for (let i of myCruises) {
    if (i.hasOwnProperty(destination)) {
      let selectedDestination = i[destination];
      console.log(selectedDestination[category]);
    }
  }
}
