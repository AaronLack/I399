'use strict';
console.log('js working');

// A. Creates a delay in milliseconds
//    Runs the function once after that delay
console.log('start');
setTimeout(function() {
    console.log('Ugh. What do you want?');
}, 1000); //in milliseconds
console.log('finish');
//Start, finish, then ugh. 


// B. Runs a function after a delay
//    And every however many seconds after
// On repeat
setInterval(function() {
    console.log('Wake up!');
}, 3000);


// C. If you want to run a function once immediately
//    And then on repeat however many seconds later
//    We could write a general function to do that
function alarm() {
    console.log("ALARM!");
}

function setImmediateInterval(funcToRun, ms) {
    funcToRun();
    return setInterval(funcToRun, ms);
}

setImmediateInterval(alarm, 3000);


// D. Start a timer
//    Then stops the timer if user clicks the window
let time = 0;

function count() {
    time++;
    console.log(time, "seconds");
}

const countTimer = setInterval(count, 1000);

window.addEventListener('click', function() {
    console.log('Stopped', time);
    clearTimeout(countTimer);
    time = 0;
})