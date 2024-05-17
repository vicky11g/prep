//[ [ 1, 5 ], [ 10, 15 ], [ 8, 10 ], [ 5, 8 ] ]
export const sortInterval = (arr) => {
  arr.sort((a, b) => a[0] - b[0]);
  return arr;
}