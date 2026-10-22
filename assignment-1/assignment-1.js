'use strict';

const celsius = parseFloat(prompt('Enter a temperature in Celsius:'));

const fahrenheit = (celsius * 9) / 5 + 32;

const kelvin = celsius + 273.15;

document.getElementById('fahrenheit').textContent =
  `Temperature in Fahrenheit: ${fahrenheit.toFixed(2)}°F`;

document.getElementById('kelvin').textContent =
  `Temperature in Kelvin: ${kelvin.toFixed(2)}K`;
