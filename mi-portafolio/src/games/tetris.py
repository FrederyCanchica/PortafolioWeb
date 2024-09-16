import pygame
import random

# Inicializa Pygame
pygame.init()

# Configuraciones de la pantalla
SCREEN_WIDTH = 300
SCREEN_HEIGHT = 600
BLOCK_SIZE = 30
BOARD_WIDTH = SCREEN_WIDTH // BLOCK_SIZE
BOARD_HEIGHT = SCREEN_HEIGHT // BLOCK_SIZE

screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption('Tetris')

# Colores
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)
CYAN = (0, 255, 255)
MAGENTA = (255, 0, 255)
YELLOW = (255, 255, 0)
ORANGE = (255, 165, 0)

# Formas de las piezas
SHAPES = [
    [[1, 1, 1, 1]],  # I
    [[1, 1, 1], [0, 1, 0]],  # T
    [[1, 1], [1, 1]],  # O
    [[1, 1, 0], [0, 1, 1]],  # S
    [[0, 1, 1], [1, 1, 0]],  # Z
    [[1, 1, 1], [1, 0, 0]],  # L
    [[1, 1, 1], [0, 0, 1]]   # J
]

# Función para dibujar un bloque
def draw_block(x, y, color):
    pygame.draw.rect(screen, color, (x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE))

# Función para dibujar la forma en la pantalla
def draw_shape(shape, x_offset, y_offset, color):
    for y, row in enumerate(shape):
        for x, cell in enumerate(row):
            if cell:
                draw_block(x + x_offset, y + y_offset, color)

# Función para chequear colisiones
def check_collision(board, shape, x_offset, y_offset):
    for y, row in enumerate(shape):
        for x, cell in enumerate(row):
            if cell:
                board_x = x + x_offset
                board_y = y + y_offset
                if (board_x < 0 or board_x >= BOARD_WIDTH or
                        board_y >= BOARD_HEIGHT or
                        board[board_y][board_x]):
                    return True
    return False

# Función para añadir una forma al tablero
def add_shape_to_board(board, shape, x_offset, y_offset):
    for y, row in enumerate(shape):
        for x, cell in enumerate(row):
            if cell:
                board[y + y_offset][x + x_offset] = 1

# Función para eliminar filas completas
def clear_rows(board):
    full_rows = [i for i, row in enumerate(board) if all(row)]
    for i in full_rows:
        del board[i]
        board.insert(0, [0] * BOARD_WIDTH)
    return len(full_rows)

# Función principal del juego
def main():
    clock = pygame.time.Clock()
    board = [[0] * BOARD_WIDTH for _ in range(BOARD_HEIGHT)]
    current_piece = random.choice(SHAPES)
    piece_color = random.choice([RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, ORANGE])
    piece_x = BOARD_WIDTH // 2 - len(current_piece[0]) // 2
    piece_y = 0
    game_over = False

    while not game_over:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                return
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_LEFT:
                    if not check_collision(board, current_piece, piece_x - 1, piece_y):
                        piece_x -= 1
                if event.key == pygame.K_RIGHT:
                    if not check_collision(board, current_piece, piece_x + 1, piece_y):
                        piece_x += 1
                if event.key == pygame.K_DOWN:
                    if not check_collision(board, current_piece, piece_x, piece_y + 1):
                        piece_y += 1
                if event.key == pygame.K_UP:
                    rotated_piece = list(zip(*current_piece[::-1]))
                    if not check_collision(board, rotated_piece, piece_x, piece_y):
                        current_piece = rotated_piece

        if not check_collision(board, current_piece, piece_x, piece_y + 1):
            piece_y += 1
        else:
            add_shape_to_board(board, current_piece, piece_x, piece_y)
            lines_cleared = clear_rows(board)
            current_piece = random.choice(SHAPES)
            piece_color = random.choice([RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, ORANGE])
            piece_x = BOARD_WIDTH // 2 - len(current_piece[0]) // 2
            piece_y = 0
            if check_collision(board, current_piece, piece_x, piece_y):
                game_over = True

        screen.fill(BLACK)
        for y, row in enumerate(board):
            for x, cell in enumerate(row):
                if cell:
                    draw_block(x, y, WHITE)

        draw_shape(current_piece, piece_x, piece_y, piece_color)
        pygame.display.flip()
        clock.tick(3)

    pygame.quit()

if __name__ == "__main__":
    main()