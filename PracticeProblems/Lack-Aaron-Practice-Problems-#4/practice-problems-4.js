'use strict';

// ! I399 JS: Practice Problems #4
// HELPFUL:
// https://css-tricks.com/an-illustrated-and-musical-guide-to-map-reduce-and-filter-array-methods/
// Except careful on their very last example for reduce - it's clever and less code, but not as readable

// Of a fifth grader... ;-)
let activityLog = [
    { activity: "Ate some cereal", time: 14},
    { activity: "Worked on assignments", time: 80},
    { activity: "Went to math class", time: 30},
    { activity: "Watched videos to annoy my mom on YouTube", time: 11},
    { activity: "Ate my lunch - thanks mom", time: 22},
    { activity: "Did some homework", time: 25},
    { activity: "Went to my martial arts lesson", time: 45},
    { activity: "Ran around in the yard", time: 33},
    { activity: "Dinner time", time: 35},
    { activity: "Fed the cat", time: 5},
    { activity: "Played video games", time: 67},
    { activity: "Read stupid book for school", time: 29},
    { activity: "Practiced circus arts", time: 20},
    { activity: "Dance time!", time: 12},
    { activity: "Complained loudly about having to go to bed", time: 47},
    { activity: "Got ready for bed", time: 31},
];

// ! Use map, filter, reduce, sort or regex to solve the following:

// #4.1 Add a unique identification number to each activity
// Start at one for the first activity, second activity is two, etc..
// Example output in the console log:
// [ { activity: "Ate some cereal", time: 14, id: 1 },
// ​  { activity: "Worked on assignments", time: 80, id: 2 }, etc... ]

const id = activityLog.map((element, addId) => {
    element.id = addId+1;
    return element;
  });
console.log("ID:", id);


// #4.2 Make a list of all of the activities that took more than 30 minutes
// Print the results in a table within the console.log()
// Example output in the console log:
// (index)  activity                time    id
// 0        Worked on assignments   80      2
// etc...
const longActivites = activityLog.filter((element) => {
    return element.time > 30;
  });
console.log("Items longer than 30 minutes:", longActivites);
console.table(longActivites);



// #4.3 Answer the question, how many minutes were spent on activities today?
// Example output in the console log:
// "Total minutes spent on activities: 8 hours and 26 minutes"
const adder = function(accumulator, currentValue) {
    return accumulator + currentValue.time;
  };
let time = activityLog.reduce(adder, 0);
let hours = time/60;
// console.log(hours);
let minutes = Math.round((hours%1) * 60);
// console.log(minutes);
console.log("Total Time Spent on Activities:", Math.round(hours) + " hours and " + minutes + " minutes");



// #4.4 List the activities from the least to most amount of time each took
// Print the results out in a table in the console log
// Example output in the console log:
// (index)  activity                                    time    id
// 0        Fed the cat                                 5       10  
// 1        Watched videos to annoy my mom on YouTube   11      4
// etc...

console.table(activityLog.sort((a, b) => a.time - b.time));


// #4.5 Create an array with only the city, state and zip for each address
// Use either map, filter or reduce plus one of the STRING regex methods
// We strongly suggest you figure out the pattern in https://regex101.com/ first
// Be as precise as you can with your regex for this one
// remember in this file your pattern will be sandwiched by forward slashes 
// e.g. /pattern/g  <--- global flag
// Example output in console log:
// (2) […]
// 0: Array [ "Bloomington, IN 47405" ]
// 1: Array [ "Indianapolis, IN 46202" ]
// length: 2

let city = [`Bloomington, IN 47408`, "Indianapolis, IN 46202"];
let regex = /^(.+)[,\\s]+(.+?)\s*(\d{5})?$/g; 
console.log(regex.test(city)); //True
for (let element of city) {
    const match = element.match(regex);
    console.log('Match', match, match[0]);
}
const mapping = city.map((element, regex) => {
    return element;
  });
console.log("Mapping:", mapping);