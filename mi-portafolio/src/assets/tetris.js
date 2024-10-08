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

  const BLOCK_SIZE = 30; // Puedes ajustar este tamaño si quieres bloques más pequeños o grandes
  const ROWS = Math.floor(canvas.height / BLOCK_SIZE); // Calcula el   número de filas basado en la altura
  const COLUMNS = Math.floor(canvas.width / BLOCK_SIZE); // Calcula el número de columnas basado en el ancho

  const COLORS = ['cyan', 'blue', 'orange', 'yellow', 'green', 'purple', 'red'];
  const SHAPES = [
    [[1, 1, 1, 1]], // I
    [[1, 1, 1], [0, 1, 0]], // T
    [[1, 1], [1, 1]], // O
    [[1, 1, 0], [0, 1, 1]], // S
    [[0, 1, 1], [1, 1, 0]], // Z
    [[1, 1, 1], [1, 0, 0]], // L
    [[1, 1, 1], [0, 0, 1]],  // J
    [[1, 1, 1], [1, 0, 0], [1, 0, 0]] //F
  ];

  let board = createBoard();
  let currentPiece = getRandomPiece();
  let pieceX = Math.floor(COLUMNS / 2) - Math.floor(currentPiece.shape[0].length / 2);
  let pieceY = 0;
  let gameOver = false;
  let isPaused = false;

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
        if (piece.shape[y][x]) { // Si el bloque es parte de la pieza
          const newX = x + offsetX;
          const newY = y + offsetY;
          // Verificar límites
          if (newX < 0 || newX >= COLUMNS || newY >= ROWS) {
            return true; // Colisión con los límites del tablero
          }
          // Verificar colisión con otras piezas en el tablero
          if (newY >= 0 && board[newY][newX]) {
            return true; // Colisión con otro bloque en el tablero
          }
        }
      }
    }
    return false; // Sin colisiones
  }

  // Función para añadir la pieza al tablero
  function addPieceToBoard(piece, offsetX, offsetY) {
    piece.shape.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell) {
          if (y + offsetY >= 0 && y + offsetY < ROWS && x + offsetX >= 0 && x + offsetX < COLUMNS) {
            board[y + offsetY][x + offsetX] = piece.color;
          }
        }
      });
    });
    console.log('Estado del tablero después de añadir la pieza:', board);
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

    // Evitar el desplazamiento de la página con las teclas de flecha
    if (['ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp'].includes(event.key)) {
      event.preventDefault(); // Evita el scroll de la página
    }

    // Funcionalidad de la barra espaciadora para pausar y reanudar el juego
    if (event.key === ' ') {
      isPaused = !isPaused; // Cambia el estado de pausa directamente
      return; // Evita la propagación del evento
    }

    if (isPaused) return; // Si el juego está en pausa, no se procesa ninguna tecla

    // Control de la pieza actual
    if (event.key === 'ArrowLeft') {
      if (!checkCollision(currentPiece, pieceX - 1, pieceY)) {
        pieceX--; // Mueve la pieza a la izquierda
      }
    } else if (event.key === 'ArrowRight') {
      if (!checkCollision(currentPiece, pieceX + 1, pieceY)) {
        pieceX++; // Mueve la pieza a la derecha
      }
    } else if (event.key === 'ArrowDown') {
      if (!checkCollision(currentPiece, pieceX, pieceY + 1)) {
        pieceY++; // Mueve la pieza hacia abajo
      }
    } else if (event.key === 'ArrowUp') {
      const rotatedPiece = {
        shape: currentPiece.shape[0].map((_, index) =>
          currentPiece.shape.map(row => row[index]).reverse()),
        color: currentPiece.color,
      };
      if (!checkCollision(rotatedPiece, pieceX, pieceY)) {
        currentPiece = rotatedPiece; // Rota la pieza
      }
    }
  });

  // Función principal del juego
  function drop() {
    if (isPaused) return; // Si el juego está en pausa, no se ejecuta el drop
    if (checkCollision(currentPiece, pieceX, pieceY + 1)) {
      addPieceToBoard(currentPiece, pieceX, pieceY); // Añade la pieza al tablero
      clearRows(); // Elimina las líneas completas
      currentPiece = getRandomPiece(); // Obtiene una nueva pieza
      pieceX = Math.floor(COLUMNS / 2) - Math.floor(currentPiece.shape[0].length / 2);
      pieceY = 0; // Reinicia la posición de la pieza

      // Verifica si el juego está sobre
      if (checkCollision(currentPiece, pieceX, pieceY)) {
        gameOver = true; // El juego ha terminado
        alert('Game Over!');
      }
    } else {
      pieceY++; // Mueve la pieza hacia abajo
    }

    // Limpia el canvas y dibuja el tablero y la pieza
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    board.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell) {
          drawBlock(x, y, cell);
        }
      });
    });

    drawPiece(currentPiece, pieceX, pieceY);
  }

  // Intervalo para el bucle del juego
  setInterval(drop, 1000);
}
