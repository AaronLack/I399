'use strict';

// JS REVIEW
// Looping
// for, while, do while, forEach, for...in, for...of
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration


// #1 Create an array with the numbers 0-9
let nums = [];
for(let i = 0; i <= 9; i++) {
    nums.push(i);
}
console.log(nums);


// #2 Create an array of foods entered by the user (aka 'make grocery list')
//    if the user enters "exit" display their list

function makeGroceryList() {
    let foods = [];
    let groceryItem = "";
    let exit = false
    while(exit === false) {
        // prompt(`What would you like to add to your grocery list? ${groceryItem}`);
        groceryItem = prompt(`What would you like to add to your grocery list? ${groceryItem}`);
        foods.push(groceryItem);
        if(groceryItem === "exit") { //escape frequencies
            foods.pop("exit"); //removes exit
            console.log(foods);
            exit = true;
        }
    }
    let groceryList = '<ul>';
    for(const item of foods) {
        groceryList += `<li>${item}</li>`;
    }
    groceryList += '</ul>';
    document.querySelector('h2').insertAdjacentHTML('afterend', groceryList);
}



// #3 Create a button to manage when the "make grocery list" program
//    will be run - it should run when the button is clicked
//    Bonus: print the list to the HTML under the H2

document.querySelector('button').addEventListener('click', makeGroceryList);


// #4A How many ways can you loop through the array and print out the values?
//     Show all the ways:

// #4B Which methods will also allow you to print out the index position?
//     Rewrite or add to also print out the index position
const numbers = [3, 7, 12, 9, 22, 8, 17, 5];

//Standard forloop
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//While loop
let j = 0;
while(j < numbers.length) {
    console.log(numbers[j]);
    j++;
}

//For Of
for(let item of numbers) {
    console.log(item);
}

//For Each
numbers.forEach((value) => {
    console.log(value);
});


// #5A How many ways can you loop through the object and print out the keys?
//     Show all the ways:

// #5B Which methods will also allow you to print out the values?
//     Rewrite or add to print out both the key and the value for each entry
const letters = {
    a: "apple",
    b: "butter",
    c: "carrot",
    d: "donut"
};

//For In 
for(let element in letters) {
    console.log(element, letters[element]);
}

//For Of
for(const[letter, word] of Object.entries(letters)) {
    console.log(letter,word);
}



// #6 How many ways can you loop through an array of objects and print out the values?
//    Show all the ways:
const names = [
    {firstName: "dave"},
    {firstName: "frances"},
    {firstName: "holly"},
    {firstName: "peter"}
];

for(const name of names) {
    console.log((name.firstName));
}

for(const[key,value] of Object.entries(names)) {
    console.log((`${key}: ${value}`));
}

names.forEach((name) => {
    console.log(name.firstName);
})

// #7 Write the function sumPoints() to tally the groups total points
const scores = {
    "advik": 200,
    "joan": 350,
    "diana": 175,
    "fang": 225
}

function sumPoints() {
    let points = 0;
    for(let element of Object.values(scores)) {
        points += element;
    }
    console.log(points);
}

sumPoints();


// #8A Write the function countProperties() 
//     to count the number of properties in an object
// #8B Now make it as short as possible
let student = {
    name: 'Courtney',
    age: 20,
    major: 'Informatics',
    gpa: 3.2
};

function countProperties(object) {
    return Object.keys(object).length;
}
console.log(countProperties(student));

  
// #9 Grab the ID number off of each list item from the HTML//    Example outout: Juniper 9
document.querySelectorAll('li').forEach((element) => {
    console.log(element.textContent, element.dataset.id);
});