'use strict';

const number = parseInt(prompt('Enter a positive integer: '));

let sum = 0;
for (let i = 1; i <= number; i++) {
  sum += i;
}

document.getElementById('sum').textContent =
  `The sum of all natural numbers up to ${number} is: ${sum}`;
