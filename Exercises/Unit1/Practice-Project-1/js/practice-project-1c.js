/*
  1C : Background changes to a random HSL color and text adjusts light/dark
*/

'use strict';
// target body, button and text
const bodyBkg = document.querySelector('body');
const colorBtn = document.querySelector('.color-btn');
const colorCode = document.querySelector('.color-code');
const colorCodeLabel = document.querySelector('.color-code-label');
// set label
colorCodeLabel.textContent = "HSL Color Code:";

// change body color and hexcode when button pressed
function getHSL () {
  // generate HSL value
  let hue = Math.floor(Math.random()*256);
  let saturation = Math.floor(Math.random()*101);
  let luminosity = Math.floor(Math.random()*101);
  let hsl = "hsl(" + hue + ", "  + saturation + "%, " + luminosity + "%)"

  // change bkg color and color code text
  bodyBkg.style.backgroundColor = hsl;
  colorCode.textContent = hsl;

  // decide if text should be black or white
  if (luminosity/100 > 0.35) {
    document.querySelector('.container').classList.add('light');
    document.querySelector('.container').classList.remove('dark');
    // console.log("text is black");
    // console.log(luminosity);
  } else {
    document.querySelector('.container').classList.add('dark');
    document.querySelector('.container').classList.remove('light');
    // console.log("text is white");
    // console.log(luminosity);
  }
}

// on click, call back function to change color
colorBtn.addEventListener('click', getHSL);