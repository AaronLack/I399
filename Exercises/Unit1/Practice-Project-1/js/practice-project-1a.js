'use strict';
/*
  1A : Background color changes to one of a list of selected colors
*/

const colors = ['purple', 'orange', 'teal', '#990000', 'darkslategrey'];
//choose a random color from colors array
//update display - background color .color-code
function changeColor() {
  console.log('clicked!');
  let randNum = Math.floor(Math.random() * (colors.length -1));
  console.log(colors[randNum]);
  body.style.backgroundColor = colors[randNum];
  console.log(colorCode);
  colorCode.textContent = colors[randNum];
}

let button = document.querySelector('.color-btn');
button.addEventListener('click', changeColor); /*Dont call function, its callback*/
let body = document.querySelector('body');
let colorCode = document.querySelector('.color-code');