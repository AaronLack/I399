'use strict';

// initialize canvas
const canvas = document.querySelector("canvas");
const { width, height } = canvas;

// initialize canvas drawing settings
const ctx = canvas.getContext("2d");
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 20;

// initialize drawing options
let color = "#000000";

// * STEP ONE: test out canvas
// Place cursor in the middle and make a dot
let x = width / 2;
let y = height / 2;
// ctx.beginPath();
// ctx.moveTo(x, y);
// ctx.lineTo(x, y);
// ctx.stroke();
// ctx.strokeStyle = '#000000';

// VARIABLES for mouseDraw()
let lastX = 0;
let lastY = 0;
let isDrawing = false;

// VARIABLES for keyboardDraw()
// for use in Step Five keyboard draw
const MOVE_AMOUNT = 10;
let keysPressed = {};

// * STEP TWO: draw with the mouse
function mouseDraw(event) {
  // stop if not mouse down
  if (!isDrawing) return;

  // * set the stroke color
  ctx.strokeStyle = setColor();

  // draw the line
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  // console.log(lastX, lastY);
  // console.log(event.offsetX, event.offsetY);

  ctx.lineTo(event.offsetX * 2, event.offsetY * 2);
  ctx.stroke();

  // reset lastX and lastY to be current event's offsetX and offsetY
  [lastX, lastY] = [event.offsetX * 2, event.offsetY * 2];
}

// add listeners for mouse movements in canvas
canvas.addEventListener("mousedown", (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX * 2, event.offsetY * 2];
});
canvas.addEventListener("mousemove", mouseDraw);
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  // * reset random color
});
// if we want to stop drawing if mouse leaves the canvas
// canvas.addEventListener('mouseout', () => isDrawing = false);

// * STEP THREE: clear the screen
function clearCanvas() {
  // clear the canvas
  ctx.clearRect(0, 0, width, height);

  // shake the canvas
  canvas.classList.add("shake");
  canvas.addEventListener(
    "animationend",
    function () {
      canvas.classList.remove("shake");
    },
    { once: true }
  );

  // reset initial x and y positions
  x = width / 2;
  y = height / 2;
}

document.querySelector(".clear").addEventListener("click", clearCanvas);


// * STEP FOUR: draw using keyboard's arrow keys
document.addEventListener("keydown", (event) => {
  // if the key pressed is an arrow...
  if (event.key.includes("Arrow")) {
    // keeps arrow from moving screen - overrides default behavior
    event.preventDefault();
    // keep track of whether key is being pressed
    keysPressed[event.key] = true;
    // console.log(keysPressed);

    // * set stroke color
    ctx.strokeStyle = color;

    // start line
    ctx.beginPath();
    ctx.moveTo(x, y);

    // adjust line by the movement amount and arrow(s) pressed
    if (keysPressed.ArrowUp && keysPressed.ArrowRight) {
      y -= MOVE_AMOUNT;
      x += MOVE_AMOUNT;
    } else if (keysPressed.ArrowUp && keysPressed.ArrowLeft) {
      y -= MOVE_AMOUNT;
      x -= MOVE_AMOUNT;
    } else if (keysPressed.ArrowDown && keysPressed.ArrowRight) {
      y += MOVE_AMOUNT;
      x += MOVE_AMOUNT;
    } else if (keysPressed.ArrowDown && keysPressed.ArrowLeft) {
      y += MOVE_AMOUNT;
      x -= MOVE_AMOUNT;
    } else if (keysPressed.ArrowUp) {
      y -= MOVE_AMOUNT;
    } else if (keysPressed.ArrowDown) {
      y += MOVE_AMOUNT;
    } else if (keysPressed.ArrowRight) {
      x += MOVE_AMOUNT;
    } else if (keysPressed.ArrowLeft) {
      x -= MOVE_AMOUNT;
    } else {
  }

    // draw line
    ctx.lineTo(x, y);
    ctx.stroke();
  }
});

// when the key is released
document.addEventListener("keyup", (event) => {
    // remove the keypress we were tracking
    delete keysPressed[event.key];
  
});

// TODO: Add an event listener to all buttons with a data-option (but not clear)
let allButtons = document.querySelectorAll('button');
let allButtonsData = document.querySelectorAll("[data-option]");
allButtonsData.forEach(element => {
  element.addEventListener('click', handleButton);
});

// TODO: On click, call a "handleButton" function
// TODO: When a button is clicked, make it .active
// TODO: Function needs to grab option off the data- attribute

//The text thats on the buttons
let option = 'black';
function handleButton(event) {
  option = event.target.dataset.option;
  //Makes all classes active
  //Removes the active class on all buttons, and adds an active class to the clicked button
  allButtons.forEach(item => {
    item.classList.remove('.active');
  });
  option.classList.add('.active');
}

// TODO: Based on the option, set color of the stroke
function setColor() {
  let hue = 0;
  let saturation = '100%';
  let light = '50%';
  if(option === 'erase') {
    color = '#808080';
  }
  if(option === 'wild') {
    color = `hsl(${Math.random()*360},${saturation},${light})`;
  }
  if(option === 'rainbow') {
    hue+=2; //Updates hue for rainbows
    color =`hsl(${hue},${saturation},${light})`;
  }
  if(option === 'random') {
    color = `hsl(${random},${saturation},${light})`  
  }
  return color;
}


// TODO: Set the line width based on radio button value
document.querySelectorAll('input').forEach(input => {
  input.addEventListener('click', () => {
    // ctx.lineWidth = parseInt(input.getAttribute('value'));
    ctx.lineWidth = parseInt(input.value);
  })
})
