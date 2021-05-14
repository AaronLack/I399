'use strict';

// Write a stop watch program
// with functions to start, stop and reset the timer
// you'll need setInterval() and clearInterval() and some math
// update the display to show the time in minutes:seconds:milliseconds

const start = document.querySelector("#start");
const stoppp = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let totalTime = 0;
let countTimer;

function startWatch() {
    totalTime++;
    minutes = Math.floor(totalTime%60);
    seconds = Math.floor(minutes%60);
    milliseconds = Math.floor(seconds%100);

    if(minutes < 10) {
        minutes = '0' + minutes;
    }

    if(seconds < 10) {
        seconds = '0' + seconds;
    }

    if(milliseconds < 10) {
        milliseconds = '0' + milliseconds;
    }

    //Update HTML
    document.querySelector(".minutes").textContent = minutes;
    document.querySelector(".seconds").textContent = seconds;
    document.querySelector(".milliseconds").textContent = milliseconds;
}

function stopWatch() {
    clearTimeout(countTimer);
}

function resetWatch() {
    totalTime = 0;
    document.querySelector(".minutes").textContent = "00";
    document.querySelector(".seconds").textContent = "00";
    document.querySelector(".milliseconds").textContent = "00";
}
console.log("Hi Max");

start.addEventListener('click', () => {countTimer = setInterval(startWatch, 10)});
stoppp.addEventListener('click', stopWatch);
reset.addEventListener('click', resetWatch);

