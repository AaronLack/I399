'use strict';
console.log('working');

// Practice Problems #2
// (1) Build a card deck - draw a card
// (2) Print animals - function that spits out a table of animal objects
// (3) Add a class / remove a class on a button?

/* 
    PRACTICE PROBLEM #2.1: BUILD A EUCHRE CARD DECK
    • In the card game Euchre, you have the cards 9, 10, Jack, Queen, King and Ace
    • For each of the four suits: Clubs, Diamonds, Hearts and Spades
    • Write a function that creates an array with the cards needed to play Euchre
    • One way to do this is to first create two arrays.. suits and cards (values)
    • We'd like to see you try out the for...of loop here, which is designed to loop on an array
    • Make sure you call the function and console.log the result
    
    Example output (length = 24):
    [ "9C", "10C", "JC", "QC", "KC", "AC", "9D", "10D", "JD", "QD", … ]
*/

function buildDeck() {
  let cardSuit = [`D`, `C`, `H`, `S`];
  let cardValues = [`9`,`10`,`J`,`Q`,`K`,`A`];
  let euchreCards = [];
  for (const i of cardSuit) {
    for (const j of cardValues) {
      euchreCards.push(`${j}`+`${i}`);
    };
  };
  return euchreCards;
}
console.log(buildDeck());


/* 
    PRACTICE PROBLEM #2.2: GET A HAND OF CARDS
    • Write a function that takes in deck of cards (an array)
    • And returns a hand - in Euchre, that's FIVE cards (5 cards) - one more time FIVE CARDS
    • The hand should be (1) a random selection of cards from the deck, and (2) no repeats
    • There are several ways to handle this using random and the array methods we know so far.. choose one that makes sense to you
    • If you didn't get #2.1, hard code what the output from the previous problem would look like into a variable
    • Make sure you call the function and console.log the result

    Example output:
    [ "10S", "9C", "AD", "JC", "AH" ]
*/

function getHand() {
  let cardSuit = [`D`, `C`, `H`, `S`];
  let cardValues = [`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`J`,`Q`,`K`,`A`];
  let cardDeck = [];
  //builds the full deck
  for (const i of cardSuit) {
    for (const j of cardValues) {
      cardDeck.push(`${j}`+`${i}`);
    };
  };
  //picks 5 random cards
  let randHand = [];
  let count = 0;
  while (count < 5) {
    let randNum = Math.floor(Math.random() * 52) //0-51 from array
    randHand.push(`${cardDeck[randNum]}`);
    //Check for duplicates
    cardDeck.splice(randNum, 1); //removes the card from cardDeck array
    count++;
  }
  return randHand;
}
console.log(getHand());

/* 
    PRACTICE PROBLEM #2.3: PRINT ANIMALS
    • We're going to switch gears for this last problem and practice our DOM / Object work
    • Given the following array of objects about zoo animals...
    • Write a function that takes an array of animal objects and 
      displays the information as an HTML table (TABLE/TR/TD tags) on our web page 
    • You may find .join() useful for printing out the coloring
    • MENTAL BONUS: Could you write the function to handle objects with uneven / unknown numbers of properties?
      Think through what we would need to be able to do.. we are not asking you to handle this for this problem set.

    P.S. Max came up with these - he says to tell you all that dragon fish can emit red light from their eyes?!?!
*/


/*
  Ifthere are uneven or unknown properties in an object, write a condition to check if there is any content and if there isn't put a default value like null into that missing entry. 

  let table = console.table(Object.values(zooAnimals));
  console.log(displayTable(zooAnimals));
*/


const zooAnimals = [
    {name: 'Red Panda', coloring: ['red', 'white'], habitat: 'forest'},
    {name: 'Snow Leopard', coloring: ['white', 'grey'], habitat: 'mountains'},
    {name: 'Dragon Fish', coloring: ['brown'], habitat: 'ocean'},
    {name: 'Gazelle', coloring: ['tan', 'white'], habitat: 'plains'},
];

function createTable(animals) {
  let table = '<table>\n';

  for(let animal of animals) {
    table += `\t<tr>\n`;
    table += `\t\<td><strong>${animal.name}</strong></td>\n`;
    table += `\t\t<td>${animal.coloring.join(', ')}</td>\n`;
    table += `\t\t<td>${animal.habitat}</td>\n`;
    table += `\t</tr>\n`;
  }
  table += `</table>\n`;
  document.querySelector('h1').insertAdjacentHTML('afterend', table);
}
createTable(zooAnimals);
  

