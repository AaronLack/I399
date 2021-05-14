'use strict';

// !! MAKE SLIDES ABOUT:
// removeEventListener
// setTimeOut
// https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae

// ! DIRECTIONS
// Turn our practice into a matching game

// Given three pairs of colors (6 total) in random order
// (use our cool shuffle algorithm to help you out)
// Create a matching game where the user clicks to reveal colors
// If two colors are revealed:
// 	...and they match - they stay revealed, user continues
//  ...and they do not math - they revert to black, user tries again
// When all blocks are matched, the game is over

// If you finish, allow the user to play again with a new mix of color blocks

// And if you finish that, make it work with any even number of blocks!


// Fisher-Yates (Knuth) Shuffle Algorithm
// For example, or find another simpler way...
function shuffle(array) {
	let currentIndex = array.length;
	let temporaryValue, randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
};

function makeColors(numMatches) {
	let colors = ['red', 'orange', 'gold', 'green', 'blue', 'purple', 'fuchsia'];
	let colorList = [];
	let color;

	while (colorList.length < numMatches * 2) {
		color = colors[Math.floor(Math.random() * colors.length)];
		if (!colorList.includes(color)) {
			colorList.push(color);
			colorList.push(color);
		}
	}

	return colorList;
}

const matchTotal = 4;

function createBlocks() {
	document.querySelector('#play-again').hidden = true;

	// #1 Create color blocks (and shuffle them)
	// let allColors = ['red', 'red', 'green', 'green', 'blue', 'blue'];
	let allColors = makeColors(matchTotal);
	let blocks = '';

	// randomize the array
	allColors = shuffle(allColors);
	console.log(allColors);

	// create HTML with one div for each color - notice the data-
	for (let color of allColors) {
		blocks += `<div class="color" data-color-name="${color}"></div>\n`;
	}
	// insert the HTML
	document.querySelector('#color-blocks').insertAdjacentHTML('afterbegin', blocks);

	// for each color in colors, on click, make changes to the interface
	document.querySelectorAll('.color').forEach(block => { 
		block.addEventListener('click', playGame);
	})
}

// #2 Start the game
let currentBlock, choices = [], matchesCount = 0;

function playAgain() {
	document.querySelector('#play-again').hidden = true;
	document.querySelector('#color-blocks').innerHTML = '';
	createBlocks();
	choices = [];
	matchesCount = 0;
	document.querySelectorAll('.color').forEach(block => { 
		block.addEventListener('click', playGame);
	})
}

document.querySelector('#play-again').addEventListener('click', playAgain);

function disableBlocks() {
	choices[0].removeEventListener('click', playGame);
	choices[1].removeEventListener('click', playGame);
	choices = [];
	console.log('disabled');	

	// #3 option to replay the game
	console.log(matchesCount);
	matchesCount += 1;
	if (matchesCount === matchTotal) {
		document.querySelector('#play-again').hidden = false;
	};
} 

function resetBlocks() {
	for (let i = 0; i < choices.length; i++) {
		choices[i].style.backgroundColor = 'black';
		choices[i].textContent = '';
	}
	choices = [];
	console.log('reset');
}

function showBlock(block) {
	block.style.backgroundColor = block.dataset.colorName;
    block.textContent = block.dataset.colorName;
}

function playGame(event) {
	console.log(event.target.dataset.colorName);
	currentBlock = event.target;

	// reveal block's color
	showBlock(currentBlock);
	// track the choice
	choices.push(currentBlock);

	if (choices.length === 2) {
		if (choices[0].dataset.colorName === choices[1].dataset.colorName) {
			// match made, disable blocks, reset choices
			console.log('match made', choices[0].dataset.colorName, choices[1].dataset.colorName);
			setTimeout(() => { disableBlocks() }, 500);
		} else {
			// match not made, reset blocks, reset choices
			console.log('match NOT made', choices[0].dataset.colorName, choices[1].dataset.colorName);
			setTimeout(() => { resetBlocks() }, 500);
		}
	} else {
		// wait for a second choice
		console.log('waiting');
	}
}

createBlocks();

