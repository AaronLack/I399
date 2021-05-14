'use strict';
// GOAL: Write a Meme Generator

const images = [
  { 
    name: "Cyber Brad", 
    url: "cyber_brad.png" 
  }, {
    name: "Kermit with Tea", 
    url: "kermit_tea.jpg" 
  }, {
    name: "Shocked Cat", 
    url: "shocked_cat.jpg" 
  }
];

// General Algorithm:

// A. Provide user with an interface:
//  • H1 title "Meme Generator"
//  • three clickable images with labels (create w/JS)
//  • two inputs (top text and bottom text)
//  • one "generate meme" button
//  • empty-for-now div to hold completed meme
const meme = document.querySelector(".meme");
const msg1 = document.querySelector("#msg1");
const msg2 = document.querySelector("#msg2");
const button = document.querySelector("button");
const choices = document.querySelector(".choices");


// B. Set up (JS & HTML)
// Using the provided array of images, create the three interface images

//Ours from class (Another way to do it).
// images.forEach(element => {
//   document.querySelector('.choices').insertAdjacentHTML('afterbegin', `<figure>
//   <img src="images/${element.url}" alt="shocked_cat">
//   <figcaption>${element.name}</figcaption>
//   </figure>`)
// })

images.forEach((image) => {
  let newImage = `
    <figure>
      <img src="images/${image.url}" alt="${image.name}">
      <figcaption>${image.name}</figcaption>
    </figure>
  `;
  choices.insertAdjacentHTML("beforeend", newImage);
});

// C. Listen for interface interactions (JS & CSS)
// • The images should act like buttons (CSS)
//   On image click (JS), an image is "selected" both visually & in code's logic
// • On button click, the selected image and any text from the inputs is collected

// D. Update the interface in response (JS & CSS & HTML)
//    Fill empty meme div with:
//  • selected image => background image
//  • selected text from input => H2s
/* <h2>online courses?</h2>
   <h2>info profs: no problem</h2> */


// C
const memeImgs = choices.querySelectorAll("img");
let selectedImg = "images/kermit_tea.jpg";

function makeActive(event) {
  let currentImg = event.target;

  memeImgs.forEach((memeImg) => {
    memeImg.classList.remove("active");
  });

  currentImg.classList.add("active");

  selectedImg = currentImg.getAttribute("src");
}

memeImgs.forEach((memeImg) => {
  memeImg.addEventListener("click", makeActive);
});

// C & D
button.addEventListener("click", () => {
  // clear any previous content
  meme.innerHTML = "";

  // place current selected image
  meme.style.backgroundImage = `url(${selectedImg})`;

  // grab text from inputs
  let text1 = msg1.value;
  let text2 = msg2.value;

  // structure HTML (text)
  const html = `
    <h2>${text1}</h2>
    <h2>${text2}</h2>
  `;

  // insert HTML (text)
  meme.insertAdjacentHTML("beforeend", html);

  // reset text from inputs
  msg1.value = "";
  msg2.value = "";
});




// E. Allow user to make new choices and create a new meme

