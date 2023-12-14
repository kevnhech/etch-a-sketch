const grid = document.querySelector('#grid');
const gridSquare = document.createElement('div');

gridSquare.classList.add('grid-square');

// Append "square" to "container" 256 times
grid.appendChild(gridSquare);

while (grid.childElementCount < 256) {
  grid.appendChild(gridSquare.cloneNode(true));
}

// Add an event listener method to every div in the grid
const allGridSquares = document.querySelectorAll('.grid-square');

allGridSquares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.setAttribute('style', 'background-color: black;')
  });
});