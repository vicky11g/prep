/**
 * BUBBLE SORT
 */

export const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let k = arr.length - 1; k > i; k--) {
      if (arr[k] < arr[k - 1]) {
        [arr[k], arr[k - 1]] = [arr[k - 1], arr[k]];
        // const t = arr[k];
        // arr[k] = arr[k - 1];
        // arr[k - 1] = t;
      }
    }
  }
  return arr;
};
