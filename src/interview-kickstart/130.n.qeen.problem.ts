/**
 * @param {int32} n
 * @return {list_list_str}
 *
 * Given an integer n, find all possible ways to position n queens on an n×n chessboard
 * so that no two queens attack each other. A queen in chess can move horizontally,
 * vertically, or diagonally.
 */
export function find_all_arrangements(n) {
  let result = [];
  let c = Array(n)
    .fill('-')
    .map(() => Array(n).fill('-'));
  let col_o = Array(n).fill(0);
  let diagonal = Array(2 * n - 1).fill(0);
  let back_diagonal = Array(2 * n - 1).fill(0);

  const helper = (slate, row) => {
    if (row === n) {
      result.push([...c].map(m => m.join('')));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (!(col_o[col] || diagonal[row + col] || back_diagonal[row - col + n - 1])) {
        col_o[col] = 1;
        diagonal[row + col] = 1;
        back_diagonal[row - col + n - 1] = 1;
        c[row][col] = 'q';
        helper(slate, row + 1);
        c[row][col] = '-';
        col_o[col] = 0;
        diagonal[row + col] = 0;
        back_diagonal[row - col + n - 1] = 0;
      }
    }
  };
  helper([], 0);
  return result;
}
