'use strict';
//Aaron Lack Project 2 I399

//Displays the numbers on the page
let circles = "";
for(let i = 1; i <= 100; i++) {
    circles += `<div class="color"><p>${i}</p></div>`;
    if(i%10 == 0) {
        circles += `<br>`;
    }
}
document.querySelector('.numbers').insertAdjacentHTML('afterbegin', circles);

//Selecting an individual Number: 
//Add event listener for the numbers, 
//When you click on a number, check if it is the secret number
//Use a forEach
//add a class that changes the colors
let selectAllCircles = document.querySelectorAll('.color');
selectAllCircles.forEach((element) => {
    element.addEventListener('click', secretNumberGame);
});

//Guessing Game Function: a lot of code reused from Project 1
let secretNum = Math.ceil(Math.random() * 100); //Chosing a random number between 1 and 100.
// console.log(secretNum);
//Placeholder variables that will be updated later in the function. 
let guess = 0; 
let numberOfGuesses = 1; //Start at one, since this happens after you push the button. 
let round = 1; //Start at round 1
let message = "";
let playAgain = document.querySelector("#play-again"); //grab the play again button

function secretNumberGame(event) {
    guess = event.target.innerText; //check number from the user
    console.log(guess); //Lets the user know what they guessed. 
    //Grabs the empty paragraph tag in html so the user can see a message. 
    let displayMessage = document.querySelector('.message'); 
    
    if(guess > secretNum) { 
        message = `${guess} Too High`;
        displayMessage.textContent = message;
        numberOfGuesses++; 
        //Change the circle to be have class of color
        event.target.closest('div').classList.add('high');

    }
    //Checks if the guess is too high and in range of 0, and displays the message. 
    else if(guess < secretNum) {
        message = `${guess} Too Low`;
        displayMessage.textContent = message;
        numberOfGuesses++
        //Change the circle to be have class of color
        event.target.closest('div').classList.add('low');
    }
    //Prints the right number and ends the loop with a break. 
    else {
        message = `Congrats! It's ${secretNum} You guessed the secret number ${numberOfGuesses} times`; //Final game message. 
        //puts the message from JS into the paragraph tag in html
        displayMessage.textContent = message; 
        console.log(playAgain);
        playAgain.classList.remove('hide'); //remove the class
        playAgain.addEventListener('click', resetGame); //when the user clicks button, reset the game. 
        //Change the circle to be have class of color: Green, White text 
        event.target.closest('div').classList.add('correct');
    }
}

//Mehthod to restart the game, setting everything back to 0 or default. 
function resetGame() {
    secretNum = Math.ceil(Math.random() * 100); 
    // console.log(secretNum);
    let message = "";
    let displayMessage = document.querySelector('.message');
    displayMessage.textContent = message;
    numberOfGuesses = 1;
    let playAgain = document.querySelector("#play-again"); //grab the button
    playAgain.classList.add('hide'); //Adds the hidden class so the play again button disapears. 

    //Resets all the colors by removing the other classes added using forEach
    selectAllCircles.forEach((element) => {
        element.classList.remove('high');
        element.classList.remove('low');
        element.classList.remove('correct');
    });
}