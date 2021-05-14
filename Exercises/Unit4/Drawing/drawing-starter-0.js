'use strict';

// initialize canvas
const canvas = document.querySelector("canvas");
const { width, height } = canvas;

// initialize canvas drawing settings
const ctx = canvas.getContext("2d");
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 20;
ctx.strokeStyle = '#000000';



// * STEP ONE: test out canvas
// Place cursor in the middle and make a dot
let x = width / 2;
let y = height / 2;
ctx.beginPath();
//Gets a point on the screen
ctx.moveTo(x, y);
//Draws a line
x = 300;
y = 300;
ctx.lineTo(x, y);
ctx.stroke();


