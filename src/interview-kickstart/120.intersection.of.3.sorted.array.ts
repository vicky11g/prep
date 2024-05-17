/**
 * @param {list_int32} arr1
 * @param {list_int32} arr2
 * @param {list_int32} arr3
 * @return {list_int32}
 */
export function find_intersection(arr1, arr2, arr3) {
  // Write your code here.
  if (arr1.length === 0 || arr2.length === 0 || arr3.length === 0) return [-1];
  let one = 0,
    two = 0,
    three = 0,
    r = [];
  while (one < arr1.length && two < arr2.length && three < arr3.length) {
    console.log(one, two, three);
    if (arr1[one] === arr2[two] && arr2[two] === arr3[three]) {
      r.push(arr1[one]);
    }
    const min = Math.min(arr1[one], arr2[two], arr3[three]);
    if (arr1[one] === min) one++;
    if (arr2[two] === min) two++;
    if (arr3[three] === min) three++;

  }
  return r.length ? r : [-1];
}
