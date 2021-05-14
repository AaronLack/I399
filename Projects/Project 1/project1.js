'use strict';
//Aaron Lack Project 1 I399

const playGame= document.querySelector('button'); //The go button to start the game
playGame.addEventListener('click', secretNumberGame); //Adding that button as an event listener, calling the secretNumberGame
let secretNum = Math.ceil(Math.random() * 100); //Chosing a random number between 1 and 100.
//Placeholder variables that will be updated later in the function. 
let guess = 0; 
let numberOfGuesses = 1; //Start at one, since this happens after you push the button. 
let round = 1; //Start at round 1
let message = "";
let obj = [];
console.log(secretNum);
let viewScores = document.querySelector("#high-scores-button"); //grab the high scores button
let playAgain = document.querySelector("#play-again"); //grab the play again button



function secretNumberGame() {
    //check number from the user
    guess = document.querySelector("input").value;
    console.log(guess); //Lets the user know what they guessed. 
    document.querySelector("input").value = ""; //Setting it to be empty
    //Grabs the empty paragraph tag in html so the user can see a message. 
    let displayMessage = document.querySelector('.message'); 
    // console.log(guess);
    //Checks if the guess is too high and in range of 100
    //grab an element, deccide what the message is, place the content in. 
    if(guess > secretNum && guess <= 100) { 
        message = `${guess} Too High`;
        console.log(guess);
        displayMessage.textContent = message;
        numberOfGuesses++; 
    }
    //Checks if the guess is too high and in range of 0, and displays the message. 
    else if(guess < secretNum && guess >= 0) {
        message = `${guess} Too Low`;
        displayMessage.textContent = message;
        numberOfGuesses++
    }
    //Checks if guess is out of range of 0 and 100. 
    else if(guess > 100 || guess < 0) {
        message = "Your guess is not in range, GAME OVER";
        displayMessage.textContent = message;
        numberOfGuesses++
    }
    //Checks if guess isn't a number using the isNaN function.
    else if(isNaN(guess)) {
        message = "Your guess is not a number, GAME OVER";
        displayMessage.textContent = message;
        numberOfGuesses++
    }
    //Prints the right number and ends the loop with a break. 
    else {
        message = `Congrats! It's ${secretNum} You guessed the secret number ${numberOfGuesses} times`; //Final game message. 
        //puts the message from JS into the paragraph tag in html
        displayMessage.textContent = message; 

        //Saves the game into the obj array
        obj.push({secretNum, numberOfGuesses});
        // console.log(obj);

        console.log(playAgain);
        playAgain.classList.remove('hide'); //remove the class
        playAgain.addEventListener('click', resetGame); //when the user clicks button, reset the game. 
        round++; //Update the round
        //View the high Scores part
        
        // viewScores.classList.remove('hide'); //remove the class
        updateHighScores();

    }
}
viewScores.addEventListener('click', viewHighScores); //Clicks, views the scores


//Mehthod to restart the game, setting everything back to 0 or default. 
function resetGame() {
    secretNum = Math.ceil(Math.random() * 100); 
    console.log(secretNum);
    let message = "";
    let displayMessage = document.querySelector('.message');
    displayMessage.textContent = message;
    let playAgain = document.querySelector("#play-again"); //grab the button
    playAgain.classList.add('hide'); //Adds the hidden class so the play again button disapears. 
    // let viewScores = document.querySelector("#high-scores");
    // viewScores.classList.add('hide'); //remove the class
}

//New High Scores method: 
let highScores = document.querySelector('#high-scores');
function displayHighScores() {
    let table = '';
    for(const[index, turn] of obj.entries()) {
        table += `<tr>
                    <td> Round ${index + 1} </td>
                    <td> Secret Number: ${turn.secretNum}</td>
                    <td> Tries: ${turn.numberOfGuesses}</td>
                </tr>`;
    }
    document.querySelector('#high-scores table').insertAdjacentHTML('afterbegin', table);
}

function viewHighScores() {
    highScores.toggleAttribute('hidden');
    updateHighScores();
}

function updateHighScores() {
    if(highScores.hasAttribute('hidden')) {
        document.querySelector('#high-scores table').innerHTML = '';
    }
    // if(playAgain) {
    //     //If they hit play again, then the high scores should hide
    // }
    else {
        displayHighScores();
        
    }
}
