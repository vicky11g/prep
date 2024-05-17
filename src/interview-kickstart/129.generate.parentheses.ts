/**
 * @param {list_int32} arr
 * @return {list_list_int32}
 */
export function get_all_valid_combinations(num) {
  let pMap = {
    '(': num,
    ')': num,
  };
  let result = [];
  const helper = (partial, sm) => {
    // console.log(partial);
    //backtracking case:
    if(sm[')'] < sm['(']) return;
    //base case:
    if (partial.length === num * 2) {
      result.push(partial.slice().join(''));
      return;
    }
    //recursion case:
    for (let k of Object.keys(sm)) {
      if (sm[k]) {
        partial.push(k);
        sm[k]--;
        helper(partial, sm);
        partial.pop();
        sm[k]++;
      }
    }
  };
  helper([], pMap);
  return result;
}
