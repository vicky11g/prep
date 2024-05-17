/**
 * @param {str} s
 * @return {list_str}
 * sample input = '1?0?'
 * output = ["1000", "1001", "1100", "1101"]
 */
export function find_all_possibilities(s) {
  let result = [];
  const helper = (ar, i, sr) => {
    console.log(ar)
    if (i === sr.length) {
      result.push(ar.slice().join(''));
      return;
    }
    if (sr[i] === '?') {
      ar.push(0);
      helper(ar, i + 1, sr);
      ar.pop();
      ar.push(1);
      helper(ar, i + 1, sr);
      ar.pop();
    } else {
      ar.push(sr[i]);
      helper(ar, i + 1, sr);
      ar.pop();
    }
  };
  helper([], 0, s);
  return result;
}
