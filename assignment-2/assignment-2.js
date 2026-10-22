'use strict';

const x1 = parseFloat(prompt('Enter x1:'));
const y1 = parseFloat(prompt('Enter y1:'));
const x2 = parseFloat(prompt('Enter x2:'));
const y2 = parseFloat(prompt('Enter y2:'));

const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

document.getElementById('distance').textContent =
  `Distance between points: ${distance.toFixed(2)}`;
