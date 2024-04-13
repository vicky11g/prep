/**
 * SELECTION SORT
 * */

export const selectionSort = (arr: any[]) => {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minIdx = i;
    for (let j = i+1; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        minIdx = j;
      }
    }
    const t = arr[i];
    arr[i] = min;
    arr[minIdx] = t;
  }
  return arr;
};
