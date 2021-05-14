'use strict';
// Pacman Animation:
// When an arrow key is pressed, 
    // pacman should move that direction on the screen
// To make pacman move, 
    // use setAttribute to update the custom CSS variables on .pacman
    // transition and transform allow us to animate the element
    // rotate the pacman to face the direction he is headed

const pacman = document.querySelector('.pacman');
let x = 0;
let y = 0;
const speed = 10;  // multiplier to move pacman faster
let rotate = 0;  // in degrees

// let pacman = document.querySelector('.pacman');
function handleKeyDown(event) { 
    // follow directions in slides
    //This only prints arrow keys
    if((!event.key.includes('Arrow'))) {return; }
    switch(event.key) {
        case('ArrowRight'):
            console.log("Right Arrow");
            x += 5;
            rotate = 0;
            break;

        case('ArrowLeft'):
            console.log("Left Arrow");
            x -= 5;
            rotate = 180;
            break;

        case('ArrowUp'):
            console.log("Up Arrow");
            y -= 5;
            rotate = 270;
            break;

        case('ArrowDown'):
            console.log("Down Arrow");
            y += 5;
            rotate = 90;
            break;
    }
    pacman.setAttribute('style',`--x: ${x*speed}px; --y: ${y*speed}px; --rotate: ${rotate}deg;`);
    console.log(event);
    console.log(event.key);

}
// call function when key is pressed down
window.addEventListener('keydown', handleKeyDown);

