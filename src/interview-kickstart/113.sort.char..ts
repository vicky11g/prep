export function sort_array(arr) {
  let m = 0;
  for (let i = 0; i < arr.length; i++)
    m = Math.max(arr[i].charCodeAt(0), m);
  let carr = new Array(m + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    carr[arr[i].charCodeAt(0)]++;
  }
  for (let i = 1; i < carr.length; i++) {
    carr[i] += carr[i - 1];
  }
  const rArr = new Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    rArr[carr[arr[i].charCodeAt(0)] - 1] = arr[i];
    carr[arr[i].charCodeAt(0)]--;
  }

  return rArr;
}