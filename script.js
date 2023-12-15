const grid = document.querySelector('#grid');
const gridSquare = document.createElement('div');

gridSquare.classList.add('grid-square');

// Append "square" to "container" 256 times

while (grid.childElementCount < 256) {
  grid.appendChild(gridSquare.cloneNode(true));
}

// Add an event listener method to every div in the grid
let allGridSquares = document.querySelectorAll('.grid-square');
let squareSize = '60';

allGridSquares.forEach((square) => {
  square.setAttribute('style', 'width: ' + squareSize + 'px; height: ' + squareSize + 'px; border: 1px solid lightgrey');

  square.addEventListener('mouseover', () => {
    square.setAttribute('style', 'background-color: black; width: ' + squareSize + 'px; height: ' + squareSize + 'px');
  });
});

// Send the user a prompt asking for the number of squares per side for the new grid
const updateGrid = document.querySelector('#update-grid');

updateGrid.addEventListener('click', () => {
  let userInput = prompt('How many squares per side would you like? (Max: 100)', '');

  while (+userInput > 100) {
    alert("Error. Please enter a value equal to or below 100.")

    userInput = prompt('How many squares per side would you like? (Max: 100)', '');
  }

  while (grid.hasChildNodes()) {
    grid.removeChild(grid.firstChild);
  }

  squareSize = 960 / +userInput;
  
  while (grid.childElementCount < (userInput ** 2)) {
    grid.appendChild(gridSquare.cloneNode(true));
  }
  
  allGridSquares = document.querySelectorAll('.grid-square');

  allGridSquares.forEach((square) => {
    square.setAttribute('style', 'width: ' + squareSize + 'px; height: ' + squareSize + 'px; border: 1px solid lightgrey');

    square.addEventListener('mouseover', () => {
      square.setAttribute('style', 'background-color: black; width: ' + squareSize + 'px; height: ' + squareSize + 'px');
    });
  });
});