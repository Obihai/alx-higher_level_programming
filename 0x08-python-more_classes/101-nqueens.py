import sys

def is_valid(board, row, col):
    # Check if a queen can be placed at board[row][col]

    # Check if there is a queen in the same column
    for i in range(row):
        if board[i][col] == 1:
            return False

    # Check for queens in the top-left diagonal
    for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
        if board[i][j] == 1:
            return False

    # Check for queens in the top-right diagonal
    for i, j in zip(range(row, -1, -1), range(col, N)):
        if board[i][j] == 1:
            return False

    return True

def n_queens(board, row):
    # Solve the N queens problem using backtracking

    if row == N:
        # We have reached a solution
        print(board)
        return

    # Try placing a queen in each column of the current row
    for col in range(N):
        if is_valid(board, row, col):
            board[row][col] = 1
            n_queens(board, row + 1)
            board[row][col] = 0

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print('Usage: nqueens N')
        sys.exit(1)

    try:
        N = int(sys.argv[1])
    except ValueError:
        print('N must be a number')
        sys.exit(1)

    if N < 4:
        print('N must be at least 4')
        sys.exit(1)

    # Initialize the board with all zeros
    board = [[0 for _ in range(N)] for _ in range(N)]
    n_queens(board, 0)
