/**
 * @param {list_int32} arr
 * @return {list_list_int32}
 */
export function get_permutations(arr) {
  let result = [];
  let helper = (j, ar) => {
    console.log(ar);
    if (j === arr.length) {
      result.push(ar.slice());
      return;
    }
    let status_map = {};
    for (let i = j; i < ar.length; i++) {
      if (!status_map[ar[i]]) {
        status_map[ar[i]] = 1;
        swap(i, j, ar);
        helper(j + 1, ar);
        swap(i, j, ar);
      }
    }
  };
  helper(0, arr);
  return result;
}
function swap(i, j, arr) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}


/**
 * @param {list_int32} arr
 * @return {list_list_int32}
 */
export function _get_permutations(arr) {
  let result = [];
  let frequencyMap = {};
  for(let i = 0; i < arr.length; i++) {
      frequencyMap[arr[i]] = frequencyMap[arr[i]] ? frequencyMap[arr[i]]+1: 1; 
  }
  let helper = (sl,fm) => {
      console.log(sl,fm)
       if (sl.length === arr.length) {
           result.push(sl.slice());
           return;
       }
       for (let k of Object.keys(fm)) {
           if(fm[k]) {
               sl.push(+k);
               fm[k]--;
               helper(sl,fm);
               sl.pop(k);
               fm[k]++;
           }
       }
  }
  helper([],frequencyMap);
  return result
}

