/**
 * @param {list_list_int32} board
 * @return {list_list_int32}
 */
export function solve_sudoku_puzzle(board) {
  let helper = (bd) => {
    let unfilledCell = null;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (!bd[i][j]) {
          unfilledCell = [i, j];
          break;
        }
      }
      if (unfilledCell) break;
    }
    // console.log(unfilledCell)
    if (!unfilledCell) return true;

    for (let i = 1; i < 10; i++) {
      if (isSafe(unfilledCell[0], unfilledCell[1], i, bd)) {
        // console.log(unfilledCell);
        bd[unfilledCell[0]][unfilledCell[1]] = i;
        if (helper(bd)) return true;
        else bd[unfilledCell[0]][unfilledCell[1]] = 0;
      }
    }
    return false;
  };

  let isSafe = (row, col, v, b) => {
    // Validate row | col:
    for (let i = 0; i < 9; i++) {
      // console.log(row,col,v,board[row][i])
      if (b[row][i] === v) return false;
      if (b[i][col] === v) return false;
    }

    // Validate sub grid:
    let brs = row - (row % 3);
    let bcs = col - (col % 3);
    for (let i = brs; i < brs + 3; i++)
      for (let j = bcs; j < bcs + 3; j++)
        if (b[i][j] === v) { return false; }
    return true;
  };
  helper(board);
  return board.map((m) => m.join(' '));
}
