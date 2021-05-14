// BASIC EXAMPLES
// PLEASE READ ARTICLE FOR SOME BETTER USE CASES... 
// https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

// Map, Filter and Reduce work on ARRAYS
// As an example, we have arrays of numbers and words
// we also have an array of more complex objects
const nums = [1, 2, 3, 4, 5, 6];
const words = ['the', 'quick', 'brown', 'fox'];
const colors = [
  {
    campus: "IU",
    name: "crimson",
    hexCode: "#990000"
  },
  {
    campus: "IU",
    name: "cream",
    hexCode: "#EDEBEB"
  },
  {
    campus: "Purdue",
    name: "black",
    hexCode: "#000000"
  },
  {
    campus: "Purdue",
    name: "campus gold",
    hexCode: "#C28E0E"
  }
];

// FILTER
console.log("FILTER:");

const filterNums = nums.filter((num) => {
  return num % 2 === 0;
});
console.log("Only even nums:", filterNums);

const filterWords = words.filter((word) => {
  return word.length > 3;
});
console.log("Only longer words:", filterWords);

const filterColors = colors.filter((color) => {
  return color.campus === "IU";
});
console.log("Only IU colors:", filterColors);

// MAP
console.log("MAP:");

const mapNums = nums.map((num) => {
  return num * 2;
});
console.log("Doubled nums:", mapNums);

const mapWords = words.map((word) => {
  return word.length;
});
console.log("Length of words", mapWords);

const mapColors = colors.map((color) => {
  return color.hexCode;
});
console.log("Just the hexcodes:", mapColors);

// REDUCE (collect)
console.log("REDUCE:");

// acc = accumulator / prev(ious) / total = function we are adjusting each time we see a value in the array
// cv = current value / amount = value we start with before the accumulation begins
const adder = function(accumulator, currentValue) {
  return accumulator + currentValue;
};
let sum1 = nums.reduce(adder, 0);
console.log("Generic sum function:", sum1);

// using arrow function
const sum2 = nums.reduce((acc, cv) => {
  return acc + cv;
}, 0);
console.log("Sum nums:", sum2);

// using arrow function shorthand
const sum3 = nums.reduce((total, amount) => total + amount);
console.log("Shorter sum nums:", sum3);

// not just for sums - for example, can build strings
const sentence = words.reduce((acc, cv) => {
  return acc + cv + ' ';
}, '');
console.log("Works on strings too:", sentence);

// Reduce can replace when you are using both map and filter
const ages = [20, 14, 45, 22, 39];
const average = ages.reduce((total, amount, index, array) => {
  total += amount;
  return total/array.length;
}, 0);
console.log(average);

const hasBirthday = ages.reduce((total, amount) => {
  total.push(amount + 1);
  return total;
}, []);
console.log(hasBirthday);

// Use it to count stuff!
pets = ["cat", "cat", "dog", "dog", "dog", "turtle"];

const count = pets.reduce((tally, pet) => {
  tally.pet = (tally.pet || 0) + 1;
  return tally;
}, {});


// Sort
months = ["January", "February", "March", "April", "May"];
listOfNums = [0, 11, 1, 11, 100, 2, 12, 8, 50];

// basic sort
console.log(months.sort());

// ascending
console.log(listOfNums.sort( (a, b) => a - b ));

// descending
console.log(listOfNums.sort( (a, b) => b - a ));

listOfNums = listOfNums.sort( (a, b) => {
  // returns zero, negative or positive value
  // uses that value to move items in the list
  console.log("a:", a, "b:", b, "diff:", a - b);
	return a - b;
});