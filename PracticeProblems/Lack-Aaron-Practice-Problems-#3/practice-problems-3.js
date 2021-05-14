3'use strict';
//Aaron Lack
// ! I399 JS: Practice Problems #3
// HTML and CSS have been provided for you
// Goal this week: practice your JS interface skills

// #1.1 Plan accordingly
// Display a list (UL LI) of courses on the page underneath 
// the related title (H3)

let courses = ['I360 Web Design', 'I399 JavaScript', 'I399 Visual Design', 'I400 Mobile HCI & Design', 'I400 Cross-Platform Mobile Programming'];

function createList(arr) {
  let list = '<ul>\n';
  for(let i=0; i<arr.length; i++) {
    list += `\t\<li><strong>${arr[i]}</strong></li>\n`;
  }
  document.querySelector('h3').insertAdjacentHTML('afterend', list);
}
createList(courses);


// #1.2 It all adds up
// Make a simple addition program that adds up any numbers entered
// into and input and displays a running total on the screen
//   • One button adds the input to a running total (and updates screen)
//   • One button resets everything
//   • Add error checking - handle the case where input isn't a number

//Use .textContent!!!
let num = 0;
let inputNum = document.querySelector("#add-input"); //Grabs the input
let addButton = document.querySelector("#add-button"); //Grabs the + button
let clearButton = document.querySelector("#clear-button"); //Grabs the clear button
let result = document.querySelector("#result"); //Grabs result value p tag

addButton.addEventListener('click', addNums);
clearButton.addEventListener('click', clear); //Sets value to 0 by calling the function 

function addNums() {
    console.log(inputNum);
    num = Number(inputNum.value) + num;
    result.textContent = num;
    inputNum.value = "";
    // document.querySelector('#result').insertAdjacentHTML('afterEnd', num); //Adds the number to html
    // document.querySelector('#add-bt').insertAdjacentHTML('beforeend', inputNum);
}
      
function clear() {
    num = 0;
    result.textContent = num;
    inputNum.value = "";
}



// #1.3 Yes, I realize I have a problem, just do the exercise
// On click, update the message (P) to reveal which animal is "hiding" 
// in the data attribute on each purple box (DIV)
//   • need a hint? look at the HTML - and reference the 07-08 slide deck


//Friday
let animal = document.querySelector(".animal");
let secrets = document.querySelectorAll(".secret");
//Element.dataset.hiddenAnimal

secrets.forEach(() => {
  //Event is how we reference an event listener if you don't have a function. 
  this.addEventListener('click', (event)=>{ 
    console.log(event);
    let setAnimal = event.target.dataset.hiddenAnimal; //How I access the hidden animal
    //You have to find it by scrolling down a lot. 
    animal.textContent = setAnimal;
  }) 

})