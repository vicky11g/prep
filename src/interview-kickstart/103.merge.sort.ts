/**
 * SELECTION SORT
 */

export const mergeSort = arr => {
  return helper(arr);
};

const helper = (arr: number[]) => {
  if (arr.length === 1) return arr;

  const sortedLeft = helper(arr.slice(0, Math.floor(arr.length / 2)));
  const sortedRight = helper(arr.slice(Math.floor(arr.length / 2), arr.length));
  return merge(sortedLeft, sortedRight);
};

const merge = (l: number[], r: number[]) => {
  let a = [];
  let li = 0;
  let ri = 0;
  while (li < l.length && ri < r.length) {
    if (l[li] < r[ri]) {
      a.push(l[li]);
      li++
    } else {
      a.push(r[ri]);
      ri++;
    }
  }
  // console.log(l, r);
  a = a.concat(l.slice(li),r.slice(ri))
  return a;
}
