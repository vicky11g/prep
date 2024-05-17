/**
 * @param {list_int32} arr
 * @param {int32} target
 * @return {list_list_int32}
 */
export function generate_all_combinations(arr, target) {
  let s = new Date().getTime();
  let result = [];
  let v = {};
  arr = arr.sort();
  const helper = (src, i, res, vis) => {
    if (getSum(res) === target && vis[[...res].join('')]) return;
    if (getSum(res) === target && !vis[[...res].join('')]) {
      vis[[...res].join('')] = 1;
      result.push([...res]);
    }
    if (i === src.length) return;
    helper(src, i + 1, res, vis);
    res.push(src[i]);
    helper(src, i + 1, res, vis);
    res.pop();
  };
  helper(arr, 0, [], v);
  let e = new Date().getTime();
  // console.log('Runtime: ', (e - s) / 1000, 'sec');
  return { result, Runtime: (e - s) / 1000 + 'sec' };
}

const getSum = arr =>
  arr.reduce((r, c) => {
    return (r += c);
  }, 0);
