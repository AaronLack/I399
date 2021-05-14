'use strict';
/*
  1B : Background color changes to one of a list of selected colors
*/

const colors = ['purple', 'orange', 'teal', '#990000', 'darkslategrey'];
//choose a random color from colors array
//update display - background color .color-code
function changeColor() {
  console.log('clicked!');
  
  let redNum = Math.floor(Math.random()*255);
  let greenNum = Math.floor(Math.random()*255);
  let blueNum = Math.floor(Math.random()*255);


  let redHex = redNum.toString(16);
  let greenHex = greenNum.toString(16);
  let blueHex = blueNum.toString(16);

  let hexColor = "#"+redHex+greenHex+blueHex;
  console.log(hexColor);
  body.style.backgroundColor = hexColor;
  colorCode.textContent = hexColor;
}

let button = document.querySelector('.color-btn');
button.addEventListener('click', changeColor); /*Dont call function, its callback*/
let body = document.querySelector('body');
let colorCode = document.querySelector('.color-code');