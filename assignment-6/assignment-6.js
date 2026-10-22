'use strict';

const number = parseInt(prompt('Enter a positive integer: '));

const table = document.querySelector('table');

if (number > 0) {
  for (let i = 1; i <= number; i++) {
    const newRow = document.createElement('tr');
    table.append(newRow);

    for (let j = 1; j <= number; j++) {
      const newCell = document.createElement('td');
      newCell.textContent = j * i;
      newRow.append(newCell);
    }
  }
}
