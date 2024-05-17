/**
 * @param {int32} n
 * @return {list_list_str}
 * 
 * Given an integer n, find all possible ways to position n queens on an n×n chessboard 
 * so that no two queens attack each other. A queen in chess can move horizontally, 
 * vertically, or diagonally.
 */
export function find_all_arrangements(n) {
  let result = []//Array(n).fill(0).map(() => Array(n).fill(0));
  let st = {};
  const helper = (slate, i) => {
    if (i === n) {
      result.push([...slate]);
      return;
    }
    let m = {};
    for (let k = i; k < n; k++) {
      if (m[k]) return;
      m[k] = k;
      slate.push(k);
      helper(slate, i + 1);
      slate.pop();
    }
  }
  helper([], 0)
  return result;
}