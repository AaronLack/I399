'use strict';

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

// #1 Create color blocks (and shuffle them)
let allColors = ['red', 'orange', 'gold', 'green', 'blue', 'purple'];
let blocks = '';

// randomize the array
allColors = shuffle(allColors);

// create HTML with one div for each color - notice the data-
for (let color of allColors) {
    blocks += `<div class="color" data-color-name="${color}"></div>\n`;
}
// insert the HTML
document.querySelector('#color-blocks').insertAdjacentHTML('afterbegin', blocks);

// #2 On click, reveal the color
const colors = document.querySelectorAll('.color');

//As a callback:
function changeColors(e) {
	console.log(e);
	// change the color
	// block.style.backgroundColor = block.dataset.colorName;
	// block.textContent = block.dataset.colorName;

	this.style.backgroundColor = this.dataset.colorName;
	this.textContent = this.dataset.colorName;
}

// for each color in colors, on click, make changes to the interface
colors.forEach(block => { 

    block.addEventListener('click', changeColors);
})
		//These three things do the exact same thing!
		// console.log('event target: ', event.target);
		// console.log('by element: ', block);
		// console.log('this: ', this);

        
		// OR could use "this" instead of "block" for the reference
    

