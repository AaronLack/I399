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
let color = '#000000';


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


// * STEP TWO: draw with the mouse
function mouseDraw(event) {
  // stop if not mouse down
  if (!isDrawing) return;

  // * set the stroke color
  ctx.strokeStyle = color;

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
    canvas.classList.add('shake');
    canvas.addEventListener('animationend', function() {
      canvas.classList.remove('shake');
    }, { once: true });
  
    // reset initial x and y positions
    x = width / 2;
    y = height / 2;
  }

document.querySelector('.clear').addEventListener('click', clearCanvas);