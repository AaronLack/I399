'use strict';
console.log('JS working');

//Aaron Lack
/* 
    PRACTICE PROBLEM #1.1: GUESSING GAME
    Write a program that uses prompt() to ask the user to guess a number between 1 and 100 (we've given you the code to choose a random number)
        • If the value is not in range, stop the program and let the user know the game is over (this is a serious game, user! we don't mess around!)
        • If the guess is a valid value, then let the user know that their guess is too high or too low and let them try again
        • If the guess is correct, congrats are in order, remind the user of their correct answer, and the game should end - example output - "You guessed it! Congrats! The secret number was 88."
        • Use prompt / alert to interact with the user
*/

// Selects a secret number b/w 1-100
// Q: what happens if we used Math.floor() instead?

// A: If we use Math.floor over Math.ciel, the range of values generated would be from 0-99 instead of 1-100. 

const secretNum = Math.ceil(Math.random() * 100); 
let guess = 0;
//Use a while loop to keep the game going, we don't know how many iterations/guesses it will take to find the right number
while (guess != secretNum) {
    guess = prompt(`Guess a number between 1 and 100: `); //Prompt
    //Checks if the guess is too high and in range of 100
    if(guess > secretNum && guess <= 100) { 
        alert("Too High!");
    }
    //Checks if the guess is too high and in range of 0
    else if(guess < secretNum && guess >= 0) {
        alert("Too Low!");
    }
    //Checks if guess is out of range of 0 and 100, if it is, end the loop with a break
    else if(guess > 100 || guess < 0) {
        alert("Your guess is not in range, GAME OVER");
        break;
    }
    //Checks if guess isn't a number using the isNaN function, and breaks if this happens
    else if(isNaN(guess)) {
        alert("Your guess is not a number, GAME OVER");
        break;
    }
    //Prints the right number and ends the loop with a break. 
    else {
        alert(`Nice Guess! The secret number was: ${secretNum}`);
        break;
    }
}

/* 
    PRACTICE PROBLEM #1.2: TOTAL ITEMS
        • Prompt the user for how many items they want to scan at the self-checkout
        • For each item, ask the user how much that item costs 
          (Ignore that it's a terrible checkout system!)
        • Total the value of all items and display result to user
        • Look it up: to round off a number to two places use .toFixed()
        
        Example output: 
        "How many items would you like to buy?" // 3
        "How much does item 1 cost?" // 3.75
        ...
        "These 3 items will cost $9.21."
*/

const numItems = prompt(`How many items do you want to scan at the self-checkout? `); //Prompt
let total = 0; //Initialize total
for(let i = 1; i <= numItems; i++) { //for however many items you have starting with 1
    price = prompt(`How much does item ${i} cost? `) //Ask what the price is
        total = Number(total) + Number(price); //The total is the new total plus each price of the item. Type conversion to a number. 
}
console.log(`These ${numItems} items will cost $${total}.`); //Number of items plus the total

//This code works, but javascrip does this wierd thing where it won't let you enter or skip one of the entries, and I'm not sure if thats a JS problem or a chrome problem


/* 
    PRACTICE PROBLEM #1.3: FIND THE FACTORS
        • Use the console.log() for output in this problem
        • Use const to set a number to find factors for
        • Find all of the factors for that number and output the result as shown below
        Example output: 
        "The factors for 24 are: 1 2 3 4 6 8 12 24"
        
*/

const num = prompt(`Please enter a positive number: `); //Prompt
let factors = ""; //placeholder string for all of the factors
for(let i = 0; i <= num; i++) { //i must bet set <= to the num to include that num as a factor
    if(num%i === 0) { //If the num is divisible by a number
        factors += i + " "; //This helps keep the factors on one line
    }
}
console.log(`The factors for ${num} are: ${factors}`); //Output string

