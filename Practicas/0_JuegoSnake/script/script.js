// HTML Elements
const board = document.getElementById('board');
const scoreBoard = document.getElementById('scoreBoard');
const startButton = document.getElementById('start');
const gameOverSign = document.getElementById('gameOver')

//Game Settings
const boardSize = 10;
const gameSpeed = 100;
const squareTypes={
    emptySquare: 0,
    snakeSquare: 1,
    foodSquare: 2
};
// Mapping Directions
const directions={
    ArrowUp: -10,
    ArrowDown: 10,
    ArrowRight: 1,
    ArrowLeft: -1
};
//Game Variables
let snake; //Snake's array
let score;
let direction;
let boardSquares; 
let emptySquares; // To have a space available to insert the snake's food
let moveInterval; 

//Create Board
const createBoard= () =>{
    boardSquares.forEach((row, rowIndex) => {
        row.forEach((column, columndex) => {
            const squareValue = `${rowIndex}${columndex}`;
            const squareElement = document.createElement('div');
        });
    });
}

// setGame function
//Board Structure
const setGame= () =>{
    snake = ['00', '01', '02', '03']; // Paint the snake
    score = snake.length;
    direction = 'ArrowRight'; // Starting to right
    boardSquares = Array.from(Array(boardSize), () => new Array (boardSize).fill(squareTypes.emptySquare)); // Creating the board 10 x 10 with emptySquares or with 0 like a value
    console.log(boardSquares);
    board.innerHTML='';
    emptySquares=[]; 
    createBoard();
}
// Function
const startGame = () =>{
    setGame();
}

startButton.addEventListener('click', startGame);