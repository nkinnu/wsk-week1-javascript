'use strict';

const firstSide = parseFloat(prompt('Enter the length of the first side:'));
const secondSide = parseFloat(prompt('Enter the length of the second side:'));
const thirdSide = parseFloat(prompt('Enter the length of the third side:'));

if (firstSide === secondSide && secondSide === thirdSide) {
  document.getElementById('triangleType').textContent =
    'The triangle is equilateral.';
} else if (
  firstSide === secondSide ||
  secondSide === thirdSide ||
  firstSide === thirdSide
) {
  document.getElementById('triangleType').textContent =
    'The triangle is isosceles.';
} else {
  document.getElementById('triangleType').textContent =
    'The triangle is scalene.';
}
