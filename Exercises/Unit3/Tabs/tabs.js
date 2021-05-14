'use strict';

console.log("it's alive!");

// Write algorithm first

//Add event listeners to the buttons to get them to react
//Add/remove classes when a tab is selected, so the colors are highlighted, by setting aria selected to true for turned on, false to turn off
//Turn aria selected to false and hide all panels
//Turn aria selected true to reveal pannel


// Then write the program

//Add the event listeners to the buttons
let buttons = document.querySelector("button");
buttons.forEach(element => {
    element.addEventListener("click", pressTab());
});

//Function that switches the aria seleced value and text content
function pressTab() {
    tabPressed = event.target.innerText;
    buttons.forEach(element => {
       element.ariaSelected = "false"; 
       if(tabPressed) {
        element.ariaSelected="true";
        element.classList.remove('hide');
       }     
    });
    



}



