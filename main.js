/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to repeat, currently set at 10.
 */
const gridWidth = 10;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}




/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)

/* renaming each div to color*/
const palette = document.querySelectorAll('div');
const lightBlueDiv = palette[0];
const orangeDiv = palette[1];
const ligtGreenDiv = palette[2];
const yellowDiv = palette[3];
const whiteDiv = palette[4];

const currentBrush = document.querySelector('.current-brush')










/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.

const removeColors = function(){
  currentBrush.classList.remove('color-1') 
  currentBrush.classList.remove('color-2')
  currentBrush.classList.remove('color-3')
  currentBrush.classList.remove('color-4')
  currentBrush.classList.remove('color-5')
}
const turnToBlue = function(){
  removeColors()
  currentBrush.classList.add('color-1')
}
const turnToOrange = function(){
  removeColors()
  currentBrush.classList.add('color-2')
}
const turnToGreen = function(){
  removeColors()
  currentBrush.classList.add('color-3')
}
const turnToYellow = function(){
  removeColors()
  currentBrush.classList.add('color-4')
}
const turnToWhite = function(){
  removeColors()
  currentBrush.classList.add('color-5')
}



/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.

lightBlueDiv.addEventListener('click', turnToBlue)
orangeDiv.addEventListener('click', turnToOrange)
ligtGreenDiv.addEventListener('click', turnToGreen)
yellowDiv.addEventListener('click', turnToYellow)
whiteDiv.addEventListener('click', turnToWhite)

