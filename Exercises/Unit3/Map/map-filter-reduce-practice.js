// PRACTICE WITH FILTER, MAP and REDUCE

const staples = [
  {
    name: 'flour',
    price: 3
  },
  {
    name: 'rice',
    price: 5
  },
  {
    name: 'milk',
    price: 4.5
  },
  {
    name: 'eggs',
    price: 4
  }, {
    name: 'tp',
    price: 6
  }
];

// PROBLEM #1: 
// Get a list of all the prices
// output: 
// Just the prices please: [ 3, 5, 4.5, 4, 6 ]
const prices = staples.map((element) => {
  return element.price;
});
console.log("Prices:", prices);

// PROBLEM #2
// Get a list of all items under $5
// output:
// Less than $5: [
//   { name: 'flour', price: 3 },
//   { name: 'milk', price: 4.5 },
//   { name: 'eggs', price: 4 }
// ]

const items = staples.filter((element) => {
  return element.price < 5;
});
console.log("Items under 5 dollars:", items);


// PROBLEM #3
// If we buy one of each of our staples, how much will that cost?
// output: 
// Total cost: 22.5
const adder = function(accumulator, currentValue) {
  return accumulator + currentValue.price;
};
let sum = staples.reduce(adder, 0);
console.log("Total Cost:", sum);


// PROBLEM #4
// Double the prices of each staple
// output:
// [
//   { name: 'flour', price: 6 },
//   { name: 'rice', price: 10 },
//   { name: 'milk', price: 9 },
//   { name: 'eggs', price: 8 },
//   { name: 'tp', price: 12 }
// ]


const doublePrices = staples.reduce((acc, cv) => {
  // return acc + cv.price*2;
  cv.price = cv.price*2;
  acc.push(cv);
  return acc;
}, []);
console.log("Prices Doubled:", doublePrices);

// PROBLEM #5
// Sort the output from problem 4 from highest to lowest price
console.log(doublePrices.sort((a, b) => b.price - a.price));