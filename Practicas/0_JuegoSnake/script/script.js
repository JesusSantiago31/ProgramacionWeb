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

drawSnake = () =>{
    snake.forEach(square => drawSquare(square, 'snakeSquare'));
}
//Rellena cada cuadrado del tablero
// @params
// square: posición del cuadrado
// type: tipo de cuadrad0 (emptySquare. snakeSquare, foodSquare)
const drawSquare =(square, type) =>{
    const [row, column] = square.split('');
    boardSquares[row][column] = squareTypes[type];
    const squareElement = document.getElementById(square);

    if (type === 'emptySquare'){
        emptySquares.push(square);
    }else{
        if(emptySquares.indexOf(square) !== -1){
            emptySquares.splice(emptySquares.indexOf(square),1);
        }
    }
}

// * Crear funcion para crear comida a lo largo y ancho del tablero
const createRandomFood = () => {
    const randomEmptySquare = emptySquares[Math.floor(Math.random() * emptySquares.length)]; //Elegir una casilla vacía
    drawSquare(randomEmptySquare, 'foodSquare');
}

// * Actualizar puntaje
const updateScore =() => {
    scoreBoard.innerText = score;
}

//Create Board
const createBoard= () =>{
    boardSquares.forEach((row, rowIndex) => {
        row.forEach((column, columndex) => {
            const squareValue = `${rowIndex}${columndex}`; //Identificar el valor del cuadrado en el que se encuentra
            const squareElement = document.createElement('div');
            squareElement.setAttribute('class','square emptySquare');
            squareElement.setAttribute('id', squareValue);

            //Tomar el board y agregar el elemento
            board.appendChild(squareElement);
            emptySquares.push(squareValue); 
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
    gameOverSign.style.display = 'none'; //Desaparecer el marcador de GameOver
    startButton.disabled = true; //Desabilitar el boton de Start mientras se juega
    drawSnake();
    updateScore();
    createRandomFood();
}

startButton.addEventListener('click', startGame);