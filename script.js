const grid = document.querySelector('#grid');
const gridSquare = document.createElement('div');

gridSquare.classList.add('grid-square');

// Append "square" to "container" 256 times
grid.appendChild(gridSquare);

while (grid.childElementCount < 256) {
  grid.appendChild(gridSquare.cloneNode(true));
}
