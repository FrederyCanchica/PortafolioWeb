export default function tetris() {
    const canvas = document.getElementById('tetrisCanvas');
    if (!canvas) {
      console.error('Canvas not found');
      return;
    }
  
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Failed to get canvas context');
      return;
    }
  
    const BLOCK_SIZE = 30;
    const ROWS = canvas.height / BLOCK_SIZE;
    const COLUMNS = canvas.width / BLOCK_SIZE;
  
    const COLORS = ['cyan', 'blue', 'orange', 'yellow', 'green', 'purple', 'red'];
    const SHAPES = [
      [[1, 1, 1, 1]], // I
      [[1, 1, 1], [0, 1, 0]], // T
      [[1, 1], [1, 1]], // O
      [[1, 1, 0], [0, 1, 1]], // S
      [[0, 1, 1], [1, 1, 0]], // Z
      [[1, 1, 1], [1, 0, 0]], // L
      [[1, 1, 1], [0, 0, 1]]  // J
    ];
  
    let board = createBoard();
    let currentPiece = getRandomPiece();
    let pieceX = Math.floor(COLUMNS / 2) - Math.floor(currentPiece.shape[0].length / 2);
    let pieceY = 0;
    let gameOver = false;
  
    // Función para crear el tablero vacío
    function createBoard() {
      let board = [];
      for (let y = 0; y < ROWS; y++) {
        board[y] = new Array(COLUMNS).fill(0);
      }
      return board;
    }
  
    // Función para obtener una pieza aleatoria
    function getRandomPiece() {
      const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      return { shape, color };
    }
  
    // Función para dibujar un bloque
    function drawBlock(x, y, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    }
  
    // Función para dibujar la pieza en el canvas
    function drawPiece(piece, offsetX, offsetY) {
      piece.shape.forEach((row, y) => {
        row.forEach((cell, x) => {
          if (cell) {
            drawBlock(x + offsetX, y + offsetY, piece.color);
          }
        });
      });
    }
  
    // Función para verificar colisiones
    function checkCollision(piece, offsetX, offsetY) {
      for (let y = 0; y < piece.shape.length; y++) {
        for (let x = 0; x < piece.shape[y].length; x++) {
          if (piece.shape[y][x]) {
            const newX = x + offsetX;
            const newY = y + offsetY;
            if (newX < 0 || newX >= COLUMNS || newY >= ROWS || board[newY] && board[newY][newX]) {
              return true;
            }
          }
        }
      }
      return false;
    }
  
    // Función para añadir la pieza al tablero
    function addPieceToBoard(piece, offsetX, offsetY) {
      piece.shape.forEach((row, y) => {
        row.forEach((cell, x) => {
          if (cell) {
            board[y + offsetY][x + offsetX] = piece.color;
          }
        });
      });
    }
  
    // Función para eliminar las líneas completas
    function clearRows() {
      let linesCleared = 0;
      outer: for (let y = ROWS - 1; y >= 0; y--) {
        for (let x = 0; x < COLUMNS; x++) {
          if (!board[y][x]) {
            continue outer;
          }
        }
        board.splice(y, 1);
        board.unshift(new Array(COLUMNS).fill(0));
        linesCleared++;
      }
      return linesCleared;
    }
  
    // Manejador de eventos de teclado
    document.addEventListener('keydown', event => {
      if (gameOver) return;
      if (event.key === 'ArrowLeft') {
        if (!checkCollision(currentPiece, pieceX - 1, pieceY)) {
          pieceX -= 1;
        }
      } else if (event.key === 'ArrowRight') {
        if (!checkCollision(currentPiece, pieceX + 1, pieceY)) {
          pieceX += 1;
        }
      } else if (event.key === 'ArrowDown') {
        if (!checkCollision(currentPiece, pieceX, pieceY + 1)) {
          pieceY += 1;
        }
      } else if (event.key === 'ArrowUp') {
        const rotatedPiece = rotatePiece(currentPiece);
        if (!checkCollision(rotatedPiece, pieceX, pieceY)) {
          currentPiece.shape = rotatedPiece.shape;
        }
      }
    });
  
    // Función para rotar la pieza
    function rotatePiece(piece) {
      const rotatedShape = piece.shape.map((_, index) => piece.shape.map(row => row[index]).reverse());
      return { ...piece, shape: rotatedShape };
    }
  
    // Función para actualizar el juego
    function update() {
      if (gameOver) return;
  
      if (!checkCollision(currentPiece, pieceX, pieceY + 1)) {
        pieceY += 1;
      } else {
        addPieceToBoard(currentPiece, pieceX, pieceY);
        clearRows();
        currentPiece = getRandomPiece();
        pieceX = Math.floor(COLUMNS / 2) - Math.floor(currentPiece.shape[0].length / 2);
        pieceY = 0;
        if (checkCollision(currentPiece, pieceX, pieceY)) {
          gameOver = true;
          alert('Game Over');
        }
      }
  
      // Renderizamos el tablero y la pieza actual
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      board.forEach((row, y) => {
        row.forEach((color, x) => {
          if (color) {
            drawBlock(x, y, color);
          }
        });
      });
      drawPiece(currentPiece, pieceX, pieceY);
  
      setTimeout(update, 500);  // Controla la velocidad de caída de las piezas
    }
  
    // Inicia el juego
    update();
  }
  