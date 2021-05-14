// MDN EXAMPLE

const el = document.getElementById('div-03');

const r1 = el.closest("#div-02");  
// returns the element with the id=div-02

const r2 = el.closest("div div");  
// returns the closest ancestor which is a div in div, here it is the div-03 itself

const r3 = el.closest("article > div");  
// returns the closest ancestor which is a div and has a parent article, here it is the div-01

const r4 = el.closest(":not(div)");
// returns the closest ancestor which is not a div, here it is the outmost article

// UNCOMMENT TO SEE RESULTS
// console.log(el, r1, r2, r3, r4);


// OUR TEST
// How does this work when buttons and event listeners are involved?

// (1) grab button element
const buttons = document.querySelectorAll('button');
// console.log(buttons);

// (2) grab buttons, add event listeners
buttons.forEach(button => button.addEventListener('click', (event) => {
  // console.log(event);
  // console.log(event.target);

  // (3) output closest element
  console.log(event.target.closest('article'));
}));
