// Question 2:- Valid Sudoku

function isValidSudoku(board) {
    // Check rows
    for (let i = 0; i < 9; i++) {
        let seen = new Set();
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                if (seen.has(board[i][j])) return false;
                seen.add(board[i][j]);
            }
        }
    }
    
    // Check columns
    for (let j = 0; j < 9; j++) {
        let seen = new Set();
        for (let i = 0; i < 9; i++) {
            if (board[i][j] !== '.') {
                if (seen.has(board[i][j])) return false;
                seen.add(board[i][j]);
            }
        }
    }
    
    // Check sub-grids
    for (let block = 0; block < 9; block++) {
        let seen = new Set();
        for (let i = Math.floor(block / 3) * 3; i < Math.floor(block / 3) * 3 + 3; i++) {
            for (let j = (block % 3) * 3; j < (block % 3) * 3 + 3; j++) {
                if (board[i][j] !== '.') {
                    if (seen.has(board[i][j])) return false;
                    seen.add(board[i][j]);
                }
            }
        }
    }
    
    return true;
}

// Example usage
let board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

console.log(isValidSudoku(board)); // Output: true
  