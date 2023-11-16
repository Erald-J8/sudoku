const validateSudoku = (grid) => {

    // validate board dimensions
    const size = grid.length;
    const sqrt = Math.sqrt(size);
    if (size <= 0 || sqrt !== Math.floor(sqrt)) {
        console.log("Invalid Sudoku grid size")
        return false
    }

    // use a set to store the previous results and access it's values easily in constant time O(1)
    const set = new Set();

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            const cell = grid[i][j];

            // store the results for each row, column & box as strings so that we need to initialize the set only once
            const row = `row: ${i}, value: ${cell}`;
            const column = `column: ${j}, value: ${cell}`;
            
            // a box has always 3x3 dimensions, so in order to calculate the current box that we're currently checking
            // we multiply & divide the current indexes by 3 to get the correct number
            const boxNumber = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            const box = `boxNumber: ${boxNumber}, value: ${cell}`;

            if(set.has(row) || set.has(column) || set.has(box)) return false

            set.add(row).add(column).add(box);
        }
    }

    return true
};

const sudokuGrid = [
    [7,8,4,  1,5,9,  3,2,6],
    [5,3,9,  6,7,2,  8,4,1],
    [6,1,2,  4,3,8,  7,5,9],

    [9,2,8,  7,1,5,  4,6,3],
    [3,5,7,  8,4,6,  1,9,2],
    [4,6,1,  9,2,3,  5,8,7],

    [8,7,6,  3,9,4,  2,1,5],
    [2,4,3,  5,6,1,  9,7,8],
    [1,9,5,  2,8,7,  6,3,4]
]

const result = validateSudoku(sudokuGrid)
if (result) {
    console.log('Valid Sudoku!')
} else {
    console.log('Invalid Sudoku!')

}
